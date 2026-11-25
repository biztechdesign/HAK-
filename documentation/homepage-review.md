# HAK Plus — Homepage review (phase 3)

**Build:** `index.html` · design system v0.2.0 (asset query `?v=0.2.7`) · 24 Nov 2026
**Status:** prototype for internal review and Figma confirmation. The section order and content are **proposed**, not client-approved.
**Preview:** run the `hak-plus-static` launch config, then open `http://localhost:8765/index.html`.
- Add `?mode=customer` to preview the public view (provisional-only sections and labels hidden).
- Add `?date=YYYY-MM-DD` to test seasonal campaign windows.

---

## 1. Inputs and limitations

- **Reviewed:**
  - the master brief and phase 1–2 documentation
  - the rendered `design-system.html`
  - tokens, shared CSS and JS
  - the two client concept screenshots
  - phase 1 research of hakplus.com, competitors and references
- **Not available:**
  - **mascot reference images** (none were attached; the section uses a labelled placeholder)
  - official logo
  - HAK Plus product or production photography
  - the Zoho Commerce URL
  - Figma files (none were created or edited)
- **References still inaccessible:** Leo Agista demos (HTTP 403) and Ap Aprin demos (password-protected). Swag rendered no content. No observations were invented.
- **Imagery:** all images are local, representative SVG compositions built from placeholder product drawings and labelled “Representative image”. They are not presented as real inventory.

## 2. Final section order (as implemented)

| # | Section | Component(s) | Visibility |
|---|---|---|---|
| 1 | Announcement bar | `.hk-announce` | Date window (1 Nov – 2 Dec 2026); dismissible |
| 2 | Utility bar, header, search, nav, mega menu, **Shop online** | `.hk-utility`, `.hk-header.is-sticky`, `.hk-search`, `.hk-mega` | Always |
| 3 | Main hero | `.hk-promo--hero` | Always |
| 4 | Four supporting banners (Option B) | `.hk-banner-row` / `.hk-banner-card` | Each configurable (order, window) |
| 5 | Business benefits | `.hk-usp-strip` | Always; two claims marked “Verify” |
| 6 | Shop by category (hexagons) | `.hk-hex-grid` / `.hk-hex` | 12 shown + “Show all 18 categories” |
| 7 | Printing and personalisation, including the ordering process | `.hk-service`, `.hk-process--v`, `.hk-print-card` | Always (indigo band) |
| 8 | Festivals and occasions | `.hk-occasion-grid` | Date-aware; current season featured |
| 9 | Corporate events | `.hk-explorer` (vertical tabs) | Always |
| 10 | Employees and partners gifts | `.hk-solution` | Always |
| 11 | Featured products (tabs) | `.hk-tabs` + `.hk-product` | Always (sample data) |
| 12 | Offers | `.hk-promo--split --sand` | **Review only** until an approved offer exists |
| 13 | Mascot-led gifting assistance | `.hk-assist` | Always; text-only in customer view until mascot approved |
| 14 | Bulk orders, resellers and resources | `.hk-cta-split`, `.hk-resources` | Always |
| 15 | Trusted by businesses | `.hk-logos` | **Review only** until approved logos |
| 16 | FAQ | `.hk-accordion` | **Review only** until verified answers |
| 17 | Newsletter (four fields) | `.hk-newsletter` | Always |
| 18 | Footer | `.hk-footer` with `--5` columns | Always |

Plus a prototype-only “Internal review view / Customer view” switch (bottom-left) and a callback dialog.

## 3. Key design decisions

- **Corporate-first hero:** product-led composition on warm ivory and sand, one H1 (“Your brand. Made memorable.”), and two actions (“Explore products”, “Request a quote”). No mascots and no carousel.
- **Option B banners:** four equal cards below the hero with heading and link at the top and product imagery below. Four columns from 1024 px, 2 × 2 on tablet and phones, one column below 360 px.
- **Hexagons, refined:** one neutral ivory hexagon with softened corners and a sand outline, cutouts inside and labels below. There are no per-category pastel colours. The focus ring follows the hexagon outline. Columns: 6 at desktop, 3 on standard phones, 2 below 360 px.
- **Distinct treatments per lens:**
  - categories (*what*): hexagons
  - occasions (*when*): date-aware featured grid
  - events (*where*): vertical-tab explorer
  - recipients (*who*): 4:3 editorial cards
  - printing (*how*): indigo service band
  - conversion (*how to proceed*): split CTA plus resource list
- **How it works** is merged into the printing section (vertical steps), so there is no separate block.
- **Final conversion** is merged into the bulk/reseller section. No extra closing CTA band was added.
- **Featured products:** no price, MOQ, stock or wishlist (rules unconfirmed). Each card shows SKU, colours, branding methods and “View product”. The tabs are “Featured products” and “New arrivals”; “Best sellers” was omitted until sales data exists.
- **Online store link:** labelled “Shop online”. It appears in the desktop header, the mobile menu footer and the footer business resources, never twice in the same view. The destination is configurable and shows a “pending” message while unset.
- **Resellers:** “Reseller login” keeps the existing hakgifts.com destination seen on the current site, separate from “Shop online”.
- **Not added:** cart, wishlist or checkout.

## 4. Reused design-system components
Buttons, links, input groups, form grid, checkboxes, dialogs (drawer, sheet, modal), mobile navigation, mega menu, search combobox, tabs, accordion, badges, swatches, product card, media and fallback, `hk-promo` split, `hk-usp-strip`, `hk-service`, `hk-process`, `hk-print-card`, `hk-solution`, `hk-occasion`, `hk-cta-split`, `hk-logos`, announcement, utility bar, footer, toast, back-to-top.

## 5. New component variants (v0.2.0, documented in the showcase)

