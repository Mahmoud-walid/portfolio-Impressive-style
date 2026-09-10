import { buildOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Refund Policy | Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: 'Refund Policy',
    title: 'Refund Terms',
    subtitle: 'Services And Billing Terms',
    accent: 'accent',
  });
}
