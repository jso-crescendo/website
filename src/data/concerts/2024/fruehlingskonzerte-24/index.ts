import FruehlingsKonzert24Image_sm from './assets/fruehlingskonzerte_24_flyer_sm.webp';
import FruehlingsKonzert24Image_lg from './assets/fruehlingskonzerte_24_plakat_md.webp';

import {Concert} from '../..';

export const FRUEHLINGSKONZERTE_24: Concert = {
  id: 'fruehlingskonzerte-24',
  name: 'Frühlingskonzerte',
  image_sm: FruehlingsKonzert24Image_sm,
  image_lg: FruehlingsKonzert24Image_lg,
  description: `
    Diesen Frühling wartet das Orchester mit einem feministischen Programm auf. 
    Da man die Musik von Komponistinnen noch viel zu wenig kennt, 
    möchten wir unsere Frühlingskonzerte ganz ihnen widmen.`,
  dates: [
    {
      location: 'Ref. Kirche Wädenswil',
      dateString: '13. April 2024 19:00 Uhr',
      dateISO: '2024-04-13T19:00:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/KwUfLkCvp9R41DZr9',
    },
    {
      location: 'Citykirche Offener St. Jakob Zürich',
      dateString: '14. April 2024 17:00 Uhr',
      dateISO: '2024-04-14T17:00:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/LA9De14EBjsb9SEy5',
    },
  ],
  program: [
    {
      name: 'Sinfonia Nr. 4 in h-Moll',
      composer: 'Emilie Mayer',
    },
    {
      name: 'Jewish Rhapsody',
      subtitle: 'für Klarinette und Orchester',
      composer: 'Käthi Schmid Lauber',
      subComposer: 'Solist: Wanja Staubli',
    },
    {
      name: 'Pioneer Dances',
      composer: 'Peggy Stuart Coolidge',
    },
    {
      name: 'Upon Your Heart',
      composer: 'Eleanor Daley',
    },
    {
      name: 'Neue Liebe, Neues Leben',
      composer: 'Fanny Hensel',
    },
    {
      name: 'Sing my child',
      composer: 'Sarah Quartel',
    },
    {
      name: 'March of the women',
      composer: 'Ethel Smyth',
    },
  ],
};
