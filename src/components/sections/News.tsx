import Link from 'next/link';
import { latestNews } from '@/content/news';
import { Container } from '@/components/ui/Container';
import { NewsCard } from '@/components/page/NewsCard';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function News() {
  return (
    <section id="prensa" aria-labelledby="prensa-titulo" className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="prensa-titulo" eyebrow="Prensa" title="Últimas noticias del grupo." />
          <Link
            href="/prensa"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
          >
            Ver sala de prensa
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {latestNews.map((article, index) => (
            <li key={article.slug}>
              <Reveal delay={index * 100} className="h-full">
                <NewsCard article={article} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
