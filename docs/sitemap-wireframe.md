# Sitemap & Wireframe chi tiết – Website Trung tâm đào tạo lái xe Phú Thọ (chi nhánh Vạn Xuân)

> Tài liệu này dùng để triển khai code (Next.js App Router) theo đúng quy ước trong `CLAUDE.md`.
> Nguyên tắc xuyên suốt: **mọi trang phải có ít nhất 1 CTA chính**, thông tin học phí/hồ sơ/lịch học
> phải xuất hiện sớm (trong 1-2 màn hình đầu), ảnh dùng ảnh thật (xe tập lái, sân tập, học viên).

---

## A. SITEMAP TỔNG THỂ

```
/ (Trang chủ)
├── /gioi-thieu                     (Giới thiệu trung tâm)
├── /khoa-hoc                       (Danh sách khóa học / dịch vụ)
│   ├── /khoa-hoc/hang-a1            (Chi tiết: Bằng A1 - xe máy)
│   ├── /khoa-hoc/hang-a             (Chi tiết: Bằng A - xe máy phân khối lớn)
│   ├── /khoa-hoc/cap-doi-cap-lai    (Chi tiết: Cấp đổi / cấp lại bằng lái)
│   └── /khoa-hoc/[hang-khac]        (Mở rộng: B1, B2, C... khi triển khai)
├── /lich-khai-giang                (Lịch khai giảng & lịch thi)
├── /dang-ky                        (Form đăng ký học / đăng ký tư vấn)
├── /tin-tuc                        (Blog / Tin tức / Mẹo thi)
│   └── /tin-tuc/[slug]              (Chi tiết bài viết)
├── /faq                            (Câu hỏi thường gặp – có thể nhúng ở nhiều trang)
└── /lien-he                        (Liên hệ & bản đồ chi nhánh)
```

**Điều hướng Header (menu chính, tối đa 6 mục để không rối mắt):**
Trang chủ · Giới thiệu · Khóa học · Lịch khai giảng · Tin tức · Liên hệ
(Nút "Đăng ký học ngay" tách riêng, luôn hiển thị bên phải header dạng nút accent — không nằm trong menu ngang).

**Điều hướng Footer (dải icon tròn):**
Khóa học · Lịch khai giảng · Đăng ký · Liên hệ · Hotline · Zalo/Fanpage

---

## B. WIREFRAME CHI TIẾT TỪNG TRANG

### 1. Trang chủ (`/`)

Mục tiêu: gây ấn tượng nhanh, dẫn người xem tới khóa học phù hợp và CTA đăng ký.

```
[HEADER] Logo | Trang chủ · Giới thiệu · Khóa học · Lịch khai giảng · Tin tức · Liên hệ
                                                          [Đăng ký học ngay] (btn)
──────────────────────────────────────────────────────────────────────────────
[HERO BANNER] full-width, ảnh xe tập lái/sân tập thật
  H1: "Đào tạo lái xe A1 - A uy tín tại ..."
  Sub: 1 câu mô tả ngắn (uy tín/kinh nghiệm/tỉ lệ đỗ)
  [CTA chính: Đăng ký học ngay]   [CTA phụ: Xem khóa học]
──────────────────────────────────────────────────────────────────────────────
[DÒNG SỐ LIỆU NIỀM TIN] (3 số liệu ngang hàng)
  Số năm hoạt động | Số học viên | Tỉ lệ đỗ 
──────────────────────────────────────────────────────────────────────────────
[KHỐI DỊCH VỤ NỔI BẬT] (3 card ngang, responsive stack)
  [Card] Hạng A1   [Card] Hạng A   [Card] Cấp đổi/lại
  - icon, tên hạng, 1 dòng mô tả, [Xem chi tiết →]
──────────────────────────────────────────────────────────────────────────────
[VÌ SAO CHỌN CHÚNG TÔI] (3 cột, theo design guideline)
  Giáo viên kinh nghiệm | Hướng dẫn tập bài bản gần nơi ở | Hỗ trợ hồ sơ
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA NỔI BẬT] (nền xanh nhạt, box riêng)
  "Tư vấn miễn phí trong 5 phút" + [nút accent]
──────────────────────────────────────────────────────────────────────────────
[LỊCH KHAI GIẢNG SẮP TỚI] (3 mốc gần nhất, dạng bảng)
  Ngày khai giảng | Hạng bằng | Còn slot | [Đăng ký]
──────────────────────────────────────────────────────────────────────────────
[HÌNH ẢNH THỰC TẾ] (gallery ảnh sân tập/học viên/giáo viên)
──────────────────────────────────────────────────────────────────────────────
[ĐÁNH GIÁ HỌC VIÊN] (Sử dụng hình ảnh do tôi đăng tải, có thể là album ảnh/carosel)
──────────────────────────────────────────────────────────────────────────────
[FAQ NGẮN] (3-4 câu hỏi phổ biến nhất, xem thêm → /faq)
──────────────────────────────────────────────────────────────────────────────
[CTA CUỐI TRANG] (full-width band, nền primary)
  "Sẵn sàng lấy bằng lái? Đăng ký ngay hôm nay"
  [Đăng ký học]   [Gọi hotline: 0xxx]
──────────────────────────────────────────────────────────────────────────────
[FOOTER] dải icon tròn + thông tin liên hệ + bản đồ mini
```

