import Image, {StaticImageData} from 'next/image';

import {toKebabCase} from '../utils/toKebabCase';
import {LinkButton} from './link-button';
import { Text } from './text';

interface ImageSectionProps {
  title: string;
  subtitle?: string;
  image: {
    src: StaticImageData;
    alt: string;
    priority?: boolean
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
  subtitle,
  textOnly = true,
  children,
  link,
}) => (
  <section
    id={toKebabCase(title)}
    className="flex flex-col justify-between gap-8 py-8 md:flex-row md:odd:flex-row-reverse"
  >
    <Image
      src={image.src}
      alt={image.alt}
      priority={image.priority}
      className="w-full rounded-lg object-contain md:w-5/12"
    />
    <div className="my-auto w-full ">
      <hgroup >
        <h2 className="font-serif text-5xl">{title}</h2>
        {subtitle && <p className="text-lg pb-4">{subtitle}</p>}
      </hgroup>
      {textOnly ? <Text>{children}</Text> : children}
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
