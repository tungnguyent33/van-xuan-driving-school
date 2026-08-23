export type CourseSlug = "hang-a1" | "hang-a" | "cap-doi-cap-lai";

export type QuickInfoItem = {
  label: string;
  value: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CourseInfo = {
  slug: CourseSlug;
  href: string;
  icon: string;
  /** Tên hạng ngắn gọn, dùng cho breadcrumb/thẻ/badge. */
  shortName: string;
  /** Tiêu đề H1 hero trang chi tiết. */
  heroTitle: string;
  /** Mô tả ngắn dùng cho card ở trang chủ/danh sách khóa học. */
  shortDescription: string;
  /** Mô tả dài hơn dùng cho sub-heading hero trang chi tiết. */
  heroDescription: string;
  quickInfo: QuickInfoItem[];
  trainingSteps: string[];
  documents: string[];
  tuitionNotes: QuickInfoItem[];
  imageSrc: string;
  imageAlt: string;
  faqs: FaqItem[];
  /** Ghi chú đặc thù (ví dụ: trường hợp áp dụng cho cấp đổi/cấp lại). */
  specialNote?: {
    title: string;
    items: string[];
  };
};

const PLACEHOLDER = "(Đang cập nhật)";

export const COURSES: Record<CourseSlug, CourseInfo> = {
  "hang-a1": {
    slug: "hang-a1",
    href: "/khoa-hoc/hang-a1",
    icon: "🛵",
    shortName: "Hạng A1",
    heroTitle: "Đào tạo bằng lái xe hạng A1",
    shortDescription:
      "Đào tạo lái xe máy dưới 175cm³, phù hợp người mới bắt đầu.",
    heroDescription:
      "Dành cho người điều khiển xe mô tô hai bánh có dung tích xy-lanh dưới 175 cm³ — hạng bằng phổ biến nhất cho người mới bắt đầu.",
    quickInfo: [
      { label: "Đối tượng", value: "Người từ đủ 18 tuổi trở lên" },
      { label: "Độ tuổi", value: "Từ 18 tuổi" },
      { label: "Thời gian học", value: PLACEHOLDER },
      { label: "Học phí", value: PLACEHOLDER },
      { label: "Hình thức thi", value: PLACEHOLDER },
      { label: "Lịch khai giảng gần nhất", value: PLACEHOLDER },
    ],
    trainingSteps: [
      "Học lý thuyết Luật Giao thông đường bộ",
      "Thực hành lái xe trên sân tập",
      "Thi thử sát hạch",
      "Thi sát hạch chính thức",
    ],
    documents: [
      "CMND/CCCD còn hiệu lực",
      "Ảnh thẻ 3x4 nền trắng (số lượng theo quy định)",
      "Giấy khám sức khỏe theo mẫu quy định",
      "Đơn đăng ký học lái xe (trung tâm hỗ trợ chuẩn bị)",
    ],
    tuitionNotes: [
      { label: "Học phí trọn gói", value: PLACEHOLDER },
      { label: "Đã bao gồm", value: PLACEHOLDER },
      { label: "Chưa bao gồm", value: PLACEHOLDER },
      { label: "Ưu đãi hiện tại", value: PLACEHOLDER },
    ],
    imageSrc: "/images/san-tap.jpg",
    imageAlt: "Học viên thực hành tại sân tập xe máy của trung tâm",
    faqs: [
      {
        question: "Học phí hạng A1 là bao nhiêu?",
        answer:
          "Học phí hiện đang được cập nhật. Vui lòng liên hệ trực tiếp để được tư vấn chi tiết và chính xác nhất.",
      },
      {
        question: "Khóa học kéo dài bao lâu?",
        answer:
          "Thời gian học sẽ được cập nhật. Trung tâm sắp xếp lịch học linh hoạt, phù hợp với người đi làm.",
      },
      {
        question: "Cần chuẩn bị hồ sơ gì để đăng ký?",
        answer:
          "Xem checklist hồ sơ cần chuẩn bị ở mục trên trang này, hoặc liên hệ để được hướng dẫn cụ thể.",
      },
    ],
  },
  "hang-a": {
    slug: "hang-a",
    href: "/khoa-hoc/hang-a",
    icon: "🏍️",
    shortName: "Hạng A",
    heroTitle: "Đào tạo bằng lái xe hạng A",
    shortDescription:
      "Đào tạo lái xe máy phân khối lớn, yêu cầu và giáo trình riêng.",
    heroDescription:
      "Dành cho người điều khiển xe mô tô hai bánh có dung tích xy-lanh từ 175 cm³ trở lên — giáo trình và bài thi sát hạch chuyên biệt.",
    quickInfo: [
      { label: "Đối tượng", value: "Người đã có bằng A1 hoặc đủ điều kiện nâng hạng" },
      { label: "Độ tuổi", value: "Từ 18 tuổi" },
      { label: "Thời gian học", value: PLACEHOLDER },
      { label: "Học phí", value: PLACEHOLDER },
      { label: "Hình thức thi", value: PLACEHOLDER },
      { label: "Lịch khai giảng gần nhất", value: PLACEHOLDER },
    ],
    trainingSteps: [
      "Học lý thuyết Luật Giao thông đường bộ (nâng cao)",
      "Thực hành lái xe phân khối lớn trên sân tập",
      "Thi thử sát hạch",
      "Thi sát hạch chính thức",
    ],
    documents: [
      "CMND/CCCD còn hiệu lực",
      "Bằng lái A1 (bản gốc để đối chiếu, nếu có)",
      "Ảnh thẻ 3x4 nền trắng (số lượng theo quy định)",
      "Giấy khám sức khỏe theo mẫu quy định",
      "Đơn đăng ký học lái xe (trung tâm hỗ trợ chuẩn bị)",
    ],
    tuitionNotes: [
      { label: "Học phí trọn gói", value: PLACEHOLDER },
      { label: "Đã bao gồm", value: PLACEHOLDER },
      { label: "Chưa bao gồm", value: PLACEHOLDER },
      { label: "Ưu đãi hiện tại", value: PLACEHOLDER },
    ],
    imageSrc: "/images/hoc-vien.jpg",
    imageAlt: "Học viên ôn tập lý thuyết trên máy tính tại trung tâm",
    faqs: [
      {
        question: "Học hạng A có cần bằng A1 trước không?",
        answer:
          "Tùy quy định hiện hành và tình trạng hồ sơ của bạn. Liên hệ trung tâm để được tư vấn điều kiện cụ thể.",
      },
      {
        question: "Học phí hạng A là bao nhiêu?",
        answer:
          "Học phí hiện đang được cập nhật. Vui lòng liên hệ trực tiếp để được tư vấn chi tiết.",
      },
      {
        question: "Sân tập có xe phân khối lớn để thực hành không?",
        answer:
          "Trung tâm bố trí xe tập phù hợp với giáo trình hạng A. Thông tin chi tiết sẽ được cập nhật.",
      },
    ],
  },
  "cap-doi-cap-lai": {
    slug: "cap-doi-cap-lai",
    href: "/khoa-hoc/cap-doi-cap-lai",
    icon: "🔄",
    shortName: "Cấp đổi / cấp lại",
    heroTitle: "Cấp đổi / cấp lại bằng lái xe",
    shortDescription:
      "Hỗ trợ cấp đổi bằng hết hạn, cấp lại bằng mất/hỏng, đổi từ giấy phép cũ.",
    heroDescription:
      "Hỗ trợ thủ tục cấp đổi bằng lái hết hạn, cấp lại bằng bị mất/hỏng, hoặc đổi từ giấy phép lái xe mẫu cũ sang mẫu mới.",
    quickInfo: [
      { label: "Đối tượng", value: "Người đã có bằng lái, cần cấp đổi/cấp lại" },
      { label: "Độ tuổi", value: "Theo quy định hiện hành" },
      { label: "Thời gian xử lý", value: PLACEHOLDER },
      { label: "Chi phí", value: PLACEHOLDER },
      { label: "Hình thức", value: PLACEHOLDER },
      { label: "Lịch tiếp nhận gần nhất", value: PLACEHOLDER },
    ],
    trainingSteps: [
      "Tiếp nhận và kiểm tra hồ sơ",
      "Hướng dẫn hoàn thiện thủ tục cấp đổi/cấp lại",
      "Nộp hồ sơ tới cơ quan có thẩm quyền",
      "Nhận bằng lái mới",
    ],
    documents: [
      "CMND/CCCD còn hiệu lực",
      "Bằng lái cũ (nếu còn giữ được)",
      "Đơn đề nghị cấp đổi/cấp lại giấy phép lái xe",
      "Giấy khám sức khỏe theo mẫu quy định",
      "Ảnh thẻ 3x4 nền trắng (số lượng theo quy định)",
    ],
    tuitionNotes: [
      { label: "Chi phí dịch vụ", value: PLACEHOLDER },
      { label: "Đã bao gồm", value: PLACEHOLDER },
      { label: "Chưa bao gồm", value: PLACEHOLDER },
      { label: "Ưu đãi hiện tại", value: PLACEHOLDER },
    ],
    imageSrc: "/images/giao-vien.jpg",
    imageAlt: "Học viên xếp hàng nghe hướng dẫn thủ tục tại trung tâm",
    faqs: [
      {
        question: "Bằng lái hết hạn bao lâu thì phải thi lại lý thuyết?",
        answer:
          "Tùy thời gian hết hạn theo quy định hiện hành. Liên hệ trung tâm để được tư vấn trường hợp cụ thể của bạn.",
      },
      {
        question: "Mất bằng lái thì cần giấy tờ gì để cấp lại?",
        answer:
          "Xem checklist hồ sơ ở mục trên trang này, hoặc liên hệ để được hướng dẫn chi tiết theo trường hợp mất/hỏng bằng.",
      },
      {
        question: "Thời gian xử lý mất bao lâu?",
        answer:
          "Thời gian xử lý hiện đang được cập nhật, phụ thuộc vào từng trường hợp cụ thể.",
      },
    ],
    specialNote: {
      title: "Trường hợp áp dụng",
      items: [
        "Bằng lái đã hết hạn sử dụng",
        "Bằng lái bị mất",
        "Bằng lái bị hỏng, mờ, không còn sử dụng được",
        "Đổi từ giấy phép lái xe mẫu cũ (bằng giấy) sang mẫu mới (thẻ PET)",
      ],
    },
  },
};

export const COURSE_LIST: CourseInfo[] = Object.values(COURSES);

export function getRelatedCourses(current: CourseSlug): CourseInfo[] {
  return COURSE_LIST.filter((course) => course.slug !== current);
}
