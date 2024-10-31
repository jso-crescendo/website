import FruehlingsKonzert25Image_sm from './assets/flyer_placeholder_sm.webp';

import {Concert} from '../..';

export const FRUEHLINGSKONZERTE_25: Concert = {
  id: 'fruehlingskonzerte-25',
  name: 'Frühlingskonzerte',
  image_sm: FruehlingsKonzert25Image_sm,
  dates: [
    {
      location: 'Reformierte Kirche Wald ZH',
      googleMapsLink: 'https://maps.app.goo.gl/VKTByMmDQr5PftFu8',
      dateString: '12. April 2025 19:00 Uhr',
      dateISO: '2025-04-12T19:00:00+01:00',
    },
    {
      location: 'Citykirche Offener St. Jakob Zürich',
      googleMapsLink: 'https://maps.app.goo.gl/LA9De14EBjsb9SEy5',
      dateString: '13. April 2025 16:00 Uhr',
      dateISO: '2025-04-13T16:00:00+01:00',
    },
  ],
};
