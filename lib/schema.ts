import { BUSINESS_INFO } from "@/data/business-info";
import type { FaqAccordionItem } from "@/components/FaqAccordion";

/** Trả về giá trị nếu khác rỗng, ngược lại `undefined` để JSON.stringify tự loại bỏ field. */
function orUndefined(value: string): string | undefined {
  return value.trim() ? value : undefined;
}

/**
 * Schema.org JSON-LD cho "DrivingSchool" (loại chuyên biệt của LocalBusiness),
 * dùng cho toàn site (gắn ở layout gốc). Các trường chưa có thông tin thật sẽ
 * tự động bị bỏ qua thay vì xuất bản placeholder ra ngoài.
 */
export function getLocalBusinessSchema() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: orUndefined(BUSINESS_INFO.streetAddress),
    addressLocality: orUndefined(BUSINESS_INFO.addressLocality),
    addressRegion: orUndefined(BUSINESS_INFO.addressRegion),
    postalCode: orUndefined(BUSINESS_INFO.postalCode),
    addressCountry: orUndefined(BUSINESS_INFO.addressCountry),
  };
  const hasAddress = Object.entries(address).some(
    ([key, value]) => key !== "@type" && value,
  );

  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: orUndefined(BUSINESS_INFO.url),
    telephone: orUndefined(BUSINESS_INFO.telephone),
    email: orUndefined(BUSINESS_INFO.email),
    priceRange: orUndefined(BUSINESS_INFO.priceRange),
    address: hasAddress ? address : undefined,
    openingHoursSpecification: BUSINESS_INFO.openingHours.length
      ? BUSINESS_INFO.openingHours
      : undefined,
  };
}

/** Schema.org JSON-LD cho FAQPage — dùng ở trang /faq. */
export function getFaqPageSchema(items: FaqAccordionItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
