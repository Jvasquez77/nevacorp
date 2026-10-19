import { divisions } from '@/content/site-content';
import { Container } from '@/components/ui/Container';
import { ArrowUpRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DivisionArt } from './DivisionArt';

export function Portfolio() {
  return (
    <section id="portafolio" aria-labelledby="portafolio-titulo" className="relative pb-24 pt-12 sm:pb-32 sm:pt-16">
      <Container>
        <Reveal>
          <SectionHeading
            id="portafolio-titulo"
            eyebrow="Portafolio"
            title="Un ecosistema, tres capacidades."
            description="Cada división opera con autonomía y excelencia propia, unidas por un mismo estándar de calidad."
          />
        </Reveal>

        {/* <ul> semántico: cada división es un ítem de una lista de 3, no divs sueltos */}
        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {divisions.map((division, index) => (
            <li key={division.id}>
              <Reveal delay={index * 120} className="h-full">
                <a
                  href={division.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
                >
                  <div className="relative h-48 overflow-hidden border-b border-white/[0.06] bg-[radial-gradient(ellipse_at_top,rgb(212_175_55/0.08),transparent_70%)]">
                    <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" aria-hidden="true">
                      <DivisionArt id={division.id} />
                    </div>
                    <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-neva-ink/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-white/70 backdrop-blur">
                      {division.step} · {division.capability}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-neva-sky">{division.region}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{division.name}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60">{division.description}</p>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Especialidades">
                      {division.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-white/70">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5 text-sm">
                      <span className="font-mono text-white/55 transition-colors group-hover:text-white">{division.domain}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-neva-gold group-hover:bg-neva-gold group-hover:text-neva-ink">
                        <ArrowUpRightIcon />
                      </span>
                    </span>
                    <span className="sr-only">Visitar el sitio de {division.name} (se abre en una pestaña nueva)</span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
