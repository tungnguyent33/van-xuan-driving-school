/**
 * Cấu hình liên hệ dùng cho HotlineLink/ZaloLink.
 * Để trống ("") nghĩa là chưa có thông tin thật — các component liên quan sẽ
 * tự hiển thị "(Đang cập nhật)" thay vì tạo link giả. Điền số/link thật vào
 * đây thì toàn bộ site (Footer, /dang-ky, /lien-he, trang chủ...) sẽ tự động
 * hiển thị link bấm gọi/chat kèm tracking, không cần sửa ở nơi khác.
 */
export const CONTACT = {
  /** Ví dụ: "0912345678" (không dấu cách, dùng cho href="tel:..."). */
  hotline: "0823279999",
  /** Ví dụ: "https://zalo.me/0912345678". */
  zaloUrl: "https://zalo.me/0823279999",
};