| Component | Class | Notes |
|---|---|---|
| Hero banner | `.hk-promo--hero` | Extends `.hk-promo--split`; 5/7 at ≥ 1024 px; smaller buttons in one row below 640 px |
| Supporting banners | `.hk-banner-row`, `.hk-banner-card` | Option B |
| Hexagonal category | `.hk-hex-grid`, `.hk-hex` (`--brand`, `--accent`) | SVG mask; layered focus ring |
| Occasion grid | `.hk-occasion-grid` (`--tall`), `.hk-occasion--scene` | Date-aware via `home.js` |
| Explorer | `.hk-explorer` | Vertical or horizontal tabs; orientation set by JS |
| Gifting assistance | `.hk-assist` (`--no-media`) | Mascot slot with fallback |
| Business resources | `.hk-resources`, `.hk-resource` | Access notes |
| B2B newsletter | `.hk-newsletter` | Four fields |
| External commerce link | `.hk-header__shop` + `[data-hk-commerce-link]` | Config-driven |
| Misc | `.hk-utility__btn`, `.hk-footer__cols--5`, `.hk-surface-soft` | Shared |

JS additions:
- **`main.js`:**
  - `data-hk-custom-success` forms dispatch `hk:valid` instead of showing the generic summary.
  - Tab orientation is read on each keypress.
- **`home.js`** (homepage only):
  - config
  - campaign windows
  - review/customer mode
  - conditional sections
  - commerce link
  - future-route notices
  - category expansion
  - sample products and search data
  - form prototype states

No global tokens were changed in phase 3.

## 6. Newsletter implementation

- **Fields:** full name (optional), company name (optional), work email (**required**), phone (optional; international pattern, 7–15 digits).
- **Email:** standard email validation only. Gmail and Outlook addresses are accepted.
- **Consent:** checkbox, unticked and required, with a privacy policy link. Wording is marked pending legal review.
- **Submit:** validation, then a loading state, then an honest message (“This is a prototype, so no subscription has been created”). The values are kept.
- **Required-field rules are provisional.**

## 7. Responsive validation (actually performed)

**Method:** emulated viewport in the Claude desktop browser pane. A script checked `scrollWidth` against the width and searched for unclipped elements beyond the viewport. Screenshots were reviewed visually.

| Width | Overflow | Visual review |
|---|---|---|
| 320 | ✅ none | ✅ hero, banners (1 column) |
| 360 / 375 | ✅ none | — |
| 390 | ✅ none | ✅ hero, banners 2 × 2, hexagons 3-up, events explorer |
| 414 / 480 / 640 | ✅ none | — |
| 768 / 834 | ✅ none | — |
| 1023 / 1024 | ✅ none | — |
| 1280 | ✅ none | ✅ RTL mirror, hexagon keyboard focus |
| 1366 / 1536 / 1920 | ✅ none | — |
| 1440 | ✅ none | ✅ every section, top to bottom |
| 2560 | ✅ none | Hexagons 6 columns, banners 4 columns, container 1416 px (1320 + gutters) |

**Fixed during review:**
- hexagon grid 7 + 5 → 6 + 6
- printing image low contrast
- printing methods 4 + 2 → 3 × 2
- occasion grid empty cell and over-tall images
- product grid empty fifth column
- resource icon styling
- mobile hero buttons stacking
- banner links overlapping product images
- hexagon focus ring covering the tile
- the route notice reading icon ligature text

**Not tested:** 1279 and 1919 boundaries, physical devices, landscape phones, Safari and Firefox, real browser zoom at 200% and 400%.

## 8. Accessibility checks (actually performed)

- **Automated scan in the page:**
  - 1 H1
  - no skipped heading levels
  - header, nav, main and footer landmarks present
  - 0 images without `alt`
  - 0 interactive elements without an accessible name
- **Scripted interaction tests:**
  - **Mega menu:** click open, Escape close, focus return.
  - **Mobile menu:** nested panel, focus return.
  - **Search:** SKU “HK91” returns the matching product.
  - **Show all categories:** reveals 18 tiles and focuses the first new tile.
  - **Event explorer:** arrow key moves selection; horizontal orientation below 1024 px.
  - **Newsletter, empty submit:** email and consent marked invalid; focus moves to email.
  - **Newsletter, valid submit:** Gmail address and UK phone accepted, then loading, then the prototype message.
  - **Callback form:** two required fields flagged.
  - **Swatch:** selection updates the colour label.
  - **Online store:** link shows the pending notice.
  - **Future-page links:** show the route notice.
  - **Review/customer toggle:** hides offers, trust and FAQ, 0 provisional labels visible, mascot slot removed.
- **Keyboard focus:** a real Tab key press shows the indigo hexagon ring.
- **Console:** no errors.
- **Contrast:** all new text and background pairs use system tokens already verified in phase 2. Banner links are indigo on light scene backgrounds (≥ 6:1 calculated for the stone background).
- **Not tested:** screen readers, forced colours, an axe or Lighthouse scan.

## 9. Outstanding client confirmations

1. Final homepage content and section order (Figma confirmation).
2. **Zoho Commerce URL**, its audience (corporate buyers, resellers or both), and whether it handles all purchases.
3. Whether the main site is catalogue-only, and whether cart, wishlist and account stay.
4. Guest and reseller pricing visibility; MOQ and stock data.
5. Newsletter required fields, consent wording, and the email platform integration.
6. **Mascot:** official status, names, usage guidelines and high-resolution assets.
7. Approved product, campaign and production photography; the official logo SVG.
8. Final printing method list (14 are listed on the current site).
9. Approved client logos and testimonials (the trust section stays hidden until then).
10. Verified FAQ answers (MOQ, samples, lead times, reseller criteria).
11. An approved offer for the Offers section (hidden until then).
12. Artwork and quotation workflow (the process steps are provisional).
13. Official contact details, address (Sharjah or Dubai), working hours, WhatsApp number, social accounts.
14. Availability and access rules for the catalogue, white-label catalogue, videos and marketing materials.
15. Confirmation of the benefit claims: in-house branding, UAE-wide delivery.
16. Arabic launch scope.
17. Seasonal calendar and campaign dates (for example the Ramadan 2027 start, which depends on moon sighting).

