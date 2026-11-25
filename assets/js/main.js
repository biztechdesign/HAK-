/* ==========================================================================
   HAK Plus — Shared website interactions (v0.1.0)
   Vanilla JS, no dependencies. Behaviour is attached through data attributes
   and ARIA so every page can reuse it. Call HK.init(root) for injected markup.
   No function here talks to a backend: submissions, quotes and wishlists are
   front-end demonstrations until business rules are confirmed.
   ========================================================================== */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const isRTL = (el) => (el.closest('[dir]')?.getAttribute('dir') || document.documentElement.dir) === 'rtl';
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let uid = 0;
  const id = (prefix) => `${prefix}-${++uid}`;
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------------------------------------------------------------------
     Toasts (role=status live region)
     --------------------------------------------------------------------- */
  function toastRegion() {
    let region = $('.hk-toast-region');
    if (!region) {
      region = document.createElement('div');
      region.className = 'hk-toast-region';
      region.setAttribute('role', 'status');
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
    }
    return region;
  }
  function toast(message, opts = {}) {
    const type = opts.type || 'info';
    const icon = { success: 'check_circle', error: 'error', warning: 'warning', info: 'info' }[type];
    const el = document.createElement('div');
    el.className = `hk-toast hk-toast--${type}`;
    el.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">${icon}</span>
      <p class="hk-toast__msg">${escapeHTML(message)}</p>
      <button type="button" class="hk-toast__close" aria-label="Dismiss notification"><span class="material-symbols-rounded icon-20" aria-hidden="true">close</span></button>`;
    const remove = () => {
      if (reduceMotion()) return el.remove();
      el.classList.add('is-leaving');
      el.addEventListener('animationend', () => el.remove(), { once: true });
    };
    el.querySelector('.hk-toast__close').addEventListener('click', remove);
    toastRegion().appendChild(el);
    const timer = setTimeout(remove, opts.duration || 5000);
    el.addEventListener('mouseenter', () => clearTimeout(timer), { once: true });
    el.addEventListener('focusin', () => clearTimeout(timer), { once: true });
    return el;
  }

  /* ---------------------------------------------------------------------
     Announcement bar
     --------------------------------------------------------------------- */
  function initAnnouncements(root) {
    $$('[data-hk-announce-close]', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      btn.addEventListener('click', () => {
        const bar = btn.closest('[data-hk-announce]');
        bar.hidden = true;
        bar.dispatchEvent(new CustomEvent('hk:announce-dismissed', { bubbles: true }));
      });
    });
  }

  /* ---------------------------------------------------------------------
     Tabs — automatic activation, arrow keys (RTL aware), Home/End
     --------------------------------------------------------------------- */
  function initTabs(root) {
    $$('[role="tablist"]', root).forEach((list) => {
      if (list.dataset.hkBound) return; list.dataset.hkBound = '1';
      const tabs = () => $$('[role="tab"]', list).filter((t) => !t.disabled);
      const select = (tab, focus = true) => {
        $$('[role="tab"]', list).forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', String(on));
          t.tabIndex = on ? 0 : -1;
          const panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !on;
        });
        if (focus) tab.focus();
        list.dispatchEvent(new CustomEvent('hk:tab-change', { bubbles: true, detail: { tab } }));
      };
      $$('[role="tab"]', list).forEach((t) => {
        t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1;
        t.addEventListener('click', () => select(t, false));
      });
      list.addEventListener('keydown', (e) => {
        const all = tabs();
        const i = all.indexOf(document.activeElement);
        if (i < 0) return;
        const rtl = isRTL(list);
        const vertical = list.getAttribute('aria-orientation') === 'vertical';
        const next = vertical ? 'ArrowDown' : (rtl ? 'ArrowLeft' : 'ArrowRight');
        const prev = vertical ? 'ArrowUp' : (rtl ? 'ArrowRight' : 'ArrowLeft');
        let target;
        if (e.key === next) target = all[(i + 1) % all.length];
        else if (e.key === prev) target = all[(i - 1 + all.length) % all.length];
        else if (e.key === 'Home') target = all[0];
        else if (e.key === 'End') target = all[all.length - 1];
        if (target) { e.preventDefault(); select(target); }
      });
    });
  }

  /* ---------------------------------------------------------------------
     Accordion / disclosure — closed panels are inert
     --------------------------------------------------------------------- */
  function setDisclosure(trigger, open) {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', String(open));
    if (!panel) return;
    panel.dataset.open = String(open);
    if (open) panel.removeAttribute('inert'); else panel.setAttribute('inert', '');
  }
  function initAccordions(root) {
    $$('.hk-accordion__trigger, [data-hk-disclosure]', root).forEach((trigger) => {
      if (trigger.dataset.hkBound) return; trigger.dataset.hkBound = '1';
      setDisclosure(trigger, trigger.getAttribute('aria-expanded') === 'true');
      trigger.addEventListener('click', () => {
        const open = trigger.getAttribute('aria-expanded') !== 'true';
        const group = trigger.closest('[data-hk-accordion-single]');
        if (open && group) $$('.hk-accordion__trigger[aria-expanded="true"]', group).forEach((t) => t !== trigger && setDisclosure(t, false));
        setDisclosure(trigger, open);
      });
    });
    $$('.hk-footer__acc-trigger', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      btn.addEventListener('click', () => {
        const col = btn.closest('.hk-footer__col');
        const open = !col.classList.contains('is-open');
        col.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
    });
  }

  /* ---------------------------------------------------------------------
     Dropdown menus & popovers — click/keyboard, Escape, outside click
     --------------------------------------------------------------------- */
  function initDropdowns(root) {
    $$('[data-hk-dropdown]', root).forEach((wrap) => {
      if (wrap.dataset.hkBound) return; wrap.dataset.hkBound = '1';
      const trigger = $('[aria-haspopup], [aria-expanded]', wrap);
      const surface = $('.hk-menu, .hk-popover', wrap);
      const isMenu = surface.classList.contains('hk-menu');
      const items = () => $$('[role^="menuitem"]', surface);
      const open = (focusFirst) => {
        surface.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        if (isMenu && focusFirst) (items().find((i) => i.getAttribute('aria-checked') === 'true') || items()[0])?.focus();
        if (!isMenu && focusFirst) (surface.querySelector('a, button, input, [tabindex]') || surface).focus();
      };
      const close = (returnFocus) => {
        if (!surface.classList.contains('is-open')) return;
        surface.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        if (returnFocus) trigger.focus();
      };
      trigger.addEventListener('click', () => (surface.classList.contains('is-open') ? close(false) : open(false)));
      trigger.addEventListener('keydown', (e) => {
        if (isMenu && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) { e.preventDefault(); open(true); }
      });
      surface.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { e.preventDefault(); close(true); return; }
        if (!isMenu) return;
        const all = items(); const i = all.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); all[(i + 1) % all.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); all[(i - 1 + all.length) % all.length].focus(); }
        if (e.key === 'Home') { e.preventDefault(); all[0].focus(); }
        if (e.key === 'End') { e.preventDefault(); all[all.length - 1].focus(); }
        if (e.key === 'Tab') close(false);
      });
      if (isMenu) {
        items().forEach((item) => {
          item.tabIndex = -1;
          item.addEventListener('click', () => {
            if (item.getAttribute('role') === 'menuitemradio') {
              items().forEach((o) => o.getAttribute('role') === 'menuitemradio' && o.setAttribute('aria-checked', 'false'));
              item.setAttribute('aria-checked', 'true');
              const label = $('[data-hk-dropdown-value]', wrap);
              if (label) label.textContent = item.textContent.trim();
              wrap.dispatchEvent(new CustomEvent('hk:select', { bubbles: true, detail: { value: item.dataset.value, label: item.textContent.trim() } }));
            }
            close(true);
          });
        });
      }
      document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close(false); });
    });

    // Tooltips: Escape dismisses without moving focus (WCAG 1.4.13)
    $$('.hk-tooltip-wrap', root).forEach((wrap) => {
      if (wrap.dataset.hkBound) return; wrap.dataset.hkBound = '1';
      wrap.addEventListener('keydown', (e) => { if (e.key === 'Escape') wrap.classList.add('is-dismissed'); });
      wrap.addEventListener('mouseleave', () => wrap.classList.remove('is-dismissed'));
      wrap.addEventListener('focusout', () => wrap.classList.remove('is-dismissed'));
    });
  }

  /* ---------------------------------------------------------------------
     Dialogs (native <dialog>): modal, drawer, sheet, lightbox
     --------------------------------------------------------------------- */
  const openers = new WeakMap();
  function openDialog(dialog, opener) {
    if (typeof dialog === 'string') dialog = document.getElementById(dialog);
    if (!dialog || dialog.open) return;
    openers.set(dialog, opener || document.activeElement);
    dialog.showModal();
    document.body.classList.add('hk-scroll-locked');
    const auto = dialog.querySelector('[autofocus]') || dialog.querySelector('.hk-dialog__close') || dialog;
    auto.focus();
    dialog.dispatchEvent(new CustomEvent('hk:dialog-open', { bubbles: true }));
  }
  function closeDialog(dialog) {
    if (typeof dialog === 'string') dialog = document.getElementById(dialog);
    if (dialog && dialog.open) dialog.close();
  }
  function initDialogs(root) {
    $$('[data-hk-dialog-open]', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      btn.setAttribute('aria-haspopup', 'dialog');
      btn.addEventListener('click', () => openDialog(btn.dataset.hkDialogOpen, btn));
    });
    $$('dialog.hk-dialog', root).forEach((dialog) => {
      if (dialog.dataset.hkBound) return; dialog.dataset.hkBound = '1';
      // Clean up when the dialog closes by any route (button, Escape, form method="dialog", script).
      // Observing the `open` attribute runs as a microtask, so it doesn't depend on the async `close` event.
      new MutationObserver(() => {
        if (dialog.open) return;
        if (!$('dialog[open]')) document.body.classList.remove('hk-scroll-locked');
        const opener = openers.get(dialog);
        openers.delete(dialog);
        if (opener && typeof opener.focus === 'function' && opener.isConnected) opener.focus();
      }).observe(dialog, { attributes: true, attributeFilter: ['open'] });
      // Backdrop click closes (click lands on the <dialog> element itself, outside its box)
      dialog.addEventListener('click', (e) => {
        if (e.target !== dialog || dialog.hasAttribute('data-hk-no-backdrop-close')) return;
        const r = dialog.getBoundingClientRect();
        const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (!inside) dialog.close();
      });
      $$('[data-hk-dialog-close]', dialog).forEach((b) => b.addEventListener('click', () => dialog.close(b.value || '')));
    });
  }

  /* ---------------------------------------------------------------------
     Mobile navigation — nested sliding panels
     --------------------------------------------------------------------- */
  function initMobileNav(root) {
    $$('.hk-mnav', root).forEach((nav) => {
      if (nav.dataset.hkBound) return; nav.dataset.hkBound = '1';
      const history = [];
      const show = (panel, from, back) => {
        $$('.hk-mnav__panel', nav).forEach((p) => p.classList.remove('is-active', 'is-behind'));
        panel.classList.add('is-active');
        if (from && !back) from.classList.add('is-behind');
        const focusTarget = panel.querySelector('.hk-mnav__back, .hk-mnav__item');
        setTimeout(() => focusTarget && focusTarget.focus(), reduceMotion() ? 0 : 60);
      };
      $$('[data-hk-mnav-target]', nav).forEach((btn) => btn.addEventListener('click', () => {
        const current = btn.closest('.hk-mnav__panel');
        history.push({ panel: current, trigger: btn });
        show(document.getElementById(btn.dataset.hkMnavTarget), current, false);
      }));
      $$('[data-hk-mnav-back]', nav).forEach((btn) => btn.addEventListener('click', () => {
        const prev = history.pop();
        if (!prev) return;
        show(prev.panel, null, true);
        setTimeout(() => prev.trigger.focus(), reduceMotion() ? 0 : 70);
      }));
      const dialog = nav.closest('dialog');
      if (dialog) dialog.addEventListener('close', () => {
        history.length = 0;
        const first = $('.hk-mnav__panel', nav);
        $$('.hk-mnav__panel', nav).forEach((p) => p.classList.remove('is-active', 'is-behind'));
        first.classList.add('is-active');
      });
    });
  }

  /* ---------------------------------------------------------------------
     Mega menu — click/Enter/Space to open, hover enhancement on fine pointers,
     Escape closes and returns focus, focus leaving closes.
     --------------------------------------------------------------------- */
  function initMegaMenus(root) {
    $$('[data-hk-mega-trigger]', root).forEach((trigger) => {
      if (trigger.dataset.hkBound) return; trigger.dataset.hkBound = '1';
      const mega = document.getElementById(trigger.getAttribute('aria-controls'));
      const container = trigger.closest('[data-hk-mega-scope]') || trigger.closest('header') || document.body;
      let hoverTimer;
      const open = () => { mega.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true'); mega.removeAttribute('inert'); };
      const close = (returnFocus) => {
        mega.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); mega.setAttribute('inert', '');
        if (returnFocus) trigger.focus();
      };
      close(false);
      trigger.addEventListener('click', () => (mega.classList.contains('is-open') ? close(false) : open()));
      trigger.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown') { e.preventDefault(); open(); (mega.querySelector('[role="tab"][aria-selected="true"]') || mega.querySelector('a, button')).focus(); } });
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const zone = [trigger, mega];
        zone.forEach((el) => {
          el.addEventListener('mouseenter', () => { clearTimeout(hoverTimer); hoverTimer = setTimeout(open, 120); });
          el.addEventListener('mouseleave', () => { clearTimeout(hoverTimer); hoverTimer = setTimeout(() => close(false), 220); });
        });
      }
      container.addEventListener('keydown', (e) => { if (e.key === 'Escape' && mega.classList.contains('is-open')) { e.preventDefault(); close(true); } });
      container.addEventListener('focusout', (e) => {
        const next = e.relatedTarget;
        if (!mega.classList.contains('is-open') || !next) return;
        if (!mega.contains(next) && next !== trigger) close(false);
      });
      document.addEventListener('click', (e) => { if (!mega.contains(e.target) && e.target !== trigger && !trigger.contains(e.target)) close(false); });
    });
  }

  /* ---------------------------------------------------------------------
     Colour swatches — radiogroup with roving tabindex
     --------------------------------------------------------------------- */
  function initSwatches(root) {
    $$('.hk-swatches[role="radiogroup"]', root).forEach((group) => {
      if (group.dataset.hkBound) return; group.dataset.hkBound = '1';
      const swatches = () => $$('[role="radio"]', group);
      const enabled = () => swatches().filter((s) => s.getAttribute('aria-disabled') !== 'true');
      const label = group.parentElement.querySelector('[data-hk-swatch-label]');
      const select = (s, focus) => {
        if (s.getAttribute('aria-disabled') === 'true') {
          toast(`${s.getAttribute('aria-label')} is not currently available.`, { type: 'warning' });
          return;
        }
        swatches().forEach((o) => { const on = o === s; o.setAttribute('aria-checked', String(on)); o.tabIndex = on ? 0 : -1; });
        if (label) label.textContent = `Colour: ${s.getAttribute('aria-label').replace(/\s*\(.*\)$/, '')}`;
        if (focus) s.focus();
      };
      const current = swatches().find((s) => s.getAttribute('aria-checked') === 'true') || enabled()[0];
      swatches().forEach((s) => { s.tabIndex = s === current ? 0 : -1; s.addEventListener('click', () => select(s, false)); });
      group.addEventListener('keydown', (e) => {
        const all = enabled(); const i = all.indexOf(document.activeElement);
        if (i < 0) return;
        const rtl = isRTL(group);
        const fwd = ['ArrowDown', rtl ? 'ArrowLeft' : 'ArrowRight'];
        const back = ['ArrowUp', rtl ? 'ArrowRight' : 'ArrowLeft'];
        if (fwd.includes(e.key)) { e.preventDefault(); select(all[(i + 1) % all.length], true); }
        if (back.includes(e.key)) { e.preventDefault(); select(all[(i - 1 + all.length) % all.length], true); }
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); select(document.activeElement, true); }
      });
    });
  }

  /* ---------------------------------------------------------------------
     Wishlist toggle (front-end only)
     --------------------------------------------------------------------- */
  function initWishlist(root) {
    $$('[data-hk-wishlist]', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      const name = btn.dataset.name || 'product';
      const sync = () => {
        const on = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-label', on ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`);
      };
      sync();
      btn.addEventListener('click', () => {
        const on = btn.getAttribute('aria-pressed') !== 'true';
        btn.setAttribute('aria-pressed', String(on));
        sync();
        toast(on ? `${name} saved to wishlist (demonstration — not stored).` : `${name} removed from wishlist.`, { type: on ? 'success' : 'info' });
      });
    });
  }

  /* ---------------------------------------------------------------------
     Quantity stepper with MOQ
     --------------------------------------------------------------------- */
  function initSteppers(root) {
    $$('[data-hk-stepper]', root).forEach((wrap) => {
      if (wrap.dataset.hkBound) return; wrap.dataset.hkBound = '1';
      const input = $('input', wrap);
      const dec = $('[data-hk-step="down"]', wrap);
      const inc = $('[data-hk-step="up"]', wrap);
      const msg = document.getElementById(wrap.dataset.hkStepperMsg);
      const min = Number(input.min) || 1; const max = Number(input.max) || Infinity; const step = Number(input.step) || 1;
      const unit = wrap.dataset.unit || 'pieces';
      const update = (val, announce) => {
        let v = Math.round(Number(val));
        if (!Number.isFinite(v)) v = min;
        const below = v < min;
        v = Math.min(Math.max(v, min), max);
        input.value = v;
        dec.disabled = v <= min; inc.disabled = v >= max;
        if (msg && announce) {
          msg.textContent = below ? `Minimum order quantity is ${min.toLocaleString('en-AE')} ${unit}. Quantity set to the minimum.` : '';
          msg.classList.toggle('hk-field-msg--error', below);
        }
      };
      dec.addEventListener('click', () => update(Number(input.value) - step, true));
      inc.addEventListener('click', () => update(Number(input.value) + step, true));
      input.addEventListener('change', () => update(input.value, true));
      update(input.value, false);
    });
  }

  /* ---------------------------------------------------------------------
     Switches, password visibility, file upload
     --------------------------------------------------------------------- */
  function initControls(root) {
    $$('[role="switch"]', root).forEach((sw) => {
      if (sw.dataset.hkBound) return; sw.dataset.hkBound = '1';
      sw.addEventListener('click', () => sw.setAttribute('aria-checked', String(sw.getAttribute('aria-checked') !== 'true')));
    });
    $$('[data-hk-password-toggle]', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      const input = document.getElementById(btn.getAttribute('aria-controls'));
      btn.addEventListener('click', () => {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.setAttribute('aria-pressed', String(show));
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
        $('.material-symbols-rounded', btn).textContent = show ? 'visibility_off' : 'visibility';
      });
    });
    $$('.hk-file input[type="file"]', root).forEach((input) => {
      if (input.dataset.hkBound) return; input.dataset.hkBound = '1';
      const zone = input.closest('.hk-file');
      const list = document.getElementById(input.dataset.hkFileList);
      const err = document.getElementById(input.dataset.hkFileError);
      const maxMB = Number(input.dataset.maxMb) || 10;
      const render = () => {
        if (!list) return;
        list.innerHTML = '';
        const errors = [];
        Array.from(input.files).forEach((f) => {
          const tooBig = f.size > maxMB * 1024 * 1024;
          if (tooBig) errors.push(`${f.name} is larger than ${maxMB} MB.`);
          const li = document.createElement('li');
          li.className = 'hk-file__item';
          li.innerHTML = `<span class="material-symbols-rounded icon-20" aria-hidden="true">${tooBig ? 'error' : 'draft'}</span><span>${escapeHTML(f.name)}</span><span class="hk-caption hk-text-muted hk-num">${(f.size / 1024 / 1024).toFixed(1)} MB</span>`;
          list.appendChild(li);
        });
        if (err) { err.hidden = !errors.length; err.querySelector('span:last-child').textContent = errors.join(' '); }
        input.setAttribute('aria-invalid', String(errors.length > 0));
      };
      input.addEventListener('change', render);
      ['dragenter', 'dragover'].forEach((ev) => zone.addEventListener(ev, () => zone.classList.add('is-dragover')));
      ['dragleave', 'drop'].forEach((ev) => zone.addEventListener(ev, () => zone.classList.remove('is-dragover')));
    });
  }

  /* ---------------------------------------------------------------------
     Form validation (front-end only; never fakes a submission)
     --------------------------------------------------------------------- */
  const messages = {
    valueMissing: (f) => `Enter ${f.dataset.hkName || 'this field'}.`,
    typeMismatch: (f) => (f.type === 'email' ? 'Enter an email address in the format name@company.com.' : `Enter a valid ${f.dataset.hkName || 'value'}.`),
    patternMismatch: (f) => f.dataset.hkPatternMsg || 'Check the format of this field.',
    rangeUnderflow: (f) => `Enter ${f.min} or more.`,
    rangeOverflow: (f) => `Enter ${f.max} or less.`,
    tooShort: (f) => `Use at least ${f.minLength} characters.`,
  };
  function fieldError(field) {
    if (field.type === 'checkbox' && field.required && !field.checked) return field.dataset.hkRequiredMsg || 'Tick this box to continue.';
    if (field.type === 'file' && field.getAttribute('aria-invalid') === 'true') return 'Remove files that are too large.';
    const v = field.validity;
    for (const key of Object.keys(messages)) if (v[key]) return messages[key](field);
    return '';
  }
  function showFieldError(field, text) {
    const errId = field.getAttribute('aria-errormessage') || `${field.id}-error`;
    let err = document.getElementById(errId);
    const group = field.closest('.hk-input-group');
    if (!err) {
      err = document.createElement('p');
      err.id = errId; err.className = 'hk-field-msg hk-field-msg--error';
      (group || field.closest('.hk-check') || field).insertAdjacentElement('afterend', err);
    }
    if (text) {
      err.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">error</span><span>${escapeHTML(text)}</span>`;
      err.hidden = false;
      field.setAttribute('aria-invalid', 'true');
      const describedBy = new Set((field.getAttribute('aria-describedby') || '').split(' ').filter(Boolean));
      describedBy.add(errId);
      field.setAttribute('aria-describedby', Array.from(describedBy).join(' '));
      group && group.classList.add('is-invalid');
    } else {
      err.hidden = true;
      field.removeAttribute('aria-invalid');
      group && group.classList.remove('is-invalid');
    }
  }
  function initForms(root) {
    $$('form[data-hk-validate]', root).forEach((form) => {
      if (form.dataset.hkBound) return; form.dataset.hkBound = '1';
      form.noValidate = true;
      const fields = () => $$('input, select, textarea', form).filter((f) => f.type !== 'hidden' && !f.disabled && f.type !== 'search');
      const summary = $('[data-hk-form-summary]', form);
      let attempted = false;
      fields().forEach((f) => {
        f.addEventListener('blur', () => { if (attempted || f.value) showFieldError(f, fieldError(f)); });
        f.addEventListener('input', () => { if (f.getAttribute('aria-invalid') === 'true') showFieldError(f, fieldError(f)); });
        f.addEventListener('change', () => { if (attempted) showFieldError(f, fieldError(f)); });
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        attempted = true;
        const invalid = fields().filter((f) => { const msg = fieldError(f); showFieldError(f, msg); return !!msg; });
        if (!invalid.length && form.hasAttribute('data-hk-custom-success')) {
          if (summary) summary.hidden = true;
          form.dispatchEvent(new CustomEvent('hk:valid', { bubbles: true }));
          return;
        }
        if (summary) {
          summary.hidden = false;
          if (invalid.length) {
            summary.className = 'hk-alert hk-alert--error';
            summary.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">error</span><div class="hk-alert__body"><p class="hk-alert__title">${invalid.length} ${invalid.length === 1 ? 'field needs' : 'fields need'} attention</p><ul style="padding-inline-start:1.1rem;margin-block-start:4px">${invalid.map((f) => `<li><a class="hk-link" href="#${f.id}">${escapeHTML(f.dataset.hkName ? f.dataset.hkName.charAt(0).toUpperCase() + f.dataset.hkName.slice(1) : f.name)}</a></li>`).join('')}</ul></div>`;
          } else {
            summary.className = 'hk-alert hk-alert--info';
            summary.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">info</span><div class="hk-alert__body"><p class="hk-alert__title">All fields are valid</p><p>This is a design-system demonstration. Nothing has been sent, and no enquiry or quotation has been created.</p></div>`;
          }
          summary.tabIndex = -1;
          summary.focus();
        } else if (invalid.length) {
          invalid[0].focus();
        }
        $$('a[href^="#"]', summary || form).forEach((a) => a.addEventListener('click', (ev) => { ev.preventDefault(); document.getElementById(a.getAttribute('href').slice(1)).focus(); }));
      });
      form.addEventListener('reset', () => {
        attempted = false;
        setTimeout(() => { fields().forEach((f) => showFieldError(f, '')); if (summary) summary.hidden = true; $$('.hk-file__list', form).forEach((l) => (l.innerHTML = '')); });
      });
    });
  }

  /* ---------------------------------------------------------------------
     Search combobox (ARIA 1.2 combobox + listbox), local data only
     HK.searchData = [{ type:'product'|'category', name, sku?, category?, img?, href? }]
     --------------------------------------------------------------------- */
  function highlight(text, q) {
    const safe = escapeHTML(text);
    if (!q) return safe;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return safe;
    return `${escapeHTML(text.slice(0, i))}<mark>${escapeHTML(text.slice(i, i + q.length))}</mark>${escapeHTML(text.slice(i + q.length))}`;
  }
  function initSearch(root) {
    $$('[data-hk-search]', root).forEach((wrap) => {
      if (wrap.dataset.hkBound) return; wrap.dataset.hkBound = '1';
      const input = $('input', wrap);
      const panel = $('.hk-search__panel', wrap);
      const clear = $('.hk-search__clear', wrap);
      const status = $('[data-hk-search-status]', wrap);
      const recentKey = 'hk-recent-searches';
      const popular = (wrap.dataset.popular || 'Thermal bottles,Notebooks,Power banks,Jute bags,Lanyards').split(',');
      const listId = panel.id || (panel.id = id('hk-search-list'));
      input.setAttribute('role', 'combobox');
      input.setAttribute('aria-autocomplete', 'list');
      input.setAttribute('aria-expanded', 'false');
      input.setAttribute('aria-controls', listId);
      let active = -1; let timer;

      const options = () => $$('[role="option"]', panel);
      const setActive = (i) => {
        const all = options();
        all.forEach((o, n) => o.setAttribute('aria-selected', String(n === i)));
        active = i;
        if (all[i]) { input.setAttribute('aria-activedescendant', all[i].id); all[i].scrollIntoView({ block: 'nearest' }); }
        else input.removeAttribute('aria-activedescendant');
      };
      const openPanel = () => { panel.hidden = false; input.setAttribute('aria-expanded', 'true'); };
      const closePanel = () => { panel.hidden = true; input.setAttribute('aria-expanded', 'false'); setActive(-1); };
      const announce = (text) => { if (status) status.textContent = text; };
      const option = (html, data) => `<li role="option" id="${id('hk-opt')}" class="hk-search__option" data-value="${escapeHTML(data)}">${html}</li>`;

      const renderEmpty = () => {
        const recent = store.get(recentKey, []);
        panel.innerHTML = `
          ${recent.length ? `<div class="hk-search__group" role="group" aria-label="Recent searches"><p class="hk-search__group-title" aria-hidden="true">Recent searches</p><ul class="hk-search__list" role="presentation">${recent.map((r) => option(`<span class="material-symbols-rounded" aria-hidden="true">history</span><span>${escapeHTML(r)}</span>`, r)).join('')}</ul></div>` : ''}
          <div class="hk-search__group" role="group" aria-label="Popular searches"><p class="hk-search__group-title" aria-hidden="true">Popular searches</p>
          <ul class="hk-search__list" role="presentation">${popular.map((p) => option(`<span class="material-symbols-rounded" aria-hidden="true">trending_up</span><span>${escapeHTML(p)}</span>`, p)).join('')}</ul></div>
          <p class="hk-search__footer hk-caption hk-text-muted">Search by product name, category or SKU (for example <span class="hk-num">HK91</span>). Demonstration data only.</p>`;
        setActive(-1);
      };
      const renderResults = (q) => {
        const data = (window.HK && window.HK.searchData) || [];
        const ql = q.toLowerCase().trim();
        const skuLike = /^hk[\s-]?\d/i.test(ql);
        const scope = wrap.dataset.scope || 'all';
        const skuHit = (d) => d.sku.toLowerCase().replace(/\s/g, '').includes(ql.replace(/[\s-]/g, ''));
        const cats = (scope === 'all' || scope === 'category') ? data.filter((d) => d.type === 'category' && d.name.toLowerCase().includes(ql)).slice(0, 3) : [];
        const prods = scope === 'category' ? [] : data.filter((d) => d.type === 'product' && (scope === 'sku' ? skuHit(d) : (d.name.toLowerCase().includes(ql) || skuHit(d) || d.category.toLowerCase().includes(ql)))).slice(0, 5);
        if (!cats.length && !prods.length) {
          panel.innerHTML = `<div class="hk-search__status"><span class="material-symbols-rounded" aria-hidden="true">search_off</span><span>No matches for “${escapeHTML(q)}”. Check the spelling or SKU, or browse a popular search.</span></div>
            <div class="hk-search__chips">${popular.slice(0, 4).map((p) => `<button type="button" class="hk-search__chip" data-fill="${escapeHTML(p)}">${escapeHTML(p)}</button>`).join('')}</div>`;
          $$('[data-fill]', panel).forEach((b) => b.addEventListener('click', () => { input.value = b.dataset.fill; update(); input.focus(); }));
          announce(`No results for ${q}`);
          setActive(-1);
          return;
        }
        panel.innerHTML = `
          ${cats.length ? `<div class="hk-search__group" role="group" aria-label="Categories"><p class="hk-search__group-title" aria-hidden="true">Categories</p><ul class="hk-search__list" role="presentation">${cats.map((c) => option(`<span class="material-symbols-rounded" aria-hidden="true">category</span><span>${highlight(c.name, q)}</span>`, c.name)).join('')}</ul></div>` : ''}
          ${prods.length ? `<div class="hk-search__group" role="group" aria-label="Products"><p class="hk-search__group-title" aria-hidden="true">${skuLike ? 'SKU matches' : 'Products'}</p><ul class="hk-search__list" role="presentation">${prods.map((p) => option(`<img class="hk-search__thumb" src="${p.img}" alt="" width="44" height="44" loading="lazy"><span><span>${highlight(p.name, q)}</span><span class="hk-search__meta">${highlight(p.sku, skuLike ? q.toUpperCase() : '')} · ${escapeHTML(p.category)}</span></span>`, p.name)).join('')}</ul></div>` : ''}
          <div class="hk-search__footer"><button type="button" class="hk-btn hk-btn--link" data-all>View all results for “${escapeHTML(q)}”</button></div>`;
        $('[data-all]', panel).addEventListener('click', () => choose(q));
        announce(`${cats.length + prods.length} suggestions available. Use up and down arrows to review.`);
        setActive(-1);
      };
      const update = () => {
        const q = input.value.trim();
        clear.hidden = !input.value;
        clearTimeout(timer);
        openPanel();
        if (!q) { renderEmpty(); return; }
        panel.innerHTML = '<div class="hk-search__status"><span class="hk-spinner hk-spinner--sm" aria-hidden="true"></span>Searching…</div>';
        timer = setTimeout(() => renderResults(q), 220); // simulated latency to demonstrate the loading state
      };
      const choose = (value) => {
        const recent = [value, ...store.get(recentKey, []).filter((r) => r !== value)].slice(0, 4);
        store.set(recentKey, recent);
        input.value = value;
        closePanel();
        toast(`Demonstration: this would open search results for “${value}”.`);
      };

      wrap.addEventListener('hk:select', (e) => {
        wrap.dataset.scope = e.detail.value;
        const label = wrap.querySelector('[data-hk-dropdown-value]');
        if (label) label.textContent = e.detail.value === 'all' ? 'Filters' : e.detail.label;
        if (input.value.trim()) { input.focus(); update(); }
      });
      input.addEventListener('focus', update);
      input.addEventListener('input', update);
      input.addEventListener('keydown', (e) => {
        const all = options();
        if (e.key === 'ArrowDown') { e.preventDefault(); if (panel.hidden) update(); else setActive(Math.min(active + 1, all.length - 1)); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(active - 1, -1)); }
        else if (e.key === 'Enter') { e.preventDefault(); if (all[active]) choose(all[active].dataset.value); else if (input.value.trim()) choose(input.value.trim()); }
        else if (e.key === 'Escape') { if (!panel.hidden) { e.preventDefault(); closePanel(); } else if (input.value) { input.value = ''; clear.hidden = true; } }
      });
      panel.addEventListener('mousedown', (e) => e.preventDefault()); // keep focus in input
      panel.addEventListener('click', (e) => { const opt = e.target.closest('[role="option"]'); if (opt) choose(opt.dataset.value); });
      clear.addEventListener('click', () => { input.value = ''; input.focus(); update(); });
      wrap.addEventListener('focusout', (e) => { if (!wrap.contains(e.relatedTarget)) closePanel(); });
      closePanel();
    });
  }

  /* ---------------------------------------------------------------------
     Images: fallback for broken sources
     --------------------------------------------------------------------- */
  function initImages(root) {
    $$('.hk-media > img', root).forEach((img) => {
      if (img.dataset.hkBound) return; img.dataset.hkBound = '1';
      const fail = () => img.parentElement.classList.add('is-broken');
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) fail();
      img.addEventListener('error', fail);
    });
  }

  /* ---------------------------------------------------------------------
     Buttons: loading state demo, back to top
     --------------------------------------------------------------------- */
  function setLoading(btn, loading) {
    btn.classList.toggle('is-loading', loading);
    btn.setAttribute('aria-busy', String(loading));
    if (loading) btn.setAttribute('aria-disabled', 'true'); else btn.removeAttribute('aria-disabled');
  }
  function initButtons(root) {
    $$('[data-hk-loading-demo]', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      btn.addEventListener('click', () => {
        if (btn.classList.contains('is-loading')) return;
        setLoading(btn, true);
        setTimeout(() => setLoading(btn, false), 1800);
      });
    });
    $$('.hk-backtop', root).forEach((btn) => {
      if (btn.dataset.hkBound) return; btn.dataset.hkBound = '1';
      const onScroll = () => btn.classList.toggle('is-visible', window.scrollY > 800);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      btn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' }); (document.querySelector('[data-hk-top-target]') || document.body).focus?.(); });
    });
  }

  /* ---------------------------------------------------------------------
     Init
     --------------------------------------------------------------------- */
  /* ---------------------------------------------------------------------
     Announcement ticker — manual previous/next, no autoplay; hidden items
     (e.g. expired campaigns) are skipped; hidden entirely when empty.
     --------------------------------------------------------------------- */
  function initTickers(root) {
    $$('[data-hk-ticker]', root).forEach((t) => {
      if (t.dataset.hkBound) return; t.dataset.hkBound = '1';
      const items = $$('[data-hk-ticker-item]', t).filter((i) => !i.hidden);
      if (!items.length) { t.hidden = true; return; }
      t.classList.toggle('is-single', items.length === 1);
      let i = 0;
      const show = (n) => { i = (n + items.length) % items.length; items.forEach((el, k) => el.classList.toggle('is-active', k === i)); };
      $('[data-hk-ticker-prev]', t).addEventListener('click', () => show(i - 1));
      $('[data-hk-ticker-next]', t).addEventListener('click', () => show(i + 1));
      show(0);
    });
  }

  /* ---------------------------------------------------------------------
     Carousel — manual scroll-snap; prev/next move one card; buttons
     disable at the ends; no autoplay. RTL-aware.
     --------------------------------------------------------------------- */
  function initCarousels(root) {
    $$('[data-hk-carousel]', root).forEach((c) => {
      if (c.dataset.hkBound) return; c.dataset.hkBound = '1';
      const track = $('[data-hk-carousel-track]', c);
      const prev = $('[data-hk-carousel-prev]', c);
      const next = $('[data-hk-carousel-next]', c);
      const dir = () => (isRTL(c) ? -1 : 1);
      const status = $('[data-hk-carousel-status]', c);
      const paged = c.hasAttribute('data-hk-carousel-paged');
      const gapPx = () => parseFloat(getComputedStyle(track).columnGap) || 0;
      const itemW = () => { const item = track.firstElementChild; return item ? item.getBoundingClientRect().width + gapPx() : track.clientWidth; };
      const perView = () => Math.max(1, Math.round((track.clientWidth + gapPx()) / itemW()));
      const step = () => (paged ? perView() * itemW() : itemW());
      const update = () => {
        const max = track.scrollWidth - track.clientWidth;
        const pos = Math.abs(track.scrollLeft);
        prev.disabled = pos <= 2;
        next.disabled = pos >= max - 2;
        c.classList.toggle('is-static', max <= 2);
        if (status) {
          const pages = Math.max(1, Math.ceil(track.children.length / perView()));
          const page = next.disabled ? pages : Math.min(pages, Math.floor(pos / (perView() * itemW()) + 0.5) + 1);
          status.textContent = `${page} / ${pages}`;
          status.setAttribute('aria-label', `Page ${page} of ${pages}`);
        }
      };
      prev.addEventListener('click', () => track.scrollBy({ left: -step() * dir(), behavior: reduceMotion() ? 'auto' : 'smooth' }));
      next.addEventListener('click', () => track.scrollBy({ left: step() * dir(), behavior: reduceMotion() ? 'auto' : 'smooth' }));
      track.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    });
  }

  function init(root = document) {
    initAnnouncements(root); initTabs(root); initAccordions(root); initDropdowns(root);
    initDialogs(root); initMobileNav(root); initMegaMenus(root); initSwatches(root);
    initWishlist(root); initSteppers(root); initControls(root); initForms(root);
    initSearch(root); initImages(root); initButtons(root); initTickers(root); initCarousels(root);
  }

  window.HK = Object.assign(window.HK || {}, { init, toast, openDialog, closeDialog, setLoading, setDisclosure, store, escapeHTML });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => init());
  else init();
})();
