import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import FinanzenImage from '@/images/2024_fruehling_blech_xl.webp';
import SponsorenImage from '@/images/2023_konzertreise_blaeser_xl.webp';
import SpendenImage from '@/images/2024_fruehling_holz_xl.webp';
import {GoennerSection} from './goenner/goenner-section';
import {ContentContainer} from '../../components/contentContainer';
import {EmailLink} from '../../components/email-link';
import {SpendenQr} from './spenden-qr';

export const metadata = {
  title: 'So können Sie uns unterstützen',
  description:
    'Gönnerbeiträge und Spenden sind eine wichtige Grundlage für die Zukunft unseres Orchesters. Als Sponsor:in oder Gönner:in können sie uns auf verschiedene Weisen unterstützen.',
};

export default function Unterstuetzen() {
  return (
    <ContentContainer>
      <ImageSection
        image={{src: FinanzenImage, alt: 'Orchestermitglieder beim spielen'}}
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
          <ul className="mx-2 list-inside list-disc">
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
        image={{src: SpendenImage, alt: 'Orchestermitglieder beim spielen'}}
        textOnly={false}
        link={{
          text: 'Einzahlungsschein herunterladen',
          href: '/unterstuetzen/QRRechung_Spende_JSO_Crescendo.pdf',
          download: true,
          target: '_blank',
        }}
      >
        Wenn sie uns lieber unkompliziert eine einmalige Spende zukommen lassen
        möchten, können Sie dies jederzeit tun. Auch diese sind herzlich
        willkommen!
        <section className="pt-4">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-normal">
            <div className="aspect-square ">
              <SpendenQr />
            </div>
            <div className="flex flex-col sm:justify-between">
              <h3 className="mb-2 text-xl">Kontodaten</h3>
              <Text>
                Jugendorchester Crescendo
                <br />
                Weiherweg 8
                <br />
                8610 Uster
                <br />
                IBAN: CH 16 0900 0000 8005 1631 7
                <br />
                Konto: 80-51631-7
              </Text>
            </div>
          </div>
        </section>
      </ImageSection>
    </ContentContainer>
  );
}