## 10. Known prototype limitations

- Tailwind runs from the Play CDN; production needs compiled CSS.
- Category, product, collection, quote, registration and policy links show a “planned for a later phase” notice. No other pages exist yet.
- Search uses sample data. Featured products are sample data with demonstration SKUs.
- Representative SVG imagery stands in for photography. The logo is a temporary typeset wordmark.
- The callback and newsletter forms validate only; nothing is sent.
- The review/customer switch and `?date` override are prototype tools, to be removed before launch.

---

## 11. Update v0.3.0 — client photography replaces vector scenes (24 Nov 2026)

At the client's request, the representative vector scenes were replaced with images from the **current HAK Plus website** (hakplus.com). These are the client's own assets. The other source considered, Freepik, was **not used**: its free images need visible attribution, Premium needs a paid licence, and downloads need a signed-in account.

| Use | Source on hakplus.com | Local file |
|---|---|---|
| Official logo | `catalog/HAK+ logo New JPG-2-2.png` (trimmed, resized, **not recoloured**; shown on a white plate in the dark footer) | `brand/hak-plus-logo.png` |
| Hero | “Unbeatable Prices” banner photo HK0489 (original 2080 px) | `banners/hero-cork-gift-set.webp` |
| Banners 1–3, printing, 4 occasions, 3 gifting cards | “Unbeatable Prices” lifestyle photos (originals about 2080 px, cropped and compressed to WebP) | `banners/`, `printing/`, `occasions/`, `gifting/` |
| Hexagons, featured products, events, banner 4, milestones, client gifts | Catalogue product photos (413 × 488, white background) from category listing pages | `products/hk####-name.webp` |

**Details:**
- Product photos use `mix-blend-mode: multiply` (`.hk-media--contain`, `.hk-hex__img`, `.hk-banner-card__media--product`), so white backgrounds blend into the ivory tiles.
- Supporting banners now show the heading and link on a solid panel above the photo, so real photography never sits behind text.
- Product names and SKUs on cards and in search come from each image’s own `alt` text on hakplus.com. Colours are shown only where the photo shows them. Branding methods are listed only for HK91, whose product page lists them; other cards say “Custom branding available”.
- The Featured / New arrivals *selection* remains unconfirmed, and “New” badges were removed.
- **Rejected from the client site:** category collage tiles, circular product tiles and promotional banners, because their text is baked into the image.

**Still needed:**
- production and printing photography (the printing image is a pen close-up, labelled)
- corporate event photography (event panels currently show product shots)
- higher-resolution product photos (catalogue images are 413 px wide)
- written confirmation that the hakplus.com photos may be reused in the redesign
- mascot artwork

**Validation after the change:** 46 images return HTTP 200, 0 console errors, no horizontal overflow at 320, 390, 1024 or 2560 px, and screenshots reviewed at 1440 and 390 px.

## 12. Update v0.3.1 — layout tightening (24 Nov 2026)

Client feedback: “layout is looking too bad”. Self-review at 1536 px found that the page was sparse and too long (9,646 px), products were too small, several frames were large but nearly empty, and the hero was heavy.

**Changes:**
- **Section spacing:** homepage sections now use the compact end of the spacing scale (40 → 72 px, in `home.css`). No global token changed.
- **Hero:**
  - brighter desk-set photo
  - headline at the H1 size on two lines
  - equal 50/50 columns
  - image height 22–28 rem
- **Gift box photo:** moved to the “Custom gift sets” banner, where it fits the theme.
- **Product size:** inner padding on product photos reduced from 10% to 4%; hexagon product area enlarged from 72% to 84%.
- **Printing:** square image plus a 2 × 2 process grid instead of a tall vertical list.
- **Offers:** a compact one-line strip instead of a large banner with a small image.
- **Mascot slot:** reduced to 18 rem, with tighter section padding.
- **Event panels:** media ratio 4:3.

**Result:** page height went from 9,646 px to 8,610 px at 1536 px. No overflow at 320, 390, 768, 1024 or 1920 px, and no console errors.

## 13. Update v0.4.0 — bento showcase (24 Nov 2026)

At the client's request, the hero and supporting banners now follow the supplied bento reference. The new component is `.hk-showcase`:
- an indigo hero card with text at the bottom left and the desk-set photo on the right
- two banner tiles stacked beside it, text left and image panel right
- two wide tiles below

All four banners and their configuration (`data-order`, campaign windows) are kept.
- **Hero:** stays the page H1, styled at H2 size so it fits on two lines. The accent button uses ink text for contrast; the reference's white-on-orange fails AA.
- **Layout:** desktop is a 7/5 split over two rows, then a 6/6 pair; tablet puts the hero full width with tiles 2-up; mobile stacks everything.

**Checks:** no overflow at 320, 390, 768, 1024, 1440 or 1920 px, no console errors, and the design-system showcase section has been updated.

**v0.4.1 (client request):** the two wide tiles, “Custom gift sets” and “Event giveaways”, were removed. The bento is now the hero card plus two stacked tiles (Premium corporate gifts, New arrivals). Custom gift sets remain reachable from the mega menu and category grid, and event giveaways from the events section.

**v0.4.2 (client request):** the benefits strip now uses `.hk-usp-panel`, matching the client reference: a white bordered panel with four columns split by dividers, each with a soft-indigo icon tile, a bold title and a short line. It is 2 × 2 on tablets and stacked on phones. The two “Verify” tags moved into one review-only note below the panel. Checked at 320, 375, 768 and 1440 px: no overflow, no console errors.

