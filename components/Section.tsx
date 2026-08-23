import type { ReactNode } from "react";

type SectionTone = "default" | "muted" | "primary";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  id?: string;
};

const toneStyles: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "bg-background-muted",
  primary: "bg-primary text-white",
};

export default function Section({
  children,
  className = "",
  tone = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${toneStyles[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {children}
      </div>
    </section>
  );
}
