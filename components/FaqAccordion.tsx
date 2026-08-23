"use client";

import { useState } from "react";

export type FaqAccordionItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqAccordionItem[];
  /** Chỉ số item mở sẵn ban đầu (mặc định: đóng hết). */
  defaultOpenIndex?: number;
};

export default function FaqAccordion({
  items,
  defaultOpenIndex = -1,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="divide-y divide-black/5 rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-primary">
                {item.question}
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-primary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-4 text-sm leading-relaxed text-foreground/70">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
