"use client";

import { CONTACT } from "@/data/contact";
import { trackEvent } from "@/lib/tracking";

type HotlineLinkProps = {
  className?: string;
};

export default function HotlineLink({ className }: HotlineLinkProps) {
  if (!CONTACT.hotline) {
    return <span className={className}>(Đang cập nhật)</span>;
  }

  return (
    <a
      href={`tel:${CONTACT.hotline}`}
      onClick={() => trackEvent("click_hotline", { hotline: CONTACT.hotline })}
      className={className}
    >
      {CONTACT.hotline}
    </a>
  );
}
