import type { Metadata } from 'next';
import { divisions } from '@/content/site-content';
import { CardGrid } from '@/components/page/CardGrid';
import { ContactBanner } from '@/components/page/ContactBanner';
import { PageHero } from '@/components/page/PageHero';
import { PageSection } from '@/components/page/PageSection';

export const metadata: Metadata = {
  title: 'Contacto de prensa',
  description: 'Canal oficial para medios de comunicación: entrevistas, comunicados y material gráfico de Neva Corporation.',
  alternates: { canonical: '/prensa/contacto' },
};

const services = [
  {
    title: 'Entrevistas y declaraciones',
    description: 'Coordinamos entrevistas con la dirección del grupo y con los líderes de cada división.',
  },
  {
    title: 'Comunicados oficiales',
    description: 'Acceso a anuncios corporativos, resultados operativos y novedades de expansión.',
  },
  {
    title: 'Material gráfico',
    description: 'Logotipos oficiales, emblemas y lineamientos de uso de marca en alta resolución.',
  },
];

export default function PressContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Prensa', href: '/prensa' }, { label: 'Contacto' }]}
        eyebrow="Contacto de prensa"
        title="Hablemos con los medios."
        description="Nuestro equipo de comunicaciones atiende solicitudes de periodistas y medios de comunicación de Estados Unidos, Colombia, Venezuela y el resto del mundo."
      />

      <PageSection id="servicios-prensa" eyebrow="Cómo podemos ayudarte" title="Atención a medios.">
        <CardGrid items={services} />
      </PageSection>

      <PageSection
        id="voceros"
        eyebrow="Divisiones"
        title="Información por división."
        description="Indica en tu mensaje sobre qué división del grupo necesitas información para dirigirte al vocero adecuado."
        tinted
      >
        <CardGrid
          numbered={false}
          items={divisions.map((division) => ({
            title: division.name,
            meta: division.region,
            description: (
              <>
                {division.description}{' '}
                <a href={division.url} target="_blank" rel="noopener noreferrer" className="font-mono text-neva-gold-light underline-offset-4 hover:underline">
                  {division.domain}
                </a>
              </>
            ),
          }))}
        />
      </PageSection>

      <ContactBanner
        title="Escríbenos"
        description="Respondemos las solicitudes de medios en un plazo de 1 a 2 días hábiles. Incluye tu nombre, medio y fecha límite de publicación."
        subject="Prensa: solicitud de medios"
        cta="Enviar solicitud"
      />
    </>
  );
}
