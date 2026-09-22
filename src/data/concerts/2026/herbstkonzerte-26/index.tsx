import type {Concert} from '../..';
import Image_sm from './assets/flyer_sm.webp';
import Image_lg from './assets/flyer_lg.webp';

export const HERBSTKONZERTE_26: Concert = {
  id: 'herbstkonzerte-26',
  name: 'Herbstkonzerte',
  subtitle: 'mit dem Projektchor Canturicum',
  image_sm: Image_sm,
  image_lg: Image_lg,
  seoDescription:
    'Das dramatische Oratorium «Jephtha und seine Tochter» von Carl Martin Reinthaler galt lange als vergessen: Anders als in der biblischen Vorlage muss Jephthas Tochter am Ende nicht sterben – das Werk klingt in einem festlichen Lobgesang aus. Zum 20-jährigen Jubiläum des Projektchors Canturicum bringen das JSO Crescendo, Canturicum und die Kantorei Wetzikon das Werk unter der Leitung von Käthi Schmid Lauber auf die Bühne – voraussichtlich in einer schweizerischen Erstaufführung.',
  descriptionElement: <></>,
  showOnHomepage: true,
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
      dateString: '1. November 2026 17:00 Uhr',
      dateISO: '2026-11-01T17:00:00+01:00',
    },
  ],
  quickLinks: [
    {
      url: '/hk-26',
      utmSource: 'none',
      utmCampaign: 'hk-26',
    },
  ],
};
