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
    className="py-8 flex flex-col justify-between gap-8 md:odd:flex-row-reverse md:flex-row"
  >
    <Image
      src={image.src}
      alt={image.alt}
      className="w-full rounded-lg object-contain md:w-5/12"
    />
    <div className="my-auto w-full ">
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
