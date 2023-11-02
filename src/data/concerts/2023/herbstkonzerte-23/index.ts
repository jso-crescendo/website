import HerbstKonzert23Image_sm from './assets/2023_flyer_herbstkonzert_sm.webp';
import HerbstKonzert23Image_lg from './assets/2023_flyer_herbstkonzert_lg.webp';
import {Concert} from '../..';

export const HERBSTKONZERT_23: Concert = {
  id: 'herbstkonzerte-23',
  lastChange: '2023-10-03T10:00:00.000Z',
  name: 'Herbstkonzerte',
  subtitle: 'mit dem Projektchor Canturicum',
  description:
    'Seit 2006 führt das JSO Crescendo regelmässig Chorwerke mit dem Projektchor Canturicum auf. Dieser Chor wurde von Käthi Schmid Lauber eigens dazu gegründet, im Mai 2006 die "Messe solennelle" von Ch. Gounod aufzuführen. Der Erfolg dieses Projektes, u.a. das Konzert in der ausverkauften Tonhalle, war so durchschlagend, dass 2007, 2009, 2012, 2015, 2018 und 2019 weitere Projekte realisiert wurden. Es singen jeweils zwischen 80 und 120 Sänger:innen, aus den Singwochen, Eltern, Ehemalige und Freunde vom JSO Crescendo mit.',
  image_sm: HerbstKonzert23Image_sm,
  image_lg: HerbstKonzert23Image_lg,
  program: [
    {
      name: 'Requiem',
      composer: 'Luigi Cherubini',
    },
    {
      name: '7.Sinfonie 2.Satz',
      composer: 'Ludwig van Beethoven',
    },
    {
      name: 'Herr, wenn ich nur dich habe',
      composer: 'Heinrich Schütz',
    },
  ],
  dates: [
    {
      location: 'Friedenskirche Olten',
      googleMapsLink: 'https://goo.gl/maps/uDNdqBQWePwmsLci9',
      dateString: '3. November 2023 20:00 Uhr',
      dateISO: '2023-11-03T20:00:00+01:00',
    },
    {
      location: 'St. Peter Zürich',
      googleMapsLink: 'https://goo.gl/maps/x7tZvHs3fYddvpvy9',
      dateString: '4. November 2023 20:00 Uhr',
      dateISO: '2023-11-04T20:00:00+01:00',
    },
    {
      location: 'Dreifaltigkeitskirche Tann',
      googleMapsLink: 'https://goo.gl/maps/vyJ5oA8gPmJXgQfSA',
      dateString: '5. November 2023 16:00 Uhr',
      dateISO: '2023-11-05T16:00:00+01:00',
    },
  ],
};
