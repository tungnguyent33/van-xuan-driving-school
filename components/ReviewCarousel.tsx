"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type ReviewItem = {
  name: string;
  course: string;
  quote: string;
  /** Ảnh học viên (do trung tâm tải lên). Để trống sẽ hiển thị avatar placeholder. */
  imageSrc?: string;
  imageAlt?: string;
};

type ReviewCarouselProps = {
  reviews: ReviewItem[];
};

/** Carousel ảnh + đánh giá học viên, cuộn ngang bằng scroll-snap (không phụ thuộc thư viện ngoài). */
export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const child = track?.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let minDiff = Infinity;
    Array.from(track.children).forEach((child, index) => {
      const diff = Math.abs((child as HTMLElement).offsetLeft - track.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closest = index;
      }
    });
    setActive(closest);
  };

  if (reviews.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            className="w-full flex-none snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary-light">
                {review.imageSrc ? (
                  <Image
                    src={review.imageSrc}
                    alt={review.imageAlt ?? `Ảnh học viên ${review.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="flex h-full items-center justify-center text-4xl text-primary/30"
                    aria-hidden="true"
                  >
                    🎓
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 text-2xl leading-none text-accent">“</p>
                <p className="flex-1 text-sm leading-relaxed text-foreground/80">
                  {review.quote}
                </p>
                <div className="mt-4 border-t border-black/5 pt-3">
                  <p className="text-sm font-semibold text-primary">
                    {review.name}
                  </p>
                  <p className="text-xs text-foreground/60">{review.course}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(active - 1, 0))}
            aria-label="Đánh giá trước"
            className="absolute left-0 top-1/3 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-primary shadow-md ring-1 ring-black/5 transition hover:bg-primary-light sm:flex"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(active + 1, reviews.length - 1))}
            aria-label="Đánh giá sau"
            className="absolute right-0 top-1/3 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-primary shadow-md ring-1 ring-black/5 transition hover:bg-primary-light sm:flex"
          >
            ›
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Xem đánh giá của ${review.name}`}
                className={`h-2 rounded-full transition-all ${
                  index === active ? "w-6 bg-primary" : "w-2 bg-primary/20"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
