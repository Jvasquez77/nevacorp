import Image from 'next/image';

export function Candidates() {
  return (
    <section id="talento" aria-labelledby="talento-titulo" className="relative overflow-hidden bg-neva-navy py-24 sm:py-32">
      <Image
        src="/images/talento-equipo.jpg"
        alt="Equipo multicultural de Neva Corporation trabajando en campo y oficina"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neva-gold">Candidates</p>
        <h2 id="talento-titulo" className="font-heading text-3xl font-medium text-white sm:text-4xl">
          Un solo equipo, tres países, un mismo estándar.
        </h2>
        <p className="mt-6 text-white/85">
          En Neva Corporation construimos carreras tan sólidas como la infraestructura que desplegamos.
          Buscamos ingenieros de software, técnicos especializados en redes y líderes ejecutivos que
          quieran crecer en un grupo multicultural con presencia activa en Estados Unidos, Colombia y
          Venezuela.
        </p>
        <a
          href="/carreras"
          className="mt-10 inline-flex items-center justify-center rounded-sm bg-neva-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-neva-navy transition-colors hover:bg-neva-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Explorar Oportunidades
        </a>
      </div>
    </section>
  );
}
