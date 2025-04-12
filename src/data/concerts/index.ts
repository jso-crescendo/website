import {StaticImageData} from 'next/image';
import {HERBSTKONZERT_23} from './2023/herbstkonzerte-23';
import {HGN_250} from './2023/hgn-250';
import {FRUEHLINGSKONZERTE_23} from './2023/fruehlingskonzerte-23';
import {JUGENDEURYTHMIEFESTIVAL_23} from './2023/jugendeurythmiefestival-23';
import {FRUEHLINGSKONZERTE_24} from './2024/fruehlingskonzerte-24';
import {VOLKSTANZGALA_24} from './2024/volkstanzgala-24';
import {KARFREITAGSKONZERT_24} from './2024/karfreitagskonzert-24';
import {WEIHNACHTSGOTTESDIENST_23} from './2023/weihnachtsgottesdienst-23';
import {OFFENES_SINGEN_23} from './2023/offenes-singen-23';
import {HERBSTKONZERT_24} from './2024/herstkonzert-24';
import {OFFENES_SINGEN_24} from './2024/offenes-singen-24';
import {WEIHNACHTSGOTTESDIENST_24} from './2024/weihnachtsgottesdienst-24';
import {FRUEHLINGSKONZERTE_25} from './2025/fruehlingskonzerte-25';
import {isBefore} from 'date-fns';
import {KARFREITAGSKONZERT_25} from './2025/karfreitagskonzert-25';

export interface ConcertLocation {
  location: string;
  googleMapsLink?: string;
  dateString: string;
  dateISO: string;
}

export interface ProgramItem {
  name: string;
  subtitle?: string;
  composer: string;
  subComposer?: string;
}

export interface QuickLink {
  url: string;
  utmSource: string;
  utmCampaign: string;
}

type WithDescription =
  | {seoDescription?: never; description?: string; descriptionElement?: never}
  | {
      seoDescription: string;
      description?: never;
      descriptionElement: React.ReactNode;
    };

export type Concert = WithDescription & {
  id: string;
  name: string;
  subtitle?: string;
  /**
   * used for sitemap. ISO-String
   */
  lastChange?: string;
  image_sm: StaticImageData;
  image_lg?: StaticImageData;
  dates?: ConcertLocation[];
  program?: ProgramItem[];
  quickLinks?: QuickLink[];
  openGraphImage?: {
    /**
     * the foldername to generate the path to the image
     */
    year: number;

    /**
     * the filename of the image. must me PNG
     */
    name: string;
  };
  showOnHomepage?: boolean;
};

export const ALL_CONCERTS = [
  KARFREITAGSKONZERT_25,
  FRUEHLINGSKONZERTE_25,
  WEIHNACHTSGOTTESDIENST_24,
  OFFENES_SINGEN_24,
  HERBSTKONZERT_24,
  VOLKSTANZGALA_24,
  FRUEHLINGSKONZERTE_24,
  KARFREITAGSKONZERT_24,
  WEIHNACHTSGOTTESDIENST_23,
  OFFENES_SINGEN_23,
  HERBSTKONZERT_23,
  JUGENDEURYTHMIEFESTIVAL_23,
  HGN_250,
  FRUEHLINGSKONZERTE_23,
].sort((a, b) => {
  const aDate = a.dates?.[0]?.dateISO
    ? new Date(a.dates[0].dateISO)
    : new Date(0);
  const bDate = b.dates?.[0]?.dateISO
    ? new Date(b.dates[0].dateISO)
    : new Date(0);
  return aDate.getTime() - bDate.getTime();
});

export const isPastConcert = (id: string): boolean => {
  return PAST_CONCERTS.filter((c) => c.id === id).length > 0;
};

export const PAST_CONCERTS: Concert[] = ALL_CONCERTS.filter((concert) =>
  concert.dates?.every((date) => isBefore(new Date(date.dateISO), new Date())),
);

export const CONCERTS: Concert[] = ALL_CONCERTS.filter(
  (c) => !isPastConcert(c.id),
);

export const getConcert = (id: string): Concert | undefined => {
  const concert = ALL_CONCERTS.find((c) => c.id === id);

  return concert;
};
