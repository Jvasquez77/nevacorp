import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Candidates } from '@/components/sections/Candidates';
import { InvestorsNews } from '@/components/sections/InvestorsNews';

export default function HomePage() {
  return (
    <>
      {/* Skip link: primer elemento enfocable de la página, requisito WCAG 2.4.1 (Bypass Blocks) */}
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-neva-gold focus:px-4 focus:py-2 focus:text-neva-navy focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      <Header />

      <main id="contenido-principal">
        <Hero />
        <Portfolio />
        <Candidates />
        <InvestorsNews />
      </main>

      <Footer />
    </>
  );
}
