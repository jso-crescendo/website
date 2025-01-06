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

export interface Concert {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  /**
   * used for sitemap. ISO-String
   */
  lastChange?: string;
  image_sm: StaticImageData;
  image_lg?: StaticImageData;
  dates?: ConcertLocation[];
  program?: ProgramItem[];
  quickLinks?: QuickLink[];
}

export const CONCERTS: Concert[] = [FRUEHLINGSKONZERTE_25];

export const PAST_CONCERTS: Concert[] = [
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
];

export const ALL_CONCERTS = CONCERTS.concat(PAST_CONCERTS);
