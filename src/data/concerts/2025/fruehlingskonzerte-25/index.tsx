import FruehlingsKonzert25Image_sm from './assets/flyer_placeholder_sm.webp';

import {Concert} from '../..';

export const FRUEHLINGSKONZERTE_25: Concert = {
  id: 'fruehlingskonzerte-25',
  name: 'Frühlingskonzerte',
  image_sm: FruehlingsKonzert25Image_sm,
  lastChange: '2025-01-13T22:00:00+01:00',
  dates: [
    {
      location: 'Reformierte Kirche Wald ZH',
      googleMapsLink: 'https://maps.app.goo.gl/VKTByMmDQr5PftFu8',
      dateString: '12. April 2025 19:00 Uhr',
      dateISO: '2025-04-12T19:00:00+01:00',
    },
    {
      location: 'Citykirche Offener St. Jakob Zürich',
      googleMapsLink: 'https://maps.app.goo.gl/LA9De14EBjsb9SEy5',
      dateString: '13. April 2025 16:00 Uhr',
      dateISO: '2025-04-13T16:00:00+01:00',
    },
  ],
  program: [
    {
      name: 'Die Hebriden Op.26',
      composer: 'Felix Mendelssohn Bartholdy',
    },
    {
      name: 'Polowetzer Tänze aus «Fürst Igor»',
      composer: 'Alexander Borodin',
    },
    {
      name: 'Weep, o mine eyes',
      composer: 'John Bennet',
    },
    {
      name: 'Gesungene Frühlingstrilogie',
      composer: 'Fanny Hensel, Käthi Schmid Lauber, Richard Strauss',
    },
    {
      name: 'And the Swallow',
      composer: 'Caroline Shaw',
    },
    {
      name: "Don't Stop Me Now",
      composer: 'Queen',
    },
    {
      name: 'The Cliffs of Moher',
      composer: 'Mario Bürki',
      subComposer: 'Arrangiert: Patrick Müller',
    },
    {
      name: 'Bacchanale aus «Samson et Dalila»',
      composer: 'Camille Saint-Saëns',
    },
  ],
  seoDescription:
    'Das JSO Crescendo präsentiert ein vielseitiges Frühlingsprogramm, das von Mendelssohns atmosphärischen «Hebriden» und Borodins kraftvollen Polowetzer Tänzen über Chorgesang und zeitgenössische Werke bis hin zu Mario Bürkis beeindruckendem «The Cliffs of Moher» und Saint-Saëns’ mitreißender «Bacchanale» reicht. Ein musikalisches Erlebnis voller Vielfalt und Energie erwartet Sie!',
  description: (
    <>
      In diesem Frühjahr präsentiert das JSO Crescendo ein abwechslungsreiches
      Programm. Von Felix Mendelssohn Bartholdys atmosphärischer Ouvertüre «Die
      Hebriden», die die Weite und Schönheit der schottischen Inseln musikalisch
      einfängt, bis hin zu Alexander Borodins kraftvollen und rhythmischen
      Polowetzer Tänzen, die das Publikum in eine andere Welt entführen,
      verspricht das Programm ein abwechslungsreiches Hörerlebnis.
      <br />
      Mit John Bennets "Weep, o mine eyes" und der "Gesungenen
      Frühlingstrilogie", die Werke von Fanny Hensel, Käthi Schmid Lauber und
      Richard Strauss vereint, kommen auch Freunde des Chorgesangs auf ihre
      Kosten. Zeitgenössische Klänge erklingen in Caroline Shaws einfühlsamem
      «And the Swallow», während der mitreissende Queen-Hit «Don’t Stop Me Now»
      das Programm mit rockiger Energie bereichert.
      <br />
      Mario Bürkis «The Cliffs of Moher» fängt die majestätische Schönheit und
      wilde Kraft der beeindruckenden irischen Steilküste musikalisch ein und
      entführt die Zuhörer an einen Ort voller Naturpracht und atemberaubender
      Weite, bevor die fulminante «Bacchanale» aus Camille Saint-Saëns’ Oper
      «Samson et Dalila» das Konzert mit einem packenden Finale beschliesst.
    </>
  ),
  quickLinks: [
    {
      url: '/fk-25/f',
      utmSource: 'flyer',
      utmCampaign: 'fk-25',
    },
    {
      url: '/fk-25/p',
      utmSource: 'plakat',
      utmCampaign: 'fk-25',
    },
    {
      url: '/fk-25',
      utmSource: 'none',
      utmCampaign: 'fk-25',
    },
  ],
  openGraphImage: {
    year: 2025,
    name: 'opengraph-image',
  },
};
