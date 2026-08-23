import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import RegisterForm from "@/components/RegisterForm";
import FaqAccordion from "@/components/FaqAccordion";
import { getRelatedCourses, type CourseInfo } from "@/data/courses";

type KhoaHocDetailLayoutProps = {
  course: CourseInfo;
};

export default function KhoaHocDetailLayout({
  course,
}: KhoaHocDetailLayoutProps) {
  const relatedCourses = getRelatedCourses(course.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Khóa học", href: "/khoa-hoc" },
          { label: course.shortName },
        ]}
      />

      <Hero
        eyebrow={course.shortName}
        title={course.heroTitle}
        description={course.heroDescription}
        primaryCta={{ label: "Đăng ký ngay", href: "#dang-ky" }}
        size="small"
      />

      {/* Thông tin nhanh */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Thông tin nhanh
          </h2>
          <dl className="grid gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-2 sm:p-8">
            {course.quickInfo.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold text-primary">
                  {item.label}
                </dt>
                <dd className="text-sm text-foreground/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Trường hợp áp dụng (chỉ cấp đổi/cấp lại) */}
      {course.specialNote ? (
        <Section tone="muted">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-primary">
              {course.specialNote.title}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {course.specialNote.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-foreground/80 shadow-sm ring-1 ring-black/5"
                >
                  <span className="mt-0.5 text-accent" aria-hidden>
                    ●
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {/* Nội dung đào tạo */}
      <Section tone={course.specialNote ? "default" : "muted"}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Nội dung đào tạo
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2">
            {course.trainingSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-foreground/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Hồ sơ cần chuẩn bị */}
      <Section tone={course.specialNote ? "muted" : "default"}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Hồ sơ cần chuẩn bị
          </h2>
          <ul className="grid gap-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-2 sm:p-8">
            {course.documents.map((doc) => (
              <li
                key={doc}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span className="mt-0.5 text-primary" aria-hidden>
                  ✓
                </span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Học phí & ưu đãi */}
      <Section tone={course.specialNote ? "default" : "muted"}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Học phí &amp; ưu đãi
          </h2>
          <dl className="grid gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-2 sm:p-8">
            {course.tuitionNotes.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold text-primary">
                  {item.label}
                </dt>
                <dd className="text-sm text-foreground/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Hình ảnh thực tế */}
      <Section tone={course.specialNote ? "muted" : "default"}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Hình ảnh thực tế
          </h2>
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
            <Image
              src={course.imageSrc}
              alt={course.imageAlt}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Khối CTA nổi bật: form đăng ký rút gọn */}
      <Section id="dang-ky" tone={course.specialNote ? "default" : "muted"}>
        <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          <h2 className="text-xl font-bold text-primary">
            Đăng ký học {course.shortName.toLowerCase()}
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            Chỉ cần họ tên và số điện thoại — đội ngũ tư vấn sẽ liên hệ lại
            với bạn sớm nhất.
          </p>
          <div className="mt-6">
            <RegisterForm
              hangBangPreset={course.shortName}
              source={`khoa-hoc/${course.slug}`}
              compact
            />
          </div>
        </div>
      </Section>

      {/* FAQ riêng */}
      <Section tone={course.specialNote ? "muted" : "default"}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Câu hỏi thường gặp
          </h2>
          <FaqAccordion items={course.faqs} />
        </div>
      </Section>

      {/* Khóa học liên quan */}
      <Section tone={course.specialNote ? "default" : "muted"}>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Khóa học liên quan
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {relatedCourses.map((related) => (
            <Card
              key={related.slug}
              title={related.shortName}
              icon={related.icon}
              cta={{ label: "Xem chi tiết", href: related.href }}
            >
              {related.shortDescription}
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA sticky trên mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
        <Button href="#dang-ky" variant="primary" className="w-full">
          Đăng ký ngay
        </Button>
      </div>
      {/* Khoảng đệm tránh bị thanh CTA sticky che nội dung cuối trang trên mobile */}
      <div className="h-16 sm:hidden" aria-hidden />
    </>
  );
}
