import { buildOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Projects by Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: 'Projects',
    title: 'Shipped Work',
    subtitle: 'Full Stack | AI | Open-Sourcerer',
    accent: 'primary',
  });
}
