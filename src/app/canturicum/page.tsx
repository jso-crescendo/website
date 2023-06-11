import {CONCERTS} from '../../data/concerts';
import CanturicumChorImage from '@/images/2019_canturicum_chor.webp';
import CanturicumImage from '@/images/2019_canturicum.webp';
import {ConcertLocationList} from '../../components/concert-location-list';
import {ContentContainer} from '../../components/contentContainer';
import {DownloadButton} from '../../components/download-button';
import {ImageSection} from '../../components/image-section';
import KonzertImage from '@/images/2019_jubilaeumskonzert_tonhalle.webp';
import {Text} from '../../components/text';

export const metadata = {
  title: 'Projektchor Canturicum',
  description:
    'Erfahre jetzt mehr über unsere Konzerte und die Möglichkeit, Teil des Projektchors Canturicum zu werden.',
};

export default function Canturicum() {
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-4xl leading-normal md:text-5xl lg:text-6xl">
        Chorprojekt Cherubini Requiem
      </h1>
      <Text>
        Cherubini komponierte das Werk 1816. Es zeigt alle Facetten von
        absoluter Schlichtheit bis zu opernhafter Dramaturgie. Zusätzlich werden
        wir wie 2018 noch ein kurzes Werk für Doppelchor singen.
      </Text>
      <br />
      <ImageSection
        title="Projektchor Canturicum"
        image={{
          src: CanturicumChorImage,
          alt: 'Projektchor Canturicum in der Tonhalle',
        }}
      >
        Seit 2006 führt das JSO Crescendo regelmässig Chorwerke mit dem
        Projektchor Canturicum auf. Dieser Chor wurde von Käthi Schmid Lauber
        eigens dazu gegründet, im Mai 2006 die &quot;Messe solennelle&quot; von
        Ch. Gounod aufzuführen. Der Erfolg dieses Projektes, u.a. das Konzert in
        der ausverkauften Tonhalle, war so durchschlagend, dass 2007, 2009,
        2012, 2015, 2018 und 2019 weitere Projekte realisiert wurden. Es singen
        jeweils zwischen 80 und 120 Sänger:innen, aus den Singwochen, Eltern,
        Ehemalige und Freunde vom JSO Crescendo mit.
      </ImageSection>
      <ImageSection
        title="Konzerte"
        image={{
          src: KonzertImage,
          alt: '',
        }}
        textOnly={false}
      >
        <ConcertLocationList
          locations={
            CONCERTS.filter((c) => c.id == 'herbstkonzerte-23')[0].dates ?? []
          }
        />
      </ImageSection>
      <ImageSection
        title="Mitsingen"
        image={{
          src: CanturicumImage,
          alt: 'Projektchor Canturicum in der Tonhalle',
        }}
        textOnly={false}
      >
        <Text>
          Diese Einladung richtet sich an Sänger:innen, die gerne die
          Gelegenheit wahrnehmen möchten, ein Konzertprogramm mit einem jungen,
          dynamischen Sinfonieorchester zu erarbeiten. Voraussetzung ist für
          mich nicht in erster Linie eine gute Stimmausbildung, sondern die
          Bereitschaft, sich geistig auf meine Bilder zur Musik - und
          Tongestaltung einzulassen. Dieses wunderbare Chorwerk wird dem Chor
          viel an Stimm- und Klangbeherrschung abverlangen. Es ist mir ein
          grosses Anliegen, alle Nuancen von dieser wunderbaren Musik voll
          ausreizen zu können - dies sicher oft mit Forderungen, die nicht
          unbedingt einer konventionellen Vorstellung von Chorarbeit
          entsprechen.
          <br />
          Es freut uns besonders, dass bei diesem Projekt die Kantorei Wetzikon
          mitsingen wird. Daher wird ein Teil der Probearbeit in Wetzikon
          stattfinden.
        </Text>
        <h3 className="pb-2 pt-4 font-serif text-xl md:text-2xl lg:text-3xl">
          Anmelden
        </h3>
        <Text className="pb-2">
          Anmeldung herunterladen und ausgefüllt per Email an{' '}
          <a
            href="mailto:kaethi.schmid@jso-crescendo.ch"
            className="text-primary-main"
          >
            Käthi Schmid Lauber (kaethi.schmid@jso-crescendo.ch)
          </a>{' '}
          senden.
        </Text>
        <DownloadButton
          text="Anmeldung herunterladen"
          href="/canturicum/Anmeldung_Cherubini.pdf"
          type="primary"
        />
      </ImageSection>
    </ContentContainer>
  );
}
