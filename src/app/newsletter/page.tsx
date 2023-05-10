import {ContentContainer} from '../../components/contentContainer';
import {ImageSection} from '../../components/image-section';
import NewsLetterImage from '../../images/backgrounds/letter_sm.webp';
import {NewsletterForm} from './newsletter-form';

export const metadata = {
  title: 'Newsletter',
  description:
    'Bleiben Sie immer auf dem Laufenden über unsere anstehenden Konzerte und spannenden Projekte! Abonnieren Sie jetzt unseren Newsletter.',
};

export default function Newsletter() {
  return (
    <ContentContainer>
      <ImageSection
        title="Newsletter"
        image={{src: NewsLetterImage, alt: 'newsletter bild', priority: true}}
      >
        Verpassen Sie keine wichtigen Updates zu unseren aufregenden Konzerten
        und spannenden Projekten, indem Sie unseren Newsletter abonnieren!
        Bleiben Sie immer up-to-date und erhalten Sie exklusive Informationen
        direkt in Ihr Postfach.
      </ImageSection>

      <section className="mt-8 flex flex-row justify-center">
        <NewsletterForm />
      </section>
    </ContentContainer>
  );
}
