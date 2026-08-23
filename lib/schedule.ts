/**
 * Sinh số slot còn trống ngẫu nhiên (1-20) để hiển thị ở bảng lịch khai giảng.
 * ⚠️ Đây là số liệu MINH HỌA cho mục đích hiển thị giao diện — CHƯA phải sĩ số thật.
 * Cần thay bằng dữ liệu thật (ngày khai giảng + số chỗ còn lại) khi trung tâm cung cấp.
 */
export function randomSlots(): number {
  return Math.floor(Math.random() * 20) + 1;
}

/** Ngưỡng slot được coi là "sắp hết chỗ" — hiển thị nổi bật màu accent. */
export const LOW_SLOTS_THRESHOLD = 5;
