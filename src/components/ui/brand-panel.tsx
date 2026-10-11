import MountainLines from "@/components/ui/mountain-lines";
import { cn } from "@/lib/utils";

// Panel colors per surface; the mountain lines follow the same surface.
const surfaces = {
  forest: "bg-forest text-white",
  primary: "bg-primary text-primary-foreground",
};

type BrandPanelProps = {
  id?: string;
  surface?: keyof typeof surfaces;
  children: React.ReactNode;
  className?: string;
};

export default function BrandPanel({
  id,
  surface = "forest",
  children,
  className,
}: BrandPanelProps) {
  return (
    <section id={id} className="scroll-mt-16 py-12 lg:py-20">
      <div className="container mx-auto py-10 px-4 lg:px-0">
        <div
          className={cn(
            "relative overflow-hidden rounded-4xl p-8 lg:p-12",
            surfaces[surface],
          )}
        >
          <MountainLines surface={surface} />

          <div className={cn("relative z-10", className)}>{children}</div>
        </div>
      </div>
    </section>
  );
}
