import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { getArticle, newsArticles } from '@/content/news';
import { ContactBanner } from '@/components/page/ContactBanner';
import { NewsCard } from '@/components/page/NewsCard';
import { PageHero } from '@/components/page/PageHero';
import { Prose } from '@/components/page/Prose';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';

type Params = { params: { slug: string } };

// Genera en build una página estática por noticia definida en content/news.ts
export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/prensa/${article.slug}` },
    openGraph: { type: 'article', title: article.title, description: article.excerpt, publishedTime: article.dateISO },
  };
}

export default function ArticlePage({ params }: Params) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero crumbs={[{ label: 'Prensa', href: '/prensa' }, { label: article.tag }]} eyebrow={article.tag} title={article.title}>
        <p className="mt-6 font-mono text-sm text-white/55">
          <time dateTime={article.dateISO}>{article.date}</time> · Comunicado oficial
        </p>
      </PageHero>

      <article className="pb-20">
        <Container>
          <Prose>
            <p className="text-xl leading-relaxed text-white/85">{article.excerpt}</p>
            {article.body.map((block, index) =>
              typeof block === 'string' ? <p key={index}>{block}</p> : <h2 key={index}>{block.heading}</h2>,
            )}
          </Prose>

          {article.quote && (
            <figure className="card-glass mt-14 max-w-3xl rounded-3xl p-8 sm:p-10">
              <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                <span className="text-gradient-gold">“</span>
                {article.quote.text}
                <span className="text-gradient-gold">”</span>
              </blockquote>
              <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-white/55">
                {article.quote.author} · <span className="text-neva-gold">{article.quote.role}</span>
              </figcaption>
            </figure>
          )}

          <div className="mt-14 max-w-3xl border-t border-white/10 pt-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-white/90">Acerca de {siteConfig.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {siteConfig.name} es un holding multinacional que integra construcción de infraestructura de redes,
              servicios de telecomunicaciones y desarrollo de software, con operación en Estados Unidos, Colombia y
              Venezuela.
            </p>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="relacionadas" className="border-t border-white/[0.06] py-20">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 id="relacionadas" className="text-2xl font-semibold tracking-tight text-white">
                Otras noticias
              </h2>
              <Link href="/prensa" className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
                Ver todas
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <NewsCard article={item} showExcerpt />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <ContactBanner
        title="Información para medios"
        description="Para entrevistas, declaraciones o material gráfico relacionado con esta noticia."
        subject={`Prensa: ${article.title}`}
        cta="Escribir a prensa"
      />
    </>
  );
}
