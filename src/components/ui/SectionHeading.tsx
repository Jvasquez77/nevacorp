import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ id, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Eyebrow className={centered ? 'justify-center' : ''}>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-5 text-balance text-4xl font-semibold tracking-tightest text-gradient-silver sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-pretty text-lg leading-relaxed text-white/60">{description}</p>}
    </div>
  );
}
