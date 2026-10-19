import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Investors } from '@/components/sections/Investors';
import { News } from '@/components/sections/News';
import { Careers } from '@/components/sections/Careers';

export default function HomePage() {
  return (
    <>
      {/* Skip link: primer elemento enfocable de la página, requisito WCAG 2.4.1 (Bypass Blocks) */}
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-neva-gold focus:px-4 focus:py-2 focus:text-neva-ink focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      <Header />

      <main id="contenido-principal">
        <Hero />
        <Portfolio />
        <Investors />
        <News />
        <Careers />
      </main>

      <Footer />
    </>
  );
}
