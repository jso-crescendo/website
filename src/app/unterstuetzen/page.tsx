import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import SponsorenImage from '@/images/2022_fruehling_bass.webp';
import GoennerImage from '@/images/2022_fruehling_blech.webp';

import {ContentContainer} from '../../components/contentContainer';

export const metadata = {
  title: 'Unterstützen',
  description: 'TODO',
};

export default function Unterstuetzen() {
  return (
    <ContentContainer title="Unterstützen">
      <Text className="mb-4">
        Da bruuchts en text. Lorem ipsum dolor sit amet, consectetur adipiscing
      </Text>
      <ImageSection
        image={{src: SponsorenImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Sponsoren"
      >
        In den Programmheften unserer Konzerte bieten wir Platz für Ihre
        Werbung. Möchten Sie Ihr Logo oder Ihren Firmennamen in unserem
        Programmheft abdrucken? Melden sie sich bei unserem Marketingteam fü
      </ImageSection>
      <ImageSection
        image={{src: GoennerImage, alt: 'Orchestermitglieder beim spielen'}}
        title="Gönner"
        textOnly={false}
      >
        <Text>
          Möchten Sie engagierte junge Musiker unterstützen? Wir freuen uns über
          Ihr Interesse an der Jugend- und Kulturförderung und sind dankbar für
          Ihren Beitrag.
        </Text>
        <section className="pt-4">
          <h3 className="text-xl">Kontodaten</h3>
          <Text className="pl-2">
            Jugendorchester Crescendo
            <br />
            8000 Zürich
            <br />
            IBAN: CH 16 0900 0000 8005 1631 7
            <br />
            Konto: 80-51631-7
          </Text>
        </section>
      </ImageSection>
    </ContentContainer>
  );
}
