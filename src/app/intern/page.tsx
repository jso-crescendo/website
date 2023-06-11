import {ArrowLink} from '../../icons/arrow-link';
import {ContentContainer} from '../../components/contentContainer';
import {ImageSection} from '@/components/image-section';
import InternImage from '@/images/backgrounds/scores_1.webp';
import NextLink from 'next/link';
import {Text} from '../../components/text';

export const metadata = {
  title: 'Intern',
  robots: 'noindex',
};

export default function Intern() {
  return (
    <ContentContainer>
      <h1 className="text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Intern
      </h1>
      <ImageSection
        image={{src: InternImage, priority: true, alt: ''}}
        title="Wichtige Links"
        textOnly={false}
      >
        <ul className="list-disc pl-4">
          <li className="cursor-pointer py-2 hover:text-primary-main">
            <Link
              href="https://drive.google.com/drive/folders/0ANE3t78ktMbtUk9PVA"
              text="Google Drive"
            />
            <Text>Bilder, Dokumente, Noten</Text>
          </li>
          <li className="cursor-pointer py-2 hover:text-primary-main">
            <Link href="https://spond.com/client/" text="Spond" />
            <Text>für Proben anmelden</Text>
          </li>
          <li className="cursor-pointer py-2 hover:text-primary-main">
            <Link
              href="/intern/orchesterrichtlinien"
              text="Orchesterrichtlinien"
            />
          </li>
        </ul>
      </ImageSection>
    </ContentContainer>
  );
}

const Link: React.FC<{href: string; text: string}> = ({href, text}) => (
  <NextLink
    className="inline-flex cursor-pointer text-lg hover:text-primary-main"
    href={href}
  >
    {text}
    <ArrowLink className="ml-1 h-5" />
  </NextLink>
);
