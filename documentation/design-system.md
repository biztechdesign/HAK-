# HAK Plus — Design system

**Version 0.1.0 · Phase 2 · Draft for review (24 Nov 2026)**
Live reference: [`design-system.html`](../design-system.html). Source of truth for values: [`assets/css/tokens.css`](../assets/css/tokens.css).
Brand colours, the logo and all imagery are **provisional** until official assets are supplied.

---

## 1. Brand direction

**“Studio and showroom.”** A calm, well-lit showroom (white and ivory surfaces, a precise grid, product cutouts) combined with the energy of a print studio (indigo blocks, orange used like a registration mark, production photography). It reads as premium through restraint and precision rather than luxury styling. It is a corporate B2B tool, not a consumer gift shop.

- About 80% neutral surfaces. Product photography supplies colour variety.
- Indigo for action, emphasis and one or two full-bleed bands per page.
- Orange as a highlight only.
- Sand and stone for editorial warmth (collections, occasions, photography grounds), never for controls.
- Gabarito headings (600/700, no tight tracking), quiet Inter interface, light Material Symbols icons (weight 300, fill 0, grade 0).

## 2. Token architecture

| Level | Prefix / example | Rule |
|---|---|---|
| 1 Primitive | `--hk-indigo-500`, `--hk-space-4`, `--hk-radius-lg` | Raw values. Never referenced directly by components. |
| 2 Semantic | `--hk-color-text-secondary`, `--hk-color-action-primary`, `--hk-section-y` | Roles. Components use these. |
| 3 Component | `--hk-btn-h-md`, `--hk-input-border`, `--hk-header-h` | Only where a semantic token isn’t specific enough. |

`tailwind.config.js` maps every theme key to these variables, so Tailwind utilities and component CSS share one source of truth. Global tokens change only with explicit approval (log the change in `design-decisions.md`).

## 3. Colour

### Primitive scales

| Step | Indigo | Orange | Neutral | Warm |
|---|---|---|---|---|
| 0 | — | — | `#FFFFFF` | — |
| 50 | `#EEF0FA` | `#FFF3ED` | `#F5F6FA` (cool neutral) | `#F8F7F4` (ivory) |
| 100 | `#DDE0F4` | `#FFE4D6` | `#EDEFF4` | `#F2EEE7` |
| 200 | `#B8BEE5` | `#FFC6AC` | `#E2E5EB` (border) | `#EDE5D8` (sand) |
| 300 | `#848DCE` | `#FFA17B` | `#CDD2DB` | `#D4C7B5` (stone) |
| 400 | `#535DAE` | `#FF8455` | `#858E9E` ¹ | `#B3A38C` |
| 500 | **`#2D3487`** | **`#F36A35`** | `#667085` | `#8C7B64` |
| 600 | `#252B70` | `#D95020` | `#4F5869` | `#6B5D4B` |
| 700 | `#1D2259` | `#B83F15` | `#3A4150` | `#4E4437` |
| 800 | `#151943` | `#8F3012` | `#252A36` | — |
| 900 | `#10132F` | `#66230E` | `#171923` (ink) | — |

¹ Darkened from the first draft (`#98A1B0`, 2.61:1) to `#858E9E` (3.30:1), so input borders meet WCAG 1.4.11.

Functional: success `#15803D` (text `#166534`, bg `#EDF7F0`), warning `#B45309` (text `#92400E`, bg `#FEF6E7`), error `#DC2626` (text `#B91C1C`, bg `#FDEDED`), info `#2563EB` (text `#1D4ED8`, bg `#EEF4FF`). Darker text shades keep messages at AA on their tinted backgrounds.

### Key semantic roles

