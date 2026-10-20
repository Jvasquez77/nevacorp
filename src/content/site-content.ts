// Contenido de la home: nav, divisiones, cifras y footer (las noticias viven en news.ts).
// Mantener el copy separado de los componentes facilita futuras traducciones (i18n) o CMS headless.

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Portafolio', href: '/#portafolio' },
  { label: 'Inversionistas', href: '/#inversionistas' },
  { label: 'Prensa', href: '/#prensa' },
  { label: 'Talento', href: '/#talento' },
];

export type Division = {
  id: string;
  step: string;
  capability: string;
  name: string;
  region: string;
  description: string;
  /** Sitio oficial de la división (se abre en una pestaña nueva). */
  url: string;
  domain: string;
  tags: string[];
};

export const divisions: Division[] = [
  {
    id: '1click',
    step: '01',
    capability: 'Infraestructura',
    name: '1Click Infraestructura',
    region: 'Estados Unidos · Venezuela',
    description:
      'Diseñamos, instalamos y mantenemos infraestructura de redes de telecomunicaciones con estándares de ingeniería internacionales.',
    url: 'https://1clicktelecom.com',
    domain: '1clicktelecom.com',
    tags: ['Fibra óptica', 'Ingeniería', 'Mantenimiento'],
  },
  {
    id: 'verla-treenet',
    step: '02',
    capability: 'Conectividad',
    name: 'Verla · TreeNet',
    region: 'Colombia',
    description:
      'Proveedores de servicios de internet (ISP) que combinan fibra óptica de última generación con un servicio local cercano al cliente.',
    url: 'https://verla.com.co',
    domain: 'verla.com.co',
    tags: ['ISP', 'Hogares', 'Empresas'],
  },
  {
    id: 'nextcore',
    step: '03',
    capability: 'Software',
    name: 'Nextcore',
    region: 'Global',
    description:
      'Factoría de desarrollo de software que diseña productos y plataformas digitales a la medida para clientes en cualquier parte del mundo.',
    url: 'https://nextcorenow.com',
    domain: 'nextcorenow.com',
    tags: ['Productos digitales', 'Plataformas', 'A la medida'],
  },
];

export type Stat = { value: string; label: string };

export const investorStats: Stat[] = [
  { value: '3', label: 'Países con operación activa' },
  { value: '+1,200', label: 'Km de fibra óptica desplegada' },
  { value: '+85', label: 'Proyectos de infraestructura completados' },
];

export type ThesisPoint = { title: string; description: string };

export const investmentThesis: ThesisPoint[] = [
  {
    title: 'Integración vertical',
    description: 'Construimos la red, la operamos y desarrollamos el software que corre sobre ella.',
  },
  {
    title: 'Diversificación geográfica',
    description: 'Operación activa en Estados Unidos, Colombia y Venezuela, con alcance global en software.',
  },
  {
    title: 'Autonomía por división',
    description: 'Cada unidad opera con excelencia propia, unida por un mismo estándar de gobierno corporativo.',
  },
];

export type FooterColumn = { title: string; links: NavItem[] };

export const footerColumns: FooterColumn[] = [
  {
    title: 'Compañía',
    links: [
      { label: 'Gobierno Corporativo', href: '/gobierno-corporativo' },
      { label: 'Nuestras Divisiones', href: '/#portafolio' },
      { label: 'Relación con Inversionistas', href: '/#inversionistas' },
    ],
  },
  {
    title: 'Sostenibilidad',
    links: [
      { label: 'Compromiso ESG', href: '/sostenibilidad' },
      { label: 'Comunidades', href: '/sostenibilidad/comunidades' },
    ],
  },
  {
    title: 'Talento',
    links: [
      { label: 'Portal de Empleo', href: '/carreras' },
      { label: 'Vacantes Activas', href: '/carreras/vacantes' },
      { label: 'Cultura Neva', href: '/carreras/cultura' },
    ],
  },
  {
    title: 'Prensa y Legal',
    links: [
      { label: 'Contacto de Prensa', href: '/prensa/contacto' },
      { label: 'Información Legal', href: '/legal' },
      { label: 'Política de Privacidad', href: '/legal/privacidad' },
    ],
  },
];
