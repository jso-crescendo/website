import Image_sm from './assets/flyer_sm.webp';

import {Concert} from '../..';

export const FRUEHLINGSKONZERTE_26: Concert = {
  id: 'fruehlingskonzerte-26',
  name: 'Frühlingskonzerte',
  subtitle: 'mit dem Klaus Egger Trio',
  image_sm: Image_sm,
  program: [
    {
      name: 'Freischütz - Ouvertüre',
      composer: 'Carl Maria von Weber',
    },
    {
      name: 'Enigma Variationen, Op. 36 - Auswahl',
      composer: 'Edward Elgar',
    },
    {
      name: 'Huapango',
      composer: 'José Pablo Moncayo',
    },
    {
      name: 'Tierra, Farewell, Endlich Liebi',
      composer: 'Klaus Egger Trio',
      subComposer: 'zusammen mit dem Klaus Egger Trio',
    },
    {
      name: 'Canción Sin Miedo',
      composer: 'Vivir Quintana',
    },
    {
      name: 'Earth Song',
      composer: 'Frank Ticheli',
    },
    {
      name: 'Chante en mon coeur pays aimé',
      composer: 'Pierre Kaelin',
    },
    {
      name: 'Du Fragsch, was i möcht singe',
      composer: 'Hansruedi Willisegger',
    },
  ],
  dates: [
    {
      location: 'Ref. Kirche Wädenswil',
      googleMapsLink: 'https://maps.app.goo.gl/KwUfLkCvp9R41DZr9',
      dateString: '11. April 2026 19:00 Uhr',
      dateISO: '2026-04-11T19:00:00+01:00',
    },
    {
      location: 'Citykirche Offener St. Jakob Zürich',
      googleMapsLink: 'https://maps.app.goo.gl/LA9De14EBjsb9SEy5',
      dateString: '12. April 2026 16:00 Uhr',
      dateISO: '2026-04-12T16:00:00+01:00',
    },
  ],
  quickLinks: [
    {
      url: '/fk-26/f',
      utmSource: 'flyer',
      utmCampaign: 'fk-26',
    },
    {
      url: '/fk-26/p',
      utmSource: 'plakat',
      utmCampaign: 'fk-26',
    },
    {
      url: '/fk-26',
      utmSource: 'none',
      utmCampaign: 'fk-26',
    },
  ],
};
