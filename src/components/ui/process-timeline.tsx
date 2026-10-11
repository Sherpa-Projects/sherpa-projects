"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { subtleTone } from "@/lib/tones";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "@/components/sections/shared/section-header";
import type { ProcessStep } from "@/components/sections/shared/process";

type ProcessTimelineProps = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export default function ProcessTimeline(props: ProcessTimelineProps) {
  return (
    <>
      <ProcessStepper {...props} />
      <ProcessList {...props} />
    </>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

// Desktop: steps rise left to right like an ascent, bottoms aligned, no route line.
function ProcessStepper({ eyebrow, title, steps }: ProcessTimelineProps) {
  const routeRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(routeRef, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const isVisible = reduceMotion || isInView;

  return (
    <div className="hidden lg:block">
      <SectionWrapper>
        <SectionHeader eyebrow={eyebrow} title={title} />

        <ol
          ref={routeRef}
          aria-label={title}
          className="relative mt-14 grid items-stretch gap-4"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >

          {steps.map((step, index) => {
            const tone = subtleTone(index);

            return (
            <motion.li
              key={step.number}
              className="group relative flex flex-col"
              style={{ paddingTop: `${(steps.length - 1 - index) * 2}rem` }}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : 0.15 + index * 0.18,
                ease: EASE,
              }}
            >
              <article
                className={cn(
                  "relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border p-6 backdrop-blur-md transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-white/20 before:to-transparent group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(36,52,112,0.08)] xl:p-7",
                  tone.card,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
                    tone.bar,
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute -top-5 -right-1 text-[5.5rem] leading-none font-semibold transition-colors duration-300",
                    tone.watermark,
                  )}
                >
                  {step.number}
                </span>
                <span
                  className={cn(
                    "relative text-xs font-semibold tracking-[0.2em] uppercase",
                    tone.number,
                  )}
                >
                  Schritt {step.number}
                </span>
                <h3 className="relative mt-4 text-lg leading-snug font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </motion.li>
            );
          })}
        </ol>
      </SectionWrapper>
    </div>
  );
}

// Mobile and tablet: a compact vertical list, all steps visible at once.
function ProcessList({ eyebrow, title, steps }: ProcessTimelineProps) {
  return (
    <div className="lg:hidden">
      <SectionWrapper>
        <SectionHeader eyebrow={eyebrow} title={title} />

        <ol className="mt-10 space-y-3">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={cn(
                "grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 rounded-2xl border border-border p-4",
                subtleTone(index).card,
              )}
            >
              <span className="flex size-8 rounded-full bg-background">
                <span
                  className={cn(
                    "flex size-full items-center justify-center rounded-full text-xs font-semibold",
                    subtleTone(index).icon,
                  )}
                >
                  {step.number}
                </span>
              </span>
              <div className="pt-1">
                <h3 className="text-lg leading-snug font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </SectionWrapper>
    </div>
  );
}
