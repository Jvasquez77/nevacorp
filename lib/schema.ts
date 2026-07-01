// Schema.org no define un tipo "HoldingCompany" explícito; el patrón estándar de la industria
// es modelarlo como Corporation raíz + subOrganization[] (cada subsidiaria referencia parentOrganization
// vía @id). Esto permite a Google Rich Results e IA de búsqueda entender la relación holding → unidades.
const ORG_ID = 'https://www.nevacorporation.com/#organization';

export function buildHoldingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': ORG_ID,
    name: 'Neva Corporation',
    alternateName: 'NevaCorp',
    url: 'https://www.nevacorporation.com',
    logo: 'https://www.nevacorporation.com/images/neva-logo.png',
    description:
      'Holding multinacional que integra construcción de infraestructura de redes, servicios de telecomunicaciones (ISP) y desarrollo de software en Estados Unidos, Colombia y Venezuela.',
    subOrganization: [
      {
        '@type': 'Corporation',
        name: '1Click Infraestructura',
        description: 'Construcción e infraestructura de redes de telecomunicaciones.',
        areaServed: [
          { '@type': 'Country', name: 'Estados Unidos' },
          { '@type': 'Country', name: 'Venezuela' },
        ],
        parentOrganization: { '@id': ORG_ID },
      },
      {
        '@type': 'Corporation',
        name: 'Verla · TreeNet',
        description: 'Proveedor de servicios de internet (ISP).',
        areaServed: { '@type': 'Country', name: 'Colombia' },
        parentOrganization: { '@id': ORG_ID },
      },
      {
        '@type': 'Corporation',
        name: 'Nextcore',
        description: 'Factoría de desarrollo de software y soluciones digitales.',
        areaServed: { '@type': 'AdministrativeArea', name: 'Global' },
        parentOrganization: { '@id': ORG_ID },
      },
    ],
  } as const;
}
