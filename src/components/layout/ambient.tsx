const blobs = [
  {
    className:
      "-top-40 left-[6%] size-[36rem] bg-primary/5 lg:bg-primary/10 blur-[140px]",
  },
  {
    className:
      "top-[18%] right-[-8rem] size-[28rem] bg-sage/5 lg:bg-sage/10 blur-[130px]",
  },
  {
    className:
      "top-[52%] left-[12%] size-[26rem] bg-accent/5 lg:bg-accent/10 blur-[130px]",
  },
  {
    className:
      "bottom-[-8rem] right-[12%] size-[34rem] bg-primary/5 lg:bg-primary/10 blur-[145px]",
  },
  {
    className:
      "bottom-[10%] left-1/2 size-[30rem] -translate-x-1/2 bg-moss/10 lg:bg-moss/15 blur-[150px]",
  },
];

export default function Ambient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {blobs.map(({ className }, index) => (
        <div
          key={index}
          className={`absolute rounded-full transform-gpu ${className}`}
        />
      ))}
    </div>
  );
}
