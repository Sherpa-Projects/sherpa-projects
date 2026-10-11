import { cn } from "@/lib/utils";

// Line color per background surface the mountain sits on.
const surfaceColors = {
  primary: "text-mountain-primary",
  forest: "text-mountain-forest",
};

type MountainLinesProps = {
  surface: keyof typeof surfaceColors;
  className?: string;
  position?: "center" | "bottom";
};

// The mountain svg used as a mask, so its color follows the surface below it.
export default function MountainLines({
  surface,
  className,
  position = "center",
}: MountainLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-current",
        surfaceColors[surface],
        className,
      )}
      style={{
        maskImage: "url(/sherpa_mountain.svg)",
        maskSize: "cover",
        maskRepeat: "no-repeat",
        maskPosition: position,
        WebkitMaskImage: "url(/sherpa_mountain.svg)",
        WebkitMaskSize: "cover",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: position,
      }}
    />
  );
}
