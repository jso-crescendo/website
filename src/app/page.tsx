import Image from 'next/image';

import {ImageSection} from '@/components/image-section';
import KonzerteImage from '@/images/2019_jubilaeumskonzert_tonhalle.jpg';
import AboutUsImage from '@/images/2022_fruehling_blech.jpg';
import FlyerImage from '@/images/flyer/flyer_fruehlingskonzert_2023.webp';

import {CONCERTS} from '../data/conerts';

export default function Home() {
  return (
    <>
      <h1 className="font-serif text-4xl leading-normal md:text-5xl lg:text-6xl">
        Jugend&shy;sinfonie&shy;orchester Crescendo
      </h1>

      <ImageSection
        title="Frühlings&shy;konzerte"
        image={{src: FlyerImage, alt: 'Flyer FrühlingsKonzerte'}}
        link={{
          href: '/konzerte/frühlingskonzerte-23',
          text: 'Weitere Informationen',
        }}
      >
        Das Jugendsinfonieorchester Crescendo präsentiert ein
        abwechslungsreiches Konzertprogramm in der Pauluskirche Zürich am 15.
        April und in der Ref. Kirche Stäfa am 16. April. Das Programm umfasst
        Werke von Vincenzo Bellini, Antonín Dvořák, N. Vonmoss, F. Mendelssohn
        und F. Chopin, sowie einen Solopart von Jan Zwahlen am Klavier. Das
        Konzert wird von Käthi Schmid Lauber dirigiert und zeichnet sich durch
        die Gesangsdarbietungen der Orchestermusiker:innen aus, darunter auch
        rätoromanische Abendlieder und ein wehmütiges Liebeslied.
      </ImageSection>
      <ImageSection
        title="Über uns"
        image={{
          src: AboutUsImage,
          alt: 'Orchester in der Tonhalle. Käthi Schmid Lauber dirigiert',
        }}
        link={{
          href: '/orcherster',
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
        {CONCERTS.map((c) => (
          <a key={c.id} className='pb-4 hover:text-primary-main' href={`/konzerte/${c.id}`}>
            <hgroup className='pb-2'>
              <h3 className='font-serif text-2xl'>{c.name}</h3>
              <p className='text-sm'>{c.subtitle}</p>
            </hgroup>
            <ul className='pl-2'>
              {c.dates?.map((d) => (
                <li key={d.dateISO} className='text-base'>
                  {d.dateString} - {d.location}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </ImageSection>
    </>
  );
}
