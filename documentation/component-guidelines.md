# HAK Plus — Component guidelines

**v0.1.0.** Every component below is live in [`design-system.html`](../design-system.html), which also shows copyable HTML for each one. Styles live in `assets/css/components.css`; behaviour lives in `assets/js/main.js`, attached through data attributes.
Common to all components:
- Logical CSS properties
- Sentence-case labels
- Visible focus
- No hover-only information
- Semantic tokens only

---

## Buttons — `.hk-btn`
- **Anatomy:** optional leading or trailing icon (20 px) and a label.
- **Variants:**
  - default (primary, indigo)
  - `--secondary` (outlined)
  - `--accent` (orange, **ink text**)
  - `--neutral`, `--ghost`, `--link`, `--danger`
  - `--inverse` and `--inverse-outline` (on dark surfaces)
  - `--icon`
- **Sizes:** `--sm` 36, default 44, `--lg` 52 px. `--block` and `--block-mobile` make them full width.
- **States:** hover, focus-visible, active, `:disabled` / `aria-disabled`, `.is-loading` (keeps its width, blocks repeat clicks, `aria-busy`), `aria-pressed="true"` for selected.
- **Rules:** one primary per view. Use `<a>` for navigation and `<button>` for actions. Labels are verbs (“Request a quote”, “View collection”). Don’t create a style per label.

## Links — `.hk-link`, `--quiet`, `--nav`, `--editorial`, `--external`, `--footer`
- Always underlined or positioned as navigation.
- The editorial link carries a `.icon-dir` arrow. Use it only for “next step” links.
- External links: `target="_blank" rel="noopener"` plus an `open_in_new` icon and screen-reader text saying “opens in a new tab”.
- An unavailable destination uses `aria-disabled="true"` with no `href`.

## Form fields — `.hk-field`, `.hk-label`, `.hk-input`, `.hk-select`, `.hk-textarea`, `.hk-input-group`
- **Anatomy:** label (persistent), control, help text (`.hk-help`), and a message (`.hk-field-msg--error` / `--success`) with icon and text.
- **Input group parts:**
  - `__icon` (leading icon)
  - `__addon` (prefix or suffix such as AED or “pieces”)
  - `__action` (trailing button such as clear or show password)
  - `__select` (country code)
- **States:** hover, focus (indigo ring), filled, disabled, read-only (dashed), `aria-invalid="true"`, `.is-valid`, loading (spinner in the group).
- **Rules:**
  - Required fields are marked with `*` plus screen-reader text.
  - Use the correct `type`, `autocomplete` and `inputmode`.
  - Phone, email and SKU fields are `dir="ltr"`.
  - One column below 640 px (`.hk-form-grid`).
  - Values are kept on error.
- **Validation:** add `form[data-hk-validate]`.
  - Errors show on blur once a field has content, and on every field at submit.
  - The error summary (`[data-hk-form-summary]`) takes focus and links to each field.
  - **It never fakes a submission.**
- **File upload:** `.hk-file`, with a native input stretched over the drop zone. `data-max-mb`, `data-hk-file-list` and `data-hk-file-error` set the size limit, file list and error target.

## Selection controls — `.hk-check`, `.hk-switch`
- Native checkbox and radio inputs, styled. Indeterminate is supported.
- Group them with `fieldset` and `legend`.
- The switch is `button[role=switch][aria-checked]`. Use it only for settings that take effect immediately.

## Quantity stepper — `.hk-stepper[data-hk-stepper]`
- The input’s `min` is the MOQ; `step` and `max` are respected.
- A value below the MOQ snaps to the minimum and announces why through `role=status`.
- *Provisional: ordering rules are unconfirmed.*

## Tabs — `.hk-tabs`
- `role=tablist` (with an `aria-label`), `role=tab` (with `aria-controls`) and `role=tabpanel` (with `aria-labelledby`).
- Automatic activation, arrow keys (mirrored in RTL), Home and End, roving tabindex.
- Variants: default (16 px) and `--compact` (14 px). The list scrolls horizontally on narrow screens.
- Hide a tab whose panel would be empty.

## Badges — `.hk-badge` (`--brand`, `--accent`, `--eco`, `--solid`, `--offer`); stock — `.hk-stock--in/low/out`
- At most two badges per card, and they must be factual.
- Stock always pairs a dot with text.
- “Low stock” and “Offer” only when backed by real data.

## Accordion — `.hk-accordion` (`--compact`)
- Structure: heading, then `button.hk-accordion__trigger[aria-expanded][aria-controls]`, then `.hk-accordion__panel[role=region]`.
- Closed panels are `inert`.
- `data-hk-accordion-single` allows only one panel open at a time.
- `expand_more` rotates on open.
- The mobile footer uses the same pattern (`.hk-footer__acc-trigger`).