**v0.5.0 (client request):** the header follows the supplied reference.
- **Top bar (indigo):** an announcement ticker with manual previous/next (no autoplay), whose items follow campaign dates, plus Shop online, Download catalogue 2025–26, Reseller login and Register as a reseller (orange).
- **Main bar:** the logo; search with a Filters menu that limits results to all, products, SKU or categories; and Account, Compare, Wishlist and Cart icons with labels (cart shows a badge).
- **Nav row:** a filled “All categories” button that opens the mega menu, On demand, Occasions, Best sellers, Printing, Reseller tools, and an outlined “Request a callback” button.
- **Mobile:** the menu, logo, search and cart, with all other links in the drawer.
- **Open questions:** what “On demand” covers, and whether compare, wishlist and cart exist.
- **Checks:** no overflow at 320, 390, 1024, 1280, 1476 and 1920 px; no console errors; ticker, filters, mega menu and callback tested.

**v0.6.0 (client request):** “Shop by category” now follows the supplied reference.
- **Layout:** soft-grey cards with a white hexagon holding the product photo and a bold label, in 8 columns on desktop, 6 at 1024 px, 4 on tablets, 3 on phones and 2 at 320 px.
- **Categories:** Ready gift sets, Custom gift sets, Bluetooth speakers, Power banks, Bottles, Tumblers, Mugs, Pens, Notebooks, Organisers, Caps, T-shirts, Bags, Cotton bags, Keychains, Lanyards, Eco-friendly products, and an indigo “View all categories” tile.
- **T-shirts:** the current catalogue has no T-shirts, so the tile shows an icon and a review-only note to confirm.
- **Checks:** no overflow at 320, 390, 768, 1024, 1400 and 1920 px; no console errors.

**v0.7.0 (client request):** “Corporate gifting for every occasion” is now a carousel that follows the supplied reference.
- **Card:** a full-bleed photo, a white date pill at the top left, and a white panel at the bottom with the occasion name and an indigo arrow button. There are no descriptions; the whole card is one link.
- **Occasions, in order:** Eid Al Etihad (2 December), Christmas and New Year, Ramadan and Eid, Diwali, Corporate milestones. All are shown year-round; the old featured “current occasion” card is retired.
- **Behaviour:** manual only, with no autoplay. Swipe or scroll-snap on touch; previous and next buttons move one card and are disabled at the ends. Shows 1.15 cards on phones, 2 on tablets, 3 on desktop.
- **To confirm:** the date wording for Ramadan/Eid and Diwali, which vary each year.
- **Checks:** no overflow at 320, 390, 768, 1024, 1400 and 1920 px; no console errors; previous/next tested; the design-system showcase now shows the carousel in place of the occasion grid.

**v0.8.0 (client request):** “Your brand, brought to life.” follows the supplied reference.
- **Layout:** light grey section; centred heading and intro; an indigo bar with the four numbered steps; six method cards with a picture on the left; centred “Request a quote” (goes to the bulk-order form) and “Explore printing methods”.
- **Pictures:** until method photography is supplied, each card shows a catalogue product the method suits (bottles, cap, cotton bag, keychain, notebook, lanyards). A review-only note says so.
- **Steps bar:** stacked on phones, 2 × 2 on tablets and small laptops, one row from 1280 px.
- **Checks:** no overflow at 320, 390, 768, 1024, 1400 and 1920 px; no console errors; design-system showcase updated.

**v0.10.0 (client request):** the occasions and events sections follow the supplied reference.
- **Occasions, “Gifts for the dates that matter”:**
  - An indigo “Coming up next” card for UAE National Day (2 Dec) with “Shop collection”.
  - A 2 × 2 grid with date pills and one-line descriptions: Christmas, New Year, Chinese New Year, Ramadan and Eid.
  - A “Later in the year” row of chips: International Women’s Day, Mother’s Day, Diwali.
  - This replaces the v0.7.0 carousel.
- **Events, “Branded merchandise for every event”:** eight event rows in two columns (icon, name, one line, arrow), with an indigo “Planning an event?” card and “Request a quote” (goes to the bulk-order form). This replaces the tabbed explorer.
- **Eyebrows:** short orange labels above both headings, as in the reference.
- **Pictures still to come:** New Year, Chinese New Year and the event booth. Catalogue products stand in for now, marked in review view.
- **To confirm:** how the featured occasion should rotate, for example how many days before each date it switches.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors; contrast checked on the indigo cards.

**v0.11.0 (client request):** the gifting section follows the supplied reference.
- **Heading:** “Gifts by recipient” label, with the heading changed to “Gifts that build relationships”, as in the reference.
- **Toggle:** “For your employees” and “For your business partners”. Each shows a large photo card with an indigo panel and an orange button, plus four smaller cards with arrows.
- **Employee cards:** welcome kits, appreciation, rewards and recognition, milestones.
- **Partner cards (proposed):** client appreciation, executive gifts, premium gift sets, festive and seasonal gifts. These and the partner wording need confirmation.
- **Pictures:** catalogue products stand in until gifting photography is supplied.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors; the toggle works by click and by arrow keys.

**v0.11.2 (client requests):**
- Removed the orange labels above section headings.
- Removed the date pills on the occasion cards.
- Removed all yellow review notes from the page.

**v0.12.0 (client request, consistent cards):** “Gifts for the dates that matter” and “Gifts that build relationships” now use the same cards and layout.
- **Large card:** a full photo with an indigo panel on top (title, one line, orange button). It sits beside four smaller cards: photo on top, name and one line below, ↗ arrow.
- **Columns:** both sections use equal columns from 1024 px.
- **Occasions:** the “Coming up next · 2 Dec” line now sits inside the indigo panel.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.12.1–0.12.2 (client requests):** removed the one-line descriptions from the occasion cards and the “Later in the year” chips.

