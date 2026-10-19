import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { divisions, footerColumns } from '@/content/site-content';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { ArrowUpRightIcon } from '@/components/ui/Icons';

const linkClass =
  'text-sm text-white/55 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-neva-ink">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo size={40} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Holding multinacional de infraestructura, telecomunicaciones y software.
            </p>

            <ul className="mt-8 space-y-2" aria-label="Sitios de nuestras divisiones">
              {divisions.map((division) => (
                <li key={division.id}>
                  <a
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-mono ${linkClass}`}
                  >
                    {division.domain}
                    <ArrowUpRightIcon className="h-3 w-3" />
                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cada columna es un landmark <nav> independiente con nombre accesible propio */}
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-white/90">{column.title}</h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="hairline mt-16 h-px" aria-hidden="true" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2 font-mono uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)]" aria-hidden="true" />
            {siteConfig.countries.join(' · ')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
