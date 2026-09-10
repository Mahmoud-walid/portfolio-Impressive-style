import type { Metadata } from 'next';
import { PolicyPageClient } from '@/components/policies/policy-page-client';
import { siteUrl } from '@/lib/site-config';

const cookiesPolicyOgImageUrl = `${siteUrl}/cookies-policy/opengraph-image`;

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description: 'Cookies and tracking technologies policy for mahmoudwalid.com.',
  alternates: { canonical: '/cookies-policy' },
  openGraph: {
    title: 'Cookies Policy | Mahmoud Walid',
    description:
      'How cookies and analytics technologies are used on mahmoudwalid.com.',
    url: `${siteUrl}/cookies-policy`,
    type: 'website',
    images: [cookiesPolicyOgImageUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookies Policy | Mahmoud Walid',
    description:
      'How cookies and analytics technologies are used on mahmoudwalid.com.',
    images: [cookiesPolicyOgImageUrl],
  },
};

export default function CookiesPolicyPage() {
  return (
    <PolicyPageClient
      pageTitle="Cookies Policy"
      intro="This Cookies Policy explains how cookies and related tracking technologies are used on mahmoudwalid.com."
      sections={[
        {
          title: 'What Are Cookies',
          content: [
            'Cookies are small text files stored on your device to improve browsing experience, functionality, and analytics reporting.',
            'Some cookies are essential for core site behavior while others help analyze usage patterns and engagement.',
          ],
        },
        {
          title: 'How Cookies Are Used',
          content: [
            'Cookies may be used to remember preferences, improve page performance, and support analytics insights.',
            'Analytics and marketing tools, including Google Analytics and Google Tag Manager, may set or read cookies based on your interaction with the site.',
          ],
        },
        {
          title: 'Managing Cookies',
          content: [
            'You can control or disable cookies in your browser settings at any time.',
            'Disabling certain cookies may impact website functionality or user experience in specific features.',
          ],
        },
        {
          title: 'Consent',
          content: [
            'By using this website and accepting the cookie notice, you consent to cookie usage as described in this policy.',
            'For policy questions, contact: contact@mahmoudwalid.com.',
          ],
        },
      ]}
    />
  );
}
