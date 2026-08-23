"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/lich-khai-giang", label: "Lịch khai giảng" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight text-primary sm:text-xl">
            Phú Thọ{" "}
            <span className="font-normal text-foreground/70">
              | Chi nhánh Vạn Xuân
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/dang-ky"
            className="hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-dark md:inline-flex"
          >
            Đăng ký học ngay
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
            aria-label="Mở menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav className="hidden bg-primary md:block">
        <div className="mx-auto flex max-w-6xl items-center gap-1 px-4 sm:px-6 lg:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-primary-dark hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {isMenuOpen ? (
        <nav className="bg-primary md:hidden">
          <div className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-primary-dark hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dang-ky"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-md bg-accent px-3 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark"
            >
              Đăng ký học ngay
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
