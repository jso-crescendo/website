import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import SponsorenImage from '@/images/2022_fruehling_bass.webp';
import GoennerImage from '@/images/2022_fruehling_blech.webp';

import {ContentContainer} from '../../components/contentContainer';
import {EmailLink} from '../../components/email-link';

export const metadata = {
  title: 'So können Sie uns unterstützen',
  description: 'TODO',
};

export default function Unterstuetzen() {
  return (
    <ContentContainer title="So können Sie uns unterstützen">
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

      <ImageSection
        image={{src: GoennerImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Gönner"
        link={{text: 'Jetzt Gönner:in werden', href: '/unterstuetzen/goenner'}}
      >
        Möchten Sie engagierte junge Musiker unterstützen? Mit einem jährlichen
        Beitrag ab CHF 100.- können Sie Gönner:in des JSO Crescendos werden. Als
        Dankeschön erhalten Sie neben einem jährlichen Gönnerbrief auch weitere
        Vorteile wie Platzreservationen an unseren Konzerten.
      </ImageSection>
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Sponsoren"
        textOnly={false}
        link={{text: 'Weitere Informationen', href: '/unterstuetzen/sponsoren'}}
      >
        TODO
      </ImageSection>
      <ImageSection
        title="Spenden"
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        textOnly={false}
        link={{text: 'Einzahlungsschein herunterladen', href: '#TODO'}}
      >
        Wenn sie uns lieber unkompliziert eine einmalige Spende zukommen lassen
        möchten, können Sie dies jederzeit mit folgendem Einzahlungsschein tun:
        TODO
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
