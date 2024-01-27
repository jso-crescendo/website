import Image, {StaticImageData} from 'next/image';

import {LinkButton} from './link-button';
import {Text} from './text';
import classNames from 'classnames';
import {toKebabCase} from '../utils/toKebabCase';

interface ImageSectionProps {
  title: string;
  subtitle?: string;
  textOnly?: boolean;
  children?: React.ReactNode;
  image?: {
    src: StaticImageData;
    alt: string;
    priority?: boolean;
    vertical?: boolean;
  };
  video?: {
    type: 'youtube';
    videoId: string;
    vertical?: boolean;
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
      'flex flex-col items-center justify-between gap-8 pb-8 pt-4 lg:flex-row',
      {'lg:even:flex-row-reverse': !noReverse},
    )}
  >
    <div
      className={classNames(
        {relative: !!image},
        'w-full lg:w-auto lg:flex-1',
        image?.vertical || video?.vertical
          ? 'aspect-video-vertical'
          : 'aspect-video',
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          priority={image.priority}
          className="rounded-lg object-cover drop-shadow-lg"
          placeholder="blur"
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
      ) : (
        video && (
          <iframe
            id="ytplayer"
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?hl=de-ch&modestbranding=1`}
            title="YouTube video player"
            allowFullScreen
            referrerPolicy="no-referrer"
            className="size-full"
          />
        )
      )}
    </div>
    <div className="w-full lg:w-7/12">
      <hgroup>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">{title}</h2>
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
