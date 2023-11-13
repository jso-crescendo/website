import {ContentContainer} from '../../components/contentContainer';
import {ImageSection} from '@/components/image-section';
import {Text} from '../../components/text';
import VorstandImage from '@/images/people/vorstand.webp';

const VORSTAND = [
  {
    name: 'Käthi Schmid Lauber',
    funktion: 'Musikalische Leitung',
    email: 'kaethi.schmid@jso-crescendo.ch',
  },
  {
    name: 'Andrea Schmid',
    funktion: 'Präsident',
    email: 'andrea.schmid@jso-crescendo.ch',
  },
  {
    name: 'Janine Wälty',
    funktion: 'Vizepräsidentin',
    email: 'janine.waelty@jso-crescendo.ch',
  },
  {
    name: 'Larissa Kälin',
    funktion: 'Finanzen',
    email: 'finanzen@jso-crescendo.ch',
  },
  {
    name: 'Salome Kurmann',
    funktion: 'Mitglieder',
    email: 'mitglieder@jso-crescendo.ch',
  },
  {
    name: 'Janine Wälty & Baldiun Dettling',
    funktion: 'Marketing und Sponsoring',
    email: 'marketing@jso-crescendo.ch',
  },
  {
    name: 'Florian Rohrer',
    funktion: 'Website & digitales',
    email: 'florian.rohrer@jso-crescendo.ch',
  },
];

export const metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie unseren Vorstand per Kontaktformular oder E-Mail. Schreiben Sie uns - wir freuen uns auf Ihre Nachricht!',
};

export default function Kontakt() {
  return (
    <ContentContainer>
      <section className="flex flex-col items-center pb-8">
        <h1 className="font-serif text-5xl">Kontak&shy;tie&shy;ren sie uns</h1>
        <Text className="lg:w-1/2 lg:text-center">
          Unser Vorstand steht Ihnen gerne zur Verfügung und beantwortet Ihre
          Anfragen per Kontaktformular oder E-Mail. Bei spezifischen Fragen
          können Sie sich auch direkt an einzelne Vorstandsmitglieder wenden.
          Wir freuen uns auf Ihre Nachricht!
        </Text>
      </section>

      <ImageSection
        image={{
          src: VorstandImage,
          alt: 'Vorstand',
          priority: true,
        }}
        title="Vorstand"
        textOnly={false}
        noReverse
      >
        <ul className="pt-3">
          {VORSTAND.map((p) => (
            <li key={p.funktion} className="pb-2">
              <a
                className="cursor-pointer"
                href={`mailto:${p.email}`}
                data-umami-event="Kontakt Email"
                data-umami-event-email={p.email}
              >
                <div>
                  <span className="text-base font-medium">{p.name}</span> -{' '}
                  <span className="text-sm">{p.funktion}</span>
                </div>
                <span className="text-sm">{p.email}</span>
              </a>
            </li>
          ))}
        </ul>
      </ImageSection>
    </ContentContainer>
  );
}
