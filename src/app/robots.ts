import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['*', 'Googlebot', 'Applebot', 'Bingbot', 'Baiduspider', 'Yandex', 'DuckDuckBot', 'Facebot', 'AdsBot-Google' ],
        allow: ['/'],
      },
    ],
    sitemap: 'https://jockeygym.com.ar/sitemap.xml',
  }
}