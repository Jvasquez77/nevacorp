import { siteConfig } from '@/config/site';
import { divisions } from '@/content/site-content';

// Schema.org no define un tipo "HoldingCompany" explícito; el patrón estándar de la industria
// es modelarlo como Corporation raíz + subOrganization[] (cada subsidiaria referencia parentOrganization
// vía @id). Esto permite a Google Rich Results e IA de búsqueda entender la relación holding → unidades.
const ORG_ID = `${siteConfig.url}/#organization`;

function toAreaServed(region: string) {
  if (region === 'Global') return { '@type': 'AdministrativeArea', name: 'Global' };
  const countries = region.split(' · ').map((name) => ({ '@type': 'Country', name }));
  return countries.length === 1 ? countries[0] : countries;
}

export function buildHoldingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.brand.emblem}`,
    description:
      'Holding multinacional que integra construcción de infraestructura de redes, servicios de telecomunicaciones (ISP) y desarrollo de software en Estados Unidos, Colombia y Venezuela.',
    subOrganization: divisions.map((division) => ({
      '@type': 'Corporation',
      name: division.name,
      url: division.url,
      description: division.description,
      areaServed: toAreaServed(division.region),
      parentOrganization: { '@id': ORG_ID },
    })),
  } as const;
}
