import { MetadataRoute } from 'next'

const CANONICAL_BASE_URL = 'https://www.aoafoods.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: CANONICAL_BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${CANONICAL_BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CANONICAL_BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CANONICAL_BASE_URL}/markets`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${CANONICAL_BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments/halaal-meat`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments/basmati-rice`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments/fruits-vegetables`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments/pulses-cereals`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments/animal-feed`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CANONICAL_BASE_URL}/business-segments/bulk-commodities`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}