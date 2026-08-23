import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  /** Liên kết "Xem chi tiết" hiển thị ở cuối card, tùy chọn. */
  cta?: { label: string; href: string };
};

export default function Card({ title, children, icon, cta }: CardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-md">
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          {icon}
        </div>
      ) : null}
      <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-foreground/80">
        {children}
      </p>
      {cta ? (
        <Link
          href={cta.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
        >
          {cta.label} <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}
