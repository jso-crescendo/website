import AboutUsImage from '@/images/2022_fruehling_blech_sm.webp';
import BgImage from '@/images/2022_waedenswil_2_xl.webp';
import {CONCERTS} from '../data/concerts';
import CanturicumImage from '@/images/2019_canturicum_md.webp';
import {ChevronDown} from '../icons/chevron-down';
import {ContentContainer} from '../components/contentContainer';
import FlyerImage from '@/images/flyer/2023_hgn250_lg.webp';
import Image from 'next/image';
import {ImageSection} from '@/components/image-section';
import KonzerteImage from '@/images/people/kaethi_2_sm.webp';

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src={BgImage}
          alt="Hintergrundbild Orchester"
          priority
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
          className="absolute left-1/2 top-3/4 h-24 w-24 rounded-full border-2 border-double text-background hover:text-neutral-200"
          style={{transform: 'translate(-50%, -50%)'}}
          href="#content"
        >
          <ChevronDown />
        </a>
      </div>

      <ContentContainer id="content">
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
            href: 'https://www.hgn250.ch/',
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
