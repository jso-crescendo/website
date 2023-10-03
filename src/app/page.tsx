import AboutUsImage from '@/images/2022_fruehling_blech.webp';
import BgImage from '@/images/2022_waedenswil_2.webp';
import {CONCERTS} from '../data/concerts';
import {ChevronDown} from '../icons/chevron-down';
import {ContentContainer} from '../components/contentContainer';
import Image from 'next/image';
import {ImageSection} from '@/components/image-section';
import KonzerteImage from '@/images/people/kaethi_2.webp';

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
          title="Herbst&shy;konzerte 2023"
          subtitle={CONCERTS[0].subtitle}
          image={{
            src: CONCERTS[0].image_lg!,
            alt: 'Flyer Herbstkonzerte 2023',
            vertical: true,
            priority: true,
          }}
          link={{
            href: '/konzerte/herbstkonzerte-23',
            text: 'Weitere Informationen',
          }}
        >
          {CONCERTS[0].description}
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
            vertical: true,
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