| Token | Value | Use |
|---|---|---|
| `--hk-color-bg-page` / `-alt` / `-warm` / `-sand` / `-product` | white / neutral-50 / warm-50 / warm-200 / warm-50 | Page, alternate section, editorial, promotional, product image grounds |
| `--hk-color-bg-brand` / `-brand-deep` | indigo-500 / indigo-800 | Dark brand bands, footer, announcement |
| `--hk-color-text-primary` / `-secondary` / `-muted` | neutral-900 / 600 / 500 | Headings and body / supporting copy / meta, SKU, captions |
| `--hk-color-text-accent` | orange-700 | The only orange used as text on white |
| `--hk-color-border` / `-strong` | neutral-200 / neutral-400 | Dividers / input and control boundaries (≥3:1) |
| `--hk-color-action-primary(-hover/-active)` | indigo-500 / 600 / 700 | Primary buttons |
| `--hk-color-action-accent(-hover/-active)` + `-accent-text` | orange-500 / 400 / 600 + **neutral-900** | Accent button with **ink text** |
| `--hk-color-selected` / `-selected-text` | indigo-50 / indigo-600 | Selected chips, menu items, toggles |
| `--hk-color-focus-ring` / `-inverse` | indigo-500 / orange-300 | Focus on light / dark surfaces |
| `--hk-color-overlay` | rgba(16,19,47,.48) | Dialog backdrop |

### Rules

- **Never put white text on `#F36A35` (3.03:1) or `#D95020` (4.10:1).** Use ink text, or `orange-700` with white.
- Muted text (`#667085`) fails on sand (3.98:1). On sand, use `--hk-color-text-on-sand` (warm-700).
- Orange on indigo (3.55:1) is for large text and graphics only.
- Don’t give every section a different background. Allow at most two strong colour bands per page.
- Live, calculated contrast ratios are in `design-system.html` → Colour system.

## 4. Typography

| Style | Class | Size (375 → 1440 px) | Weight | Line height |
|---|---|---|---|---|
| Display | `.hk-display` | 36 / 44 / 52 / 56 | Gabarito 700 | 1.06 · −0.01em |
| H1 | `.hk-h1` | 32 / 40 / 44 / 48 | Gabarito 700 | 1.1 · −0.005em |
| H2 | `.hk-h2` | 26 / 30 / 34 / 36 | Gabarito 700 | 1.12 |
| H3 | `.hk-h3` | 22 / 26 / 30 / 32 | Gabarito 700 | 1.2 |
| H4 | `.hk-h4` | 20 / 22 / 24 / 24 | Gabarito 700 | 1.25 |
| H5 | `.hk-h5` | 17 / 18 / 18 / 18 | Gabarito 600 | 1.3 |
| H6 | `.hk-h6` | 16 | Gabarito 600 | 1.3 |
| Body large | `.hk-body-lg` | 16 → 18 | Inter 400 | 1.6 |
| Body | `.hk-body` | 16 | Inter 400 | 1.6 |
| Body small | `.hk-body-sm` | 14 | Inter 400 | 1.45 |
| Caption | `.hk-caption` | 12 | Inter 500 | 1.45 |
| Product title | `.hk-product__title` | 16 | Inter 600 | 1.4 |
| Button | `.hk-btn` | 14 (16 large) | Inter 600 | 1.2 |
| Price | `.hk-price__value` | 18 → 20 | Inter 700, tabular | 1.2 |

- Fluid sizes use `clamp()` with a linear ramp from 375 to 1440 px and are frozen above 1440 px, so headings don’t inflate on 1920–2560 px monitors.
- Sentence case everywhere; uppercase only for short codes.
- `.hk-num` gives tabular, lining figures for prices, SKUs and quantities.
- Comfortable reading measure: `--hk-measure: 68ch`.
- **Arabic** (`:lang(ar)`): IBM Plex Sans Arabic, line height +0.15, no negative tracking, display weight 700 maximum. Whether to use Western (0–9) or Arabic-Indic numerals is an open question.

## 5. Iconography

