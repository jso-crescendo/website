import FruehlingsKonzert23Image_lg from './assets/flyer_fruehlingskonzert_2023.webp';
import FruehlingsKonzert23Image_sm from './assets/flyer_fruehlingkonzert_2023_sm.webp';

import {Concert} from '../..';

export const FRUEHLINGSKONZERTE_23: Concert = {
  id: 'fruehlingskonzerte-23',
  name: 'Frühlingskonzerte',
  image_sm: FruehlingsKonzert23Image_sm,
  image_lg: FruehlingsKonzert23Image_lg,
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
};
