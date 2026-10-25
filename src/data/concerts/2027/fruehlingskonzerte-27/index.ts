import type {Concert} from '../..';
import Image_sm from './assets/flyer_sm.webp';

export const FRUEHLINGSKONZERTE_27: Concert = {
  id: 'fruehlingskonzerte-27',
  name: 'Frühlingskonzerte',
  image_sm: Image_sm,
  dates: [
    {
      location: 'Ref. Kirche Stäfa',
      dateString: '10. April 2027',
      dateISO: '2027-04-10',
    },
    {
      location: 'Kirche Oberstrass, Zürich',
      dateString: '11. April 2027',
      dateISO: '2027-04-11',
    },
  ],
  program: [
    {
      name: 'Karelia-Suite',
      composer: 'Jean Sibelius',
    },
    {
      name: 'Bränningar',
      composer: 'Helena Munktell',
    },
    {
      name: 'Så länge skutan kan gå',
      composer: 'E. Taube, G. Erikson',
    },
    {
      name: 'Ur drömliv',
      composer: 'Elfrida Andrée',
    },
    {
      name: 'Morgensang af Elverskud',
      composer: 'Niels W. Gade',
    },
    {
      name: 'The Seed',
      composer: 'Aurora',
    },
    {
      name: 'Klavierkonzert, A-Moll, 1.Satz',
      composer: 'Edward Grieg',
    },
    {
      name: 'Norwegian Rhapsody No.2',
      composer: 'Johan Svendsen',
    },
  ],
};
