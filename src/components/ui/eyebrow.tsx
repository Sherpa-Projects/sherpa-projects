type ColorType = "primary" | "moss" | "white";

const colorClasses: Record<ColorType, string> = {
  primary: "text-primary",
  moss: "text-moss",
  white: "text-white/60"
};

export default function Eyebrow({
  children,
  color = "primary",
}: {
  children: React.ReactNode;
  color?: ColorType;
}) {
  return (
    <h3 className={`mb-1 font-semibold ${colorClasses[color]} uppercase`}>
      {children}
    </h3>
  );
}
