import {ImageSection} from '@/components/image-section';
import GoennerImage from '@/images/goenner/chair_with_flute_lg.webp';
import React from 'react';
import {Text} from '@/components/text';

export const metadata = {
  title: 'Gönner:in werden',
  description: `
    Unterstützen Sie unser Orchester! 
    Werden Sie Gönner:in und sichern Sie sich exklusive Vorteile 
    wie reservierte Plätze an unseren Konzerten und namentliche Erwähnung im Programmheft.
  `.replace(/(\r\n|\n|\r)/gm, ' ').replace(/ {2,}/g, ' ').trim(),
};

const GoennerOption: React.FC<{
  title: string;
  amount: string;
  perks: string[];
}> = ({title, amount, perks}) => (
  <section className="w-full bg-[#C96618] bg-opacity-35 p-4 rounded-lg">
    <h3 className="font-serif text-2xl font-semibold">{title}</h3>
    <span className="text-sm text-neutral-700">{amount}</span>
    <ul className="list-disc list-outside mt-4 ml-4">
      {perks.map((perk) => (
        <li key={perk}>{perk}</li>
      ))}
    </ul>
  </section>
);

const Goenner: React.FC<{
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
    <section className="p-4 rounded-lg shadow-md mt-4">
      <h2 className="font-serif text-2xl lg:text-3xl mb-2">Ihre Vorteile</h2>
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

export default Goenner;
