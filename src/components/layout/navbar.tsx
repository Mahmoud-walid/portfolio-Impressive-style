'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SignInButton } from '@/components/layout/sign-in-button';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/retroui/Button';
import { Menu } from '@/components/retroui/icons';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background/95 fixed top-0 z-50 w-full border-b-4 border-black backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="bg-accent text-accent-foreground shadow-retro border-4 border-black px-3 py-2 text-sm font-black tracking-wide sm:text-base"
        >
          ~/ Mahmoud Walid
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'shadow-retro border-4 border-black px-3 py-2 text-sm font-black tracking-wide uppercase transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center md:gap-2">
            <SignInButton className="shadow-retro-sm h-11 border-4 border-black px-4 font-black uppercase" />
          </div>
          <ThemeToggle />
          <Button
            variant="secondary"
            size="icon"
            className="h-11 w-11 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-background border-t-4 border-black p-4 md:hidden"
          >
            <div className="grid gap-2">
              <SignInButton className="w-full justify-center uppercase" />
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'shadow-retro border-4 border-black px-3 py-2 text-center text-sm font-black uppercase',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
