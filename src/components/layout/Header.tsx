'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navItems } from '@/content/site-content';
import { Logo } from '@/components/ui/Logo';

// Client Component: aísla el estado interactivo (menú móvil + estado de scroll)
// para que el resto del árbol siga siendo Server Components.
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          isSolid
            ? 'border-white/10 bg-neva-ink/70 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav aria-label="Navegación principal" className="flex h-16 items-center justify-between px-4 sm:px-5">
          <Link
            href="/"
            className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
            aria-label="Neva Corporation, ir al inicio"
          >
            <Logo />
          </Link>

          {/* Navegación de escritorio: oculta por defecto (mobile-first) y visible desde md */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neva-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#inversionistas"
            className="hidden rounded-full border border-neva-gold/40 bg-neva-gold/10 px-4 py-2 text-sm font-medium text-neva-gold-light transition-colors hover:border-neva-gold hover:bg-neva-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold md:inline-flex"
          >
            Invertir con Neva
          </Link>

          <button
            type="button"
            className="-mr-1 rounded-lg p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-neva-gold md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
              <span
                className={`h-px w-full bg-current transition-transform motion-reduce:transition-none ${isMenuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}
              />
              <span className={`h-px w-full bg-current transition-opacity motion-reduce:transition-none ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`h-px w-full bg-current transition-transform motion-reduce:transition-none ${isMenuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </nav>

        {/* Panel móvil: montado condicionalmente para no exponer enlaces duplicados al foco/lectores de pantalla cuando está cerrado */}
        {isMenuOpen && (
          <ul id="menu-movil" className="flex flex-col gap-1 border-t border-white/10 p-3 md:hidden">
            {[...navItems, { label: 'Invertir con Neva', href: '/#inversionistas' }].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-base text-white/80 hover:bg-white/[0.06] hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
