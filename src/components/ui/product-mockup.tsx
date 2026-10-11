import { cn } from "@/lib/utils";
import { MetricCard } from "@/components/ui/metric-card";

export type ProductMockupProps = {
  title: string;
  badge: string;
  caption: string;
  metrics: {
    value: string;
    label: string;
    tone: "forest" | "sage" | "warning";
    progress: number;
  }[];
  documents: {
    name: string;
    status: string;
    tone: "ok" | "review";
  }[];
};

// Stylised product window; illustrative only, not real data.
export default function ProductMockup({
  title,
  badge,
  caption,
  metrics,
  documents,
}: ProductMockupProps) {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-3xl bg-white text-foreground shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/20">
        <div className="flex items-center gap-4 border-b border-border bg-muted/60 px-5 py-3">
          <div aria-hidden="true" className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
          </div>
          <span className="flex-1 truncate text-sm font-semibold">{title}</span>
          <span className="flex items-center gap-2 rounded-full bg-moss/60 px-3 py-1 text-xs font-semibold text-forest">
            <span className="size-1.5 rounded-full bg-forest" />
            {badge}
          </span>
        </div>

        <div className="space-y-4 p-5 lg:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <ul className="divide-y divide-border rounded-2xl border border-border">
            {documents.map((document) => (
              <li
                key={document.name}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <span className="truncate font-mono text-xs text-foreground/70">
                  {document.name}
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                    document.tone === "ok"
                      ? "bg-moss/50 text-forest"
                      : "bg-amber-100 text-amber-800",
                  )}
                >
                  {document.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-right text-xs text-white/50">
        {caption}
      </figcaption>
    </figure>
  );
}
