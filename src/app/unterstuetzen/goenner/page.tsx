import React from 'react';
import {GoennerSection} from './goenner-section';

export const metadata = {
  title: 'Gönner:in werden',
  description: `
    Unterstützen Sie unser Orchester! 
    Werden Sie Gönner:in und sichern Sie sich exklusive Vorteile 
    wie reservierte Plätze an unseren Konzerten und namentliche Erwähnung im Programmheft.
  `
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/ {2,}/g, ' ')
    .trim(),
};

export default function Page() {
  return <GoennerSection />;
}
