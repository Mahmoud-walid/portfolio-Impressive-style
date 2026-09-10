'use client';

import { animate } from 'animejs';
import { useEffect, useRef } from 'react';

export function InitialLoader() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) {
      return;
    }

    const bar = barRef.current;

    const progressAnim = animate(bar, {
      width: ['0%', '100%'],
      duration: 1800,
      ease: 'outCubic',
    });

    return () => {
      progressAnim.cancel();
    };
  }, []);

  return (
    <div className="bg-background/95 fixed inset-0 z-70 flex items-center justify-center px-4">
      <div className="bg-card shadow-retro-lg w-full max-w-lg border-4 border-black p-4 sm:p-6">
        <p className="font-pixel text-foreground text-2xl uppercase sm:text-3xl">
          Mahmoud Walid
        </p>
        <p className="text-muted-foreground mt-2 text-sm font-black uppercase sm:text-base">
          Loading Workspace
          <span className="animate-dots" />
        </p>
        <div className="bg-muted mt-5 h-7 border-4 border-black p-1 sm:h-8">
          <div
            ref={barRef}
            className="bg-primary shadow-retro-sm h-full w-0 border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
}
