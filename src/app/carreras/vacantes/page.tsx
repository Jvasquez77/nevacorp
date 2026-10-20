import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { jobOpenings } from '@/content/careers';
import { ContactBanner } from '@/components/page/ContactBanner';
import { PageHero } from '@/components/page/PageHero';
import { Container } from '@/components/ui/Container';
import { ArrowUpRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Vacantes activas',
  description: 'Posiciones abiertas en las divisiones de Neva Corporation: 1Click Infraestructura, Verla · TreeNet y Nextcore.',
  alternates: { canonical: '/carreras/vacantes' },
};

export default function JobOpeningsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Talento', href: '/carreras' }, { label: 'Vacantes' }]}
        eyebrow="Vacantes activas"
        title="Posiciones abiertas."
        description={`${jobOpenings.length} oportunidades disponibles en nuestras divisiones. Haz clic en «Postularme» para escribirnos a ${siteConfig.email}; el asunto con el nombre de la vacante se completa automáticamente. Adjunta tu hoja de vida.`}
      />

      <section aria-label="Listado de vacantes" className="pb-12">
        <Container>
          <ul className="divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            {jobOpenings.map((job, index) => (
              <li key={job.id}>
                <Reveal delay={index * 60}>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Talento: ${job.title}`)}`}
                    className="group grid gap-4 p-6 transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neva-gold sm:p-8 lg:grid-cols-[1.4fr_1fr_auto] lg:items-center lg:gap-10"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-neva-gold">{job.division}</p>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">{job.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{job.summary}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2 text-xs text-white/70" aria-label="Condiciones">
                      {[job.location, job.modality, job.type].map((detail) => (
                        <li key={detail} className="rounded-full bg-white/[0.05] px-3 py-1">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-neva-gold-light">
                      Postularme
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-neva-gold group-hover:bg-neva-gold group-hover:text-neva-ink">
                        <ArrowUpRightIcon />
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactBanner
        title="Postulación espontánea"
        description="Si tu perfil no coincide con una vacante actual, envíanos tu hoja de vida. Revisamos cada postulación."
        subject="Talento: hoja de vida"
        cta="Enviar hoja de vida"
      />
    </>
  );
}
