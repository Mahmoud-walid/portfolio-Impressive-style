import { buildTwitterImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Contact Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: 'Contact',
    title: 'Mahmoud Walid',
    subtitle: 'Projects | Consulting | Collaboration',
    accent: 'primary',
  });
}
