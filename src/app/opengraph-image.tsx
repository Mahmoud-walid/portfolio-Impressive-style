import { buildOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Mahmoud Walid Portfolio v5 preview';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: 'Mahmoud Walid Portfolio v5',
    title: 'Mahmoud Walid',
    subtitle: "3 years of experience | Frontend Engineer | Let's Connect",
    accent: 'primary',
  });
}
