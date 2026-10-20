import type { Metadata } from 'next';
import { CardGrid } from '@/components/page/CardGrid';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';
import { Prose } from '@/components/page/Prose';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Compromiso ESG',
  description:
    'El compromiso ambiental, social y de gobierno corporativo (ESG) de Neva Corporation en sus operaciones de infraestructura, conectividad y software.',
  alternates: { canonical: '/sostenibilidad' },
};

const pillars = [
  {
    title: 'Ambiental',
    meta: 'E',
    description: (
      <ul className="mt-1 space-y-2">
        <li>Fibra óptica: una tecnología de menor consumo energético por dato transmitido que las redes de cobre.</li>
        <li>Planificación de obra que minimiza intervenciones en espacio público y áreas verdes.</li>
        <li>Gestión responsable y reciclaje de residuos de construcción y equipos de red.</li>
      </ul>
    ),
  },
  {
    title: 'Social',
    meta: 'S',
    description: (
      <ul className="mt-1 space-y-2">
        <li>Conectividad de calidad para hogares y comunidades con oferta limitada de internet.</li>
        <li>Empleo local y formación técnica en cada país donde operamos.</li>
        <li>Seguridad y salud en el trabajo como prioridad en toda operación de campo.</li>
      </ul>
    ),
  },
  {
    title: 'Gobierno',
    meta: 'G',
    description: (
      <ul className="mt-1 space-y-2">
        <li>Código de ética y políticas anticorrupción aplicables a todo el grupo.</li>
        <li>Control interno y gestión de riesgos supervisados desde el holding.</li>
        <li>Protección de datos personales de clientes y colaboradores.</li>
      </ul>
    ),
  },
];

const commitments = [
  { title: 'Medir', description: 'Definir indicadores ESG por división y establecer una línea base verificable.' },
  { title: 'Reportar', description: 'Publicar avances de forma periódica a inversionistas y grupos de interés.' },
  { title: 'Mejorar', description: 'Fijar metas anuales y vincularlas a la gestión de los equipos directivos.' },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Sostenibilidad' }]}
        eyebrow="Compromiso ESG"
        title="Infraestructura que perdura."
        description="Construimos redes pensadas para durar décadas. Esa misma visión de largo plazo guía cómo cuidamos el entorno, a las personas y la forma en que gobernamos el grupo."
      />

      <section aria-label="Enfoque" className="pb-8">
        <Container>
          <Prose>
            <p>
              La conectividad es hoy un servicio esencial: habilita la educación, el trabajo, la salud y la actividad
              económica. Como grupo que construye, opera y digitaliza redes, entendemos que nuestro impacto va más allá
              de los resultados financieros, y lo gestionamos con el mismo rigor que cualquier otra variable del
              negocio.
            </p>
          </Prose>
        </Container>
      </section>

      <PageSection id="pilares" eyebrow="Pilares" title="Nuestro enfoque ESG." tinted>
        <CardGrid items={pillars} numbered={false} />
      </PageSection>

      <PageSection
        id="compromisos"
        eyebrow="Hoja de ruta"
        title="Cómo avanzamos."
        description="Un proceso de mejora continua que comienza por medir y termina en metas concretas."
      >
        <CardGrid items={commitments} />
        <div className="mt-12">
          <ButtonLink href="/sostenibilidad/comunidades" variant="secondary">
            Conoce nuestro trabajo con comunidades
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </PageSection>
    </>
  );
}
