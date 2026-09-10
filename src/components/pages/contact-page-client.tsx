'use client';

import { animate } from 'animejs';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ContactForm } from '@/components/portfolio/contact-form';
import { Button } from '@/components/retroui/Button';
import { Card } from '@/components/retroui/Card';
import { Mail, MessageSquare, Users } from '@/components/retroui/icons';
import { linkedinUrl } from '@/lib/site-config';

const contactFaqItems = [
  {
    question: 'How long will it take for you to respond?',
    answer:
      'I usually respond within 1-3 days. If I am handling another active delivery window, it can take a little longer, but I always reply with a clear next step.',
  },
  {
    question: 'How will I receive your response?',
    answer:
      'You will receive my response by email. If needed, I can also continue discussion through LinkedIn for collaboration and follow-ups.',
  },
] as const;

export function ContactPageClient() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) {
      return;
    }

    const sections = root.querySelectorAll('[data-contact-reveal]');
    animate(sections, {
      opacity: [0, 1],
      translateY: [16, 0],
      stagger: 80,
      duration: 300,
      ease: 'outQuad',
    });
  }, []);

  return (
    <div ref={pageRef} className="space-y-6 pb-16">
      <section
        className="bg-card shadow-retro-lg border-4 border-black p-4 sm:p-6 md:p-8"
        data-contact-reveal
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
            Contact
          </h1>
          <span className="bg-primary text-primary-foreground shadow-retro-sm inline-block w-fit rotate-[-2deg] border-2 border-black px-3 py-1.5 text-sm font-black uppercase sm:text-base">
            20% Off Limited Time Summer Offer
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed font-medium sm:text-base">
          Ready to build something valuable? Submit your inquiry with complete
          details: name, email, country, business inquiry topic, project
          requirements, and optional phone/start/end dates so I can reply with a
          clear execution plan.
        </p>
      </section>

      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        data-contact-reveal
      >
        {[
          {
            icon: Mail,
            title: 'Clear Communication',
            description:
              'You receive transparent updates, delivery checkpoints, and concrete next steps at every stage.',
          },
          {
            icon: MessageSquare,
            title: 'Execution-First Planning',
            description:
              'I focus on actionable scope, realistic timelines, and technical decisions that support business outcomes.',
          },
          {
            icon: Users,
            title: 'Collaboration Ready',
            description:
              'I can work directly with founders, product teams, or engineering teams with minimal onboarding overhead.',
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="bg-card shadow-retro-md border-4 border-black"
          >
            <Card.Content className="space-y-3">
              <item.icon className="h-5 w-5" />
              <h3 className="font-display text-2xl uppercase">{item.title}</h3>
              <p className="leading-relaxed font-medium">{item.description}</p>
            </Card.Content>
          </Card>
        ))}
      </section>

      <section
        className="bg-secondary shadow-retro-lg border-4 border-black p-6 md:p-8"
        data-contact-reveal
      >
        <h2 className="font-display text-secondary-foreground text-3xl uppercase sm:text-4xl">
          Project Inquiry Form
        </h2>
        <div className="bg-background shadow-retro-md mt-5 border-4 border-black p-4">
          <ContactForm />
        </div>
      </section>

      <section className="space-y-4" data-contact-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Prefer Direct Channels?
          </h2>
          <Button
            asChild
            variant="secondary"
            className="shadow-retro-sm w-full border-4 border-black uppercase sm:w-auto"
          >
            <Link href={linkedinUrl} target="_blank" rel="noreferrer noopener">
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="bg-card shadow-retro-md border-4 border-black">
            <Card.Header>
              <Card.Title className="font-display text-2xl uppercase">
                Email Collaboration
              </Card.Title>
            </Card.Header>
            <Card.Content className="space-y-3">
              <p className="leading-relaxed font-medium">
                For project briefs, product requirements, and delivery
                discussions, email is the fastest structured channel.
              </p>
              <Button
                asChild
                className="shadow-retro-sm w-full border-4 border-black uppercase sm:w-auto"
              >
                <Link href="mailto:contact@mahmoudwalid.com">Email Now</Link>
              </Button>
            </Card.Content>
          </Card>
          <Card className="bg-card shadow-retro-md border-4 border-black">
            <Card.Header>
              <Card.Title className="font-display text-2xl uppercase">
                LinkedIn Networking
              </Card.Title>
            </Card.Header>
            <Card.Content className="space-y-3">
              <p className="leading-relaxed font-medium">
                For strategic collaboration, partnerships, and long-term product
                opportunities, LinkedIn works great.
              </p>
              <Button
                asChild
                variant="secondary"
                className="shadow-retro-sm w-full border-4 border-black uppercase sm:w-auto"
              >
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Connect on LinkedIn
                </Link>
              </Button>
            </Card.Content>
          </Card>
        </div>
      </section>

      <section className="space-y-4" data-contact-reveal>
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          Contact FAQ
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactFaqItems.map((item) => (
            <Card
              key={item.question}
              className="bg-card shadow-retro-md border-4 border-black"
            >
              <Card.Header>
                <Card.Title className="font-display text-xl uppercase">
                  {item.question}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="leading-relaxed font-medium">{item.answer}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
