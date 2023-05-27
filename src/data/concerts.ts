import {StaticImageData} from 'next/image';

import KonzertreiseImage_sm from '@/images/2019_konzertreise_bulgarien_md.webp';
import HerbstKonzertImage_sm from '@/images/2021_herbstkonzert_chor_2_sm.webp';
import Naegeli_lg from '@/images/flyer/2023_hgn250_lg.webp';
import Naegeli_sm from '@/images/flyer/2023_hgn250_md.webp';
import FruehlingsKonzertImage_sm from '@/images/flyer/flyer_fruehlingkonzert_2023_sm.webp';
import FruehlingsKonzertImage_lg from '@/images/flyer/flyer_fruehlingskonzert_2023.webp';

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
  image_sm: StaticImageData;
  image_lg?: StaticImageData;
  dates?: ConcertLocation[];
  program?: ProgramItem[];
}

export const CONCERTS: Concert[] = [
  {
    id: 'konzertreise-23',
    name: 'Konzertreise Italien',
    description: `
    Die diesjährige Konzertreise führt das JSO Crescendo Ende Juli für zwei Wochen nach Italien. Juhu! Nach einem fünf-tägigen Aufenthalt in Sorrent (Küstenstadt im Südwesten am Golf von Neapel) und zwei Konzerten fährt das Crescendo die Küste hinauf in die Hauptstadt (Rom), von wo aus es sich nach zwei Tagen und einem Konzert in die Toskana auf macht und während des sechs-tägigen Aufenthalts im Rahmen des Festival Orchestre Giovanili drei weitere Konzerte in Florenz, Montecatini Terme sowie Scarperia spielt. Natürlich werden die Crescendianer:innen neben den Aufführungen und Proben auch Zeit haben, Ausflüge zu unternehmen (bspw. nach Pompeji oder Pisa), die Gegenden zu erkunden oder auszuspannen.
    `,
    image_sm: KonzertreiseImage_sm,
    dates: [
      {
        location: 'Frascati',
        dateString: '30. Juli 2023',
        dateISO: '2023-07-30',
      },
      {
        location: 'Florenz',
        dateString: '2. August: 2023',
        dateISO: '2023-08-02',
      },
      {
        location: 'Montecatini Terme Tettucio',
        dateString: '3. August: 2023',
        dateISO: '2023-08-03',
      },
      {
        location: 'Scarperia',
        dateString: '5. August: 2023',
        dateISO: '2023-08-05',
      },
    ],
  },
  {
    id: 'herbstkonzerte-23',
    name: 'Herbstkonzerte',
    subtitle: 'mit dem Projektchor Canturicum',
    image_sm: HerbstKonzertImage_sm,
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

export const PAST_CONCERTS: Concert[] = [
  {
    id: 'hgn-250',
    name: 'Festkonzert',
    subtitle: '250 Jahre Hans Georg Nägeli',
    description:
      'Am 26. Mai 2023 jährt sich der 250. Geburtstag des Verlegers, Komponisten, Chorleiters und Musikpädagogen Hans Georg Nägeli. Nägeli ist nicht nur der bedeutendste Kulturschaffende aus Wetzikon im Zürcher Oberland, sondern auch eine ebenso vielseitige wie schillernde Persönlichkeit, welche das europäische Musikwesen des frühen 19. Jahrhundert prägt. Zur Aufführung gelangen Chorlieder, die exemplarisch für Nägelis Schaffen und sein reiches Erbe stehen.',
    image_sm: Naegeli_sm,
    image_lg: Naegeli_lg,
    dates: [
      {
        dateISO: '2023-05-26T19:30:00+01:00',
        dateString: '26. Mai 2023 19:30 Uhr',
        location: 'Tonhalle Zürich',
        googleMapsLink: 'https://goo.gl/maps/GTVVQLGhoSFmbBVaA',
      },
    ],
  },
  {
    id: 'fruehlingskonzerte-23',
    name: 'Frühlingskonzerte',
    image_sm: FruehlingsKonzertImage_sm,
    image_lg: FruehlingsKonzertImage_lg,
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
];
