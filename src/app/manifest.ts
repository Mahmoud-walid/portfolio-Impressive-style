import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mahmoud Walid Portfolio',
    short_name: 'Mahmoud Walid',
    description: 'Frontend engineer, Freelancer and Full-Time Open-Sourcerer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff5e6',
    theme_color: '#ff7a00',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  };
}
