import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delta Traders - Core PSM',
    short_name: 'Delta Traders',
    description: 'Turning Vision Into Reality — Switch to Smart UPVC Window & Door Systems',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a4d2e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
