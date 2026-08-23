/**
 * Tracking tối giản cho các sự kiện chuyển đổi (click hotline, click Zalo,
 * submit form...). Hiện tại chỉ console.log + đẩy vào `window.dataLayer`.
 *
 * Khi gắn Google Analytics (GA4) / Google Tag Manager thật:
 * - Nếu dùng GTM: chỉ cần nhúng snippet GTM vào layout — GTM sẽ tự đọc các
 *   sự kiện đã có sẵn trong `window.dataLayer` (kể cả những sự kiện được đẩy
 *   vào trước khi snippet GTM tải xong), không cần sửa lại các lời gọi
 *   `trackEvent(...)` trong code.
 * - Nếu dùng gtag.js (GA4) trực tiếp: thay/​bổ sung lời gọi `window.gtag?.("event", eventName, payload)`
 *   trong hàm bên dưới.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  eventName: string,
  payload: Record<string, unknown> = {},
): void {
  const event = { event: eventName, ...payload };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(event);
  }

  console.log("[tracking]", event);
}
