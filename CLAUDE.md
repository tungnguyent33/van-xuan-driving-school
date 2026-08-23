# CLAUDE.md

Hướng dẫn cho Claude Code khi làm việc trên dự án này.

## Tổng quan dự án

Website giới thiệu **Trung tâm đào tạo lái xe Phú Thọ** — chi nhánh **Vạn Xuân**.
Mục tiêu: website giới thiệu dịch vụ, xây dựng uy tín, tối giản — hiện đại — chuyên nghiệp,
giúp học viên tiềm năng hiểu nhanh về trung tâm, các khóa đào tạo và đăng ký học nhanh chóng.

**Sitemap đầy đủ:**
- `/` — Trang chủ
- `/gioi-thieu` — Giới thiệu trung tâm (giới thiệu chung + chi nhánh Vạn Xuân)
- `/khoa-hoc` — Danh sách khóa học / dịch vụ đào tạo
  - `/khoa-hoc/hang-a1` — Chi tiết: Bằng A1 (xe máy)
  - `/khoa-hoc/hang-a` — Chi tiết: Bằng A (xe máy phân khối lớn)
  - `/khoa-hoc/cap-doi-cap-lai` — Chi tiết: Cấp đổi / cấp lại bằng lái
  - `/khoa-hoc/[hang-khac]` — Mở rộng: B1, B2, C... khi triển khai thêm
- `/lich-khai-giang` — Lịch khai giảng & lịch thi
- `/dang-ky` — Form đăng ký học / đăng ký tư vấn
- `/tin-tuc` — Tin tức / Blog / Mẹo thi
  - `/tin-tuc/[slug]` — Chi tiết bài viết
- `/faq` — Câu hỏi thường gặp
- `/lien-he` — Liên hệ & bản đồ chi nhánh

> Wireframe chi tiết từng trang: xem [docs/sitemap-wireframe.md](docs/sitemap-wireframe.md) —
> tài liệu tham chiếu chính khi sinh code cho từng trang, đảm bảo đúng cấu trúc và mục tiêu
> chuyển đổi (mỗi trang có CTA, thứ tự block, v.v.).

## Lộ trình triển khai theo giai đoạn

- **Giai đoạn 1 (MVP):** ✅ Hoàn thành — Trang chủ, Giới thiệu, Liên hệ cơ bản.
- **Giai đoạn 2 (Chuyển đổi):** ✅ Hoàn thành — Khóa học (`/khoa-hoc` + 3 trang chi tiết dùng chung
  `KhoaHocDetailLayout`), Đăng ký (`/dang-ky` + `RegisterForm` dùng chung), Lịch khai giảng
  (`/lich-khai-giang` + `ScheduleTable`/`ScheduleFilterTable`), FAQ (`/faq` + `FaqAccordion`).
- **Giai đoạn 3 (SEO & uy tín):** ✅ Hoàn thành — Tin tức (`/tin-tuc` + `/tin-tuc/[slug]`, dữ liệu mẫu
  tại `content/tin-tuc.ts` cần thay bằng CMS/nội dung thật), metadata SEO riêng cho mọi trang.
- **Giai đoạn 4 (Vận hành):** ✅ Hoàn thành khung xử lý — API route `app/api/dang-ky/route.ts`
  (hiện chỉ validate + console.log, CHƯA nối Google Sheets thật — cần Sheet ID + Apps Script Web
  App URL), `RegisterForm`/`ContactForm` gọi API qua fetch với trạng thái loading/success/error,
  tracking `lib/tracking.ts` (console.log + đẩy `window.dataLayer`, sẵn sàng cho GTM/GA4 thật),
  schema.org JSON-LD (`DrivingSchool` ở layout gốc, `FAQPage` ở `/faq`, dữ liệu tại
  `data/business-info.ts`).

> Khi hoàn thành một giai đoạn, cập nhật lại tiến độ ở đây trước khi chuyển sang giai đoạn tiếp theo.

## Tech stack

- **Framework:** Next.js (App Router)
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** `next/font` (tối ưu tải font, không dùng CDN ngoài)
- **Hình ảnh:** `next/image` cho mọi ảnh nội dung (tối ưu tự động)
- **Deploy dự kiến:** Vercel (hoặc hosting tĩnh nếu build export)

> Nếu chưa khởi tạo project, dùng: `npx create-next-app@latest . --typescript --tailwind --app --eslint`

### Lệnh thường dùng

```bash
npm run dev      # chạy dev server
npm run build    # build production
npm run lint     # kiểm tra lint
```

## Design guidelines

