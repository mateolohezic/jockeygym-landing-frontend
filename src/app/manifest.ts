import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jockey GYM',
    short_name: 'Jockey GYM',
    description: 'Jockey GYM Page',
    start_url: 'https://jockeygym.com.ar/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    icons: [
        {
            src: '/favicon.ico',
            sizes: '32x32',
            type: 'image/x-icon',
        },
        {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ],
  }
}