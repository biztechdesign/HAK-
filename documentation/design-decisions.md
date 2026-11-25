# HAK Plus — Phase 1: research, design direction and decisions

Status: **Phase 1, for client review.** Decisions marked *Proposed* need approval. Anything marked *Open* depends on business input (see §9).
Research date: 24 Nov 2026. Pages were read as fetched HTML/text, so content that only appears after JavaScript runs or inside images may be missing.

---

## 1. Research coverage and limitations

| Source | Status | Notes |
|---|---|---|
| hakplus.com | ✅ Reviewed | Home, category listing (bulk water bottles), product detail, printing techniques, contact. One homepage product link returned 404. Reseller portal (hakgifts.com) not reviewed. |
| jasani.ae | ✅ Reviewed | Home + drinkware listing |
| themerchlist.com | ✅ Reviewed | Home + corporate gifting listing |
| tezkargift.com | ✅ Partly | Home + ceramic mugs listing. Page text was cut off partway, so only the part read word for word is relied on. |
| customized.ae | ✅ Reviewed | Home + custom mugs |
| giftplanet.ae | ✅ Reviewed | Home + drink & lunchware listing |
| giftpack.ai | ✅ Reviewed | Home |
| bellroy.com | ✅ Reviewed | Home (Black Friday campaign live at the time) |
| swag.com | ⚠️ Not observable | Page renders with JavaScript only; the fetched page had a title and nothing else |
| moo.com | ⚠️ Limited | Only the region selector was reachable |
| Leo Agista home 1–4 | ❌ Inaccessible | HTTP 403 Forbidden |
| Ap Aprin home 1–5 | ❌ Inaccessible | Storefront is password-protected. Only the Apollo marketing pages were readable, and they show no homepage structure. |
| **Client homepage reference images** | ✅ Reviewed (low resolution) | Two screenshots of one concept, "HAKPLUS – Large pastel hexagon categories". Section headings, hero copy and benefit labels are legible; most category tile labels are not. See §2A. Higher-resolution exports (or the source file) are still needed. |

No observations are recorded for inaccessible sources. Template patterns listed in §5 come from the brief's own pattern list and the readable references, not from the blocked demos.

---

## 2. Existing site audit (hakplus.com)

### 2.1 Catalogue (to preserve)
Nine top-level categories in the current menu:

- **Gadgets:** wireless chargers, Bluetooth speakers, power banks (wireless, wired), accessories (mobile holders, USB cables, mouse pads, travel adapters)
- **Drinkware:** bottles, tumblers, mugs, coasters
- **Stationery:** notebooks (A5, A6), organisers, pens (metal, plastic, eco-friendly, Klio), pencils, pen box
- **Bags:** backpacks, shopping bags (cotton, canvas, jute, non-woven, paper), cooler bags, string bags, laptop sleeves, travel pouches
- **Apparel:** caps (only item)
- **Lanyards & accessories:** lanyards, reel badges, ID card holders
- **Kids** (no subcategories)
- **Gift sets:** ready gift sets, custom gift sets
- **Promotional products:** keychains, sun shades, mouse pads, stress balls, wristbands, badges

Other entries: New products, Catalogue 2025–26, Request a call back, Event giveaways, National Day. Footer extras: Special offers, Clearance sale, White-labelled catalogue, Marketing material, Blogs, Media.

### 2.2 Printing methods (14, from /printing-techniques)
360° UV printing · Debossing/embossing (listed as "D-embossing") · DTF · Epoxy · Embroidery · Heat transfer · Laser engraving · Laser marking · Pad printing · Print & cut · Round screen printing · Screen printing · Sublimation · UV printing.
Product pages list the methods that apply to each item (e.g. thermal bottle: laser engraving, pad, screen, 360° UV).

### 2.3 Existing functionality to preserve
- Product listing with sort (name, price, rating, model) and a price filter
- Product detail: gallery, SKU (e.g. `HK91 BK`), description, carton data (dimensions, weight, qty per carton), applicable printing options, reviews, related products
- **Add to cart**, **wishlist** and a product **enquiry form** (name, email, mobile, message)
- Header cart, account, search
- Reseller log-in and "Register as reseller" (both go to **hakgifts.com**, a separate domain)
- WhatsApp chat widget
- Contact form (name, company, email, mobile, message, captcha)
- Newsletter sign-up
- Downloadable catalogues (HAK catalogue and white-labelled catalogue on yourgiftmate.com)

### 2.4 Content on record (needs verification before use)
- "Over 1,500 SKUs spanning 7 categories and 14 advanced printing techniques." The menu shows 9 categories.
- "Get free delivery across UAE" (promo strip) and "Delivered … within 2–3 working days" (product page)
- Contact: +971 52 129 4390, WhatsApp +971 6 533 1771, marketing@hakplus.com and enquiries@hakplus.com. A footer link dials +971 50 266 0196.
- Addresses: Industrial Area 17 and Industrial Area 1, **Sharjah**. The site title says "Dubai".
- Social: Instagram, Facebook (both under the "Giftmate" name), YouTube, LinkedIn
- Hours: 9 AM to 6 PM

### 2.5 Observed UX issues
1. **Prices show as "AED 0"** on cards and product pages. Either it's a bug or a placeholder for "price on request". This is the single most damaging trust issue.
2. **Unclear purchase path:** "Add to cart" sits next to an enquiry form, with no quantity, price tiers, MOQ or logo upload.
3. **SKU only on the product page.** No MOQ, stock or colour data anywhere.
4. **Colour variants listed as separate products** (e.g. the same name three times), which clutters listings.
5. **Account and reseller flows leave the domain**, and the reseller registration link points to an odd route.
6. **Two brand names** (HAK+ and Giftmate) with no explanation.
7. **Promotional banners are image-only**, with no HTML headings or meaningful alt text.
8. Inconsistent naming and URLs ("Stationary"/"Stationery", "Clearance sale" and "Special offers" sharing a URL, "Other accessories" pointing to lanyards).
9. Conflicting contact details and the Dubai vs Sharjah positioning.

---

## 2A. Client homepage concept review

Source: two screenshots of a single concept, received 24 Nov 2026. Only what can be read is recorded here. Small labels are unreadable at this resolution.

### 2A.1 What the concept shows (top to bottom)
1. **Utility bar:** small reseller links on the left (reseller log in / register) and utility links on the right
2. **Header:** HAK+ logo (indigo "HAK", orange "+") · wide search ("What are you looking for?") · **language selector ("English")** · account / wishlist / cart icons
3. **Nav:** Home · Shop · Categories · About us · Sustainability · Blog · Contact
4. **Hero:** "Premium Corporate Gifts for Every Occasion", a short paragraph, an orange "Shop now" button, and a warm photo of branded gift boxes
5. **Benefit strip:** four pills: Premium quality · Custom branding options · Bulk orders made easy · UAE-wide delivery
6. **Shop by category:** heading, intro text, "View all categories", carousel arrows. A **6 × 4 grid of about 24 categories**, each a product cutout on a **pastel hexagon** in a different colour, with a small circular icon badge and a label.
7. **Printing methods:** a row of six circular icons with labels
8. **Festivals / occasions:** five photo cards, apparently Ramadan, Eid, national day (UAE flag), Diwali and Christmas, plus "View all"
9. **Events:** five photo cards (corporate events, trade shows and exhibitions, employee engagement, client meetings, conferences — partly legible), plus "View all"
10. **Employees & partners gifts:** four cards with icon badges (premium and executive gifts and promotional giveaways are legible)
11. **Featured products:** a carousel of five product cards
12. **Offers:** three dark photo banners with orange CTAs
13. Anything below Offers (trust, FAQ, footer) is cut off in both screenshots.

