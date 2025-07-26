import Image_sm from '@/images/griechenland_sm.webp';
import Plakat from './assets/programm_lg.webp';
import Flyer1 from './assets/flyer_1_lg.webp';
import Flyer2 from './assets/flyer_2_lg.webp';
import {Concert} from '../..';
import Image from 'next/image';

export const GRIECHENLAND_25: Concert = {
  id: 'konzertreise-griechenland-2025',
  name: 'Konzertreise nach Griechenland',
  image_sm: Image_sm,
  image_lg: Plakat,
  showOnHomepage: true,
  seoDescription:
    'Für zwei Wochen touren wir durch Griechenland! Erleben Sie sechs Konzerte auf der Peloponnes-Halbinsel und dem Festland.',
  descriptionElement: (
    <>
      <Image
        src={Flyer1}
        alt=""
        aria-hidden="true"
        className="mx-auto mb-6 max-h-screen rounded-lg object-contain"
        placeholder="blur"
      />
      <Image
        src={Flyer2}
        alt=""
        aria-hidden="true"
        className="mx-auto mb-6 max-h-screen rounded-lg object-contain"
        placeholder="blur"
      />
    </>
  ),
  lastChange: '2025-07-26T23:00:00+01:00',
  dates: [
    {
      location: 'Κάστρο Χλεμούτσι, KYLLINI',
      dateString: '29. Ιουλίου 2025 - 20:30',
      dateISO: '2025-07-29T20:30:00+01:00',
    },
    {
      location: 'Ελληνικό Ειδύλλιο, SELIANITIKA',
      dateString: '30. Ιουλίου 2025 - 20:30',
      dateISO: '2025-07-30T20:30:00+01:00',
    },
    {
      location: 'Άγγελος Σικελιανός, XYLOKASTRON',
      dateString: '31. Ιουλίου 2025 - 21:00',
      dateISO: '2025-07-31T21:00:00+01:00',
    },
    {
      location: 'Θεατράκι Βαλιμιτίκων, VALIMITIKA',
      dateString: '01. Αυγούστου 2025 - 20:30',
      dateISO: '2025-08-01T20:30:00+01:00',
    },
    {
      location: 'Διεύθυνση Περιφερειακής Ενότητας Βοιωτίας, LIVADEIA',
      dateString: '04. Αυγούστου 2025 - 20:30',
      dateISO: '2025-08-04T20:30:00+01:00',
    },
    {
      location: 'Δημοτικό Σχολείο «Χαρίσιος Μούκας», KOZANI',
      dateString: '06. Αυγούστου 2025 - 20:30',
      dateISO: '2025-08-06T20:30:00+01:00',
    },
  ],
  program: [
    {
      name: 'Die Hebriden Op.26',
      composer: 'Felix Mendelssohn Bartholdy',
    },
    {
      name: 'Polowetzer Tänze aus «Fürst Igor»',
      composer: 'Alexander Borodin',
    },
    {
      name: 'The Cliffs of Moher',
      composer: 'Mario Bürki',
      subComposer: 'Arrangiert: Patrick Müller',
    },
    {
      name: 'Bacchanale aus «Samson et Dalila»',
      composer: 'Camille Saint-Saëns',
    },
    {
      name: 'Konzert für Klavier und Orchester Nr. 1 in C-Dur',
      composer: 'Ludwig van Beethoven',
    },
    {
      name: 'Mamma Mia Medley',
      composer: 'ABBA arr. Roy Phillippe',
    },
  ],
};