Material Symbols Rounded only. The font is loaded as a variable font with `wght` pinned at **200**, `FILL 0..1` and `GRAD 0`, so the thin stroke is genuine rather than a CSS weight override.

| Class | Size | opsz | Use |
|---|---|---|---|
| `.icon-16` | 16 | 20 | Compact meta |
| `.icon-20` | 20 | 20 | Inline actions, inputs |
| (default) | 24 | 24 | Default |
| `.icon-28` | 28 | 24 | Prominent navigation |
| `.icon-32` | 32 | 40 | Benefits, services |
| `.icon-40` / `.icon-48` | 40/48 | 40/48 | Feature illustrations |

- `.icon-fill` is for active states only (e.g. a saved wishlist item).
- `.icon-dir` mirrors directional icons in RTL.
- Decorative icons get `aria-hidden="true"`. Icon-only buttons carry `aria-label`.
- The showcase checks that every catalogued ligature renders: 64 of 64 pass.

> **Naming note:** icon size classes are `icon-*`, not `ms-*`. Tailwind v3.3+ ships `ms-*` margin-inline-start utilities, which collided with the first draft and added up to 80 px of margin to icons.

## 6. Spacing

8-point scale with fine steps: `0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128` px (`--hk-space-0 … --hk-space-32`). The Tailwind spacing scale is restricted to these values.

| Semantic token | Value | Use |
|---|---|---|
| `--hk-gap-icon` | 8 | Icon to label |
| `--hk-gap-related` | 12 | Related items |
| `--hk-gap-field` | 20 | Between form fields |
| `--hk-card-padding` | 16 | Card interior |
| `--hk-gap-grid` | 12 → 24 (28 ≥ 1920) | Grids |
| `--hk-gap-heading` | 24 → 40 | Section heading to content |
| `--hk-section-y-compact` / `-y` / `-y-lg` | 24→48 / 40→80 / 48→112 | Section rhythm |
| `--hk-page-gutter` | 16 / 24 / 32 / 40 / 48 | Page side padding, stepped at 640, 768, 1280 and 1440 px (D-51) |
| `--hk-container-max` | 100% / 1280 / 1320 / 1440 | Content width; fluid below 1280 px, 1440 from 1536 px (D-51) |

Vary section spacing by content. Never apply one value to every section.

## 7. Layout and grid

- Content max **1320 px** (`.hk-container`). Narrow: 760 px. Wide (product grids at ≥ 1920 px only): 1440 px.
- `.hk-grid`: 4 / 8 / 12 columns at < 768 / 768–1023 / ≥ 1024 px.
- `.hk-auto-grid` with a minimum usable width: products 216 px (2-up forced below 480 px), categories 136 px (2 / 3 on small phones), cards 272 px.
- Full-width bands stretch edge to edge and nest a `.hk-container`.

## 8. Radius, borders, elevation

| Radius | Value | Use |
|---|---|---|
| `xs` / `sm` | 2 / 4 | Fine details, badges |
| `md` | 6 | Inner segmented controls |
| `base` | 8 | Buttons, inputs, menus items |
| `lg` | 12 | Cards, media, menus |
| `xl` | 16 | Banners, bento tiles, dialogs |
| `full` | 9999 | Swatches, avatars, switches |

Borders are 1 px default. Focus is a 2 px ring with a 2 px offset; selected and error states add a 1 px inset to make 2 px.

Shadows 0–5, indigo-tinted and soft: 2 for the sticky header and hover, 3 for dropdowns and the mega menu, 4 for toasts and floating elements, 5 for dialogs. **Product cards have no shadow.**

## 9. Motion

| Token | Value | Use |
|---|---|---|
| `--hk-duration-fast` | 120 ms | Hover, colour |
| `--hk-duration-standard` | 200 ms | Tabs, dropdowns, underlines |
| `--hk-duration-moderate` | 280 ms | Drawers, dialogs, accordions |
| `--hk-duration-slow` | 400 ms | Large surfaces, rarely |
| `--hk-ease-standard` / `-enter` / `-exit` | cubic-beziers | State change / entering / leaving |