**v0.13.0 (client request):** “Featured products” cards follow the supplied listing reference.
- **Card:** a grey square image tile; a “New” badge on new arrivals; quick view, wishlist and compare buttons that appear on hover (always shown on touch screens); a centred name; the SKU and colour dots below.
- **Left out on purpose:** the reference’s star ratings, prices and “Sold out” labels, because there is no real data for them yet. Tell us if prices or stock should be shown and where they come from.
- **Columns:** four on tablet and desktop, two on phones.
- **Checks:** no overflow at 320, 390, 768, 1440 and 1920 px; no console errors; the wishlist and compare buttons toggle correctly.

**v0.14.0 (client request):** “Featured products” now has three tabs: Featured products, New arrivals and Offers. The separate offers strip lower on the page is gone.
- **Offers tab:** cards carry an orange “Offer” badge.
- **To confirm:** the four products in the Offers tab are a stand-in selection (pen, jute bag, lanyard, cap). Send the real offer list and any discount details.
- **Checks:** no overflow at 320 and 1440 px; no console errors; the tabs work by click and keyboard. At 320 px the tab row scrolls sideways.

**v0.15.0 (client request):** the About, Blogs, Newsletter and Footer sections follow the supplied reference.
- **About:** a wide photo with a white card, “Corporate gifting, from sourcing to delivery”, and “More about us”.
- **Certifications:** a “Certified and accredited” strip with ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 and Dubai Chamber.
- **Blogs:** “Ideas for better gifting”, with one large article and two smaller ones, using the same card style as occasions and gifting.
- **Newsletter:** a white card sitting across the top of the footer, with an orange “Subscribe for updates” button.
- **Footer:**
  - The logo, the tagline, and LinkedIn and Instagram icons.
  - Four link columns: Shop, Services, Company, Resellers.
  - Privacy and terms links in the bottom row.
- **To confirm:**
  - The certificates, and their logos.
  - The real About photo (team, showroom or production) and article photos.
  - Whether the three articles exist.
  - The social media account links.
  - Whether phone, email and address should return to the footer. The reference leaves them out.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.16.0 (client request):** removed “Not sure what to gift?” (the gifting assistance and mascot block), “Catalogues and reseller resources”, “Trusted by businesses across the UAE” and “Frequently asked questions”. The bulk-order and reseller cards stay, because the page’s “Request a quote” buttons jump to them. Section order now:
1. Hero
2. Benefits
3. Categories
4. Printing
5. Occasions
6. Events
7. Gifting
8. Featured products
9. Bulk / reseller cards
10. About
11. Certifications
12. Blogs
13. Newsletter
14. Footer

**v0.17.0 (client request):** the reseller and bulk-order cards follow the supplied reference.
- **Reseller card (wide, indigo):** “Grow your business with HAK Plus” with four ticks (trade pricing, live stock levels, unbranded samples, white-label delivery), “Become a reseller”, “Reseller login”, and a small reseller-portal preview at the bottom right.
- **Bulk-order card (narrow, grey):** “Planning a bulk order?” with “Request a quote” and “Request a callback” stacked at the bottom.
- **To confirm:** the four reseller benefits. The portal preview is an illustration: its numbers and stock labels are not real data. It is hidden on phones.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.18.0 (client request):** four sections refined from the supplied references.
- **Trust bar:** no box, just lines above and below with dividers between the four benefits.
- **Shop by category:** white square tiles with the product inside and the name below, ending with an indigo “View all” tile. Nine per row on desktop, three on phones.
- **Featured products:**
  - Retitled “Popular with our clients”, with the Best sellers / New arrivals / Offers tabs on the right of the heading.
  - Cards have a tall grey image, the name, the category and SKU, and an “Add to quote” link (demonstration only).
  - Minimum order quantities from the reference are left out until real MOQs are confirmed.
- **Blogs:** three equal article cards, each with an image, “Category · date · read time” and the title.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors; “Add to quote” toggles correctly.

**v0.19.0–0.19.1 (client requests):**
- **Header search:** now fills the space between the logo and the tools, with wider gaps around it and between the Account, Compare, Wishlist and Cart icons.
- **Filters:** removed from the search box.
- **“Shop online”:** removed from the top bar. It is still in the footer and the mobile menu.

**v0.20.0 (client feedback, fonts unchanged):** a cleaner header.
- **Font weights:** top-bar links and tool labels now use one medium weight; only “All categories” stays bold.
- **Search:** white with a single indigo outline.
- **Request a callback:** a plain link with an icon.
- **Header shadow:** removed; a hairline remains.
- **Announcement arrows:** removed. Only the current announcement shows; the others no longer rotate in.
- **Tool icons:** 20 px.
- **Checks:** no overflow at 320, 390, 1024, 1440 and 1920 px; no console errors; the callback link opens the dialog.

**v0.21.0 (client request):** “Gifts for the dates that matter” is now a paged carousel, following the reference.
- **Cards:** a tall photo with the occasion name and one line below. No dates.
- **Navigation:** a “1 / 2” page counter with back and next buttons (next is filled indigo); each click moves a full page.
- **Occasions shown (8):** UAE National Day, Christmas, New Year, Chinese New Year, Ramadan and Eid, International Women’s Day, Mother’s Day and Diwali.
- **Per screen:** four on desktop, three on tablets, one with the next peeking in on phones.
- **Pictures still to come:** New Year, Chinese New Year, Women’s Day and Mother’s Day. Catalogue products stand in for now.
- **Checks:** no overflow at 320, 390, 768, 1440 and 1920 px; no console errors; paging tested.

**v0.21.1 (client request):** the occasions section has the orange “Festivals and occasions” label above its heading again, and the “1 / 2” counter is removed (back and next buttons only).

