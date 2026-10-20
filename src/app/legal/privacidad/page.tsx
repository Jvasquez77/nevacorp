import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { PageHero } from '@/components/page/PageHero';
import { Prose } from '@/components/page/Prose';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo Neva Corporation recopila, usa y protege los datos personales.',
  alternates: { canonical: '/legal/privacidad' },
};

// Texto base redactado para el contexto del negocio. Debe ser revisado por el área legal antes de publicar.
export default function PrivacyPage() {
  const privacyEmail = siteConfig.email;
  const privacyMailto = `mailto:${privacyEmail}?subject=${encodeURIComponent('Privacidad: ejercicio de derechos')}`;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Legal', href: '/legal' }, { label: 'Privacidad' }]}
        eyebrow="Legal"
        title="Política de privacidad."
        description="Última actualización: 19 de octubre de 2026"
      />

      <section aria-label="Política de privacidad" className="pb-24">
        <Container>
          <Prose>
            <p>
              En {siteConfig.name} respetamos la privacidad de las personas que interactúan con nosotros. Esta política
              explica qué datos personales tratamos a través de este sitio web, con qué finalidad y cuáles son sus
              derechos.
            </p>

            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable es {siteConfig.name} y, cuando corresponda, la entidad del grupo en el país donde se
              recojan los datos. Para cualquier asunto relacionado con privacidad puede escribir a{' '}
              <a href={privacyMailto}>{privacyEmail}</a> indicando «Privacidad» en el asunto.
            </p>

            <h2>2. Datos que tratamos</h2>
            <ul>
              <li>
                <strong>Datos que usted nos envía:</strong> nombre, correo electrónico, teléfono, empresa y el contenido
                de sus mensajes cuando nos escribe a nuestro correo de contacto.
              </li>
              <li>
                <strong>Datos de postulación:</strong> hoja de vida, experiencia, formación y referencias cuando aplica a
                una vacante.
              </li>
              <li>
                <strong>Datos técnicos:</strong> dirección IP, tipo de navegador y páginas visitadas, registrados de forma
                automática por nuestros servidores con fines de seguridad y funcionamiento.
              </li>
            </ul>

            <h2>3. Finalidades</h2>
            <ul>
              <li>Responder consultas de medios, inversionistas, aliados y público en general.</li>
              <li>Gestionar procesos de selección de personal.</li>
              <li>Garantizar la seguridad, disponibilidad y mejora del sitio web.</li>
              <li>Cumplir obligaciones legales y regulatorias.</li>
            </ul>
            <p>No vendemos ni alquilamos datos personales a terceros.</p>

            <h2>4. Base legal</h2>
            <p>
              Tratamos los datos con base en su consentimiento, en la ejecución de medidas precontractuales que usted
              solicite (por ejemplo, una postulación), en el cumplimiento de obligaciones legales y en nuestro interés
              legítimo de mantener el sitio seguro.
            </p>

            <h2>5. Compartición y transferencias internacionales</h2>
            <p>
              Los datos pueden compartirse con las empresas del grupo en Estados Unidos, Colombia y Venezuela, y con
              proveedores tecnológicos que nos prestan servicios (alojamiento, correo electrónico), siempre bajo
              obligaciones de confidencialidad y seguridad. Cuando los datos se transfieran entre países, aplicamos las
              garantías exigidas por la normativa aplicable.
            </p>

            <h2>6. Conservación</h2>
            <p>
              Conservamos los datos solo durante el tiempo necesario para cumplir la finalidad para la que fueron
              recogidos y los plazos legales aplicables. Las hojas de vida se conservan hasta por dos años para futuros
              procesos, salvo que usted solicite antes su eliminación.
            </p>

            <h2>7. Sus derechos</h2>
            <p>De acuerdo con la normativa aplicable, usted puede:</p>
            <ul>
              <li>Conocer, acceder y obtener una copia de sus datos personales.</li>
              <li>Solicitar la rectificación o actualización de datos inexactos.</li>
              <li>Solicitar la supresión de sus datos o revocar su consentimiento.</li>
              <li>Oponerse a determinados tratamientos o solicitar su limitación.</li>
              <li>Presentar una queja ante la autoridad de protección de datos competente.</li>
            </ul>
            <p>
              Para ejercerlos, escriba a <a href={privacyMailto}>{privacyEmail}</a> con el asunto «Privacidad», indicando su nombre,
              el derecho que desea ejercer y un medio de contacto. Responderemos dentro de los plazos legales.
            </p>

            <h3>Normativa por país</h3>
            <ul>
              <li>
                <strong>Colombia:</strong> Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013. Autoridad: Superintendencia
                de Industria y Comercio.
              </li>
              <li>
                <strong>Estados Unidos:</strong> leyes federales y estatales aplicables, incluidas las leyes de privacidad
                de los estados donde operamos.
              </li>
              <li>
                <strong>Venezuela:</strong> derecho de habeas data reconocido en el artículo 28 de la Constitución.
              </li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Este sitio no utiliza cookies publicitarias ni de seguimiento de terceros. Si en el futuro se incorporan
              herramientas de analítica, se informará en esta política y se solicitará el consentimiento cuando sea
              necesario.
            </p>

            <h2>9. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables, como cifrado en tránsito (HTTPS) y controles de
              acceso, para proteger los datos frente a pérdida, uso indebido o acceso no autorizado.
            </p>

            <h2>10. Menores de edad</h2>
            <p>Este sitio no está dirigido a menores de edad y no recogemos conscientemente sus datos.</p>

            <h2>11. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios legales u operativos. La fecha de la última
              actualización figura al inicio de la página. Consulte también nuestro{' '}
              <Link href="/legal">Aviso legal</Link>.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