No autoplay, parallax or decorative loops. Image hover scales by at most 3–4% inside a clipped frame, so there’s no layout shift. `prefers-reduced-motion: reduce` collapses all transitions and animations.

## 10. Component architecture

- **Naming:** `.hk-{component}`, `__{part}`, `--{variant}`, `.is-{state}`. ARIA attributes drive visual states where possible (`[aria-pressed]`, `[aria-selected]`, `[aria-expanded]`, `[aria-invalid]`).
- **Files:**
  - `tokens.css`: tokens
  - `styles.css`: reset, typography, icons, layout primitives, focus, motion
  - `components.css`: components
  - `main.js`: behaviour, attached through `data-hk-*` attributes; `HK.init(root)` for injected markup
- **Showcase isolation:** `design-system.css` (`.ds-*`) and `design-system.js` load only on the showcase page.
- **Tailwind:** v3 Play CDN for the prototype, configured by `tailwind.config.js` with preflight disabled (the reset lives in `styles.css`, so the injected Play CDN reset can’t override components). Use utilities for layout glue. Use `.hk-*` components for anything reusable.
- **Production build:** `npx tailwindcss@3 -c tailwind.config.js -o assets/css/tailwind.css --minify`, then replace the CDN script with the compiled file.
- **Cache busting:** shared assets are linked with `?v=<version>`. Bump it on every release.

## 11. Usage principles

1. Reuse before extending. Extend only with documented tokens.
2. One primary action per view.
3. No invented business data. Mark provisional content with `.hk-provisional` (remove before launch).
4. Hide empty dynamic sections instead of rendering empty states on the homepage.
5. Validate every page at the widths in `responsive-guidelines.md` and against `accessibility-guidelines.md`.

## 12. Version history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 24 Nov 2026 | First complete draft: tokens, components, showcase, documentation |
| 0.2.0 | 24 Nov 2026 | Homepage component variants (hero banner, supporting banners, hexagon categories, occasion grid, explorer, assistance, resources, newsletter, external link); no token changes |

## Homepage refinement rules (v0.27.0, D-68)

- **Canvas:** white is the page canvas. Full-width grey bands are not used. Tinted surfaces (warm ivory, cool neutral, soft indigo) appear only inside image surfaces and contained components: product and category tiles, the bulk-order card and the recipient cards. Strong emphasis is kept for the hero, the recipient cards, the reseller card, the About photograph and the footer.
- **Typography:**
  - **Gabarito:** display, section headings (`.hk-h2`) and feature headings. Since v0.39.0 heading sizes are stepped, not fluid. The type table lists sizes for mobile <768 / tablet 768–1023 / desktop 1024–1439 / large ≥1440, in px and feature headings (hero, reseller, recipient, About, newsletter). Weights 600/700, tracking 0 to −0.01em.
  - **Inter:** body (16 px), product and category names, card and article titles, tabs, step labels, navigation, buttons, forms and metadata.