**v0.22.0 (client request):** the corporate events section follows the supplied reference.
- **Heading:** the “Corporate events” label and heading.
- **List:** five numbered events (exhibitions, conferences, corporate meetings, product launches, corporate anniversaries). The selected event shows its one-line description, and its photo appears on the right with “View gift ideas”.
- **Buttons:** “Request a quote” and “All corporate events” follow the list. Awards, sports and brand activations are reachable through “All corporate events”.
- **Photo size:** on desktop the photo matches the height of the list. On phones and tablets it sits above the list.
- **Switching:** by click, arrow keys, or hovering with a mouse.
- **Pictures still to come:** event photography for all five events.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.23.0 (client request):** the six printing methods are now simple tiles with a square image, the name with an arrow, and a “Best for …” line, and no description. They show six in a row on desktop, three on tablets and two on phones. Checks: no overflow at 320, 390, 768, 1440 and 1920 px; no console errors.

**v0.24.0 (client request):** the printing section head follows the reference.
- **Left:** the “Printing and personalisation” label and the heading.
- **Right:** the intro line, with “Request a quote” and “Explore printing methods” below it. These buttons moved up from below the tiles.
- **Steps:** the indigo steps bar is now a light strip with four numbered steps, titles only.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.24.1 (client request):** removed the “Request a quote” and “Explore printing methods” buttons from the printing section head. The intro line stays.

**v0.25.0 (client request):** the reseller and bulk-order cards follow the reference.
- **Reseller card:** the “For resellers” label, the heading and a line, with “Become a reseller” and “Reseller login” at the bottom. Four benefit tiles replace the portal preview: trade pricing, live stock levels, unbranded samples and white-label delivery.
- **Bulk-order card:** white with a border, the “For businesses” label, and shorter copy.
- **Mascot:** a slot in the top corner shows a placeholder in the review view only, until the mascot artwork is approved.
- **To confirm:** the four reseller benefits, and the mascot artwork.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.26.0 (client request):** “Gifts that build relationships” follows the reference.
- **Head:** the label and heading, with the intro on the right.
- **Two tinted cards:**
  - “Celebrate your people.” (employee gifting), with welcome kits, anniversaries and appreciation.
  - “Build stronger connections.” (client and partner gifting), with client appreciation, partner gifts, and VIP and executive.
  - Each card has a photo and an “Explore gifts” button.
- **Replaces:** the employees / partners toggle.
- **Layout:** cards sit side by side from 1280 px and stack below that.
- **Checks:** no overflow at 320, 390, 768, 1024, 1280, 1440, 1536 and 1920 px; no console errors.

**v0.27.0 (refinement pass, client brief):** the same sections, order and interactions, with a more unified finish.
- **Headings:** in Gabarito, at 36 px on desktop and 28 px on phones.
- **Interface text:** product names, labels, buttons, navigation and metadata are in Inter.
- **Background:** the page is now one white canvas. The grey bands behind printing, events and blogs are gone.
- **Spacing:** one consistent spacing between sections, and between each heading and its content.
- **Section labels:** in sentence case. The “Corporate events” label is removed because it repeated the heading.
- **Buttons:** all section buttons are one size; the rounded pill button is gone.
- **Lighter cards:**
  - Category tiles have no outline.
  - The reseller benefits are an open list.
  - The bulk-order card has no border.
  - Shadows are softer.
- **Icons:** all are thin and unfilled.
- **Photography:** still stand-ins in several sections. See `photography-brief.md`.
- **Checks:** contrast passes on all pairs checked; no overflow from 320 to 2560 px; no console errors.

**v0.28.0 (client request):** the hero now uses the supplied gift-set photo. On desktop and tablet the text sits over the plain indigo left side and the products show on the right. On phones the photo crops to the products above the text. Checks: no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.29.0 (client feedback):** the header icons (Account, Compare, Wishlist, Cart, the menu, search and callback) are larger at 24 px and slightly heavier at weight 300, so they read clearly. Icons elsewhere on the site keep the thin weight 200.

**v0.30.0 (client request):** the two banners beside the hero now use the supplied photos: the gift box on “Premium corporate gifts” and the phone stand on “New arrivals”. On large screens the photo fills the banner behind the text. On laptops and tablets it fills the right side, so products never sit under the text. On phones it sits above the text. Checks: no overflow at 320, 390, 768, 1024, 1280, 1440 and 1920 px; no console errors.

**v0.31.0 (client request):** the six printing method tiles now use the supplied branding photos: an engraved bottle, an embroidered cap, a screen-printed T-shirt, a pad-printed mug, a UV-printed power bank and a heat-transfer bag. **To confirm:** the pad-printing photo shows a mug and the UV photo shows a power bank, while their “Best for” lines list pens, keychains and gadgets, and notebooks and drinkware. Update those lines if needed.

**v0.31.1 (client approval):** the “Best for” lines now match the photos.
- Pad printing: mugs, pens, keychains.
- UV printing: power banks, notebooks, gadgets.
- Screen printing: T-shirts, totes, textiles.

**v0.32.0 (client request):** the occasion carousel now uses the supplied gift-box photos for UAE National Day, Christmas, New Year, Chinese New Year, Ramadan and Eid, and International Women’s Day. **Still needed:** photos for Mother’s Day and Diwali.

**v0.33.0 (client request):**
- **Gift cards:** the employee and client/partner cards use the supplied banners.
- **Events:** the five corporate events use the supplied scenes: exhibition stand, conference kit, meeting room, tech launch and anniversary keepsakes.
- **Checks:** no overflow at 320, 390, 1024 and 1440 px; no console errors.

**v0.34.0 (client request):** the About section uses the supplied gift composition photo. On desktop and tablet the white card sits over its open left side. On phones the photo sits on top and the card overlaps it slightly. Checks: no overflow at 320, 390, 768, 1440 and 1920 px; no console errors.

**v0.35.0 (client request):** the three blog cards use the supplied images, each matched to its article (Ramadan gift box, branded merchandise, eco-friendly set). Checks: no overflow at 390 and 1440 px; no console errors.

