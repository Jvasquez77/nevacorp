// Noticias del grupo. La home muestra las 3 más recientes; cada una tiene su página en /prensa/[slug].
// Para publicar una noticia nueva basta con añadir un objeto a este arreglo.

export type NewsArticle = {
  slug: string;
  date: string;
  dateISO: string;
  tag: string;
  title: string;
  excerpt: string;
  /** Cuerpo de la nota: cada string es un párrafo; los objetos { heading } son subtítulos. */
  body: (string | { heading: string })[];
  quote?: { text: string; author: string; role: string };
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'expansion-1click-sureste-eeuu',
    date: '15 jun. 2026',
    dateISO: '2026-06-15',
    tag: '1Click',
    title: 'NevaCorp expande operaciones de 1Click hacia el sureste de Estados Unidos',
    excerpt:
      'La división de infraestructura del grupo amplía su cobertura operativa para atender la creciente demanda de despliegue de fibra óptica en la región.',
    body: [
      'Neva Corporation anunció la expansión de las operaciones de 1Click Infraestructura hacia el sureste de Estados Unidos, una de las regiones con mayor dinamismo en inversión de redes de telecomunicaciones del país.',
      'La expansión responde a la demanda sostenida de operadores y desarrolladores que requieren socios capaces de diseñar, construir y mantener redes de fibra óptica con estándares de ingeniería internacionales y tiempos de ejecución predecibles.',
      { heading: 'Capacidad instalada para crecer' },
      'Con esta apertura, 1Click incorpora nuevas cuadrillas técnicas, equipos de ingeniería de diseño y supervisión de obra, y fortalece su cadena de suministro para proyectos de despliegue aéreo y subterráneo.',
      'La división replicará el modelo operativo que ha consolidado en sus mercados actuales: planificación centralizada, ejecución local y control de calidad documentado en cada etapa del proyecto.',
      { heading: 'Integración con el ecosistema Neva' },
      'La expansión también abre oportunidades de colaboración con Nextcore, que aporta plataformas de software para la gestión de obra, el seguimiento de cuadrillas y la documentación técnica de red.',
    ],
    quote: {
      text: 'Cada kilómetro que construimos es una base sobre la que otros pueden innovar. Crecer en el sureste nos permite llevar ese estándar a más comunidades.',
      author: 'Dirección de Operaciones',
      role: '1Click Infraestructura',
    },
  },
  {
    slug: 'verla-treenet-40000-usuarios',
    date: '2 may. 2026',
    dateISO: '2026-05-02',
    tag: 'Verla · TreeNet',
    title: 'Verla y TreeNet superan los 40.000 usuarios activos en Colombia',
    excerpt:
      'Las marcas de conectividad del grupo alcanzan un nuevo hito impulsado por la ampliación de su red de fibra óptica y un modelo de servicio cercano al cliente.',
    body: [
      'Verla y TreeNet, las marcas de servicios de internet de Neva Corporation en Colombia, superaron los 40.000 usuarios activos entre hogares y empresas.',
      'El crecimiento se apoya en la ampliación de la red de fibra óptica hasta el hogar (FTTH), que permite ofrecer velocidades simétricas y mayor estabilidad, y en un modelo de atención local que prioriza la resolución rápida de incidencias.',
      { heading: 'Conectividad que se queda en la región' },
      'A diferencia de los grandes operadores nacionales, Verla y TreeNet mantienen equipos técnicos y de servicio en las zonas donde operan, lo que reduce los tiempos de instalación y de respuesta.',
      'El grupo continuará invirtiendo en densificación de red y en nuevos planes empresariales orientados a pymes, instituciones educativas y comercios.',
      { heading: 'Próximos pasos' },
      'Durante el segundo semestre, las marcas trabajarán con Nextcore en la modernización de sus sistemas de autogestión para clientes, facturación y soporte técnico.',
    ],
    quote: {
      text: 'Cuarenta mil conexiones son cuarenta mil hogares y negocios que confían en nosotros cada día. Ese es el indicador que más nos importa.',
      author: 'Gerencia General',
      role: 'Verla · TreeNet',
    },
  },
  {
    slug: 'nextcore-plataforma-gestion-isp',
    date: '18 abr. 2026',
    dateISO: '2026-04-18',
    tag: 'Nextcore',
    title: 'Nextcore lanza nueva plataforma de gestión para clientes ISP del grupo',
    excerpt:
      'La factoría de software del grupo presenta una plataforma que unifica facturación, aprovisionamiento y soporte para proveedores de internet.',
    body: [
      'Nextcore, la división de desarrollo de software de Neva Corporation, presentó una nueva plataforma de gestión diseñada para proveedores de servicios de internet.',
      'La solución unifica en un solo entorno procesos que tradicionalmente están dispersos: alta de clientes, aprovisionamiento de servicios, facturación recurrente, gestión de incidencias y analítica de red.',
      { heading: 'Construida desde la operación real' },
      'La plataforma nace de la experiencia operativa de Verla y TreeNet, que actúan como primeros clientes y aportan casos de uso reales desde el día uno.',
      'Su arquitectura modular permite que otros proveedores de internet adopten únicamente los componentes que necesitan e integren la herramienta con sus sistemas existentes.',
      { heading: 'Del cable a la nube' },
      'El lanzamiento materializa la tesis del grupo: integrar la infraestructura física, la operación de red y el software que la gestiona en una misma cadena de valor.',
    ],
    quote: {
      text: 'Construimos software para operadores porque somos operadores. Esa cercanía con el problema es nuestra principal ventaja.',
      author: 'Dirección de Producto',
      role: 'Nextcore',
    },
  },
];

export const latestNews = [...newsArticles].sort((a, b) => b.dateISO.localeCompare(a.dateISO)).slice(0, 3);

export const getArticle = (slug: string) => newsArticles.find((article) => article.slug === slug);
