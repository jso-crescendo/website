import React from 'react';
import {Description} from './description';

export const metadata = {
  title: 'Konzertreise nach Griechenland',
  description: `
  Diesen Sommer geht es für uns nach Griechenland & unser Konzertreisekässeli braucht Ihre Hilfe!
  `
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/ {2,}/g, ' ')
    .trim(),
};

export default function Page() {
  return <Description />;
}
