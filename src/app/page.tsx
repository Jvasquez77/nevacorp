import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Investors } from '@/components/sections/Investors';
import { News } from '@/components/sections/News';
import { Careers } from '@/components/sections/Careers';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Investors />
      <News />
      <Careers />
    </>
  );
}
