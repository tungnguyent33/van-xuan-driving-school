"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLE_CATEGORIES, type Article, type ArticleCategory } from "@/content/tin-tuc";

type FilterKey = "all" | ArticleCategory;

const PAGE_SIZE = 3;

type ArticleFilterGridProps = {
  articles: Article[];
};

export default function ArticleFilterGrid({ articles }: ArticleFilterGridProps) {
  const [active, setActive] = useState<FilterKey>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      active === "all"
        ? articles
        : articles.filter((article) => article.category === active),
    [articles, active],
  );

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleFilterChange(key: FilterKey) {
    setActive(key);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => handleFilterChange("all")}
          aria-pressed={active === "all"}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            active === "all"
              ? "bg-primary text-white"
              : "bg-white text-foreground/70 ring-1 ring-black/10 hover:bg-primary-light"
          }`}
        >
          Tất cả
        </button>
        {ARTICLE_CATEGORIES.map((category) => {
          const isActive = active === category.key;
          return (
            <button
              key={category.key}
              type="button"
              onClick={() => handleFilterChange(category.key)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/70 ring-1 ring-black/10 hover:bg-primary-light"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {visibleArticles.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center text-sm text-foreground/60 shadow-sm ring-1 ring-black/5">
          Chưa có bài viết nào trong chuyên mục này.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {hasMore ? (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary-light"
          >
            Xem thêm bài viết
          </button>
        </div>
      ) : null}
    </div>
  );
}
