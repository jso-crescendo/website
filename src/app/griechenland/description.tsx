import {ImageSection} from '@/components/image-section';
import Griechenland from './griechenland_sm.webp';
import React from 'react';
import {Text} from '@/components/text';

export const Description: React.FC = () => (
  <ImageSection
    image={{
      src: Griechenland,
      alt: 'Griechische Küste',
      vertical: false,
      priority: true,
    }}
    textOnly={false}
    noReverse
  >
    <Text>
      Diesen Sommer geht es für uns nach Griechenland & unser
      Konzertreisekässeli braucht Ihre Hilfe!
    </Text>
    <Text>
      Haben Sie schon immer davon geträumt, eine Gesangsstunde bei Käthi zu
      nehmen? Oder haben Sie ein Liederwunsch für unsere nächsten Konzerte?
      Vielleicht möchten Sie lieber eine handgeschriebene Postkarte aus
      Griechenland erhalten - oder einmal selbst das Crescendo dirigieren?
    </Text>
    <Text>
      Jetzt ist Ihre Chance! Machen Sie an unserem <b>Crowdfunding</b> bis am{' '}
      <b>01.06.2025</b> mit und sichern Sie sich exklusive Geschenke und
      Mitbringsel aus Griechenland - nur solange der Vorrat reicht!
    </Text>
  </ImageSection>
);
