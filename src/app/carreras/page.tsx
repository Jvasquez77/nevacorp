import type { Metadata } from 'next';
import { benefits, careerAreas, hiringSteps, jobOpenings } from '@/content/careers';
import { CardGrid } from '@/components/page/CardGrid';
import { ContactBanner } from '@/components/page/ContactBanner';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';
import { ButtonLink } from '@/components/ui/Button';
import { ArrowRightIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Portal de empleo',
  description:
    'Trabaja en Neva Corporation: ingeniería de redes, telecomunicaciones y desarrollo de software en Estados Unidos, Colombia y Venezuela.',
  alternates: { canonical: '/carreras' },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Talento' }]}
        eyebrow="Portal de empleo"
        title="Construye la infraestructura que conecta a millones."
        description="En Neva Corporation construimos carreras tan sólidas como las redes que desplegamos. Buscamos personas que quieran crecer en un grupo multicultural, con proyectos reales en tres países."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/carreras/vacantes">
            Ver {jobOpenings.length} vacantes activas
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="/carreras/cultura" variant="secondary">
            Conoce la cultura Neva
          </ButtonLink>
        </div>
      </PageHero>

      <PageSection
        id="areas"
        eyebrow="Áreas"
        title="Dónde puedes sumar."
        description="Cada división ofrece trayectorias profesionales propias, con la solidez y el respaldo de un grupo multinacional."
      >
        <CardGrid items={careerAreas} columns={4} numbered={false} />
      </PageSection>

      <PageSection id="beneficios" eyebrow="Por qué Neva" title="Lo que encontrarás aquí." tinted>
        <CardGrid items={benefits} columns={4} />
      </PageSection>

      <PageSection
        id="proceso"
        eyebrow="Proceso de selección"
        title="Simple, claro y respetuoso con tu tiempo."
        description="Te mantenemos informado en cada etapa. El proceso completo suele tomar entre dos y cuatro semanas."
      >
        <CardGrid items={hiringSteps} columns={4} />
      </PageSection>

      <ContactBanner
        title="¿No encuentras tu vacante ideal?"
        description="Envíanos tu hoja de vida de forma espontánea indicando el área y el país de tu interés. La tendremos en cuenta para futuros procesos."
        subject="Talento: hoja de vida"
        cta="Enviar hoja de vida"
      />
    </>
  );
}
