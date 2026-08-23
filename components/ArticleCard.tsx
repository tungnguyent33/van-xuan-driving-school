import Image from "next/image";
import Link from "next/link";
import { ARTICLE_CATEGORIES, type Article } from "@/content/tin-tuc";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const categoryLabel =
    ARTICLE_CATEGORIES.find((c) => c.key === article.category)?.label ??
    article.category;

  return (
    <Link
      href={`/tin-tuc/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.imageSrc}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-flex w-fit rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
          {categoryLabel}
        </span>
        <h3 className="mb-2 text-lg font-bold text-primary">
          {article.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-foreground/80">
          {article.excerpt}
        </p>
        <p className="mt-4 text-xs text-foreground/50">
          {article.publishedAt}
        </p>
      </div>
    </Link>
  );
}
