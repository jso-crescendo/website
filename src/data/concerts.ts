import FruehlingsKonzertImage_lg from '@/images/flyer/flyer_fruehlingskonzert_2023.webp';
import FruehlingsKonzertImage_sm from '@/images/flyer/flyer_fruehlingkonzert_2023_sm.webp';
import HerbstKonzertImage_sm from '@/images/2021_herbstkonzert_chor_2.webp';
import Naegeli_lg from '@/images/flyer/2023_hgn250_lg.webp';
import Naegeli_sm from '@/images/flyer/2023_hgn250_md.webp';
import {StaticImageData} from 'next/image';

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
  /**
   * used for sitemap. ISO-String
   */
  lastChange?: string;
  image_sm: StaticImageData;
  image_lg?: StaticImageData;
  dates?: ConcertLocation[];
  program?: ProgramItem[];
}

export const CONCERTS: Concert[] = [
  {
    id: 'herbstkonzerte-23',
    lastChange: '2023-06-12T00:00:00.000Z',
    name: 'Herbstkonzerte',
    subtitle: 'mit dem Projektchor Canturicum',
    description:
      'Seit 2006 führt das JSO Crescendo regelmässig Chorwerke mit dem Projektchor Canturicum auf. Dieser Chor wurde von Käthi Schmid Lauber eigens dazu gegründet, im Mai 2006 die "Messe solennelle" von Ch. Gounod aufzuführen. Der Erfolg dieses Projektes, u.a. das Konzert in der ausverkauften Tonhalle, war so durchschlagend, dass 2007, 2009, 2012, 2015, 2018 und 2019 weitere Projekte realisiert wurden. Es singen jeweils zwischen 80 und 120 Sänger:innen, aus den Singwochen, Eltern, Ehemalige und Freunde vom JSO Crescendo mit.',
    image_sm: HerbstKonzertImage_sm,
    program: [
      {
        name: 'Requiem',
        composer: 'Luigi Cherubini',
      },
      {
        name: '2. Satz aus der 7. Sinfonie',
        composer: 'Ludwig van Beethoven'
      },
      {
        name: 'Herr, wenn ich nur dich habe',
        composer: 'Heinrich Schütz'
      }
    ],
    dates: [
      {
        location: 'Friedenskirche Olten',
        googleMapsLink: 'https://goo.gl/maps/uDNdqBQWePwmsLci9',
        dateString: '3. November 2023 20:00 Uhr',
        dateISO: '2023-11-03T20:00:00+01:00',
      },
      {
        location: 'St. Peter Zürich',
        googleMapsLink: 'https://goo.gl/maps/x7tZvHs3fYddvpvy9',
        dateString: '4. November 2023 20:00 Uhr',
        dateISO: '2023-11-04T20:00:00+01:00',
      },
      {
        location: 'Dreifaltigkeitskirche Tann',
        googleMapsLink: 'https://goo.gl/maps/vyJ5oA8gPmJXgQfSA',
        dateString: '5. November 2023 16:00 Uhr',
        dateISO: '2023-11-05T16:00:00+01:00',
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
