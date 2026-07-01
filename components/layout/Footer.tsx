import Link from 'next/link';

type FooterColumn = { title: string; links: { label: string; href: string }[] };

const footerColumns: FooterColumn[] = [
  {
    title: 'Compañía',
    links: [
      { label: 'Gobierno Corporativo', href: '/gobierno-corporativo' },
      { label: 'Nuestras Divisiones', href: '#portafolio' },
      { label: 'Relación con Inversionistas', href: '#inversionistas' },
    ],
  },
  {
    title: 'Sostenibilidad',
    links: [
      { label: 'Compromiso ESG', href: '/sostenibilidad' },
      { label: 'Comunidades', href: '/sostenibilidad/comunidades' },
    ],
  },
  {
    title: 'Talento',
    links: [
      { label: 'Portal de Empleo', href: '/carreras' },
      { label: 'Vacantes Activas', href: '/carreras/vacantes' },
      { label: 'Cultura Neva', href: '/carreras/cultura' },
    ],
  },
  {
    title: 'Prensa y Legal',
    links: [
      { label: 'Contacto de Prensa', href: '/prensa/contacto' },
      { label: 'Información Legal', href: '/legal' },
      { label: 'Política de Privacidad', href: '/legal/privacidad' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neva-navy-2 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Cada columna es un landmark <nav> independiente con nombre accesible propio */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs uppercase tracking-widest text-neva-gold">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Neva Corporation. Todos los derechos reservados.</p>
          <p>Estados Unidos · Colombia · Venezuela</p>
        </div>
      </div>
    </footer>
  );
}
