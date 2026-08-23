import type {Concert} from '../..';
import Image_lg from './assets/flyer_lg.webp';
import Image_sm from './assets/flyer_sm.webp';

export const JUGENDEURYTHMIEFESTIVAL_26: Concert = {
  id: 'jugendeurythmiefestival-26',
  name: 'Schweizer Jugend Eurythmie Festival',
  subtitle: 'Nussknacker — begleitet durch das JSO Crescendo',
  image_sm: Image_sm,
  image_lg: Image_lg,
  seoDescription:
    'Das Schweizer Jugend Eurythmie Festival 2026 setzt sich dem romantischen Kunstmärchen Nussknacker und der Mäusekönig von E.T.A. Hoffmann frei. Rund 80 Jugendliche aus verschiedenen Steiner Schulen der Deutschschweiz gestalten das Märchen eurythmisch. Musikalisch begleitet vom Jugendsinfonieorchester Crescendo unter der Leitung von Käthi Schmid Lauber.',
  descriptionElement: <></>,
  program: [
    {
      name: 'Nussknacker und der Mäusekönig',
      composer: 'E.T.A. Hoffmann',
      subComposer: 'eurythmisch gestaltet von rund 80 Jugendlichen',
    },
    {
      name: 'Ausgewählte Sätze aus der Nussknacker-Suite',
      composer: 'Peter Tschaikowsky',
      subComposer: 'musikalisch begleitet vom JSO Crescendo, Leitung: Käthi Schmid Lauber',
    },
  ],
  dates: [
    {
      location: 'Grosser Saal, Rudolf-Steiner-Schule Zürcher Oberland, Wetzikon',
      dateString: 'Freitag, 16. Oktober 2026, 19:30 Uhr',
      dateISO: '2026-10-16T19:30:00+01:00',
    },
    {
      location: 'Grosser Saal, Rudolf-Steiner-Schule Zürcher Oberland, Wetzikon',
      dateString: 'Samstag, 17. Oktober 2026, 16:00 Uhr',
      dateISO: '2026-10-17T16:00:00+01:00',
    },
    {
      location: 'Grosser Saal, Rudolf-Steiner-Schule Zürcher Oberland, Wetzikon',
      dateString: 'Samstag, 17. Oktober 2026, 19:30 Uhr',
      dateISO: '2026-10-17T19:30:00+01:00',
    },
  ],
  quickLinks: [
    {
      url: 'https://www.ticketino.com/de/EventGroup/6-Schweizer-Jugend-Eurythmie-Festival-2026/6117',
      utmSource: 'tickets',
      utmCampaign: 'eurythmie-26',
    },
  ],
};
