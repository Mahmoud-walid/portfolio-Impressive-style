import { buildTwitterImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'About Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: 'About',
    title: 'Mahmoud Walid',
    subtitle: 'Journey | Work | Open-Sourcerer',
    accent: 'accent',
  });
}
