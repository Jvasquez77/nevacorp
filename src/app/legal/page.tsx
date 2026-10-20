import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { divisions } from '@/content/site-content';
import { PageHero } from '@/components/page/PageHero';
import { Prose } from '@/components/page/Prose';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Información legal',
  description: 'Aviso legal y condiciones de uso del sitio web de Neva Corporation.',
  alternates: { canonical: '/legal' },
};

// Texto base redactado para el contexto del negocio. Debe ser revisado por el área legal antes de publicar.
export default function LegalPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Información legal' }]}
        eyebrow="Legal"
        title="Aviso legal y condiciones de uso."
        description="Última actualización: 19 de octubre de 2026"
      />

      <section aria-label="Aviso legal" className="pb-24">
        <Container>
          <Prose>
            <h2>1. Titular del sitio</h2>
            <p>
              Este sitio web, disponible en <strong>{siteConfig.url.replace('https://', '')}</strong>, es operado por{' '}
              {siteConfig.name} (en adelante, &quot;Neva&quot; o &quot;el grupo&quot;), holding multinacional con
              operación en {siteConfig.countries.join(', ')}. Para cualquier consulta puede escribir a{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>2. Objeto</h2>
            <p>
              El sitio tiene carácter institucional e informativo. Presenta al grupo, sus divisiones, noticias
              corporativas, información para inversionistas y oportunidades de empleo. Los servicios comerciales de
              cada división se contratan a través de sus propios canales y se rigen por sus condiciones particulares.
            </p>

            <h2>3. Condiciones de uso</h2>
            <p>Al navegar por este sitio, la persona usuaria se compromete a:</p>
            <ul>
              <li>Hacer un uso lícito del sitio y de sus contenidos, conforme a la ley y a estas condiciones.</li>
              <li>No intentar acceder sin autorización a sistemas, redes o datos de Neva o de terceros.</li>
              <li>No introducir software malicioso ni realizar acciones que afecten el funcionamiento del sitio.</li>
            </ul>

            <h2>4. Propiedad intelectual</h2>
            <p>
              Las marcas, logotipos, emblemas, textos, diseños, gráficos y código de este sitio son propiedad de{' '}
              {siteConfig.name} o de sus divisiones, o se utilizan con autorización. Queda prohibida su reproducción,
              distribución o modificación sin consentimiento previo y por escrito, salvo para uso personal y no
              comercial o cuando lo permita la ley.
            </p>

            <h2>5. Sitios de las divisiones y enlaces externos</h2>
            <p>Este sitio contiene enlaces a los sitios oficiales de las divisiones del grupo:</p>
            <ul>
              {divisions.map((division) => (
                <li key={division.id}>
                  {division.name}:{' '}
                  <a href={division.url} target="_blank" rel="noopener noreferrer">
                    {division.domain}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Cada uno de estos sitios cuenta con sus propias condiciones de uso y políticas de privacidad. Neva no se
              responsabiliza por el contenido de sitios de terceros a los que se pueda acceder mediante enlaces.
            </p>

            <h2>6. Información para inversionistas</h2>
            <p>
              La información financiera y operativa publicada tiene fines exclusivamente informativos y no constituye
              una oferta de venta ni una solicitud de compra de valores, ni una recomendación de inversión. Puede incluir
              declaraciones prospectivas sujetas a riesgos e incertidumbres.
            </p>

            <h2>7. Limitación de responsabilidad</h2>
            <p>
              Neva procura que la información del sitio sea exacta y esté actualizada, pero no garantiza la ausencia
              de errores u omisiones. El grupo no será responsable de daños derivados del uso del sitio o de la
              imposibilidad de acceder a él, en la medida permitida por la ley.
            </p>

            <h2>8. Protección de datos</h2>
            <p>
              El tratamiento de datos personales se rige por nuestra{' '}
              <Link href="/legal/privacidad">Política de privacidad</Link>.
            </p>

            <h2>9. Modificaciones y legislación aplicable</h2>
            <p>
              Neva puede modificar estas condiciones en cualquier momento; la versión vigente será siempre la publicada
              en esta página. Estas condiciones se interpretan conforme a la legislación del país de la entidad del
              grupo que corresponda, y cualquier controversia se someterá a los tribunales competentes de esa
              jurisdicción.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