- **Eyebrows:** sentence case, Inter 600 at 14 px. Every section heading has one (v0.37.0): Categories, Printing and personalisation, Festivals and occasions, Corporate events, Gifts by recipient, Featured products, About HAK Plus, From the blog, Newsletter. Cards keep theirs (For resellers, For businesses, Employee gifting, Client and partner gifting).
- **Section rhythm (v0.38.0):** sections have no vertical padding of their own. One margin, `--hp-gap` (64 → 120 px), separates every section, so gaps never double up. There are two attached pairs: the hero with its trust bar (24 px), and the About photo with its certification strip (0). Heading-to-content distance is 32 px.
- **Buttons:** content CTAs use `.hk-btn--lg` (52 px), Inter 600 with 20 px icons. Pill-shaped buttons are not used.
- **Containers:** avoid cards inside cards. Reseller benefits are an open list with hairlines. Category tiles use a warm ivory surface and product cards a cool neutral image surface, both with no outline (D-86). Shadows are no stronger than `--hk-shadow-2`.
- **Icons:** Material Symbols Rounded only, at weight 300, fill 0 and grade 0, including active states (D-102).
- **Buttons:** “Request a quote” is always the orange accent button (hero, events, bulk card). Every button is a rounded rectangle; no pills.
- **Product names:** plain descriptive names; model codes (e.g. ATSALI) are not shown, and the SKU sits on the meta line.
- **Footer logo:** the reversed logo (`brand/hak-plus-logo-reversed.png`: white “HAK”, orange “+”, transparent) sits directly on navy, with no white plate. It is derived from the master logo file; replace it with the official reversed artwork when supplied.
- **Footer (v0.39.0):** the footer has five parts:
  - **Brand:** reversed logo, tagline, “Follow us” and Instagram, Facebook, YouTube and LinkedIn icons.
  - **Shop:** Drinkware, Gadgets, Bags, Stationery, Lanyards, Other accessories, New arrivals, Special offers, Clearance sale, Shop online.
  - **Services:** HAK catalogue, White-labelled catalogue, Marketing material, Printing techniques, Request a quote, Request a callback.
  - **Company:** About HAK Plus, Certifications, Blogs, Media, Reseller portal sign-in, Register as a reseller.
  - **Contact us:** HQ address, working hours, and phone and email as `tel:` and `mailto:` links.

  The columns collapse into accordions on phones.

## Final refinement (v0.40.0, D-80) — supersedes D-78/D-79 where they differ

- **Type roles:**
  - **Hero:** display, 56 px on desktop.
  - **Section headings:** H2, 36 px.
  - **Promotional headings** (reseller, recipient cards, About, bulk, newsletter): H3, 32 px.
  - **Banner tiles:** H4, 24 px.
  - **Card titles:** Inter 600 at 16–18 px.
  - **Body text:** 16 px.
  - **Metadata:** 13 px.
  - **Button labels:** 14 px.
  - **Hero, 1024–1279 px:** the heading uses H2, because that column is narrowest there.
- **Rhythm:** `--hp-gap` is 40 px on mobile and 64 px on desktop; the attached pairs are unchanged.
- **Heading spacing:** heading to content is 24 px.
- **Eyebrows:** kept only where they add context: Printing, Occasions, Gifts by recipient, the recipient cards, the reseller and bulk cards, and About. Removed from Categories, Events, Featured products, Blogs and Newsletter.
- **Controls:** large buttons and inputs are both 48 px.
- **Benefits bar:** plain brand-colour icons, with no tinted tiles.
- **Events:** the selected item has a 3 px royal-indigo inline-start bar and a faint tint.
- **Footer:** links are 14 px in indigo-100 (12.8:1 on deep indigo).
- **Icon weight:** all icons, header included, are weight 300, fill 0, grade 0 (D-102, which replaces the D-70 header-only exception).
- **Arrows (D-106):** text links end in `arrow_forward`, 18 px, in the link colour (royal indigo). Buttons never carry arrows.

## Targeted refinements (v0.46.0, D-85)
- **How it works:** the panel background is `--hk-color-bg-accent-soft`, and the active step uses accent orange.
- **Newsletter:** `.hk-newsletter--dark` is a deep-indigo card on white. Fields are translucent white (6% fill, 32% border) with white text.
- **Footer:** `.hk-footer--light` is the default footer. It is white, with the full-colour logo, slate links and indigo hover. The reversed logo is kept for any future dark placement.
- **Segmented tabs:** `.hk-tabs__list--segmented` is a compact, non-pill tab group for switching content in place.
- **Add to quote:** the outlined secondary action on product cards. Card actions never use orange.
- **Product cards:** show the category only; the SKU lives on product pages.
