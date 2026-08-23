import Link from "next/link";
import { LOW_SLOTS_THRESHOLD } from "@/lib/schedule";

export type ScheduleRow = {
  date: string;
  course: string;
  /** Số chỗ còn trống. Số ≤ LOW_SLOTS_THRESHOLD được highlight màu accent. */
  slots: number;
};

type ScheduleTableProps = {
  rows: ScheduleRow[];
  /** Href cho nút "Đăng ký" ở mỗi dòng. Mặc định trỏ tới /dang-ky. */
  registerHref?: string;
  /** Thông báo hiển thị khi không có dòng nào (đã lọc hết). */
  emptyMessage?: string;
};

export default function ScheduleTable({
  rows,
  registerHref = "/dang-ky",
  emptyMessage = "Không có lịch khai giảng phù hợp.",
}: ScheduleTableProps) {
  if (rows.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center text-sm text-foreground/60 shadow-sm ring-1 ring-black/5">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-black/5 text-foreground/60">
            <th className="px-4 py-3 font-semibold sm:px-6">Ngày khai giảng</th>
            <th className="px-4 py-3 font-semibold sm:px-6">Hạng bằng</th>
            <th className="px-4 py-3 font-semibold sm:px-6">Còn slot</th>
            <th className="px-4 py-3 font-semibold sm:px-6" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row.course}-${index}`}
              className="border-b border-black/5 last:border-0"
            >
              <td className="px-4 py-3 text-foreground/80 sm:px-6">
                {row.date}
              </td>
              <td className="px-4 py-3 font-medium text-primary sm:px-6">
                {row.course}
              </td>
              <td className="px-4 py-3 sm:px-6">
                {row.slots <= LOW_SLOTS_THRESHOLD ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    🔥 Còn {row.slots} chỗ
                  </span>
                ) : (
                  <span className="text-foreground/80">
                    Còn {row.slots} chỗ
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-right sm:px-6">
                <Link
                  href={registerHref}
                  className="text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Đăng ký →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
