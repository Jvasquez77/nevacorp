# Neva Corporation — Landing page

Sitio institucional de Neva Corporation, holding de infraestructura de redes, telecomunicaciones y software.

Construido con **Next.js 14 (App Router)**, **React 18**, **TypeScript** y **Tailwind CSS**.

## Requisitos

- Node.js 18.18 o superior (recomendado: 20, ver `.nvmrc`)
- npm

## Puesta en marcha

```bash
nvm use          # opcional, usa la versión de .nvmrc
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Comando             | Descripción                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente |
| `npm run build`     | Build de producción                           |
| `npm run start`     | Sirve el build de producción                  |
| `npm run lint`      | ESLint (`next/core-web-vitals`)               |
| `npm run typecheck` | Verificación de tipos con TypeScript          |

## Estructura

```
.
├── assets/
│   └── brand/              # Originales del kit de marca (no se sirven en la web)
├── public/
│   └── brand/              # Logos/emblemas optimizados que usa el sitio
└── src/
    ├── app/                # Rutas (App Router): una carpeta por URL con su page.tsx
    │   ├── carreras/       #   /carreras, /carreras/vacantes, /carreras/cultura
    │   ├── prensa/         #   /prensa, /prensa/contacto, /prensa/[slug] (una por noticia)
    │   ├── inversionistas/ #   /inversionistas/informe
    │   ├── sostenibilidad/ #   /sostenibilidad, /sostenibilidad/comunidades
    │   ├── legal/          #   /legal, /legal/privacidad
    │   └── gobierno-corporativo/
    ├── components/
    │   ├── layout/         # Header y Footer
    │   ├── sections/       # Secciones de la home (Hero, Portfolio, Investors, News, Careers)
    │   ├── page/           # Bloques de páginas internas (PageHero, CardGrid, ContactBanner, Prose…)
    │   ├── seo/            # Structured data (JSON-LD)
    │   └── ui/             # Piezas reutilizables (Button, Container, Reveal, CountUp…)
    ├── config/
    │   └── site.ts         # Nombre, dominio, descripción y rutas de marca
    ├── content/
    │   ├── site-content.ts # Home: navegación, divisiones, cifras, tesis, footer
    │   ├── news.ts         # Noticias (cada una genera su página /prensa/[slug])
    │   └── careers.ts      # Vacantes, áreas, beneficios, proceso y valores
    └── lib/
        └── schema.ts       # Generador del schema.org del holding
```

El alias `@/` apunta a `src/` (p. ej. `import { Hero } from '@/components/sections/Hero'`).

## Tareas comunes

- **Cambiar textos o cifras de la home:** `src/content/site-content.ts`.
- **Publicar una noticia:** añadir un objeto en `src/content/news.ts` (la página, la home y el sitemap se actualizan solos).
- **Vacantes, valores y beneficios:** `src/content/careers.ts`.
- **Correos de contacto** (uno solo para todo el sitio): `email` en `src/config/site.ts`. Cada botón añade un asunto (Prensa, Inversionistas, Talento…) para filtrar.
- **Textos institucionales y legales:** directamente en el `page.tsx` de cada ruta. Los textos legales son una base y deben ser revisados por el área legal.
- **Cambiar el enlace de una división:** campo `url` (y `domain`) de cada división en `src/content/site-content.ts`.
  Actualmente:
  - 1Click Infraestructura → https://1clicktelecom.com
  - Verla · TreeNet → https://verla.com.co
  - Nextcore → https://nextcorenow.com
- **Colores y animaciones:** `tailwind.config.ts`. Utilidades visuales (rejilla, degradados, tarjetas glass) en `src/app/globals.css`.
- **Logos:** reemplazar los archivos de `public/brand/` manteniendo el nombre.
