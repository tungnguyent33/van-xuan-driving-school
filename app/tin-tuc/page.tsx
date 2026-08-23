import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ArticleFilterGrid from "@/components/ArticleFilterGrid";
import { ARTICLES } from "@/content/tin-tuc";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "Tin tức, mẹo thi bằng lái xe và thông báo mới nhất từ Trung tâm đào tạo lái xe Phú Thọ.",
};

export default function TinTucPage() {
  return (
    <>
      <Hero
        eyebrow="Tin tức"
        title="Tin tức & mẹo thi bằng lái"
        description="Cập nhật mẹo thi, quy định mới và thông báo từ trung tâm."
        size="small"
      />

      <Section>
        <ArticleFilterGrid articles={ARTICLES} />
      </Section>
    </>
  );
}
