import { buildTwitterImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Mahmoud Walid retro portfolio social card';
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return buildTwitterImage({
    eyebrow: 'Shipping Ideas Into Products',
    title: 'Mahmoud Walid',
    subtitle: 'Frontend engineer, Freelancer and Full-Time Open-Sourcerer.',
    accent: 'secondary',
  });
}
