import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Delivery Policy | Mahmoud Walid";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Delivery Policy",
    title: "Mahmoud Walid",
    subtitle: "Delivery Modes And Timelines",
    accent: "primary",
  });
}
