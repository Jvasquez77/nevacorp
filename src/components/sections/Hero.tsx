import { divisions } from '@/content/site-content';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section aria-label="Presentación institucional" className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24">
      {/* Fondo: rejilla técnica + auroras de color de marca */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-neva-gold/20 blur-[140px]" aria-hidden="true" />
      <div className="absolute -right-40 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-neva-sky/20 blur-[140px]" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-xs text-white/70 backdrop-blur">
              <span className="rounded-full bg-neva-gold/15 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-neva-gold">
                Holding
              </span>
              Infraestructura · Telecomunicaciones · Software
            </p>

            <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              <span className="text-gradient-silver">Del cable</span>
              <br />
              <span className="text-gradient-gold">a la nube.</span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
              Holding multinacional que integra construcción de infraestructura de redes, servicios de
              telecomunicaciones y desarrollo de software, operando en Estados Unidos, Colombia y Venezuela.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#portafolio">
                Explorar portafolio
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="#inversionistas" variant="secondary">
                Relación con inversionistas
              </ButtonLink>
            </div>
          </div>

          <HeroVisual />
        </div>

        {/* Cadena de valor: las tres capacidades del grupo en orden de integración */}
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:mt-20">
          {divisions.map((division) => (
            <li key={division.id} className="flex items-center gap-4 bg-neva-ink/90 px-6 py-5 backdrop-blur">
              <span className="font-mono text-xs text-neva-gold">{division.step}</span>
              <span className="text-sm font-medium text-white">{division.capability}</span>
              <span className="ml-auto truncate text-xs text-white/55">{division.name}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
