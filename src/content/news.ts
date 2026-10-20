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
    slug: '1click-analiza-mercado-panameno',
    date: '19 oct. 2026',
    dateISO: '2026-10-19',
    tag: '1Click',
    title: '1Click analiza el mercado panameño para fortalecer su presencia en la región',
    excerpt:
      'La división de infraestructura de Neva Corporation evalúa oportunidades en Panamá como parte de su estrategia para consolidarse como referente en redes de telecomunicaciones en el continente.',
    body: [
      '1Click Infraestructura, la división de construcción de redes de telecomunicaciones de Neva Corporation, inició un análisis del mercado panameño con el objetivo de fortalecer su presencia en la región y ampliar su capacidad de atender proyectos en Centroamérica y el Caribe.',
      'El estudio forma parte de la estrategia de crecimiento de la división, que hoy opera en Estados Unidos y Venezuela, y busca identificar oportunidades de despliegue de fibra óptica, redes neutras y servicios de ingeniería para operadores, desarrolladores y entidades privadas.',
      { heading: '¿Por qué Panamá?' },
      'Panamá ocupa una posición estratégica en el continente: es un centro logístico y financiero de referencia, punto de llegada de varios cables submarinos internacionales y puente natural entre Norteamérica y Sudamérica.',
      'Estas condiciones lo convierten en un mercado atractivo para la expansión de infraestructura digital y en una base desde la cual atender a otros países de la región con mayor agilidad.',
      { heading: 'Un análisis con visión de largo plazo' },
      'Durante esta etapa, 1Click evaluará la demanda de infraestructura de telecomunicaciones, el marco regulatorio, el ecosistema de proveedores y posibles alianzas con actores locales, antes de definir el modelo de entrada más adecuado.',
      'La división aplicará la experiencia acumulada en sus mercados actuales: planificación centralizada, ejecución local y control de calidad documentado en cada etapa de los proyectos.',
      { heading: 'Respaldo del ecosistema Neva' },
      'Una eventual llegada a Panamá contaría con el respaldo del grupo, incluida la plataforma tecnológica de Nextcore para la gestión de obra y de red, lo que permitiría replicar el modelo integrado que caracteriza a Neva Corporation: del cable a la nube.',
    ],
    quote: {
      text: 'Panamá es una pieza clave para conectar la región. Queremos llegar con el mismo estándar de ingeniería que nos ha permitido crecer en cada mercado donde operamos.',
      author: 'Dirección de Desarrollo de Negocio',
      role: '1Click Infraestructura',
    },
  },
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
    slug: 'verla-treenet-inicio-operaciones-colombia',
    date: '2 may. 2026',
    dateISO: '2026-05-02',
    tag: 'Verla · TreeNet',
    title: 'Verla y TreeNet arrancan operaciones en Colombia.',
    excerpt:
      'Las marcas de internet de Neva Corporation inician operaciones en Colombia y superan las expectativas planteadas para su lanzamiento.',
    body: [
      'Neva Corporation anunció el inicio de operaciones de Verla y TreeNet, sus marcas de servicios de internet en Colombia. Con este paso, el grupo suma la conectividad a su cadena de valor y llega directamente a hogares y empresas.',
      'Las primeras semanas de operación superaron las expectativas planteadas para el lanzamiento, tanto en la demanda del servicio como en la respuesta de los primeros clientes.',
      { heading: 'Una operación respaldada por el grupo' },
      'Verla y TreeNet nacen con el respaldo de las demás divisiones de Neva: la experiencia en redes de 1Click Infraestructura y la plataforma tecnológica de Nextcore, que gestiona de forma integral su operación.',
      'Ese respaldo permite crecer con una base sólida: red de fibra óptica, procesos de atención al cliente y sistemas de gestión preparados para escalar desde el primer día.',
      { heading: 'Una meta clara' },
      'Con este arranque, Verla y TreeNet se proyectan para convertirse en el cuarto proveedor de servicios de internet de Colombia.',
    ],
    quote: {
      text: 'Arrancamos con una meta ambiciosa y la respuesta del mercado nos confirma que vamos por el camino correcto.',
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
      'La factoría de software del grupo presenta una plataforma para gestionar de forma integral la operación de proveedores de internet, empezando por Verla y TreeNet.',
    body: [
      'Nextcore, la división de desarrollo de software de Neva Corporation, presentó una nueva plataforma de gestión diseñada para proveedores de servicios de internet.',
      'La solución unifica en un solo entorno procesos que tradicionalmente están dispersos: alta de clientes, aprovisionamiento de servicios, facturación recurrente, gestión de incidencias y analítica de red.',
      { heading: 'Construida sobre la experiencia de 1Click' },
      'La plataforma se apoya en la experiencia acumulada junto a 1Click Infraestructura. Nextcore nació con un enfoque híbrido orientado a proveedores de internet y redes neutras, y desde ahí escaló a una operación multinacional.',
      { heading: 'Lista para Verla y TreeNet' },
      'Hoy Nextcore cuenta con la estructura necesaria para gestionar de manera completa la operación de Verla y TreeNet, las marcas de internet del grupo en Colombia, que se proyectan para convertirse en el cuarto proveedor de servicios de internet del país.',
      'Su arquitectura modular también permite que otros operadores adopten únicamente los componentes que necesitan e integren la herramienta con sus sistemas existentes.',
      { heading: 'Del cable a la nube' },
      'El lanzamiento materializa la tesis del grupo: integrar la infraestructura física, la operación de red y el software que la gestiona en una misma cadena de valor.',
    ],
    quote: {
      text: 'Nacimos resolviendo problemas reales de redes y proveedores de internet. Esa cercanía con la operación es nuestra principal ventaja.',
      author: 'Dirección de Producto',
      role: 'Nextcore',
    },
  },
];

export const latestNews = [...newsArticles].sort((a, b) => b.dateISO.localeCompare(a.dateISO)).slice(0, 3);

export const getArticle = (slug: string) => newsArticles.find((article) => article.slug === slug);
