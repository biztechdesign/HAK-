/**
 * HAK Plus — Tailwind CSS v3 configuration (v0.1.0)
 *
 * Works in two contexts:
 *  1. Prototype: loaded with <script src="tailwind.config.js"> AFTER the Tailwind v3 Play CDN script.
 *  2. Production: `npx tailwindcss@3 -c tailwind.config.js -i assets/css/tailwind.input.css -o assets/css/tailwind.css`
 *
 * Every value maps to a CSS custom property in assets/css/tokens.css, so tokens stay the single source of truth.
 * Preflight is disabled — assets/css/styles.css provides the reset, so component CSS is never overridden by the injected Play CDN reset.
 * The spacing scale is intentionally restricted to the approved 8-point scale.
 */
(function () {
  const scale = (name, steps) =>
    Object.fromEntries(steps.map((s) => [s, `var(--hk-${name}-${s})`]));

  const hakConfig = {
    content: ['./*.html', './assets/js/**/*.js'],
    corePlugins: { preflight: false },
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // ultra-wide container rule only (D-17)
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: 'var(--hk-neutral-0)',
        indigo: scale('indigo', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
        orange: scale('orange', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
        neutral: scale('neutral', [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
        warm: scale('warm', [50, 100, 200, 300, 400, 500, 600, 700]),
        // Semantic aliases — prefer these in markup
        brand: 'var(--hk-color-brand)',
        accent: 'var(--hk-color-brand-accent)',
        page: 'var(--hk-color-bg-page)',
        alt: 'var(--hk-color-bg-alt)',
        ivory: 'var(--hk-color-bg-warm)',
        sand: 'var(--hk-color-bg-sand)',
        ink: 'var(--hk-color-text-primary)',
        secondary: 'var(--hk-color-text-secondary)',
        muted: 'var(--hk-color-text-muted)',
        line: 'var(--hk-color-border)',
        success: 'var(--hk-color-success)',
        warning: 'var(--hk-color-warning)',
        error: 'var(--hk-color-error)',
        info: 'var(--hk-color-info)',
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: 'var(--hk-space-0-5)',
        1: 'var(--hk-space-1)',
        2: 'var(--hk-space-2)',
        3: 'var(--hk-space-3)',
        4: 'var(--hk-space-4)',
        5: 'var(--hk-space-5)',
        6: 'var(--hk-space-6)',
        8: 'var(--hk-space-8)',
        10: 'var(--hk-space-10)',
        12: 'var(--hk-space-12)',
        14: 'var(--hk-space-14)',
        16: 'var(--hk-space-16)',
        18: 'var(--hk-space-18)',
        20: 'var(--hk-space-20)',
        24: 'var(--hk-space-24)',
        28: 'var(--hk-space-28)',
        32: 'var(--hk-space-32)',
        gutter: 'var(--hk-page-gutter)',
        section: 'var(--hk-section-y)',
        'section-lg': 'var(--hk-section-y-lg)',
        'section-compact': 'var(--hk-section-y-compact)',
      },
      fontFamily: {
        heading: 'var(--hk-font-heading)',
        body: 'var(--hk-font-body)',
        arabic: 'var(--hk-font-arabic)',
        mono: 'var(--hk-font-mono)',
      },
      fontSize: {
        display: ['var(--hk-text-display)', { lineHeight: 'var(--hk-leading-display)' }],
        h1: ['var(--hk-text-h1)', { lineHeight: 'var(--hk-leading-h1)' }],
        h2: ['var(--hk-text-h2)', { lineHeight: 'var(--hk-leading-h2)' }],
        h3: ['var(--hk-text-h3)', { lineHeight: 'var(--hk-leading-h3)' }],
        h4: ['var(--hk-text-h4)', { lineHeight: 'var(--hk-leading-h4)' }],
        h5: ['var(--hk-text-h5)', { lineHeight: 'var(--hk-leading-h5)' }],
        h6: ['var(--hk-text-h6)', { lineHeight: 'var(--hk-leading-h5)' }],
        'body-lg': ['var(--hk-text-body-lg)', { lineHeight: 'var(--hk-leading-body)' }],
        body: ['var(--hk-text-body)', { lineHeight: 'var(--hk-leading-body)' }],
        'body-sm': ['var(--hk-text-body-sm)', { lineHeight: 'var(--hk-leading-ui)' }],
        caption: ['var(--hk-text-caption)', { lineHeight: 'var(--hk-leading-ui)' }],
        price: ['var(--hk-text-price)', { lineHeight: 'var(--hk-leading-tight)' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      borderRadius: {
        none: '0',
        xs: 'var(--hk-radius-xs)',
        sm: 'var(--hk-radius-sm)',
        md: 'var(--hk-radius-md)',
        DEFAULT: 'var(--hk-radius-base)',
        lg: 'var(--hk-radius-lg)',
        xl: 'var(--hk-radius-xl)',
        full: 'var(--hk-radius-full)',
      },
      boxShadow: {
        none: 'none',
        1: 'var(--hk-shadow-1)',
        2: 'var(--hk-shadow-2)',
        3: 'var(--hk-shadow-3)',
        4: 'var(--hk-shadow-4)',
        5: 'var(--hk-shadow-5)',
      },
      zIndex: {
        0: 'var(--hk-z-base)',
        raised: 'var(--hk-z-raised)',
        dropdown: 'var(--hk-z-dropdown)',
        sticky: 'var(--hk-z-sticky)',
        header: 'var(--hk-z-header)',
        overlay: 'var(--hk-z-overlay)',
        drawer: 'var(--hk-z-drawer)',
        modal: 'var(--hk-z-modal)',
        toast: 'var(--hk-z-toast)',
        tooltip: 'var(--hk-z-tooltip)',
      },
      transitionDuration: {
        0: 'var(--hk-duration-instant)',
        fast: 'var(--hk-duration-fast)',
        DEFAULT: 'var(--hk-duration-standard)',
        moderate: 'var(--hk-duration-moderate)',
        slow: 'var(--hk-duration-slow)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--hk-ease-standard)',
        enter: 'var(--hk-ease-enter)',
        exit: 'var(--hk-ease-exit)',
        linear: 'linear',
      },
      maxWidth: {
        none: 'none',
        full: '100%',
        container: 'var(--hk-container-max)',
        wide: 'var(--hk-container-wide)',
        narrow: 'var(--hk-container-narrow)',
        measure: 'var(--hk-measure)',
      },
      extend: {
        borderColor: { DEFAULT: 'var(--hk-color-border)' },
        aspectRatio: { '4/3': '4 / 3', '3/2': '3 / 2', '4/5': '4 / 5', '16/9': '16 / 9', '21/9': '21 / 9' },
      },
    },
    plugins: [],
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = hakConfig;
  } else if (typeof window !== 'undefined' && window.tailwind) {
    window.tailwind.config = hakConfig;
  }
})();
