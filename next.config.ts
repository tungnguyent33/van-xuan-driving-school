import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cho phép next/image tối ưu ảnh SVG nội bộ (dùng cho ảnh placeholder
    // trong lúc chưa có ảnh thật). Chỉ áp dụng cho SVG do chính dự án cung cấp.
    dangerouslyAllowSVG: true,
    // "inline" (thay vì "attachment") để SVG hiển thị được trong thẻ <img>/next/image.
    // An toàn vì đây là SVG tĩnh do dự án tự cung cấp, không phải nội dung người dùng tải lên.
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
