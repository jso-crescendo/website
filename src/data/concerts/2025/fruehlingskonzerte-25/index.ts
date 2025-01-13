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
  program: [
    {
      name: "The Hebrides, Op. 26 «Fingal's Cave»",
      composer: 'Felix Mendelssohn Bartholdy',
    },
    {
      name: 'Prince Igor: Polovtsian Dances',
      composer: 'Alexander Borodin',
    },
    {
      name: 'Weep, o mine eyes',
      composer: 'John Bennet',
    },
    {
      name: 'Gesungene Frühlingstrilogie',
      composer: 'Fanny Hensel, Käthi Schmid Lauber, Richard Strauss',
    },
    {
      name: 'And the Swallow',
      composer: 'Caroline Shaw',
    },
    {
      name: "Don't Stop Me Now",
      composer: 'Queen',
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
  ],
  quickLinks: [
    {
      url: '/fk-25/f',
      utmSource: 'flyer',
      utmCampaign: 'fk-25',
    },
    {
      url: '/fk-25/p',
      utmSource: 'plakat',
      utmCampaign: 'fk-25',
    },
    {
      url: '/fk-25',
      utmSource: 'none',
      utmCampaign: 'fk-25',
    },
  ],
  openGraphImage: {
    year: 2025,
    name: 'opengraph-image',
  },
};