**Ưu tiên chuyển đổi:** hero + dòng số liệu + CTA nổi bật phải nằm trong màn hình đầu (above the fold) trên mobile.

---

### 2. Trang Giới thiệu (`/gioi-thieu`)

Mục tiêu: xây uy tín, giải thích "vì sao tin tưởng trung tâm này".

```
[HEADER] (giống toàn site)
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] ảnh cơ sở/chi nhánh Vạn Xuân + H1 "Về Trung tâm đào tạo lái xe Phú Thọ"
──────────────────────────────────────────────────────────────────────────────
[GIỚI THIỆU CHUNG] (2 cột: text trái, ảnh phải)
  Lịch sử hình thành, sứ mệnh, quy mô hoạt động
──────────────────────────────────────────────────────────────────────────────
[CHI NHÁNH VẠN XUÂN] (block riêng)
  Địa chỉ, cơ sở vật chất, ảnh sân tập/xe tập
──────────────────────────────────────────────────────────────────────────────
[ĐỘI NGŨ GIÁO VIÊN] (grid ảnh + tên + kinh nghiệm)
──────────────────────────────────────────────────────────────────────────────
[CAM KẾT ĐẦU RA] (3 điểm: minh bạch học phí, hỗ trợ thi, đồng hành tới khi có bằng)
──────────────────────────────────────────────────────────────────────────────
[CHỨNG NHẬN / GIẤY PHÉP HOẠT ĐỘNG] (nếu có, tăng tin cậy)
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA] "Tìm hiểu khóa học phù hợp" [Xem khóa học]
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

---

### 3. Trang Danh sách khóa học (`/khoa-hoc`)

Mục tiêu: giúp người xem chọn nhanh đúng hạng bằng cần học.

```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] H1 "Các khóa đào tạo lái xe"
  Sub: "Chọn hạng bằng phù hợp với nhu cầu của bạn"
──────────────────────────────────────────────────────────────────────────────
[BỘ LỌC NHANH] (tab hoặc chip): Tất cả | A1 | A | Cấp đổi
──────────────────────────────────────────────────────────────────────────────
[LƯỚI CARD KHÓA HỌC] (mỗi card 1 hạng bằng)
  [Card A1] ảnh, tên hạng, đối tượng, học phí từ ..., thời gian học, [Xem chi tiết →][Đăng ký]
  [Card A]  (tương tự)
  [Card Cấp đổi/cấp lại] (tương tự, nêu rõ điều kiện)
──────────────────────────────────────────────────────────────────────────────
[BẢNG SO SÁNH NHANH] (hạng bằng | đối tượng | học phí | thời gian)
  → giúp so sánh trong 1 lần nhìn
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA] "Chưa biết chọn hạng nào?" [Tư vấn miễn phí]
──────────────────────────────────────────────────────────────────────────────
[FAQ riêng cho khóa học] (3-4 câu)
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

---

### 4. Trang chi tiết khóa học (`/khoa-hoc/hang-a1`, `/khoa-hoc/hang-a`, `/khoa-hoc/cap-doi-cap-lai`)

Mục tiêu: đủ thông tin để ra quyết định đăng ký ngay tại trang, giảm rời trang.

