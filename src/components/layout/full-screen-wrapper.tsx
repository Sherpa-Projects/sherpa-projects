import { cn } from "@/lib/utils";

type FullScreenWrapperProps = {
  children: React.ReactNode;
  className?: string;
  gridClassName?: string;
  // Absolutely positioned layers behind the grid, e.g. graphics or glows.
  background?: React.ReactNode;
  // Content below the grid that belongs to the same screen, e.g. a fact strip.
  footer?: React.ReactNode;
};

export default function FullScreenWrapper({
  children,
  className,
  gridClassName,
  background,
  footer,
}: FullScreenWrapperProps) {
  return (
    <section
      className={cn(
        "min-h-screen lg:h-screen",
        (background || footer) && "relative flex flex-col overflow-hidden lg:h-auto",
        className,
      )}
    >
      {background}
      <div
        className={cn(
          "container mx-auto grid min-h-screen w-full grid-cols-1 [container-type:inline-size] lg:h-screen lg:grid-cols-2",
          (background || footer) && "relative min-h-0 flex-1 lg:h-auto",
          gridClassName,
        )}
      >
        {children}
      </div>
      {footer}
    </section>
  );
}
