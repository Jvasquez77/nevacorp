import Image from 'next/image';

export function Hero() {
  return (
    <section aria-label="Presentación institucional" className="relative flex min-h-screen items-end overflow-hidden pt-20">
      {/* priority + sizes="100vw": esta imagen es el LCP (Largest Contentful Paint) de la página */}
      <Image src="/images/hero-infraestructura.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      {/* alt="" intencional: la imagen es decorativa/ambiental, el mensaje ya lo comunica el h1 */}
      <div className="absolute inset-0 bg-neva-navy/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neva-gold">Neva Corporation</p>

        <h1 className="max-w-3xl font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl">
          Del cable a la nube.
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          Holding multinacional que integra construcción de infraestructura de redes, servicios de
          telecomunicaciones y desarrollo de software, operando en Estados Unidos, Colombia y Venezuela.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center rounded-sm bg-neva-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-neva-navy transition-colors hover:bg-neva-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Ver Portafolio
          </a>
          <a
            href="#inversionistas"
            className="inline-flex items-center justify-center rounded-sm border border-white/60 px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:border-neva-gold hover:text-neva-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Relación con Inversionistas
          </a>
        </div>
      </div>
    </section>
  );
}
