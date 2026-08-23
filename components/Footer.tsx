import Link from "next/link";
import HotlineLink from "@/components/HotlineLink";

type FooterLink = {
  label: string;
  href?: string;
  icon: string;
};

const FOOTER_LINKS: FooterLink[] = [
  { label: "Khóa học", href: "/khoa-hoc", icon: "🚗" },
  { label: "Lịch khai giảng", href: "/lich-khai-giang", icon: "🗓️" },
  { label: "Đăng ký", href: "/dang-ky", icon: "📝" },
  { label: "Tin tức", href: "/tin-tuc", icon: "📰" },
  { label: "FAQ", href: "/faq", icon: "❓" },
  { label: "Liên hệ", href: "/lien-he", icon: "📞" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 sm:justify-between">
          {FOOTER_LINKS.map((item) => {
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl transition-colors duration-200 group-hover:bg-accent">
                  {item.icon}
                </span>
                <span className="text-xs font-medium text-white/80">
                  {item.label}
                </span>
              </>
            );

            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-2"
              >
                {content}
              </Link>
            ) : (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 opacity-60"
                title="Sắp ra mắt"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-2 border-t border-white/10 pt-6 text-center text-sm text-white/70 sm:text-left">
          <p className="font-semibold text-white">
            Trung tâm đào tạo lái xe Phú Thọ — Chi nhánh Vạn Xuân
          </p>
          <p>Địa chỉ: (Đang cập nhật)</p>
          <p>
            Hotline: <HotlineLink className="hover:text-white" /> · Email:
            (Đang cập nhật)
          </p>
          <p className="mt-4 text-xs text-white/50">
            © {new Date().getFullYear()} Trung tâm đào tạo lái xe Phú Thọ. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
