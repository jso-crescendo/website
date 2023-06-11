import {ArrowLink} from '../../../icons/arrow-link';
import {ContentContainer} from '../../../components/contentContainer';
import {ImageSection} from '@/components/image-section';
import InternImage from '@/images/backgrounds/scores_1.webp';
import NextLink from 'next/link';
import {Text} from '../../../components/text';

export const metadata = {
  title: 'Intern',
  robots: 'noindex',
};

export default function Orchesterrichtlinien() {
  return (
    <ContentContainer>
      <h1 className="text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Orchesterrichtlinien
      </h1>
      <Text>
        Als Crescendianerin oder Crescendianer tragen wir alle zusammen zu einer
        angenehmen Probeatmosphäre und erfolgreichen Konzerten bei. Dabei sind
        uns folgende Grundsätze besonders wichtig:
      </Text>
      <h2 className="pb-2 pt-4 text-lg font-bold">Gemeinschaft</h2>
      <Text>
        Wir legen besonderen Wert auf ein angenehmes Miteinander und eine gute
        Beziehung zwischen den Crescendianern. Dies äussert sich besonders in
        folgenden Punkten:
      </Text>
      <ul className="list-disc pl-4">
        <li>
          Wichtiger als die technisch perfekte Beherrschung des Instruments ist
          die Freude an der Musik.
        </li>
        <li>
          Wir lassen unsere Registerkollegen nicht durch dauerndes Fehlen im
          Stich. Konkurrenzdenken ist fehl am Platz – wir lösen solche Probleme
          indem wir offen darüber reden.
        </li>
      </ul>
      <h2 className="pb-2 pt-4 text-lg font-bold">Konzerte</h2>
      <Text>
        An den Konzerten treten wir einheitlich auf und geben ein gutes Bild ab.
        Dazu gehört insbesondere:
      </Text>
      <ul className="list-disc pl-4">
        <li>
          Die Konzertkleidung ist schwarz: Dresscode elegant. Schultern und Knie
          sind bei Mitgliedern aller Geschlechter bedeckt. Schwarze Schuhe und
          Socken nicht vergessen!
        </li>
        <li>
          Die Noten befinden sich in den schwarzen Ordnern. Beim Singen hat
          jeder seine eigenen Noten in einem schwarzen Mäppchen oder Ordner.
        </li>
      </ul>
      <h2 className="pb-2 pt-4 text-lg font-bold">
        Zuverlässigkeit und Disziplin
      </h2>
      <ul className="list-disc pl-4">
        <li>
          <b>Bleistift</b> und <b>Radiergummi</b> gehören zur
          Orchesterausrüstung wie <b>Noten</b> und <b>Instrument</b> (es werden
          vom Registerführer Kontrollen durchgeführt, ob Käthis Anmerkungen
          notiert wurden!).
        </li>
        <li>
          In der Probe wird nicht gesprochen. In der Pause, in der Nachprobe
          darf und soll gesprochen werden.
        </li>
        <li>
          Du kommst vorbereitet an die Probe: Du hast die Noten ausgedruckt und
          dabei, du hast dir die Stücke angehört und die schwierigen Stellen
          geübt. Du kennst den Text der Lieder.
        </li>
        <li>
          Hast du einmal gefehlt, informierst du dich darüber, welche Stellen
          geprobt wurden und überträgst Notizen.
        </li>
        <li>
          Noten dindest du im{' '}
          <a
            href="https://drive.google.com/drive/folders/0ANE3t78ktMbtUk9PVA"
            className="text-primary-main hover:text-primary-darker"
          >
            Google Drive
          </a>
        </li>
        <li>
          Man muss sich vor jeder Probe an- oder abmelden. Dies ist, damit Käthi
          je nach Präsenz der Register die Probe planen kann.
          <b>Abmeldungen</b>
          <ul className="list-disc pl-4">
            <li>
              Probe bis <b>24h vor Probebeginn</b> in Spond
            </li>
            <li>
              Probetag und Probenwochenende <b>bis spätestens 3 Wochen</b> vor
              dem Ereignis
            </li>
            <li>
              Konzerte bis <b>spätestens 3 Monate</b> vor dem Ereignis{' '}
              <b>direkt an Käthi</b>.
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="pb-2 pt-4 text-lg font-bold">Kommunikation</h2>
      <ul className="list-disc pl-4">
        <li>
          Lies regelmässig deine Mails, da dies der übliche Kommunikationsweg
          ist.
        </li>
        <li>
          Falls du keine Mails bekommst - oder sich deine E-Mail Adresse ändert
          - schreibe bitte an{' '}
          <a
            href="florian.rohrer@jso-crescendo.ch"
            className="text-primary-main hover:text-primary-darker"
          >
            florian.rohrer@jso-crescendo.ch
          </a>
          , sonst ändert sich nichts!
        </li>
        <li>
          Du erscheinst pünktlich an die Probe. In der Regel trifft man sich um
          18:00 bei Gösslers, tauscht Neuigkeiten aus, hilft beim Aufstellen,
          packt sein Instrument aus und kurz vor 18:30 wird gestimmt.
        </li>
        <li>
          Falls du den Finger verstaucht hast, beim Zahnarzt warst o.ä., kommst
          du trotzdem an die Probe. Du hast die Noten dabei und notierst dir,
          was Käthi sagt.
        </li>
      </ul>
      <h2 className="pb-2 pt-4 text-lg font-bold">Administration</h2>
      <ul className="list-disc pl-4">
        <li>
          <b>Eintritt:</b> Falls du jemanden kennst, der gerne Mitglied im
          Crescendo werden möchte, kann diese(r) sich bei Käthi melden. Bei der
          ersten Probe erhält er oder sie ein{' '}
          <a
            href="https://club.spond.com/landing/signup/jsocrescendo"
            className="text-primary-main hover:text-primary-darker"
          >
            digitales Mitgliederformular
          </a>
          , das man ausfüllen kann.
        </li>
        <li>
          <b>Mitgliederbeitrag:</b> Jedes Jahr wird der Mitgliederbeitrag von
          Fr. 100.- und ein Unkostenbeitrag von 60.- fällig, welcher bis Ende
          Monat zu bezahlen ist. Dieser ist von allen Mitgliedern zu bezahlen,
          welche vor den Frühlingskonzerten Mitglied werden. Wird die Bezahlung
          versäumt, behält sich das Crescendo vor, den Umtrieben entsprechende
          Mahnspesen zu verrechnen.
        </li>
        <li>
          <b>Der Vorstand:</b> Seit der Generalversammlung im Januar 2017 sind
          wir nun ein Verein. Der Vorstand organisiert den Orchesterbetrieb, vom
          Mitgliedermanagement bis zur Konzertorganisation. Vorstandsmitglieder
          sind vom Mitgliederbeitrag befreit. Du möchtest auch gerne in den
          Vorstand und eine Aufgabe übernehmen? Dann melde dich bei unserem
          Präsident Andrea Schmid.
        </li>
        <li>
          <b>Austritt:</b> Austritte müssen schriftlich am Vorstand (
          <a
            href="mailto:vorstand@jso-crescendo.ch"
            className="text-primary-main hover:text-primary-darker"
          >
            vorstand@jso-crescendo.ch
          </a>
          ) mitgeteilt werden. Austritte sind grundsätzlich nur nach den
          Konzerten möglich.
        </li>
      </ul>
    </ContentContainer>
  );
}
