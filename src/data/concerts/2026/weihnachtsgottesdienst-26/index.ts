import type {Concert} from '../..';
import Image_sm from './assets/weihnachtsgottesdienst_sm.webp';

export const WEIHNACHTSGOTTESDIENST_26: Concert = {
  id: 'weihnachtsgottesdienst-26',
  name: 'Weihnachtsgottesdienst',
  subtitle: 'mit der Kantorei Wetzikon',
  image_sm: Image_sm,
  program: [
    {
      name: 'Pastoralmesse',
      composer: 'František Max Kníže',
    },
  ],
  dates: [
    {
      location: 'Ref. Kirche Wetzikon',
      dateString: '25. Dezember 2026 10:00 Uhr',
      dateISO: '2026-12-25T10:00:00+01:00',
    },
  ],
};
