import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

export type CardItem = { title: string; description: ReactNode; meta?: string };

type CardGridProps = { items: CardItem[]; columns?: 2 | 3 | 4; numbered?: boolean };

const columnClass = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' };

// Rejilla de tarjetas "glass" para pilares, valores, principios, etc.
export function CardGrid({ items, columns = 3, numbered = true }: CardGridProps) {
  return (
    <ul className={`grid gap-5 ${columnClass[columns]}`}>
      {items.map((item, index) => (
        <li key={item.title}>
          <Reveal delay={index * 80} className="card-glass h-full rounded-3xl p-7">
            <div className="flex items-center justify-between font-mono text-xs">
              {numbered && <span className="text-neva-gold">{String(index + 1).padStart(2, '0')}</span>}
              {item.meta && <span className="uppercase tracking-widest text-neva-sky">{item.meta}</span>}
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{item.title}</h3>
            <div className="mt-3 text-[0.95rem] leading-relaxed text-white/60">{item.description}</div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
