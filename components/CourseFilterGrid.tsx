"use client";

import Link from "next/link";
import { useState } from "react";
import type { CourseInfo, CourseSlug } from "@/data/courses";

type FilterKey = "all" | CourseSlug;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "hang-a1", label: "A1" },
  { key: "hang-a", label: "A" },
  { key: "cap-doi-cap-lai", label: "Cấp đổi" },
];

type CourseFilterGridProps = {
  courses: CourseInfo[];
};

export default function CourseFilterGrid({ courses }: CourseFilterGridProps) {
  const [active, setActive] = useState<FilterKey>("all");
  const filtered =
    active === "all" ? courses : courses.filter((c) => c.slug === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => {
          const isActive = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/70 ring-1 ring-black/10 hover:bg-primary-light"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <div
            key={course.slug}
            className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
              {course.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-primary">
              {course.shortName}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-foreground/80">
              {course.shortDescription}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href={course.href}
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Xem chi tiết →
              </Link>
              <Link
                href="/dang-ky"
                className="ml-auto inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
