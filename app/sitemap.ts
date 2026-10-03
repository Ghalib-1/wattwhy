import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wattwhy.vercel.app';
  const now = new Date();
  return [
    { url: base, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/california`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/texas`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/pennsylvania`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/ohio`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/vampire-power`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/air-conditioning`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/water-heater`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/heating`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/air-leaks`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
  ];
}