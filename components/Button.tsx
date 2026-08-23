import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Dùng khi đặt trên nền tối (ví dụ hero/CTA band nền primary) để đảm bảo tương phản. */
  onDark?: boolean;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200";

export default function Button({
  href,
  children,
  variant = "primary",
  onDark = false,
  className = "",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : onDark
        ? "border border-white text-white bg-transparent hover:bg-white/10"
        : "border border-primary text-primary bg-transparent hover:bg-primary-light";

  return (
    <Link href={href} className={`${baseStyles} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
