import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CourseFilterGrid from "@/components/CourseFilterGrid";
import FaqAccordion from "@/components/FaqAccordion";
import { COURSE_LIST } from "@/data/courses";

export const metadata: Metadata = {
  title: "Khóa học",
  description:
    "Danh sách các khóa đào tạo lái xe: hạng A1, hạng A, cấp đổi/cấp lại bằng lái tại Trung tâm đào tạo lái xe Phú Thọ.",
};

function findInfo(course: (typeof COURSE_LIST)[number], label: string) {
  return course.quickInfo.find((item) => item.label === label)?.value ?? "—";
}

const FAQS = [
  {
    question: "Nên chọn học hạng A1 hay hạng A?",
    answer:
      "Tùy vào loại xe bạn sẽ sử dụng: xe dưới 175cm³ chọn hạng A1, xe phân khối lớn hơn chọn hạng A. Liên hệ để được tư vấn cụ thể theo nhu cầu của bạn.",
  },
  {
    question: "Có thể học nhiều hạng cùng lúc không?",
    answer:
      "Tùy chương trình đào tạo hiện tại của trung tâm. Vui lòng liên hệ để được tư vấn và sắp xếp lịch học phù hợp.",
  },
  {
    question: "Học phí các hạng có gì khác nhau?",
    answer:
      "Xem chi tiết học phí từng hạng tại trang chi tiết khóa học tương ứng, hoặc liên hệ để được báo giá cụ thể.",
  },
];

export default function KhoaHocPage() {
  return (
    <>
      <Hero
        eyebrow="Khóa học"
        title="Các khóa đào tạo lái xe"
        description="Chọn hạng bằng phù hợp với nhu cầu của bạn."
        size="small"
      />

      {/* Bộ lọc nhanh + lưới card khóa học */}
      <Section>
        <CourseFilterGrid courses={COURSE_LIST} />
      </Section>

      {/* Bảng so sánh nhanh */}
      <Section tone="muted">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Bảng so sánh nhanh
          </h2>
        </div>
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-black/5">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 text-foreground/60">
                <th className="px-4 py-3 font-semibold sm:px-6">Hạng bằng</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Đối tượng</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Học phí</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Thời gian</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Hồ sơ cần</th>
                <th className="px-4 py-3 font-semibold sm:px-6" />
              </tr>
            </thead>
            <tbody>
              {COURSE_LIST.map((course) => (
                <tr
                  key={course.slug}
                  className="border-b border-black/5 last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-primary sm:px-6">
                    {course.shortName}
                  </td>
                  <td className="px-4 py-3 text-foreground/80 sm:px-6">
                    {findInfo(course, "Đối tượng")}
                  </td>
                  <td className="px-4 py-3 text-foreground/80 sm:px-6">
                    {course.tuitionNotes[0]?.value ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-foreground/80 sm:px-6">
                    {findInfo(course, "Thời gian học") !== "—"
                      ? findInfo(course, "Thời gian học")
                      : findInfo(course, "Thời gian xử lý")}
                  </td>
                  <td className="px-4 py-3 text-foreground/80 sm:px-6">
                    {course.documents.length} loại giấy tờ
                  </td>
                  <td className="px-4 py-3 text-right sm:px-6">
                    <Link
                      href={course.href}
                      className="text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      Xem chi tiết →
                    </Link>
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
            Chưa biết chọn hạng nào?
          </h2>
          <p className="max-w-xl text-foreground/70">
            Để lại thông tin, đội ngũ tư vấn sẽ giúp bạn chọn khóa học phù hợp
            nhất.
          </p>
          <Button href="/dang-ky" variant="primary">
            Tư vấn miễn phí
          </Button>
        </div>
      </Section>

      {/* FAQ riêng cho khóa học */}
      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Câu hỏi thường gặp về khóa học
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </Section>
    </>
  );
}
