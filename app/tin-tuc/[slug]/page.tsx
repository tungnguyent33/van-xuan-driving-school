import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ArticleContent from "@/components/ArticleContent";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, getArticleBySlug, getRelatedArticles } from "@/content/tin-tuc";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Không tìm thấy bài viết" };
  }

  return {
    title: `${article.title} | Tin tức`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", href: "/tin-tuc" },
          { label: article.title },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-foreground/50">{article.publishedAt}</p>
          <h1 className="mt-2 text-2xl font-extrabold text-primary sm:text-3xl">
            {article.title}
          </h1>

          <div className="relative mt-6 aspect-video overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-8">
            <ArticleContent blocks={article.content} />
          </div>

          {/* CTA giữa bài */}
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-primary-light px-6 py-8 text-center">
            <p className="font-semibold text-primary">
              Đang tìm khóa học phù hợp?
            </p>
            <Button href="/khoa-hoc" variant="primary">
              Xem khóa học
            </Button>
          </div>
        </div>
      </Section>

      {/* Bài viết liên quan */}
      {relatedArticles.length > 0 ? (
        <Section tone="muted">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Bài viết liên quan
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
