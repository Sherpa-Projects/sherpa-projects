import { ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { subtleTone } from "@/lib/tones";
import SectionWrapper from "@/components/layout/section-wrapper";
import SectionHeader from "./section-header";

type FlowStepsProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  steps: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
};

// A data flow in one panel: input on the left, result on the right.
export default function FlowSteps({
  id,
  eyebrow,
  title,
  description,
  steps,
}: FlowStepsProps) {
  return (
    <SectionWrapper id={id}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <ol
        className="mt-10 grid gap-3 rounded-4xl border border-border bg-background/65 p-3 backdrop-blur-md lg:gap-0 lg:p-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 11rem), 1fr))",
        }}
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          const tone = subtleTone(index);
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step.title}
              className="relative rounded-3xl p-5 transition-colors duration-300 hover:bg-muted/70 lg:p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-xl",
                    tone.icon,
                  )}
                >
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold tracking-[0.2em]",
                    tone.number,
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg leading-snug font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>

              {!isLast ? (
                <span
                  aria-hidden="true"
                  className="absolute top-8 -right-3.5 z-10 hidden size-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm lg:flex lg:top-9"
                >
                  <ChevronRight size={14} />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}
