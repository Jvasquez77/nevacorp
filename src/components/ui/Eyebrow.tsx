import type { ReactNode } from 'react';

// Etiqueta monoespaciada sobre los títulos de sección (estilo "terminal").
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neva-gold ${className}`}>
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-neva-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
