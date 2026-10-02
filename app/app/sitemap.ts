import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wattwhy.vercel.app';
  const now = new Date();
  return [
    { url: base, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/california`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
  ];
}