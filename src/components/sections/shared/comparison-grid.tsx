import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type ComparisonGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  options: {
    label: string;
    title: string;
    description: string;
    pointsTitle: string;
    points: string[];
    highlighted?: boolean;
    action?: {
      label: string;
      href: string;
    };
  }[];
  note?: string;
};

export default function ComparisonGrid({
  eyebrow,
  title,
  description,
  options,
  note,
}: ComparisonGridProps) {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {options.map((option) => (
          <article
            key={option.title}
            className={cn(
              "relative flex flex-col overflow-hidden rounded-3xl border p-8 lg:p-10",
              option.highlighted
                ? "border-transparent bg-primary text-primary-foreground shadow-[0_24px_70px_-40px_var(--primary)]"
                : "border-border bg-background/65 backdrop-blur-md",
            )}
          >
            <span
              className={cn(
                "w-fit rounded-full px-4 py-2 text-sm font-semibold",
                option.highlighted
                  ? "bg-white/10 text-white"
                  : "bg-moss/50 text-forest",
              )}
            >
              {option.label}
            </span>

            <h3 className="mt-8 max-w-sm text-2xl font-semibold leading-tight">
              {option.title}
            </h3>

            <p
              className={cn(
                "mt-5 max-w-md leading-7",
                option.highlighted
                  ? "text-primary-foreground/75"
                  : "text-muted-foreground",
              )}
            >
              {option.description}
            </p>

            <div
              className={cn(
                "mt-8 border-t pt-6",
                option.highlighted ? "border-white/15" : "border-border",
              )}
            >
              <p
                className={cn(
                  "mb-4 text-sm font-semibold uppercase",
                  option.highlighted ? "text-white/60" : "text-primary",
                )}
              >
                {option.pointsTitle}
              </p>

              <ul className="space-y-3">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 leading-7">
                    <span
                      className={cn(
                        "mt-1 flex size-5 shrink-0 items-center justify-center rounded-full",
                        option.highlighted
                          ? "bg-white/15 text-white"
                          : "bg-moss/60 text-forest",
                      )}
                    >
                      <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span
                      className={
                        option.highlighted
                          ? "text-primary-foreground/85"
                          : "text-muted-foreground"
                      }
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {option.action ? (
              <Link href={option.action.href} className="mt-auto w-fit pt-8">
                <Button
                  size="lg"
                  variant={option.highlighted ? "inverse" : "default"}
                >
                  {option.action.label}
                </Button>
              </Link>
            ) : null}
          </article>
        ))}
      </div>

      {note ? (
        <p className="mt-8 max-w-3xl border-l-2 border-forest pl-5 text-lg font-semibold leading-8 text-foreground">
          {note}
        </p>
      ) : null}
    </SectionWrapper>
  );
}