**v0.36.0 (client request):** the HAK Plus mascot now stands full height at the right of the “Planning a bulk order?” card, and the text and buttons are narrower to make room. The reseller and bulk cards stack below 1280 px. On phones the mascot sits beside the heading, with the buttons full width underneath. Checks: no overflow at 320, 390, 768, 1024, 1280, 1440 and 1920 px; no console errors.

**v0.37.0–0.38.1 (client consistency review):**
1. Every section heading has a sentence-case label.
2. Section headings are 48 px on desktop and 28 px on phones.
3. “Request a quote” is orange everywhere.
4. All buttons are rounded rectangles.
5. Product names are descriptive, with the code on the SKU line.
6. The real mascot is in place, so there is no placeholder.
7. The footer uses a reversed logo directly on navy.
8. Every section is 120 px apart on desktop (64 px on phones).

Checks: no overflow from 320 to 2560 px; no console errors.

**v0.39.0 (client request):**
- **Headings:** follow the supplied size table at each breakpoint. For example, H2 is 48 px on large desktop, 40 on desktop, 36 on tablet and 28 on mobile.
- **Footer:** now has all the links from the current site.
  - **Shop:** categories, new arrivals, offers and clearance.
  - **Services:** catalogues, marketing material, printing techniques, quote and callback.
  - **Company:** about, certifications, blogs, media and the reseller portal.
  - **Contact us:** the HQ address, working hours, phone and email.
  - **Follow us:** Instagram, Facebook, YouTube and LinkedIn icons.
- **To supply:** the four social profile links.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.40.0 (final refinement brief):**
- **Headings:** smaller, per the brief: hero 56 px, section headings 36 px, promotional headings 32 px, card titles 16–18 px, buttons 14 px.
- **Spacing:** sections are 64 px apart on desktop and 40 px on phones.
- **Eyebrows:** the redundant ones are removed from Categories, Events, Featured products, Blogs and Newsletter.
- **Polish:** simpler benefit icons, a clearer selected event, more readable product names and details, buttons and fields at the same height, and brighter footer links.
- **Still needed for the brief’s imagery goals:**
  - Printing close-ups on varied products and colours.
  - A refined mascot, if wanted.
  - Real HAK Plus operations photos for About.
  - Verified certificate logos.

**v0.41.0 (client request):** the printing tiles use the new close-up photos (engraved bottle, embroidered cap, screen-printed tote, pad-printed pen, UV-printed notebook, heat-transfer T-shirt), replacing the all-black set. The pad and UV “Best for” lines now match their photos.

**v0.42.0 (client request):** product cards follow the supplied reference.
- **Default:** a white tile with a thin border, the centred name, and the category and SKU underneath.
- **On hover:** the tile turns light grey, the quick view, wishlist and compare buttons appear, and “Add to quote +” replaces the SKU line.
- **On phones:** everything shows without hover.
- **Left out:** ratings and prices, because there is no data for them.
- **Checks:** no overflow at 320, 375, 768, 1440 and 1920 px; no console errors.

**v0.43.0 (client request):** blog cards are left-aligned and show:
- the image
- a date and “By HAK Plus” line with small icons
- the title
- a two-line summary
- “Read more ↗”

**To confirm:** the three summaries (draft copy), and whether named authors should replace “HAK Plus”.

**v0.44.0 (client request):** the four printing steps are now a vertical stepper with numbered circles joined by a dashed line.
- **Picture:** on the right, a picture and four small product thumbnails change with each step.
- **Rotation:** it moves to the next step every 4.5 seconds while the section is on screen.
- **Controls:** it pauses on hover or keyboard focus, has a “Pause steps” button, and clicking a step jumps to it. It does not move on its own for visitors who have turned off motion.
- **Checks:** no overflow at 320, 390, 768, 1024, 1440 and 1920 px; no console errors.

**v0.44.4–0.44.5 (client request):** the “how it works” stepper sits on a container-width soft-indigo panel with rounded corners. The step numbers, picture frame and thumbnails are white on it. Description text was darkened to keep contrast above 4.5:1 on the tint.

**v0.45.0 (client request):**
- **Heading:** the “Printing and personalisation” label, the heading and the intro now sit inside the soft-indigo panel, above the stepper.
- **Thumbnails:** the floating product thumbnails are removed. Only the main photo changes with each step.
- **Checks:** contrast on the tint is 4.9:1 for the label and 6.3:1 for the intro; no overflow at 320, 390, 768, 1024 and 1440 px; no console errors.

**v0.46.0 (client brief):**
- **How it works:** now on a soft peach panel.
- **Newsletter:** a dark indigo card on white.
- **Footer:** white, with the full-colour logo and a divider above the copyright row.
- **Product cards:** show the category only, with no SKU.
- **Product tabs:** compact segmented tabs.
- **Add to quote:** a compact outlined button.
- **Section order:** Featured products now comes right after Shop by category, and Printing and personalisation after Gifts by recipient.

**v0.47.0 (client brief: category and featured product sections):**
- **Shop by category:** compact warm-ivory tiles. Product photos are trimmed so each product fills about three quarters of the tile. Labels are centred, Inter 14/500. Hover brings a slightly warmer tile and a small product zoom. View all stays indigo at the same size.
- **Popular with our clients:** larger cool-grey image areas, with details on white below, left-aligned: name, category, price, then the outlined "Add to quote +" button. Prices and buttons line up across each row.
- **Prices:** every card reads "Price on request" until HAK Plus supplies verified AED prices. Cards also support "From AED …" and discounted prices with the old price struck through.
- **Still needed from HAK Plus:** verified prices (and which products have them), and a T-shirt product photo for the T-shirts category tile.

**v0.48.0 (client brief: Gifts by recipient):**
- **Gift types:** in both banners they now appear as a simple vertical checklist with indigo check marks, as plain text rather than links. The collections are reached through "Explore gifts".
- **Unchanged:** the wording, photos, colours and layout. The two "Explore gifts" buttons stay level on desktop.

