import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import StatBlock from "@/components/StatBlock";
import ScheduleTable from "@/components/ScheduleTable";
import HotlineLink from "@/components/HotlineLink";
import ReviewCarousel from "@/components/ReviewCarousel";
import { COURSE_LIST } from "@/data/courses";
import { randomSlots } from "@/lib/schedule";

const STATS = [
  { value: "Từ 2023", label: "Số năm hoạt động" },
  { value: "Hơn 500+", label: "Học viên đã đào tạo" },
  { value: "Trên 90%", label: "Tỉ lệ đỗ sát hạch" },
];

const REASONS = [
  {
    icon: "👨‍🏫",
    title: "Giáo viên kinh nghiệm",
    description:
      "Đội ngũ giáo viên giàu kinh nghiệm, tận tâm hướng dẫn, kiên nhẫn với học viên mới bắt đầu.",
  },
  {
    icon: "🏟️",
    title: "Sân tập rộng",
    description:
      "Sân tập rộng rãi, đạt chuẩn, đầy đủ tình huống thực hành sát với bài thi sát hạch.",
  },
  {
    icon: "📋",
    title: "Hỗ trợ hồ sơ",
    description:
      "Hướng dẫn chuẩn bị hồ sơ đầy đủ, nhanh gọn, đồng hành cùng học viên tới khi có bằng.",
  },
];

const SCHEDULE = [
  { date: "(Đang cập nhật)", course: "Hạng A1", slots: randomSlots() },
  { date: "(Đang cập nhật)", course: "Hạng A", slots: randomSlots() },
  {
    date: "(Đang cập nhật)",
    course: "Cấp đổi / cấp lại",
    slots: randomSlots(),
  },
];

const GALLERY = [
  {
    src: "/images/san-tap.jpg",
    alt: "Học viên thực hành tại sân tập xe máy của trung tâm",
  },
  {
    src: "/images/hoc-vien.jpg",
    alt: "Học viên ôn tập lý thuyết trên máy tính tại trung tâm",
  },
  {
    src: "/images/giao-vien.jpg",
    alt: "Học viên xếp hàng nghe hướng dẫn trước giờ học",
  },
];

/**
 * ⚠️ Dữ liệu mẫu — chưa có ảnh/đánh giá thật. `imageSrc` để trống nghĩa là chưa
 * có ảnh học viên; carousel sẽ tự hiển thị avatar placeholder cho tới khi bạn
 * tải ảnh thật lên (đặt trong `public/images/` rồi điền đường dẫn vào đây).
 */
const REVIEWS = [
  {
    name: "Học viên A",
    course: "Hạng A1",
    quote:
      "(Nội dung đánh giá mẫu — sẽ thay bằng đánh giá thật của học viên sau khi thu thập.)",
    imageSrc: undefined,
  },
  {
    name: "Học viên B",
    course: "Hạng A",
    quote:
      "(Nội dung đánh giá mẫu — sẽ thay bằng đánh giá thật của học viên sau khi thu thập.)",
    imageSrc: undefined,
  },
  {
    name: "Học viên C",
    course: "Cấp đổi / cấp lại",
    quote:
      "(Nội dung đánh giá mẫu — sẽ thay bằng đánh giá thật của học viên sau khi thu thập.)",
    imageSrc: undefined,
  },
];

const FAQS = [
  {
    question: "Hồ sơ đăng ký học cần chuẩn bị những gì?",
    answer: "(Nội dung đang được cập nhật — xem chi tiết tại trang FAQ.)",
  },
  {
    question: "Học phí và thời gian học là bao lâu?",
    answer: "(Nội dung đang được cập nhật — xem chi tiết tại trang FAQ.)",
  },
  {
    question: "Trung tâm có hỗ trợ ôn thi sát hạch không?",
    answer: "(Nội dung đang được cập nhật — xem chi tiết tại trang FAQ.)",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero banner */}
      <Hero
        eyebrow="Trung tâm đào tạo lái xe Phú Thọ — Chi nhánh Vạn Xuân"
        title="Học lái xe an toàn, bài bản, tự tin ra đường"
        description="Đội ngũ giáo viên tận tâm, giáo trình chuẩn, sân tập rộng rãi — đồng hành cùng bạn trên hành trình lấy bằng lái xe."
        primaryCta={{ label: "Đăng ký học ngay", href: "/dang-ky" }}
        secondaryCta={{ label: "Xem khóa học", href: "/khoa-hoc" }}
        imageSrc="/images/san-tap.jpg"
        imageAlt="Học viên thực hành tại sân tập xe máy của trung tâm"
      />

      {/* Dòng số liệu niềm tin */}
      <Section>
        <StatBlock stats={STATS} />
      </Section>

      {/* Khối dịch vụ nổi bật */}
      <Section tone="muted">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Khóa đào tạo nổi bật
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE_LIST.map((course) => (
            <Card
              key={course.slug}
              title={course.shortName}
              icon={course.icon}
              cta={{ label: "Xem chi tiết", href: course.href }}
            >
              {course.shortDescription}
            </Card>
          ))}
        </div>
      </Section>

      {/* Vì sao chọn chúng tôi */}
      <Section>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Vì sao chọn chúng tôi
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <Card key={reason.title} title={reason.title} icon={reason.icon}>
              {reason.description}
            </Card>
          ))}
        </div>
      </Section>

      {/* Khối CTA nổi bật */}
      <Section tone="muted">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-black/5 sm:px-12">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Tư vấn miễn phí trong 5 phút
          </h2>
          <p className="max-w-xl text-foreground/70">
            Để lại thông tin, đội ngũ tư vấn sẽ liên hệ giúp bạn chọn khóa học
            phù hợp nhất.
          </p>
          <Button href="/dang-ky" variant="primary" className="mt-2">
            Tư vấn miễn phí
          </Button>
        </div>
      </Section>

      {/* Lịch khai giảng sắp tới */}
      <Section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Lịch khai giảng sắp tới
          </h2>
        </div>
        <ScheduleTable rows={SCHEDULE} />
      </Section>

      {/* Hình ảnh thực tế */}
      <Section tone="muted">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Hình ảnh thực tế
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {GALLERY.map((item) => (
            <div
              key={item.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Đánh giá học viên */}
      <Section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Đánh giá học viên
          </h2>
        </div>
        <ReviewCarousel reviews={REVIEWS} />
      </Section>

      {/* FAQ ngắn */}
      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Câu hỏi thường gặp
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <p className="font-semibold text-primary">{faq.question}</p>
                <p className="mt-1 text-sm text-foreground/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Xem thêm câu hỏi khác →
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA cuối trang */}
      <Section tone="primary">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Sẵn sàng lấy bằng lái? Đăng ký ngay hôm nay
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/dang-ky" variant="primary">
              Đăng ký học
            </Button>
            <span className="text-sm text-white/80">
              Hotline: <HotlineLink className="hover:text-white" />
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
