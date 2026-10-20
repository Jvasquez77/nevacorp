import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { newsArticles } from '@/content/news';

const staticRoutes = [
  '',
  '/inversionistas/informe',
  '/prensa',
  '/prensa/contacto',
  '/carreras',
  '/carreras/vacantes',
  '/carreras/cultura',
  '/gobierno-corporativo',
  '/sostenibilidad',
  '/sostenibilidad/comunidades',
  '/legal',
  '/legal/privacidad',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    ...newsArticles.map((article) => ({
      url: `${siteConfig.url}/prensa/${article.slug}`,
      lastModified: article.dateISO,
    })),
  ];
}
