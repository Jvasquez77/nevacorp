import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/ui/Icons';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-neva-gold/10 blur-[130px]" aria-hidden="true" />
      <Container className="text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-neva-gold">ERROR 404</p>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tightest text-gradient-silver sm:text-6xl">
          Esta página no está en la red.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-white/60">
          El enlace puede haber cambiado o la página ya no existe.
        </p>
        <ButtonLink href="/" className="mt-10">
          Volver al inicio
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </ButtonLink>
      </Container>
    </section>
  );
}
