import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jeclat2k26.in'
  
  const routes = [
    '',
    '/about',
    '/events',
    '/contact',
    '/memories',
    '/team',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes;
} 