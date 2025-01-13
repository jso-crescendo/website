import {
  ALL_CONCERTS,
  PAST_CONCERTS,
  Concert,
  getConcert,
  isPastConcert,
} from '@/data/concerts';
import {Event, WithContext} from 'schema-dts';

import {ConcertLocationList} from '@/components/concert-location-list';
import {ContentContainer} from '@/components/contentContainer';
import DateImage from '@/images/backgrounds/harp.webp';
import Image from 'next/image';
import {ImageSection} from '@/components/image-section';
import ProgrammImage from '@/images/backgrounds/scores_2.webp';
import {Text} from '@/components/text';
import {notFound} from 'next/navigation';

const getJSONLD = ({
  name,
  description,
  image_sm,
  image_lg,
  dates,
}: Concert): WithContext<Event> => ({
  '@context': 'https://schema.org',
  '@type': 'MusicEvent',
  name: `JSO Crescendo ${name}`,
  description,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  startDate: dates?.find((_) => true)?.dateISO,
  location: dates?.find((_) => true)?.location,
  eventSchedule: dates?.map((d) => ({
    '@type': 'Schedule',
    startDate: d.dateISO,
  })),
  image: image_lg ? [image_lg.src, image_sm.src] : [image_sm.src],
  performer: {
    '@type': 'PerformingGroup',
    name: 'JSO Crescendo',
    url: 'https://jso-crescendo.ch',
  },
  organizer: {
    '@type': 'Organization',
    name: 'JSO Crescendo',
    url: 'https://jso-crescendo.ch',
  },
  isAccessibleForFree: true,
});

export async function generateStaticParams() {
  return ALL_CONCERTS.map((c) => ({id: c.id}));
}

export async function generateMetadata(props: {params: Promise<{id: string}>}) {
  const params = await props.params;
  const concert = getConcert(params.id);
  if (!concert) {
    notFound();
  }

  const {name, seoDescription, description} = concert;
  const isPast = isPastConcert(params.id);
  return {
    title: name,
    description: seoDescription || description,
    robots: isPast ? 'noindex' : undefined,
  };
}

export default async function KonzertPage(props: {
  params: Promise<{id: string}>;
}) {
  const params = await props.params;
  const {id} = params;
  const concert = getConcert(id);
  if (!concert) {
    notFound();
  }

  return (
    <ContentContainer>
      <hgroup className="mb-8 text-center leading-normal">
        <h1 className=" font-serif text-3xl md:text-4xl lg:text-5xl">
          {concert.name}
        </h1>
        {concert.subtitle && (
          <p className="text-sm md:text-lg">{concert.subtitle}</p>
        )}
      </hgroup>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(getJSONLD(concert))}}
      />
      {concert.image_lg && (
        <Image
          src={concert.image_lg}
          alt=""
          aria-hidden="true"
          className="mx-auto mb-6 max-h-screen rounded-lg object-contain"
          priority
          placeholder="blur"
        />
      )}
      {concert.description && <Text>{concert.description}</Text>}
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
          title={concert.dates.length > 1 ? 'Daten' : 'Datum'}
          image={{src: DateImage, alt: ''}}
          textOnly={false}
        >
          <ConcertLocationList locations={concert.dates} />
        </ImageSection>
      )}
    </ContentContainer>
  );
}