### 2A.2 What the concept tells us about client priorities
- **Breadth matters.** The client wants many categories visible at once (about 24, against 9 in today's menu). Discovery by category is the top priority after the hero.
- **Printing, occasions, events and recipients all sit above the product carousel**, so the client sees HAK Plus as a gifting partner more than a product catalogue.
- **The four benefit claims** are the client's own proof points and can go in the proof strip once each is confirmed (§9, item 9).
- **Arabic may be expected.** The language selector suggests a bilingual launch, which the brief says needs explicit approval.
- **New pages implied:** About us, Sustainability, Blog.

### 2A.3 Where we recommend departing from the concept (and why)
| Concept element | Issue | Recommendation |
|---|---|---|
| Multicolour pastel hexagons | Introduces colours outside the palette, a decorative shape and visual noise. The brief excludes these. With 24 different colours the products stop being the focus. | Keep the **density** (many categories, cutouts, short labels) but use one consistent tile: a warm-ivory ground, a plain 12 px card radius and product cutouts. Colour comes from the products themselves. |
| 24 categories plus carousel arrows | Arrows suggest some categories are hidden. Several tiles look like occasions or collections rather than product categories. | Show 12 on desktop (8 on mobile) in a responsive grid, with "All categories" opening the full list. Keep the final list to real catalogue categories; occasions and collections live in their own sections. |
| Printing as six icons | The brief explicitly says to avoid a generic icon row for printing | An editorial band with production photography, the methods as compact tiles, and the ordering steps |
| Occasions, Events and Employees & partners as three back-to-back five-card photo rows | Three sections with the same layout in a row; the page becomes monotonous and long | See revised D-03 (§8.2): keep Occasions as its own section and combine Events with Employees & partners |
| Featured products near the bottom | Buyers who already know what they need scroll a long way before seeing a product | Move popular products up, directly after collections |
| Hero headline | The concept says "Premium Corporate Gifts for Every Occasion"; the brief says "Your brand. Made memorable." | **Proposed:** keep the descriptive, search-friendly phrase as the H1 and use "Your brand. Made memorable." as the brand line, or the other way round. Needs client choice. |
| Title-case headings ("Shop by Category") | The brief requires sentence case | Sentence case throughout |
| Nav: Home / Shop / Categories / About / Sustainability / Blog / Contact | Generic labels; nothing for occasions, printing or quotes | Proposed nav in §7.6. About, Sustainability and Blog move to the footer, plus the utility bar if needed. |

---

## 3. Competitor review (UAE)

| | Jasani | Merchlist | Tezkar | Customized.ae | Gift Planet |
|---|---|---|---|---|---|
| Nav model | Product-type mega menu + sustainability lens | Product type + budget/style segments | Very deep product tree + print-process and brand axes | Flat service list | Category menu with counts + gifting group + sales tools |
| Search | Not visible | Present, modest | **Item code / colour / description** | None | Not confirmed |
| Card data | Code, AED price, stock tier | Price (EUR), **MOQ**, Customise + WhatsApp enquiry | Stock count, Quote / Select options | No cards | **Code, MOQ, colour count, stock, Request quote** |
| Bulk / quote | Email/phone | WhatsApp, bulk page | Per-product quote | Quote-first, 3-step process | **Quote cart**, Lowest-MOQ sort, **Export PDF** |
| Reseller | Portal, sales tools | "Partner with us" | Partner + reseller site | None | White-label site, e-catalogues |
| Occasions | Footer + carousel | None | National Day in nav, Ramadan PDFs | Chips only | Seasonal category |
| Trust | Certifications, years | Customer counts, unnamed logos | "Since 1989" | Review counts, dated testimonials | Claims only |

**What HAK Plus can do better than all five:**
- Visible, SKU-aware search with instant suggestions. Three of the five have no visible search.
- One clear, consistent card action model instead of a mix of cart, quote and options.
- Occasion merchandising as a homepage lens with planned seasonal timing, rather than footer links or PDFs.
- Honest trust content: named, approved proof, or the section is hidden.
- Printing presented as a real in-house capability, linked to products, rather than a list of icons.

---

## 4. International references

- **Giftpack:** numbered use-case bands (headline, short body, one CTA, a row of tags for the process). Treats an approved catalogue as a storefront for teams.
- **Bellroy:** sentence-case, warm copy. Mega menu with a "Featured" column plus category columns with thumbnails. Intent cards ("Smoother travel") alongside product-led collection cards. Trust shown as concrete, verifiable facts.
- **Swag, MOO:** not observable (see §1).

---

## 5. Patterns selected for reinterpretation

| Pattern | Seen at | HAK Plus reinterpretation |
|---|---|---|
| SKU-first search | Tezkar | Header search with tabs for product / SKU / category suggestions. Typing an `HK…` code goes straight to the matching product. |
| Dense B2B product card | Gift Planet, Jasani, Merchlist | Card shows image, name, SKU, colour swatches (count beyond 5), MOQ, stock, price *if permitted*. Primary action and a secondary save/compare action. |
| Quote list (cart for enquiries) | Gift Planet | **Proposed:** extend the existing cart into an "Enquiry list" if pricing is quote-only. *Open*, depends on §9. |
| Lowest-MOQ sort, PDF export | Gift Planet | Listing-page features for phase 7 |
| Product mega menu with a featured column | Bellroy, Jasani | Category columns plus one featured column (seasonal campaign or collection). Configurable. |
| Intent / recipient entry points | Bellroy, Customized.ae, Giftpack | A single "Gift by need" module (see §7) |
| Mockup-first, 3-step process | Customized.ae, Gift Planet | Short process inside the printing section, not a separate section |
| Separate reseller entry | Jasani, Tezkar, Gift Planet | Persistent "For resellers" in the utility bar, plus a split bulk/reseller conversion band |
| Bento collection layout, asymmetric banners, product tabs | Brief (template list) | Used once each so the page keeps a varied rhythm |

### 5A. B2B relevance filter (applied after the corporate alignment directive, 24 Nov 2026)

Every observed pattern was checked against one test: *does it help a corporate buyer choose and order branded merchandise?*

| Pattern | Seen at | Verdict | Reason |
|---|---|---|---|
| SKU / item-code search | Tezkar | ✅ Keep | Procurement teams reorder by code |
| MOQ, stock, colour count and code on cards | Gift Planet, Jasani | ✅ Keep | Shortlisting data a buyer actually needs |
| Quote list, Lowest-MOQ sort, Export PDF | Gift Planet | ✅ Keep | Supports internal approval and procurement |
| Carton data and printing options on the product page | hakplus.com | ✅ Keep | Logistics and branding decisions |
| Reseller sales tools (white-label catalogue, e-catalogues) | Jasani, Gift Planet, hakplus.com | ✅ Keep | Core wholesale channel |
| Use-case entry points (onboarding, client appreciation, events) | Customized.ae, Giftpack | ✅ Keep | Matches how HR and marketing teams brief their needs |
| Process steps (brief → artwork approval → production → delivery) | Customized.ae, Merchlist | ✅ Keep | Reduces uncertainty about the order |
| Feature column in the mega menu | Bellroy | ✅ Keep, B2B framing | Used for seasonal corporate campaigns, not lifestyle |
| Sentence-case, warm-but-precise copy | Bellroy | ✅ Keep | Approachable without being consumer-playful |
| Approved-catalogue / storefront concept | Giftpack | ⏸ Later | Useful for repeat corporate accounts; out of scope for the prototype |
| Consumer "Customise now" design tool as the main CTA | Merchlist | ❌ Drop | A retail print-on-demand pattern. Corporate artwork goes through proofing. |
| Discount-code banners ("10% off"), strike-through retail prices | Merchlist | ❌ Drop | Retail promotion pattern |
| "Hot" / "Sale" badges on many cards | Tezkar | ❌ Drop | Badge clutter. Only factual tags (New, Eco, Low stock) are used, and sparingly. |
| Five-star ratings on product cards | hakplus.com | ❌ Drop from cards | A consumer signal and currently unpopulated. Reviews can stay on the product page if they're used (§9, item 22). |
| Instagram grid, lifestyle "aspire" storytelling | Bellroy | ❌ Drop | Consumer brand-building, not procurement |
| Visitor-intent pop-ups | Giftpack | ❌ Drop | Interrupts work tasks |
| Pastel multicolour category shapes | Client concept | ❌ Replace | See D-11 |
| "Shop now" as the hero CTA | Client concept | ❌ Replace | Use "Explore products" and "Request a quote" |
| POD theme extras (lookbook, birthday or photo-book gifts) | Apollo/Ap Aprin listing | ❌ Drop | Consumer print-on-demand |

**Kids category:** keep it in the catalogue, but frame it as corporate (school-outreach, family-day and CSR giveaways) and keep it out of the homepage's featured categories (§9, item 24).

**Things that make sites look like templates (to avoid):** round-number stat counters, six-icon feature grids, identical card grids section after section, aggressive auto-sliders, badge clutter ("Hot", "Sale" on everything), decorative eyebrow labels above every heading, and stock "why choose us" blocks.

---

## 6. Design principles

1. **Product first.** Merchandise photography and accurate product data do the persuading. UI chrome stays quiet.
2. **Two speeds of discovery.** Search, SKU and filters for people who know what they want; occasions, recipients and collections for people who don't.
3. **One honest next step.** Every card and section ends in a single clear action that reflects how HAK Plus actually takes orders.
4. **Capability, shown.** In-house printing is the differentiator, so show the process, the methods and the results, linked to products.
5. **Proof or nothing.** Claims, logos and figures appear only once approved. Sections without approved content are hidden.
6. **Built to be configured.** Sections, campaigns and occasions can be switched on, off and reordered without breaking layout.
7. **Bidirectional by default.** Logical properties, mirrored icons where meaningful, and text that can grow by about 30% without breaking.
8. **Corporate, not consumer.** Every component serves a buyer acting for a company: specifications, quantities, branding and approval come before impulse, discounts and decoration. Creativity shows through the merchandise and photography, not through playful UI.

---

## 7. Proposed design direction

### 7.1 Concept: "Studio and showroom"
A calm, well-lit showroom (white and ivory surfaces, precise grid, product cutouts) combined with the energy of a print studio (indigo blocks with orange used like a registration mark, production photography). It should feel premium through restraint and precision rather than luxury styling.

### 7.2 Colour use *(provisional, validated in phase 2)*
- About 80% neutrals (white, cool neutral `#F5F6FA`, warm ivory `#F8F7F4`, soft sand for editorial photography backgrounds).
- Indigo for primary buttons, links, the mega menu's featured area, and **one or two** full-bleed sections (printing, conversion band).
- Orange for accents only: small highlights, the active-tab indicator, campaign tags, the secondary conversion.
- **Contrast check (approximate, re-verified in phase 2):**
  - Indigo `#2D3487` on white ≈ 10.7:1 ✅
  - White on orange `#F36A35` ≈ 3.0:1 ❌ for body text and buttons. White on accent hover `#D95020` ≈ 4.1:1, also ❌.
  - White on accent dark `#B83F15` ≈ 5.6:1 ✅
  - Dark text `#171923` on orange ≈ 5.9:1 ✅
  - Orange on indigo ≈ 3.5:1, large text and graphics only
  - **Proposed rule:** orange-filled buttons use `#171923` text, or use `#B83F15` as the fill with white text. Orange text never appears on white at body size.

### 7.3 Typography
Manrope 800 for the hero only, 700 for section headings, 600 for card titles and small headings. Inter for everything else. A fluid `clamp()` scale (exact ratio set in phase 2) with body at 16 px minimum and meta text no smaller than 13 px. SKU and MOQ values use Inter's tabular figures (`font-variant-numeric: tabular-nums`).

### 7.4 Imagery
- **Cutouts** on a consistent warm-ivory or sand ground for categories and product cards. Same angle, shadow and padding.
- **Editorial** photography (people of varied backgrounds, real offices, events, packaging) for collections, needs and gifting.
- **Production** photography (machines, engraving, embroidery close-ups) for printing. This needs real HAK Plus photography; ask the client.
- Prototype placeholders are labelled "Representative image".

### 7.5 Shape, depth and motion
Radius 8 px for buttons and inputs, 12 px for cards and media. Mostly flat, separated by colour and borders. One shadow level for overlays only. Motion: 150–250 ms ease-out for state changes, no parallax, no autoplay carousels, all motion off under `prefers-reduced-motion`. Icons: Material Symbols Rounded, weight 200, outlined by default.

### 7.5A Ultra-wide screens (1920 → 2560 px and larger) *(Proposed, D-17)*
- Standard content stays at 1320 px max and is centred. Body text is never wider than about 72 characters.
- At ≥1920 px the max width may grow to about 1440 px for product grids only, where it adds columns rather than enlarging cards. Final value set in phase 2.
- Full-bleed bands (hero, printing, conversion) fill the screen width, but the content inside stays on the grid. Imagery uses `object-fit: cover` with defined focal points and a max height, so it never becomes an over-cropped strip.
- Type scale `clamp()` values stop growing at 1440 px, so headings don't keep inflating on large monitors.
- Validate at 1920, 2560 and 3440 (ultrawide) as well as the brief's ranges.

### 7.6 Header *(Proposed)*
- **Utility bar:** contact phone, WhatsApp, "For resellers" (log in / register), and an announcement slot when an announcement is active.
- **Main bar:** logo · large search (product / SKU / category) · Request a quote · account · wishlist · cart
- **Nav row:** Products (mega menu) · Collections · Gifting solutions · Occasions · Printing services · Offers (only when active)
- **Mobile:** logo, search icon, cart, menu button. A full-height drawer with stacked sections, plus quick actions for WhatsApp and quote.

---

## 8. Homepage IA review

### 8.1 Overlaps in the 18 proposed sections

| Overlap | Sections | Risk |
|---|---|---|
| Three "browse by context" grids | 10 Occasions, 11 Corporate events, 12 Employees & partners | Three similar card grids in a row. Monotonous, and the page gets very long. |
| Collections vs recipients | 06 Featured collections, 12 Employee/partner gifts | "Executive gifting" vs "Premium corporate gifts" are nearly the same |
| Seasonal vs offers | 10 Occasions, 13 Offers, 01 Announcement | A single campaign (e.g. Eid Al Etihad) could appear three times |
| Capability claims | 04 Benefits, 08 Printing, 15 Trust | "In-house printing" is repeated |
| Process vs conversion | 09 How it works, 14 Bulk & reseller, 17 Final CTA | Three consecutive quote prompts |

### 8.2 Proposed homepage structure (18 → 14 blocks; all content requirements kept)

*Revised after reviewing the client concept (§2A). The concept gives occasions high priority, so they keep their own section instead of sharing tabs with the other two lenses.*

| # | Block | Absorbs | Visibility |
|---|---|---|---|
| 1 | Announcement bar | 01 | Only when active; dismissible |
| 2 | Header + mega menu | 02 | Always |
| 3 | Hero, with a proof strip below (the client's four benefits once verified) | 03 + 04 | Always |
| 4 | Shop by category: 12 tiles on desktop, 8 on mobile, plus "All categories" | 05 | Always |
| 5 | Campaign / offers banner | 13 | Only when an offer is active. Can move up below the hero for a major campaign. |
| 6 | **Festivals & occasions:** one large feature for the current season plus a row of upcoming occasions | 10 | Always while at least one occasion is in date. Expired ones hide automatically. |
| 7 | Featured collections (bento) | 06 | When at least 2 collections are configured |
| 8 | Popular products (tabs: Best sellers / New arrivals / Featured) | 07 | A tab is hidden when it has no products |
| 9 | Branding & printing, including a 4-step process | 08 + 09 | Always. Indigo full-bleed band. |
| 10 | **Gifting solutions:** a two-lens toggle, *By event · By recipient* | 11 + 12 | Always |
| 11 | Bulk orders / resellers: split pathway | 14 | Always |
| 12 | Trusted by | 15 | Only with approved content |
| 13 | FAQ (6–8 questions) | 16 | Always |
| 14 | Closing contact strip + footer | 17 + 18 | Always. The closing strip is compact (phone, WhatsApp, quote) rather than another hero. |

Rhythm: neutral → ivory tiles → editorial seasonal feature → bento → product rail → **indigo** → toggle cards → split → neutral. Each of the three photo-led sections (6, 7, 10) uses a different layout, so the concept's three identical card rows don't recur.

### 8.3 Seasonal timing (from 24 Nov 2026)
- **Eid Al Etihad (2 Dec):** active now. It replaces the site's current "National Day" label.
- **Christmas and New Year:** active in December
- **Ramadan 2027:** expected around early February 2027 (depends on moon sighting). Corporate ordering starts weeks earlier, so it should go live by early January.
- **Eid al-Fitr:** follows Ramadan
- **Diwali:** passed for 2026 (early November); hide it until next season
- Each occasion needs `start`, `end` and `priority` fields so expired campaigns never show.

---

## 9. Unresolved business requirements

| # | Question | What we observed | Impact |
|---|---|---|---|
| 1 | **Are prices shown to guests?** Is "AED 0" deliberate? | Every price shows AED 0 | Card design, CTAs, trust |
| 2 | Direct purchase, quotation, or both? | Add to cart + enquiry form, no quantity input | Whole conversion model |
| 3 | Corporate vs reseller pricing rules | Reseller portal on hakgifts.com | Account UX, card pricing |
| 4 | Does the reseller portal stay on hakgifts.com or move into the new site? | Separate domain | Navigation, SSO |
| 5 | MOQ per product: available as data? | Not shown anywhere | Card and filter design |
| 6 | Stock data: real-time, or carton-based? | Not shown | Card badges, filters |
| 7 | Colour variants: one product with swatches, or separate products? | Separate listings | Catalogue structure |
| 8 | Logo upload and artwork approval process | No upload found | Product page, quote flow |
| 9 | Delivery coverage and lead times. Can "free UAE delivery" and "2–3 working days" be used? | Both claims appear on the current site | Proof strip, FAQ |
| 10 | VAT: are prices shown inclusive or exclusive of 5% VAT? | Unknown | Price display |
| 11 | Sample policy | Unknown | FAQ, product page |
| 12 | Arabic launch timing | None today | Phase planning |
| 13 | WhatsApp: which number, and pre-filled product messages? | Two numbers in use | Header, cards |
| 14 | Approved client logos, testimonials, case studies, statistics | None on site | Show or hide the Trust section |
| 15 | Verified claims: number of SKUs, number of categories (7 vs 9) | Conflicting | Hero/proof copy |
| 16 | Brand relationship between HAK+ and Giftmate | Both names in use | Identity, social links |
| 17 | Primary address and positioning: Sharjah HQ vs "Dubai" | Sharjah addresses only | Footer, SEO copy |
| 18 | Which email and phone are canonical? | 2 emails, 3 numbers | Footer, contact |
| 19 | Official logo files (SVG) and brand guidelines | Only a PNG seen | Validating colour tokens |
| 20 | Real product and production photography | Unknown | Imagery plan |
| 21 | Category rename: should Apparel (caps only) and Kids be kept, merged or expanded? | Very thin categories | Navigation |
| 22 | Are wishlist and reviews actively used? | Both present | Keep or simplify |
| 23 | **Is Arabic (and a language selector) in scope for launch?** | Client concept shows an "English" selector | Header, phase plan, all layouts |
| 24 | Final category list: which of the concept's ~24 tiles are real catalogue categories? | 9 in today's menu, ~24 in the concept | Navigation, category grid, URLs |
| 25 | Do About us, Sustainability and Blog pages exist, or will they? | In concept nav; Blog is linked in today's footer | Navigation, phase 7 scope |
| 26 | Hero H1: the descriptive phrase or "Your brand. Made memorable."? | Concept and brief differ | Hero copy, SEO |
| 27 | Higher-resolution concept exports, or the source design file | Only low-resolution screenshots received | Reading category labels |

None of these block phase 2. The design system will include components for both a priced card and a quote-only card.

---

## 10. Decision log

| ID | Decision | Status |
|---|---|---|
| D-01 | Brand tokens as given in the brief, pending official assets | Accepted (from brief) |
| D-02 | Orange buttons use dark text, or the accent-dark fill with white text (contrast) | Proposed |
| D-03 | ~~Merge 10/11/12 into one tabbed module~~ → **Revised:** Occasions stays its own seasonal section; Events and Employees & partners combine into "Gifting solutions" with a By event / By recipient toggle | Proposed (revised after client concept) |
| D-04 | Merge "How it works" into the printing section | Proposed |
| D-05 | Merge benefits into a proof strip under the hero | Proposed |
| D-06 | Search that recognises SKUs, with suggestions | Proposed |
| D-07 | One product card component with configurable data rows (price, MOQ, stock, swatches) | Proposed |
| D-08 | Use "Eid Al Etihad" instead of "National Day" | Proposed |
| D-09 | No autoplay in the hero; a single strong composition | Accepted (from brief) |
| D-10 | Trust, offers and announcement sections render only with approved, active content | Accepted (from brief) |
| D-11 | Keep the concept's category density, but replace multicolour pastel hexagons with one consistent neutral tile | Proposed |
| D-12 | Printing shown as an editorial band with production photography, not an icon row | Proposed (brief requirement) |
| D-13 | Move popular products above printing and the solutions sections | Proposed |
| D-14 | No language selector until Arabic is approved; the design system stays RTL-ready | Proposed — *Open* (§9, item 23) |
| D-15 | Sentence case throughout (the concept uses title case) | Accepted (from brief) |
| D-16 | Apply the B2B relevance filter (§5A) to every borrowed pattern. Drop consumer retail patterns (discount codes, rating stars on cards, badge clutter, impulse CTAs). | Accepted (corporate alignment directive) |
| D-17 | Ultra-wide behaviour: content capped, full-bleed bands fill the width, the type scale stops growing at 1440 px. Validate up to 2560 px and larger. | Proposed |

---

## 11. Phase 2 — design system decisions (v0.1.0, 24 Nov 2026)

| ID | Decision | Reasoning / reference | Rejected alternative | Status |
|---|---|---|---|---|
| D-18 | Three-level tokens (primitive → semantic → component) in `tokens.css`; Tailwind theme mapped to the variables | One source of truth for CSS and utilities | Hex values in Tailwind config (would duplicate tokens) | Proposed |
| D-19 | `neutral-400` changed from `#98A1B0` to `#858E9E` | Input borders must reach 3:1 (now 3.30:1) | Keep the lighter grey for a softer look (fails WCAG 1.4.11) | Proposed — **global token change, needs approval** |
| D-20 | Secondary text `#4F5869` (neutral-600); the brief’s `#667085` kept as **muted** text | Long supporting copy reads better at 7.16:1; `#667085` still passes (4.97:1) for meta and captions | Use `#667085` for all secondary text | Proposed |
| D-21 | Accent button: orange 500 with ink text; hover lightens to orange 400 | White on `#F36A35` = 3.03:1, on `#D95020` = 4.10:1 (both fail); ink stays ≥ 5.77:1 | Darken on hover (ink on orange 600 = 4.3:1, fails) | Proposed |
| D-22 | Icon size classes renamed `icon-*` | Tailwind v3 `ms-*` utilities collided | `ms-*` naming | Accepted (technical) |
| D-23 | Tailwind preflight disabled; reset in `styles.css` | The Play CDN injects its reset after the component CSS and would override it | Preflight on with `@layer` (not possible with the Play CDN) | Accepted (technical) |
| D-24 | Product card: one component with configurable rows and price states (value, range, on request, sign in, unavailable) | B2B needs differ by account; avoids separate card designs (Gift Planet, Jasani patterns) | Separate retail and quote cards | Proposed |
| D-25 | Category tiles: rounded rectangle on ivory with cutouts | Replaces the concept’s pastel hexagons (D-11) | Circular tiles (shown as an unapproved alternative) | Proposed |
| D-26 | Overlays are native `<dialog>` with four placements | Built-in focus trap and inert page; less JS | Custom div modals | Accepted (technical) |
| D-27 | Closed menus, popovers and the mega menu use `display: none` | Hidden-but-laid-out surfaces caused page overflow | `visibility` transitions on exit | Accepted (technical) |
| D-28 | Search is SKU-aware with a dedicated “SKU matches” group | Tezkar item-code search; procurement reorders by code | Name-only search | Proposed |
| D-29 | Logo shown as a **temporary typeset wordmark**, clearly labelled | No official asset supplied; not an alternative logo | Redraw or trace the logo (prohibited) | Temporary |
| D-30 | Product imagery: locally stored, simple SVG placeholders labelled “Representative” | Avoids presenting third-party photos as HAK Plus products and avoids unreliable random URLs | Stock photography | Temporary |

### Approved vs unapproved functionality shown in the design system

| Functionality | Status in the showcase |
|---|---|
| Search, filters, sorting | Front-end demo over local sample data. No catalogue integration. |
| Wishlist | Toggle and toast only. Not stored. Existing functionality on hakplus.com, retention to be confirmed. |
| Cart | Header icon and empty state only. Existence in the new site to be confirmed. |
| Enquiry / quote form | Validation only. Never submits or claims success. |
| Enquiry list (quote cart), “Request quote” on cards | **Unapproved concept.** Demo buttons explain they are not connected. |
| Sign in to view price | **Provisional variant only.** Depends on the pricing rules decision. |
| Artwork upload | Client-side file list and size check only. |
| Quantity / MOQ stepper | Component only. MOQ data availability is unconfirmed. |
| Language switcher | **Not included** (D-14). The RTL toggle is a test tool only. |
| Price range filter, VAT switch | Shown as components; not wired. Rules pending. |

### Version history
| Version | Date | Summary |
|---|---|---|
| Phase 1 | 24 Nov 2026 | Research, direction, IA, open questions (D-01 – D-17) |
| 0.1.0 | 24 Nov 2026 | Design system foundations, components, showcase and documentation (D-18 – D-30). Validation in `validation-report.md`. |


---

## 12. Phase 3 — homepage decisions (v0.2.0, 24 Nov 2026)

| ID | Decision | Reasoning | Status |
|---|---|---|---|
| D-31 | **Hexagonal categories restored** (supersedes D-25): one neutral ivory hexagon, softened corners, sand outline, cutouts inside, labels below | Explicit client requirement; refined to avoid the concept's multicolour pastels | Client-required |
| D-32 | **Option B**: main hero + four supporting banners in one row (2 × 2 below 1024 px; one column below 360 px) | Client-approved composition | Client-approved |
| D-33 | Section order follows the phase 3 brief (18 sections) instead of D-03's 14-block proposal | Latest client input supersedes phase 1 proposal; distinct visual treatments prevent the repetition D-03 tried to avoid | Proposed for Figma confirmation |
| D-34 | Occasions, events and recipients use three different treatments (date-aware grid, vertical-tab explorer, editorial cards) | Keeps what/when/where/who clear without identical card rows | Proposed |
| D-35 | "How it works" merged into the printing band; closing CTA merged into bulk/reseller | Avoids extra sections and repeated quote prompts | Proposed |
| D-36 | External commerce link labelled **"Shop online"**, config-driven (`HK_HOME_CONFIG.commerce.url`), shows a pending notice while unset; never labelled "Zoho Commerce" | No URL or audience confirmed | Provisional |
| D-37 | No cart, wishlist, price, MOQ or stock on the homepage; product action is "View product" | Purchasing rules unresolved | Provisional |
| D-38 | Mascot appears only in the assistance section; placeholder in review, text-only in customer view until approved art exists | No mascot assets or approval received | Provisional |
| D-39 | Offers, trust and FAQ render only in review view until approved content exists | No approved offer, logos or verified answers | Provisional |
| D-40 | Newsletter: four fields, work email the only required field, unticked required consent, common email providers accepted | Client four-field requirement; B2B realism | Provisional |
| D-41 | Prototype review switch (`?mode=customer`) and date override (`?date=`) | Lets the client review public vs internal states | Prototype only |
| D-42 | Representative SVG scene imagery generated locally from placeholder product drawings | No photography supplied; avoids stock or fake inventory | Temporary |

No global tokens were modified in phase 3. New shared classes are listed in `homepage-review.md` §5 and the showcase "Homepage components" group.

| Version | Date | Summary |
|---|---|---|
| 0.2.0 | 24 Nov 2026 | Homepage (`index.html`), homepage component variants, `home.css`/`home.js`, D-31 – D-42 |
| 0.3.0 | 24 Nov 2026 | D-43: client photography and the official logo from hakplus.com replace vector scenes; Freepik not used (licensing); banner text moved onto a solid panel; product photos blend into tiles |
| 0.4.0 | 24 Nov 2026 | D-44: hero + banners rebuilt as a bento showcase (`.hk-showcase`) at the client’s request — indigo hero card 7/12 × 2 rows, tiles 1–2 stacked beside it, tiles 3–4 as a wide pair. Supersedes D-32’s single row of four; all four banners remain. |
| 0.4.1 | 24 Nov 2026 | D-45: client removed the two wide bento tiles (Custom gift sets, Event giveaways); the showcase is now hero + two stacked tiles. The client’s earlier “four supporting banners” requirement is superseded by this instruction. |
| 0.4.2 | 24 Nov 2026 | D-46: business benefits restyled as `.hk-usp-panel` (white panel, four divided columns, soft-indigo icon tiles) to match the client reference; descriptions shown at all widths; unverified claims flagged once below the panel in review view |
| 0.5.0 | 24 Nov 2026 | D-47: header rebuilt from the client reference — indigo top bar with announcement ticker (manual, date-aware; replaces the dismissible announcement bar and utility bar), search with in-field Filters (result scope: all / products / SKU / categories), labelled Account / Compare / Wishlist / Cart tools, nav row (All categories button, On demand, Occasions, Best sellers, Printing, Reseller tools, Request a callback). “Shop online” (Zoho Commerce) kept in the top bar as a client requirement. Compare, wishlist and cart are UI only; their features and “On demand” scope remain unconfirmed. |
| 0.6.0 | 24 Nov 2026 | D-48: “Shop by category” rebuilt from the client reference as `.hk-cat-grid` / `.hk-cat-tile` — soft-grey cards with white hexagon product frames, 16 client-listed categories plus Eco-friendly products and an indigo “View all categories” tile; 8/6/4/3/2 columns; heading with “View all products”; “Show all” toggle removed. T-shirts has no catalogue photo (apparel on hakplus.com is caps only) — shown with an apparel icon and flagged for confirmation. |
| 0.7.0 | 24 Nov 2026 | D-49: “Corporate gifting for every occasion” rebuilt from the client reference as a manual carousel (`.hk-carousel`, `data-hk-carousel`) of `.hk-occ-card` items — full-bleed photo, white date pill, white name panel with indigo arrow; no descriptions. 1.15 / 2 / 3 cards per view; prev/next move one card and disable at the ends; no autoplay; RTL-aware. Replaces the date-aware featured occasion grid: all five occasions now show year-round, ordered from the next upcoming. Supersedes the featured-card part of the seasonal logic; dates on the pills are indicative. |
| 0.8.0 | 24 Nov 2026 | D-50: “Your brand, brought to life.” rebuilt from the client reference — light section with centred heading and lead; the four-step workflow becomes `.hk-steps-bar` (indigo panel, numbered circles, dividers; 1 / 2 × 2 / 4 columns, 4 only from 1280 px so titles do not crowd); the six methods become `.hk-method-card` (picture at the inline start, name, line, “Best for”), 1 / 2 / 3 columns (3 from 1280 px); centred “Request a quote” and “Explore printing methods”. The dark brand surface and pen close-up are retired. Method pictures are catalogue products each method suits, not technique photos — flagged until method photography arrives. |
| 0.9.0 | 24 Nov 2026 | D-51 (client-approved token change): responsive container system replaces the fluid gutter and fixed 1320 px max. `--hk-page-gutter` steps 16 / 24 / 32 / 40 / 48 px at 640, 768, 1280, 1440; `--hk-container-max` is fluid (100%) below 1280, then 1280, 1320 from 1440 and 1440 from 1536, centred beyond. Max width is the content width with the gutter outside (1536 = 1440 + 2 × 48). `--hk-container-wide` now equals the 1536+ max and is kept only for compatibility. Supersedes the 1320 px cap in D-17. |
| 0.10.0 | 24 Nov 2026 | D-52: occasions and events rebuilt from the client reference. Occasions (“Gifts for the dates that matter”): `.hk-occ-feature` “coming up next” indigo card (UAE National Day, 2 Dec) + 2 × 2 `.hk-occ-card--wide` grid with one-line descriptions (Christmas, New Year, Chinese New Year, Ramadan and Eid) + `.hk-date-chip` row (Women’s Day, Mother’s Day, Diwali). This supersedes D-49’s carousel on the homepage; the carousel stays in the system. Events (“Branded merchandise for every event”): eight `.hk-event-row` links in two columns + `.hk-plan-card` quote aside; replaces the tabbed explorer. New `.hk-eyebrow` label (uppercase, short; orange-700 on light, orange-300 on indigo, 5.45:1). New Year / Chinese New Year use catalogue gift sets and the plan card uses lanyards until photography arrives; featured-occasion rotation is static for the review date. |
| 0.11.0 | 24 Nov 2026 | D-53: gifting section rebuilt from the client reference — eyebrow “Gifts by recipient”, heading now “Gifts that build relationships” (client wording), `.hk-segmented` tabs (For your employees / For your business partners) switching two `.hk-recipient` panels: feature photo with inset indigo panel and orange action + 2 × 2 `.hk-gift-tile` links. Employee tiles: welcome kits, appreciation, rewards and recognition, milestones (from the reference). Partner tiles (client appreciation, executive gifts, premium gift sets, festive and seasonal gifts) and the partner copy are proposed — to confirm. Tiles use catalogue product shots until gifting photography arrives. |
| 0.11.2 | 24 Nov 2026 | Client request: section eyebrows removed from all section headings; card-level labels (“Coming up next”, “Planning an event?”) kept. Occasion date pills removed from the tiles. Yellow provisional notes removed from the homepage (tracked in docs only). |
| 0.12.0 | 24 Nov 2026 | D-54: occasions and gifting share one card system (client flagged inconsistent card treatment). Gifting components renamed to generic `.hk-feature-layout`, `.hk-feature-card` (full-bleed photo + inset indigo panel) and `.hk-tile-grid` / `.hk-tile-card` (photo on top, name + optional line + north-east arrow below). Occasions rebuilt on them, 1:1 columns like gifting; the featured occasion’s “Coming up next · 2 Dec” sits in the panel as `__label`. `.hk-occ-feature`, `.hk-occ-showcase` and `.hk-occ-card--wide` are retired from the homepage (CSS kept for now). |
| 0.13.0 | 24 Nov 2026 | D-55: featured products restyled from the client listing reference as `.hk-shop-card` in `.hk-shop-grid` (2 / 4 columns): grey square image tile, “New” badge on new arrivals, hover/focus actions (quick view, wishlist, compare; always visible on touch), centred name, SKU and colour dots. The reference’s star ratings, prices and “Sold out” states are deliberately left out — no such data exists and the brief forbids inventing it; they can be added to the meta line once supplied. Quick view and compare are prototype toasts. Replaces the `.hk-product` card on the homepage (component kept). |
| 0.14.0 | 24 Nov 2026 | D-56: Featured products gets a third tab, “Offers” (client request); the separate offers strip section is removed. Offer cards carry an orange “Offer” badge (ink text on orange). The four offer products (BIRO pen, AIOFE jute bag, GARRETT lanyard, CYRUS cap) are a placeholder selection from the catalogue in `home.js` (`products.offers`) until HAK Plus supplies its live offer list; no discounts or prices are shown. |
| 0.15.0 | 24 Nov 2026 | D-57: lower page rebuilt from the client reference. (1) `.hk-about-band` — full-bleed photo (pen close-up until team/showroom photography arrives) with a white card and “More about us”. (2) `.hk-cert-strip` — ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 and Dubai Chamber membership, as listed in the client reference; icon marks until certificate logos are supplied; claims to be verified against certificates. (3) Blogs, “Ideas for better gifting” — built on the shared feature layout (`--wide` 2:1, light panel, `__label`) with stacked tile cards, so the card treatment stays consistent with occasions and gifting; article titles, categories and date from the reference; catalogue products as images. (4) Newsletter as a white card straddling the footer (`.hk-newsletter-band`, orange submit). (5) Footer v2 — logo plate, tagline “One-stop shop for all merchandise, from product to print”, LinkedIn and Instagram marks (inline SVG brand marks, the only non-Material icons; links pending), four columns Shop / Services / Company / Resellers, “All rights reserved”. Contact details moved out of the footer per the reference; Shop online kept in the Shop column (client requirement). Section eyebrows from the reference omitted per D-54-era instruction. |
| 0.17.0 | 24 Nov 2026 | D-58: reseller and bulk-order cards rebuilt from the client reference as `.hk-biz-split` (7:3). `.hk-reseller-card` (deep indigo): heading, line, `.hk-checklist` (Trade pricing, Live stock levels, Unbranded samples, White-label delivery — client copy, to verify), orange “Become a reseller”, “Reseller login” (hakgifts.com). `.hk-portal-preview` is a decorative, `aria-hidden` illustration of the reseller portal cropped at the card edge: real catalogue products and SKUs, but the counts (6 open quotes, 14 orders, Tier 2) and stock labels are illustrative, not data; hidden below 640 px. `.hk-bulk-card` (grey): “Planning a bulk order?” with full-width “Request a quote” and “Request a callback” pinned to the bottom. Section eyebrows from the reference omitted. |
| 0.18.0 | 24 Nov 2026 | D-59: four sections refined from client references. Trust bar: `.hk-usp-panel--bar` (no box; hairlines above and below). Categories: hexagon tiles replaced by `.hk-cat-cards` — white rounded square tiles with the product inside and the label below; indigo “View all” tile; 9 / 6 / 5 / 3 / 2 columns. Featured products: heading “Popular with our clients”, tabs Best sellers / New arrivals / Offers in the heading row, `.hk-shop-card--plain` (portrait grey tile, left-aligned name, “Category · SKU”, “Add to quote” toggle — prototype only); hover actions dropped. The reference’s MOQ (“Min. 50 pcs”) is omitted — no confirmed MOQ data. Blogs: `.hk-article-grid` of three equal `.hk-article` cards (image, “Category · date · read time”, title), replacing the feature layout. |
| 0.19.0 | 24 Nov 2026 | D-60: header spacing from the client reference — search fills the space between logo and tools (no 640 px cap), 48 px gaps around it and 20 px between tools from 1280 px (24 / 8 px at 1024–1279). Search Filters (scope menu) removed at the client’s request; search always covers products, SKUs and categories. “Shop online” removed from the top bar at the client’s request (v0.19.1); the Zoho Commerce link remains in the footer Shop column and the mobile drawer. |
| 0.20.0 | 24 Nov 2026 | D-61: header clean-up from client feedback (fonts unchanged): medium weight for top-bar links and tool labels; white search with a single indigo border; “Request a callback” as an icon text link (`.hk-nav__callback-link`); sticky shadow removed (hairline only); ticker arrows hidden — only the first in-season announcement shows; tool icons 20 px. |
| 0.21.0 | 24 Nov 2026 | D-62: occasions rebuilt from the client reference as a paged carousel (`data-hk-carousel-paged`): portrait `.hk-occ-tile` cards (3:4 photo, name, one line; no dates, per client), 4 / 3 / 2 / 1.3 per view, page counter (`[data-hk-carousel-status]`, “1 / 2”) and a filled next button (`.hk-carousel__btn--primary`). Prev/next move one page. Eight occasions: UAE National Day, Christmas, New Year, Chinese New Year, Ramadan and Eid, International Women’s Day, Mother’s Day, Diwali. Supersedes D-54 for the occasions section (gifting keeps the feature layout). |
| 0.22.0 | 24 Nov 2026 | D-63: corporate events rebuilt from the client reference as `.hk-event-index`: eyebrow, heading, a numbered vertical tab list (`.hk-event-tab`, 01–05; the selected event shows its one-line description, number in orange) with “Request a quote” and “All corporate events” below, and a photo panel (`.hk-event-panel`, white bar with the event name and “View gift ideas”) that matches the list’s height. Five events shown (client: “only 5, then CTA”): exhibitions, conferences, corporate meetings, product launches, corporate anniversaries; the rest via “All corporate events”. Switching by click, arrow keys and (mouse only) hover. Below 1024 px the photo moves above the list. Replaces `.hk-event-row` list and `.hk-plan-card` on the homepage. |
| 0.23.0 | 24 Nov 2026 | D-64: printing method cards replaced by `.hk-method-tile` (client reference): square grey image tile, name with trailing arrow, “Best for …” line; descriptions dropped. 6 columns from 1280 px, 3 from 768 px, 2 on phones. Same catalogue product images until method photography arrives. |
| 0.24.0 | 24 Nov 2026 | D-65: printing section head rebuilt from the client reference as `.hk-split-head` — eyebrow “Printing and personalisation” and heading on the left; intro line, orange “Request a quote” and outlined “Explore printing methods” on the right (moved up from below the tiles). The indigo steps bar is replaced by `.hk-step-strip`: hairlines above and below, four divided cells, orange number + step title only (step descriptions dropped). |
| 0.25.0 | 24 Nov 2026 | D-66: reseller and bulk cards updated from the client reference. Reseller card: eyebrow “For resellers”, heading, line, actions at the bottom; the portal preview is replaced by four `.hk-benefit-tile`s (Trade pricing, Live stock levels, Unbranded samples, White-label delivery, each with an orange icon and one line — client copy, to verify); tiles sit beside the text from 1280 px, below it at 768–1279 px. Bulk card: white with a border, eyebrow “For businesses”, shorter copy, and a top-corner mascot slot (`.hk-bulk-card__mascot`) that shows a placeholder in the review view only and is hidden in the customer view until approved artwork exists (no mascot art invented). The printing head CTAs were removed in v0.24.1 at the client’s request. |
| 0.26.0 | 24 Nov 2026 | D-67: gifting section rebuilt from the client reference — split head (eyebrow “Gifts by recipient”, heading; intro on the right) and two `.hk-recipient-card`s: warm “Employee gifting — Celebrate your people.” and soft-indigo “Client and partner gifting — Build stronger connections.”, each with a line, three links, a pill “Explore gifts” button and a photo half. Side by side from 1280 px (smaller card titles 1280–1535 px), stacked below; on phones the photo sits on top. Replaces the segmented tabs, feature card and tile grid (D-53/D-54) in this section. |
| 0.27.0 | 24 Nov 2026 | D-68: homepage refinement pass (client brief). Sections, order, layouts and interactions are unchanged.
- **Type:** Gabarito replaces Manrope for display, section and feature headings (600/700; tracking eased to −0.01 / −0.005 / 0em; nothing at 800). Inter is now used for every UI label, including product, category, method, occasion and article titles, tabs, step labels, benefit and certificate names.
- **White canvas:** the grey bands are removed from printing, events and blogs. The newsletter band now fades from white into the footer.
- **Section rhythm:** `--hp-section-space` (32 → 56 px), with 32 px between every section head and its content.
- **Eyebrows:** sentence case Inter 600 at 14 px; the redundant “Corporate events” eyebrow is removed.
- **Content CTAs:** all `.hk-btn--lg` (hero, About, recipient cards); the pill variant is no longer used.
- **Fewer containers:** category tiles moved to a neutral image surface with no outline; reseller benefits are an open hairline list rather than cards inside a card; the bulk card is cool neutral with no border; About and newsletter shadows reduced to `--hk-shadow-2`.
- **Icons:** Material Symbols fill fixed at 0 (`.icon-fill` neutralised).
- **Checks:** contrast measured at 4.97:1 or better on checked pairs (orange button 5.77:1); no overflow from 320 to 2560 px (content 1440 px at 2560).
- **Imagery:** unchanged. See `photography-brief.md` for the photographs still required. |
| 0.28.0 | 24 Nov 2026 | D-69: client-supplied hero photo (`banners/hero-gift-set.webp`, 1635 × 962, 64 KB WebP from the supplied PNG): navy bottle, notebook, pen and mug with a kraft gift box on an indigo backdrop. From 768 px it fills the hero card (`.hk-showcase__hero--photo`, focus 75 % right) with the text over the plain indigo left side (max 52 % width); below 768 px the photo crops to the products and sits above the text. Card background `#101E4D` matches the photo backdrop. Replaces `hero-desk-set.webp`. |
| 0.29.0 | 24 Nov 2026 | D-70 (client feedback: header icons too thin and small): Material Symbols weight is now a variable (`--ms-wght`, default 200) and the font loads weights 200–300. Header icons (account, compare, wishlist, cart, menu) are 24 px at weight 300; the search and callback icons are 22 px at weight 300. Every other icon stays at weight 200, fill 0, grade 0 — a deliberate, documented header-only exception. |
| 0.30.0 | 24 Nov 2026 | D-71: client-supplied banner photos for the two hero tiles — `premium-gift-set.webp` (gift box with tumbler, notebook and pen; “Premium corporate gifts”, background #FBEEE9) and `new-arrivals-stand.webp` (phone stand and plant; “New arrivals”, background #F2F5FF), each 1600 × 558 WebP. `.hk-showcase__tile--photo`: from 1440 px the photo fills the tile with the text over its open left side; 480–1439 px the photo covers the right 58% so products never sit under the text; below 480 px it stacks above the text. Tile backgrounds match the photo backdrops so the edges blend. Replaces `premium-organiser.webp` and `new-wireless-stand.webp` in the hero. |
| 0.31.0 | 24 Nov 2026 | D-72: client-supplied branding photos for the six method tiles (`printing/*.webp`, 1000 × 1000): laser-engraved bottle, embroidered cap, screen-printed T-shirt, pad-printed mug, UV-printed power bank, heat-transfer drawstring bag. All share one grey studio backdrop, so `.hk-method-tile__media--photo` shows them full-bleed (cover, no blend) on a matching #DCDDE2 surface, with descriptive alt text. Replaces the catalogue stand-ins. |
| 0.32.0 | 24 Nov 2026 | D-73: client-supplied occasion photos (3:4, 750 × 1000 WebP, 77–101 KB) for UAE National Day, Christmas, New Year, Chinese New Year, Ramadan and Eid, and International Women’s Day: themed corporate gift boxes, matching the occasion cards’ 3:4 frame exactly. Mother’s Day (catalogue mugs) and Diwali (earlier lifestyle stand-in) still need photos. |
| 0.33.0 | 24 Nov 2026 | D-74: client-supplied photos (3:2, 1200 × 800 WebP). Recipient cards: `gifting/employee-gifting` and `gifting/client-and-partner-gifting` (crop focus 78% right, keeping the product groups in view). Corporate events: five `events/*.webp` scenes (exhibition stand, conference kit, meeting room, tech launch, anniversary keepsakes) with descriptive alt text; the product-on-grey treatment is removed from those panels. |
| 0.34.0 | 24 Nov 2026 | D-75: client-supplied About photo (`brand/about-hak-plus.webp`, 2000 × 667, 51 KB): branded gift composition with open warm space on the left for the white card; focus 80% right; band background matched to the photo (rgb 237,218,206). Below 640 px the photo sits on top (16:10) and the card overlaps it slightly, so the products stay visible. Replaces the pen close-up. |
| 0.35.0 | 24 Nov 2026 | D-76: client-supplied blog images (`blog/*.webp`, 1000 × 1000, 134–159 KB) matched to the three articles: Ramadan gift box → “Planning employee gifts for Ramadan and Eid”; branded polo, mug, bottle, tote and cap with print proofs → “How to choose the right printing method”; bamboo and jute set → “Eco-friendly gifts your clients will keep”. Shown full-bleed (cover) in the 4:3 article frame; the catalogue product stand-ins are removed. |
| 0.36.0 | 24 Nov 2026 | D-77: approved HAK Plus mascot (gift-box character in a HAK+ blazer; client-supplied transparent PNG → `mascots/hak-mascot.webp`, 605 × 960, 95 KB, alpha kept) placed in the bulk-order card, full card height, aligned bottom-right (`.hk-bulk-card--mascot`, width `clamp(8.5rem, 40%, 12.5rem)`); text and buttons narrow to the remaining width. The review-only placeholder is removed. Reseller and bulk cards now sit side by side only from 1280 px. Below 640 px the mascot sits beside the heading and copy, with the buttons full width beneath. Decorative (`alt=""`); mirrored in RTL. |
| 0.37.0–0.38.1 | 24 Nov 2026 | D-78: consistency fixes from the client review.
- **(1) Eyebrows:** on every section heading.
- **(2) H2 token:** now 28 → 48 px (`clamp(1.75rem, 0.9rem + 2.6vw, 3rem)`, leading 1.12). This is a global token change, approved by the client.
- **(3) Request a quote:** the bulk card’s button is now orange like the others.
- **(4) Pills:** none on the page; already removed in v0.27.0.
- **(5) Product names:** model codes stripped from the names in `home.js`, leaving descriptive names; the SKU stays on the meta line.
- **(6) Mascot:** the placeholder was already replaced by the approved mascot (v0.36.0).
- **(7) Footer logo:** a reversed logo derived from the master PNG (navy → white, orange kept, background transparent), shown without the white plate. This supersedes the “logo never recoloured” rule for the dark footer only, at the client’s request; the official reversed artwork is still to be supplied.
- **(8) Section spacing:** one `--hp-gap` margin (64 → 120 px) replaces per-section padding. Measured at 120 px between every section at 1440 px, and 64 px at 390 px. |
| 0.39.0 | 24 Nov 2026 | D-79 (client request):
- **(1) Heading scale:** stepped to the client’s table, replacing the fluid clamps. Sizes for mobile <768 / tablet 768–1023 / desktop 1024–1439 / large ≥1440, in px:
  - H1: 36 / 48 / 56 / 64
  - H2: 28 / 36 / 40 / 48
  - H3: 24 / 28 / 32 / 36
  - H4: 20 / 24 / 24 / 28
  - H5: 18 / 20 / 20 / 24
  - H6: 16 / 18 / 18 / 20
  - Display (not in the table): 40 / 52 / 64 / 72
- **(2) Footer:** links and contact details taken from the live hakplus.com footer, rewritten in sentence case (“Stationary” corrected to “Stationery”). Adds HQ address, working hours, `tel:` and `mailto:` links, and four social icons (inline SVG brand marks). **Social profile URLs are still to be supplied**; until then the icons show the planned-page notice. |
| 0.40.0–0.40.2 | 24 Nov 2026 | D-80: final premium refinement brief. The client confirmed the brief’s smaller headings, the 64/40 px rhythm and fewer eyebrows over D-78/D-79.
- **Type scale:** display 36 / 44 / 52 / 56, H1 32 / 40 / 44 / 48, H2 26 / 30 / 34 / 36, H3 22 / 26 / 30 / 32, H4 20 / 22 / 24 / 24, H5 17 / 18, H6 16.
- **Hero:** uses `.hk-display`, stepping down to H2 at 1024–1279 px so no word breaks.
- **Promotional titles:** reseller and recipient titles use H3.
- **Controls:** button and input heights 48 px; `.hk-btn--lg` labels 14 px.
- **Rhythm:** `--hp-gap` 40 → 64 px.
- **Eyebrows:** five redundant ones removed.
- **Component polish:** plain benefit icons; event selected bar; card title 16 px Inter 600 with 13 px metadata; footer link contrast 12.8:1.
- **Checks:** focus ring verified by keyboard (2 px royal indigo). Contrast is 5.77:1 or better on checked pairs. No overflow from 320 to 2560 px, and every container aligns to the same left edge at 2560 px. Reduced-motion rules are present.
- **Not done (needs new assets or approvals):**
  - Varied macro printing photography: the supplied set is all black products.
  - A refined minimal 3D mascot, subject to approval.
  - Authentic HAK Plus operations photography for About.
  - Verified certification marks.
  - Retiring the reused navy bottle, notebook and gift-box motif (it appears in the hero and About photos). |
| 0.41.0 | 24 Nov 2026 | D-81: client-supplied macro printing photography (`printing/method-*.webp`, 504 × 504): engraved navy bottle, embroidered navy cap, screen-printed canvas tote, pad-printed blue pen, UV-printed notebook, heat-transfer grey T-shirt. Varied colours and finishes, replacing the all-black set (D-72), with descriptive alt text. “Best for” lines realigned: pad printing → pens, keychains, gadgets; UV printing → notebooks, gift boxes, gadgets. 504 px is enough for tiles up to about 230 px at 2× density. |
| 0.42.0 | 24 Nov 2026 | D-82: product card rebuilt from the client reference as `.hk-shop-card--v3`: white square tile with a hairline border, turning soft grey on hover or focus; quick view, wishlist and compare actions fade in over the image; centred Inter 500 name; the category and SKU line and “Add to quote +” share one line and swap on hover or focus. Touch screens show both lines and the actions permanently. Once added, “Added to quote ✓” stays visible. The reference’s star ratings and prices are omitted (no data). Reduced motion disables the transitions. |
| 0.43.0 | 24 Nov 2026 | D-83: article cards follow the client reference, left-aligned (`.hk-article--v2`): image; meta row with calendar icon and date, divider, person icon and “By HAK Plus” (author shown as the company, since no named authors are supplied); title (H5, Inter 600); two-line clamped excerpt; “Read more ↗” cue. The whole card stays one link through the title, so “Read more” is a visual cue (`aria-hidden`). Category and read time are dropped from the meta row, as in the reference. Excerpts are draft copy, to confirm. |
| 0.44.0–0.44.3 | 24 Nov 2026 | D-84: the printing section’s steps strip is replaced by an auto-advancing process stepper (`.hk-pstep`; renamed from `.hk-stepper`, which already names the quantity stepper). Layout and behaviour:
- **Steps:** vertical numbered steps joined by a dashed line, each with a title and one line. The active step shows an orange number and a progress bar.
- **Picture:** on the right, a cross-fading photo per step, with four floating catalogue thumbnails; the active thumbnail is outlined in indigo.
- **Rotation:** advances every 4.5 s, only while the section is in view.
- **Accessibility:** pauses on hover and keyboard focus, has a visible Pause/Play button (WCAG 2.2.2), and clicking a step jumps to it (`aria-current="step"`). With reduced motion there is no auto-advance and the pause button is hidden. The picture is `aria-hidden` (decorative).
- **Step copy:** lightly expanded.
- **Small screens:** the picture sits below the steps on tablets and phones; the thumbnails are hidden below 640 px.
- **Unchanged:** the heading and the method tiles. |
| 0.44.4–0.45.0 | 24 Nov 2026 | D-84 update (client requests): the stepper sits on a container-width soft-indigo panel (`.hk-pstep` background, banner radius, padding 24 → 64 px). The section head (eyebrow, heading, intro) moved inside the panel as `.hk-pstep__head`, spanning both columns. The floating thumbnails are removed, leaving just the cross-fading step photo. Descriptions use the secondary text colour on the tint (6.3:1). |
| 0.46.0–0.46.1 | 24 Nov 2026 | D-85: targeted refinements (client brief).
- **(1) How it works:** the panel uses the approved soft orange `--hk-color-bg-accent-soft` (#FFF3ED). The active step number is brand orange; inactive steps use neutral borders and text. Contrast is 5.1–7.2:1. The thumbnails stay removed, as the client asked in v0.45.0.
- **(2) Newsletter and footer reversed:**
  - **Newsletter:** a deep-indigo card (`.hk-newsletter--dark`) on the white canvas, with no band colour. It has a white heading, indigo-100 supporting text, translucent fields with subtle borders, a light focus ring and the orange subscribe button (5.77:1).
  - **Footer:** `.hk-footer--light` is white with a top hairline, the full-colour logo, dark headings, slate links (7.2:1) with indigo hover, orange contact icons and a divider above the legal row.
- **(3) Product cards:** SKU removed from the meta line (category only); SKUs remain in `home.js` data and search.
- **(4) Featured tabs:** now `.hk-tabs__list--segmented`, a cool-neutral track with royal-indigo selected tabs, 40 px tall, Inter 14/500, 6 px radius and no underline. They wrap below the heading on small screens.
- **(5) Add to quote:** a compact outlined button (36 px, royal-indigo text and a subtle indigo border, soft-indigo hover, with the icon after the label) and a success state once added.
- **(6) Section order:** Featured products moved to directly after Shop by category; Printing and personalisation moved to after Gifts by recipient.
- **Checks:** no overflow from 320 to 2560 px; no console errors. |
| 0.47.0 | 24 Nov 2026 | D-86: two distinct surfaces for category and product listings (client brief).
- **Shop by category:** tiles on warm ivory `--hk-warm-50` (#F8F7F4) inside the white section, with no border, shadow or inner box and the card radius kept.
  - **Photos:** the 16 product photos are trimmed to their outline and saved to `assets/images/categories/`. They fill about 76% of the tile (12% padding) with a multiply blend, so white backgrounds disappear.
  - **Labels:** Inter 14/500, primary text, centred, balanced wrapping, with no extra metadata.
  - **Hover and focus:** hover moves the tile to `--hk-warm-100` and scales the product to 1.04, with no shadow and no layout shift. The keyboard focus ring sits on the tile.
  - **View all:** the indigo View all tile keeps the same size and radius.
  - **T-shirts:** there is no T-shirt catalogue photo, so this tile shows a larger icon until one is supplied.
- **Popular with our clients, card `.hk-shop-card--v4`:** a square image on cool neutral `--hk-neutral-50` (#F5F6FA) with no border. On hover it moves to `--hk-neutral-100`, scales the image to 1.03 and shows the quick actions.
  - **Details:** open on white and left-aligned. Name: Inter 16/500, 15 on phones, two lines at most. Category: 13/400, muted (4.8:1).
  - **Price row `.hk-price`:** AED, 18 px / 600, 20 px from 1280 px. It has four states:
    - standard (`price`)
    - "From" (`priceFrom`)
    - discounted (`priceWas`): 13 px muted strike-through, with screen-reader "Now" and "Was"
    - "Price on request" when there is no price
  - **Add to quote:** an outlined royal-indigo button, 40 px tall, with the icon after the label, a soft-indigo hover and no underline. It is always visible and fills the card width on phones.
  - **Row alignment:** the card uses CSS subgrid (rows: image, info, price, button), so prices and buttons line up across a row when names or discounted prices wrap. A flex layout is the fallback.
  - **Scoping:** the price styles are scoped to v4, so the listing-page `.hk-price` component is unchanged.
- **Prices:** no verified prices exist, so every homepage card shows "Price on request". The design-system showcase uses "AED 00.00" format placeholders only.
- **Unchanged:** the segmented tabs, the 4-column product grid, the category column counts, the section order and the 64 px section gap at desktop.
- **Checks:**
  - At 320, 390, 768, 1024, 1440, 1920 and 2560 px: no overflow, and price and button tops are identical across every card row.
  - No console errors.
  - The Add to quote toggle still works. |
| 0.48.0 | 24 Nov 2026 | D-87: Gifts by recipient gift types shown as a checklist (client brief).
- **Change:** the inline indigo gift-type links in both banners are replaced by `.hk-recipient-card__list`, a vertical checklist of informational text that is no longer links.
  - **Employee gifting:** Welcome kits, Employee anniversaries, Employee appreciation.
  - **Client and partner gifting:** Client appreciation, Business partner gifts, VIP and executive gifts.
- **Style:**
  - **Text:** Inter 15/400 (14 on phones), body text colour `--hk-color-text-secondary` at 6.3:1 or higher on both banner tints.
  - **Check icon:** a 20 px Material Symbols Rounded `check` in royal indigo `--hk-color-action-primary` (wght 200, FILL 0, GRAD 0), on a 20 px icon column with an 8 px text gap and 8 px between rows.
  - **Removed:** no pills, badges, underlines or icon backgrounds.
- **Navigation:** the collections stay reachable through each banner's "Explore gifts" button.
- **Unchanged:** headings, descriptions, backgrounds, photography and proportions.
- **Checks:**
  - "Explore gifts" stays pinned to the bottom of each banner and the two buttons share the same top at 1280, 1440 and 2560 px. Below 1280 px the banners stack.
  - Icons are centred on the first text line at every width.
  - No overflow at 320, 768, 1280 or 2560 px; no console errors. |
| 0.49.0 | 24 Nov 2026 | D-88: Corporate events refinement (client feedback).
- **Tabs:**
  - **Descriptions:** every event tab now shows its one-line description, not just the selected one. It is Inter 14/400: muted (4.8:1), and the secondary colour when the tab is selected or hovered.
  - **Height:** tabs are 80 px, and 88 px from 1280 px. Padding is equal for selected and unselected tabs, so selecting causes no height jump.
- **Below the list:** "Request a quote" and "All corporate events" are removed. A single editorial link, "View all corporate events →", replaces them.
- **Overlay:** the photo overlay holds the event name and "View gift ideas" on the left and the orange `hk-btn--accent` "Request a quote" on the right. Below 480 px the button goes full width under the text.
- **Photo height:** the photo now grows step by step:
  - 1:1 on phones and 3:2 from 640 px (was 16:10)
  - from 1024 px, `clamp(30rem, 14rem + 24vw, 46rem)`, always at least the height of the list column
  - measured heights: 459 px at 768, 569 at 1024, 573 at 1440, 685 at 1920 and 736 at 2560
- **Checks:** no overflow at 320, 390, 768, 1024, 1280, 1440, 1920 or 2560 px; no console errors. |
| 0.50.0–0.51.0 | 24 Nov 2026 | D-89 and D-90 (client feedback).
- **How it works:**
  - **Removed:** the progress line and the "Pause steps" button. `home.js` now treats the pause button as optional.
  - **Auto-advance:** steps still advance on their own. They pause on hover and keyboard focus, and do not run with reduced motion.
  - **Photo:** 16:10 (16:9 from 1536 px), down from 5:4. It is 385 px tall at 1440 px, about 545 px before.
  - **Accessibility:** WCAG 2.2.2 asks for a way to pause content that changes automatically. Hover and focus pausing remain, but a visible pause control is gone, so flag this if strict conformance is needed.
- **Gifts by recipient:**
  - **Section head removed:** the eyebrow, title and description are gone. The section uses `aria-label="Gifts by recipient"`, and the two banner titles become its `h2`s.
  - **Banner size:** banners are about half the previous height: 249 px at 1440–2560 px (was 480) and 226 px at 1024.
  - **Layout:** text column 5fr, photo 3fr. Title 24 px. Body 15 px. Checklist 14 px, on one line per item.
  - **Button:** "Explore gifts" uses the default 44 px size and sits beside the checklist, bottom-aligned, so both banners' buttons line up. A container query on the card switches this on at 640 px card width. Narrower cards stack the button below, so at 1280 px the banners are 309 px.
  - **Phones:** the photo is 2:1, on top.
- **Newsletter polish (D-90; copy unchanged):**
  - **Intro:** a mail icon chip.
  - **Background:** two very soft radial brand glows (orange bottom-left, indigo top-right).
  - **Spacing:** 48 px card padding from 1024 px, and 20 px between field rows.
  - **Labels:** 13/500.
  - **Consent row:** a hairline divider above it, with the consent text in indigo-100.
  - **Subscribe button:** at least 208 px wide (full width on phones).
- **Checks:** no overflow at 320, 768, 1024, 1440, 1920 or 2560 px; no console errors. |
| 0.52.0–0.53.0 | 24 Nov 2026 | D-91 and D-92 (client feedback).
- **Reseller benefits:**
  - **Icons:** 32 px (was 22).
  - **Dividers:** the top hairlines on the first row are gone. The left column has a right divider, and the second row a top divider, forming a cross.
  - **Single column (below 400 px):** stacked, with top dividers between items.
- **Bulk card (from 1280 px):** the columns are now 11fr / 8fr (were 7fr / 3fr). At 1440 px the reseller card is 750 px and the bulk card 546 px (were about 963 and 413).
  - **Mascot:** it is 18 rem wide and 48 px taller than the card. It rises 47 px above the bulk card's top edge and bleeds 20 px past its right edge, with the card's overflow visible. Text and buttons reserve space so the mascot never covers them.
  - **Below 1280 px:** the layout is unchanged.
- **Product cards:**
  - **Category line removed:** the category stays in the data and in search.
  - **Price row:** still shows "Price on request". hakplus.com has no public prices: product listings read "AED 0", so no verified figure exists.
- **Two rows per tab:** each tab now has 8 products. The four additions per tab are real catalogue items with hakplus.com names and the existing photos:
  - **Best sellers:** HK0449, HK296, HK0426, HK474
  - **New arrivals:** HK0447, HK467, HK0406, HK0471
  - **Offers:** HK0049, HK183, HK0356, HK466
  - Merchandising selection still needs HAK Plus confirmation.
- **Checks:** prices align in every row of all three tabs; no broken images; no overflow at 320, 768, 1280, 1440, 1920 or 2560 px; no console errors. |
| 0.54.0 | 24 Nov 2026 | D-93 (client feedback).
- **Gifts by recipient:** the banners are 25% taller: 312 px from 640 px wide (was 249), with 32 px padding. The checklist and "Explore gifts" stay pinned to the bottom.
- **Corporate events description:** a description now sits under the heading: "From exhibition giveaways to anniversary keepsakes, choose an event to see the branded merchandise that suits it."
  - **Style:** 16 px, secondary text colour, 36 rem maximum width.
  - **Accessibility:** it is linked to the section with `aria-describedby`.
- **Auto-advancing event tabs:** the tabs advance on their own every 5 s (`data-hk-autotabs`, in `home.js`), but only while the section is at least 40% on screen and the browser tab is visible.
  - **Pausing:** they pause while the pointer is over the section or keyboard focus is inside it, and never run with reduced motion.
  - **Restart:** a user's click restarts the timer.
  - **Accessibility:** WCAG 2.2.2 recommends a visible pause control for auto-changing content. Pause on hover and focus exists, but a visible control does not; flag this for strict conformance.
- **Checks:** auto-advance moved tab 1 to tab 2 after 5 s; no overflow at 390, 768, 1280 or 1440 px; no console errors. |
| 0.55.0 | 24 Nov 2026 | D-94: Gifts by recipient banners are taller, with "Explore gifts" placed below the checklist (client feedback).
- **Layout:** the side-by-side checklist-and-button layout (container query) is removed. "Explore gifts" now sits under the checklist.
- **Height:** banners are 384 px from 640 px wide (was 312).
- **Arrangement:** the heading and description stay at the top. The checklist and button are pinned to the bottom, so both banners' buttons share the same line at 1280, 1440 and 2560 px.
- **Phones:** unchanged.
- **Checks:** no overflow at 390, 1024, 1280 or 2560 px; no console errors. |
| 0.56.0–0.56.1 | 24 Nov 2026 | D-95: Final homepage visual refinement (client brief). Section order unchanged and no new sections.
- **Hero:**
  - **Heading:** "Your brand." / "Made memorable." on two natural lines from 1280 px, using `.hk-hero-line` spans with no `<br>`. The text column may use up to 60% of the banner, and the heading size follows the banner width: `min(display, (60cqi − 5rem) / 8.1)`, giving 41 px at 1280, 46 at 1440 and 51 from 1536.
  - **Buttons:** "Request a quote" and "Explore products" sit side by side from 1280 px.
  - **Imagery:** the text stays clear of the merchandise.
- **Categories:** image padding 10%, so products fill about 80% of the tile.
- **Popular with our clients:**
  - **Cards:** four per tab (the data keeps 8 for search), with the category line restored.
  - **Price on request:** now 14/500 in the secondary colour, quieter than a real price (18–20/600).
  - **Add to quote:** soft indigo (#EEF0FA `--hk-color-bg-brand-soft`), royal-indigo text and icon, no border, 40 px, content width, `--hk-indigo-100` on hover.
  - **Links:** each tab ends with a "View all best sellers / new arrivals / offers" link.
- **Corporate events:**
  - **Number column:** narrowed to 36 px with a 12 px gap.
  - **Descriptions:** shown on the selected event only.
  - **Preview:** a fixed 4:3 ratio from 1024 px, centred against the list, the same height for every event.
  - **Request a quote:** keeps the selected event as context (`data-route="request-a-quote?event=…"` and `data-quote-context`).
- **Gifts by recipient:**
  - **Heading:** the eyebrow and "Gifts that build relationships" are restored; the card titles are back to `h3`.
  - **Banners:** a 320 px minimum height, with content deciding the rest: 374 px at 1440 px. 32 px padding. Gabarito 30/600 titles, 16 px description, 14 px checklist.
  - **Button:** "Explore gifts" sits below the checklist and lines up across both banners.
- **How it works:** the step photos no longer repeat the recipient banners. The four steps now use:
  - Choose products: desk-set assortment (`banners/hero-desk-set`)
  - Share your branding: branded T-shirt mock-up (`printing/screen-printing-tshirt`)
  - Approve artwork and quote: branded power-bank mock-up (`printing/uv-printing-power-bank`)
  - Production and delivery: gift-box packaging (`banners/custom-gift-box`)
  - These are temporary, relevant stand-ins until art-directed step photography is supplied. They do not present any facility.
- **Reseller and bulk cards:**
  - **Reseller card:** wider on desktop (13fr / 7fr), with the text and benefits columns at 4fr / 6fr, so benefit descriptions no longer wrap narrowly.
  - **Mascot:** 30% smaller (288 → 208 px), kept fully inside the bulk card, with no overlap of text, buttons or edges.
- **Newsletter:** solid deep indigo, with no glows and no icon chip. Labels are 14 px white, field borders 40% white, padding 40 px. Validation and consent are unchanged.
- **Footer:** larger logo (56 px), consistent 14/600 Inter column headings, 8 px link rhythm and less bottom padding.
- **Left as they were (photography to be replaced later):**
  - The About band photo needs authentic HAK Plus operations photography (sourcing, printing, quality control, packing, warehouse).
  - The New Year occasion image could vary its merchandise in future.
  - The certification marks still need verified logos.
- **Checks:**
  - At 320, 375, 390, 768, 1024, 1280, 1440, 1536, 1920 and 2560 px: no horizontal overflow and no clipped text (only the screen-reader-only heading registers).
  - The hero is two lines with side-by-side buttons from 1280 px.
  - Product prices align in every row.
  - The events preview is 4:3 from 1024 px.
  - The recipient buttons align, and the mascot is inside the card with no overlap.
  - No console errors. |
| 0.57.0–0.58.1 | 24 Nov 2026 | D-96 and D-97 (client feedback).
- **Mascot overlap restored:** the client preferred it to the D-95 contained mascot. From 1280 px the bulk card is 11fr / 8fr. The mascot is 18 rem wide and 48 px taller than the card, rising about 47 px above it and 20 px past its right edge. It never covers the text or buttons.
- **Reseller benefit descriptions:** evened out to 22–24 characters:
  - "Tiered reseller prices"
  - "Real-time availability"
  - "Show clients the product"
  - "Ships under your brand"
  - This wording is ours, so HAK Plus should confirm it.
  - **One line everywhere:** compact sizes (15 px title, 13 px text, 16 px side padding) apply at 768–1023 and 1280–1439 px, so every description stays on one line from 320 to 2560 px.
- **Certification strip:** now matches the benefits bar under the hero.
  - **Icons:** plain 28 px royal-indigo line icons, with no soft circle.
  - **Text:** Inter 16/600 names and 14 px secondary descriptions, with a 16 px icon gap.
  - **Narrow widths:** text wraps instead of overflowing at 1024 px.
- **Checks:** no overflow at 320, 768, 1024, 1280, 1440 or 2560 px; no console errors. |
| 0.59.0 | 24 Nov 2026 | D-98: dummy prices for design review (client request).
- **What:** `home.js` adds DUMMY AED prices to the homepage product cards when `HK_HOME_CONFIG.demoPrices` is `true` (the current default).
- **Formats covered:**
  - Best sellers and New arrivals: standard prices, plus one "From" price per tab.
  - Offers: discounted prices with the old price struck through.
- **These are not HAK Plus prices.** Before launch, set `demoPrices: false` or replace the `demoPrices` map with verified prices. With the flag off, cards fall back to "Price on request".
- **Checks:** prices and buttons align in all three tabs; no overflow at 320, 768 or 1440 px; no console errors. |
| 0.60.0–0.61.1 | 24 Nov 2026 | D-99 and D-100 (client requests).
- **D-99, product sliders:** "Popular with our clients" is now an auto-sliding row in each tab.
  - **Build:** it reuses `.hk-carousel` (scroll-snap, prev/next).
  - **Cards:** all 8 products per tab, 4 visible from 768 px and 2 on phones.
  - **Auto-advance:** one card every 4.5 s, looping back to the start, but only while the visible tab is on screen.
  - **Pausing:** it pauses on hover or keyboard focus and never runs with reduced motion.
  - **Bottom row:** the "View all …" link sits on the left and the prev/next buttons on the right.
  - **Alignment:** prices stay aligned through subgrid.
  - **Note:** this replaces D-95's "four static cards, no carousel" at the client's request.
- **D-100, recipient banners (approved by the client on 24 Nov 2026):** from 640 px the photo fills the whole banner, positioned right. The solid colour panel is gone.
  - **Text:** the text column is 46% wide (44% below 1280 px), so it sits on the plain left side of each photo without covering the products.
  - **Phones:** unchanged, with the photo on top and text on the tint below.
- **Checks:** auto-advance moved one card in 5 s; no overflow at 390, 1024 or 1440 px; no console errors. |
| 0.62.0 | 24 Nov 2026 | D-101 (client request).
- **Gifts by recipient heading removed:** the "Gifts by recipient" eyebrow and "Gifts that build relationships" are gone again. The section uses `aria-label="Gifts by recipient"`, and the banner titles are its `h2`s.
- **Green checkmarks:** the checklist icons use `--hk-color-success` (#15803D), still Material Symbols weight 200, with at least 4.5:1 contrast on both photo backgrounds.
- **Checks:** no overflow at 1440 px. |
| 0.63.0 | 24 Nov 2026 | D-102 (client decision).
- **Icon weight 300 everywhere:** every Material Symbols Rounded icon is now weight 300, fill 0, grade 0 (was 200).
  - **Where:** the global `--ms-wght` in `styles.css`, plus every hard-coded `'wght' 200` in `components.css`.
  - **Header:** this replaces the D-70 header-only exception, since the header now matches the rest.
  - **Font file:** the Google Fonts request already covers 200–300, so nothing else changes.
  - **Showcase and docs:** `design-system.html` and `design-system.md` are updated.
- **Recipient checklist:** a white check on a solid 18 px green circle (`--hk-color-success` #15803D, at least 5:1 for white on green).
- **Checks:** all icons on the page compute to weight 300; no overflow at 390 or 1440 px; no console errors. |
| 0.64.0 | 24 Nov 2026 | D-103 (client request). Homepage product cards now show the image, name, a plain price and "Add to cart", nothing else.
- **Category line:** removed. Categories stay in the data and search.
- **Price:** a single plain price, e.g. "AED 32" or "AED 9.50". There is no "From" prefix and no struck-through price; `priceFrom` and `priceWas` are ignored on these cards. A product without a price still shows "Price on request".
- **Button:** "Add to quote" is replaced by "Add to cart" with the `add_shopping_cart` icon, in the same soft indigo style.
  - **Behaviour:** it toggles to "Added to cart" with a check icon. It updates the header cart count and its accessible label, and shows a toast.
  - **Prototype only:** nothing is stored.
- **Checks:** prices render as plain amounts, and the cart count goes 0 → 1 → 0; no overflow at 1440 px; no console errors. |
| 0.65.0 | 24 Nov 2026 | D-104 (client request).
- **Removed:** the "View all best sellers / new arrivals / offers" link and the prev/next arrow row under the product slider.
- **Still in place:** the slider keeps auto-advancing every 4.5 s and still pauses on hover and focus. Mouse, touch and trackpad users can still swipe or scroll it.
- **Accessibility:** keyboard users no longer have visible slide controls. The site-wide "View all products" link in Shop by category remains.
- **Checks:** auto-advance moved one card in about 5 s; no overflow; no console errors. |
| 0.66.0 | 24 Nov 2026 | D-105 (client request).
- **Panel colour:** the How it works panel is now light blue (`--hk-color-bg-brand-soft` #EEF0FA, the approved soft indigo) instead of soft orange #FFF3ED. This replaces the D-85 colour.
- **Details:** the step connector and inactive number rings use `--hk-indigo-200`. The active step number stays brand orange.
- **Contrast on #EEF0FA:** step titles and descriptions 6.3:1; orange eyebrow 4.9:1.
- **Checks:** no overflow at 1440 px. |
| 0.67.0–0.67.1 | 24 Nov 2026 | D-106: one arrow rule (client feedback on inconsistent arrows).
- **Text links:** they end in `arrow_forward` (`icon-dir`, so it flips in RTL), 18 px, in the link colour (royal indigo) with a 4 px gap. This covers hero tile links, "View all products", "View all corporate events", "View gift ideas" and blog "Read more". "Read more" was a diagonal orange `north_east` with dark text and is now indigo, like the others.
- **List-row affordances:** event tabs and printing method tiles use the same 18 px arrow. Method tile arrows are now indigo (were black).
- **Buttons:** no arrows. The arrow is removed from "Explore gifts" to match "Request a quote", "Request a callback", "Add to cart" and "Subscribe".
- **Unchanged:** carousel chevrons and the "View all" category tile arrow are controls, not link affordances.
- **Checks:** every arrow on the page computes to 18 px; no button carries an arrow; the hero accent-tile link is indigo at 9.5:1; no console errors. |
| 0.68.0–0.68.1 | 24 Nov 2026 | D-107: How it works uses the client's four step illustrations. This replaces the D-95 stand-in photos.
- **Assets:** `assets/images/process/step-1…4.webp`, converted from the supplied transparent PNGs and trimmed to the artwork (3% margin) so the four steps appear at a similar scale. Each is 52–115 KB.
- **Display:** shown whole (`object-fit: contain`) with no frame background or rounding, so the illustrations sit directly on the light blue panel.
- **Transition:** the outgoing image fades out (200 ms) before the next fades in (360 ms after a 180 ms delay), so transparent images never overlap. No animation with reduced motion.
- **Checks:** all four load; no overflow at 390 or 1440 px; no console errors. |
| 0.68.2–0.68.10 | 25 Nov 2026 | Client requests in review (no D-number unless noted).
- **Footer:** no top border; tighter link rhythm (32 px pitch on desktop, touch height kept on phones); column headings Inter bold on `--hk-text-body-lg` (16–18 px). The client kept this size over the later 14–15 px brief.
- **Product cards:** name and price centred; price 16 px (17 from 1280). Quick view, wishlist and compare sit top right on the image; a full-width primary "Add to cart" button sits at the bottom of the image. Both appear on hover or keyboard focus and are always visible on touch screens. The client kept this over the later brief's left-aligned "Add to quote" card.
- **Product tabs:** light underline tabs (`.hk-tabs__list--line`) replace the segmented control. The client kept these too.
- **Catalogue data:** New arrivals uses eight products from hakplus.com/new-products-corporate-gifts (HK538, HK540, HK530, HK542, HK539, HK533, HK536, HK0514), with their photos. Prices are still dummy.
- **Categories:** T-shirts (no such category on hakplus.com) became Laptop sleeves; the "View all" tile became Electronic accessories.
- **Links:** standalone links change colour on hover instead of underlining.
- **Printing:** "Explore our printing techniques" H3 subsection heading (`.hk-subhead`) with "View all methods".
- **Eyebrows:** 8 px eyebrow-to-title gap everywhere. |
| 0.69.0–0.69.1 | 25 Nov 2026 | Final harmonisation pass (cumulative brief). Root causes fixed in the source rules rather than with new overrides.
- **D-108 (supersedes D-101, and D-102 for icons):** Material Symbols at weight 200 site-wide (`--ms-wght` in styles.css and every explicit override). Recipient checklist: plain royal-indigo 18 px check, no green circle; 8 px gaps; Inter 14 px.
- **D-109 (supersedes D-105):** the How it works panel is soft peach `--hk-color-bg-accent-soft` #FFF3ED again, with the neutral connectors from D-85.
- **D-110 (type and links):** `.hk-h2`, `.hk-h3` and the promotional titles are Gabarito 600, not 700. `--hk-leading-h2` 1.12 → 1.2. `--hk-text-h3` on phones 22 → 24 px. Eyebrows share one style: Inter 13 px (14 from 768), 600, royal indigo on light and `--hk-orange-300` on dark; the employee banner's warm brown and the orange eyebrows on light surfaces are gone. Standalone text links are Inter 14/500 (were 14–16/600).
- **D-111:** the bulk-order mascot is about a third smaller at every breakpoint (18 rem → 12 rem from 1280; 13 rem → 8.5 rem at 1024–1279; smaller steps below), so the heading and copy get more width.
- **D-112:** carousel previous and next share one variant (filled indigo when available, muted outline when disabled). The "View all" button under the product tabs follows the selected tab ("View all best sellers / new arrivals / offers") and has no arrow, per D-106.
- **Showcase:** design-system.html shows the live shop card markup and a new "Shared refinements (v0.69.0)" section.
- **Outstanding:** see the v0.69 audit notes in homepage-review.md. |
| 0.70.0 | 25 Nov 2026 | D-113 (client request).
- **Icons:** Material Symbols back to weight 300 site-wide (`--ms-wght` and every explicit override). The client found weight 200 too thin. This supersedes the icon part of D-108; fill 0 and grade 0 are unchanged.
- **Eyebrows:** informational labels must not look like links. They are now Inter 500 (was 600) in muted slate `--hk-color-text-muted` #667085 on light surfaces, instead of royal indigo. On the warm recipient banners #667085 is only 4.3:1, so those use `--hk-color-text-secondary` (AA). Light orange `--hk-orange-300` on dark indigo stays. Royal indigo is reserved for links, actions and selected states.
- **Corporate events:** a "Corporate events" eyebrow is added above "Branded merchandise for every event", and the heading-to-description gap goes from 24 px to 12 px.
- **Eyebrow list (final):** Festivals and occasions, Corporate events, Employee gifting, Client and partner gifting, Printing and personalisation, For resellers, For businesses, About HAK Plus. |
| 0.71.0–0.71.1 | 25 Nov 2026 | D-114: consistency pass from the final audit brief. The client again kept centred product cards with the hover "Add to cart", underline tabs, weight 300 icons and 16–18 px bold footer headings over the brief.
- **Eyebrows:** added Product collections, Featured products, Gifts by recipient and Blogs and insights; now 12 in total, all Inter 14/500 (13 on phones) with an 8 px gap.
- **Gifts by recipient:** restored the parent heading "Gifts that build relationships" (H2). The two banner titles are now H3.
- **Section heading actions:** links, tabs and carousel controls line up with the bottom of the H2 (measured 0 px offset), and content starts 24 px below.
- **Header search:** neutral `--hk-color-border-strong` border by default; indigo only on focus.
- **Benefits:** icons 28 → 24 px; titles 16 → 15 px.
- **Supporting descriptions:** occasion and printing-method descriptions go from 13 to 14 px. Metadata stays at 13 px.
- **How it works:** step titles 18 → 16 px; panel padding from 1280 px is 40/48 px (was 48/64).
- **Bulk order:** the actions follow the copy (28 px gap, was 157 px) as content-width buttons; top padding is 40 px to match the reseller card.
- **About:** the overlay is 34 rem wide with 40 px padding from 1024 px (was 30 rem and 32 px).
- **Checks:** no overflow at 320–2560 px; no clipped headings or buttons; the mascot never overlaps text; no console errors. Tabs, Add to cart, events, process steps, newsletter validation and the carousel all work. |
| 0.72.0–0.72.2 | 25 Nov 2026 | D-115: compact newsletter with floating labels (client request).
- **Component:** new shared `.hk-field--float`. The real `<label for>` follows the input and floats on focus, when filled (`:not(:placeholder-shown)`) or when autofilled (`:autofill`). The general sibling selector (`~`) is used because the validator inserts its error paragraph between the input and the label.
- **Newsletter:** fields are 52 px with a 16 px row gap and a 24 px column gap; the panel has 40 px padding on desktop. The "(optional)" tags are gone; a single "* Required field" note sits under the grid. The divider is removed. Consent and the button share a row from 1280 px and stack below that. "Privacy policy" never wraps, and the consent error has its own line. The panel is 306 px tall at 1440 (was about 375).
- **Phone guidance:** the example number shows as a placeholder only on focus. "UAE and international numbers accepted" is screen-reader text linked by `aria-describedby`. The pattern and its error message are unchanged.
- **Unchanged:** fields, required rules, consent wording, validation, the prototype success message and the orange button. Icons stay at weight 300 (D-113), although the brief says 200.
- **Checks:** label floats when filled and on real focus; Tab order is name → company → email → phone → consent → Privacy policy → Subscribe; empty submit flags email and consent; a valid submit shows the status. No overflow at 320–2560 px. Contrast: border 4.65:1, resting label 10.6:1, placeholder 6.0:1, error 9.9:1. |
| 0.72.3 | 25 Nov 2026 | D-115 fix (client report): the floating label could be caught half-way through its animation, overlapping the caret. It now moves by `top` and `font-size` to a fixed floated position (6–22 px, 13 px) with no positional animation; the typed value starts at 24 px. Autofill selectors are split into their own rules. Verified with a real click, typing and Tab: the label sits clear of the caret and the value. |
| 0.73.0 | 25 Nov 2026 | D-116: outlined floating labels (client request), replacing the in-field stacked label of D-115. Fields are 48 px (`--hk-input-h`) with the value centred at 16 px. Labels rest at 15 px inside; when focused, filled or autofilled they sit on the top border at 12 px/500. The label background (`--_float-bg`) is the surface colour behind the field, which forms the notch: white on light, deep indigo in the newsletter. The field background is transparent to match. Movement is 200 ms, none with reduced motion, and causes no layout shift. Focus is a single 2 px ring (border plus 1 px shadow): `--hk-color-focus-ring-inverse` orange on dark, indigo on light. This replaces the white border plus offset orange outline. Error: #FFB4A8 border and label on dark. The WebKit autofill tint is neutralised. Checks: real click, typing and Tab show the notched label staying after blur; empty submit flags and focuses the email field; 48 px at 320, 768, 1440 and 2560; no overflow; no console errors. |
| 0.73.1 | 25 Nov 2026 | D-117: "Explore our printing techniques" stays a semantic H3 (a subsection of Printing and personalisation) but now uses the shared H2 visual token through the new `.hk-subhead--section` modifier: Gabarito 600, `--hk-text-h2` (26/30/34/36 px), line height 1.2. "View all methods" aligns to the bottom of the heading row, and the cards start 24 px below at every width (was 20 px on phones). No eyebrow or description. |
| 0.73.2 | 25 Nov 2026 | D-118: keep the overlapping bulk-order mascot (client request). It already overlapped from 1280 px (12 rem, 19 px past the right edge); the same treatment now applies at 768–1279 px (10 rem, 11 px past the right edge, sitting on the bottom edge) instead of being clipped inside the card. Phones (<768) keep it inside the card so it never runs past the screen edge. Checked at 320, 375, 768, 1024, 1279, 1440 and 2560: no text overlap and no page overflow. |
| 0.73.3 | 25 Nov 2026 | D-119 (client: "earlier it was better"). Recipient checklist is back to white checks on solid green 18 px circles (reverses D-108). Bulk-order mascot is back to the earlier larger sizes (reverses D-111): 18 rem from 1280 px, overlapping the right edge by 19 px; 13 rem at 768–1279 px, overlapping by 11 px; 7.5–12.5 rem on phones, inside the card. Bulk-order buttons are stacked again at the bottom of the card. From 1280 px, where the cards sit side by side, their bottom margin is `--hk-touch-target − --hk-btn-h-lg`, so "Request a quote" starts level with "Become a reseller" (measured within 1 px, the card border, at 1280, 1440 and 2560). No text overlap or page overflow at 320–2560. |
| 0.73.4 | 25 Nov 2026 | D-120: new client-supplied mascot artwork (same character: gift box in a HAK+ blazer, thumbs up) replaces the D-77 asset. Source: transparent 1122×1402 PNG. Processing: stray background-removal specks and halo pixels more than 3 px from the character were removed; the near-opaque body (alpha 250–254) was made fully opaque; the image was trimmed to the artwork and saved as `assets/images/mascots/hak-mascot-v2.webp` (640×1000, 87 KB, was 97 KB). The old `hak-mascot.webp` was removed and the aspect ratio updated to 640/1000. Sizes and the overlap from D-119 are unchanged: 288 px wide on desktop (19 px past the right edge), 208 px on tablet, 120 px on phones. No text overlap or page overflow at 320–2560; no console errors. |
| 0.73.5 | 25 Nov 2026 | D-121 (client report): "Popular with our clients" had 48 px between its heading and the cards, against 24 px elsewhere, because `.hk-tabpanel` adds 24 px of top padding on top of the heading gap. A shared rule, `.hk-section-head ~ .hk-tabpanel { padding-block-start: 0 }`, removes it when the tabs sit in a section heading. Measured heading-to-first-image is now 24 px in Shop by category, Popular (every tab), Festivals, Gifts by recipient and Blogs, at 375, 1024 and 1440 px. |
