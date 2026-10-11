import { Check } from "lucide-react";
import Eyebrow from "@/components/ui/eyebrow";
import BrandPanel from "@/components/ui/brand-panel";

type FeaturePanelProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  quote?: string;
};

export default function FeaturePanel({
  id,
  eyebrow,
  title,
  description,
  points,
  quote,
}: FeaturePanelProps) {
  return (
    <BrandPanel
      id={id}
      className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center"
    >
      <div>
        <Eyebrow color="moss">{eyebrow}</Eyebrow>
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">{title}</h2>
        <p className="max-w-xl leading-7 text-white/75">{description}</p>

        {quote ? (
          <blockquote className="mt-10 max-w-xl border-l-2 border-moss pl-5 text-lg leading-8 font-semibold text-white">
            {quote}
          </blockquote>
        ) : null}
      </div>

      <ul className="space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-moss text-forest">
              <Check size={14} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="font-medium">{point}</span>
          </li>
        ))}
      </ul>
    </BrandPanel>
  );
}
