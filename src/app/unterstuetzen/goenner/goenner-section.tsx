import {ImageSection} from '@/components/image-section';
import GoennerImage from '@/images/goenner/chair_with_flute_xl.webp';
import React from 'react';
import {Text} from '@/components/text';
/* eslint-disable tailwindcss/no-arbitrary-value */
const GoennerOption: React.FC<{
  title: string;
  amount: string;
  perks: string[];
}> = ({title, amount, perks}) => (
  <section className="w-full rounded-lg bg-[#C96618]/35 p-4">
    <h3 className="font-serif text-2xl font-semibold">{title}</h3>
    <span className="text-sm text-neutral-700">{amount}</span>
    <ul className="ml-4 mt-4 list-outside list-disc">
      {perks.map((perk) => (
        <li key={perk}>{perk}</li>
      ))}
    </ul>
  </section>
);

export const GoennerSection: React.FC<{
  link?: {
    text: string;
    href: string;
  };
  noReverse?: boolean;
}> = ({link, noReverse = true}) => (
  <ImageSection
    title="Jetzt Gönner:in werden"
    image={{
      src: GoennerImage,
      alt: 'Eine Geige und eine Flöte liegen auf einem schwarzen Klappstuhl.',
      vertical: true,
      priority: true,
    }}
    textOnly={false}
    noReverse={noReverse}
    link={link}
  >
    <Text>
      Gönnerbeiträge und Spenden sind eine wichtige Grundlage für die Zukunft
      unseres Orchesters. Als Gönner:in erhalten sie jährlich einen
      Gönner:innenbrief, in dem wir Ihnen von unseren Jahres-Highlights
      berichten. Ausserdem senden wir Ihnen vor unseren Konzerten einige Flyer
      per Post zu. Ausserdem können Sie sich Sitzplatzreservationen an unseren
      Konzerten und Namenserwähnungen in unseren Programmheften sichers, sofern
      Sie dies wünschen. Unterstützen Sie uns mit einem jährlichen Gönnerbeitrag
      Ihrer Wahl:
    </Text>
    <section className="mt-4 rounded-lg p-4 shadow-md">
      <h2 className="mb-2 font-serif text-2xl lg:text-3xl">Ihre Vorteile</h2>
      <div className="flex flex-col gap-4">
        <GoennerOption
          title="Mezzoforte"
          amount="ab 100.-"
          perks={[
            'Gönner:innenbrief',
            'einige Flyer per Post vor den Konzerten',
          ]}
        />
        <GoennerOption
          title="Forte"
          amount="ab 150.-"
          perks={[
            'Gönner:innenbrief',
            'einige Flyer per Post vor den Konzerten',
            '2 reservierte Plätze an einem unserer Konzerte Ihrer Wahl',
          ]}
        />
        <GoennerOption
          title="Fortissimo"
          amount="200.- oder mehr"
          perks={[
            'Gönner:innenbrief',
            'einige Flyer per Post vor den Konzerten',
            '4 reservierte Plätze an einem unserer Konzerte Ihrer Wahl',
            'namentliche Erwähnung im Programmheft (sofern gewünscht)',
          ]}
        />
      </div>
    </section>
  </ImageSection>
);