**Phong cách:** tối giản (minimalist), hiện đại (modern), chuyên nghiệp (professional) —
theo ảnh tham khảo dạng website ô tô/dealer mà người dùng cung cấp (bố cục header + hero
banner lớn + nội dung nhiều cột + khối CTA nổi bật + footer icon).

### Bố cục tổng thể (theo ảnh tham khảo)

1. **Header**: logo bên trái + thanh menu ngang (nền xanh dương đậm), menu nằm ngay dưới
   logo, dàn hàng ngang, rõ ràng, ít mục (Trang chủ, Giới thiệu, Khóa học, Liên hệ...).
2. **Hero banner**: ảnh lớn full-width (ưu tiên ảnh thật: xe tập lái, học viên, sân tập —
   không dùng ảnh xe thương mại như bản gốc), tiêu đề lớn đè lên ảnh, có thể kèm 1 dòng
   mô tả ngắn + nút CTA.
3. **Nội dung chia cột**: ngay dưới hero, chia 2-3 cột, mỗi cột 1 heading ngắn (màu xanh
   đậm, đậm nét) + đoạn mô tả ngắn (ví dụ: "Vì sao chọn chúng tôi", "Đội ngũ giáo viên",
   "Cam kết đầu ra").
4. **Khối CTA nổi bật**: 1 box tách biệt, nền màu nhạt (xanh nhạt/xám nhạt) tương phản
   với nền chính, chứa nút bấm màu accent nổi bật (ví dụ "Đăng ký học ngay" / "Tư vấn
   miễn phí") — nút phải nổi bật rõ ràng, không lẫn vào nền.
5. **Footer**: dải icon tròn (màu xanh chủ đạo) xếp hàng ngang kèm nhãn ngắn — dùng cho
   liên kết nhanh (Khóa học, Lịch khai giảng, Liên hệ, Mạng xã hội...), gọn, không rối mắt.

### Bảng màu

- **Primary (chủ đạo):** xanh dương đậm (dùng cho menu, heading, icon) — gợi cảm giác tin
  cậy, chuyên nghiệp, phù hợp lĩnh vực đào tạo/an toàn giao thông.
- **Nền:** trắng / xám rất nhạt — giữ cảm giác thoáng, tối giản.
- **Accent (CTA):** cam hoặc đỏ — chỉ dùng cho nút hành động chính (đăng ký, liên hệ) để
  tạo tương phản mạnh, dẫn mắt người dùng, không dùng tràn lan.
- Tránh phối nhiều màu sặc sỡ ngoài 3 nhóm màu trên.

### Typography

- 1 font sans-serif hiện đại (ví dụ Inter, hoặc tương đương qua `next/font`).
- Heading đậm, màu xanh chủ đạo, tối đa 2-3 cấp độ rõ ràng (H1 hero, H2 section, H3 card).
- Body text màu xám đậm (không dùng đen tuyệt đối), line-height thoáng, dễ đọc.

### Component

- Button/card bo góc nhẹ, shadow tinh tế (không đổ bóng nặng).
- Nút CTA chính luôn dùng màu accent (cam/đỏ), nút phụ dùng viền/màu trung tính.
- Hover state rõ ràng nhưng nhẹ nhàng (transition mượt, không giật).
- Icon tròn nền xanh (footer, điểm nổi bật) đồng bộ về kích thước.

### Ảnh & Responsive

- Ưu tiên ảnh thực tế (xe tập lái, sân tập, học viên, giáo viên) hơn ảnh stock chung chung,
  để tăng độ tin cậy — thay thế hoàn toàn kiểu ảnh xe thương mại trong bản tham khảo.
- Mobile-first: hero banner, menu (chuyển hamburger trên mobile), khối 2-3 cột (stack dọc
  trên mobile), dải icon footer (wrap gọn) — vì phần lớn người tìm khóa học lái xe tra cứu
  trên điện thoại.

## Component dùng chung

Đặt trong `components/`, đặt tên PascalCase, mỗi component một file:

| Component | Dùng ở trang | Ghi chú |
|---|---|---|
| `Header` | Tất cả | Menu ngang + nút CTA phụ nổi bật |
| `Footer` | Tất cả | Dải icon tròn + liên kết nhanh |
| `Hero` | Trang chủ, mọi trang con (biến thể nhỏ) | Prop: ảnh, H1, sub, CTA |
| `Section` | Tất cả | Wrapper layout chuẩn khoảng cách |
| `Card` | Khóa học, tin tức, review | Bo góc nhẹ, shadow tinh tế |
| `Button` | Tất cả | Variant `primary` (accent) và `secondary` (viền) |
| `CTASection` | Trang chủ, chi tiết khóa học, tin tức, FAQ | Box nền nhạt, luôn có 1 nút accent |
| `StatBlock` | Trang chủ | Số liệu niềm tin (số năm hoạt động, học viên, tỉ lệ đỗ...) |
| `ScheduleTable` | Trang chủ, lịch khai giảng, chi tiết khóa học | Bảng lịch khai giảng; cột "Còn slot" tự highlight màu accent khi số chỗ ≤ `LOW_SLOTS_THRESHOLD` (xem `lib/schedule.ts`) |
| `RegisterForm` | `/dang-ky`, `/lien-he`, chi tiết khóa học | `"use client"`, preset hạng bằng qua query param |
| `FaqAccordion` | Trang chủ (rút gọn), `/faq`, chi tiết khóa học | `"use client"` — tương tác mở/đóng |
| `Breadcrumb` | Chi tiết khóa học, chi tiết tin tức | Điều hướng ngữ cảnh |
| `ReviewCarousel` | Trang chủ (khối "Đánh giá học viên") | `"use client"`, carousel cuộn ngang (scroll-snap, không dùng thư viện ngoài); mỗi đánh giá có `imageSrc` tùy chọn — chưa có ảnh thì tự hiển thị avatar placeholder |

## Quy tắc chuyển đổi (Conversion rules)

- Mỗi trang **phải** có tối thiểu 1 CTA chính dẫn tới `/dang-ky` hoặc hotline/Zalo.
- Trang chủ: hero + CTA chính phải nằm trong màn hình đầu (above the fold) trên mobile.
- Trang chi tiết khóa học: CTA nên sticky trên mobile, có form đăng ký rút gọn ngay trong trang.
- Form đăng ký (`/dang-ky`) chỉ bắt buộc 2 trường: **Họ tên**, **Số điện thoại** — các trường
  khác optional.
- Không hard-code học phí/lịch khai giảng thật khi chưa được cung cấp — dùng placeholder rõ ràng.
- Ngoại lệ có chủ đích: cột "Còn slot" ở `ScheduleTable`/`ScheduleFilterTable` (trang chủ và
  `/lich-khai-giang`) hiển thị số ngẫu nhiên 1-20 qua `lib/schedule.ts` (`randomSlots()`) — đây là
  yêu cầu minh họa giao diện của người dùng, KHÔNG phải lỗi cần sửa thành placeholder. Ngày khai
  giảng vẫn giữ `(Đang cập nhật)` cho tới khi có lịch thật.

## Thông tin nghiệp vụ (cần điền)

> Điền các thông tin thật của trung tâm vào đây để nội dung website chính xác, tránh bịa
> thông tin (địa chỉ, SĐT, học phí...) khi chưa được cung cấp.

- Tên đầy đủ: Trung tâm đào tạo lái xe Phú Thọ
- Chi nhánh: Vạn Xuân — địa chỉ: _(chưa có)_
- Hotline / SĐT liên hệ: `0823279999` — đã điền tại `data/contact.ts` (hiển thị qua `HotlineLink`)
- Link Zalo: `https://zalo.me/0823279999` — đã điền tại `data/contact.ts` (hiển thị qua `ZaloLink`)
- Email: _(chưa có)_
- Các hạng bằng lái đào tạo: _(chưa có)_
- Giờ làm việc: _(chưa có)_
- Học phí từng hạng (A1, A, cấp đổi/cấp lại): _(chưa có)_
- Lịch khai giảng gần nhất: _(chưa có)_
- Hồ sơ cần chuẩn bị theo từng hạng: _(chưa có)_
- Số năm hoạt động / số học viên / tỉ lệ đỗ (dùng cho `StatBlock`): đã điền tại `app/page.tsx`
  (`Từ 2023` · `Hơn 500+ học viên` · `Trên 90% tỉ lệ đỗ`) — xác nhận lại nếu số liệu thay đổi
- Địa chỉ Google Maps chi nhánh Vạn Xuân: _(chưa có)_

## Quy ước code

- Component đặt trong `components/`, đặt tên PascalCase, mỗi component một file.
- Trang đặt theo cấu trúc App Router trong `app/` (ví dụ `app/gioi-thieu/page.tsx`).
- Ưu tiên Server Components; chỉ dùng `"use client"` khi thực sự cần tương tác (form, state).
- Text tiếng Việt: viết có dấu, chuẩn chính tả; URL slug không dấu (ví dụ `/gioi-thieu`,
  không phải `/giới-thiệu`).
- Không hard-code thông tin liên hệ/học phí chưa được xác nhận — dùng placeholder rõ ràng
  hoặc hỏi lại người dùng.
- Giữ component nhỏ, tái sử dụng được (ví dụ `Section`, `Card`, `Button`, `Header`, `Footer`).
