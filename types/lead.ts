/**
 * Kiểu dữ liệu dùng chung giữa các form thu thập lead (RegisterForm, ContactForm)
 * và API route `/api/dang-ky`. Giữ ở một chỗ để tránh lệch kiểu dữ liệu giữa
 * client và server khi chỉnh sửa sau này.
 */
export type LeadPayload = {
  name: string;
  phone: string;
  /** Hạng bằng quan tâm (nếu có) — ví dụ "Hạng A1". */
  hangBang?: string;
  /** Khu vực/chi nhánh học viên chọn (nếu có). */
  khuVuc?: string;
  /** Ghi chú / nội dung cần hỗ trợ (nếu có). */
  ghiChu?: string;
  /** Nguồn gửi lead — ví dụ "dang-ky", "lien-he", "khoa-hoc/hang-a1". */
  source: string;
};

export type LeadResponse =
  | { success: true }
  | { success: false; error: string };