## Dropdown and popover — `[data-hk-dropdown]` containing `.hk-menu` or `.hk-popover`
- **Menu:** `aria-haspopup="menu"`, `role=menu`, `menuitem` or `menuitemradio`.
- **Keys:** Arrow Down opens; arrows move; Home and End jump; Escape closes and returns focus; Tab closes. Outside click closes.
- `hk:select` fires with `{ value, label }` for radio menus.
- `--end` aligns the menu to the inline end.

## Tooltip — `.hk-tooltip-wrap` containing `.hk-tooltip[role=tooltip]`
- Supplementary text only, linked with `aria-describedby`.
- Shows on hover and focus after 300 ms, stays while hovered, and Escape dismisses it.

## Search — `.hk-search[data-hk-search]`
- Combobox (`role=combobox`, `aria-expanded`, `aria-activedescendant`) with a listbox panel.
- **Panel content:** recent searches (localStorage, safely wrapped), popular searches, grouped categories and products, a dedicated SKU-match heading, a loading state, a no-results state with suggestions, a clear button and a live-region result count.
- Data comes from `window.HK.searchData`. **Demo data only; no catalogue integration.**
- Below 1024 px the header shows a search button that opens a search sheet.

## Category card — `.hk-cat-card` (homepage `.hk-cat-cards`, D-86)
- **Anatomy:** a 1:1 `.hk-cat-card__media` tile on `--hk-warm-50`, with no border or shadow, holding a trimmed product photo (`assets/images/categories/`) at 12% padding with a multiply blend. It is followed by a centred name link (Inter 14/500, primary text) with a stretched `::after`.
- **States:** hover (`--hk-warm-100` tile, product scaled to 1.04), focus (ring on the tile), long names wrap. The last tile is `--all` (indigo, same size and radius).
- `--round` is an explored alternative and is **not approved for production**.

## Shop card v4 — `.hk-shop-card--v4` (homepage listing, D-86)
- **Anatomy:**
  - 1:1 media on `--hk-neutral-50`, with an optional badge and hover quick actions
  - `.hk-shop-card__info`: name (Inter 16/500, two lines at most) and category (13/400, muted)
  - `.hk-price`: AED 18–20/600, with `--request` and `--sale` variants and a `__from` prefix
  - the outlined `.hk-shop-card__quote` (`data-hk-add-quote`)
- **Layout:** the grid uses subgrid rows, so prices and buttons align across a row.
- **Rules:**
  - Show a price only when a verified figure exists; otherwise show "Price on request".
  - Never show SKUs on these cards.

## Product card — `.hk-product`
- **Anatomy, in order:**
  - media (1:1, contain, 9% padding)
  - badges (at most 2)
  - wishlist (`data-hk-wishlist`, `aria-pressed`)
  - eyebrow (category and SKU)
  - title link (stretched)
  - swatches
  - specs (MOQ, stock, customisation)
  - footer (price block plus one optional action)
- **Variants:** standard, `--compact` (no eyebrow or specs), `--horizontal` (list view), `--search` (preview), `--skeleton`.
- **Price states:** `.hk-price` (value, range or unit), `--request` (“Price on request”), `--signin` (provisional), “Pricing unavailable”. **Never “AED 0”.**
- **Interactive layering:** wishlist, swatches and the action sit at z-index 2, above the stretched link.
- `.is-unavailable` dims the image for out-of-stock items.
- **Responsive:** minimum column 216 px, 2-up below 480 px, `.hk-auto-grid--dense-1col` for information-heavy listings.

## Colour swatches — `.hk-swatches[role=radiogroup]` containing `.hk-swatch[role=radio]`
- Each swatch has an `aria-label` with the colour name.
- Unavailable swatches use `aria-disabled` (diagonal strike, skipped by the arrow keys, and a toast explains why).
- The selected name shows as text in `[data-hk-swatch-label]`.
- Dot 20 px, hit area 32 px.
- “+n” is followed by screen-reader text.

## Filters and catalogue controls
- `.hk-filter` groups inside a compact accordion. Group types:
  - checkboxes with counts
  - category search
  - `.hk-filter__colour` toggle buttons (`aria-pressed`) with swatch and name
  - availability and MOQ
  - price range (only if pricing is approved)
- `.hk-toolbar`: result count, sort menu, `.hk-viewtoggle` (grid or list, `aria-pressed`).
- `.hk-active-filters`: removable `.hk-chip`s and “Clear all”. Focus moves sensibly after a chip is removed.
- Below 1024 px the **same form element** moves into a drawer dialog, so there is no duplicated markup.
- Empty state with a clear action and a contact action.

