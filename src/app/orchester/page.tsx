import ChorImage from '@/images/2021_herbstkonzert_chor_sm.webp';
import {ContentContainer} from '../../components/contentContainer';
import GoennerImage from '@/images/2022_fruehling_blech_sm.webp';
import Image from 'next/image';
import {ImageSection} from '@/components/image-section';
import KaethiImage from '@/images/people/kaethi_sm.webp';
import KonzertreiseImage from '@/images/2019_konzertreise_bulgarien_sm.webp';
import MitgliedWerdenImage from '@/images/backgrounds/scores_1_sm.webp';
import NoeliImage from '@/images/people/noelie_sm.webp';
import OrchesterWideImage from '@/images/2019_jubliaeumskonzert_tonhalle_wide_lg.webp';
import SponsorenImage from '@/images/2022_fruehling_bass_sm.webp';
import {Text} from '@/components/text';

export const metadata = {
  title: 'Über uns',
};

export default function Orchester() {
  return (
    <ContentContainer>
      <h1 className="text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Über das Orchester
      </h1>
      <Image
        src={OrchesterWideImage}
        alt="Orchester in Tonhalle bei Konzert"
        className="w-full rounded-lg py-4"
        priority
        placeholder="blur"
      />
      <Text className="mb-4">
        Das Jugendsinfonieorchester Crescendo besteht seit 34 Jahren, immer
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
        title="Konzertreisen"
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
      <ImageSection
        image={{src: KaethiImage, alt: 'Portrait Foto von Käthi Schmid Lauber'}}
        title="Käthi Schmid Lauber"
        subtitle="Dirigentin"
      >
        Käthi Schmid Lauber studierte an der Schola Cantorum Basiliensis Violine
        in alter Mensur bei Jaap Schröder, Viola da Gamba bei Jordi Savall und
        Gesang bei Richard Levitt. 1985 schloss sie ihre Studien mit dem Diplom
        für Alte Musik im Fach Violine und Viola ab. Nach Dirigierstudien bei
        Sylvia Caduff (Luzern) und Karl Scheuber (Zürich) belegte sie drei Jahre
        den Nachdiplomkurs in Orchester- dirigat bei Daniel Schmid an der HMT
        Zürich. Sie spielte in verschiedenen Barockorchestern in Deutschland und
        der Schweiz. Neben dem JSO Crescendo dirigiert Käthi Schmid Lauber das
        Kindersinfonieorchester in Wetzikon, das Seeländer Bläserensemble, den
        Projektchor „Canturicum“ und die Kantorei Wetzikon. Zweimal jährlich
        leitet sie die Singwochen in Quarten, SG. Dazu ist sie auch als
        Komponistin tätig: In ihrem Oeuvre finden sich Solokonzerte mit
        sinfonischer Orchesterbegleitung, Musicals und Chorwerke. Ihre
        Lehrtätigkeit in den Instrumenten Violine, Viola, Viola da Gamba und
        Kontrabass übt sie an der Musikschule Adliswil-Langnau aus und
        unterrichtet „Klassenmusizieren“ an der MKZ. Das Unmögliche möglich zu
        machen ist das, was sie an der Arbeit mit Jugendlichen immer wieder neu
        fasziniert.
        <br />
        <br />
        Käthi Schmid Lauber ist verheiratet und Mutter von drei Kindern. Die
        beiden Söhne sind seit Jahren Mitglieder im Crescendo. Tochter Anina
        spielte 12 Jahre als Geigerin mit, dabei prägte sie das Orchester vor
        allem in ihren sieben Jahren als Konzertmeisterin namhaft. Es ist für
        uns alle ein riesiger Verlust,dass Anina im Frühling 2021 bei einem
        Reitunfall tödlich verunglückte.
      </ImageSection>
      <ImageSection
        image={{src: NoeliImage, alt: 'Portrait Foto von Noëlie Nyffeler'}}
        title="Noëlie Nyffeler"
        subtitle="Konzertmeisterin"
      >
        Noëlie Nyffeler begann im Alter von vier Jahren bei Agathe Jerie Geige
        zu spielen. Während ihrer Gymnasialzeit wurde sie von Julia Schwob
        unterrichtet. Seit 2020 ist sie im JSO Crescendo Konzertmeisterin, wobei
        sie bereits seit dem Jahr 2014 Mitglied des Orchesters ist. Des Weiteren
        spielt sie immer wieder in Luzern bei Projekten des Zentralschweizer
        Jugendsinfonieorchester ZJSO mit. Neben ihrer Tätigkeit im Orchester als
        Violinistin singt sie im Vokalensemble CantAmabile im Sopran. Noëlie
        Nyffeler studiert Germanistik und Romanistik an der Universität Zürich.
        Neben ihrem Studium ist sie als Lehrerin für Gymivorbereitungskurse und
        Nachhilfe tätig und wirkt beim Dictionnaire d’Ancien Gascon (DAGél) an
        der Universität mit.
      </ImageSection>
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Sponsoren"
      >
        In den Programmheften unserer Konzerte bieten wir Platz für Ihre
        Werbung. Möchten Sie Ihr Logo oder Ihren Firmennamen in unserem
        Programmheft abdrucken? Melden Sie sich beim uns.
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
          <h5 className="text-xl">Kontodaten</h5>
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
