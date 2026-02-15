import Image_sm from './assets/flyer_sm.webp';

import {Concert} from '../..';

export const HERBSTKONZERTE_26: Concert = {
  id: 'herbstkonzerte-26',
  name: 'Herbstkonzerte',
  subtitle: 'mit dem Projektchor Canturicum',
  image_sm: Image_sm,
  description: `
    Intresse mitzusingen? Jetzt voranmelden!
  `,
  program: [
    {
      name: 'Jephtha und seine Tochter',
      composer: 'Carl Martin Reinthaler',
    },
  ],
  dates: [
    {
      location: 'Friedenskirche Olten',
      googleMapsLink: 'https://goo.gl/maps/uDNdqBQWePwmsLci9',
      dateString: '30. Oktober 2026 20:00 Uhr',
      dateISO: '2026-10-30T20:00:00+01:00',
    },
    {
      location: 'Dreifaltigkeitskirche Tann',
      googleMapsLink: 'https://goo.gl/maps/vyJ5oA8gPmJXgQfSA',
      dateString: '31. Oktober 2026 19:00 Uhr',
      dateISO: '2026-10-31T19:00:00+01:00',
    },
    {
      location: 'St. Peter Zürich',
      googleMapsLink: 'https://goo.gl/maps/x7tZvHs3fYddvpvy9',
      dateString: '1. November 2026 16.00 Uhr',
      dateISO: '2026-11-01T16:00:00+01:00',
    },
  ],
  quickLinks: [
    {
      url: '/hk-26/f',
      utmSource: 'flyer',
      utmCampaign: 'hk-26',
    },
    {
      url: '/hk-26/p',
      utmSource: 'plakat',
      utmCampaign: 'hk-26',
    },
    {
      url: '/hk-26',
      utmSource: 'none',
      utmCampaign: 'hk-26',
    },
  ],
};
