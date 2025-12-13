import Image_sm from './assets/flyer-hk-25-plain_sm.webp';
import Image_lg from './assets/plakat-hk-25_lg.webp';

import {Concert} from '../..';
import Link from 'next/link';

export const HERBSTKONZERTE_25: Concert = {
  id: 'herbstkonzerte-25',
  name: 'Herbstkonzerte',
  image_sm: Image_sm,
  image_lg: Image_lg,
  lastChange: '2025-09-12T23:00:00+01:00',
  seoDescription:
    'Das JSO Crescendo präsentiert ein emotionales Herbstprogramm, das von Dvořáks monumentaler Sinfonie «Aus der Neuen Welt» über Marie Jaëlls virtuoses Cellokonzert mit dem Solisten Jonas Kreienbühl bis hin zu einer Auswahl stimmungsvoller Chorwerke von Rameau, Bremnes und Bundi reicht. Ein Konzerterlebnis voller symphonischer Kraft und klanglicher Tiefe erwartet Sie!',
  descriptionElement: (
    <>
      Im kommenden Konzertprogramm nimmt Sie das JSO Crescendo mit auf eine
      vielfältige musikalische Reise. Den monumentalen Auftakt bildet Antonin
      Dvořáks weltberühmte Sinfonie Nr. 9 «Aus der Neuen Welt», ein Werk voller
      Sehnsucht, dramatischer Kraft und unvergesslicher Melodien, das die Weite
      der amerikanischen Landschaft eindrucksvoll widerspiegelt.
      <br />
      Ein besonderer Höhepunkt des Abends ist das wiederentdeckte Cellokonzert
      in F-Dur der Komponistin Marie Jaëll. Wir freuen uns ausserordentlich, für
      dieses spätromantische und virtuose Werk den talentierten Solisten{' '}
      <Link href="https://www.cellist.ch/">
        <b>Jonas Kreienbühl</b>
      </Link>{' '}
      gewonnen zu haben, der mit seinem Cello in einen gefühlvollen Dialog mit
      dem Orchester tritt.
      <br />
      Auch der Chorgesang kommt mit einer Auswahl an stimmungsvollen Stücken
      nicht zu kurz. Von Ola Bremnes&apos; nachdenklichem «Har du fyr», das die
      Bedeutung eines inneren Lichts thematisiert, über das romanische «Il grond
      silenzi» von Flavio Bundi bis hin zum tröstlichen «An Irish Blessing» wird
      ein breiter emotionaler Bogen gespannt. Jean-Philippe Rameaus zeitlos
      schöne «Hymne à la nuit» beschliesst den Chor-Teil und taucht den
      Konzertsaal in eine zauberhafte, nächtliche Atmosphäre.
    </>
  ),
  program: [
    {
      name: 'Sinfonie No. 9 «Aus der neuen Welt»',
      composer: 'Antonin Dvorak',
    },
    {
      name: 'Cellokonzert in F-Dur',
      composer: 'Marie Jaëll',
      subComposer: 'Solist: Jonas Kreienbühl',
    },
    {
      name: 'Har du fyr',
      composer: 'Ola Bremnes',
    },
    {
      name: 'Il grond silenzi',
      composer: 'Flavio Bundi',
    },
    {
      name: 'An Irish Blessing',
      composer: 'Traditionell aus Irland',
    },

    {
      name: 'Hymne à la nuit',
      composer: 'Jean-Philippe Rameau',
    },
  ],
  dates: [
    {
      location: 'Ref. Kirche Hinwil',
      dateString: '31. Oktober 2025 20:00 Uhr',
      dateISO: '2025-10-31T20:00:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/17xdZPKwtMv91ggk6',
    },
    {
      location: 'Ref. Kirche St. Johann Schaffhausen',
      dateString: '1. November 2025 19:00 Uhr',
      dateISO: '2025-11-01T19:00:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/Gc9w9JGGRBz4Sqch8',
    },
    {
      location: 'Zürich – Kirche Oberstrass',
      dateString: '2. November 2025 16:00 Uhr',
      dateISO: '2025-11-02T16:00:00+01:00',
      googleMapsLink: 'https://maps.app.goo.gl/G1MKskQEbQEabZ1Z8',
    },
  ],
  quickLinks: [
    {
      url: '/hk-25/f',
      utmSource: 'flyer',
      utmCampaign: 'hk-25',
    },
    {
      url: '/hk-25/p',
      utmSource: 'plakat',
      utmCampaign: 'hk-25',
    },
    {
      url: '/hk-25',
      utmSource: 'none',
      utmCampaign: 'hk-25',
    },
  ],
  showOnHomepage: true,
  openGraphImage: {
    year: 2025,
    name: 'opengraph-image',
  },
};
