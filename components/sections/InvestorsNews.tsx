import Link from 'next/link';
import { investorStats, newsItems } from '@/lib/data';

export function InvestorsNews() {
  return (
    <section id="inversionistas" aria-labelledby="inversionistas-titulo" className="bg-white py-24 text-neva-navy sm:py-32">
      {/* h2 visualmente oculto: da nombre accesible a la sección sin duplicar un título grande en pantalla */}
      <h2 id="inversionistas-titulo" className="sr-only">
        Inversionistas y Prensa
      </h2>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div>
          <h3 className="font-heading text-2xl font-medium sm:text-3xl">Solidez que se mide en resultados</h3>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10">
            {investorStats.map((stat) => (
              // flex-col-reverse: la cifra (dd) se percibe primero visualmente, manteniendo el
              // orden semántico correcto dt→dd para lectores de pantalla y SEO.
              <div key={stat.label} className="flex flex-col-reverse gap-1 border-l-2 border-neva-gold pl-4">
                <dt className="text-sm text-neva-navy/70">{stat.label}</dt>
                <dd className="font-heading text-4xl font-medium">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/inversionistas/informe"
            className="mt-10 inline-flex items-center text-sm font-medium uppercase tracking-widest text-neva-navy underline decoration-neva-gold decoration-2 underline-offset-4 hover:text-neva-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
          >
            Ver Informe para Inversionistas
          </Link>
        </div>

        <div id="prensa">
          <h3 className="font-heading text-2xl font-medium sm:text-3xl">Últimas noticias del grupo</h3>

          <ul className="mt-10 divide-y divide-neva-navy/10">
            {newsItems.map((item) => (
              <li key={item.title} className="py-6 first:pt-0">
                <Link href={item.href} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold">
                  <time dateTime={item.dateISO} className="text-sm text-neva-navy/60">
                    {item.date}
                  </time>
                  <p className="mt-2 font-heading text-lg group-hover:text-neva-gold-dark">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/prensa"
            className="mt-6 inline-flex items-center text-sm font-medium uppercase tracking-widest text-neva-navy underline decoration-neva-gold decoration-2 underline-offset-4 hover:text-neva-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
          >
            Ver Sala de Prensa
          </Link>
        </div>
      </div>
    </section>
  );
}
