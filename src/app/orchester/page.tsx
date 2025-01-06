import Image from 'next/image';

import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import OrchesterWideImage from '@/images/2019_jubliaeumskonzert_tonhalle_wide.webp';
import KonzertreiseImage from '@/images/2019_konzertreise_bulgarien.webp';
import ChorImage from '@/images/2021_herbstkonzert_chor.webp';
import MitgliedWerdenImage from '@/images/backgrounds/scores_1.webp';

import {ContentContainer} from '../../components/contentContainer';
import {KaethiSection} from './kaethiSection';
import {NoelieSection} from './noelieSection';

export const metadata = {
  title: 'Über uns',
  description:
    'Das JSO Crescendo - ein einzigartiges Orchester und Chor. Informieren Sie sich jetzt über uns um unsere nächsten Konzerte zu erleben oder mitzuspielen.',
};

export default function Orchester() {
  return (
    <ContentContainer title="Über das Orchester">
      <Image
        src={OrchesterWideImage}
        alt="Orchester in Tonhalle bei Konzert"
        className="hidden w-full rounded-lg py-4 md:block"
        priority
        placeholder="blur"
      />
      <Text className="mb-4">
        Das Jugendsinfonieorchester Crescendo besteht seit 35 Jahren, immer
        unter der Leitung von Käthi Schmid Lauber. Anfangs wurde jeweils ein
        Konzertprogramm pro Jahr einstudiert. Seit gut 15 Jahren werden aber
        jedes Jahr zwei grosse Programme erarbeitet. Bis heute sind das mehr als
        3000 Probestunden, 50 Probewochenenden und 130 Konzerte in der Schweiz -
        Tendenz steigend! Im Programm stehen dabei grosse Sinfonien,
        Solokonzerte und Filmmusik. Nicht wenige ehemalige Mitglieder trifft man
        heute an einem Konservatorium oder bereits als Profimusiker wieder an.
      </Text>
      <Text>
        Nebenbei spielt das JSO Crescendo mit seinen rund 60 Mitgliedern an
        diversen Feiern, Privatanlässen, Gottesdiensten und Tanzveranstaltungen.
        Gerne lassen wir uns in gewünschter grösse für Ihren Anlass engagieren.
        Im Sommer trifft man die jungen Musiker*innen zudem immer mal wieder
        beim Strassenmusizieren an.
      </Text>
      <ImageSection
        image={{
          src: ChorImage,
          alt: 'Das Crescendo singt als Chor',
          priority: true,
        }}
        title="Das Crescendo als Chor"
      >
        Weit und breit einzigartig ist das JSO Crescendo insofern, dass es nicht
        nur ein Orchester, sondern auch ein Chor ist - nicht selten wird es
        schon nur wegen dieser Besonderheit engagiert. Mit dem Canturicum hat
        das Orchester seinen eigenen Projektchor, mit welchem es alle zwei Jahre
        grosse Chorwerke zur Aufführung bringt.
      </ImageSection>
      <ImageSection
        image={{
          src: KonzertreiseImage,
          alt: 'Das Orchester in Bulgarien am Meer',
        }}
        title="Konzert&shy;reisen"
      >
        Ein fester Bestandteil des JSO Crescendo sind die Konzertreisen. Alle
        zwei Jahre konzertieren wir während zwei Wochen an verschiedenen Orten
        auf der ganzen Welt.
        <br />
        Diesen Sommer fahren wir für zwei Wochen nach Italien und spielen dort
        gesamthaft sechs Konzerte. Die erste Woche werden wir im heissen Süden
        von Italien verbringen, die zweite Woche führt uns nach Florenz an das
        «Festival Orchestre Giovanili». Zwischen Üben und Konzertieren gibt es
        Zeit für Spiele, zum Jammen, Baden und Tanzen, um neue Freundschaften zu
        schliessen sowie alte zu besiegeln. Somit stellt die Reise in unser
        Nachbarland nicht nur eine kulturelle Erfahrung auf internationalen
        Bühnen dar, sondern schenkt den jungen Leuten gemeinsame, unvergessliche
        Momente.
      </ImageSection>
      <KaethiSection />
    {/* <NoelieSection /> */}
      <ImageSection
        image={{src: MitgliedWerdenImage, alt: 'Noten auf einem Notenständer'}}
        title="Mitglied werden"
        textOnly={false}
      >
        <Text className="mb-4">
          Wir suchen immer wieder junge und initiative Leute, die im Orchester
          mitspielen möchten. Die Voraussetzung ist Freude an der Musik und die
          Bereitschaft, mit Toleranz und Kameradschaft eine lockere und
          ungezwungene Orchesteratmosphäre zu schaffen.
        </Text>
        <Text className="mb-4">
          Wir proben jeweils am Mittwoch von 18:30 bis 20:30 Uhr in der Nähe vom
          Bahnhof Binz in Zürich. Wir studieren 2 Programme im Jahr ein und
          geben durchschnittlich 6 Konzerte. Daneben spielen wir aber immer
          wieder mit kleineren Besetzungen an Anlässe wie runde Geburtstage,
          Weihnachtsfeiern, Kirchenfeste, Jubiläumsveranstaltungen.
        </Text>
        <Text className="mb-4">
          Bist du interessiert? Dann melde dich jetzt bei uns! Wir freuen uns
          auf dich!
        </Text>
      </ImageSection>
    </ContentContainer>
  );
}
