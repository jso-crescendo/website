import EurythmieFestivalImage_sm from './assets/2023_flyer_eurythmiefestival_sm.webp';
import EurythmieFestivalImage_lg from './assets/2023_flyer_eurythmiefestival_lg.webp';
import {Concert} from '../..';

export const JUGENDEURYTHMIEFESTIVAL_23: Concert = {
  id: 'jugendeurythmiefestival-23',
  lastChange: '2023-10-04T12:00:00.000Z',
  name: 'Jugend Eurythmiefestival',
  subtitle: 'begleitet durch das JSO Crescendo',
  image_sm: EurythmieFestivalImage_sm,
  image_lg: EurythmieFestivalImage_lg,
  description:
    '80 Jugendliche widmen sich dem spätromantischen Werk Mendelssohns, der erst 17 Jahre alt war als er 1867 die Ouvertüre zu Shakespeares Komödie Ein Sommernachtstraum komponierte. Die theatralischen Szenen werden neben Deutsch auch auf Italienisch eurythmisch gestaltet. Musikalisch begleitet wird die Szenerie durch das Jugendsinfonieorchester Crescendo unter der Leitung von Käthi Schmid-Lauber.',
  program: [
    {
      name: 'Ein Sommernachtstraum',
      composer: 'Felix Mendelssohn Bartholdy und William Shakespeare',
    },
  ],
  dates: [
    {
      location: 'Rudolf Steiner Schule Zürcher Oberland',
      dateString: '20. Oktober 2023 19:30 Uhr',
      dateISO: '2023-10-20T19:30:00+01:00',
    },
    {
      location: 'Rudolf Steiner Schule Zürcher Oberland',
      dateString: '21. Oktober 2023 16:00 Uhr',
      dateISO: '2023-10-21T16:00:00+01:00',
    },
    {
      location: 'Rudolf Steiner Schule Zürcher Oberland',
      dateString: '21. Oktober 2023 19:30 Uhr',
      dateISO: '2023-10-21T19:30:00+01:00',
    },
  ],
};
