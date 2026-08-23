import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ScheduleFilterTable, {
  type ScheduleEntry,
} from "@/components/ScheduleFilterTable";
import { randomSlots } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Lịch khai giảng",
  description:
    "Lịch khai giảng và lịch thi sát hạch các hạng bằng lái tại Trung tâm đào tạo lái xe Phú Thọ.",
};

const SCHEDULE_ENTRIES: ScheduleEntry[] = [
  { hangBang: "hang-a1", period: "thang-nay", date: "(Đang cập nhật)", slots: randomSlots() },
  { hangBang: "hang-a1", period: "thang-sau", date: "(Đang cập nhật)", slots: randomSlots() },
  { hangBang: "hang-a", period: "thang-nay", date: "(Đang cập nhật)", slots: randomSlots() },
  { hangBang: "hang-a", period: "thang-sau", date: "(Đang cập nhật)", slots: randomSlots() },
  { hangBang: "cap-doi-cap-lai", period: "thang-nay", date: "(Đang cập nhật)", slots: randomSlots() },
  { hangBang: "cap-doi-cap-lai", period: "thang-sau", date: "(Đang cập nhật)", slots: randomSlots() },
];

const EXAM_SCHEDULE = [
  { date: "(Đang cập nhật)", hangBang: "Hạng A1", location: "(Đang cập nhật)" },
  { date: "(Đang cập nhật)", hangBang: "Hạng A", location: "(Đang cập nhật)" },
  {
    date: "(Đang cập nhật)",
    hangBang: "Cấp đổi / cấp lại",
    location: "(Đang cập nhật)",
  },
];

export default function LichKhaiGiangPage() {
  return (
    <>
      <Hero
        eyebrow="Lịch khai giảng"
        title="Lịch khai giảng & lịch thi"
        size="small"
      />

      {/* Bộ lọc + bảng lịch khai giảng */}
      <Section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Lịch khai giảng
          </h2>
        </div>
        <ScheduleFilterTable entries={SCHEDULE_ENTRIES} />
      </Section>

      {/* Lịch thi riêng */}
      <Section tone="muted">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Lịch thi sát hạch
          </h2>
        </div>
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-black/5">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 text-foreground/60">
                <th className="px-4 py-3 font-semibold sm:px-6">Ngày thi</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Hạng</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Địa điểm</th>
              </tr>
            </thead>
            <tbody>
              {EXAM_SCHEDULE.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-black/5 last:border-0"
                >
                  <td className="px-4 py-3 text-foreground/80 sm:px-6">
                    {row.date}
                  </td>
                  <td className="px-4 py-3 font-medium text-primary sm:px-6">
                    {row.hangBang}
                  </td>
                  <td className="px-4 py-3 text-foreground/80 sm:px-6">
                    {row.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-primary-light px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-primary">
            Không thấy lịch phù hợp?
          </h2>
          <p className="max-w-xl text-foreground/70">
            Liên hệ để được tư vấn lịch học linh hoạt, phù hợp với thời gian
            của bạn.
          </p>
          <Button href="/lien-he" variant="primary">
            Liên hệ tư vấn
          </Button>
        </div>
      </Section>
    </>
  );
}
