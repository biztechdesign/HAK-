/* ==========================================================================
   HAK Plus — Design system SHOWCASE behaviour only.
   Never load on website pages. Shared behaviour lives in main.js.
   ========================================================================== */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const IMG = 'assets/images/placeholders/';

  /* ---------------------------------------------------------------------
     0. Capture component HTML snippets BEFORE main.js mutates the DOM
     --------------------------------------------------------------------- */
  function dedent(html) {
    const lines = html.replace(/^\n+|\s+$/g, '').split('\n');
    const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length);
    const min = Math.min(...indents, 99);
    return lines.map((l) => l.slice(min)).join('\n');
  }
  $$('[data-ds-snippet]').forEach((holder) => {
    const src = document.getElementById(holder.dataset.dsSnippet);
    if (!src) return;
    const clone = src.cloneNode(true);
    $$('[data-ds-omit]', clone).forEach((n) => n.remove());
    const html = holder.hasAttribute('data-ds-outer') ? clone.outerHTML : clone.innerHTML;
    holder.innerHTML = `<pre><code>${esc(dedent(html.replace(/ id="[^"]*-demo[^"]*"/g, '')))}</code></pre><button type="button" class="ds-copy" data-ds-copy-code><span class="material-symbols-rounded" aria-hidden="true">content_copy</span>Copy HTML</button>`;
  });

  /* ---------------------------------------------------------------------
     1. Demonstration data (NOT real catalogue data)
     --------------------------------------------------------------------- */
  const products = [
    { name: 'Matte thermal bottle 500 ml', sku: 'HK91 BK', category: 'Drinkware', img: 'bottle.svg', moq: 50, stock: 'in', colours: ['Black', 'Navy', 'White'], price: 24.5, isNew: false, best: true },
    { name: 'Insulated travel tumbler 600 ml', sku: 'HK-DEMO-112', category: 'Drinkware', img: 'tumbler.svg', moq: 50, stock: 'low', colours: ['Steel blue', 'Black'], price: 31, isNew: true },
    { name: 'Ceramic mug 330 ml', sku: 'HK-DEMO-140', category: 'Drinkware', img: 'mug.svg', moq: 100, stock: 'in', colours: ['White'], price: 9.75 },
    { name: 'Anti-theft laptop backpack 15.6"', sku: 'HK-DEMO-201', category: 'Bags', img: 'backpack.svg', moq: 25, stock: 'in', colours: ['Charcoal', 'Black'], price: 118, best: true },
    { name: 'Natural jute tote bag', sku: 'HK-DEMO-233', category: 'Bags', img: 'tote.svg', moq: 100, stock: 'in', colours: ['Natural'], price: 12.5, eco: true },
    { name: 'A5 hardcover notebook with elastic', sku: 'HK-DEMO-305', category: 'Stationery', img: 'notebook.svg', moq: 50, stock: 'in', colours: ['Forest green', 'Navy', 'Black', 'Grey', 'Tan', 'Red'], price: 18 },
    { name: 'Metal twist pen', sku: 'HK-DEMO-318', category: 'Stationery', img: 'pen.svg', moq: 200, stock: 'out', colours: ['Gunmetal', 'Silver'], price: 6.25 },
    { name: '10,000 mAh wireless power bank', sku: 'HK-DEMO-402', category: 'Gadgets', img: 'powerbank.svg', moq: 25, stock: 'in', colours: ['Black'], price: 74, isNew: true },
    { name: 'Portable Bluetooth speaker', sku: 'HK-DEMO-417', category: 'Gadgets', img: 'speaker.svg', moq: 25, stock: 'low', colours: ['Graphite'], price: 89 },
    { name: 'Six-panel cotton cap', sku: 'HK-DEMO-501', category: 'Apparel', img: 'cap.svg', moq: 50, stock: 'in', colours: ['Khaki', 'Navy', 'Black', 'White'], price: 14.5 },
    { name: 'Polyester lanyard with card holder', sku: 'HK-DEMO-610', category: 'Lanyards & accessories', img: 'lanyard.svg', moq: 100, stock: 'in', colours: ['Indigo'], price: 7.5 },
    { name: 'Executive welcome gift set', sku: 'HK-DEMO-720', category: 'Gift sets', img: 'giftbox.svg', moq: 10, stock: 'in', colours: ['Black'], price: null },
  ];
  const colourHex = { Black: '#1F2228', Navy: '#1E2A4A', White: '#F4F4F2', 'Steel blue': '#8FA3B8', Charcoal: '#363943', Natural: '#D8C7A6', 'Forest green': '#2F4A3E', Grey: '#9AA0AA', Tan: '#C9A27E', Red: '#B3261E', Gunmetal: '#5C6270', Silver: '#C5CAD2', Graphite: '#5A6270', Khaki: '#C9B79C', Indigo: '#2D3487' };
  const categories = ['Drinkware', 'Bags', 'Stationery', 'Gadgets', 'Apparel', 'Lanyards & accessories', 'Gift sets', 'Promotional products', 'Kids'];
  window.HK = window.HK || {};
  window.HK.searchData = [
    ...categories.map((c) => ({ type: 'category', name: c })),
    ...products.map((p) => ({ type: 'product', name: p.name, sku: p.sku, category: p.category, img: IMG + p.img })),
  ];

  /* ---------------------------------------------------------------------
     2. Product card renderer (mirrors the static HTML pattern in the showcase)
     --------------------------------------------------------------------- */
  let pc = 0;
  function productCard(p, opts = {}) {
    const n = ++pc;
    const variant = opts.variant ? ` hk-product--${opts.variant}` : '';
    const shown = p.colours.slice(0, 4);
    const extra = p.colours.length - shown.length;
    const stock = { in: ['hk-stock--in', 'In stock'], low: ['hk-stock--low', 'Low stock'], out: ['hk-stock--out', 'Out of stock'] }[p.stock];
    const badges = [p.isNew && '<span class="hk-badge hk-badge--brand">New</span>', p.best && '<span class="hk-badge">Best seller</span>', p.eco && '<span class="hk-badge hk-badge--eco"><span class="material-symbols-rounded" aria-hidden="true">eco</span>Eco</span>'].filter(Boolean).join('');
    const price = p.price == null
      ? '<div class="hk-price hk-price--request"><span class="hk-price__label">Pricing</span><span class="hk-price__value">Price on request</span></div>'
      : `<div class="hk-price"><span class="hk-price__label">From</span><span class="hk-price__value"><span class="hk-price__cur">AED</span>${p.price.toFixed(2)}</span></div>`;
    return `<article class="hk-product${variant}${p.stock === 'out' ? ' is-unavailable' : ''}" aria-labelledby="dp-${n}">
      <div class="hk-product__media">
        <div class="hk-media"><img src="${IMG}${p.img}" alt="" width="400" height="400" loading="lazy"></div>
        ${badges ? `<div class="hk-product__badges">${badges}</div>` : ''}
        <div class="hk-product__wish"><button type="button" class="hk-btn hk-btn--icon hk-btn--ghost hk-btn--sm" aria-pressed="false" data-hk-wishlist data-name="${esc(p.name)}"><span class="material-symbols-rounded" aria-hidden="true">favorite</span></button></div>
      </div>
      <div class="hk-product__body">
        <p class="hk-product__eyebrow"><span>${esc(p.category)}</span><span class="hk-product__sku">${esc(p.sku)}</span></p>
        <h3 class="hk-product__title" id="dp-${n}"><a class="hk-product__link" href="#product-demo">${esc(p.name)}</a></h3>
        <div class="hk-product__swatches"><div class="hk-swatches" role="radiogroup" aria-label="Colour for ${esc(p.name)}">${shown.map((c, i) => `<span class="hk-swatch" role="radio" aria-checked="${i === 0}" aria-label="${c}"><span class="hk-swatch__dot" style="--swatch:${colourHex[c]}"></span></span>`).join('')}${extra > 0 ? `<span class="hk-swatches__more">+${extra}<span class="sr-only"> more colours</span></span>` : ''}</div></div>
        <div class="hk-product__specs"><span class="hk-product__spec"><span class="material-symbols-rounded" aria-hidden="true">inventory_2</span>MOQ <strong>${p.moq}</strong></span><span class="hk-stock ${stock[0]}">${stock[1]}</span></div>
        <div class="hk-product__footer">${price}</div>
      </div>
    </article>`;
  }
  window.HK.dsProductCard = productCard;

  // Merchandising tabs
  const tabsets = { 'ds-tp-best': products.filter((p) => p.best).concat(products.slice(2, 4)), 'ds-tp-new': products.filter((p) => p.isNew).concat(products.slice(4, 6)), 'ds-tp-featured': products.slice(6, 10) };
  Object.entries(tabsets).forEach(([idd, list]) => {
    const el = document.getElementById(idd);
    if (el) el.querySelector('.hk-auto-grid').innerHTML = list.slice(0, 4).map((p) => productCard(p, { variant: 'compact' })).join('');
  });

  /* ---------------------------------------------------------------------
     3. Filter demonstration (local data)
     --------------------------------------------------------------------- */
  const filterRoot = $('#ds-filter-demo');
  if (filterRoot) {
    const form = $('#ds-filter-form');
    const results = $('#ds-filter-results');
    const chips = $('#ds-filter-chips');
    const count = $('#ds-filter-count');
    const empty = $('#ds-filter-empty');
    let sort = 'relevance';
    let view = 'grid';
    const catBox = $('#ds-filter-cats');
    const catCounts = {};
    products.forEach((p) => (catCounts[p.category] = (catCounts[p.category] || 0) + 1));
    catBox.innerHTML = Object.keys(catCounts).map((c, i) => `<label class="hk-check"><input type="checkbox" name="cat" value="${esc(c)}"><span>${esc(c)}</span><span class="hk-check__meta">${catCounts[c]}</span></label>`).join('');
    const allColours = [...new Set(products.flatMap((p) => p.colours))].slice(0, 10);
    $('#ds-filter-colours').innerHTML = allColours.map((c) => `<button type="button" class="hk-filter__colour" aria-pressed="false" data-colour="${esc(c)}"><span class="hk-swatch__dot" style="--swatch:${colourHex[c]}" aria-hidden="true"></span>${esc(c)}</button>`).join('');
    $$('#ds-filter-colours button').forEach((b) => b.addEventListener('click', () => { b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); apply(); }));
    $('#ds-filter-cat-search').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      $$('label', catBox).forEach((l) => (l.hidden = !l.textContent.toLowerCase().includes(q)));
    });
    const state = () => ({
      cats: $$('input[name="cat"]:checked', form).map((i) => i.value),
      colours: $$('#ds-filter-colours [aria-pressed="true"]').map((b) => b.dataset.colour),
      inStock: $('#ds-filter-stock').checked,
      maxMoq: Number($('#ds-filter-moq').value) || Infinity,
    });
    function apply() {
      const s = state();
      let list = products.filter((p) => (!s.cats.length || s.cats.includes(p.category))
        && (!s.colours.length || p.colours.some((c) => s.colours.includes(c)))
        && (!s.inStock || p.stock !== 'out') && p.moq <= s.maxMoq);
      if (sort === 'moq') list = list.slice().sort((a, b) => a.moq - b.moq);
      if (sort === 'name') list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
      if (sort === 'new') list = list.slice().sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      results.className = view === 'grid' ? 'hk-auto-grid hk-auto-grid--products' : 'ds-layout-demo';
      results.innerHTML = list.map((p) => productCard(p, { variant: view === 'list' ? 'horizontal' : '' })).join('');
      empty.hidden = list.length > 0;
      results.hidden = list.length === 0;
      count.innerHTML = `<strong>${list.length}</strong> of ${products.length} products <span class="hk-provisional">Demo data</span>`;
      const chipData = [...s.cats.map((c) => ['cat', c, c]), ...s.colours.map((c) => ['colour', c, `Colour: ${c}`]), ...(s.inStock ? [['stock', '', 'Hide out of stock']] : []), ...(s.maxMoq !== Infinity ? [['moq', '', `MOQ up to ${s.maxMoq}`]] : [])];
      chips.innerHTML = chipData.map(([k, v, label]) => `<span class="hk-chip">${esc(label)}<button type="button" class="hk-chip__remove" data-k="${k}" data-v="${esc(v)}" aria-label="Remove filter: ${esc(label)}"><span class="material-symbols-rounded" aria-hidden="true">close</span></button></span>`).join('')
        + (chipData.length ? '<button type="button" class="hk-btn hk-btn--link hk-btn--sm" data-clear-all>Clear all</button>' : '');
      $$('.hk-chip__remove', chips).forEach((b) => b.addEventListener('click', () => {
        const { k, v } = b.dataset;
        if (k === 'cat') $$('input[name="cat"]', form).find((i) => i.value === v).checked = false;
        if (k === 'colour') $(`#ds-filter-colours [data-colour="${CSS.escape(v)}"]`).setAttribute('aria-pressed', 'false');
        if (k === 'stock') $('#ds-filter-stock').checked = false;
        if (k === 'moq') $('#ds-filter-moq').value = '';
        apply();
        (chips.querySelector('.hk-chip__remove') || $('#ds-filter-heading')).focus();
      }));
      const ca = $('[data-clear-all]', chips); if (ca) ca.addEventListener('click', clearAll);
      window.HK.init(results);
      $('#ds-filter-live').textContent = `${list.length} products shown`;
    }
    function clearAll() {
      form.reset();
      $$('#ds-filter-colours button').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      apply();
      $('#ds-filter-heading').focus();
    }
    form.addEventListener('change', apply);
    form.addEventListener('submit', (e) => { e.preventDefault(); apply(); });
    $$('[data-ds-clear-filters]').forEach((b) => b.addEventListener('click', clearAll));
    filterRoot.addEventListener('hk:select', (e) => { sort = e.detail.value; apply(); });
    $$('.hk-viewtoggle button', filterRoot).forEach((b) => b.addEventListener('click', () => {
      view = b.dataset.view;
      $$('.hk-viewtoggle button', filterRoot).forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
      apply();
    }));
    // Mobile: move the same filter form into the drawer (no duplicated markup)
    const drawer = $('#ds-filter-drawer');
    const home = form.parentElement;
    drawer.addEventListener('hk:dialog-open', () => $('.hk-dialog__body', drawer).appendChild(form));
    drawer.addEventListener('close', () => home.appendChild(form));
    apply();
  }

  /* ---------------------------------------------------------------------
     4. Colour system — reads values from tokens.css, calculates WCAG ratios
     --------------------------------------------------------------------- */
  const css = getComputedStyle(document.documentElement);
  const token = (name) => css.getPropertyValue(name).trim();
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
    const n = parseInt(hex, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function lum(hex) {
    return hexToRgb(hex).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); })
      .reduce((acc, v, i) => acc + v * [0.2126, 0.7152, 0.0722][i], 0);
  }
  function ratio(a, b) { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); }
  window.HK.contrast = ratio;

  const scales = {
    indigo: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    orange: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    neutral: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    warm: [50, 100, 200, 300, 400, 500, 600, 700],
  };
  const notes = { 'indigo-500': 'Brand anchor', 'orange-500': 'Accent anchor', 'neutral-0': 'White', 'neutral-50': 'Cool neutral', 'neutral-200': 'Border', 'neutral-500': 'Muted text', 'neutral-600': 'Secondary text', 'neutral-900': 'Primary text', 'warm-50': 'Warm ivory', 'warm-200': 'Soft sand', 'warm-300': 'Warm stone' };
  function swatchHTML(name, hex, label) {
    const onWhite = ratio(hex, '#FFFFFF'); const onInk = ratio(hex, '#171923');
    const fg = onWhite >= onInk ? '#FFFFFF' : '#171923';
    const rgb = hexToRgb(hex).join(', ');
    return `<div class="ds-swatch${label && /anchor/i.test(label) ? ' ds-swatch--anchor' : ''}">
      <div class="ds-swatch__chip" style="background:${hex};color:${fg}"><span>${label ? esc(label) : ''}</span><span>${Math.max(onWhite, onInk).toFixed(1)}:1</span></div>
      <div class="ds-swatch__info"><span class="ds-swatch__name">${esc(name)}</span><span class="ds-swatch__hex">${hex.toUpperCase()} · rgb(${rgb})</span></div>
      <div class="ds-swatch__actions"><button type="button" class="ds-copy ds-copy--light" data-ds-copy="${hex.toUpperCase()}" aria-label="Copy ${hex.toUpperCase()}">HEX</button><button type="button" class="ds-copy ds-copy--light" data-ds-copy="var(--hk-${name})" aria-label="Copy CSS variable --hk-${name}">var()</button></div>
    </div>`;
  }
  Object.entries(scales).forEach(([s, steps]) => {
    const el = $(`[data-ds-scale="${s}"]`);
    if (el) el.innerHTML = steps.map((st) => swatchHTML(`${s}-${st}`, token(`--hk-${s}-${st}`), notes[`${s}-${st}`])).join('');
  });
  const functional = $('[data-ds-scale="functional"]');
  if (functional) {
    functional.innerHTML = ['green-50', 'green-200', 'green-600', 'green-800', 'amber-50', 'amber-200', 'amber-600', 'amber-800', 'red-50', 'red-200', 'red-600', 'red-700', 'blue-50', 'blue-200', 'blue-600', 'blue-700']
      .map((n) => swatchHTML(n, token(`--hk-${n}`), { 'green-600': 'Success', 'amber-600': 'Warning', 'red-600': 'Error', 'blue-600': 'Info' }[n])).join('');
  }

  // Semantic tokens table
  const semantic = [
    ['--hk-color-bg-page', 'Primary page background'], ['--hk-color-bg-alt', 'Alternate section background'], ['--hk-color-bg-warm', 'Warm editorial background'],
    ['--hk-color-bg-sand', 'Warm promotional / photography surface'], ['--hk-color-bg-product', 'Product image background'], ['--hk-color-bg-brand', 'Dark brand surface'],
    ['--hk-color-text-primary', 'Headings and body'], ['--hk-color-text-secondary', 'Supporting paragraphs'], ['--hk-color-text-muted', 'Meta, captions, SKU'],
    ['--hk-color-text-inverse', 'Text on brand surfaces'], ['--hk-color-text-accent', 'Orange text that passes AA'], ['--hk-color-border', 'Default border / divider'],
    ['--hk-color-border-strong', 'Input boundaries (≥3:1)'], ['--hk-color-action-primary', 'Primary button'], ['--hk-color-action-primary-hover', 'Primary hover'],
    ['--hk-color-action-accent', 'Accent button (dark text)'], ['--hk-color-interactive-hover', 'Neutral hover surface'], ['--hk-color-selected', 'Selected state surface'],
    ['--hk-color-focus-ring', 'Focus ring'], ['--hk-color-disabled-surface', 'Disabled surface'], ['--hk-color-disabled-text', 'Disabled text (exempt from contrast)'],
    ['--hk-color-success-bg', 'Success background'], ['--hk-color-error-text', 'Error text'], ['--hk-color-overlay', 'Overlay backdrop'],
  ];
  const semTable = $('#ds-semantic-table');
  if (semTable) {
    semTable.innerHTML = semantic.map(([n, use]) => {
      const v = token(n);
      return `<tr><td><span class="ds-pair" style="background:${v};min-inline-size:2.5rem;block-size:1.5rem;padding:0" aria-hidden="true"></span></td><td><code class="ds-inline">${n}</code></td><td>${esc(use)}</td><td><code class="ds-inline">${esc(v)}</code></td><td><button type="button" class="ds-copy ds-copy--light" data-ds-copy="var(${n})" aria-label="Copy var(${n})">Copy</button></td></tr>`;
    }).join('');
  }

  // Contrast pairings
  const pairs = [
    ['neutral-900', 'neutral-0', 'Primary text on white', 'text'],
    ['neutral-600', 'neutral-0', 'Secondary text on white', 'text'],
    ['neutral-500', 'neutral-0', 'Muted text on white', 'text'],
    ['neutral-500', 'neutral-50', 'Muted text on cool neutral', 'text'],
    ['neutral-500', 'warm-50', 'Muted text on ivory', 'text'],
    ['neutral-500', 'warm-200', 'Muted text on sand (avoid)', 'text'],
    ['warm-700', 'warm-200', 'Text on sand', 'text'],
    ['neutral-0', 'indigo-500', 'White on indigo (primary button)', 'text'],
    ['neutral-0', 'indigo-600', 'White on indigo hover', 'text'],
    ['indigo-500', 'neutral-0', 'Indigo links on white', 'text'],
    ['indigo-100', 'indigo-500', 'Inverse muted text on indigo', 'text'],
    ['neutral-0', 'orange-500', 'White on orange (not used)', 'text'],
    ['neutral-0', 'orange-600', 'White on orange 600 (not used)', 'text'],
    ['neutral-0', 'orange-700', 'White on orange 700', 'text'],
    ['neutral-900', 'orange-500', 'Ink on orange (accent button)', 'text'],
    ['neutral-900', 'orange-400', 'Ink on orange hover', 'text'],
    ['orange-700', 'neutral-0', 'Orange text on white', 'text'],
    ['orange-500', 'neutral-0', 'Orange 500 as text on white (not used)', 'text'],
    ['orange-500', 'indigo-500', 'Orange on indigo (large / graphics only)', 'large'],
    ['orange-800', 'orange-50', 'Accent badge text', 'text'],
    ['indigo-600', 'indigo-50', 'Selected / brand badge text', 'text'],
    ['green-800', 'green-50', 'Success message', 'text'],
    ['amber-800', 'amber-50', 'Warning message', 'text'],
    ['red-700', 'red-50', 'Error message', 'text'],
    ['red-700', 'neutral-0', 'Error text on white', 'text'],
    ['blue-700', 'blue-50', 'Information message', 'text'],
    ['neutral-400', 'neutral-0', 'Input border on white (UI component)', 'ui'],
    ['neutral-200', 'neutral-0', 'Decorative divider (non-essential)', 'decorative'],
    ['indigo-500', 'neutral-0', 'Focus ring on white', 'ui'],
    ['orange-300', 'indigo-500', 'Focus ring on indigo', 'ui'],
  ];
  const pairTable = $('#ds-contrast-table');
  if (pairTable) {
    pairTable.innerHTML = pairs.map(([fg, bg, use, kind]) => {
      const f = token(`--hk-${fg}`); const b = token(`--hk-${bg}`); const r = ratio(f, b);
      const need = kind === 'text' ? 4.5 : kind === 'decorative' ? 0 : 3;
      const ok = r >= need;
      const verdict = kind === 'decorative' ? '<span class="ds-flag">Not required</span>'
        : ok ? `<span class="ds-pass"><span class="material-symbols-rounded icon-16" aria-hidden="true">check</span>Pass</span>` : `<span class="ds-fail"><span class="material-symbols-rounded icon-16" aria-hidden="true">close</span>Fail</span>`;
      const aaaNote = kind === 'text' && r >= 7 ? ' · AAA' : '';
      return `<tr><td><span class="ds-pair" style="color:${f};background:${b}">${kind === 'ui' || kind === 'decorative' ? '■ ■ ■' : 'Aa 14 px'}</span></td><td>${esc(use)}</td><td><code class="ds-inline">${fg} / ${bg}</code></td><td class="hk-num"><strong>${r.toFixed(2)}:1</strong></td><td>${kind === 'text' ? 'Text 4.5:1' : kind === 'large' ? 'Large text 3:1' : kind === 'ui' ? 'UI 3:1' : '—'}</td><td>${verdict}${aaaNote}</td></tr>`;
    }).join('');
  }

  /* ---------------------------------------------------------------------
     5. Icon catalogue with ligature verification
     --------------------------------------------------------------------- */
  const iconSets = {
    'Navigation and actions': ['menu', 'close', 'search', 'arrow_forward', 'arrow_back', 'arrow_upward', 'chevron_right', 'chevron_left', 'expand_more', 'expand_less', 'more_horiz', 'open_in_new'],
    'E-commerce': ['shopping_bag', 'shopping_cart', 'favorite', 'person', 'inventory_2', 'package_2', 'local_shipping', 'category', 'grid_view', 'view_list', 'filter_alt', 'tune', 'sort', 'sell', 'add', 'remove'],
    'Printing and business': ['print', 'design_services', 'palette', 'upload_file', 'business', 'handshake', 'verified', 'workspace_premium', 'eco', 'redeem', 'event', 'groups', 'storefront'],
    Communication: ['call', 'mail', 'chat', 'location_on', 'support_agent', 'language', 'schedule'],
    'Feedback and utilities': ['check', 'check_circle', 'info', 'warning', 'error', 'download', 'share', 'visibility', 'visibility_off', 'delete', 'edit', 'refresh', 'history', 'trending_up', 'search_off', 'content_copy'],
  };
  const iconGrid = $('#ds-icon-grid');
  if (iconGrid) {
    iconGrid.innerHTML = Object.entries(iconSets).flatMap(([cat, names]) => names.map((n) =>
      `<button type="button" class="ds-icon" data-icon="${n}" data-cat="${esc(cat)}" aria-label="Copy icon name ${n}"><span class="material-symbols-rounded icon-32" aria-hidden="true">${n}</span><code>${n}</code><span class="ds-icon__cat">${esc(cat)}</span></button>`)).join('');
    $$('.ds-icon', iconGrid).forEach((b) => b.addEventListener('click', () => copy(b.dataset.icon, `Copied “${b.dataset.icon}”`)));
    const search = $('#ds-icon-search');
    const countEl = $('#ds-icon-count');
    const filter = () => {
      const q = search.value.trim().toLowerCase().replace(/\s+/g, '_');
      let shown = 0;
      $$('.ds-icon', iconGrid).forEach((b) => { const hit = !q || b.dataset.icon.includes(q) || b.dataset.cat.toLowerCase().includes(search.value.trim().toLowerCase()); b.hidden = !hit; if (hit) shown++; });
      countEl.textContent = `${shown} icon${shown === 1 ? '' : 's'}`;
    };
    search.addEventListener('input', filter); filter();
    const verify = () => {
      const bad = $$('.ds-icon .material-symbols-rounded', iconGrid).filter((s) => s.getBoundingClientRect().width > 32 * 1.5);
      bad.forEach((s) => s.parentElement.classList.add('is-invalid'));
      const total = $$('.ds-icon', iconGrid).length;
      const weight = getComputedStyle($('.ds-icon .material-symbols-rounded')).fontVariationSettings;
      $('#ds-icon-verify').innerHTML = bad.length
        ? `<span class="ds-fail"><span class="material-symbols-rounded icon-16" aria-hidden="true">close</span>${bad.length} of ${total} names did not render as ligatures: ${bad.map((b) => b.textContent).join(', ')}</span>`
        : `<span class="ds-pass"><span class="material-symbols-rounded icon-16" aria-hidden="true">check</span>All ${total} icon names render as Material Symbols Rounded ligatures</span> <span class="hk-caption hk-text-muted">(checked in this browser after the font loaded; variation settings: <code class="ds-inline">${esc(weight)}</code>)</span>`;
    };
    if (document.fonts && document.fonts.load) document.fonts.load('200 24px "Material Symbols Rounded"').then(() => document.fonts.ready).then(() => setTimeout(verify, 150));
    else setTimeout(verify, 1500);
  }

  /* ---------------------------------------------------------------------
     6. Copy to clipboard
     --------------------------------------------------------------------- */
  function copy(text, msg) {
    const done = () => window.HK.toast(msg || 'Copied to clipboard', { type: 'success', duration: 2500 });
    const fallback = () => {
      const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { window.HK.toast('Copy failed — select the text manually.', { type: 'error' }); }
      ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ds-copy], [data-ds-copy-code]');
    if (!b) return;
    if (b.hasAttribute('data-ds-copy-code')) copy(b.parentElement.querySelector('code').textContent, 'HTML copied');
    else copy(b.dataset.dsCopy, `Copied ${b.dataset.dsCopy}`);
  });

  /* ---------------------------------------------------------------------
     7. Showcase navigation: build sidebar, active tracking, search
     --------------------------------------------------------------------- */
  const sections = $$('[data-ds-section]');
  const groups = {};
  sections.forEach((s) => { (groups[s.dataset.dsGroup] = groups[s.dataset.dsGroup] || []).push(s); });
  const navHTML = Object.entries(groups).map(([g, list]) => `<div class="ds-nav__group"><p class="ds-nav__title">${esc(g)}</p><ul class="ds-nav__list">${list.map((s) => `<li><a class="ds-nav__link" href="#${s.id}" data-keywords="${esc((s.dataset.dsKeywords || '') + ' ' + s.dataset.dsSection)}">${esc(s.dataset.dsSection)}</a></li>`).join('')}</ul></div>`).join('');
  $$('[data-ds-nav]').forEach((n) => (n.innerHTML = navHTML + '<p class="ds-nav__empty" hidden>No matching sections.</p>'));
  $$('[data-ds-nav] a').forEach((a) => a.addEventListener('click', () => { const d = a.closest('dialog'); if (d) d.close(); }));

  const links = () => $$('.ds-nav__link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links().forEach((l) => (l.getAttribute('href') === `#${en.target.id}` ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current')));
      const active = $('.ds-sidebar .ds-nav__link[aria-current]');
      if (active) { const sb = $('.ds-sidebar'); const r = active.getBoundingClientRect(); const sr = sb.getBoundingClientRect(); if (r.top < sr.top + 60 || r.bottom > sr.bottom - 20) active.scrollIntoView({ block: 'nearest' }); }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach((s) => observer.observe(s));

  $$('[data-ds-nav-search]').forEach((input) => {
    const nav = document.getElementById(input.getAttribute('aria-controls'));
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      let any = false;
      $$('.ds-nav__group', nav).forEach((g) => {
        let groupHit = false;
        $$('li', g).forEach((li) => { const a = $('a', li); const hit = !q || (a.textContent + ' ' + a.dataset.keywords).toLowerCase().includes(q); li.hidden = !hit; groupHit = groupHit || hit; });
        g.hidden = !groupHit; any = any || groupHit;
      });
      $('.ds-nav__empty', nav).hidden = any;
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); const first = $$('li:not([hidden]) a', nav)[0]; if (first) { first.click(); location.hash = first.getAttribute('href'); } }
    });
  });

  /* ---------------------------------------------------------------------
     8. LTR / RTL test toggle (showcase testing feature only)
     --------------------------------------------------------------------- */
  const dirBtn = $('#ds-dir-toggle');
  const setDir = (rtl) => {
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    dirBtn.setAttribute('aria-pressed', String(rtl));
    $('[data-ds-dir-label]', dirBtn).textContent = rtl ? 'RTL' : 'LTR';
    try { sessionStorage.setItem('hk-ds-dir', rtl ? 'rtl' : 'ltr'); } catch (e) { /* ignore */ }
  };
  if (dirBtn) {
    let initial = 'ltr'; try { initial = sessionStorage.getItem('hk-ds-dir') || 'ltr'; } catch (e) { /* ignore */ }
    setDir(initial === 'rtl');
    dirBtn.addEventListener('click', () => { setDir(document.documentElement.dir !== 'rtl'); window.HK.toast(`Layout direction: ${document.documentElement.dir.toUpperCase()} (design-system test only)`); });
  }

  /* ---------------------------------------------------------------------
     9. Viewport preview (iframe — real media queries at the chosen width)
     --------------------------------------------------------------------- */
  const vp = $('#ds-viewport');
  if (vp) {
    const frame = $('iframe', vp);
    const stage = $('.ds-viewport__stage', vp);
    const sizeLabel = $('.ds-viewport__size', vp);
    const tpl = $('#ds-vp-template');
    const base = location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
    const heads = $$('link[rel="stylesheet"], link[rel="preconnect"]').filter((l) => !/design-system\.css/.test(l.href)).map((l) => l.outerHTML).join('');
    frame.srcdoc = `<!doctype html><html lang="en" dir="${document.documentElement.dir || 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><base href="${base}">${heads}</head><body>${tpl.innerHTML}<script src="${base}assets/js/main.js"><\/script></body></html>`;
    let width = 390;
    const fit = () => {
      const avail = stage.clientWidth - 32;
      const scale = Math.min(1, avail / width);
      frame.style.width = `${width}px`;
      frame.style.transform = `scale(${scale})`;
      frame.style.transformOrigin = document.documentElement.dir === 'rtl' ? 'top right' : 'top left';
      frame.style.marginInline = scale < 1 ? '0' : 'auto';
      frame.style.marginBlockEnd = `${-(1 - scale) * frame.offsetHeight}px`;
      sizeLabel.textContent = `${width} px${scale < 1 ? ` · shown at ${Math.round(scale * 100)}%` : ''}`;
    };
    $$('[data-vp]', vp).forEach((b) => b.addEventListener('click', () => {
      width = Number(b.dataset.vp);
      $$('[data-vp]', vp).forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
      fit();
    }));
    window.addEventListener('resize', fit);
    fit();
  }

  /* ---------------------------------------------------------------------
     10. Motion previews, toasts, progress, misc demos
     --------------------------------------------------------------------- */
  $$('[data-ds-motion]').forEach((btn) => btn.addEventListener('click', () => {
    const track = document.getElementById(btn.dataset.dsMotion);
    const dot = $('.ds-motion-dot', track);
    dot.style.transition = 'none';
    track.classList.remove('is-run');
    void dot.offsetWidth;
    dot.style.transition = `inset-inline-start var(${track.dataset.duration}) var(${track.dataset.ease})`;
    track.classList.add('is-run');
  }));
  $$('[data-ds-toast]').forEach((b) => b.addEventListener('click', () => {
    const t = b.dataset.dsToast;
    const msg = { success: 'Artwork file attached (demonstration).', error: 'The file could not be attached. Try a PDF, AI or PNG under 10 MB.', info: 'Prices shown are sample values for the design system.', warning: 'This product is low in stock. Confirm availability before ordering.' }[t];
    window.HK.toast(msg, { type: t });
  }));
  const prog = $('#ds-progress-demo');
  if (prog) {
    $('#ds-progress-btn').addEventListener('click', () => {
      const bar = $('.hk-progress__bar', prog);
      let v = (Number(prog.getAttribute('aria-valuenow')) + 25) % 125;
      prog.setAttribute('aria-valuenow', v); bar.style.inlineSize = `${v}%`; $('#ds-progress-val').textContent = `${v}%`;
    });
  }
  // Lightbox navigation
  const lb = $('#ds-lightbox');
  if (lb) {
    const imgs = ['bottle.svg', 'tumbler.svg', 'mug.svg'];
    let i = 0;
    const show = () => { $('img', lb).src = IMG + imgs[i]; $('[data-lb-count]', lb).textContent = `Image ${i + 1} of ${imgs.length}`; };
    $('[data-lb-prev]', lb).addEventListener('click', () => { i = (i - 1 + imgs.length) % imgs.length; show(); });
    $('[data-lb-next]', lb).addEventListener('click', () => { i = (i + 1) % imgs.length; show(); });
    lb.addEventListener('keydown', (e) => { const rtl = document.documentElement.dir === 'rtl'; if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight')) { i = (i + 1) % imgs.length; show(); } if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft')) { i = (i - 1 + imgs.length) % imgs.length; show(); } });
  }
  // Confirm dialog result
  const confirmDlg = $('#ds-confirm');
  if (confirmDlg) confirmDlg.addEventListener('close', () => { if (confirmDlg.returnValue === 'confirm') window.HK.toast('Item removed from the enquiry list (demonstration).', { type: 'success' }); });
  // Announcement restore
  $$('[data-ds-restore-announce]').forEach((b) => b.addEventListener('click', () => { $$('[data-hk-announce]').forEach((a) => (a.hidden = false)); }));
  // Header search toggle on mobile demos
  $$('[data-ds-mobile-search]').forEach((b) => b.addEventListener('click', () => window.HK.openDialog('ds-search-sheet', b)));
  // Forms using data-hk-custom-success (e.g. the B2B newsletter) report validity here
  document.addEventListener('hk:valid', () => window.HK.toast('All fields are valid. Design-system example only; nothing was sent.', { type: 'success' }));
  // Indeterminate checkbox sample
  $$('.ds-indeterminate').forEach((c) => (c.indeterminate = true));
  // Filter form: applying inside the mobile drawer closes it
  const ff = $('#ds-filter-form');
  if (ff) ff.addEventListener('submit', () => { const d = ff.closest('dialog'); if (d) d.close(); });

  /* Demo-only actions. Buttons that represent unconfirmed production features
     explain themselves instead of silently doing nothing. */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    if (b.hasAttribute('data-ds-demo')) { window.HK.toast(b.dataset.dsDemo); return; }
    const hasBehaviour = b.type === 'submit' || b.type === 'reset' || b.closest('form[method="dialog"]')
      || Array.from(b.attributes).some((a) => /^(data-hk|data-ds|data-lb|data-vp|data-view|data-fill|data-k|data-clear|data-value|aria-controls|aria-haspopup|aria-pressed|aria-expanded)/.test(a.name))
      || /^(tab|switch|menuitem|menuitemradio|radio)$/.test(b.getAttribute('role') || '')
      || b.matches('.hk-toast__close, .hk-chip__remove, .ds-icon, .ds-copy, .hk-search__chip, .hk-backtop, .hk-mega__parent, .hk-footer__acc-trigger, .hk-tab, .hk-accordion__trigger, #ds-dir-toggle, #ds-progress-btn, .hk-stepper__btn');
    if (hasBehaviour) return;
    if (b.closest('.ds-preview, .ds-section, .ds-intro')) {
      const label = (b.getAttribute('aria-label') || b.textContent).trim().replace(/\s+/g, ' ');
      window.HK.toast(`Demo button “${label}”: shows interaction states only; no production action is connected.`);
    }
  });
})();
