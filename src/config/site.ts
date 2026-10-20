// Datos globales del sitio (SEO, dominio, marca). Cambiar aquí se refleja en metadata,
// JSON-LD y footer sin tocar componentes.
export const siteConfig = {
  name: 'Neva Corporation',
  shortName: 'NevaCorp',
  url: 'https://nevacorp.net',
  tagline: 'Del cable a la nube',
  description:
    'Neva Corporation es un holding multinacional que integra construcción de infraestructura de redes, telecomunicaciones (ISP) y desarrollo de software en Estados Unidos, Colombia y Venezuela.',
  locale: 'es_ES',
  countries: ['Estados Unidos', 'Colombia', 'Venezuela'],
  // Único buzón del sitio. Cada botón añade un asunto distinto (Prensa, Inversionistas, Talento…)
  // para poder clasificar los correos con filtros.
  email: 'contacto@nevacorp.net',
  brand: {
    emblem: '/brand/neva-emblem.png',
    emblemWhite: '/brand/neva-emblem-white.png',
    ogImage: '/brand/og-image.jpg',
  },
} as const;
