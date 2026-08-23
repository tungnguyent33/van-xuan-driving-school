import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const siteTitle = "Trung tâm đào tạo lái xe Phú Thọ - Chi nhánh Vạn Xuân";
const siteDescription =
  "Trung tâm đào tạo lái xe Phú Thọ, chi nhánh Vạn Xuân — đào tạo bài bản, đội ngũ giáo viên tận tâm, cam kết đầu ra.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Trung tâm đào tạo lái xe Phú Thọ",
  },
  description: siteDescription,
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b3d91",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={getLocalBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
