# HAK Plus — Project brief (working summary)

> Source of truth: the client's master project brief (supplied 24 Nov 2026).
> This file condenses it for day-to-day reference. If the two ever disagree, the master brief wins.
> Research findings, design direction and open questions are in [design-decisions.md](design-decisions.md).

## 1. Project

| Item | Detail |
|---|---|
| Brand | HAK Plus (HAK+) |
| Existing site | https://www.hakplus.com/ |
| Market | Dubai / UAE first, regional and international B2B buyers |
| Business | Corporate gifting, promotional merchandise, customisation and printing, wholesale, reseller supply |
| Model | B2B e-commerce + quotation-led bulk ordering + reseller channel |
| Goal | Make the current site a premium, internationally credible corporate gifting and branded merchandise platform |

## 2. Audiences

Corporate organisations, procurement teams, marketing and brand teams, HR and engagement teams, event companies, agencies, promotional distributors and resellers, SMEs, regional and international buyers.

Two discovery modes must both work well:
- **Known need:** searching by product name, category or SKU, and comparing MOQ, colours and stock quickly.
- **Needs inspiration:** browsing by occasion, event, recipient or collection, with guidance towards a quote.

## 2A. Corporate gifting alignment (mandatory, added 24 Nov 2026)

HAK Plus is a **B2B** corporate gifting, promotional merchandise, wholesale and branding platform. It is **not** a consumer gift shop, a personalised birthday-gift store or a retail print-on-demand site. This applies to the design system, the homepage and every later page.

**Prioritise:** corporate credibility · premium branded-merchandise presentation · efficient discovery · procurement needs (specs, SKU search, MOQ, carton data, PDF/quote) · bulk and quotation journeys · professional printing capability · onboarding and recognition · client and partner gifting · exhibitions, conferences and events · corporate seasonal campaigns · reseller and wholesale needs · Dubai's multicultural business context.

**Avoid:** playful consumer aesthetics · excessive pastels · decorative fonts · childish illustrations · unnecessary animation · generic retail promotion patterns (discount-code banners, countdown timers, "Hot/Sale" badge clutter, star ratings as a primary card signal, "Shop now" impulse CTAs).

**Balance:** professional but not overly formal, industrial, luxurious or monotonous. Creativity comes through merchandise photography and composition, not decoration.

**Test for every pattern borrowed from a reference:** *would a procurement, HR, marketing or events buyer find this useful when choosing and ordering branded merchandise for a company?* If not, leave it out.

## 3. Non-negotiables

- **Brand colours (provisional tokens):** indigo `#2D3487` primary, orange `#F36A35` accent, neutral-led backgrounds. No new brand colours.
- **Type:** Gabarito (display and section headings 600/700; replaced Manrope in v0.27.0 at the client’s request), Inter (body/UI 400/500/600/700), IBM Plex Sans Arabic (future Arabic). Sentence case throughout.
- **Icons:** Material Symbols Rounded only, weight 200, outlined by default (fill 0), grade 0, optical size matched to render size. Fill only for active/selected states.
- **Layout:** 1440 canvas, 1320 max content, 12-column grid, 8-pt spacing, button radius 6–8 px, card radius 8–12 px.
- **Tech:** semantic HTML5, Tailwind CSS v3 (Play CDN for prototype, compiled later), CSS custom properties, vanilla JS. No frameworks.
- **Accessibility:** WCAG 2.2 AA, keyboard-operable, reduced motion, nothing that only works on hover.
- **Responsive validation:** 320, 375, 640, 768, 1024, 1280, 1440, 1536, 1920, **2560 and larger**, plus the widths between them. Content stays capped at the max width on ultra-wide screens. Full-bleed bands stretch, but their imagery and text stay composed (see design-decisions D-17).
- **RTL readiness:** logical CSS properties (`margin-inline-start`, `inset-inline-end`, etc.) by default.
- **Content honesty:** no invented prices, discounts, stats, testimonials, client logos, certifications or delivery guarantees. Placeholder content is labelled as provisional.
- **Regional relevance comes from content, not decoration:** no gold, Arabic ornament, desert or skyline imagery.
- **Original identity:** reinterpret patterns from several references. Do not reproduce a template or competitor.

## 4. Execution phases

1. **Project understanding and design principles** ← *this deliverable*
2. Design system (tokens, scales, components, documentation)
3. Interactive `design-system.html` showcase
4. Homepage design
5. Homepage review and refinement
6. Responsive and accessibility validation
7. Additional pages on the same system

The homepage and `index.html` are intentionally **not** created in phase 1.

## 5. Project structure

```
hak-plus/
├── index.html                      homepage prototype (phase 3)
├── design-system.html              interactive showcase (phase 2–3)
├── tailwind.config.js              Tailwind v3 theme → tokens
├── assets/
│   ├── images/ placeholders/ banners/ printing/ occasions/ events/ gifting/ mascots/ (+ empty brand/ products/ categories/ collections/)
│   ├── css/  tokens.css · styles.css · components.css · home.css (homepage) · design-system.css (showcase only)
│   └── js/   main.js · home.js (homepage) · design-system.js (showcase only)
└── documentation/
    ├── project-brief.md · design-decisions.md
    ├── design-system.md · component-guidelines.md
    ├── responsive-guidelines.md · accessibility-guidelines.md
    ├── validation-report.md
    └── homepage-review.md
```
The local preview server is configured in `../.claude/launch.json` (`python -m http.server 8765 --directory hak-plus`).

## 6. Compliance checklist (run before and after every page)

1. Re-read this brief (including §2A, corporate alignment) and the master brief.
2. Read the latest `design-system.md`.
3. Review `design-system.html`.
4. Review `tokens.css` and the Tailwind config.
5. Reuse existing components and interaction patterns.
6. After the page: audit colours, type, spacing, radius, icons, components, a11y, responsiveness and RTL.
7. Any new component is documented in `component-guidelines.md`. Global tokens change only with explicit approval.
