export interface LinkItem {
  href: string;
  name: string;
  description: string;
}

export const links: LinkItem[] = [
  {
    href: 'https://github.com/mahmoud-walid',
    name: 'GitHub',
    description: 'Open source projects and contributions',
  },
  {
    href: 'https://www.linkedin.com/in/mahmoud-walid-95391424a',
    name: 'LinkedIn',
    description: 'Connect with me professionally',
  },
  {
    href:
      process.env.NEXT_PUBLIC_CODING_STATS_PROVIDER === 'hackatime'
        ? 'https://heatmap.shymike.dev/?id=30609&timezone=UTC'
        : 'https://wakatime.com/@mahmoudwalid',
    name:
      process.env.NEXT_PUBLIC_CODING_STATS_PROVIDER === 'hackatime'
        ? 'Hackatime Activity'
        : 'Wakatime Activity',
    description: 'Check my coding activity',
  },
  {
    href: 'https://mahmoudwalid.com',
    name: 'Portfolio',
    description: 'Visit my main website',
  },
  {
    href: 'https://x.com/mahmoudWalid_JS',
    name: 'X (Twitter)',
    description: 'Follow me for updates',
  },
  // {
  //   href: '',
  //   name: 'YouTube',
  //   description: 'Subscribe to my channel for tech content',
  // },
  // {
  //   href: '',
  //   name: 'Dribbble',
  //   description: 'My design work and shots',
  // },
  {
    href: 'mailto:contact@mahmoudwalid.com',
    name: 'Contact Me',
    description: 'Get in touch via email',
  },
  // {
  //   href: '',
  //   name: 'ORCID',
  //   description: 'My ORCID researcher profile',
  // },
  // {
  //   href: '',
  //   name: 'daily.dev Community',
  //   description: 'AI tools, resources, and developer updates',
  // },
  {
    href: 'https://daily.dev/mahmoud_walid_js',
    name: 'daily.dev Profile',
    description: 'My daily.dev developer profile',
  },
];
