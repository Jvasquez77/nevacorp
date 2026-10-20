import type { Metadata } from 'next';
import Link from 'next/link';
import { newsArticles } from '@/content/news';
import { ContactBanner } from '@/components/page/ContactBanner';
import { NewsCard } from '@/components/page/NewsCard';
import { PageHero } from '@/components/page/PageHero';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Sala de prensa',
  description: 'Noticias, anuncios y comunicados oficiales de Neva Corporation y sus divisiones.',
  alternates: { canonical: '/prensa' },
};

export default function PressRoomPage() {
  const articles = [...newsArticles].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Prensa' }]}
        eyebrow="Sala de prensa"
        title="Noticias del grupo."
        description="Anuncios, hitos y comunicados oficiales de Neva Corporation y de sus divisiones: 1Click Infraestructura, Verla · TreeNet y Nextcore."
      />

      <section aria-label="Noticias" className="pb-16">
        <Container>
          {featured && (
            <Reveal>
              <Link
                href={`/prensa/${featured.slug}`}
                className="card-glass group relative isolate grid overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12"
              >
                <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-neva-gold/15 blur-[100px]" aria-hidden="true" />
                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="rounded-full bg-neva-gold px-2.5 py-1 uppercase tracking-wider text-neva-ink">Destacado</span>
                    <span className="rounded-full bg-neva-gold/10 px-2.5 py-1 uppercase tracking-wider text-neva-gold">{featured.tag}</span>
                    <time dateTime={featured.dateISO} className="text-white/55">
                      {featured.date}
                    </time>
                  </div>
                  <h2 className="mt-8 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{featured.title}</h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-white/60">{featured.excerpt}</p>
                </div>
                <span className="mt-8 text-sm font-medium text-neva-gold-light lg:mt-0">Leer comunicado →</span>
              </Link>
            </Reveal>
          )}

          <ul className="mt-5 grid gap-5 md:grid-cols-2">
            {rest.map((article, index) => (
              <li key={article.slug}>
                <Reveal delay={index * 100} className="h-full">
                  <NewsCard article={article} showExcerpt />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactBanner
        title="¿Eres periodista o medio de comunicación?"
        description="Solicita entrevistas, material gráfico oficial o información adicional sobre el grupo y sus divisiones."
        subject="Prensa: solicitud de medios"
        cta="Contactar al equipo de prensa"
      />
    </>
  );
}
