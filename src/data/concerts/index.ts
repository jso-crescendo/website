import {StaticImageData} from 'next/image';
import {HERBSTKONZERT_23} from './herbstkonzerte-23';
import {HGN_250} from './hgn-250';
import {FRUEHLINGSKONZERT_23} from './fruehlingskonzerte-23';
import {JUGENDEURYTHMIEFESTIVAL_23} from './jugendeurythmiefestival-23';

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

export const CONCERTS: Concert[] = [HERBSTKONZERT_23];

export const PAST_CONCERTS: Concert[] = [
  JUGENDEURYTHMIEFESTIVAL_23,
  HGN_250,
  FRUEHLINGSKONZERT_23,
];
