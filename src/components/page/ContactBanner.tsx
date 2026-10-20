import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';

type ContactBannerProps = { title: string; description: string; cta: string; subject: string };

// Llamado a la acción final: abre el correo del sitio (config/site.ts) con un asunto que identifica el origen.
export function ContactBanner({ title, description, cta, subject }: ContactBannerProps) {
  const email = siteConfig.email;

  return (
    <section className="pb-24 pt-8 sm:pb-32">
      <Container>
        <Reveal>
          <div className="card-glass relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:flex-row lg:items-center">
            <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-neva-gold/15 blur-[100px]" aria-hidden="true" />
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
              <p className="mt-3 leading-relaxed text-white/60">{description}</p>
            </div>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
              className="group inline-flex shrink-0 flex-col items-start gap-1 rounded-2xl border border-neva-gold/30 bg-neva-gold/10 px-6 py-4 transition-colors hover:border-neva-gold hover:bg-neva-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-neva-gold-light">
                {cta}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="font-mono text-xs text-white/60">{email}</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
