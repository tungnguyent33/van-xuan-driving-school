import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { getFaqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp",
  description:
    "Giải đáp các câu hỏi thường gặp về hồ sơ, học phí, lịch học và cấp đổi/cấp lại bằng lái xe.",
};

const FAQ_GROUPS = [
  {
    title: "Về hồ sơ & điều kiện",
    items: [
      {
        question: "Cần chuẩn bị giấy tờ gì để đăng ký học?",
        answer:
          "CMND/CCCD còn hiệu lực, ảnh thẻ 3x4 nền trắng, giấy khám sức khỏe theo mẫu quy định và đơn đăng ký học lái xe. Xem chi tiết checklist tại trang từng khóa học.",
      },
      {
        question: "Độ tuổi tối thiểu để học lái xe là bao nhiêu?",
        answer:
          "Theo quy định hiện hành, hạng A1 và hạng A áp dụng cho người từ đủ 18 tuổi trở lên. Liên hệ trung tâm nếu bạn cần tư vấn trường hợp cụ thể.",
      },
      {
        question: "Người ở tỉnh/thành khác có đăng ký học được không?",
        answer:
          "Tùy khu vực và chi nhánh tiếp nhận. Vui lòng liên hệ để được tư vấn cụ thể.",
      },
    ],
  },
  {
    title: "Về học phí & thanh toán",
    items: [
      {
        question: "Học phí từng hạng bằng là bao nhiêu?",
        answer:
          "Học phí hiện đang được cập nhật. Xem trang chi tiết từng khóa học hoặc liên hệ để được báo giá chính xác.",
      },
      {
        question: "Có thể đóng học phí theo đợt không?",
        answer:
          "Chính sách thanh toán hiện đang được cập nhật. Liên hệ trung tâm để biết các hình thức thanh toán khả dụng.",
      },
      {
        question: "Học phí có bao gồm lệ phí thi sát hạch không?",
        answer:
          "Thông tin gồm/không gồm được nêu rõ ở mục Học phí & ưu đãi tại trang chi tiết từng khóa học.",
      },
    ],
  },
  {
    title: "Về lịch học & thi",
    items: [
      {
        question: "Lịch học có linh hoạt cho người đi làm không?",
        answer:
          "Trung tâm cố gắng sắp xếp lịch học phù hợp với học viên. Xem lịch khai giảng gần nhất tại trang Lịch khai giảng.",
      },
      {
        question: "Bao lâu thì được thi sát hạch?",
        answer:
          "Thời gian phụ thuộc vào tiến độ học và lịch tổ chức thi. Xem chi tiết tại trang từng khóa học hoặc liên hệ tư vấn.",
      },
      {
        question: "Nếu thi sát hạch không đạt thì sao?",
        answer:
          "Trung tâm hỗ trợ ôn tập và đăng ký thi lại theo quy định. Liên hệ để biết chi tiết chính sách hỗ trợ.",
      },
    ],
  },
  {
    title: "Về cấp đổi / cấp lại bằng",
    items: [
      {
        question: "Bằng lái hết hạn có cần thi lại lý thuyết không?",
        answer:
          "Tùy thời gian hết hạn theo quy định hiện hành. Liên hệ trung tâm để được tư vấn trường hợp cụ thể của bạn.",
      },
      {
        question: "Mất bằng lái thì cần làm gì?",
        answer:
          "Xem checklist hồ sơ tại trang Cấp đổi / cấp lại, hoặc liên hệ để được hướng dẫn thủ tục chi tiết.",
      },
      {
        question: "Đổi từ bằng giấy (mẫu cũ) sang thẻ nhựa (PET) có mất phí không?",
        answer:
          "Chi phí dịch vụ hiện đang được cập nhật. Liên hệ để biết chi tiết.",
      },
    ],
  },
];

const ALL_FAQ_ITEMS = FAQ_GROUPS.flatMap((group) => group.items);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqPageSchema(ALL_FAQ_ITEMS)} />
      <Hero eyebrow="FAQ" title="Câu hỏi thường gặp" size="small" />

      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-xl font-bold text-primary">
                {group.title}
              </h2>
              <FaqAccordion items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-primary">
            Vẫn còn thắc mắc?
          </h2>
          <p className="max-w-xl text-foreground/70">
            Đội ngũ tư vấn sẵn sàng giải đáp mọi câu hỏi của bạn.
          </p>
          <Button href="/lien-he" variant="primary">
            Liên hệ tư vấn
          </Button>
        </div>
      </Section>
    </>
  );
}