**v0.49.0 (Corporate events):**
- **Event tabs:** every tab now shows its short description, and the tabs are taller.
- **Buttons:** the two buttons under the list are replaced by one "View all corporate events" link. The orange "Request a quote" button now sits in the photo's overlay, next to "View gift ideas".
- **Photo:** it grows taller on larger screens.

**v0.50.0–0.51.0:**
- **How it works:** no progress line or pause button, and a shorter photo.
- **Gifts by recipient:** the section heading and intro are removed. The two banners are about half as tall, with "Explore gifts" next to the checklist.
- **Newsletter:** a mail icon, soft brand glows, a divider above the consent row and cleaner labels. The wording is unchanged.

**v0.52.0–0.53.0:**
- **Reseller benefits:** larger icons and cross-shaped dividers.
- **Bulk card:** wider, and the mascot now rises above its top-right corner.
- **Product cards:** no category line, and 8 products (two rows) per tab.
- **Prices:** still "Price on request". hakplus.com shows "AED 0" publicly, so we need real prices from HAK Plus to display them.

**v0.54.0:**
- **Gifts by recipient:** the banners are 25% taller.
- **Corporate events:** a short intro sits under the heading, and the event tabs now change by themselves every 5 seconds. They pause when you point at or tab into the section.

**v0.55.0:** Gifts by recipient banners are taller, and "Explore gifts" now sits under the checklist.

**v0.56.0 (final visual refinement):**
- **Hero:** the heading sits on two lines with the buttons side by side.
- **Categories:** products are slightly larger in their tiles.
- **Popular with our clients:** four products per tab with a "View all" link. The category line is back, "Price on request" is quieter, and "Add to quote" is a soft indigo button.
- **Corporate events:** a tighter list showing only the selected event's description, and a 4:3 preview.
- **Gifts by recipient:** the heading is restored and the banners are taller again.
- **How it works:** relevant photos for each step.
- **Reseller and bulk cards:** a wider reseller card and a smaller mascot.
- **Newsletter:** a solid, plain dark card.
- **Footer:** a slightly larger logo.

**Still needed from HAK Plus:**
- verified AED prices
- authentic photography of HAK Plus operations, for the About band and the How-it-works steps
- verified certification logos

**v0.57.0–0.58.1:**
- **Mascot:** it overlaps the bulk card again.
- **Reseller benefits:** the descriptions are evened out so each fits on one line.
- **Certification strip:** it now uses the same plain icons and text sizes as the benefits bar under the hero.

**v0.59.0:** product cards show **dummy** AED prices so the design can be reviewed. These are not real HAK Plus prices and must be replaced, or switched off with `demoPrices: false` in `home.js`, before launch.

**v0.60.0–0.61.1:**
- **Popular with our clients:** the products auto-slide, with arrows.
- **Gifts by recipient (approved):** the photos now fill the whole banner on tablet and desktop.

**v0.62.0:** Gifts by recipient has no section heading, and the checklist uses green checkmarks.

**v0.63.0:**
- **Icons:** all icons are slightly bolder (weight 300).
- **Gift checklist:** it uses white checkmarks on green circles.

**v0.64.0:** product cards show only the name, a plain price (e.g. AED 32) and an "Add to cart" button, which updates the header cart count.

**v0.65.0:** the "View all" link and arrows under the product slider are removed. It still slides automatically.

**v0.66.0:** the How it works panel is now light blue (#EEF0FA) instead of peach.

**v0.67.0:** arrows are consistent. Every text link ends in the same small indigo arrow, and buttons have no arrows.

**v0.68.0:** How it works now uses the four supplied step illustrations.

## v0.69 harmonisation audit — 25 Nov 2026

Measured in the browser at 320, 375, 390, 480, 768, 1024, 1280, 1440, 1536, 1600, 1920 and 2560 px. No horizontal overflow, no clipped visible headings or buttons, and the bulk-order mascot never overlaps text. No console errors on index.html or design-system.html.

**Fixed at source (see design-decisions.md, D-108 to D-112):** icon weight 200; plain indigo checklist; peach process panel; H2 and promotional headings at 600 with line height 1.2; one eyebrow style; text links at 14/500; mascot about one third smaller; unified carousel controls; the tab-aware "View all" button.

**Kept by client choice over the cumulative brief:** centred product cards with a hover "Add to cart" on the image, underline product tabs, and 16–18 px bold footer headings.

**Outstanding — client approval**
- Hero: the three-banner composition still needs sign-off against the original five-banner (Option B) requirement.
- Product cards, tabs and footer headings: the client chose today's versions over the brief. Confirm this is final.
- Container: content measures 1185 px at 1280, 1320 at 1440 and caps at 1440. The wider targets (1344 at 1440, 1504 at 1600, 1600 max) were not applied because that wider system has not been approved.

**Outstanding — assets**
- About: an authentic operations photo (sourcing, printing, QC, packing or warehouse). The current image repeats the product story.
- Festivals: more varied photography, especially New Year (currently another open gift box).
- Certifications: genuine marks with permission to use them.

**Outstanding — pricing and data**
- Every AED price on product cards is a dummy (`demoPrices` in home.js). It must be replaced with verified prices or "Price on request" before launch.
- The "View all …", "View all methods" and category routes point to pages that do not exist yet.
- The Laptop sleeves and Electronic accessories routes are prototype paths that map to the hakplus.com categories of the same names.

**Accessibility (calculated):** indigo eyebrow on peach 9.9:1, on warm neutral 9.3:1, on white 10.8:1; light-orange eyebrow on deep indigo 8.5:1; step description on peach 6.6:1; dark text on orange buttons 5.8:1. The disabled carousel control (3.3:1) is exempt as a disabled control. Product tabs switch by mouse and arrow keys, and the "View all" label follows the selected tab.
