import type {Concert} from '../..';
import Image_sm from './assets/flyer_sm.webp';
import Image_lg from './assets/flyer_lg.webp';

export const BREIL_GLISCHA_26: Concert = {
  id: 'breil-glischa-26',
  name: 'JSO Crescendo',
  subtitle: 'Concert en glisch candeira / Konzert im Kerzenschein',
  image_sm: Image_sm,
  image_lg: Image_lg,
  seoDescription:
    'JSO Crescendo spielt beim Breil glischa Lichtfestival am 7. November 2026 im Kerzenschein in der Baselgia illuminada in Surses — ein unverwechselbares Konzerterlebnis bei Kerzenlicht.',
  descriptionElement: <></>,
  showOnHomepage: true,
  dates: [
    {
      location: 'Baselgia illuminada, Surses',
      dateString: '7. November 2026 19:30 Uhr',
      dateISO: '2026-11-07T19:30:00+01:00',
    },
  ],
  quickLinks: [
    {
      url: 'https://www.breilglischa.ch/programm',
      utmSource: 'website',
      utmCampaign: 'breil-glischa-26',
    },
  ],
};
