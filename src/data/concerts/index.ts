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

export interface ConcertLocation {
  location: string;
  googleMapsLink?: string;
  dateString: string;
  dateISO: string;
}

export interface ProgramItem {
  name: string;
  composer: string;
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
}

export const CONCERTS: Concert[] = [
  KARFREITAGSKONZERT_24,
  FRUEHLINGSKONZERTE_24,
  VOLKSTANZGALA_24,
];

export const PAST_CONCERTS: Concert[] = [
  WEIHNACHTSGOTTESDIENST_23,
  OFFENES_SINGEN_23,
  HERBSTKONZERT_23,
  JUGENDEURYTHMIEFESTIVAL_23,
  HGN_250,
  FRUEHLINGSKONZERTE_23,
];
