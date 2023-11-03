import Naegeli_lg from './assets/2023_hgn250_lg.webp';
import Naegeli_sm from './assets/2023_hgn250_md.webp';
import {Concert} from '../..';

export const HGN_250: Concert = {
  id: 'hgn-250',
  name: 'Festkonzert',
  subtitle: '250 Jahre Hans Georg Nägeli',
  description:
    'Am 26. Mai 2023 jährt sich der 250. Geburtstag des Verlegers, Komponisten, Chorleiters und Musikpädagogen Hans Georg Nägeli. Nägeli ist nicht nur der bedeutendste Kulturschaffende aus Wetzikon im Zürcher Oberland, sondern auch eine ebenso vielseitige wie schillernde Persönlichkeit, welche das europäische Musikwesen des frühen 19. Jahrhundert prägt. Zur Aufführung gelangen Chorlieder, die exemplarisch für Nägelis Schaffen und sein reiches Erbe stehen.',
  image_sm: Naegeli_sm,
  image_lg: Naegeli_lg,
  dates: [
    {
      dateISO: '2023-05-26T19:30:00+01:00',
      dateString: '26. Mai 2023 19:30 Uhr',
      location: 'Tonhalle Zürich',
      googleMapsLink: 'https://goo.gl/maps/GTVVQLGhoSFmbBVaA',
    },
  ],
};
