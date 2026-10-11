"use client";

import Link from "next/link";
import Image from "next/image";
import MountainLines from "@/components/ui/mountain-lines";
import Eyebrow from "@/components/ui/eyebrow";
import H1 from "@/components/ui/h1";
import FullScreenWrapper from "@/components/layout/full-screen-wrapper";
import { Button } from "@/components/ui/button";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: {
    title: string;
    url: string;
  };
  secondaryButton: {
    title: string;
    url: string;
  };
  image: {
    // Without a photo the hero falls back to the brand panel with the mountain line art.
    src?: string;
    alt: string;
    overlay: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  image,
}: ServiceHeroProps) {
  return (
    <FullScreenWrapper>
      <div className="flex flex-col justify-center space-y-8 px-4 py-24 lg:pr-16 xl:pr-24 lg:pl-0">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <H1>{title}</H1>
        </div>
        <p className="text-base leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {primaryButton.url ? (
            <Link
              href={primaryButton.url}
              className="flex shrink-0 items-center"
            >
              <Button size="lg" variant="default">
                {primaryButton.title}
              </Button>
            </Link>
          ) : null}
          {secondaryButton.url ? (
            <Link
              href={secondaryButton.url}
              className="flex shrink-0 items-center"
            >
              <Button size="lg" variant="secondary">
                {secondaryButton.title}
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="relative min-h-[40vh] overflow-hidden lg:mt-16 lg:h-[calc(100vh-4rem)] lg:min-h-0 lg:w-[calc(100%+((100vw-100cqw)/2))]">
        {image.src ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center motion-safe:animate-[service-hero-zoom_24s_ease-in-out_infinite_alternate]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/25 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-forest">
            <MountainLines surface="forest" className="motion-safe:animate-[service-hero-zoom_24s_ease-in-out_infinite_alternate]" />
          </div>
        )}
        <div className="absolute right-6 bottom-6 left-6 max-w-md text-primary-foreground lg:right-12 lg:bottom-12 lg:left-12">
          <p className="mb-3 text-sm font-semibold tracking-wide uppercase">
            {image.overlay.eyebrow}
          </p>
          <h2 className="text-2xl leading-tight font-bold lg:text-4xl">
            {image.overlay.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-primary-foreground/85 lg:text-base">
            {image.overlay.description}
          </p>
        </div>
      </div>
    </FullScreenWrapper>
  );
}
