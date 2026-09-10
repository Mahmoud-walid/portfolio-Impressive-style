import { buildTwitterImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Refund Policy | Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: 'Refund Policy',
    title: 'Mahmoud Walid',
    subtitle: 'Service Refund Conditions',
    accent: 'accent',
  });
}
