import Image_sm from './assets/herbstkonzert_24_sm.webp';

import {Concert} from '../..';

export const HERBSTKONZERT_24: Concert = {
  id: 'herbstkonzert-24',
  name: 'Herbstkonzerte',
  lastChange: '2024-07-07T18:00:00+01:00',
  image_sm: Image_sm,
  dates: [
    {
      location: 'Dreifaltigkeitskirche Tann',
      googleMapsLink: 'https://goo.gl/maps/vyJ5oA8gPmJXgQfSA',
      dateString: '1. November 2024 20:00 Uhr',
      dateISO: '2024-11-01T20:00:00+01:00',
    },
    {
      location: 'Leonhardskirche Basel',
      googleMapsLink: 'https://maps.app.goo.gl/kxB52LrYVz1JvQFf8',
      dateString: '2. November 2024 19:00 Uhr',
      dateISO: '2024-11-02T19:00:00+01:00',
    },
    {
      location: 'Kirche Oberstrass Zürich',
      googleMapsLink: 'https://maps.app.goo.gl/FsYcETE9jSNydGJFA',
      dateString: '3. November 2024 16:00 Uhr',
      dateISO: '2024-11-03T16:00:00+01:00',
    },
  ],
  program: [
    {
      name: 'Sinfonie Nr. 2 A-Dur',
      composer: 'Vasily Kalinnikov',
    },
    {
      name: 'Walzer aus Maskerade',
      composer: 'Aram Khachaturian',
    },
    {
      name: 'Sinfonische Suite aus Herr der Ringe',
      composer: 'Howard Shore arr. John Whitney',
    },
    {
      name: 'Bawo Thixo Somandla',
      composer: 'traditional Xhosa',
    },
    {
      name: 'Glow',
      composer: 'Eric Whitacre',
    },
    {
      name: 'The Rose',
      composer: 'Ola Gjeilo',
    },
    {
      name: 'Warum willst du andre fragen',
      composer: 'Clara Schumann',
    },
  ],
};
