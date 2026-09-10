import { buildOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Blog by Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: 'Blog',
    title: 'Engineering Logs',
    subtitle: 'Architecture | Product | Open-Sourcerer',
    accent: 'secondary',
  });
}
