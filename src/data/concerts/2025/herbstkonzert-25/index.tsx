import Image_sm from './assets/herbstkonzert_25_sm.webp';

import {Concert} from '../..';

export const HERBSTKONZERTE_25: Concert = {
  id: 'herbstkonzert-25',
  name: 'Herbstkonzerte',
  image_sm: Image_sm,
  lastChange: '2025-04-12T15:00:00+01:00',
  dates: [
    {
      location: 'Hinwil',
      dateString: '31. Oktober 2025',
      dateISO: '2025-10-31T00:00:00+01:00',
    },
    {
      location: 'Wird noch bekannt gegeben',
      dateString: '1. November 2025',
      dateISO: '2025-11-01T00:00:00+01:00',
    },
    {
      location: 'Zürich – Kirche Oberstrass',
      dateString: '2. November 2025',
      dateISO: '2025-11-02T00:00:00+01:00',
    },
  ],
};
