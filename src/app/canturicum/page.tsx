import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import {HERBSTKONZERTE_26} from '@/data/concerts/2026/herbstkonzerte-26';
import ChorImage from '@/images/2019_canturicum.webp';
import ChorImage2 from '@/images/2019_canturicum_chor.webp';
import {ContentContainer} from '../../components/contentContainer';

export const metadata = {
  title: 'Canturicum',
  description:
    'Sing mit uns🎶 20 Jahre Canturicum - Jubiläumsprojekt 2026: Jephtha und seine Tochter.',
};

export default function Canturicum() {
  return (
    <ContentContainer title="Projektchor Canturicum">
      <ImageSection
        image={{
          src: ChorImage,
          alt: 'Crescendo mit Canturicum in der Tonhalle',
          priority: true,
        }}
        link={{
          text: 'Projektdetails und Anmeldung',
          href: '/canturicum/anmeldung-canturicum-2026.pdf',
        }}
        textOnly={false}
      >
        <Text>
          Der Projektchor Canturicum feiert 2026 sein 20-jähriges Bestehen! Zu
          diesem Jubiläum führen wir gemeinsam mit dem JSO Crescendo und der
          Kantorei Wetzikon ein ganz besonderes Werk auf: Das dramatische
          Oratorium <strong>«Jephtha und seine Tochter»</strong> von Carl Martin
          Reinthaler. Es handelt sich dabei voraussichtlich um eine
          schweizerische Erstaufführung.
        </Text>

        <Text className="mt-4">
          Hast du Lust, bei diesem grossen Projekt dabei zu sein? Voraussetzung
          ist vor allem die Bereitschaft, sich auf die Musik und Tongestaltung
          einzulassen – eine professionelle Stimmausbildung ist nicht
          erforderlich. Der Unkostenbeitrag beträgt CHF 100.
        </Text>
      </ImageSection>
      <ImageSection
        image={{
          src: HERBSTKONZERTE_26.image_sm,
          alt: 'Flyer Canturicum Herbstkonzerte 2026',
          priority: true,
        }}
        title="Konzertdaten"
        textOnly={false}
      >
        <ul className="list-disc pl-6 my-2">
          {HERBSTKONZERTE_26.dates?.map((d) => (
            <li key={d.dateISO} className="text-base">
              {d.dateString} - {d.location}
            </li>
          ))}
        </ul>
      </ImageSection>
      <ImageSection
        image={{
          src: ChorImage2,
          alt: 'Crescendo mit Canturicum in der Tonhalle',
          priority: true,
        }}
        title="Probenarbeit"
        textOnly={false}
        link={{
          text: 'Jetzt per E-Mail anmelden',
          href: 'mailto:kaethi.schmid@jso-crescendo.ch?subject=Anmeldung Canturicum&body=Guten Tag Frau Schmid-Lauber, Ich möchte mich für das Canturicum-Projekt 2026 anmelden und sende ihnen im Anhang das ausgefüllte Anmeldeformular.',
        }}
      >
        <Text>
          Die Proben finden wöchentlich am Montag in Wetzikon (19.30 – 21.15
          Uhr) oder Donnerstag in Zürich (19.30 – 21.30 Uhr) statt. Auch eine
          Teilnahme via Selbststudium mit Beteiligung an den Gesamtproben und
          den Probewochenenden ist möglich.
        </Text>

        <Text className="text-lg font-semibold mt-4">
          Obligatorische Termine:
        </Text>
        <ul className="list-disc pl-6 my-2">
          <li>13./14. Juni 2026 – Kennenlernwochenende (Wetzikon) </li>
          <li>16. August 2026 – Probesonntag (Wetzikon) </li>
          <li>26./27. September 2026 – Probewochenende (Adliswil) </li>
          <li>18. Oktober 2026 – Probesonntag (Wetzikon) </li>
          <li>28. Oktober 2026 – Generalprobe in Olten </li>
        </ul>
      </ImageSection>
    </ContentContainer>
  );
}
