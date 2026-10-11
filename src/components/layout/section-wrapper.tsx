export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-16 py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-0">{children}</div>
    </section>
  );
}
