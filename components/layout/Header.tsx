'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/lib/data';

// Client Component: aísla el único estado interactivo de la página (toggle del menú móvil)
// para que el resto del árbol (Hero, Portfolio, etc.) siga siendo Server Components.
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-neva-navy/95 backdrop-blur-sm">
      <nav aria-label="Navegación principal" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
          aria-label="Neva Corporation, ir al inicio"
        >
          <Image src="/images/neva-logo-white.png" alt="" width={32} height={32} priority />
          <span className="font-heading text-lg tracking-[0.2em] text-white">NEVA</span>
        </Link>

        {/* Navegación de escritorio: oculta por defecto (mobile-first) y visible desde md */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-neva-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="menu-movil"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex h-5 w-6 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-0.5 w-full bg-current transition-transform motion-reduce:transition-none ${isMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-full bg-current transition-opacity motion-reduce:transition-none ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-full bg-current transition-transform motion-reduce:transition-none ${isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      {/* Panel móvil: montado condicionalmente para no exponer enlaces duplicados al foco/lectores de pantalla cuando está cerrado */}
      {isMenuOpen && (
        <ul id="menu-movil" className="flex flex-col border-t border-white/10 px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 text-sm uppercase tracking-widest text-white/80 hover:text-neva-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
