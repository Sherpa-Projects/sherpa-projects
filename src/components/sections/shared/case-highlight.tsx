import { Check } from "lucide-react";
import Eyebrow from "@/components/ui/eyebrow";
import SectionWrapper from "@/components/layout/section-wrapper";

type CaseHighlightProps = {
  eyebrow: string;
  title: string;
  description: string;
  facts: { label: string; value: string }[];
  outcomesTitle: string;
  outcomes: string[];
};

export default function CaseHighlight({
  eyebrow,
  title,
  description,
  facts,
  outcomesTitle,
  outcomes,
}: CaseHighlightProps) {
  return (
    <SectionWrapper>
      <article className="grid overflow-hidden rounded-4xl border border-border bg-background/65 backdrop-blur-md lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div className="bg-primary/[0.04] p-8 lg:p-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-2 text-3xl leading-tight font-bold lg:text-4xl">
            {title}
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">{description}</p>

          <dl className="mt-8 space-y-4 border-t border-primary/10 pt-6">
            {facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4">
                <dt className="text-sm font-semibold text-primary">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-6 text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="p-8 lg:p-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-forest uppercase">
            {outcomesTitle}
          </p>
          <ul className="mt-6 space-y-5">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-moss text-forest">
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-lg leading-7 text-foreground">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </SectionWrapper>
  );
}
