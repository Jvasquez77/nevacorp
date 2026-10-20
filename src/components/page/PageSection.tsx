import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type PageSectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  tinted?: boolean;
};

// Bloque estándar de las páginas internas: encabezado de sección + contenido.
export function PageSection({ id, eyebrow, title, description, children, tinted = false }: PageSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={`py-20 sm:py-24 ${tinted ? 'border-y border-white/[0.06] bg-neva-ink-2' : ''}`}
    >
      <Container>
        <Reveal>
          <SectionHeading id={id} eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
