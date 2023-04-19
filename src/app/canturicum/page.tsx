import {CONCERTS} from '../../data/concerts';
import CanturicumImage from '@/images/2019_canturicum_md.webp';
import {ContentContainer} from '../../components/contentContainer';
import {ImageSection} from '../../components/image-section';
import KonzertImage from '@/images/2019_jubilaeumskonzert_tonhalle_md.webp';
import {LinkButton} from '../../components/link-button';
import {Text} from '../../components/text';

export const metadata = {
  title: 'Projektchor Canturicum',
  description:
    'Erfahre jetzt mehr über unsere Konzerte und die Möglichkeit, Teil des Projektchors zu werden.',
};

export default function Orchester() {
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Chorprojekt Cherubini November 2023
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
          src: CanturicumImage,
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
        <ol className="list-disc pl-4">
          {CONCERTS.filter((c) => c.id == 'herbstkonzerte-23')[0].dates?.map(
            (d) => (
              <li key={d.dateISO}>
                <a href={d.googleMapsLink} className="hover:text-primary-main">
                  <span className="font-serif text-lg">{d.location}</span>
                  <span className="text-sm"> - {d.dateString}</span>
                </a>
              </li>
            ),
          )}
        </ol>
      </ImageSection>
      <Text>
        Diese Einladung richtet sich an Sänger:innen, die gerne die Gelegenheit
        wahrnehmen möchten, ein Konzertprogramm mit einem jungen, dynamischen
        Sinfonieorchester zu erarbeiten. Voraussetzung ist nicht in erster Linie
        eine gute Stimmausbildung, sondern die Bereitschaft, sich geistig auf
        Bilder zur Musik- und Tongestaltung einzulassen. Dieses wunderbare
        Chorwerk wird dem Chor viel an Stimm- und Klangbeherrschung abverlangen.
        Es ist ein grosses Anliegen der Dirigentin, alle Nuancen von dieser
        wunderbaren Musik voll ausreizen zu können - dies sicher oft mit
        Forderungen, die nicht unbedingt einer konventionellen Vorstellung von
        Chorarbeit entsprechen. Meine Erfahrungen mit der individuell gewählten
        Probeart waren durchwegs positiv.
      </Text>
      <ul className="list-disc pl-8">
        <li>im ad hoc-Chor am Montag in Wetzikon</li>
        <li>
          Dienstag oder Donnerstag in Zürich (Tag richtet sich nach den
          Anmeldungen)
        </li>
        <li>
          im Selbststudium mit Beteiligung an den Gesamtproben und den
          Probetagen.
        </li>
      </ul>
      <br />{' '}
      <Text>
        Für Probearbeit, Noten und Übdateien wird ein Unkostenbeitrag erhoben.
        Zusätzlich werden gemäss Anmeldung noch die Kosten für die Übernachtung
        und Verpflegung am Probewochenende dazu kommen.
      </Text>
      <br />
      <LinkButton
        text="Jetzt anmelden"
        href="https://forms.gle/y8RseozTuqxr6wVVA"
        type="primary"
      />
    </ContentContainer>
  );
}
