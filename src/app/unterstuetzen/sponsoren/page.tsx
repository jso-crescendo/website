import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import SponsorenImage from '@/images/2022_fruehling_bass.webp';
import GoennerImage from '@/images/2022_fruehling_blech.webp';
import {ContentContainer} from '../../../components/contentContainer';

export const metadata = {
  title: 'So können Sie uns unterstützen',
  description: 'TODO',
};

export default function Sponsoren() {
  return (
    <ContentContainer title="Sponsoren">
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Wie finanzieren wir uns?"
      >
      <Text>
          Bei unseren Konzerten bieten wir Ihnen die Möglichkeit in unserem
          Programmheft zu inserieren. Wir drucken jeweils 800 Programmhefte und
          legen dieselbe Edition an allen Konzertorten auf.
        </Text>
        <div className="my-2">
          <Text>
            Wir stellen Ihnen gerne folgende Leistungen zur Verfügung:
          </Text>
          <ul className="list-inside list-disc mx-2">
            <li className="text-justify text-base">Namenserwähnung: CHF 80</li>
            <li className="text-justify text-base">
              Inserat A7 (1/4 Seite): CHF 120
            </li>
            <li className="text-justify text-base">
              Inserat A6 (1/2 Seite): CHF 200
            </li>
            <li className="text-justify text-base">
              Inserat A5 (ganze Seite): CHF 400
            </li>
          </ul>
          <Text>Weitere Optionen in Absprache sind gerne möglich.</Text>
        </div>
        <Text>
          Bitte melden Sie sich bei Interesse bis spätestens 4 Wochen vor den
          Konzerten bei{' '}
          <EmailLink
            email="simon.kurath@jso-crescendo.ch"
            name="Simon Kurath"
          />
          . Wir würden uns über Ihre Kontaktaufnahme ausserordentlich freuen —
          vielen Dank!
        </Text>
      </ImageSection>
    </ContentContainer>
  );
}
