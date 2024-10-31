import {CONCERTS} from '../data/concerts';
import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jso-crescendo.ch',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/kontakt',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/newsletter',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/orchester',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/unterstuetzen',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/unterstuetzen/goenner',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/konzerte',
      lastModified: '2024-10-31T22:00:00.000Z',
    },
    ...CONCERTS.map((c) => ({
      url: `https://jso-crescendo.ch/konzerte/${c.id}`,
      lastModified: c.lastChange ?? new Date(),
    })),
  ];
}
