import type { Config } from 'tailwindcss';

// Paleta extraída y verificada por muestreo de píxeles del logo oficial (león + wordmark "Neva Corporation").
// Contraste validado (WCAG 2.2 AA, texto normal ≥4.5:1):
//  - white sobre neva-navy: ~15.8:1
//  - neva-gold sobre neva-navy: ~7.6:1
//  - neva-sky sobre neva-navy: ~5.2:1 (evitar neva-sky como texto sobre fondo blanco: solo ~3.1:1)
//  - neva-navy/70 sobre blanco: ~5.9:1
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neva-navy': '#1B2131',
        'neva-navy-2': '#141924',
        'neva-gold-dark': '#B8860B',
        'neva-gold': '#D4AF37',
        'neva-gold-light': '#F5E890',
        'neva-sky': '#3B9BD1',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};

export default config;
