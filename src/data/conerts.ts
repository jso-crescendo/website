import {StaticImageData} from 'next/image';

import HerbstKonzertImage from '@/images/2021_herbstkonzert_chor_2_sm.webp';
import FruehlingsKonzertImage from '@/images/flyer/flyer_fruehlingkonzert_2023_sm.webp';

export interface ConcertLocation {
  location: string;
  googleMapsLink?: string;
  dateString: string;
  dateISO: string;
}

export interface ProgramItem {
  name: string;
  composer: string;
}

export interface Concert {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  image: StaticImageData;
  dates?: ConcertLocation[];
  program?: ProgramItem[];
}

export const CONCERTS: Concert[] = [
  {
    id: 'fruehlingskonzerte-23',
    name: 'Frühlingskonzerte',
    image: FruehlingsKonzertImage,
    program: [
      {
        name: 'Il pirata - Sinfonia',
        composer: 'Vincenzo Bellini',
      },
      {
        name: 'Die Waldtaube',
        composer: 'Antonín Dvořák',
      },
      {
        name: 'Andante spianato et grande polonaise brillante, op. 22',
        composer: 'Frédéric Chopin',
      },
      {name: 'In a Persian Market', composer: 'Albert Ketèlbey'},
    ],
    dates: [
      {
        location: 'Pauluskirche Zürich',
        googleMapsLink: 'https://goo.gl/maps/hXNRNaqbhZSc4mmi7',
        dateString: '15. April 2023 19:00 Uhr',
        dateISO: '2023-04-15T19:00:00+01:00',
      },
      {
        location: 'Kirche Stäfa',
        googleMapsLink: 'https://goo.gl/maps/CPGs71oDxhFYHMa28',
        dateString: '16. April 2023 17:00 Uhr',
        dateISO: '2023-04-16T17:00:00+01:00',
      },
    ],
  },
  {
    id: 'herbstkonzerte-23',
    name: 'Herbstkonzerte',
    subtitle: 'mit dem Projektchor Canturicum',
    image: HerbstKonzertImage,
    program: [
      {
        name: 'Requiem',
        composer: 'Luigi Cherubini',
      },
    ],
    dates: [
      {
        location: 'Dreifaltigkeitskirche Tann',
        googleMapsLink: 'https://goo.gl/maps/vyJ5oA8gPmJXgQfSA',
        dateString: '3. November 2023',
        dateISO: '2023-11-03',
      },
      {
        location: 'Friedenskirche Olten',
        googleMapsLink: 'https://goo.gl/maps/uDNdqBQWePwmsLci9',
        dateString: '4. November 2023',
        dateISO: '2023-11-04',
      },
      {
        location: 'Wird noch bekannt gegeben',
        dateString: '5. November 2023',
        dateISO: '2023-11-05',
      },
    ],
  },
];
