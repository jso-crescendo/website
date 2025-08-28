import Image_sm from './assets/herbstkonzert_25_sm.webp';

import {Concert} from '../..';

export const HERBSTKONZERTE_25: Concert = {
  id: 'herbstkonzerte-25',
  name: 'Herbstkonzerte',
  image_sm: Image_sm,
  lastChange: '2025-08-29T21:00:00+01:00',
  program: [
    {
      name: 'Sinfonie No. 9 "Aus der neuen Welt"',
      composer: 'Antonin Dvorak',
    },
    {
      name: 'Cellokonzert in F-Dur',
      composer: 'Marie Jaëll',
    },
  ],
  dates: [
    {
      location: 'Ref. Kirche Hinwil',
      dateString: '31. Oktober 2025 20:00 Uhr',
      dateISO: '2025-10-31T20:00:00+01:00',
    },
    {
      location: 'Ref. Kirche St. Johann Schaffhausen',
      dateString: '1. November 2025 19:00 Uhr',
      dateISO: '2025-11-01T19:00:00+01:00',
    },
    {
      location: 'Zürich – Kirche Oberstrass',
      dateString: '2. November 2025 16:00 Uhr',
      dateISO: '2025-11-02T16:00:00+01:00',
    },
  ],
};
