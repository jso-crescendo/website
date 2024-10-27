import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import SponsorenImage from '@/images/2022_fruehling_bass.webp';
import GoennerImage from '@/images/2022_fruehling_blech.webp';
import GoennerSection from './goenner/page';
import {ContentContainer} from '../../components/contentContainer';
import {EmailLink} from '../../components/email-link';

export const metadata = {
  title: 'So können Sie uns unterstützen',
  description: 'TODO',
};

export default function Unterstuetzen() {
  return (
    <ContentContainer>
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Wie finanzieren wir uns?"
      >
        Das Jugendsinfonieorchester Crescendo finanziert sich hauptsächlich aus
        Kollekten und Gagen bei Konzerten. Bei grösseren Anlässen wie
        Konzertreisen veranstalten wir zusätzlich Crowdfunding-Aktionen. Die
        restlichen Auslagen werden über Mitgliederbeiträge, Sponsoren und
        Gönnerbeiträge und anderen Spenden gedeckt.
      </ImageSection>

      <GoennerSection
        noReverse={false}
        link={{
          text: 'Zum Gönner:innen Anmeldeformular',
          href: '/unterstuetzen/goenner#anmeldeformular',
        }}
      />
      <ImageSection
        image={{
          src: SponsorenImage,
          alt: 'Orchestermitglieder beim spielen',
          vertical: true,
        }}
        title="Sponsorenwerbung"
        textOnly={false}
      >
        <Text>
          An unseren Konzerten bietet unser Programmheft Platz für Werbung. Ab
          eimen Betrag von CHF 80 können Sie darin für ihr Unternehmen Werbung
          machen. Wir drucken jeweils ca. 700 Exemplare und legen dieselbe
          Edition an allen unseren Konzerten auf.
        </Text>
        <div className="my-4">
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
        title="Spenden"
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        textOnly={false}
        link={{text: 'Einzahlungsschein herunterladen', href: '#TODO'}}
      >
        Wenn sie uns lieber unkompliziert eine einmalige Spende zukommen lassen
        möchten, können Sie dies jederzeit tun. Auch diese sind herzlich
        willkommen!
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
