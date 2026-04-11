import Image_sm from './assets/weihnachtsgottesdienst_sm.webp';

import {Concert} from '../..';

export const WEIHNACHTSGOTTESDIENST_24: Concert = {
  id: 'weihnachtsgottesdienst-24',
  name: 'Weihnachtsgottesdienst',
  subtitle: 'mit der Kantorei Wetzikon',
  image_sm: Image_sm,
  dates: [
    {
      location: 'Ref. Kirche Wetzikon',
      dateString: '25. Dezember 2023 10:00 Uhr',
      dateISO: '2024-12-25T10:00:00+01:00',
    },
  ],
  program: [
    {
      name: 'Weihnachtsoratorium',
      composer: 'Karl Heinrich Barth',
    },
  ],
};
