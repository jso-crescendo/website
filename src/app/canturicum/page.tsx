import {ImageSection} from '@/components/image-section';
import ChorImage from '@/images/2019_canturicum.webp';
import {Text} from '@/components/text';
import {ContentContainer} from '../../components/contentContainer';
import {LinkButton} from '../../components/link-button';

export const metadata = {
  title: 'Canturicum',
  description:
    'Sing mit uns🎶 Hast du Lust, bei unserem nächsten grossen Projekt dabei zu sein?',
};

export default function Canturicum() {
  return (
    <ContentContainer title="Canturicum">
      <ImageSection
        image={{
          src: ChorImage,
          alt: 'Crescendo mit Canturicum in der Tonhalle',
          priority: true,
        }}
        title="Projectchor Canturicum: Sing mit uns🎶"
        textOnly={false}
      >
        <Text>
          Alle zwei Jahre bringt der Canturicum gemeinsam mit dem Orchester
          grosse, beeindruckende Chorwerke zur Aufführung. Im Herbst 2026 ist es
          wieder soweit.
          <br />
          Hast du Lust, bei unserem nächsten grossen Projekt dabei zu sein?
          Voraussetzungen sind Engagement und Freude an der Musik. Sängerische
          Erfahrung ist ein &quot;Nice-to-have&quot;, aber keinesfalls eine
          Bedingung für die Teilnahme. Wir starten mit den Proben nach den
          Sommerferien (mitte August) und freuen uns auf die gemeinsamen
          Konzerte des JSO Crescendo und Canturicum im November 2026. Proben
          finden jeweils am Montag in Wetzikon und am Donnerstag in Zürich
          statt.
        </Text>

        <Text className="text-lg mt-4">Obligatorische Proben:</Text>

        <ul className="list-disc pl-6 my-2">
          <li>Kennenlernwochenende im Juni (Datum wird noch bekanntgegeben)</li>
          <li>16.August 2026 - Probesonntag in Wetzikon</li>
          <li>26&27 September 2026 - Probewochenende mit Orchester</li>
          <li>18.Oktober 2026 - Probesonntag in Wetzikon</li>
        </ul>

        <LinkButton
          type="primary"
          href="https://forms.gle/VScYpFVj5sY6Gc3B9"
          text="Jetzt voranmelden"
        />
      </ImageSection>
    </ContentContainer>
  );
}
