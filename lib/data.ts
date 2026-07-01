// Fuente única de contenido para nav, divisiones, cifras y noticias.
// Mantener el copy separado de los componentes facilita futuras traducciones (i18n) o CMS headless.

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Inversionistas', href: '#inversionistas' },
  { label: 'Talento', href: '#talento' },
  { label: 'Prensa', href: '#prensa' },
];

export type Division = {
  id: string;
  name: string;
  region: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export const divisions: Division[] = [
  {
    id: '1click',
    name: '1Click Infraestructura',
    region: 'Estados Unidos · Venezuela',
    description:
      'Diseñamos, instalamos y mantenemos infraestructura de redes de telecomunicaciones con estándares de ingeniería internacionales.',
    imageSrc: '/images/division-infraestructura.jpg',
    imageAlt: 'Técnico instalando infraestructura de fibra óptica en campo',
    href: '/divisiones/1click',
  },
  {
    id: 'verla-treenet',
    name: 'Verla · TreeNet',
    region: 'Colombia',
    description:
      'Proveedores de servicios de internet (ISP) que combinan fibra óptica de última generación con un servicio local cercano al cliente.',
    imageSrc: '/images/division-isp.jpg',
    imageAlt: 'Centro de operaciones de red de un proveedor de internet',
    href: '/divisiones/verla-treenet',
  },
  {
    id: 'nextcore',
    name: 'Nextcore',
    region: 'Global',
    description:
      'Factoría de desarrollo de software que diseña productos y plataformas digitales a la medida para clientes en cualquier parte del mundo.',
    imageSrc: '/images/division-software.jpg',
    imageAlt: 'Equipo de desarrollo de software colaborando frente a pantallas de código',
    href: '/divisiones/nextcore',
  },
];

export type Stat = { value: string; label: string };

export const investorStats: Stat[] = [
  { value: '3', label: 'Países con operación activa' },
  { value: '+1,200', label: 'Km de fibra óptica desplegada' },
  { value: '+85', label: 'Proyectos de infraestructura completados' },
  { value: '+40,000', label: 'Hogares y empresas conectados' },
];

export type NewsItem = { date: string; dateISO: string; title: string; href: string };

export const newsItems: NewsItem[] = [
  {
    date: '15 jun. 2026',
    dateISO: '2026-06-15',
    title: 'NevaCorp expande operaciones de 1Click hacia el sureste de Estados Unidos',
    href: '/prensa/expansion-1click-sureste-eeuu',
  },
  {
    date: '2 may. 2026',
    dateISO: '2026-05-02',
    title: 'Verla y TreeNet superan los 40.000 usuarios activos en Colombia',
    href: '/prensa/verla-treenet-40000-usuarios',
  },
  {
    date: '18 abr. 2026',
    dateISO: '2026-04-18',
    title: 'Nextcore lanza nueva plataforma de gestión para clientes ISP del grupo',
    href: '/prensa/nextcore-plataforma-gestion-isp',
  },
];
