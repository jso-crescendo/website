import AboutUsImage from '@/images/2022_fruehling_blech.webp';
import BgImage from '@/images/2022_waedenswil_2.webp';
import Griechenland from '@/images/griechenland_sm.webp';
import {CONCERTS} from '../data/concerts';
import {ChevronDown} from '../icons/chevron-down';
import {ContentContainer} from '../components/contentContainer';
import Image from 'next/image';
import {ImageSection} from '@/components/image-section';
import KonzerteImage from '@/images/people/kaethi_2.webp';

export const metadata = {
  description:
    'Seit 35 Jahren begeistert das Jugendsinfonieorchester Crescendo unter der Leitung von Käthi Schmid Lauber mit seinen aussergewöhnlichen Konzerten.',
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
          className="absolute left-1/2 top-3/4 size-24 rounded-full border-2 text-background hover:text-neutral-200"
          style={{transform: 'translate(-50%, -50%)'}}
          href="#content"
          aria-label="Zum Inhalt"
        >
          <ChevronDown />
        </a>
      </div>

      <ContentContainer id="content">
        {CONCERTS.filter((c) => c.showOnHomepage).map((c) => (
          <ImageSection
            key={c.id}
            title={c.name}
            image={{
              src: c.image_lg!,
              alt: `Plakat für ${c.name}`,
              priority: true,
              vertical: true,
              fit: true,
            }}
            link={{
              href: '/konzerte/' + c.id,
              text: 'Mehr erfahren',
            }}
          >
            {c.seoDescription}
          </ImageSection>
        ))}

        <ImageSection
          title="Konzertreise nach Griechenland"
          video={{
            type: 'youtube',
            videoId: 'ZY2RuXYF-Pc',
            vertical: false,
          }}
          link={{
            href: '/griechenland',
            text: 'Zum Crowdfunding',
            target: '_blank',
          }}
        >
          Diesen Sommer geht es für uns nach Griechenland & unser
          Konzertreisekässeli braucht Ihre Hilfe!
          <br />
          Haben Sie schon immer davon geträumt, eine Gesangsstunde bei Käthi zu
          nehmen? Oder haben Sie ein Liederwunsch für unsere nächsten Konzerte?
          Vielleicht möchten Sie lieber eine handgeschriebene Postkarte aus
          Griechenland erhalten - oder einmal selbst das Crescendo dirigieren?
          <br />
          Jetzt ist Ihre Chance! Machen Sie an unserem <b>Crowdfunding</b> bis
          am <b>01.06.2025</b> mit und sichern Sie sich exklusive Geschenke und
          Mitbringsel aus Griechenland - nur solange der Vorrat reicht!
        </ImageSection>

        <ImageSection
          title="Über uns"
          image={{
            src: AboutUsImage,
            alt: 'Orchester in der Tonhalle. Käthi Schmid Lauber dirigiert',
            priority: false,
          }}
          link={{
            href: '/orchester',
            text: 'Weitere Informationen',
          }}
        >
          Seit 35 Jahren begeistert das Jugendsinfonieorchester Crescendo unter
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
            {CONCERTS.slice(0, Math.min(CONCERTS.length, 3)).map((c) => (
              <a
                key={c.id}
                className="hover:text-primary-main"
                href={
                  c.description || c.descriptionElement
                    ? `/konzerte/${c.id}`
                    : '/konzerte'
                }
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
