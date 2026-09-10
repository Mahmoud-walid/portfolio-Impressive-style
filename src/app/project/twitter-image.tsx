import { buildTwitterImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Projects by Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: 'Projects',
    title: 'Mahmoud Walid',
    subtitle: 'Product Engineering Portfolio',
    accent: 'primary',
  });
}
