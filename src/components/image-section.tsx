import Image, {StaticImageData} from 'next/image';

import {toKebabCase} from '../utils/toKebabCase';
import {LinkButton} from './link-button';

interface ImageSectionProps {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  textOnly?: boolean;
  children?: React.ReactNode;
  link?: {
    text: string;
    href: string;
  };
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  image,
  title,
  textOnly = true,
  children,
  link,
}) => (
  <section
    id={toKebabCase(title)}
    className="flex flex-col gap-8 pt-8 md:h-screen md:flex-row odd:flex-row-reverse mb-8"
  >
    <Image
      src={image.src}
      alt={image.alt}
      className="w-full object-contain md:w-1/2"
    />
    <div className="my-auto w-full md:w-1/2">
      <h2 className="font-serif text-5xl">{title}</h2>
      {textOnly ? <p className="text-justify">{children}</p> : children}
      {link && (
        <LinkButton
          type="primary"
          href={link.href}
          text={link.text}
          className="float-right mt-4"
        />
      )}
    </div>
  </section>
);
