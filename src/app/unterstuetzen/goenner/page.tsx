import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import SponsorenImage from '@/images/2022_fruehling_bass.webp';
import GoennerImage from '@/images/2022_fruehling_blech.webp';
import {ContentContainer} from '../../../components/contentContainer';
import {PageTitle} from '../../../components/page-title';
import React from 'react';

export const metadata = {
  title: 'Gönner',
};

const GoennerOption: React.FC<{
  title: string;
  amount: string;
  perks: string[];
}> = ({title, amount, perks}) => (
  <section>
    <h3>{title}</h3>
    <span>{amount}</span>
    <ul>
      {perks.map((perk) => (
        <li key={perk}>{perk}</li>
      ))}
    </ul>
  </section>
);

export default function Goenner() {
  return (
    <ContentContainer>
      <PageTitle>
        <span>Wollen auch Sie uns unterstützen?</span>
        <span>&mdash;</span>
        <span>Jetzt Gönner:in werden</span>
      </PageTitle>
      <div>
        <GoennerOption
          title="Mezzoforte"
          amount="ab 100.-"
          perks={[
            'jährlicher Gönner:innenbrief',
            'einige Flyer per Post vor den Konzerten',
          ]}
        />
        <GoennerOption
          title="Forte"
          amount="ab 150.-"
          perks={[
            'jährlicher Gönner:innenbrief',
            'einige Flyer per Post vor den Konzerten',
            '2 reservierte Plätze an einem Konzert Ihrer Wahl',
          ]}
        />
        <GoennerOption
          title="Fortissimo"
          amount="200.- oder mehr"
          perks={[
            'jährlicher Gönner:innenbrief',
            'einige Flyer per Post vor den Konzerten',
            '4 reservierte Plätze an einem Konzert Ihrer Wahl',
            'namentliche Erwähnung im Programmheft (sofern gewünscht)',
          ]}
        />
      </div>
    </ContentContainer>
  );
}
