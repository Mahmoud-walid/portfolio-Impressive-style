import { buildOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Cookies Policy | Mahmoud Walid';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: 'Cookies Policy',
    title: 'Cookie Usage',
    subtitle: 'Tracking And Preferences',
    accent: 'secondary',
  });
}