```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[BREADCRUMB] Trang chủ / Khóa học / Hạng A1
──────────────────────────────────────────────────────────────────────────────
[HERO] ảnh minh họa hạng bằng + H1 "Đào tạo bằng lái xe hạng A1"
  + [CTA: Đăng ký ngay] (sticky trên mobile)
──────────────────────────────────────────────────────────────────────────────
[THÔNG TIN NHANH] (bảng/box 2 cột)
  Đối tượng | Độ tuổi | Thời gian học | Học phí
  Hình thức thi | Lịch khai giảng gần nhất
──────────────────────────────────────────────────────────────────────────────
[NỘI DUNG ĐÀO TẠO] (list các bước: lý thuyết → thực hành → thi thử → thi chính thức)
──────────────────────────────────────────────────────────────────────────────
[HỒ SƠ CẦN CHUẨN BỊ] (checklist rõ ràng, dễ chụp màn hình)
──────────────────────────────────────────────────────────────────────────────
[HỌC PHÍ & ƯU ĐÃI] (bảng minh bạch, ghi rõ gồm/không gồm gì)
──────────────────────────────────────────────────────────────────────────────
[HÌNH ẢNH THỰC TẾ] lớp học/sân tập cho hạng này
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA NỔI BẬT] form đăng ký rút gọn (tên, SĐT, hạng bằng đã chọn sẵn)
  — giảm ma sát, không bắt điền nhiều
──────────────────────────────────────────────────────────────────────────────
[FAQ riêng cho hạng bằng này]
──────────────────────────────────────────────────────────────────────────────
[KHÓA HỌC LIÊN QUAN] (gợi ý hạng khác)
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

> Với `/khoa-hoc/cap-doi-cap-lai`: thêm block riêng "Trường hợp áp dụng" (bằng hết hạn, mất bằng,
> hỏng bằng, đổi từ giấy phép cũ...) vì nhu cầu và hồ sơ khác nhóm học mới.

---

### 5. Trang Lịch khai giảng (`/lich-khai-giang`)

Mục tiêu: tạo cảm giác "khan hiếm/kịp thời" để thúc đẩy đăng ký sớm.

```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] H1 "Lịch khai giảng & lịch thi"
──────────────────────────────────────────────────────────────────────────────
[BỘ LỌC] theo hạng bằng | theo tháng
──────────────────────────────────────────────────────────────────────────────
[BẢNG/DANH SÁCH LỊCH KHAI GIẢNG]
  Ngày khai giảng | Hạng bằng | Số slot còn | [Đăng ký]
  (highlight dòng "còn ít slot" bằng màu accent, tôi muốn ở phần này thể hiện random trong khoảng 1-20 slot)
──────────────────────────────────────────────────────────────────────────────
[LỊCH THI] (nếu quản lý riêng): Ngày thi | Hạng | Địa điểm
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA] "Không thấy lịch phù hợp? Liên hệ tư vấn"
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

---

### 6. Trang Đăng ký (`/dang-ky`)

Mục tiêu: chuyển đổi cuối cùng — form phải ngắn, rõ, ít cản trở.

```
[HEADER] (có thể ẩn menu phụ để tập trung vào form)
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] H1 "Đăng ký học lái xe"
  Sub: "Điền thông tin, tư vấn viên liên hệ trong 30'"
──────────────────────────────────────────────────────────────────────────────
2 CỘT (desktop) / STACK (mobile):

  TRÁI: FORM ĐĂNG KÝ
   - Họ tên (bắt buộc)
   - SĐT (bắt buộc)
   - Hạng bằng muốn học (dropdown, preset nếu vào từ trang chi tiết khóa học)
   - Khu vực/chi nhánh
   - Ghi chú (không bắt buộc)
   - [Nút submit accent: "Gửi đăng ký"]
   - Dòng cam kết bảo mật thông tin ngắn

  PHẢI: THÔNG TIN HỖ TRỢ
   - Hotline bấm gọi trực tiếp (click-to-call)
   - Nút Zalo chat
   - Giờ làm việc
   - Mini FAQ: "Đăng ký xong thì sao?"
──────────────────────────────────────────────────────────────────────────────
[TRẠNG THÁI SAU SUBMIT] trang/thông báo "Cảm ơn, chúng tôi sẽ liên hệ trong ..."
  + gợi ý theo dõi Zalo/Fanpage
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

**Ghi chú kỹ thuật:** đây nên là `"use client"` component (form cần state), submit về Google Sheets/Apps
Script hoặc API route theo hướng đã trao đổi ở giai đoạn 4 (tối ưu vận hành).

---

### 7. Trang Tin tức (`/tin-tuc` và `/tin-tuc/[slug]`)

Mục tiêu: SEO dài hạn, kéo traffic tự nhiên từ Google.

**Danh sách (`/tin-tuc`):**
```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] H1 "Tin tức & mẹo thi bằng lái"
──────────────────────────────────────────────────────────────────────────────
[BỘ LỌC THEO CHUYÊN MỤC] Mẹo thi | Quy định | Thông báo
──────────────────────────────────────────────────────────────────────────────
[LƯỚI BÀI VIẾT] (ảnh + tiêu đề + mô tả ngắn + ngày)
──────────────────────────────────────────────────────────────────────────────
[PHÂN TRANG / LOAD MORE]
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

