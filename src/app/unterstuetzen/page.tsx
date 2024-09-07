import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import SponsorenImage from '@/images/2022_fruehling_bass.webp';
import GoennerImage from '@/images/2022_fruehling_blech.webp';

import {ContentContainer} from '../../components/contentContainer';
import {EmailLink} from '../../components/email-link';

export const metadata = {
  title: 'Unterstützen',
  description: 'TODO',
};

export default function Unterstuetzen() {
  return (
    <ContentContainer title="Unterstützen">
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Wie finanzieren wir uns?"
      >
        Das Jugendsinfonieorchester Crescendo finanziert sich hauptsächlich aus
        Kollekten und Gagen bei Konzerten. Bei grösseren Anlässen wie
        Konzertreisen veranstalten wir zusätzlich Crowdfunding-Aktionen. Die
        restlichen auslagen werden über Mitgliederbeiträge, Sponsoren und
        Gönnerbeiträge und anderen Spenden gedeckt.
      </ImageSection>
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Sponsoren"
        textOnly={false}
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
      <ImageSection
        image={{src: GoennerImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Gönner"
        textOnly={false}
      >
        <Text>
          Möchten Sie engagierte junge Musiker unterstützen? Wir freuen uns über
          Ihr Interesse an der Jugend- und Kulturförderung und sind dankbar für
          Ihren Beitrag.
        </Text>
        <section className="pt-4">
          <h3 className="text-xl">Kontodaten</h3>
          <Text className="pl-2">
            Jugendorchester Crescendo
            <br />
            8000 Zürich
            <br />
            IBAN: CH 16 0900 0000 8005 1631 7
            <br />
            Konto: 80-51631-7
          </Text>
        </section>
      </ImageSection>
    </ContentContainer>
  );
}
