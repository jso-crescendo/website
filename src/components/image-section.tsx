import classNames from 'classnames';
import Image, {StaticImageData} from 'next/image';

import {toKebabCase} from '../utils/toKebabCase';
import {LinkButton} from './link-button';
import {Text} from './text';

interface ImageSectionProps {
  title: string;
  subtitle?: string;
  textOnly?: boolean;
  children?: React.ReactNode;
  image?: {
    src: StaticImageData;
    alt: string;
    priority?: boolean;
  };
  video?: {
    type: 'youtube';
    videoId: string;
  };
  link?: {
    text: string;
    href: string;
  };
  noReverse?: boolean;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  title,
  image,
  video,
  subtitle,
  textOnly = true,
  children,
  link,
  noReverse,
}) => (
  <section
    id={toKebabCase(title)}
    className={classNames(
      'flex flex-col justify-between gap-8 pb-8 pt-4 md:flex-row',
      {'md:even:flex-row-reverse': !noReverse},
    )}
  >
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        priority={image.priority}
        className="w-full rounded-lg object-contain md:w-5/12"
        placeholder="blur"
      />
    ) : (
      video && (
        <iframe
          id="ytplayer"
          className="aspect-video w-full rounded-lg object-contain md:w-5/12"
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?hl=de-ch&modestbranding=1`}
          title="YouTube video player"
          allowFullScreen
          referrerPolicy="no-referrer"
        />
      )
    )}
    <div className="my-auto w-full">
      <hgroup>
        <h2 className="font-serif text-5xl">{title}</h2>
        {subtitle && <p className="pb-4 text-lg">{subtitle}</p>}
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
