import Image from 'next/image';
import Link from 'next/link';
import { divisions } from '@/lib/data';

export function Portfolio() {
  return (
    <section id="portafolio" aria-labelledby="portafolio-titulo" className="bg-white py-24 text-neva-navy sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neva-gold-dark">Nuestro Modelo</p>
          <h2 id="portafolio-titulo" className="font-heading text-3xl font-medium sm:text-4xl">
            Un ecosistema, tres capacidades.
          </h2>
          <p className="mt-4 text-neva-navy/70">
            Cada división opera con autonomía operativa y excelencia propia, unidas por un mismo estándar de calidad.
          </p>
        </div>

        {/* <ul> semántico: cada división es un ítem de una lista de 3, no divs sueltos */}
        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {divisions.map((division) => (
            <li key={division.id}>
              <article className="group relative h-[520px] overflow-hidden rounded-sm">
                <Image
                  src={division.imageSrc}
                  alt={division.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-neva-navy/95 via-neva-navy/30 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs uppercase tracking-widest text-neva-sky">{division.region}</p>
                  <h3 className="mt-2 font-heading text-2xl text-white">{division.name}</h3>
                  <p className="mt-3 text-sm text-white/80">{division.description}</p>
                  <Link
                    href={division.href}
                    className="mt-5 inline-flex items-center text-sm font-medium uppercase tracking-widest text-neva-gold-light hover:text-neva-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
                  >
                    Conocer más
                    <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
