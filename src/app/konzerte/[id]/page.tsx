import {CONCERTS, PAST_CONCERTS} from '../../../data/concerts';

import {ContentContainer} from '../../../components/contentContainer';
import DateImage from '@/images/backgrounds/harp_sm.webp';
import Image from 'next/image';
import {ImageSection} from '../../../components/image-section';
import ProgrammImage from '@/images/backgrounds/scores_2_sm.webp';

const ALL_CONCERTS = CONCERTS.concat(PAST_CONCERTS);

export async function generateStaticParams() {
  return ALL_CONCERTS.map((c) => ({id: c.id}));
}

export default function KonzertPage({params}: {params: {id: string}}) {
  const {id} = params;
  const concert = ALL_CONCERTS.filter((c) => c.id === id)[0];
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        {concert.name}
      </h1>
      {concert.image_lg && (
        <Image
          src={concert.image_lg}
          alt=""
          aria-hidden="true"
          className="mx-auto max-h-screen rounded-lg object-contain"
          priority
        />
      )}
      {concert.program && (
        <ImageSection
          title="Programm"
          image={{src: ProgrammImage, alt: ''}}
          textOnly={false}
        >
          <ol className="list-disc pl-4">
            {concert.program.map((p) => (
              <li key={p.name}>
                <span className="font-serif text-lg">{p.name}</span>
                <span className="text-sm"> - {p.composer}</span>
              </li>
            ))}
          </ol>
        </ImageSection>
      )}
      {concert.dates && (
        <ImageSection
          title="Datum"
          image={{src: DateImage, alt: ''}}
          textOnly={false}
        >
          <ol className="list-disc pl-4">
            {concert.dates.map((d) => (
              <li key={d.dateISO}>
                <a href={d.googleMapsLink} className="hover:text-primary-main">
                  <span className="font-serif text-lg">{d.location}</span>
                  <span className="text-sm"> - {d.dateString}</span>
                </a>
              </li>
            ))}
          </ol>
        </ImageSection>
      )}
    </ContentContainer>
  );
}
