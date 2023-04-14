import {ContentContainer} from '../../components/contentContainer';
import {Text} from '../../components/text';
import {NewsletterForm} from '../canturicum/newsletter-form';

export default function Newsletter() {
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Newsletter
      </h1>

      <Text>
        Verpassen Sie keine wichtigen Updates zu unseren aufregenden Konzerten
        und spannenden Projekten, indem Sie unseren Newsletter abonnieren!
        Bleiben Sie immer up-to-date und erhalten Sie exklusive Informationen
        direkt in Ihr Postfach.
      </Text>
      <section className="flex flex-row justify-center mt-8">
        <NewsletterForm />
      </section>
    </ContentContainer>
  );
}
