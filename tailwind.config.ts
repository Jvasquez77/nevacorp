import type { Config } from 'tailwindcss';

// Paleta extraída por muestreo de píxeles del logo oficial (assets/brand).
// Contraste validado (WCAG 2.2 AA, texto normal ≥4.5:1) sobre neva-ink:
//  - white: ~19:1 · white/70: ~10:1 · white/55: ~6.4:1
//  - neva-gold: ~9.6:1 · neva-sky: ~6.5:1
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neva-ink': '#07090F',
        'neva-ink-2': '#0C1019',
        'neva-navy': '#1B2131',
        'neva-gold-dark': '#B8860B',
        'neva-gold': '#D4AF37',
        'neva-gold-light': '#F5E890',
        'neva-sky': '#3B9BD1',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        brand: ['var(--font-brand)', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'spin-slow-reverse': { to: { transform: 'rotate(-360deg)' } },
        flow: { to: { strokeDashoffset: '-40' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 60s linear infinite',
        'spin-slower': 'spin-slow-reverse 90s linear infinite',
        flow: 'flow 1.6s linear infinite',
        float: 'float 8s ease-in-out infinite',
        glow: 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
