import type { Metadata } from 'next';
import { CardGrid } from '@/components/page/CardGrid';
import { ContactBanner } from '@/components/page/ContactBanner';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';
import { Prose } from '@/components/page/Prose';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Gobierno corporativo',
  description:
    'Estructura, principios y órganos de gobierno de Neva Corporation y su relación con las divisiones del grupo.',
  alternates: { canonical: '/gobierno-corporativo' },
};

const principles = [
  {
    title: 'Transparencia',
    description: 'Información financiera y operativa oportuna, consistente y verificable para inversionistas y aliados.',
  },
  {
    title: 'Rendición de cuentas',
    description: 'Responsabilidades claras en cada nivel, con metas medibles y seguimiento periódico.',
  },
  {
    title: 'Gestión de riesgos',
    description: 'Identificación, evaluación y mitigación de riesgos operativos, financieros, regulatorios y de país.',
  },
  {
    title: 'Cumplimiento',
    description: 'Apego a la normativa de cada jurisdicción y a políticas internas de ética y prevención de fraude.',
  },
];

const bodies = [
  {
    title: 'Junta Directiva',
    meta: 'Holding',
    description: 'Define la estrategia del grupo, aprueba la asignación de capital y supervisa a la alta dirección.',
  },
  {
    title: 'Comité de Auditoría y Riesgos',
    meta: 'Holding',
    description: 'Vela por la integridad de la información financiera, el control interno y la gestión de riesgos.',
  },
  {
    title: 'Comité de Ética y Cumplimiento',
    meta: 'Grupo',
    description: 'Supervisa el código de conducta, los canales de denuncia y las políticas anticorrupción.',
  },
  {
    title: 'Dirección de cada división',
    meta: 'Divisiones',
    description: 'Gestiona la operación con autonomía, bajo políticas y métricas comunes definidas por el holding.',
  },
];

export default function GovernancePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Gobierno corporativo' }]}
        eyebrow="Compañía"
        title="Gobierno corporativo."
        description="Un marco de gobierno que equilibra la autonomía operativa de cada división con estándares comunes de control, transparencia y ética."
      />

      <section aria-label="Modelo de holding" className="pb-8">
        <Container>
          <Prose>
            <p>
              Neva Corporation opera como un holding: define la estrategia, asigna el capital y establece las políticas
              corporativas, mientras que cada división —1Click Infraestructura, Verla · TreeNet y Nextcore— gestiona su
              operación con equipos y órganos de dirección propios.
            </p>
            <p>
              Este modelo permite que cada negocio responda con agilidad a su mercado y, al mismo tiempo, garantiza
              que todo el grupo comparta un mismo estándar de información, control interno y conducta empresarial.
            </p>
          </Prose>
        </Container>
      </section>

      <PageSection id="principios" eyebrow="Principios" title="Cómo nos gobernamos." tinted>
        <CardGrid items={principles} columns={4} />
      </PageSection>

      <PageSection
        id="organos"
        eyebrow="Estructura"
        title="Órganos de gobierno."
        description="Instancias que orientan, supervisan y controlan la gestión del grupo y de sus divisiones."
      >
        <CardGrid items={bodies} columns={2} numbered={false} />
      </PageSection>

      <ContactBanner
        title="Canal de ética"
        description="Colaboradores, proveedores y terceros pueden reportar de forma confidencial cualquier conducta contraria a nuestro código de ética."
        subject="Ética: reporte confidencial"
        cta="Enviar un reporte"
      />
    </>
  );
}
