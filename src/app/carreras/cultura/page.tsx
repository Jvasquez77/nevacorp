import type { Metadata } from 'next';
import { values } from '@/content/careers';
import { CardGrid } from '@/components/page/CardGrid';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';
import { Prose } from '@/components/page/Prose';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Cultura Neva',
  description: 'Los valores y la forma de trabajar que comparten los equipos de Neva Corporation en tres países.',
  alternates: { canonical: '/carreras/cultura' },
};

export default function CulturePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Talento', href: '/carreras' }, { label: 'Cultura' }]}
        eyebrow="Cultura Neva"
        title="Un solo equipo, tres países, un mismo estándar."
        description="Nuestra cultura nace en el trabajo de campo y se extiende a cada oficina: precisión técnica, cercanía con las personas y una visión de largo plazo."
      />

      <section aria-label="Nuestra forma de trabajar" className="pb-8">
        <Container>
          <Prose>
            <p>
              Neva Corporation reúne a ingenieros que diseñan redes, técnicos que las construyen, equipos que las
              operan y desarrolladores que crean el software que las gestiona. Son disciplinas distintas, pero
              compartimos una misma convicción: la infraestructura que construimos tiene un impacto directo en la vida
              de las personas y las empresas que se conectan a ella.
            </p>
            <p>
              Por eso trabajamos con estándares claros, celebramos el trabajo bien hecho y cuidamos a quienes lo
              hacen posible. Sea en una obra en Venezuela, en un centro de operaciones en Colombia o en un equipo de
              producto remoto, cada persona en Neva sabe que su aporte forma parte de algo más grande.
            </p>
          </Prose>
        </Container>
      </section>

      <PageSection id="valores" eyebrow="Valores" title="Lo que nos define." tinted>
        <CardGrid items={values} />
      </PageSection>

      <section className="py-20 text-center sm:py-24">
        <Container>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tightest text-gradient-silver sm:text-4xl">
            ¿Te identificas con esta forma de trabajar?
          </h2>
          <ButtonLink href="/carreras/vacantes" className="mt-8">
            Ver vacantes activas
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
