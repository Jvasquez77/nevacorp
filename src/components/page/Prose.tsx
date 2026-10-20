import type { ReactNode } from 'react';

// Contenedor de texto largo (legal, artículos). Estilos en globals.css → .prose-neva
export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`prose-neva max-w-3xl ${className}`}>{children}</div>;
}
