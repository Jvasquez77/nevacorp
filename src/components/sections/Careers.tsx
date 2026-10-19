import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function Careers() {
  return (
    <section id="talento" aria-labelledby="talento-titulo" className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="card-glass relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
            <div className="absolute -bottom-40 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-neva-sky/20 blur-[120px]" aria-hidden="true" />
            <Image
              src={siteConfig.brand.emblemWhite}
              alt=""
              width={420}
              height={420}
              className="pointer-events-none absolute -right-24 -top-24 -z-10 opacity-[0.04]"
            />

            <Eyebrow className="justify-center">Talento</Eyebrow>
            <h2 id="talento-titulo" className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tightest text-gradient-silver sm:text-5xl">
              Un solo equipo, tres países, un mismo estándar.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">
              Construimos carreras tan sólidas como la infraestructura que desplegamos. Buscamos ingenieros de
              software, técnicos especializados en redes y líderes ejecutivos que quieran crecer en un grupo
              multicultural.
            </p>
            <ButtonLink href="/carreras" className="mt-10">
              Explorar oportunidades
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
