import type { Metadata } from "next";
import type { ReactNode } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import RegisterForm from "@/components/RegisterForm";
import HotlineLink from "@/components/HotlineLink";
import ZaloLink from "@/components/ZaloLink";

export const metadata: Metadata = {
  title: "Đăng ký học",
  description:
    "Đăng ký học lái xe hoặc đăng ký tư vấn tại Trung tâm đào tạo lái xe Phú Thọ — chi nhánh Vạn Xuân.",
};

const HANG_LABELS: Record<string, string> = {
  a1: "Hạng A1",
  a: "Hạng A",
  "cap-doi-cap-lai": "Cấp đổi / cấp lại",
};

const SUPPORT_INFO: {
  icon: string;
  label: string;
  render: () => ReactNode;
}[] = [
  {
    icon: "📞",
    label: "Hotline",
    render: () => <HotlineLink className="text-foreground/70 hover:text-primary" />,
  },
  {
    icon: "💬",
    label: "Zalo",
    render: () => <ZaloLink className="text-foreground/70 hover:text-primary" />,
  },
  {
    icon: "🕐",
    label: "Giờ làm việc",
    render: () => "(Đang cập nhật)",
  },
];

type DangKyPageProps = {
  searchParams: Promise<{ hang?: string }>;
};

export default async function DangKyPage({ searchParams }: DangKyPageProps) {
  const { hang } = await searchParams;
  const hangBangPreset = hang ? HANG_LABELS[hang] : undefined;

  return (
    <>
      <Hero
        eyebrow="Đăng ký"
        title="Đăng ký học lái xe"
        description="Điền thông tin bên dưới, tư vấn viên sẽ liên hệ lại với bạn sớm nhất."
        size="small"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form đăng ký */}
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <RegisterForm hangBangPreset={hangBangPreset} source="dang-ky" />
          </div>

          {/* Thông tin hỗ trợ */}
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              <h2 className="text-lg font-bold text-primary">
                Thông tin hỗ trợ
              </h2>
              <ul className="mt-4 space-y-4">
                {SUPPORT_INFO.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-white">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-primary">
                        {item.label}
                      </span>
                      <span className="block text-sm text-foreground/70">
                        {item.render()}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-primary-light p-6">
              <h3 className="text-sm font-semibold text-primary">
                Đăng ký xong thì sao?
              </h3>
              <p className="mt-1 text-sm text-foreground/70">
                Đội ngũ tư vấn viên sẽ liên hệ lại với bạn qua số điện thoại đã
                đăng ký để tư vấn chi tiết và hướng dẫn các bước tiếp theo.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
