# HAK Plus — Responsive guidelines

**v0.1.0.** Mobile-first, built on Tailwind CSS v3 breakpoints, with one extra rule at 1920 px.

## Breakpoints

| Prefix | Min width | Grid | Gutter |
|---|---|---|---|
| — | 0 | 4 columns | 16 px |
| `sm` | 640 | 4 columns | about 25 px |
| `md` | 768 | 8 columns | about 29 px |
| `lg` | 1024 | 12 columns | about 36 px |
| `xl` | 1280 | 12 columns | about 43 px |
| `2xl` | 1536 | 12 columns, 1320 max | 48 px |
| `3xl` | 1920 | 12 columns | 48 px; product grids may widen to 1440 |

Gutter and container (client spec, D-51). Max width is the content width; the gutter sits outside it.

| Viewport | Content max-width | Side padding (minimum) |
|---|---|---|
| 320–639 px | 100% | 16 px |
| 640–767 px | 100% | 24 px |
| 768–1023 px | 100% | 32 px |
| 1024–1279 px | 100% | 32 px |
| 1280–1439 px | 1280 px | 40 px |
| 1440–1535 px | 1320 px | 48 px |
| 1536–1919 px | 1440 px | 48 px |
| 1920 px + | 1440 px | centred |

## Containers
- `.hk-container`: 1320 px content, centred, fluid gutters.
- `--narrow`: 760 px (forms, FAQ, policies).
- `--wide`: 1440 px at ≥ 1920 px only, for product grids. It adds columns rather than enlarging cards.
- Full-bleed sections fill the screen width and nest a container, so content always aligns to the grid.
- Body text never exceeds about 68 characters per line (`--hk-measure`).

## Grid adaptation
- Use `.hk-auto-grid` with a minimum usable width rather than fixed column counts:
  - products 216 px
  - categories 136 px
  - cards 272 px
- Forced rules:
  - products: 2 columns below 480 px; `--dense-1col` gives 1 column for information-rich lists
  - categories: 2 columns below 480 px, 3 columns from 480 to 639 px
- Tailwind grids **must declare columns** (`grid-cols-1` at minimum). Implicit `auto` columns size to content and caused overflow during validation.

## Typography scaling
`clamp()` ramps linearly from 375 to 1440 px and stops growing above 1440 px (display 36 → 64; H1 32 → 48; body 16). Layouts must allow text to grow 200% and Arabic to run 20–30% longer. Never use fixed heights on text containers.

## Navigation
| < 1024 | ≥ 1024 |
|---|---|
| Header: menu, logo, search button, cart | Utility bar, then logo, full search, quote, account, wishlist, cart; nav row |
| Drawer with nested panels and pinned quick actions | Mega menu (click, keyboard, hover enhancement); feature column from 1280 px |
| Search opens a full-width sheet | Inline combobox |

The nav row wraps rather than overflowing if labels get long (for example in Arabic).

## Components
- **Product cards:** the same component in every context. The horizontal variant’s media shrinks to 28%, and the body has `min-inline-size: 0`, so text wraps instead of overflowing.
- **Filters:** sidebar at ≥ 1024 px; below that the same form moves into a start-side drawer with an Apply button.
- **Split promo / hero:** stacked with text first below 768 px, side by side from 768 px.
- **Bento:** 1 column, then 2 columns from 640 px, then 12-column asymmetric from 1024 px.
- **Process steps:** vertical, then 2 columns from 768 px, then 4 columns from 1024 px (`--h`).
- **Footer:** accordion below 640 px, 4 columns from 768 px, contact plus 4 columns from 1024 px.
- **Dialogs:** full width minus 32 px; sheets come up from the bottom on mobile; drawers are max 400 px.
- **Tabs:** the list scrolls horizontally with snap.
- **Tables:** wrapped in a scroll container (`position: relative` so visually hidden captions can’t escape).
- **Touch targets:** 44 px for common controls. Nothing depends on hover.

## Required testing
Widths: **320, 360, 375, 390, 414, 480, 639/640, 767/768, 834, 1023/1024, 1279/1280, 1366, 1440, 1536, 1920, 2560**, plus portrait and landscape on a real phone and tablet.

For each width, check:
- No horizontal page scroll (`document.documentElement.scrollWidth ≤ clientWidth`).
- No clipped or overlapping text.
- Navigation, search, filters, forms and dialogs are usable.
- Typography is not oversized on wide screens.
- Images keep their ratio and focal point.

The `design-system.html` viewport preview (an iframe at preset widths) is a convenience. It does not replace testing in real browser windows and devices.

## Lessons from phase 2 validation
1. Tailwind v3’s `ms-*` / `me-*` utilities collide with any custom `ms-*` classes. Use the `icon-*` prefix for icon sizes.
2. Absolutely positioned `.sr-only` elements without a positioned ancestor escape scroll containers. `.sr-only` now sets `inset-inline-start: 0`.
3. Hidden popovers that only use `visibility: hidden` still widen the page. Closed menus, popovers, tooltips and the mega menu use `display: none`.
4. Implicit Tailwind grid columns size to content. Always declare `grid-cols-*`.
