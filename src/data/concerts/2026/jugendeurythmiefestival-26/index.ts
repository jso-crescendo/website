import type {Concert} from '../..';
import Image_lg from './assets/flyer_lg.webp';
import Image_sm from './assets/flyer_sm.webp';

export const JUGENDEURYTHMIEFESTIVAL_26: Concert = {
  id: 'jugendeurythmiefestival-26',
  name: 'Schweizer Jugend Eurythmie Festival',
  subtitle: 'begleitet durch das JSO Crescendo',
  image_sm: Image_sm,
  image_lg: Image_lg,
  program: [
    {
      name: 'Nussknacker und der Mäusekönig',
      composer: 'Ernst Theodor Amadeus Hoffmann',
      subComposer: 'eurythmisch gestaltet von rund 80 Jugendlichen',
    },
    {
      name: 'Ausgewählte Sätze aus der Nussknacker-Suite',
      composer: 'Pjotr Iljitsch Tschaikowski',
      subComposer: 'musikalisch begleitet vom JSO Crescendo',
    },
  ],
  dates: [
    {
      location:
        'Grosser Saal, Rudolf-Steiner-Schule Zürcher Oberland, Wetzikon',
      dateString: 'Freitag, 16. Oktober 2026, 19:30 Uhr',
      dateISO: '2026-10-16T19:30:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/8bGKBtGbZm9be9YT7',
    },
    {
      location:
        'Grosser Saal, Rudolf-Steiner-Schule Zürcher Oberland, Wetzikon',
      dateString: 'Samstag, 17. Oktober 2026, 16:00 Uhr',
      dateISO: '2026-10-17T16:00:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/8bGKBtGbZm9be9YT7',
    },
    {
      location:
        'Grosser Saal, Rudolf-Steiner-Schule Zürcher Oberland, Wetzikon',
      dateString: 'Samstag, 17. Oktober 2026, 19:30 Uhr',
      dateISO: '2026-10-17T19:30:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/8bGKBtGbZm9be9YT7',
    },
  ],
};
