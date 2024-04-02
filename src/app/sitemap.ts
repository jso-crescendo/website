import {CONCERTS} from '../data/concerts';
import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jso-crescendo.ch',
      lastModified: '2024-04-02T12:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/kontakt',
      lastModified: '2024-03-27T00:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/newsletter',
      lastModified: '2023-06-03T00:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/orchester',
      lastModified: '2023-06-03T00:00:00.000Z',
    },
    {
      url: 'https://jso-crescendo.ch/konzerte',
      lastModified: '2024-04-02T12:00:00.000Z',
    },
    ...CONCERTS.map((c) => ({
      url: `https://jso-crescendo.ch/konzerte/${c.id}`,
      lastModified: c.lastChange ?? new Date(),
    })),
  ];
}
