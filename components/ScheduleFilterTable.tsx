"use client";

import { useMemo, useState } from "react";
import ScheduleTable from "@/components/ScheduleTable";
import { COURSES, type CourseSlug } from "@/data/courses";

export type ScheduleEntry = {
  hangBang: CourseSlug;
  /** Mốc thời gian tương đối (chưa có lịch cụ thể nên không dùng ngày thật). */
  period: "thang-nay" | "thang-sau";
  date: string;
  slots: number;
};

const HANG_BANG_FILTERS: { key: CourseSlug | "all"; label: string }[] = [
  { key: "all", label: "Tất cả hạng bằng" },
  { key: "hang-a1", label: "Hạng A1" },
  { key: "hang-a", label: "Hạng A" },
  { key: "cap-doi-cap-lai", label: "Cấp đổi / cấp lại" },
];

const PERIOD_FILTERS: { key: ScheduleEntry["period"] | "all"; label: string }[] = [
  { key: "all", label: "Tất cả các tháng" },
  { key: "thang-nay", label: "Tháng này" },
  { key: "thang-sau", label: "Tháng sau" },
];

const selectClass =
  "rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

type ScheduleFilterTableProps = {
  entries: ScheduleEntry[];
};

export default function ScheduleFilterTable({
  entries,
}: ScheduleFilterTableProps) {
  const [hangBang, setHangBang] = useState<CourseSlug | "all">("all");
  const [period, setPeriod] = useState<ScheduleEntry["period"] | "all">("all");

  const rows = useMemo(() => {
    return entries
      .filter((entry) => hangBang === "all" || entry.hangBang === hangBang)
      .filter((entry) => period === "all" || entry.period === period)
      .map((entry) => ({
        date: entry.date,
        course: COURSES[entry.hangBang].shortName,
        slots: entry.slots,
      }));
  }, [entries, hangBang, period]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        <select
          value={hangBang}
          onChange={(event) => setHangBang(event.target.value as CourseSlug | "all")}
          className={selectClass}
          aria-label="Lọc theo hạng bằng"
        >
          {HANG_BANG_FILTERS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={period}
          onChange={(event) =>
            setPeriod(event.target.value as ScheduleEntry["period"] | "all")
          }
          className={selectClass}
          aria-label="Lọc theo tháng"
        >
          {PERIOD_FILTERS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <ScheduleTable
        rows={rows}
        emptyMessage="Không có lịch khai giảng phù hợp với bộ lọc. Hãy thử bộ lọc khác hoặc liên hệ tư vấn."
      />
    </div>
  );
}
