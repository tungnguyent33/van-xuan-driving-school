// Toàn bộ dữ liệu có thể thay đổi của landing page nằm tại đây.
// Sửa file này rồi chạy `npm run build` để cập nhật dist/index.html.

const hotlineDisplay = "0978 639 199";

export const site = {
  officeName: "Văn phòng đào tạo lái xe Vạn Xuân",
  officeNameLines: ["Văn phòng đào tạo lái xe", "Vạn Xuân"],
  logo: { src: "images/logo-vx.png", alt: "Logo Vạn Xuân", width: 160, height: 133 },
  shortName: "Văn phòng Vạn Xuân",

  hotlineDisplay,
  hotlineHref: "tel:0978639199",
  zaloHref: "https://zalo.me/0978639199",
  // Nhóm Zalo học viên (chủ văn phòng cung cấp 2026-10-13).
  zaloGroupHref: "https://zalo.me/g/ftqdhz976",
  zaloGroupLabel: "Tham gia nhóm Zalo học viên",

  contactAddress: "Nhà văn hóa thôn 18, thôn 18, xã Vạn Xuân, tỉnh Phú Thọ",
  contactAddressShort: "Nhà văn hóa thôn 18, xã Vạn Xuân, tỉnh Phú Thọ",
  // Link Google Maps do chủ văn phòng cung cấp (2026-10-13). Chỉ đặt nút mở bản đồ,
  // không nhúng iframe và không hiển thị tên địa điểm trên Google Maps.
  mapsHref: "https://maps.app.goo.gl/WUqzWExNqY2sK7aD6",
  mapsLabel: "Xem đường đi trên Google Maps",

  licenseClasses: ["A1", "A"],

  priceFrom: "1.200.000đ",
  priceNote:
    "Liên hệ để xác nhận khóa/gói áp dụng, các khoản bao gồm và lịch học phù hợp.",

  seo: {
    title: "Học lái xe máy A1, A tại Vạn Xuân, Phú Thọ",
    description: `Tìm hiểu khóa học lái xe máy A1, A tại Văn phòng Vạn Xuân, Phú Thọ. Học phí từ 1.200.000đ. Gọi ${hotlineDisplay} để xác nhận học phí và lịch học.`,
  },

  ctaLabel: "Gọi tư vấn học phí & lịch học",
  zaloLabel: "Nhắn Zalo",
  stickyCallLabel: "Gọi ngay",
  stickyZaloLabel: "Nhắn Zalo",

  // Ảnh nền hero: ảnh gốc ở assets-goc/Background, bản nén ở public/images.
  hero: {
    eyebrow: "Tuyển sinh lái xe máy A1, A",
    heading: "Học lái xe máy A1, A tại Vạn Xuân – Phú Thọ",
    lead: "Dành cho học sinh, sinh viên và người lao động có nhu cầu học, thi giấy phép lái xe máy.",
    background: {
      src: "images/hero-1920.jpg",
      // Bản cắt riêng cho điện thoại (tập trung vào người tập lái và vạch sa hình).
      srcMobile: "images/hero-mobile.jpg",
      alt: "Học viên tập lái xe máy trên sân có vạch sa hình",
      width: 1920,
      height: 1440,
    },
  },

  // Ảnh/video thật do chủ văn phòng cung cấp (2026-10-13).
  // Mọi ô dùng tỷ lệ 3:4. Bấm ảnh để xem lớn (lightbox).
  // Chú thích video viết theo khung hình đầu của video — cần chủ văn phòng xác nhận.
  gallery: {
    heading: "Hình ảnh thực tế tại Vạn Xuân",
    groups: [
      {
        title: "Lớp học và làm hồ sơ",
        items: [
          { type: "image", src: "images/lop-hoc-1.jpg", width: 720, height: 960, alt: "Hướng dẫn viên phát tài liệu cho học viên trong lớp học", caption: "Lớp học lý thuyết" },
          { type: "image", src: "images/lop-hoc-2.jpg", width: 720, height: 960, alt: "Hướng dẫn viên giảng bài cho học viên ngồi tại bàn", caption: "Hướng dẫn ôn tập" },
          { type: "image", src: "images/lop-hoc-4.jpg", width: 720, height: 960, alt: "Phòng có bảng hệ thống biển báo giao thông, học viên khám sức khỏe", caption: "Khám sức khỏe khi làm hồ sơ" },
          { type: "image", src: "images/lop-hoc-5.jpg", width: 720, height: 960, alt: "Nhân viên hỗ trợ học viên nhập thông tin hồ sơ trên máy tính", caption: "Hỗ trợ làm hồ sơ" },
        ],
      },
      {
        title: "Sân tập",
        items: [
          { type: "image", src: "images/san-tap-bien-hieu-doc.jpg", width: 720, height: 960, alt: "Biển hiệu Đào tạo lái xe Vạn Xuân hạng A, A1 trên dãy nhà tại thôn 18, xã Vạn Xuân", caption: "Biển hiệu tại thôn 18, xã Vạn Xuân" },
          { type: "video", src: "images/san-tap-video-1.mp4", poster: "images/san-tap-video-1-poster.jpg", caption: "Tập lái xe tay ga theo vạch kẻ trên sân" },
          { type: "video", src: "images/san-tap-video-2.mp4", poster: "images/san-tap-video-2-poster.jpg", caption: "Tập lái xe số qua vạch vòng tròn trên sân" },
        ],
      },
    ],
  },

  // Dải ảnh vuốt ngang, không tự chạy (CLAUDE.md cấm carousel tự chạy).
  activities: {
    heading: "Hoạt động gần đây",
    items: [
      { type: "image", src: "images/hoat-dong-1.jpg", width: 1280, height: 960, alt: "Đông học viên làm thủ tục hồ sơ tại hội trường", caption: "Học viên làm thủ tục hồ sơ" },
      { type: "image", src: "images/hoat-dong-2.jpg", width: 960, height: 1280, alt: "Cán bộ hướng dẫn học viên ký hồ sơ", caption: "Hướng dẫn ký hồ sơ" },
      { type: "video", src: "images/hoat-dong-video.mp4", poster: "images/hoat-dong-video-poster.jpg", caption: "Lễ khai mạc tại hội trường" },
    ],
  },

  // Mỗi mục: băn khoăn (title) + hướng giải quyết (solution). Không thêm cam kết mới.
  problems: {
    heading: "Bạn chưa biết bắt đầu từ đâu?",
    items: [
      {
        title: "Chưa biết nên học hạng A1 hay hạng A",
        solution: "Cho văn phòng biết loại xe bạn định sử dụng để được tư vấn chọn hạng phù hợp trước khi đăng ký.",
      },
      {
        title: "Chưa rõ hồ sơ cần chuẩn bị",
        solution: "Liên hệ để được hướng dẫn điều kiện dự thi và giấy tờ cần chuẩn bị theo quy định hiện hành.",
      },
      {
        title: "Lo chi phí không rõ ràng",
        solution: "Học phí từ 1.200.000đ. Hỏi rõ khóa/gói áp dụng và các khoản bao gồm, chưa bao gồm trước khi đăng ký.",
      },
    ],
  },

  services: {
    heading: "Khóa học lái xe máy",
    items: [
      {
        mark: "A1",
        title: "Lái xe máy hạng A1",
        text: "Tư vấn điều kiện, hồ sơ và lịch học cho người muốn thi bằng hạng A1.",
      },
      {
        mark: "A",
        title: "Lái xe máy hạng A",
        text: "Tư vấn điều kiện, hồ sơ và lịch học cho người muốn thi bằng hạng A.",
      },
      {
        mark: null,
        title: "Tư vấn thủ tục và lịch học",
        text: "Hướng dẫn chuẩn bị hồ sơ và sắp xếp lịch học phù hợp với thời gian của bạn.",
      },
    ],
  },

  process: {
    heading: "Quy trình tham gia",
    steps: [
      {
        title: "Tư vấn",
        text: `Gọi ${hotlineDisplay} hoặc nhắn Zalo để hỏi học phí, lịch học và điều kiện tham gia.`,
      },
      {
        title: "Hoàn thiện hồ sơ",
        text: "Chuẩn bị giấy tờ theo hướng dẫn của văn phòng.",
      },
      {
        title: "Học",
        text: "Tham gia học theo lịch đã được xác nhận.",
      },
      {
        title: "Thi",
        text: "Dự thi theo lịch và địa điểm được thông báo cho từng đợt.",
      },
    ],
  },

  // Nội dung cam kết do chủ văn phòng cung cấp (xem CLAUDE.md).
  // Không thêm con số % hay số liệu chưa được xác nhận.
  whyUs: {
    heading: "Vì sao chọn Văn phòng Vạn Xuân",
    items: [
      {
        title: "Hướng dẫn viên uy tín, tận tâm",
        text: "Hướng dẫn rõ ràng từ lúc tư vấn, chuẩn bị hồ sơ đến khi đi thi.",
      },
      {
        title: "Không phát sinh chi phí ngoài thỏa thuận",
        text: "Các khoản phí được trao đổi rõ trước khi bạn đăng ký.",
      },
      {
        title: "Tỷ lệ đỗ cao",
        text: "",
      },
      {
        title: "Địa điểm liên hệ tại Vạn Xuân",
        text: "Nhà văn hóa thôn 18, xã Vạn Xuân, tỉnh Phú Thọ.",
      },
    ],
  },

  // Đánh giá công khai trên Google Maps (chụp màn hình do chủ văn phòng gửi, 2026-10-13).
  // Giữ nguyên lời nhận xét, chỉ chỉnh khoảng trắng/viết hoa đầu câu.
  // Ảnh chụp đoạn chat Messenger trong assets-goc/Feedback CHƯA đăng: cần học viên đồng ý.
  testimonials: {
    heading: "Học viên nói gì",
    summary: { rating: "4,8", count: 9, source: "Google Maps" },
    items: [
      { name: "Quỳnh Chi", stars: 5, quote: "Lo cho tri tiết, dậy nhiệt tình và tận tâm.", detail: "Đánh giá trên Google Maps" },
      { name: "Hao Nguyen", stars: 5, quote: "Trải nghiệm rất tốt. Thầy rất nhiệt tình.", detail: "Đánh giá trên Google Maps" },
      { name: "Nhi Nguyen", stars: 5, quote: "Tuyệt vời. Thầy giáo rất nhiệt tình.", detail: "Đánh giá trên Google Maps" },
    ],
    placeholderCount: 3,
    placeholderText: "Đánh giá thật từ học viên sẽ được cập nhật tại đây.",
  },

  // Accordion: câu đầu (học phí) mở sẵn.
  faq: {
    heading: "Thông tin thường được hỏi",
    ctaLabel: "Gọi tư vấn học phí và lịch học",
    items: [
      {
        q: "Học phí 1.200.000đ đã bao gồm những gì?",
        a: `Đây là mức học phí khởi điểm. Gọi ${hotlineDisplay} để xác nhận khóa/gói áp dụng và các khoản bao gồm, chưa bao gồm trước khi đăng ký.`,
      },
      {
        q: "Khi nào có lịch học và thi?",
        a: "Liên hệ văn phòng để biết lịch đang nhận đăng ký. Thời gian và địa điểm cụ thể cần được xác nhận theo từng đợt.",
      },
      {
        q: "Tôi chưa biết lái xe, có thể tìm hiểu khóa học không?",
        a: "Có thể liên hệ để trao đổi nhu cầu, trình độ hiện tại và điều kiện tham gia trước khi chọn khóa học.",
      },
      {
        q: "Cần chuẩn bị giấy tờ gì để đăng ký?",
        a: `Giấy tờ cần chuẩn bị theo quy định hiện hành. Liên hệ ${hotlineDisplay} để biết chi tiết trước khi nộp hồ sơ.`,
      },
      {
        q: "Nên học hạng A1 hay hạng A?",
        a: "Hạng phù hợp phụ thuộc vào loại xe bạn định sử dụng. Liên hệ văn phòng để được tư vấn chọn hạng trước khi đăng ký.",
      },
    ],
  },

  contact: {
    heading: "Nhận tư vấn học phí và lịch học",
    lead: "Gọi, nhắn Zalo hoặc để lại số điện thoại để văn phòng gọi lại tư vấn.",
  },

  // Google Form nhận thông tin đăng ký (đổ về Google Sheets).
  // Cách lấy: mở Google Form > Xem trước > chuột phải "Xem nguồn trang",
  // tìm "formResponse" để lấy action và các mã "entry.xxxxx" của từng câu hỏi.
  // action để trống thì form báo chưa kết nối và gợi ý gọi/nhắn Zalo.
  leadForm: {
    heading: "Để lại thông tin",
    action: "",
    entries: {
      name: "",
      phone: "",
      licenseClass: "",
      note: "",
    },
    licenseOptions: ["Hạng A1", "Hạng A", "Chưa biết, cần tư vấn"],
    purposeNote: "Văn phòng dùng số điện thoại này để gọi lại tư vấn cho bạn.",
    submitLabel: "Gửi thông tin",
    sendingLabel: "Đang gửi…",
    successText: "Đã gửi thông tin. Văn phòng sẽ gọi lại theo số bạn để lại.",
    errorText: `Chưa gửi được thông tin. Vui lòng thử lại, hoặc gọi ${hotlineDisplay}.`,
    notConnectedText: `Form đăng ký đang được kết nối. Vui lòng gọi ${hotlineDisplay} hoặc nhắn Zalo.`,
  },
};
