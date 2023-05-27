import Image from 'next/image';

import {ImageSection} from '@/components/image-section';
import CanturicumImage from '@/images/2019_canturicum.webp';
import AboutUsImage from '@/images/2022_fruehling_blech.webp';
import BgImage from '@/images/2022_waedenswil_2.webp';
import FlyerImage from '@/images/flyer/2023_hgn250_lg.webp';
import KonzerteImage from '@/images/people/kaethi_2.webp';

import {ContentContainer} from '../components/contentContainer';
import {CONCERTS} from '../data/concerts';
import {ChevronDown} from '../icons/chevron-down';

export const metadata = {
  description:
    'Seit 34 Jahren begeistert das Jugendsinfonieorchester Crescendo unter der Leitung von Käthi Schmid Lauber mit seinen aussergewöhnlichen Konzerten.',
};

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={BgImage}
          alt="Hintergrundbild Orchester"
          priority
          quality={100}
          placeholder="blur"
          className="h-screen object-cover brightness-75"
        />
        <h1
          className="absolute left-1/2 top-1/2 font-serif text-4xl leading-normal text-background md:text-5xl lg:text-6xl"
          style={{transform: 'translate(-50%, -50%)'}}
        >
          <span className="block xl:hidden" aria-hidden="false">
            JSO Crescendo
          </span>
          <span className="hidden xl:block">
            Jugend&shy;sinfonie&shy;orchester
            <br />
            Crescendo
          </span>
        </h1>

        <a
          className="absolute left-1/2 top-3/4 h-24 w-24 rounded-full border-2 text-background hover:text-neutral-200"
          style={{transform: 'translate(-50%, -50%)'}}
          href="#content"
          aria-label="Zum Inhalt"
        >
          <ChevronDown />
        </a>
      </div>

      <ContentContainer id="content">
        <ImageSection
          title="Konzertreise nach Italien"
          video={{
            type: 'youtube',
            videoId: '92QqyF-wzqw',
            vertical: true
          }}
          link={{
            href: 'https://wemakeit.com/projects/jso-crescendo-italienreise',
            text: 'Jetzt unterstützen',
          }}
        >
          Liebe Unterstützende
          <br />
          Die diesjährige Konzertreise führt das JSO Crescendo Ende Juli für
          zwei Wochen nach Italien. Juhu! Nach einem fünf-tägigen Aufenthalt in
          Sorrent (Küstenstadt im Südwesten am Golf von Neapel) und zwei
          Konzerten fährt das Crescendo die Küste hinauf in die Hauptstadt
          (Rom), von wo aus es sich nach zwei Tagen und einem Konzert in die
          Toskana auf macht und während des sechs-tägigen Aufenthalts im Rahmen
          des Festival Orchestre Giovanili drei weitere Konzerte in Florenz,
          Montecatini Terme sowie Scarperia spielt. Natürlich werden die
          Crescendianer:innen neben den Aufführungen und Proben auch Zeit haben,
          Ausflüge zu unternehmen (bspw. nach Pompeji oder Pisa), die Gegenden
          zu erkunden oder auszuspannen.
          <br />
          <br />
          Um die Crescendianer:innen (oder deren private Sponsoren wie z.B.
          Eltern) finanziell zu entlasten, haben wir ein wemakeit-Projekt
          gestartet und bitten Sie nun diesem Link zu folgen und unter dem Motto
          &bdquo;grosse Ziele erreicht man, indem man viele kleine Schritte
          geht&rdquo; eine Zuwendung beizusteuern. Es besteht die Möglichkeit,
          kleinere &bdquo;Belohnungen&rdquo; durch die Spende zu erhalten. Ein
          Crescendo-Selfie aus Florenz, personalisierte Geburtstagsständchen
          oder einen Stick mit unserem Logo? Ist alles möglich!
          <br />
          <br />
          Herzlichen Dank!
        </ImageSection>
        <ImageSection
          title="Projektchor Canturicum"
          image={{
            src: CanturicumImage,
            alt: 'Projektchor Canturicum in der Tonhalle',
          }}
          link={{
            href: '/canturicum',
            text: 'An den Herbstkonzerten mitsingen',
          }}
        >
          Seit 2006 führt das JSO Crescendo regelmässig Chorwerke mit dem
          Projektchor Canturicum auf. Dieser Chor wurde von Käthi Schmid Lauber
          eigens dazu gegründet, im Mai 2006 die &quot;Messe solennelle&quot;
          von Ch. Gounod aufzuführen. Der Erfolg dieses Projektes, u.a. das
          Konzert in der ausverkauften Tonhalle, war so durchschlagend, dass
          2007, 2009, 2012, 2015, 2018 und 2019 weitere Projekte realisiert
          wurden. Es singen jeweils zwischen 80 und 120 Sänger:innen, aus den
          Singwochen, Eltern, Ehemalige und Freunde vom JSO Crescendo mit.
        </ImageSection>
        <ImageSection
          title="Fest&shy;konzert"
          image={{
            src: FlyerImage,
            alt: 'Flyer Festkonzerte 250 Jahre Hans Georg Nägeli',
          }}
          link={{
            href: 'https://www.hgn250.ch/veranstaltungen/festkonzert/',
            text: 'Weitere Informationen',
          }}
        >
          Am 26. Mai 2023 jährt sich der 250. Geburtstag des Verlegers,
          Komponisten, Chorleiters und Musikpädagogen Hans Georg Nägeli. Nägeli
          ist nicht nur der bedeutendste Kulturschaffende aus Wetzikon im
          Zürcher Oberland, sondern auch eine ebenso vielseitige wie schillernde
          Persönlichkeit, welche das europäische Musikwesen des frühen 19.
          Jahrhundert prägt. Zur Aufführung gelangen Chorlieder, die
          exemplarisch für Nägelis Schaffen und sein reiches Erbe stehen.
        </ImageSection>
        <ImageSection
          title="Über uns"
          image={{
            src: AboutUsImage,
            alt: 'Orchester in der Tonhalle. Käthi Schmid Lauber dirigiert',
            priority: true,
          }}
          link={{
            href: '/orchester',
            text: 'Mehr erfahren',
          }}
        >
          Seit 34 Jahren begeistert das Jugendsinfonieorchester Crescendo unter
          der Leitung von Käthi Schmid Lauber mit seinen aussergewöhnlichen
          Konzerten. Im Programm stehen dabei grosse Sinfonien, Solokonzerte und
          Filmmusik. Weit und breit einzigartig ist das JSO Crescendo insofern,
          dass es nicht nur ein Orchester, sondern auch ein Chor ist.
        </ImageSection>
        <ImageSection
          title="Nächste Konzerte"
          image={{
            src: KonzerteImage,
            alt: 'Orchester spielt in der Tonhalle Zürich.',
            vertical: true
          }}
          link={{
            href: '/konzerte',
            text: 'Weitere Konzerte',
          }}
          textOnly={false}
        >
          <div className="flex flex-col gap-4 pt-4">
            {CONCERTS.map((c) => (
              <a
                key={c.id}
                className="hover:text-primary-main"
                href={`/konzerte/${c.id}`}
              >
                <hgroup className="pb-2">
                  <h3 className="font-serif text-2xl">{c.name}</h3>
                  <p className="text-sm">{c.subtitle}</p>
                </hgroup>
                <ul className="pl-2">
                  {c.dates?.map((d) => (
                    <li key={d.dateISO} className="text-base">
                      {d.dateString} - {d.location}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </ImageSection>
      </ContentContainer>
    </>
  );
}
