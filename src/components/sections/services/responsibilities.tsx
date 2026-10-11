"use client";

import { motion, useInView, useReducedMotion, useScroll } from "motion/react";
import { useRef } from "react";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "../shared/section-header";

type ResponsibilitiesProps = {
  eyebrow: string;
  title: string;
  description: string;
  levels: {
    title: string;
    description: string;
  }[];
};

export default function Responsibilities({
  eyebrow,
  title,
  description,
  levels,
}: ResponsibilitiesProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div ref={timelineRef} className="mt-12 lg:mt-16">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border lg:block"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px origin-left bg-forest lg:block"
            style={{ scaleX: reduceMotion ? 1 : scrollYProgress }}
          />

          <ol
            aria-label={title}
            className="relative flex flex-col gap-8 lg:grid lg:gap-4"
            style={{
              gridTemplateColumns: `repeat(${levels.length}, minmax(0, 1fr))`,
            }}
          >
            {levels.map((level, index) => (
              <TimelineLevel
                key={level.title}
                level={level}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}

function TimelineLevel({
  level,
  index,
  reduceMotion,
}: {
  level: ResponsibilitiesProps["levels"][number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const levelRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(levelRef, { once: true, amount: 0.5 });
  const isVisible = reduceMotion || isInView;

  return (
    <motion.li
      ref={levelRef}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-4 lg:block lg:after:hidden after:absolute after:left-5 after:top-10 after:-bottom-[3.25rem] after:w-px after:bg-border last:after:hidden"
    >
      <div className="col-start-1 row-start-1 flex h-10 items-center justify-center lg:col-auto lg:row-auto">
        <motion.span
          aria-hidden="true"
          initial={reduceMotion ? false : { scale: 0.7 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.7 }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : index * 0.12,
          }}
          className="flex size-10 items-center justify-center rounded-full border border-forest/25 bg-background text-xs font-semibold text-primary shadow-sm"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>
      <h3 className="col-start-2 row-start-1 mt-1 max-w-56 text-lg font-semibold leading-snug text-foreground lg:col-auto lg:row-auto lg:mt-6">
        {level.title}
      </h3>
      <p className="col-start-2 row-start-2 mt-2 max-w-64 text-sm leading-6 text-muted-foreground lg:col-auto lg:row-auto lg:mt-3">
        {level.description}
      </p>
    </motion.li>
  );
}