## Pagination and navigation aids — `.hk-pagination`, `.hk-breadcrumb`, `.hk-steps-ind`, `.hk-backtop`
- **Pagination:** previous, numbers, ellipsis, next, `aria-current="page"`. Far pages and labels collapse below 480 px.
- **Load more:** a secondary button plus a progress bar.
- **Breadcrumb:** CSS-masked chevron separators (mirrored in RTL). `--collapse` shows only the last two levels on mobile.
- **Step indicator:** `aria-current="step"`; only the current label shows on mobile.
- **Back to top:** appears after scrolling 800 px.

## Editorial and promotional
- **`.hk-promo`** (base warm). Variants:
  - `--split` (two columns from 768 px; `--media-start` reverses the order)
  - `--brand`, `--sand`, `--full`
  - `--overlay` (scrim gradient, text always HTML)
- **`.hk-strip`:** a compact one-line promotion.
- **`.hk-bento`:** a 12-column asymmetric grid. Tiles: `--hero` (7 columns × 2 rows), `--tall` or `--wide` (5), `--third` (4); surfaces `--sand`, `--brand`, `--alt`. 2 columns on tablet and 1 on mobile. Each tile is one stretched link.
- **`.hk-solution`:** event and recipient card, 4:3, title, one-line text, optional tags.
- **`.hk-occasion`:** 4:5 sand card with a date line. `--current` marks the in-season card. Occasions need start, end and priority data, and expired ones never render.

## Printing and process
- **`.hk-service`:** editorial split. Media 5 of 12 columns, text 7 of 12. `--media-end` swaps them.
- **`.hk-print-card`:** icon tile, method name (stretched link), one-line description, and “Best for”. Works on light and `.hk-surface-brand`.
- **`.hk-process`:** an `<ol>` with zero-padded counters and an orange first-step rule.
  - `--h`: 4 columns from 1024 px.
  - default: 2 columns from 768 px.
  - `--v`: vertical.

## Benefits and trust
- **`.hk-usp`** item and **`.hk-usp-strip`** (supporting text hidden below 1024 px).
- **`.hk-stat`:** verified figures only.
- **`.hk-logos`:** approved client logos only. They show in greyscale and turn to colour on hover; the hover is decorative only.
- **`.hk-testimonial`:** approved quotes only.
- The whole trust section is hidden when there is no approved content.

## Conversion — `.hk-cta-split` containing `.hk-cta-card` (`--brand`)
Separate pathways for corporate bulk buyers (primary) and resellers (accent button).

## Announcement — `.hk-announce[data-hk-announce]` (`--warm`)
- Dismissed with `[data-hk-announce-close]`.
- Long text wraps; it is start-aligned on mobile.
- Hidden when nothing is active.

## Header — `.hk-utility`, `.hk-header`, `.hk-nav`, `.hk-mega`
- **Utility bar:** contact, WhatsApp, resellers, catalogue. Hidden below 1024 px.
- **Header bar:** logo, SKU-aware search, “Request a quote”, account, wishlist and cart (provisional).
- **Below 1024 px:** menu, logo, search button, cart.
- **Mega menu:** a trigger button (`aria-expanded`, `aria-controls`, `data-hk-mega-trigger`).
  - Opens on click, Enter or Arrow Down; hover is an enhancement on mouse devices only.
  - Escape closes it and returns focus; focus leaving closes it.
  - Parent categories form a vertical tablist. Subgroups are link lists. An optional feature column appears at ≥ 1280 px.
- **Do not redesign the header per page.**

## Mobile navigation — `.hk-mnav` inside `dialog.hk-dialog--drawer-start`
- Nested panels (`data-hk-mnav-target` / `data-hk-mnav-back`). Focus moves to each new panel and returns to the trigger on back.
- Quick actions (quote, WhatsApp) are pinned at the bottom.
- The panel stack resets on close.

## Footer — `.hk-footer`
- Contact block plus 4 link columns. Below 640 px the columns become accordions.
- Legal row and official social marks.
- **Use verified contact details only** (currently placeholders).

## Overlays — native `dialog.hk-dialog`
- **Variants:**
  - default modal (560 px), `--lg` (800 px)
  - `--drawer` (end side) and `--drawer-start`
  - `--sheet` (bottom on mobile, centred from 768 px)
  - `--lightbox`
- **Open and close:** `data-hk-dialog-open="id"` / `HK.openDialog(id)`.
  - Focus moves to `[autofocus]` or the close button.
  - The body is scroll-locked.
  - Escape, backdrop click and `[data-hk-dialog-close]` close it, and focus returns to the trigger.
  - Cleanup runs through a MutationObserver on `open`, so it works for every closing route.
