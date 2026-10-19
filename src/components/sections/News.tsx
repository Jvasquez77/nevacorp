import Link from 'next/link';
import { newsItems } from '@/content/site-content';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/ui/Icons';
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
          {newsItems.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 100} className="h-full">
                <Link
                  href={item.href}
                  className="card-glass group flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="rounded-full bg-neva-gold/10 px-2.5 py-1 uppercase tracking-wider text-neva-gold">{item.tag}</span>
                    <time dateTime={item.dateISO} className="text-white/55">
                      {item.date}
                    </time>
                  </div>
                  <p className="mt-8 text-lg font-medium leading-snug text-white">{item.title}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm text-white/55 transition-colors group-hover:text-neva-gold-light">
                    Leer más
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
