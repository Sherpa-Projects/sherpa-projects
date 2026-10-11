"use client";

import { useEffect, useRef, useState } from "react";

type MetricCardProps = {
  value: string;
  label: string;
  tone: "forest" | "sage" | "warning";
  progress: number;
};

export function MetricCard({ value, label, tone, progress }: MetricCardProps) {
  const targetValue = Number(value.replace(/\./g, ""));
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredViewport) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const frameId = requestAnimationFrame(() => setAnimationProgress(1));
      return () => cancelAnimationFrame(frameId);
    }

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const elapsed = timestamp - startTime;
      const progressRatio = Math.min(elapsed / 1200, 1);
      const easedProgress = 1 - (1 - progressRatio) ** 3;

      setAnimationProgress(easedProgress);

      if (progressRatio < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [hasEnteredViewport]);

  const dotClass = {
    forest: "bg-forest",
    sage: "bg-sage",
    warning: "bg-amber-500",
  }[tone];

  return (
    <div
      className="rounded-2xl border border-black/10 p-5"
      ref={cardRef}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className={`size-2 rounded-full ${dotClass}`} />

        <span className="text-2xl font-bold">
          {Math.round(targetValue * animationProgress).toLocaleString("de-DE")}
        </span>
      </div>

      <p className="text-sm text-foreground/55">{label}</p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted/60">
        <div
          className={`h-full rounded-full ${dotClass}`}
          style={{ width: `${progress * animationProgress}%` }}
        />
      </div>
    </div>
  );
}
