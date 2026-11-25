# HAK Plus — Accessibility guidelines

**Target: WCAG 2.2 AA.** These rules apply to every component and page.

## Contrast
- Text 4.5:1; large text (24 px, or 18.66 px bold) 3:1; UI boundaries, focus indicators and meaningful icons 3:1.
- Verified pairings (calculated in the browser, see `design-system.html` → Colour system):

| Pairing | Ratio | Result |
|---|---|---|
| Ink `#171923` on white | 17.50:1 | AAA |
| Secondary `#4F5869` on white | 7.16:1 | AAA |
| Muted `#667085` on white / cool neutral / ivory | 4.97 / 4.61 / 4.64:1 | AA |
| White on indigo 500 | 10.75:1 | AAA |
| Ink on orange 500 (accent button) | 5.77:1 | AA |
| Ink on orange 400 (accent hover) | 7.24:1 | AAA |
| White on orange 700 | 5.59:1 | AA |
| Orange 700 text on white | 5.59:1 | AA |
| Input border `#858E9E` on white | 3.30:1 | AA (UI) |

- **Fails, never use:** white on orange 500 (3.03:1), white on orange 600 (4.10:1), orange 500 as text on white (3.03:1), muted text on sand (3.98:1; use warm-700 instead).
- Orange on indigo (3.55:1) is for large text and graphics only.
- Text over images needs a scrim that keeps the text at 4.5:1 or better.

## Keyboard
- Every function is operable by keyboard, in a logical DOM order. There is a skip link to `#main`.
- **Composite widgets:**
  - Tabs: arrows (RTL-aware), Home and End.
  - Menus: arrows, Home, End, Escape.
  - Swatches: arrows.
  - Search: Up and Down, Enter, Escape.
  - Mega menu: Enter or Arrow Down opens; Escape closes and returns focus.
- Overlays close with Escape. Tooltips dismiss with Escape (WCAG 1.4.13).

## Focus management
- Visible 2 px indigo ring with a 2 px offset (orange-300 on dark surfaces). Never remove an outline without a replacement.
- **Dialogs:** native modal `<dialog>` traps focus and makes the page inert. Focus goes to `[autofocus]` or the close button, and returns to the trigger on close.
- **Mobile navigation panels:** focus moves to the back button of each new panel and returns to the originating item.
- **Forms:** on submit, focus moves to the error summary; its links move focus to each field.
- **Filters:** after a chip is removed, focus moves to the next chip or the filter heading.
- **Accordions:** closed panels are `inert`, so hidden links can’t receive focus.

## Forms
- Persistent visible labels; placeholders are examples only.
- Required fields are marked visually and with screen-reader text.
- Errors use `aria-invalid` and a message linked through `aria-describedby`, with icon and text (not colour alone).
- Values are preserved on error.
- Correct `type`, `autocomplete` and `inputmode` values. Phone numbers accept `+971` and international formats.
- Status changes (quantity clamped to MOQ, search results, file list) are announced through `role=status` or `aria-live="polite"`.

## Semantics
- Native first: `button`, `a`, `dialog`, `fieldset` / `legend`, `ol` for steps, `nav` with `aria-label`, `article` labelled by its title for products.
- ARIA patterns used: tabs, combobox + listbox, menu / menuitemradio, switch, radiogroup (swatches), alertdialog, progressbar.
- Heading order follows the page outline. Card titles use the next heading level.
- Images: product and category images that duplicate an adjacent name use `alt=""`; meaningful images have descriptive alt text. Headings and CTAs are never inside images.

## Screen readers
- Icon-only buttons have `aria-label`, and their icons are `aria-hidden`.
- “+3 colours” and “opens in a new tab” have screen-reader text.
- Stock, selection and price states are text, not colour alone.
- Toasts live in a polite live region and never carry the only copy of critical errors.

## Touch targets
- 44 × 44 px for common actions: buttons, nav items, stepper buttons, pagination, icon buttons.
- The WCAG 2.5.8 minimum is 24 × 24 px with spacing. Small buttons (36 px) and swatches (32 px hit area) meet it.

## Motion
- `prefers-reduced-motion: reduce` disables transitions, animations and smooth scrolling.
- No autoplay and no parallax. Hover scaling stays at or below 4% inside clipped frames.

## RTL and language
- `lang` and `dir` on the root (and on any embedded passage in another language).
- Logical properties throughout. `.icon-dir` mirrors directional icons.
- Numbers, phone numbers, emails and SKUs are wrapped in `dir="ltr"`.
- Arabic uses IBM Plex Sans Arabic with taller line heights, and has no italics or negative tracking.

## Testing checklist (per page)
1. Keyboard only: reach and operate everything; focus is always visible; nothing traps focus.
2. Screen reader (NVDA + Chrome, VoiceOver + Safari): headings, landmarks, form errors, dialogs, live updates.
3. Zoom to 200% and 400%, and reflow at 320 CSS px with no horizontal scroll.
4. Contrast checker on any new colour pairing.
5. Reduced-motion setting on.
6. RTL toggle: layout, icons, keyboard direction.

Phase 2 automated and scripted checks are recorded in `validation-report.md`. Screen-reader and real-device testing has **not** been done yet.
