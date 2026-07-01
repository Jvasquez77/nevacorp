import { buildHoldingSchema } from '@/lib/schema';

// Server Component: el <script> se renderiza en el HTML inicial (SSR) para que los
// crawlers lean el structured data sin depender de la ejecución de JS del cliente.
export function HoldingJsonLd() {
  const schema = buildHoldingSchema();

  return (
    <script
      type="application/ld+json"
      // El contenido proviene de un objeto tipado interno (no de input de usuario),
      // por lo que dangerouslySetInnerHTML aquí no representa un vector de XSS.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
