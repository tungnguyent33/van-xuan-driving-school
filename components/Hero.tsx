import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/Button";

type CtaLink = { label: string; href: string };

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  /** "large" cho trang chủ, "small" cho hero rút gọn ở các trang con. */
  size?: "large" | "small";
  /** Ảnh nền hero (tùy chọn) — phủ gradient primary lên trên để chữ luôn rõ. */
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  size = "large",
  imageSrc,
  imageAlt,
}: HeroProps) {
  const isLarge = size === "large";

  return (
    <section className="relative overflow-hidden bg-primary">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          priority={isLarge}
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-dark/90" />
      <div
        className={`relative mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 sm:px-6 lg:px-8 ${
          isLarge ? "py-20 sm:py-28" : "py-14 sm:py-20"
        }`}
      >
        {eyebrow ? (
          <p className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/90">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`max-w-2xl font-extrabold leading-tight text-white ${
            isLarge
              ? "text-3xl sm:text-4xl md:text-5xl"
              : "text-2xl sm:text-3xl md:text-4xl"
          }`}
        >
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
        {primaryCta || secondaryCta ? (
          <div className="mt-1 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary" onDark>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
