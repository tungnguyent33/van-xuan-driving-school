# Văn phòng đào tạo lái xe Vạn Xuân

Landing page tuyển sinh lái xe máy hạng A1, A tại Vạn Xuân, Phú Thọ.
HTML/CSS/JavaScript thuần, không dependency, build bằng Node (>= 20).

## Lệnh

- `npm run build`: xuất trang ra `dist/`
- `npm test`: build rồi kiểm tra nội dung (CTA, cấu trúc, cụm từ cấm, form, link)
- `npm run preview`: build và chạy http://localhost:4173

## Sửa nội dung

- Chữ, hotline, Zalo, Google Maps, học phí, FAQ, đánh giá, ảnh: `src/content.mjs`
- Khung trang: `src/render.mjs`
- Giao diện và hiệu ứng: `src/styles.css`
- Ảnh đã nén: `public/images/`

Hướng dẫn chi tiết và quy tắc nội dung: xem `CLAUDE.md`.

## Triển khai

Vercel build theo `vercel.json` (`npm run build`, thư mục `dist`).
Các đường dẫn của phiên bản cũ (`/khoa-hoc`, `/lien-he`, `/dang-ky`…) được chuyển hướng về trang chính.
