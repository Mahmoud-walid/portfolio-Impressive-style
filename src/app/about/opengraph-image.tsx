import { buildOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'About Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: 'About',
    title: 'About Mahmoud Walid',
    subtitle: 'Frontend Engineer | Open-Sourcerer',
    accent: 'accent',
  });
}
