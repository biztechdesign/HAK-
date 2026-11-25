# HAK Plus — Phase 2 validation report

**Date:** 24 Nov 2026 · **Build:** design system v0.1.0 (asset query `?v=0.1.4`)
**Environment:**
- Chromium-based browser pane in the Claude desktop app, viewport emulation.
- Page served over HTTP (`python -m http.server`, see `.claude/launch.json` at the project root). Opening the file directly via `file://` also works but wasn’t the validation route.
- Checks were run with scripts in the page plus visual screenshots. Anything not listed as tested was **not tested**.

## 1. Technical audit

| Check | Result |
|---|---|
| Page loads; console errors | ✅ No errors. One expected warning: “cdn.tailwindcss.com should not be used in production”. |
| Failed network requests (≥ 400) | ✅ None |
| Tailwind v3 Play CDN 3.4.16 + `tailwind.config.js` applied | ✅ Config object present; utilities resolve to token variables |
| Fonts: Manrope, Inter, IBM Plex Sans Arabic, Material Symbols Rounded | ✅ All four report loaded (`document.fonts.check`) |
| Icon weight | ✅ Computed `font-variation-settings: "FILL" 0, "GRAD" 0, "opsz" 24, "wght" 200` from a variable font with `wght` pinned at 200 |
| Icon ligatures | ✅ 64 of 64 catalogued names render as glyphs (checked by measuring glyph width) |
| JS syntax | ✅ `node --check` on `main.js` and `design-system.js`; `tailwind.config.js` loads as a CommonJS module |
| Showcase isolation | ✅ `.ds-*` styles and `design-system.js` used only by `design-system.html`; components use `.hk-*` and tokens |
| Code snippets | ✅ All `data-ds-snippet` blocks are populated |
| Image references | ✅ All local SVG placeholders resolve; the missing-image state is shown deliberately (`.is-broken`) |
| Viewport preview iframe | ✅ Loads shared CSS; at 390 px the header collapses (menu button visible) and the category grid is 2 columns |

### Issues found and fixed during validation

1. **Icon size classes collided with Tailwind `ms-*` (margin-inline-start) utilities**, which added up to 80 px of margin to icons. Renamed to `icon-16 … icon-48`, `icon-fill`, `icon-dir`.
2. **Input border contrast 2.61:1** (`neutral-400 #98A1B0`) failed WCAG 1.4.11. Token changed to `#858E9E` (3.30:1). The search field now keeps a strong border.
3. **Horizontal overflow on mobile** (up to 317 px), from four causes:
   - `.sr-only` elements escaping table scroll containers
   - hidden menus and tooltips kept in layout with `visibility: hidden`
   - Tailwind grids without explicit columns
   - non-wrapping provisional tags and spacing bars
   All were fixed in shared CSS or the showcase markup.
4. **Dialog cleanup relied on the async `close` event**, which never fired in a throttled background page during testing. Cleanup (scroll unlock, focus return) now runs from a MutationObserver on the `open` attribute.
5. Horizontal product card text didn’t wrap (`min-inline-size: 0` added; eyebrow and footer now wrap).

## 2. Responsive audit (horizontal overflow, scripted)

| Width | Result | | Width | Result |
|---|---|---|---|---|
| 320 | ✅ 0 px | | 1023 | ✅ |
| 360 | ✅ | | 1024 | ✅ |
| 375 | ✅ | | 1280 | ✅ |
| 390 | ✅ | | 1366 | ✅ |
| 414 | ✅ | | 1440 | ✅ |
| 480 | ✅ | | 1536 | ✅ |
| 639 / 640 | ✅ | | 1920 | ✅ |
| 767 / 768 | ✅ | | 2560 | ✅ (display heading capped at 64 px) |
| 834 | ✅ | | | |

**Method:** `scrollWidth` against the emulated width, plus a search for any unclipped element extending past the viewport.

**Visual screenshots reviewed:** 1440 (intro, hero, product cards, bento, printing band), 390 (product grid, collapsed header), 1280 RTL (Arabic section).

**Not tested:** 1279 and 1919 boundaries; portrait and landscape on physical devices; real browser zoom at 200% and 400% (emulation only); Safari and Firefox.

## 3. Interaction audit (scripted in the page)

| Feature | Result |
|---|---|
| Search: SKU query “hk91” | ✅ Shows the SKU match; Arrow Down sets `aria-activedescendant`; no-results state for “xyzq”; Escape closes |
| Enquiry form: empty submit | ✅ 7 invalid fields, error summary focused with links; telephone pattern message shown |
| Filters: category filter | ✅ 12 → 3 products, 1 chip; “Clear all” restores 12 |
| Tabs: Arrow Right | ✅ Moves selection and focus; panels toggle |
| Dialogs: modal, drawer, sheet, lightbox, mobile nav | ✅ Open, focus inside, scroll lock, unlock on close, focus returns to trigger |
| Mobile nav nested panels | ✅ Forward and back; focus moves to the back button, then returns to the originating item |
| Mega menu | ✅ Click opens (`aria-expanded=true`); Escape closes and returns focus |
| Quantity stepper | ✅ 10 snaps to MOQ 50 with an announced message |
| Accordion (single mode) | ✅ Opening one closes the other; closed panel is `inert` |
| RTL toggle | ✅ `dir=rtl` applied with no overflow; directional icons mirror |
| Swatches, wishlist, toasts, copy buttons, dropdown sort, view toggle | Implemented; exercised manually in screenshots, not exhaustively scripted |

## 4. Accessibility audit

- **Contrast:** 30 pairings calculated in the browser. All used pairings pass. Five fail and are documented as “never use”: white on orange 500 and 600, orange 500 as text, muted text on sand, and the original input border (now fixed).
- **Structure:** landmarks (header, nav, main), skip link, labelled forms, ARIA patterns per `accessibility-guidelines.md`. Focus visible on all interactive components.
- **Not tested:** screen readers (NVDA, JAWS, VoiceOver), Windows High Contrast / forced colours, real touch devices, automated axe or Lighthouse scan. Recommended before homepage sign-off.

## 5. RTL audit

- Logical properties throughout. Arabic sample section renders right-to-left with IBM Plex Sans Arabic.
- Breadcrumb separators, editorial arrows and chevrons mirror. Phone, SKU and price stay LTR.
- **Observation:** the nav pattern pushes the last item to the inline end, which looks isolated in short Arabic lists. Revisit when the real navigation is set.
- The Arabic copy is a machine-drafted sample and needs professional translation.

## 6. Design-system audit

- Components use semantic or component tokens. The remaining literal values are documented exceptions: swatch product colours, one dark-red danger hover (`#991B1B`), the success and error icon tints in dark toasts, and rgba overlays on dark surfaces. **Proposal:** tokenise these in v0.2.0.
- One button system, one tab style, one overlay surface, one card radius family.
- Showcase-only styles are isolated.

## 7. Outstanding before production
- Official logo SVG and brand colour confirmation.
- Real product, lifestyle and production photography.
- Business rules (pricing visibility, ordering model, MOQ, stock, VAT, delivery, reseller portal).
- Compile Tailwind CSS (remove the Play CDN).
- Screen-reader and device testing.
