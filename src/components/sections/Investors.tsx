import Link from 'next/link';
import { investmentThesis, investorStats } from '@/content/site-content';
import { Container } from '@/components/ui/Container';
import { CountUp } from '@/components/ui/CountUp';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Investors() {
  return (
    <section id="inversionistas" aria-labelledby="inversionistas-titulo" className="relative isolate overflow-hidden border-y border-white/[0.06] bg-neva-ink-2 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-neva-gold/10 blur-[140px]" aria-hidden="true" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="inversionistas-titulo"
              eyebrow="Inversionistas"
              title="Solidez que se mide en resultados."
              description="Un grupo construido sobre activos físicos, ingresos recurrentes y capacidad tecnológica propia."
            />

            <ul className="mt-10 space-y-6">
              {investmentThesis.map((point, index) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 font-mono text-xs text-neva-gold">0{index + 1}</span>
                  <div>
                    <h3 className="font-medium text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/inversionistas/informe"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-neva-gold-light transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
            >
              Ver informe para inversionistas
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <dl className="grid grid-cols-2 gap-4 self-center">
            {investorStats.map((stat, index) => (
              // flex-col-reverse: la cifra (dd) se percibe primero visualmente, manteniendo el
              // orden semántico correcto dt→dd para lectores de pantalla y SEO.
              <Reveal
                key={stat.label}
                delay={index * 100}
                className="card-glass flex flex-col-reverse justify-end gap-3 rounded-3xl p-5 sm:p-8"
              >
                <dt className="text-sm leading-snug text-white/55">{stat.label}</dt>
                <dd className="text-[2rem] font-semibold tracking-tightest text-gradient-gold sm:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
