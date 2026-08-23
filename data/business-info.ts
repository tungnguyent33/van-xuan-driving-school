/**
 * Thông tin doanh nghiệp dùng cho schema.org JSON-LD (SEO).
 * Điền các giá trị còn để trống khi có thông tin thật — xem thêm mục
 * "Thông tin nghiệp vụ (cần điền)" trong CLAUDE.md. Trường nào để trống ("")
 * sẽ tự động bị loại khỏi JSON-LD (xem lib/schema.ts) để tránh xuất bản
 * dữ liệu có cấu trúc sai lệch (ví dụ số điện thoại giả) ra công cụ tìm kiếm.
 */
export const BUSINESS_INFO = {
  name: "Trung tâm đào tạo lái xe Phú Thọ - Chi nhánh Vạn Xuân",
  description:
    "Trung tâm đào tạo lái xe Phú Thọ, chi nhánh Vạn Xuân — đào tạo bài bản, đội ngũ giáo viên tận tâm, cam kết đầu ra.",
  /** Ví dụ: "https://truongdaylaixephutho.vn" */
  url: "",
  /** Ví dụ: "+84912345678" */
  telephone: "0823279999",
  email: "",
  streetAddress: "Số 21, Khu 21, xã Vạn Xuân, tỉnh Phú Thọ",
  /** Quận/Huyện hoặc Thành phố trực thuộc tỉnh. */
  addressLocality: "",
  /** Tỉnh/Thành phố. */
  addressRegion: "",
  postalCode: "",
  addressCountry: "VN",
  /** Ví dụ: "$$" — dùng ký hiệu mức giá schema.org nếu muốn khai báo. */
  priceRange: "",
  /** Ví dụ: ["Mo-Sa 08:00-17:00"] — định dạng theo chuẩn schema.org openingHours. */
  openingHours: [] as string[],
};
