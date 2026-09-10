'use client';

import { animate, stagger } from 'animejs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Badge } from '@/components/retroui/Badge';
import { BentoCard, BentoGrid } from '@/components/retroui/Bento';
import { Button } from '@/components/retroui/Button';
import { BarChart } from '@/components/retroui/charts/BarChart';
import { LineChart } from '@/components/retroui/charts/LineChart';
import type { GitHubOverviewPayload } from '@/lib/portfolio-types';
import { githubSnakeGraphUrl, githubUrl } from '@/lib/site-config';

export function GithubOverviewBento({
  stats,
}: {
  stats: GitHubOverviewPayload | null;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (
      !root ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const cards = Array.from(
      root.querySelectorAll('[data-gh-card]'),
    ) as HTMLElement[];
    const pills = Array.from(
      root.querySelectorAll('[data-gh-pill]'),
    ) as HTMLElement[];

    if (cards.length > 0) {
      animate(cards, {
        opacity: [0, 1],
        translateY: [10, 0],
        delay: stagger(40, { start: 50 }),
        duration: 320,
        ease: 'outCubic',
      });
    }

    if (pills.length > 0) {
      animate(pills, {
        opacity: [0, 1],
        scale: [0.92, 1],
        delay: stagger(35, { start: 260 }),
        duration: 380,
        ease: 'outBack',
      });
    }
  }, []);

  if (!stats) {
    return (
      <div className="bg-card shadow-retro-md border-4 border-black p-6 text-center font-black uppercase">
        GitHub overview is unavailable right now.
      </div>
    );
  }

  const languageChartData = [...stats.languages].sort(
    (a, b) => b.repos - a.repos,
  );
  const insightsData = [
    {
      metric: 'Stars Avg',
      value: Math.max(
        0,
        Math.round(stats.totalStars / Math.max(stats.totalRepositories, 1)),
      ),
    },
    {
      metric: 'Forks Avg',
      value: Math.max(
        0,
        Math.round(stats.totalForks / Math.max(stats.totalRepositories, 1)),
      ),
    },
    {
      metric: 'Watch Avg',
      value: Math.max(
        0,
        Math.round(stats.totalWatchers / Math.max(stats.totalRepositories, 1)),
      ),
    },
    {
      metric: 'Public Repos',
      value: stats.publicRepos,
    },
  ];

  return (
    <div ref={sectionRef}>
      <BentoGrid className="mx-auto w-full">
        <BentoCard
          data-gh-card
          className="self-start sm:col-span-2 lg:col-span-4"
        >
          <p className="font-display text-2xl uppercase">GitHub Pulse</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#ffe08a] px-3 py-3 text-center text-sm font-black text-black uppercase"
            >
              Followers {stats.followers}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#8cf5ff] px-3 py-3 text-center text-sm font-black text-black uppercase"
            >
              Following {stats.following}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#b7ff66] px-3 py-3 text-center text-sm font-black text-black uppercase"
            >
              Repos {stats.totalRepositories}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#ffd146] px-3 py-3 text-center text-sm font-black text-black uppercase"
            >
              Stars {stats.totalStars}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#ff9ac2] px-3 py-3 text-center text-sm font-black text-black uppercase"
            >
              Forks {stats.totalForks}
            </Badge>
            <Badge
              data-gh-pill
              variant="surface"
              className="justify-center border-2 border-black bg-[#c6a8ff] px-3 py-3 text-center text-sm font-black text-black uppercase"
            >
              Watch {stats.totalWatchers}
            </Badge>
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="self-start sm:col-span-2 lg:col-span-4"
        >
          <p className="font-display text-2xl uppercase">Github Graphs</p>
          <p className="text-muted-foreground mt-1 text-xs font-bold uppercase">
            Contribution snake graph, live from GitHub profile output.
          </p>
          <div className="bg-muted shadow-retro-sm mt-4 overflow-hidden border-4 border-black p-2 sm:p-3">
            <Image
              src={githubSnakeGraphUrl}
              alt="Mahmoud Walid GitHub contribution snake graph"
              width={1200}
              height={260}
              className="bg-card h-auto w-full border-2 border-black"
              priority={false}
              loading="lazy"
              unoptimized
            />
          </div>
          <Button
            asChild
            variant="secondary"
            className="mt-4 w-full border-4 border-black uppercase sm:w-auto"
          >
            <Link href={githubUrl} target="_blank" rel="noreferrer noopener">
              View Full GitHub Profile
            </Link>
          </Button>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="h-full min-h-96 self-start sm:col-span-2 lg:col-span-2"
        >
          <p className="font-display text-2xl uppercase">
            Top Repositories by Stars
          </p>
          <div className="mt-3 h-72 w-full">
            <BarChart
              data={stats.topRepositories}
              index="name"
              categories={['stars']}
              className="h-72"
              isAnimationActive={false}
              fillColors={['var(--chart-1)']}
              strokeColors={['var(--foreground)']}
              valueFormatter={(value) => `${value}`}
            />
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="h-full min-h-96 self-start sm:col-span-2 lg:col-span-2"
        >
          <p className="font-display text-2xl uppercase">
            Languages Used Across Projects
          </p>
          <div className="retro-scrollbar mt-3 max-h-96 overflow-x-hidden overflow-y-auto pr-2">
            <BarChart
              data={languageChartData}
              index="language"
              categories={['repos']}
              className="h-112 min-h-112 w-full"
              alignment="horizontal"
              isAnimationActive={false}
              horizontalYAxisWidth={116}
              horizontalCategoryFormatter={(value) =>
                value.length > 12 ? `${value.slice(0, 11)}.` : value
              }
              fillColors={['var(--chart-1)']}
              strokeColors={['var(--foreground)']}
              valueFormatter={(value) => `${value}`}
            />
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="h-full min-h-96 self-start sm:col-span-2 lg:col-span-2"
        >
          <p className="font-display text-2xl uppercase">
            Repository Activity by Month
          </p>
          <div className="mt-3 h-72 w-full">
            <LineChart
              data={stats.monthlyActivity}
              index="month"
              categories={['repos']}
              className="h-72"
              isAnimationActive={false}
              strokeColors={['var(--chart-2)']}
              valueFormatter={(value) => `${value}`}
            />
          </div>
        </BentoCard>

        <BentoCard
          data-gh-card
          className="h-full min-h-96 self-start sm:col-span-2 lg:col-span-2"
        >
          <p className="font-display text-2xl uppercase">GitHub Insights</p>
          <div className="mt-4 h-72 w-full">
            <BarChart
              data={insightsData}
              index="metric"
              categories={['value']}
              className="h-72"
              alignment="horizontal"
              isAnimationActive={false}
              fillColors={['var(--chart-3)']}
              strokeColors={['var(--foreground)']}
              valueFormatter={(value) => `${value}`}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed font-medium">
            Live snapshot based on your current GitHub repository portfolio and
            profile engagement metrics.
          </p>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
