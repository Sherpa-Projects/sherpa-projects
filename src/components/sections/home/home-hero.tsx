"use client";

import * as React from "react";
import Link from "next/link";
import Eyebrow from "@/components/ui/eyebrow";
import H1 from "@/components/ui/h1";
import FullScreenWrapper from "@/components/layout/full-screen-wrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type HomeHeroProps = {
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
  slides: {
    image: string;
    eyebrow: string;
    title: string;
    description: string;
  }[];
};

const AUTOPLAY_INTERVAL = 7000;

export default function HomeHero({
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  slides,
}: HomeHeroProps) {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [selectedSlide, setSelectedSlide] = React.useState(0);
  const [progressRun, setProgressRun] = React.useState(0);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(interval);
    };
  }, [carouselApi]);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelectedSlide = () => {
      setSelectedSlide(carouselApi.selectedScrollSnap());
      setProgressRun((run) => run + 1);
    };

    queueMicrotask(updateSelectedSlide);

    carouselApi.on("select", updateSelectedSlide);
    carouselApi.on("reInit", updateSelectedSlide);

    return () => {
      carouselApi.off("select", updateSelectedSlide);
      carouselApi.off("reInit", updateSelectedSlide);
    };
  }, [carouselApi]);

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

      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true, duration: 40 }}
        className="min-h-[40vh] overflow-hidden lg:mt-16 lg:h-[calc(100vh-4rem)] lg:min-h-0 lg:w-[calc(100%+((100vw-100cqw)/2))] [&_[data-slot=carousel-content]]:h-full"
        aria-label="Hero Bilder"
        style={
          {
            "--hero-carousel-duration": `${AUTOPLAY_INTERVAL}ms`,
            "--hero-carousel-zoom-duration": `${AUTOPLAY_INTERVAL + 800}ms`,
          } as React.CSSProperties
        }
      >
        <div className="flex absolute top-5 lg:top-10 right-6 left-6 z-10 gap-2 lg:right-12 lg:left-12">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className="h-1 flex-1 overflow-hidden rounded-full bg-primary-foreground/30 backdrop-blur-sm"
            >
              <div
                key={`${slide.image}-${selectedSlide === index ? progressRun : "idle"}`}
                className={[
                  "h-full rounded-full bg-primary-foreground",
                  index < selectedSlide ? "w-full" : "",
                  index === selectedSlide
                    ? "w-0 animate-[hero-carousel-progress_var(--hero-carousel-duration)_linear_forwards]"
                    : "",
                  index > selectedSlide ? "w-0" : "",
                ].join(" ")}
              />
            </div>
          ))}
        </div>

        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.image} className="h-full pl-0">
              <div className="relative h-full min-h-[40vh] overflow-hidden lg:min-h-0">
                <div
                  key={`${slide.image}-${selectedSlide === index ? progressRun : "idle"}`}
                  className={[
                    "absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform",
                    selectedSlide === index
                      ? "motion-safe:animate-[hero-carousel-zoom_var(--hero-carousel-zoom-duration)_ease-out_forwards]"
                      : "scale-100",
                  ].join(" ")}
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/25 to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 max-w-md text-primary-foreground lg:right-12 lg:bottom-12 lg:left-12">
                  <p className="mb-3 text-sm font-semibold tracking-wide uppercase">
                    {slide.eyebrow}
                  </p>
                  <h2 className="text-2xl leading-tight font-bold lg:text-4xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-primary-foreground/85 lg:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </FullScreenWrapper>
  );
}
