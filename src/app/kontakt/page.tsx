import {ImageSection} from '@/components/image-section';
import VorstandImage from '@/images/people/vorstand_sm.webp';

import {ContentContainer} from '../../components/contentContainer';
import {Text} from '../../components/text';
import {Email} from '../../icons/email';
import {ContactForm} from './contact-form';

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
    email: 'larissa.kaelin@jso-crescendo.ch',
  },
  {
    name: 'Salome Kurmann',
    funktion: 'Mitglieder',
    email: 'salome.kurmann@jso-crescendo.ch',
  },
  {
    name: 'Janine Wälty & Baldiun Dettling',
    funktion: 'Marketing und Sponsoring',
    email: 'marketing@jso-crescendo.ch',
  },
  {
    name: 'Livia Pierhöfer',
    funktion: 'Musikkomission',
    email: 'livia.pierhoefer@jso-crescendo.ch',
  },
  {
    name: 'Florian Rohrer',
    funktion: 'Website & digitales',
    email: 'florian.rohrer@jso-crescendo.ch',
  },
];

export const metadata = {
  title: 'Kontakt',
};

export default function Orchester() {
  return (
    <ContentContainer>
      <ImageSection
        image={{
          src: VorstandImage,
          alt: 'Vorstand',
          priority: true,
        }}
        title="Vorstand"
        textOnly={false}
      >
        <Text>
          Für jegliche Art von Anliegen stehen Ihnen der Vorstand gerne per Mail
          zur Verfügung. Bei spezifischen Anliegen können Sie sich auch gerne
          direkt an einzelne Vorstandsmitglieder wenden.
        </Text>
        <ul className="pt-3">
          {VORSTAND.map((p) => (
            <li key={p.funktion} className="pb-2">
              <div>
                <span className="text-lg">{p.name}</span> -{' '}
                <span className="text-sm">{p.funktion}</span>
              </div>
              <a className="pointer-cursor" href={`mailto:${p.email}`}>
                {p.email}
              </a>
            </li>
          ))}
        </ul>
      </ImageSection>
      <section className="flex flex-row justify-center">
        <ContactForm />
      </section>
    </ContentContainer>
  );
}
