import type { Metadata } from 'next';
import { divisions, investmentThesis, investorStats } from '@/content/site-content';
import { CardGrid } from '@/components/page/CardGrid';
import { ContactBanner } from '@/components/page/ContactBanner';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';
import { Container } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';
import { ArrowUpRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Informe para inversionistas',
  description:
    'Resumen ejecutivo de Neva Corporation: cifras operativas, unidades de negocio, tesis de inversión y prioridades estratégicas.',
  alternates: { canonical: '/inversionistas/informe' },
};

const priorities = [
  {
    title: 'Expansión de infraestructura',
    description: 'Ampliar la presencia de 1Click en Estados Unidos, con foco en el sureste del país.',
  },
  {
    title: 'Densificación de red',
    description: 'Aumentar la cobertura y la penetración de Verla · TreeNet en sus mercados actuales en Colombia.',
  },
  {
    title: 'Software como palanca',
    description: 'Escalar las plataformas de Nextcore dentro del grupo y comercializarlas a operadores externos.',
  },
  {
    title: 'Eficiencia de grupo',
    description: 'Compartir servicios corporativos, compras y talento entre divisiones para mejorar márgenes.',
  },
];

export default function InvestorReportPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Inversionistas', href: '/#inversionistas' }, { label: 'Informe' }]}
        eyebrow="Relación con inversionistas"
        title="Informe para inversionistas."
        description="Resumen ejecutivo de Neva Corporation: un holding que integra la construcción de redes, su operación y el software que las gestiona, en una misma cadena de valor."
      />

      <section aria-labelledby="cifras" className="pb-8">
        <Container>
          <h2 id="cifras" className="sr-only">
            Cifras operativas
          </h2>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {investorStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 100}
                className="card-glass flex flex-col-reverse justify-end gap-3 rounded-3xl p-5 first:col-span-2 sm:p-8 sm:first:col-span-1"
              >
                <dt className="text-sm leading-snug text-white/55">{stat.label}</dt>
                <dd className="text-[2rem] font-semibold tracking-tightest text-gradient-gold sm:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <PageSection
        id="unidades"
        eyebrow="Unidades de negocio"
        title="Tres divisiones, una cadena de valor."
        description="Cada división es un negocio autónomo con clientes propios, y a la vez un eslabón que fortalece a las demás."
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {divisions.map((division, index) => (
            <li key={division.id}>
              <Reveal delay={index * 100} className="card-glass flex h-full flex-col rounded-3xl p-7">
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <span className="text-neva-gold">
                    {division.step} · {division.capability}
                  </span>
                  <span className="uppercase tracking-widest text-neva-sky">{division.region}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{division.name}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/60">{division.description}</p>
                <a
                  href={division.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-white/60 transition-colors hover:text-neva-gold-light"
                >
                  {division.domain}
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="tesis" eyebrow="Tesis de inversión" title="Por qué Neva." tinted>
        <CardGrid items={investmentThesis} />
      </PageSection>

      <PageSection
        id="prioridades"
        eyebrow="Prioridades estratégicas"
        title="Hacia dónde vamos."
        description="Las líneas de trabajo que orientan la asignación de capital del grupo en el corto y mediano plazo."
      >
        <CardGrid items={priorities} columns={4} />
      </PageSection>

      <section aria-label="Aviso legal" className="pb-8">
        <Container>
          <p className="max-w-4xl border-t border-white/10 pt-8 text-xs leading-relaxed text-white/55">
            <strong className="text-white/70">Aviso:</strong> este resumen tiene fines exclusivamente informativos y no
            constituye una oferta de venta ni una solicitud de compra de valores. Puede contener declaraciones
            prospectivas sujetas a riesgos e incertidumbres; los resultados reales pueden diferir de los expresados.
            Las cifras son operativas y no auditadas salvo que se indique lo contrario.
          </p>
        </Container>
      </section>

      <ContactBanner
        title="Solicita el informe completo"
        description="Inversionistas institucionales y aliados estratégicos pueden solicitar el informe detallado y agendar una reunión con la dirección del grupo."
        subject="Inversionistas: solicitud de informe"
        cta="Contactar a Relación con Inversionistas"
      />
    </>
  );
}
