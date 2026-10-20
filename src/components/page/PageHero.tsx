import Link from 'next/link';
import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
};

// Cabecera común de las páginas internas: migas de pan + título + bajada.
export function PageHero({ eyebrow, title, description, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-neva-gold/15 blur-[130px]" aria-hidden="true" />
      <div className="absolute -right-40 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-neva-sky/15 blur-[130px]" aria-hidden="true" />

      <Container>
        <nav aria-label="Migas de pan">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-white/55">
            {[{ label: 'Inicio', href: '/' }, ...crumbs].map((crumb, index, all) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {crumb.href && index < all.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/80">
                    {crumb.label}
                  </span>
                )}
                {index < all.length - 1 && <span aria-hidden="true">/</span>}
              </li>
            ))}
          </ol>
        </nav>

        <Eyebrow className="mt-10">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-gradient-silver sm:text-6xl">
          {title}
        </h1>
        {description && <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">{description}</p>}
        {children}
      </Container>
    </section>
  );
}
