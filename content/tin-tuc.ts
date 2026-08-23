/**
 * ⚠️ DỮ LIỆU MẪU (MOCK DATA) — dùng để dựng và kiểm tra giao diện trang Tin tức.
 * Toàn bộ tiêu đề, nội dung, ngày đăng dưới đây đều là ví dụ minh họa,
 * CHƯA phải nội dung thật của trung tâm. Cần thay bằng nội dung thật hoặc
 * nối vào CMS (ví dụ: Sanity, Contentful, Notion API...) trước khi lên production.
 */

export type ArticleCategory = "meo-thi" | "quy-dinh" | "thong-bao";

export const ARTICLE_CATEGORIES: { key: ArticleCategory; label: string }[] = [
  { key: "meo-thi", label: "Mẹo thi" },
  { key: "quy-dinh", label: "Quy định" },
  { key: "thong-bao", label: "Thông báo" },
];

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  /** Ngày đăng mẫu, định dạng dd/mm/yyyy. */
  publishedAt: string;
  imageSrc: string;
  imageAlt: string;
  content: ContentBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "5-meo-on-thi-ly-thuyet-de-dau",
    category: "meo-thi",
    title: "5 mẹo ôn thi lý thuyết dễ đậu",
    excerpt:
      "Tổng hợp 5 mẹo giúp học viên ôn tập phần thi lý thuyết hiệu quả hơn, giảm bớt áp lực trước ngày thi.",
    publishedAt: "15/08/2026",
    imageSrc: "/images/tin-meo-thi.jpg",
    imageAlt:
      "Ảnh minh họa bài viết mẹo ôn thi lý thuyết lái xe (ảnh minh họa, sẽ thay bằng ảnh thật)",
    content: [
      {
        type: "paragraph",
        text: "Phần thi lý thuyết thường khiến nhiều học viên lo lắng vì số lượng câu hỏi khá nhiều. Dưới đây là một số mẹo ôn tập giúp việc học trở nên nhẹ nhàng và hiệu quả hơn.",
      },
      {
        type: "list",
        items: [
          "Học theo nhóm câu hỏi liên quan đến biển báo trước, vì đây là nhóm dễ nhớ bằng hình ảnh.",
          "Ôn lại các câu hỏi điểm liệt trước tiên — đây là nhóm câu bắt buộc phải trả lời đúng.",
          "Luyện tập trên phần mềm/app mô phỏng đề thi thay vì chỉ đọc lý thuyết suông.",
          "Ôn theo khung giờ ngắn (20–30 phút mỗi lần) thay vì học dồn một lúc quá lâu.",
          "Giải lại các câu đã làm sai để tránh lặp lại lỗi trong bài thi thật.",
        ],
      },
      {
        type: "paragraph",
        text: "Việc ôn tập đều đặn mỗi ngày, dù chỉ 15–20 phút, thường mang lại hiệu quả tốt hơn so với học dồn vào sát ngày thi.",
      },
    ],
  },
  {
    slug: "kinh-nghiem-thi-sa-hinh-khong-bi-tru-diem",
    category: "meo-thi",
    title: "Kinh nghiệm thi sa hình không bị trừ điểm",
    excerpt:
      "Những lỗi thường gặp khi thi thực hành sa hình và cách khắc phục để tránh bị trừ điểm oan.",
    publishedAt: "10/08/2026",
    imageSrc: "/images/tin-meo-thi.jpg",
    imageAlt:
      "Ảnh minh họa bài viết kinh nghiệm thi sa hình (ảnh minh họa, sẽ thay bằng ảnh thật)",
    content: [
      {
        type: "paragraph",
        text: "Thi sa hình là phần thi thực hành yêu cầu sự tập trung và làm chủ tốc độ. Một số lỗi nhỏ tưởng chừng không đáng kể lại thường khiến học viên bị trừ điểm.",
      },
      {
        type: "heading",
        text: "Những lỗi thường gặp",
      },
      {
        type: "list",
        items: [
          "Quên bật xi-nhan khi chuyển hướng hoặc dừng xe.",
          "Đi sai vạch, lấn làn ở các bài ghép xe, đường vuông góc.",
          "Dừng xe quá vạch hoặc không dừng hẳn ở bài dừng xe nhường đường cho người đi bộ.",
          "Tăng tốc/giảm tốc đột ngột gây giật xe.",
        ],
      },
      {
        type: "paragraph",
        text: "Luyện tập nhiều lần trên sân tập thực tế, kết hợp ghi nhớ trình tự các bài thi sẽ giúp học viên tự tin và hạn chế tối đa các lỗi trên.",
      },
    ],
  },
  {
    slug: "nhung-dieu-can-biet-khi-doi-giay-phep-lai-xe-sang-the-pet",
    category: "quy-dinh",
    title: "Những điều cần biết khi đổi giấy phép lái xe sang thẻ PET",
    excerpt:
      "Tổng hợp thông tin cơ bản về việc đổi giấy phép lái xe từ mẫu giấy (bìa) sang thẻ nhựa PET.",
    publishedAt: "01/08/2026",
    imageSrc: "/images/tin-quy-dinh.jpg",
    imageAlt:
      "Ảnh minh họa bài viết về đổi giấy phép lái xe sang thẻ PET (ảnh minh họa, sẽ thay bằng ảnh thật)",
    content: [
      {
        type: "paragraph",
        text: "Nhiều học viên vẫn còn giữ giấy phép lái xe mẫu cũ (dạng giấy, bìa) và thắc mắc có cần đổi sang thẻ nhựa PET hay không, cũng như thủ tục thực hiện như thế nào.",
      },
      {
        type: "paragraph",
        text: "Lưu ý: bài viết mang tính tham khảo tổng quan. Quy định pháp luật có thể thay đổi theo thời gian, vui lòng liên hệ trung tâm hoặc cơ quan quản lý để được tư vấn chính xác theo quy định mới nhất.",
      },
      {
        type: "heading",
        text: "Hồ sơ cần chuẩn bị",
      },
      {
        type: "list",
        items: [
          "CMND/CCCD còn hiệu lực",
          "Giấy phép lái xe hiện có (bản gốc)",
          "Ảnh thẻ 3x4 nền trắng",
          "Đơn đề nghị đổi giấy phép lái xe theo mẫu quy định",
        ],
      },
      {
        type: "paragraph",
        text: "Trung tâm có hỗ trợ tư vấn và hướng dẫn thủ tục đổi giấy phép lái xe. Xem chi tiết tại trang Cấp đổi / cấp lại hoặc liên hệ trực tiếp để được hỗ trợ.",
      },
    ],
  },
  {
    slug: "mo-them-lich-hoc-buoi-toi-cho-nguoi-di-lam",
    category: "thong-bao",
    title: "Trung tâm mở thêm lịch học buổi tối cho người đi làm",
    excerpt:
      "Thông báo về lịch học buổi tối mới, giúp học viên là người đi làm sắp xếp thời gian học thuận tiện hơn.",
    publishedAt: "25/07/2026",
    imageSrc: "/images/tin-thong-bao.jpg",
    imageAlt:
      "Ảnh minh họa thông báo lịch học buổi tối (ảnh minh họa, sẽ thay bằng ảnh thật)",
    content: [
      {
        type: "paragraph",
        text: "Nhằm tạo điều kiện thuận lợi hơn cho học viên là người đi làm, trung tâm dự kiến mở thêm các khung giờ học buổi tối bên cạnh lịch học ban ngày hiện tại.",
      },
      {
        type: "paragraph",
        text: "Lịch học cụ thể theo từng hạng bằng sẽ được cập nhật tại trang Lịch khai giảng. Học viên quan tâm có thể để lại thông tin đăng ký để được tư vấn khung giờ phù hợp.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (article) => article.slug !== current.slug && article.category === current.category,
  );
  const others = ARTICLES.filter(
    (article) =>
      article.slug !== current.slug && article.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
