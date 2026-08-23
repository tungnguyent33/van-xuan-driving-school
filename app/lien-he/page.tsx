import type { Metadata } from "next";
import type { ReactNode } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import HotlineLink from "@/components/HotlineLink";
import ZaloLink from "@/components/ZaloLink";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Thông tin liên hệ và bản đồ chi nhánh Vạn Xuân — Trung tâm đào tạo lái xe Phú Thọ.",
};

const CONTACT_INFO: { label: string; render: () => ReactNode }[] = [
  {
    label: "Hotline",
    render: () => <HotlineLink className="hover:text-primary" />,
  },
  // Thay thế "(Đang cập nhật)" bằng thông tin thực tế của bạn:
  {
    label: "Email",
    render: () => <a href="mailto:tungnguyent33@gmail.com" className="hover:text-primary">tungnguyent33@gmail.com</a>
  },
  {
    label: "Giờ làm việc",
    render: () => "07:30 - 17:30 (Thứ 2 - Chủ Nhật)"
  },
  {
    label: "Địa chỉ chi nhánh Vạn Xuân",
    render: () => "Số 21, Khu 21, xã Vạn Xuân, Tỉnh Phú Thọ"
  },
  {
    label: "Zalo / Fanpage",
    render: () => <ZaloLink className="hover:text-primary" />,
  },
];

export default function LienHePage() {
  return (
    <>
      <Hero eyebrow="Liên hệ" title="Liên hệ với chúng tôi" size="small" />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Thông tin liên hệ */}
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <h2 className="text-xl font-bold text-primary">
              Thông tin liên hệ
            </h2>
            <dl className="mt-6 space-y-4">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 border-b border-black/5 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-2"
                >
                  <dt className="text-sm font-semibold text-primary sm:w-48 sm:shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-foreground/70">{item.render()}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Google Maps embed thực tế */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-background-muted shadow-sm lg:aspect-auto lg:h-full min-h-[350px]">
            <iframe
              title="Bản đồ chi nhánh Vạn Xuân"
              src="https://maps.google.com/maps?q=S%E1%BB%91+21,+Khu+21,+x%C3%A3+V%E1%BA%A1n+Xu%C3%A2n,+T%E1%BA%A3nh+Ph%C3%BA+Th%E1%BB%8D&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* Form liên hệ ngắn */}
      <Section tone="muted">
        <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          <h2 className="text-xl font-bold text-primary">
            Gửi thông tin liên hệ
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn sớm nhất.
          </p>
          <div className="mt-6">
            <ContactForm source="lien-he" />
          </div>
        </div>
      </Section>
    </>
  );
}
