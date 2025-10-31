import KaethiImage from '@/images/people/kaethi.webp';
import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';

export const KaethiSection: React.FC = () => (
  <ImageSection
    image={{
      src: KaethiImage,
      alt: 'Portrait Foto von Käthi Schmid Lauber',
      vertical: true,
    }}
    title="Käthi Schmid Lauber"
    subtitle="Dirigentin"
    textOnly={false}
  >
    <Text className="mb-4">
      Käthi Schmid Lauber studierte an der Schola Cantorum Basiliensis Violine
      in alter Mensur bei Jaap Schröder, Viola da Gamba bei Jor- di Savall und
      Gesang bei Richard Levitt. 1985 schloss sie ihre Studien mit dem Diplom
      für Alte Musik im Fach Violine und Viola ab.
    </Text>
    <Text className="mb-4">
      Nach Dirigierstudien bei Sylvia Ca- duff (LU) und Karl Scheuber (ZH)
      belegte sie drei Jahre den Nach- diplomkurs in Orchesterdirigat bei Daniel
      Schmid an der HMT Zü- rich. Neben dem JSO Crescendo dirigiert Käthi Schmid
      Lauber das Kindersinfonie-Orchester in Wetzikon, den Projektchor
      «Canturicum», die Kantorei Wetzikon und den Kinderchor Kantorini. Zweimal
      jährlich leitet sie die Singwochen in Quarten, SG.
    </Text>
    <Text>
      Dazu ist sie auch als Komponistin tätig: In ihrem Oeuvre fnden sich Solo-
      konzerte mit sinfonischer Orchesterbegleitung, Musicals und Chorwerke.
      Ihre Lehrtätigkeit in den Instrumenten Violine, Viola, Viola da Gamba und
      Kontrabass übt sie an der Musikschule Adliswil-Langnau aus und
      unterrichtet «Klassenmusizieren» an der Musikschule Konservatorium Zürich
      (MKZ). Das Unmögliche möglich zu machen ist das, was sie an der Arbeit mit
      Jugendlichen immer wieder neu fasziniert.
    </Text>
  </ImageSection>
);
