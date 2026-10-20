import type { Metadata } from 'next';
import { CardGrid } from '@/components/page/CardGrid';
import { ContactBanner } from '@/components/page/ContactBanner';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';
import { Prose } from '@/components/page/Prose';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Comunidades',
  description: 'Cómo Neva Corporation contribuye a la inclusión digital y al desarrollo de las comunidades donde opera.',
  alternates: { canonical: '/sostenibilidad/comunidades' },
};

const programs = [
  {
    title: 'Inclusión digital',
    meta: 'Verla · TreeNet',
    description:
      'Llevar internet de fibra óptica a barrios y municipios con oferta limitada, con planes accesibles para hogares y pequeños negocios.',
  },
  {
    title: 'Formación técnica',
    meta: '1Click',
    description:
      'Capacitar a personas de las zonas donde construimos en instalación y mantenimiento de redes, abriendo oportunidades de empleo calificado.',
  },
  {
    title: 'Talento digital',
    meta: 'Nextcore',
    description:
      'Mentorías, prácticas profesionales y charlas para estudiantes y jóvenes que quieren iniciar una carrera en tecnología.',
  },
  {
    title: 'Conectividad educativa',
    meta: 'Grupo',
    description:
      'Alianzas con instituciones educativas para mejorar su conectividad y el acceso de estudiantes a recursos digitales.',
  },
];

const principles = [
  { title: 'Escuchar primero', description: 'Conocemos las necesidades de cada comunidad antes de llegar con una solución.' },
  { title: 'Contratar local', description: 'Priorizamos talento y proveedores de las zonas donde operamos.' },
  { title: 'Construir con respeto', description: 'Informamos con anticipación sobre las obras y reducimos sus molestias.' },
];

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Sostenibilidad', href: '/sostenibilidad' }, { label: 'Comunidades' }]}
        eyebrow="Comunidades"
        title="Conectar es abrir oportunidades."
        description="Cada red que construimos llega a personas reales. Trabajamos para que la conectividad se traduzca en educación, empleo y desarrollo local."
      />

      <section aria-label="Introducción" className="pb-8">
        <Container>
          <Prose>
            <p>
              En Estados Unidos, Colombia y Venezuela, nuestras divisiones están presentes en el territorio: construyen
              en sus calles, contratan a sus habitantes y atienden a sus familias y negocios. Esa cercanía es una
              responsabilidad que asumimos con programas concretos y una forma de trabajar respetuosa con cada
              comunidad.
            </p>
          </Prose>
        </Container>
      </section>

      <PageSection id="programas" eyebrow="Iniciativas" title="Líneas de acción." tinted>
        <CardGrid items={programs} columns={2} numbered={false} />
      </PageSection>

      <PageSection id="principios-comunidad" eyebrow="Principios" title="Cómo trabajamos en territorio.">
        <CardGrid items={principles} />
      </PageSection>

      <ContactBanner
        title="¿Representas a una comunidad o institución?"
        description="Si lideras una organización social, una junta comunal o una institución educativa y quieres trabajar con nosotros, escríbenos."
        subject="Comunidades: propuesta de alianza"
        cta="Proponer una alianza"
      />
    </>
  );
}
