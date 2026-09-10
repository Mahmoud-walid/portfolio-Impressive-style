const DEFAULT_SITE_URL = 'https://mahmoudwalid.com';

function normalizeSiteUrl(rawUrl: string): string {
  const normalized = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;

  try {
    const parsed = new URL(normalized);
    parsed.pathname = '/';
    parsed.search = '';
    parsed.hash = '';
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL,
);

export const siteHost = new URL(`${siteUrl}/`).host;

export const devUrl = '';
export const linkHubUrl = '';
export const githubUrl = 'https://github.com/Mahmoud-walid';
export const githubSnakeGraphUrl = '';
export const linkedinUrl =
  'https://www.linkedin.com/in/mahmoud-walid-95391424a';
export const xUrl = 'https://x.com/mahmoudWalid_JS';
export const youtubeUrl = '';
export const hackatimeUrl =
  process.env.NEXT_PUBLIC_CODING_STATS_PROVIDER === 'hackatime'
    ? 'https://heatmap.shymike.dev/?id=30609&timezone=UTC'
    : 'https://wakatime.com/@mahmoudwalid';
export const sponsorUrl = 'https://github.com/sponsors/mahmoud-walid/';
export const donationUrl = '';
export const ogImageUrl = `${siteUrl}/opengraph-image`;