- **Confirmation:** `role=alertdialog` with `form method="dialog"`; the safe choice is autofocused.

## Feedback
- **`.hk-alert`:** `--success`, `--warning`, `--error`, `--neutral`. Icon, title and text.
- **`HK.toast(msg, { type })`:** polite live region. Auto-dismisses after 5 s, pauses on hover or focus, and has a close button. Not for errors that need action.
- **Loading:** `.hk-spinner`, `.hk-progress` (determinate with ARIA values, or `--indeterminate`), `.hk-skeleton` (`--text`, `--media`).
- **Empty state:** `.hk-empty` with icon, title, text and actions.
- **Media fallback:** `.hk-media.is-broken` is added automatically when an image fails to load.

## Adding a component
1. Check that nothing existing fits.
2. Build it from semantic tokens.
3. Add it to `components.css` and the showcase.
4. Document it here.
5. Log it in `design-decisions.md`.
6. Re-validate responsiveness, accessibility and RTL.


---

## v0.2.0 — Homepage components

- **Hero banner — `.hk-promo--hero`** (extends `.hk-promo--split`). 5/7 split at ≥1024 px, 1/1 from 768 px, stacked with a 16:10 image below. Hero image eager + `fetchpriority="high"`. One H1, two actions; below 640 px buttons use medium size to sit in one row.
- **Supporting banners — `.hk-banner-row` > `.hk-banner-card`** (Option B). Background image (`__media`, cover, bottom-anchored), heading (`__title`) and one stretched link (`__link`) at the top. Card focus ring on `:has(:focus-visible)`. Configurable with `data-order`, `data-start`, `data-end` (`data-hk-campaign`). 4 columns ≥1024 px, 2 columns, 1 column <360 px. Art direction: keep the top-left area of photos clear for text.
- **Hexagonal category — `.hk-hex-grid` > `.hk-hex`**. `__frame` (SVG-masked hexagon via `--hk-hex-mask`; `::before` outline/focus ring, `::after` focus gap), `__shape` (fill), `__img` (cutout), `__name.hk-hex__link` (stretched link — the whole tile is the target). Variants `--brand`, `--accent` for rare emphasis only. Extra tiles carry `data-hk-more hidden` and a `[data-hk-show-more]` button (aria-expanded) reveals them.
- **Occasion grid — `.hk-occasion-grid`** with `.hk-occasion--scene` cards (image + body below). First in-season card gets `--current` (indigo, 2 columns); `.hk-occasion-grid--tall` (2 rows) only when ≥5 cards are visible.
- **Explorer — `.hk-explorer`**: `__list[role=tablist][data-hk-orientation]`, `__tab[role=tab]`, `__panel[role=tabpanel]` with media + `__body` + `__tags`. Orientation attribute is switched by JS at 1024 px.
- **Assistance — `.hk-assist`**: `__content` (heading, copy, `__checklist`, `__actions`), `__media[data-hk-mascot]` (approved art or `__placeholder`). `--no-media` gives a text-only layout. Never place mascots elsewhere.
- **Resources — `.hk-resources` > `.hk-resource`**: leading icon, `__text` (`__title` stretched link/button + `__meta` access note), `__trail` icon (download / lock / arrow).
- **B2B newsletter — `.hk-newsletter`**: `__intro` + form (`.hk-form-grid`, `__footer` with consent + submit). Use `data-hk-validate data-hk-custom-success`; listen for `hk:valid` to show loading and the prototype message.
- **External commerce link — `[data-hk-commerce-link]`** on `.hk-btn--secondary.hk-btn--sm.hk-header__shop` (desktop), mobile menu footer and footer list. `open_in_new` icon + screen-reader text. Destination from config only.
- **Shared helpers**: `.hk-utility__btn` (button styled as utility link), `.hk-footer__cols--5`, `.hk-surface-soft` (indigo-50 band).
- **Future-route links**: `a[data-route]` on the homepage show a notice naming the planned path until the page exists (home.js).

- **Header v0.5.0:** `.hk-topbar` (with `.hk-ticker`: `[data-hk-ticker]`, `[data-hk-ticker-item]`, prev/next buttons; expired items skipped, single item hides arrows, empty hides the ticker), `.hk-topbar__links` (`.is-accent` for the registration link), `.hk-search__filter` + menu (sets `data-scope` on the search; `main.js` filters results), `.hk-header__tools` / `.hk-tool` (icon + label; `.hk-tool__badge`; labels visually hidden and desktop-only tools hidden below 1024 px), `.hk-nav--bar` with `.hk-nav__cat-btn` (mega trigger) and `.hk-nav__callback`.
