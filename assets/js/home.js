/* ==========================================================================
   HAK Plus — Homepage behaviour (v0.2.0)
   Homepage-only configuration and wiring. Shared interactions live in main.js.
   Nothing here calls a backend: subscriptions, callbacks and quotes are
   front-end demonstrations until integrations are confirmed.
   ========================================================================== */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const params = new URLSearchParams(location.search);
  const IMG = 'assets/images/products/';

  /* ---------------------------------------------------------------------
     Configuration — the shape a CMS/backend would supply later.
     --------------------------------------------------------------------- */
  const CONFIG = (window.HK_HOME_CONFIG = Object.assign({
    // External online store (Zoho Commerce). Destination NOT supplied yet — never invent it.
    commerce: { url: null, label: 'Shop online' },
    // 'review' shows provisional content and labels for internal review; 'customer' previews the public view.
    mode: params.get('mode') === 'customer' ? 'customer' : 'review',
    // Override the date to test campaign windows, e.g. ?date=2027-02-10
    today: params.get('date') ? new Date(`${params.get('date')}T12:00:00`) : new Date(),
    sections: {
      offers: { approved: false }, // no approved offer yet
      trust: { approved: false },  // no approved client logos yet
      faq: { approved: false },    // answers need verified policies
      assist: { visible: true },
    },
    mascot: { src: null, alt: '' }, // official mascot artwork pending
    // DUMMY prices for design review only (D-98). Set to false, or replace with verified AED prices, before launch.
    demoPrices: true,
  }, window.HK_HOME_CONFIG || {}));

  /* ---------------------------------------------------------------------
     Sample catalogue data (demonstration only)
     --------------------------------------------------------------------- */
  // Product names, SKUs and photos are taken from the current hakplus.com catalogue (24 Nov 2026).
  // Colours are listed only where the official photo shows them; branding methods only where the
  // current product page lists them. Merchandising selection (featured / new) is NOT confirmed.
  // v0.53.0: 8 products per tab (two rows on desktop); extra names from hakplus.com search, 24 Nov 2026.
  const colourHex = { Black: '#1F2228', Navy: '#1E2A4A', Red: '#B3261E', Grey: '#6B7280' };
  const products = {
    featured: [
      { name: 'Matte thermal bottle 500 ml', sku: 'HK91', category: 'Drinkware', img: 'hk91-atsali-bottle.webp', colours: ['Black', 'Navy', 'Red'], methods: 'Laser engraving, pad, screen, 360° UV' },
      { name: 'MagSafe wireless charging notebook', sku: 'HK494', category: 'Stationery', img: 'hk494-arduous-notebook.webp', colours: ['Navy', 'Black'] },
      { name: 'Jute base cotton bag', sku: 'HK0052', category: 'Bags', img: 'hk0052-geina-cotton-bag.webp' },
      { name: 'A5 custom cork notebook', sku: 'HK0107', category: 'Stationery', img: 'hk0107-lidsky-cork-notebook.webp' },
      { name: 'MagSafe power bank', sku: 'HK0449', category: 'Gadgets', img: 'hk0449-cogent-power-bank.webp' },
      { name: 'Tumbler with cork bottom', sku: 'HK296', category: 'Drinkware', img: 'hk296-dentro-tumblers.webp' },
      { name: 'Hardcover backpack', sku: 'HK0426', category: 'Bags', img: 'hk0426-batoh-backpack.webp' },
      { name: 'Cork notebook and pen gift set', sku: 'HK474', category: 'Gift sets', img: 'hk474-almanac-gift-set.webp' },
    ],
    new: [
      // From hakplus.com/new-products-corporate-gifts (25 Nov 2026)
      { name: 'MagSafe card holder', sku: 'HK538', category: 'Gadgets', img: 'hk538-iman-card-holder.png' },
      { name: 'Wireless mouse', sku: 'HK540', category: 'Gadgets', img: 'hk540-nezumi-mouse.png' },
      { name: 'RPET laptop sleeve', sku: 'HK530', category: 'Bags', img: 'hk530-corex-laptop-sleeve.jpg' },
      { name: 'Mini portable fan', sku: 'HK542', category: 'Gadgets', img: 'hk542-vifte-fan.jpg' },
      { name: 'PVC cooler bag', sku: 'HK539', category: 'Bags', img: 'hk539-pranzo-cooler-bag.jpg' },
      { name: 'Executive gift box', sku: 'HK533', category: 'Gift sets', img: 'hk533-prestige-gift-box.jpg' },
      { name: 'Pouch drawing kit', sku: 'HK536', category: 'Kids', img: 'hk536-bloom-drawing-kit.jpg' },
      { name: 'Laptop sleeve', sku: 'HK0514', category: 'Bags', img: 'hk0514-pioneer-laptop-sleeve.jpg' },
    ],
    // Placeholder selection (stationery and accessories, per the earlier clearance copy) — replace with HAK Plus's live offer list
    offers: [
      { name: 'Chrome top metal ball pen', sku: 'HK0459', category: 'Stationery', img: 'hk0459-biro-pen.webp' },
      { name: 'Jute canvas bag', sku: 'HK0047', category: 'Bags', img: 'hk0047-aiofe-jute-bag.webp' },
      { name: 'Lanyard 20 mm 3 in 1', sku: 'HK182', category: 'Lanyards and accessories', img: 'hk182-garrett-lanyards.webp' },
      { name: 'Brush cotton cap', sku: 'HK317', category: 'Apparel', img: 'hk317-cyrus-cap.webp' },
      { name: 'Jute bag with canvas pocket', sku: 'HK0049', category: 'Bags', img: 'hk0049-trucs-jute-bags.webp' },
      { name: 'Lanyard 15 mm single hook', sku: 'HK183', category: 'Lanyards and accessories', img: 'hk183-gertrude-lanyards.webp' },
      { name: 'Colour pencils', sku: 'HK0356', category: 'Stationery', img: 'hk0356-llapis-pencils.webp' },
      { name: 'Pen stand', sku: 'HK466', category: 'Stationery', img: 'hk466-trencher-pen-stand.webp' },
    ],
  };
  // DUMMY AED prices (not HAK Plus prices) so the price row can be reviewed. Remove when real prices exist.
  const demoPrices = {
    HK91: { price: 32 }, HK494: { price: 85, priceFrom: true }, HK0052: { price: 9.5 }, HK0107: { price: 18 },
    HK0449: { price: 65 }, HK296: { price: 28 }, HK0426: { price: 120 }, HK474: { price: 75 },
    HK538: { price: 35 }, HK540: { price: 42 }, HK530: { price: 48 }, HK542: { price: 22 },
    HK539: { price: 30 }, HK533: { price: 140 }, HK536: { price: 18 }, HK0514: { price: 55 },
    HK0459: { price: 4.5, priceWas: 6 }, HK0047: { price: 11, priceWas: 14 }, HK182: { price: 5, priceWas: 7 }, HK317: { price: 13.5, priceWas: 18 },
    HK0049: { price: 12, priceWas: 15 }, HK183: { price: 4, priceWas: 5.5 }, HK0356: { price: 9, priceWas: 12 }, HK466: { price: 22, priceWas: 28 },
  };
  if (CONFIG.demoPrices) Object.values(products).flat().forEach((p) => { if (p.price == null && demoPrices[p.sku]) Object.assign(p, demoPrices[p.sku]); });
  const categories = ['Drinkware', 'Bags', 'Gadgets', 'Stationery', 'Apparel', 'Lanyards and accessories', 'Gift sets', 'Promotional products', 'Kids'];
  const extraSearch = [
    { name: 'Brush cotton cap', sku: 'HK317', category: 'Apparel', img: 'hk317-cyrus-cap.webp' },
    { name: 'Lanyard 20 mm 3 in 1', sku: 'HK182', category: 'Lanyards and accessories', img: 'hk182-garrett-lanyards.webp' },
    { name: 'MagSafe power bank', sku: 'HK0449', category: 'Gadgets', img: 'hk0449-cogent-power-bank.webp' },
    { name: 'Jute canvas bag', sku: 'HK0047', category: 'Bags', img: 'hk0047-aiofe-jute-bag.webp' },
    { name: 'Chrome top metal ball pen', sku: 'HK0459', category: 'Stationery', img: 'hk0459-biro-pen.webp' },
    { name: 'Notebook, card holder and keychain gift set', sku: 'HK0511', category: 'Gift sets', img: 'hk0511-astoria-gift-set.webp' },
    { name: 'Hardcover backpack', sku: 'HK0426', category: 'Bags', img: 'hk0426-batoh-backpack.webp' },
    { name: 'Recycled stainless steel bullet bottle 750 ml', sku: 'HK0432', category: 'Drinkware', img: 'hk0432-cruet-bottle.webp' },
  ];
  window.HK = window.HK || {};
  window.HK.searchData = [
    ...categories.map((c) => ({ type: 'category', name: c })),
    ...[...products.featured, ...products.new, ...extraSearch].map((p) => ({ type: 'product', name: p.name, sku: p.sku, category: p.category, img: IMG + p.img })),
  ];

  /* ---------------------------------------------------------------------
     Product cards v4 (D-86): cool neutral image surface, open left-aligned
     details: name, category, price, Add to quote.
     Price fields (AED, all optional — only verified figures may be added):
       price: 12.5            → AED 12.50
       price + priceFrom:true → From AED 12.50
       price + priceWas: 15   → AED 12.50 with AED 15.00 struck through
       no price               → Price on request
     --------------------------------------------------------------------- */
  let n = 0;
  const aed = (v) => `AED ${Number(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  // Plain price only (D-103): "AED 12" or "AED 9.50"; no "From" or struck-through price
  const priceRow = (p) => {
    if (p.price == null) return '<p class="hk-price hk-price--request"><span class="hk-price__now">Price on request</span></p>';
    const v = Number(p.price);
    return `<p class="hk-price"><span class="hk-price__now">AED ${v.toLocaleString('en-US', { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 })}</span></p>`;
  };
  const card = (p, badge) => {
    const id = `hp-p${++n}`;
    const name = esc(p.name);
    return `<li class="hk-shop-card hk-shop-card--v4"${badge ? ` data-badge="${badge.toLowerCase()}"` : ''} aria-labelledby="${id}">
      <div class="hk-shop-card__media">
        ${badge ? `<span class="hk-shop-card__badge">${badge}</span>` : ''}
        <img src="${IMG}${p.img}" alt="" width="413" height="488" loading="lazy">
        <div class="hk-shop-card__actions">
          <button type="button" class="hk-shop-card__action" data-hk-quickview data-name="${name}" aria-label="Quick view: ${name}"><span class="material-symbols-rounded" aria-hidden="true">center_focus_weak</span></button>
          <button type="button" class="hk-shop-card__action" data-hk-wishlist data-name="${name}" aria-pressed="false"><span class="material-symbols-rounded" aria-hidden="true">favorite</span></button>
          <button type="button" class="hk-shop-card__action" data-hk-compare data-name="${name}" aria-pressed="false" aria-label="Add ${name} to compare"><span class="material-symbols-rounded" aria-hidden="true">compare_arrows</span></button>
        </div>
        <button type="button" class="hk-shop-card__quote" data-hk-add-cart data-name="${name}" aria-pressed="false"><span data-label>Add to cart</span><span class="material-symbols-rounded" aria-hidden="true">add_shopping_cart</span></button>
      </div>
      <div class="hk-shop-card__body">
        <div class="hk-shop-card__info">
          <h3 class="hk-shop-card__name" id="${id}"><a href="#" data-route="product/${esc(p.sku.toLowerCase().replace(/\s+/g, '-'))}">${name}</a></h3>
        </div>
        <div class="hk-shop-card__buy">
          ${priceRow(p)}
        </div>
      </div>
    </li>`;
  };
  $$('[data-hk-products]').forEach((list) => {
    const key = list.dataset.hkProducts;
    const badge = { new: 'New', offers: 'Offer' }[key] || '';
    // Auto-sliding row (D-99): all eight per tab, four visible on desktop
    list.innerHTML = (products[key] || []).map((p) => card(p, badge)).join('');
    if (window.HK && typeof window.HK.init === 'function') window.HK.init(list);
  });
  // Event index: preview on hover for mouse users (tabs still work by click and keyboard)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('[data-hk-hover-tabs] [role="tab"]').forEach((t) => t.addEventListener('mouseenter', () => { if (t.getAttribute('aria-selected') !== 'true') t.click(); }));
  }
  /* ---------------------------------------------------------------------
     Product sliders auto-advance (D-99): one card every few seconds while
     the visible tab is on screen; loops back to the start. Pauses on hover
     or focus; never runs with reduced motion. Prev/next stay available.
     --------------------------------------------------------------------- */
  const startSliders = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    $$('[data-hk-autoslide]').forEach((c) => {
      const track = $('[data-hk-carousel-track]', c);
      const interval = parseInt(c.dataset.interval, 10) || 4500;
      const rtl = () => getComputedStyle(c).direction === 'rtl';
      let hover = false;
      let focus = false;
      let visible = false;
      const advance = () => {
        const panel = c.closest('[role="tabpanel"]');
        if (!visible || hover || focus || document.hidden || (panel && panel.hidden)) return;
        const max = track.scrollWidth - track.clientWidth;
        if (max <= 2) return;
        if (Math.abs(track.scrollLeft) >= max - 2) track.scrollTo({ left: 0, behavior: 'smooth' });
        else $('[data-hk-carousel-next]', c).click();
      };
      c.addEventListener('mouseenter', () => { hover = true; });
      c.addEventListener('mouseleave', () => { hover = false; });
      c.addEventListener('focusin', () => { focus = true; });
      c.addEventListener('focusout', (e) => { if (!c.contains(e.relatedTarget)) focus = false; });
      if ('IntersectionObserver' in window) new IntersectionObserver((en) => { visible = en[0].isIntersecting; }, { threshold: 0.4 }).observe(c);
      else visible = true;
      if (!reduced) setInterval(advance, interval);
    });
    // Hidden tab panels measure 0 wide; refresh carousel controls when a tab is shown
    $$('#featured [role="tab"]').forEach((t) => t.addEventListener('click', () => requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))));
    // "View all" under the product tabs follows the selected tab (D-112)
    const more = $('[data-hk-featured-more]');
    const moreFor = { 'fp-t1': ['products/best-sellers', 'View all best sellers'], 'fp-t2': ['products/new-arrivals', 'View all new arrivals'], 'fp-t3': ['products/offers', 'View all offers'] };
    const syncMore = () => {
      const sel = $('#featured [role="tab"][aria-selected="true"]');
      const m = sel && moreFor[sel.id];
      if (more && m) { more.dataset.route = m[0]; more.textContent = m[1]; }
    };
    $$('#featured [role="tab"]').forEach((t) => { t.addEventListener('click', () => setTimeout(syncMore, 0)); t.addEventListener('keyup', () => setTimeout(syncMore, 0)); });
    syncMore();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startSliders); else startSliders();

  /* ---------------------------------------------------------------------
     Event tabs auto-advance (D-93): next event every few seconds while the
     section is on screen. Pauses while the pointer is over the section or
     focus is inside it; never runs with reduced motion. A click restarts it.
     --------------------------------------------------------------------- */
  $$('[data-hk-autotabs]').forEach((list) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tabs = $$('[role="tab"]', list);
    const area = list.closest('section') || list;
    const interval = parseInt(list.dataset.interval, 10) || 5000;
    let timer = null;
    let hover = false;
    let focus = false;
    let visible = false;
    const next = () => {
      const i = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
      tabs[(i + 1) % tabs.length].click();
    };
    const schedule = () => {
      clearInterval(timer);
      if (visible && !hover && !focus && !document.hidden) timer = setInterval(next, interval);
    };
    area.addEventListener('mouseenter', () => { hover = true; schedule(); });
    area.addEventListener('mouseleave', () => { hover = false; schedule(); });
    area.addEventListener('focusin', () => { focus = true; schedule(); });
    area.addEventListener('focusout', (e) => { if (!area.contains(e.relatedTarget)) { focus = false; schedule(); } });
    tabs.forEach((t) => t.addEventListener('click', (e) => { if (e.isTrusted) schedule(); }));
    document.addEventListener('visibilitychange', schedule);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; schedule(); }, { threshold: 0.4 }).observe(area);
    } else { visible = true; schedule(); }
  });

  /* ---------------------------------------------------------------------
     Process stepper (D-84): auto-advances every few seconds while visible.
     Pauses on hover/focus and via the pause button; never auto-advances
     with reduced motion. Clicking a step jumps to it.
     --------------------------------------------------------------------- */
  $$('[data-hk-pstep]').forEach((root) => {
    const items = $$('[data-hk-step]', root);
    const imgs = $$('[data-hk-step-img]', root);
    const thumbs = $$('[data-hk-step-thumb]', root);
    const pauseBtn = $('[data-hk-pstep-pause]', root);
    const interval = parseInt(root.dataset.interval, 10) || 4500;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.style.setProperty('--hk-pstep-interval', `${interval}ms`);
    let i = 0;
    let timer = null;
    let manualPause = false;
    let hoverPause = false;
    let visible = false;
    const show = (n) => {
      i = (n + items.length) % items.length;
      items.forEach((it, k) => {
        const on = k === i;
        it.classList.toggle('is-active', on);
        $('.hk-pstep__btn', it).setAttribute('aria-current', on ? 'step' : 'false');
      });
      imgs.forEach((im, k) => im.classList.toggle('is-active', k === i));
      thumbs.forEach((t, k) => t.classList.toggle('is-active', k === i));
    };
    const running = () => !reduced && !manualPause && !hoverPause && visible;
    const restartBar = () => {
      root.classList.remove('is-running');
      void root.offsetWidth;
      if (running()) root.classList.add('is-running');
    };
    const schedule = () => {
      clearTimeout(timer);
      root.classList.toggle('is-paused', !running() && !reduced);
      restartBar();
      if (running()) timer = setTimeout(() => { show(i + 1); schedule(); }, interval);
    };
    items.forEach((it, k) => $('.hk-pstep__btn', it).addEventListener('click', () => { show(k); schedule(); }));
    if (reduced) { root.setAttribute('data-static', ''); return; }
    if (pauseBtn) pauseBtn.addEventListener('click', () => {
      manualPause = !manualPause;
      pauseBtn.setAttribute('aria-pressed', String(manualPause));
      $('.material-symbols-rounded', pauseBtn).textContent = manualPause ? 'play_arrow' : 'pause';
      $('[data-label]', pauseBtn).textContent = manualPause ? 'Play steps' : 'Pause steps';
      schedule();
    });
    const main = $('.hk-pstep__main', root);
    main.addEventListener('mouseenter', () => { hoverPause = true; schedule(); });
    main.addEventListener('mouseleave', () => { hoverPause = false; schedule(); });
    main.addEventListener('focusin', () => { hoverPause = true; schedule(); });
    main.addEventListener('focusout', (e) => { if (!main.contains(e.relatedTarget)) { hoverPause = false; schedule(); } });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; schedule(); }, { threshold: 0.35 }).observe(root);
    } else { visible = true; schedule(); }
  });

  // Quick view and compare are UI only in this prototype
  document.addEventListener('click', (e) => {
    const ac = e.target.closest('[data-hk-add-cart]');
    if (ac) {
      const on = ac.getAttribute('aria-pressed') !== 'true';
      ac.setAttribute('aria-pressed', String(on));
      ac.querySelector('.material-symbols-rounded').textContent = on ? 'check' : 'add_shopping_cart';
      ac.querySelector('[data-label]').textContent = on ? 'Added to cart' : 'Add to cart';
      const cart = document.querySelector('.hk-tool[data-route="cart"]');
      if (cart) {
        const n = Math.max(0, (parseInt(cart.dataset.count, 10) || 0) + (on ? 1 : -1));
        cart.dataset.count = n;
        cart.setAttribute('aria-label', `Cart, ${n} item${n === 1 ? '' : 's'}`);
        const badge = cart.querySelector('.hk-tool__badge');
        if (badge) badge.textContent = n;
      }
      window.HK.toast(on ? `${ac.dataset.name} added to your cart (demonstration — not stored).` : `${ac.dataset.name} removed from your cart.`, { type: on ? 'success' : 'info' });
      return;
    }
    const aq = e.target.closest('[data-hk-add-quote]');
    if (aq) {
      const on = aq.getAttribute('aria-pressed') !== 'true';
      aq.setAttribute('aria-pressed', String(on));
      aq.querySelector('.material-symbols-rounded').textContent = on ? 'check' : 'add';
      aq.querySelector('[data-label]').textContent = on ? 'Added to quote' : 'Add to quote';
      window.HK.toast(on ? `${aq.dataset.name} added to your quote request (demonstration — not stored).` : `${aq.dataset.name} removed from your quote request.`, { type: on ? 'success' : 'info' });
      return;
    }
    const qv = e.target.closest('[data-hk-quickview]');
    if (qv) { window.HK.toast(`Quick view for ${qv.dataset.name} is planned for a later phase of the prototype.`); return; }
    const cmp = e.target.closest('[data-hk-compare]');
    if (cmp) {
      const on = cmp.getAttribute('aria-pressed') !== 'true';
      cmp.setAttribute('aria-pressed', String(on));
      cmp.setAttribute('aria-label', `${on ? 'Remove' : 'Add'} ${cmp.dataset.name} ${on ? 'from' : 'to'} compare`);
      window.HK.toast(on ? `${cmp.dataset.name} added to compare (demonstration — not stored).` : `${cmp.dataset.name} removed from compare.`, { type: on ? 'success' : 'info' });
    }
  });

  /* ---------------------------------------------------------------------
     Visibility: review vs customer view, conditional sections, campaigns
     --------------------------------------------------------------------- */
  const inWindow = (el) => {
    const t = CONFIG.today.getTime();
    const s = el.dataset.start ? new Date(`${el.dataset.start}T00:00:00`).getTime() : -Infinity;
    const e = el.dataset.end ? new Date(`${el.dataset.end}T23:59:59`).getTime() : Infinity;
    return t >= s && t <= e;
  };
  function applyVisibility() {
    const review = CONFIG.mode === 'review';
    document.documentElement.classList.toggle('is-customer-mode', !review);
    const visible = {};
    $$('[data-hk-section]').forEach((sec) => {
      const key = sec.dataset.hkSection;
      const cfg = CONFIG.sections[key] || {};
      const show = key === 'assist' ? cfg.visible !== false : (cfg.approved || review);
      sec.hidden = !show;
      visible[key] = show;
    });
    $$('[data-hk-requires]').forEach((el) => { el.hidden = !visible[el.dataset.hkRequires]; });
    // Mascot: show approved artwork; otherwise a placeholder (review) or a text-only layout (customer)
    const assist = $('[data-hk-assist]');
    if (assist) {
      if (CONFIG.mascot.src) {
        $('[data-hk-mascot]', assist).innerHTML = `<img src="${esc(CONFIG.mascot.src)}" alt="${esc(CONFIG.mascot.alt)}" loading="lazy">`;
        assist.classList.remove('hk-assist--no-media');
      } else assist.classList.toggle('hk-assist--no-media', !review);
    }
    const btn = $('[data-hk-review-toggle]');
    if (btn) { btn.setAttribute('aria-pressed', String(review)); $('[data-label]', btn).textContent = review ? 'Internal review view' : 'Customer view'; }
  }
  function applyCampaigns() {
    $$('[data-hk-campaign]').forEach((el) => { if (!inWindow(el)) el.hidden = true; });
    // Occasions: order by priority; first visible becomes the featured (current) card
    const grid = $('[data-hk-occasions]');
    if (grid) {
      const items = $$('.hk-occasion', grid).sort((a, b) => Number(a.dataset.priority || 99) - Number(b.dataset.priority || 99));
      items.forEach((el) => grid.appendChild(el));
      items.forEach((el) => el.classList.remove('hk-occasion--current'));
      const first = items.find((el) => !el.hidden);
      if (first) first.classList.add('hk-occasion--current');
      // Tall feature only when four or more other cards can fill the second row
      grid.classList.toggle('hk-occasion-grid--tall', items.filter((el) => !el.hidden).length >= 5);
    }
    // Supporting banners: configurable display order
    const row = $('[data-hk-banner-row]');
    if (row) $$('.hk-showcase__tile, .hk-banner-card', row).sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order)).forEach((el) => row.appendChild(el));
  }

  /* ---------------------------------------------------------------------
     External commerce link (Zoho Commerce) — configurable destination
     --------------------------------------------------------------------- */
  function applyCommerce() {
    $$('[data-hk-commerce-link]').forEach((a) => {
      if (CONFIG.commerce.url) {
        a.href = CONFIG.commerce.url;
        a.target = '_blank';
        a.rel = 'noopener';
      } else {
        a.setAttribute('aria-describedby', 'commerce-pending');
        a.addEventListener('click', (e) => {
          e.preventDefault();
          window.HK.toast('The online store destination (Zoho Commerce) has not been confirmed yet, so this link is inactive in the prototype.', { type: 'info' });
        });
      }
    });
    if (!CONFIG.commerce.url && !$('#commerce-pending')) {
      const p = document.createElement('p');
      p.id = 'commerce-pending'; p.className = 'sr-only'; p.textContent = 'Destination pending confirmation.';
      document.body.appendChild(p);
    }
  }

  /* ---------------------------------------------------------------------
     Future-page links: explain instead of failing silently
     --------------------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    if (!a) return;
    e.preventDefault();
    const clone = a.cloneNode(true);
    clone.querySelectorAll('.material-symbols-rounded, .sr-only').forEach((n) => n.remove());
    const label = (clone.textContent.trim() || a.getAttribute('aria-label') || '').replace(/\s+/g, ' ');
    window.HK.toast(`“${label}” opens /${a.dataset.route} — that page is planned for a later phase of the prototype.`);
  });

  /* ---------------------------------------------------------------------
     Category show more / fewer
     --------------------------------------------------------------------- */
  $$('[data-hk-show-more]').forEach((btn) => {
    const grid = document.getElementById(btn.getAttribute('aria-controls'));
    const extra = $$('[data-hk-more]', grid);
    if (!extra.length) { btn.hidden = true; return; }
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      extra.forEach((el) => (el.hidden = !open));
      btn.setAttribute('aria-expanded', String(open));
      $('[data-label]', btn).textContent = open ? 'Show fewer categories' : `Show all categories`;
      $('.material-symbols-rounded', btn).textContent = open ? 'expand_less' : 'expand_more';
      if (open) $('a', extra[0]).focus();
    });
    $('[data-label]', btn).textContent = `Show all ${$$('.hk-hex', grid).length} categories`;
  });

  /* ---------------------------------------------------------------------
     Event explorer: vertical tabs on desktop, horizontal on smaller screens
     --------------------------------------------------------------------- */
  const mq = window.matchMedia('(min-width: 1024px)');
  const setOrientation = () => $$('[data-hk-orientation]').forEach((l) => l.setAttribute('aria-orientation', mq.matches ? 'vertical' : 'horizontal'));
  setOrientation();
  mq.addEventListener('change', setOrientation);

  /* ---------------------------------------------------------------------
     Forms: newsletter and callback (validated by main.js; nothing is sent)
     --------------------------------------------------------------------- */
  const prototypeSubmit = (form, statusSel, title, text) => {
    form.addEventListener('hk:valid', () => {
      const btn = $('button[type="submit"]', form);
      const status = $(statusSel, form);
      window.HK.setLoading(btn, true);
      setTimeout(() => {
        window.HK.setLoading(btn, false);
        status.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">info</span><div class="hk-alert__body"><p class="hk-alert__title">${title}</p><p>${text}</p></div>`;
        status.hidden = false;
      }, 900);
    });
  };
  const nl = $('#newsletter-form');
  if (nl) prototypeSubmit(nl, '[data-hk-newsletter-status]', 'Details are valid', 'This is a prototype, so no subscription has been created. The email platform and consent process are still to be confirmed.');
  const cb = $('#callback-form');
  if (cb) prototypeSubmit(cb, '[data-hk-callback-status]', 'Details are valid', 'This is a prototype, so no callback request has been sent.');

  /* ---------------------------------------------------------------------
     Review / customer view switch (prototype tool only)
     --------------------------------------------------------------------- */
  const toggle = $('[data-hk-review-toggle]');
  if (toggle) toggle.addEventListener('click', () => {
    CONFIG.mode = CONFIG.mode === 'review' ? 'customer' : 'review';
    applyVisibility();
    window.HK.toast(CONFIG.mode === 'review' ? 'Internal review view: provisional content and labels are shown.' : 'Customer view: provisional-only sections and labels are hidden.');
  });

  applyCampaigns();
  applyVisibility();
  applyCommerce();
})();
