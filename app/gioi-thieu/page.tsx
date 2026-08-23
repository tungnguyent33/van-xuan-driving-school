import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu về Trung tâm đào tạo lái xe Phú Thọ và chi nhánh Vạn Xuân.",
};

const TEACHERS = [
  { name: "Giáo viên (đang cập nhật)", experience: "Kinh nghiệm: (đang cập nhật)" },
  { name: "Giáo viên (đang cập nhật)", experience: "Kinh nghiệm: (đang cập nhật)" },
  { name: "Giáo viên (đang cập nhật)", experience: "Kinh nghiệm: (đang cập nhật)" },
];

const COMMITMENTS = [
  {
    icon: "💳",
    title: "Minh bạch học phí",
    description:
      "Học phí công khai rõ ràng ngay từ đầu, không phát sinh chi phí ẩn trong quá trình học.",
  },
  {
    icon: "🎓",
    title: "Hỗ trợ ôn thi",
    description:
      "Đồng hành cùng học viên ôn luyện sát hạch, hướng dẫn sát với bài thi thực tế.",
  },
  {
    icon: "🤝",
    title: "Đồng hành tới khi có bằng",
    description:
      "Hỗ trợ xuyên suốt từ ngày đầu đăng ký cho tới khi học viên nhận bằng lái.",
  },
];

export default function GioiThieuPage() {
  return (
    <>
      <Hero
        eyebrow="Giới thiệu"
        title="Về Trung tâm đào tạo lái xe Phú Thọ"
        size="small"
        imageSrc="/images/co-so.jpg"
        imageAlt="Ảnh minh họa cơ sở đào tạo (ảnh minh họa, sẽ thay bằng ảnh thật chi nhánh Vạn Xuân)"
      />

      {/* Giới thiệu chung: 2 cột */}
      <Section>
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Giới thiệu chung</h2>
            <p className="leading-relaxed text-foreground/80">
              Trung tâm đào tạo lái xe Phú Thọ là đơn vị đào tạo lái xe với mục
              tiêu mang đến chương trình học bài bản, an toàn và đội ngũ giáo
              viên tận tâm, giúp học viên tự tin làm chủ tay lái sau khi tốt
              nghiệp.
            </p>
            <p className="leading-relaxed text-foreground/80">
              (Nội dung giới thiệu chi tiết về lịch sử hình thành, sứ mệnh và
              quy mô hoạt động sẽ được cập nhật.)
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
            <Image
              src="/images/hoc-vien.jpg"
              alt="Học viên ôn tập lý thuyết trên máy tính tại trung tâm"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Chi nhánh Vạn Xuân */}
      <Section tone="muted">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 sm:order-2">
            <Image
              src="/images/san-tap.jpg"
              alt="Học viên thực hành tại sân tập xe máy của trung tâm"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 sm:order-1">
            <h2 className="text-2xl font-bold text-primary">
              Chi nhánh Vạn Xuân
            </h2>
            <p className="leading-relaxed text-foreground/80">
              Chi nhánh Vạn Xuân là một trong những cơ sở đào tạo của Trung tâm
              đào tạo lái xe Phú Thọ, phục vụ nhu cầu học lái xe của học viên
              trong khu vực.
            </p>
            <dl className="grid gap-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-primary">Địa chỉ</dt>
                <dd className="text-sm text-foreground/70">(Đang cập nhật)</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-primary">
                  Giờ làm việc
                </dt>
                <dd className="text-sm text-foreground/70">(Đang cập nhật)</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-primary">
                  Cơ sở vật chất
                </dt>
                <dd className="text-sm text-foreground/70">(Đang cập nhật)</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-primary">
                  Các hạng bằng lái đào tạo
                </dt>
                <dd className="text-sm text-foreground/70">(Đang cập nhật)</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* Đội ngũ giáo viên */}
      <Section>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Đội ngũ giáo viên
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {TEACHERS.map((teacher, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full shadow-sm ring-1 ring-black/5">
                <Image
                  src="/images/avatar.jpg"
                  alt={`Ảnh minh họa giáo viên hướng dẫn (${teacher.name}, ảnh minh họa, sẽ thay bằng ảnh thật)`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-semibold text-primary">{teacher.name}</p>
              <p className="text-sm text-foreground/60">{teacher.experience}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cam kết đầu ra */}
      <Section tone="muted">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Cam kết đầu ra
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {COMMITMENTS.map((item) => (
            <Card key={item.title} title={item.title} icon={item.icon}>
              {item.description}
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-primary-light px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-primary">
            Tìm hiểu khóa học phù hợp
          </h2>
          <p className="max-w-xl text-foreground/70">
            Xem chi tiết các khóa đào tạo và chọn hạng bằng phù hợp với nhu cầu
            của bạn.
          </p>
          <Button href="/khoa-hoc" variant="primary">
            Xem khóa học
          </Button>
        </div>
      </Section>
    </>
  );
}
