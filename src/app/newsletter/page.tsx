import {ContentContainer} from '../../components/contentContainer';
import {ImageSection} from '../../components/image-section';
import {Text} from '../../components/text';
import NewsLetterImage from '../../images/backgrounds/letter_sm.webp';
import {NewsletterForm} from '../canturicum/newsletter-form';
export default function Newsletter() {
  return (
    <ContentContainer>
      <ImageSection title="Newsletter" image={{src: NewsLetterImage, alt: "newsletter bild", priority: true}}>
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