**Chi tiết (`/tin-tuc/[slug]`):**
```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[BREADCRUMB] + H1 tiêu đề bài viết + ngày đăng
──────────────────────────────────────────────────────────────────────────────
[ẢNH ĐẠI DIỆN BÀI VIẾT]
──────────────────────────────────────────────────────────────────────────────
[NỘI DUNG BÀI VIẾT] (rich text)
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA GIỮA BÀI] "Đang tìm khóa học? [Xem khóa học]"
──────────────────────────────────────────────────────────────────────────────
[BÀI VIẾT LIÊN QUAN] (3 card)
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

---

### 8. Trang FAQ (`/faq`)

Mục tiêu: giải tỏa lo lắng trước khi quyết định đăng ký, giảm số câu hỏi lặp lại qua hotline.

```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] H1 "Câu hỏi thường gặp"
──────────────────────────────────────────────────────────────────────────────
[NHÓM CÂU HỎI] (accordion, chia theo chủ đề):
  - Về hồ sơ & điều kiện
  - Về học phí & thanh toán
  - Về lịch học & thi
  - Về cấp đổi/cấp lại bằng
──────────────────────────────────────────────────────────────────────────────
[KHỐI CTA] "Vẫn còn thắc mắc? [Liên hệ tư vấn]"
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

---

### 9. Trang Liên hệ (`/lien-he`)

Mục tiêu: cung cấp mọi cách liên hệ, hạ rào cản "chưa sẵn sàng điền form".

```
[HEADER]
──────────────────────────────────────────────────────────────────────────────
[HERO NHỎ] H1 "Liên hệ với chúng tôi"
──────────────────────────────────────────────────────────────────────────────
2 CỘT:
  TRÁI: thông tin liên hệ (hotline, email, giờ làm việc,
    địa chỉ từng chi nhánh) + nút Zalo/Fanpage
  PHẢI: Google Maps embed (chi nhánh Vạn Xuân)
──────────────────────────────────────────────────────────────────────────────
[FORM LIÊN HỆ NGẮN] (tên, SĐT, nội dung cần hỗ trợ)
──────────────────────────────────────────────────────────────────────────────
[FOOTER]
```

---

## C. LƯỚI COMPONENT DÙNG CHUNG (map với `components/`)

| Component | Dùng ở trang | Ghi chú |
|---|---|---|
| `Header` | Tất cả | Menu ngang + nút CTA phụ nổi bật |
| `Footer` | Tất cả | Dải icon tròn + liên kết nhanh |
| `Hero` | Trang chủ, mọi trang con (biến thể nhỏ) | Prop: ảnh, H1, sub, CTA |
| `Section` | Tất cả | Wrapper layout chuẩn khoảng cách |
| `Card` | Khóa học, tin tức, review | Bo góc nhẹ, shadow tinh tế |
| `Button` | Tất cả | Variant `primary` (accent) và `secondary` (viền) |
| `CTASection` | Trang chủ, chi tiết khóa học, tin tức, FAQ | Box nền nhạt, luôn có 1 nút accent |
| `StatBlock` | Trang chủ | Số liệu niềm tin |
| `ScheduleTable` | Trang chủ, lịch khai giảng, chi tiết khóa học | Bảng lịch khai giảng |
| `RegisterForm` | `/dang-ky`, `/lien-he`, chi tiết khóa học | `"use client"`, preset hạng bằng qua query param |
| `FaqAccordion` | Trang chủ (rút gọn), `/faq`, chi tiết khóa học | Client component cho tương tác mở/đóng |
| `Breadcrumb` | Chi tiết khóa học, chi tiết tin tức | Điều hướng ngữ cảnh |

---

## D. GỢI Ý THỨ TỰ TRIỂN KHAI CODE (bám theo lộ trình 4 giai đoạn đã thống nhất)

1. `Header`, `Footer`, `Hero`, `Section`, `Button`, `Card` — dựng khung.
2. Trang chủ (đủ 12 block wireframe ở trên, có thể dùng placeholder cho lịch/số liệu).
3. `/gioi-thieu`, `/khoa-hoc`, 3 trang chi tiết khóa học.
4. `RegisterForm` + `/dang-ky` + tích hợp gửi dữ liệu (Google Sheets/API route).
5. `/lich-khai-giang`, `FaqAccordion` + `/faq`.
6. `/lien-he` (Maps + form).
7. `/tin-tuc` + `/tin-tuc/[slug]` (SEO, làm sau cùng vì không ảnh hưởng chuyển đổi trực tiếp).
8. Tối ưu: tracking click hotline/Zalo/submit form, schema Local Business + FAQ.

---

*Tài liệu này nên được lưu cùng `CLAUDE.md` (đặt tại `docs/sitemap-wireframe.md`) để Claude Code
tham chiếu khi sinh code từng trang, đảm bảo đúng cấu trúc và mục tiêu chuyển đổi.*
