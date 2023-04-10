import Image from 'next/image';

import {LinkButton} from '@/components/link-button';
import FlyerImage from '@/images/flyer/flyer_fruehlingskonzert_2023.webp';

export default function Home() {
  return (
    <>
      <h1 className="font-serif text-4xl leading-normal md:text-5xl lg:text-6xl">
        Jugendsinfonieorchester Crescendo
      </h1>

      <section className="flex flex-col gap-8 pt-8 md:h-screen md:flex-row">
        <Image
          src={FlyerImage}
          alt="Flyer Frühlingskonzerte"
          className="w-full object-contain md:w-1/2"
        />
        <div className="my-auto w-full md:w-1/2">
          <h2 className="font-serif text-5xl">Konzerte</h2>
          <p className="text-justify">
            Das Jugendsinfonieorchester Crescendo präsentiert ein
            abwechslungsreiches Konzertprogramm in der Pauluskirche Zürich am
            15. April und in der Ref. Kirche Stäfa am 16. April. Das Programm
            umfasst Werke von Vincenzo Bellini, Antonín Dvořák, N. Vonmoss, F.
            Mendelssohn und F. Chopin, sowie einen Solopart von Jan Zwahlen am
            Klavier. Das Konzert wird von Käthi Schmid Lauber dirigiert und
            zeichnet sich durch die Gesangsdarbietungen der
            Orchestermusiker:innen aus, darunter auch rätoromanische Abendlieder
            und ein wehmütiges Liebeslied.
          </p>
          <LinkButton type="primary" href="/konzerte" text="Weitere Konzerte" className='float-right' />
        </div>
      </section>
    </>
  );
}
