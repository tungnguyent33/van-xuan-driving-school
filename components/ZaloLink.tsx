"use client";

import { CONTACT } from "@/data/contact";
import { trackEvent } from "@/lib/tracking";

type ZaloLinkProps = {
  className?: string;
};

export default function ZaloLink({ className }: ZaloLinkProps) {
  if (!CONTACT.zaloUrl) {
    return <span className={className}>(Đang cập nhật)</span>;
  }

  return (
    <a
      href={CONTACT.zaloUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_zalo", { zaloUrl: CONTACT.zaloUrl })}
      className={className}
    >
      Chat Zalo
    </a>
  );
}
