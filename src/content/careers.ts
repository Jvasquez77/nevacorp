// Contenido de /carreras, /carreras/vacantes y /carreras/cultura.
// Las vacantes son de ejemplo según el negocio de cada división: reemplazar por las reales.

export type JobOpening = {
  id: string;
  title: string;
  division: string;
  location: string;
  modality: 'Presencial' | 'Híbrido' | 'Remoto';
  type: 'Tiempo completo' | 'Medio tiempo' | 'Proyecto';
  summary: string;
};

export const jobOpenings: JobOpening[] = [
  {
    id: 'ingeniero-diseno-redes',
    title: 'Ingeniero/a de diseño de redes FTTH',
    division: '1Click Infraestructura',
    location: 'Florida, Estados Unidos',
    modality: 'Híbrido',
    type: 'Tiempo completo',
    summary: 'Diseño de redes de fibra óptica, cálculo de presupuestos ópticos y elaboración de planos de construcción.',
  },
  {
    id: 'supervisor-obra',
    title: 'Supervisor/a de obra de telecomunicaciones',
    division: '1Click Infraestructura',
    location: 'Caracas, Venezuela',
    modality: 'Presencial',
    type: 'Tiempo completo',
    summary: 'Coordinación de cuadrillas, control de calidad y seguridad en despliegues aéreos y subterráneos.',
  },
  {
    id: 'tecnico-instalaciones',
    title: 'Técnico/a de instalaciones de fibra',
    division: 'Verla · TreeNet',
    location: 'Colombia',
    modality: 'Presencial',
    type: 'Tiempo completo',
    summary: 'Instalación y puesta en servicio de conexiones FTTH para hogares y empresas, y soporte en campo.',
  },
  {
    id: 'ingeniero-noc',
    title: 'Ingeniero/a NOC',
    division: 'Verla · TreeNet',
    location: 'Colombia',
    modality: 'Híbrido',
    type: 'Tiempo completo',
    summary: 'Monitoreo de red, gestión de incidencias y mejora continua de la disponibilidad del servicio.',
  },
  {
    id: 'desarrollador-fullstack',
    title: 'Desarrollador/a Full Stack Senior',
    division: 'Nextcore',
    location: 'Latinoamérica',
    modality: 'Remoto',
    type: 'Tiempo completo',
    summary: 'Construcción de plataformas web para clientes del grupo y externos con TypeScript, React y Node.js.',
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    division: 'Nextcore',
    location: 'Latinoamérica',
    modality: 'Remoto',
    type: 'Tiempo completo',
    summary: 'Diseño de experiencias de producto, sistemas de diseño y prototipos validados con usuarios.',
  },
];

export const careerAreas = [
  {
    title: 'Ingeniería de redes',
    meta: '1Click',
    description: 'Diseño, construcción y mantenimiento de infraestructura de fibra óptica y telecomunicaciones.',
  },
  {
    title: 'Operación y servicio ISP',
    meta: 'Verla · TreeNet',
    description: 'Instalaciones, centro de operaciones de red (NOC), soporte técnico y atención al cliente.',
  },
  {
    title: 'Software y producto',
    meta: 'Nextcore',
    description: 'Desarrollo, diseño de producto, datos e infraestructura cloud para plataformas digitales.',
  },
  {
    title: 'Corporativo',
    meta: 'Holding',
    description: 'Finanzas, legal, talento humano, compras y desarrollo de negocio a nivel de grupo.',
  },
];

export const hiringSteps = [
  { title: 'Postulación', description: 'Envía tu hoja de vida indicando la vacante o el área que te interesa.' },
  { title: 'Conversación inicial', description: 'Una llamada con talento humano para conocerte y resolver tus preguntas.' },
  { title: 'Evaluación técnica', description: 'Un caso práctico o entrevista técnica acorde al rol, sin pruebas interminables.' },
  { title: 'Oferta', description: 'Conoces al equipo, recibes una propuesta clara y acordamos tu fecha de ingreso.' },
];

export const benefits = [
  { title: 'Crecimiento real', description: 'Planes de carrera dentro de la división y movilidad entre las empresas del grupo.' },
  { title: 'Formación continua', description: 'Certificaciones técnicas, programas de liderazgo y aprendizaje entre países.' },
  { title: 'Equipos multiculturales', description: 'Colaboras con profesionales de Estados Unidos, Colombia y Venezuela.' },
  { title: 'Seguridad primero', description: 'Equipamiento, protocolos y capacitación en seguridad para el trabajo en campo.' },
];

export const values = [
  {
    title: 'Ingeniería con estándar',
    description: 'Hacemos las cosas bien desde el diseño. La calidad se planifica, se mide y se documenta.',
  },
  {
    title: 'Cercanía',
    description: 'Estamos donde están nuestros clientes. Conocemos sus comunidades y respondemos rápido.',
  },
  {
    title: 'Integridad',
    description: 'Actuamos con transparencia frente a clientes, inversionistas, colaboradores y autoridades.',
  },
  {
    title: 'Un solo equipo',
    description: 'Tres países y tres divisiones que comparten conocimiento, talento y objetivos.',
  },
  {
    title: 'Visión de largo plazo',
    description: 'Construimos activos y relaciones pensados para durar décadas, no trimestres.',
  },
  {
    title: 'Innovación aplicada',
    description: 'Adoptamos tecnología cuando resuelve problemas reales de operación y de clientes.',
  },
];
