# Dự án: Landing page Văn phòng đào tạo lái xe Vạn Xuân

## Mục tiêu
Xây dựng và bảo trì một landing page một trang, tối giản, chuyên nghiệp,
tối ưu cho điện thoại và tập trung vào một hành động chính:
khách liên hệ hotline/Zalo để được tư vấn học phí và lịch học.

## Thương hiệu
- Tên hiển thị: Văn phòng đào tạo lái xe Vạn Xuân
- Khu vực: Vạn Xuân, Phú Thọ
- Giọng văn: gần gũi, rõ ràng, đáng tin, không phô trương
- Ưu tiên thiết kế: sạch, dễ đọc, đáng tin cậy, mobile-first
- Màu sắc (đang dùng trong `src/styles.css`):
  - Màu chính / CTA: xanh biển chỉ dẫn `#0a4da2` (hover `#073a7d`)
  - Màu chữ: `#141a22`, chữ phụ `#4a5361`, đường kẻ `#dce1e7`, nền `#ffffff`
  - Màu nhấn: vàng vạch kẻ đường `#f2b705` (chỉ dùng cho viền focus và vạch đứt sau hero)
- Font: Barlow Condensed (tiêu đề, số) + Barlow (nội dung), tải từ Google Fonts

## Thông tin liên hệ bắt buộc
- Hotline: 0978 639 199
- Zalo: 0978 639 199
- Nhóm Zalo học viên: https://zalo.me/g/ftqdhz976 (khối liên hệ + footer; tách riêng với nút “Nhắn Zalo”)
- Địa chỉ: Nhà văn hóa thôn 18, Thôn 18, xã Vạn Xuân, Phú Thọ
- Khu vực phục vụ chính: Vạn Xuân và các khu vực lân cận tại Phú Thọ
- Google Maps: https://maps.app.goo.gl/WUqzWExNqY2sK7aD6 (chủ văn phòng cung cấp 2026-10-13).
  Chỉ đặt nút/link mở bản đồ (hero, khối liên hệ, footer); không nhúng iframe.
  Tên địa điểm trên Google Maps là “Trung tâm đào tạo lái xe mô tô Phú Thọ - Chi nhánh Vạn Xuân”
  — không hiển thị tên này trên trang khi chủ văn phòng chưa đồng ý.

## Dịch vụ ưu tiên
- Đào tạo lái xe máy hạng A và A1
- Học phí khởi điểm: từ 1.200.000đ
- Đối tượng: học sinh, sinh viên, người lao động chưa có bằng xe máy
- Lợi ích cần nhấn:
  - Hướng dẫn viên uy tín, tận tâm
  - Cam kết không phát sinh chi phí ngoài thỏa thuận
  - Tỷ lệ đỗ cao
  - Hỗ trợ tư vấn thủ tục và lịch học

## Hành động chính
CTA chính: “Gọi tư vấn học phí và lịch học”
- Nút gọi: tel:0978639199
- Nút Zalo: liên kết Zalo số 0978 639 199
- CTA phải xuất hiện ở hero, sau phần học phí và ở cuối trang

## Cấu trúc landing page
1. Hero
   - Tiêu đề lợi ích chính
   - Đối tượng phục vụ
   - Nút Zalo / Gọi ngay
   - Ảnh hoặc video thật
2. Vấn đề
   - 3 khó khăn khách hay gặp
3. Giải pháp / Dịch vụ
   - 3 gói hoặc 3 lợi ích rõ ràng
4. Quy trình
   - 4 bước đơn giản
5. Vì sao chọn tôi
   - Kinh nghiệm, địa chỉ, cam kết, giấy tờ, số liệu
6. Feedback
   - 2–4 đánh giá ngắn, có tên và hình nếu được
7. FAQ
   - 5–7 câu hỏi về giá, thời gian, thủ tục, bảo hành
8. CTA cuối
   - Nhắn Zalo ngay / Để lại số điện thoại
9. Footer
   - Thông tin liên hệ, địa chỉ, chính sách

### Trạng thái từng phần (cập nhật 2026-10-13)
| Phần | Trạng thái | Còn thiếu |
|---|---|---|
| 1. Hero | Ảnh nền thật (sân tập có vạch sa hình), tiêu đề, đối tượng, học phí, nút Gọi + Zalo | — |
| 2. Vấn đề | Chưa có bằng, chưa rõ thủ tục, lo chi phí không rõ ràng | — |
| 3. Giải pháp / Dịch vụ | Hạng A1, Hạng A, Tư vấn thủ tục và lịch học + khối học phí và CTA | Nội dung chi tiết từng gói (nếu có) |
| 4. Quy trình | Tư vấn → Hoàn thiện hồ sơ → Học → Thi | — |
| 5. Vì sao chọn tôi | Hướng dẫn viên tận tâm, không phát sinh chi phí ngoài thỏa thuận, tỷ lệ đỗ cao, địa điểm | Số năm hoạt động, số học viên, giấy tờ (nếu có thật) |
| 6. Feedback | 3 đánh giá Google Maps (4,8/5 · 9 đánh giá, số liệu ngày 2026-10-13) | Cập nhật số đánh giá định kỳ; ảnh chat Messenger chưa đăng (cần học viên đồng ý) |
| 7. FAQ | 5 câu | Không thêm câu “bảo hành” (không phù hợp khóa học lái xe) |
| 8. CTA cuối | Số hotline, nút Gọi + Zalo, form để lại thông tin | Link Google Form (`site.leadForm.action` + mã `entry.*`) |
| 9. Footer | Tên, địa điểm liên hệ, hotline, Zalo | Trang/chính sách (chưa có nội dung) |

Quyết định của chủ văn phòng (2026-10-13): số 0978 639 199 có Zalo; đưa cả hai
cam kết “không phát sinh chi phí ngoài thỏa thuận” và “tỷ lệ đỗ cao” (không kèm %);
form gửi về Google Sheets qua Google Form; hiện khung chờ ảnh/đánh giá.
Không tự tạo nội dung cho các phần còn thiếu dữ liệu (đánh giá, số liệu,
ảnh, chính sách). Khung chờ phải được thay bằng dữ liệu thật trước khi công bố.

### Kết nối Google Form
1. Tạo Google Form với 4 câu hỏi: Họ và tên, Số điện thoại, Hạng muốn học, Ghi chú.
   Liên kết form với Google Sheets (tab Câu trả lời > biểu tượng Sheets).
2. Mở bản xem trước của form, xem nguồn trang, tìm `formResponse` để lấy URL
   dạng `https://docs.google.com/forms/d/e/<ID>/formResponse`, và các mã
   `entry.<số>` của từng câu hỏi.
3. Điền vào `site.leadForm.action` và `site.leadForm.entries` trong `src/content.mjs`.
4. Câu “Hạng muốn học” trong Google Form phải có đúng các lựa chọn trong
   `site.leadForm.licenseOptions` (hoặc dùng câu trả lời ngắn).
Form gửi bằng `fetch` chế độ `no-cors` nên trang không đọc được phản hồi của
Google; kiểm tra Google Sheets sau lần gửi thử đầu tiên.

## Quy tắc nội dung
- Chỉ dùng thông tin có trong file này hoặc do người dùng cung cấp trực tiếp.
- Không tự bịa: tỷ lệ đỗ cụ thể, số học viên, chứng nhận, ngày khai giảng,
  lịch thi, giá trọn gói, chính sách hoàn học phí.
- Với “tỷ lệ đỗ cao”, không tự tạo phần trăm.
- Với “học phí từ 1.200.000đ”, không viết thành “trọn gói” hoặc “bao hết”
  trừ khi người dùng xác nhận.
- Nếu thiếu dữ liệu, dùng “Liên hệ 0978 639 199 để biết chi tiết”.

## Thiết kế
- Ưu tiên mobile trước, sau đó mới desktop.
- Font dễ đọc, cỡ chữ lớn, khoảng cách thoáng.
- Nút CTA lớn, màu tương phản, luôn dễ bấm.
- Ít animation; chỉ dùng hiệu ứng nhẹ, không làm chậm trang.
- Chuyển động hiện có (CSS thuần + IntersectionObserver, không thư viện;
  token `--ease-out`, `--dur-enter`, `--stagger`… ở cuối `src/styles.css`):
  - Hero: một chuỗi xuất hiện khi tải trang, biển hạng “dựng” lên, vạch vàng được kẻ từ trái sang.
  - Các phần bên dưới: hiện dần khi cuộn tới (`.reveal` → `.is-in`), mục danh sách so le 60ms,
    đường nối các bước quy trình chạy xuống.
  - Thanh Gọi/Zalo trên mobile chỉ trượt lên khi nút trong hero đã cuộn khuất.
  - Nút lún nhẹ khi bấm; nút gửi form có vòng xoay; thông báo form hiện mờ dần.
  - Quy tắc: chỉ animate transform/opacity; mọi hiệu ứng nằm trong
    `prefers-reduced-motion: no-preference`; trạng thái ẩn chỉ áp dụng dưới `html.js`
    để trang vẫn hiển thị đủ khi không có JavaScript. Không thêm hiệu ứng lặp vô hạn
    (trừ vòng xoay khi đang gửi).
- Không dùng ảnh stock rẻ tiền; ưu tiên ảnh thật hoặc placeholder rõ ràng.
- Không thêm menu nhiều cấp, blog, tin tức, popup hoặc chức năng thừa.

## Trang web tham khảo
Chỉ tham khảo **cách bố cục và cách dẫn khách tới hành động**. Không sao chép
nội dung, hình ảnh, logo, số liệu hay lời cam kết của các trang này.
(Phân tích ngày 2026-10-13, cấu trúc có thể đã thay đổi.)

| Trang | Kiểu trang | Nên học | Không áp dụng cho Vạn Xuân |
|---|---|---|---|
| [bkacad.edu.vn](https://bkacad.edu.vn/) | Website trường nhiều trang | Footer liệt kê rõ từng cơ sở kèm địa chỉ + hotline; chia rõ 2 nhóm khách (người đi làm / học sinh); khối 2 nút CTA đặt cạnh nhau | Hero là slideshow ảnh không có tiêu đề/CTA; nhiều tin tức, việc làm; hotline chỉ ở footer; không có form |
| [aten.edu.vn/landing-page-1](https://aten.edu.vn/landing-page-1/) | Landing page một trang | Hero dạng chữ, căn trái, 1 CTA chính + 1 CTA phụ; thẻ “bạn là ai” theo đối tượng; phần giáo viên có ảnh thật + tên + bằng cấp; 3 đánh giá có ảnh tròn, tên, nghề nghiệp; nút “Gọi ngay” ở header | Ưu đãi giới hạn số suất, giảm giá gạch ngang, “100.000+ học viên”, cam kết đầu ra — chỉ dùng khi có dữ liệu thật |
| [ece.edu.vn](https://ece.edu.vn/) | Website trung tâm, trang chủ dài | Danh sách “nỗi lo” của khách + CTA dẫn tới form; tab khóa học nêu rõ thời lượng, sĩ số, học phí; form ngắn (tên, SĐT) lặp lại ở vài chỗ kèm dòng “sẽ liên hệ lại”; nút Zalo/Messenger/hotline cố định trên mobile; nút “Tư vấn” ở header nhảy tới form | Banner carousel, blog, tuyển dụng, đăng nhập, đổi ngôn ngữ — thừa với landing page một trang |

### Áp dụng cho Vạn Xuân (theo thứ tự ưu tiên)
1. **Đã có:** hero chữ + 1 CTA chính (Gọi) + 1 CTA phụ (Zalo); danh sách băn khoăn; form ngắn
   có dòng mục đích; thanh Gọi/Zalo cố định trên mobile; footer có địa chỉ + hotline.
2. **Có thể thêm khi có dữ liệu thật:**
   - Thẻ đối tượng (học sinh, sinh viên, người lao động) như Aten — dữ liệu đã có, làm được ngay.
   - Nút “Tư vấn” nhỏ ở header nhảy tới `#lien-he` như ECE.
   - Bảng khóa học A1 / A nêu thời lượng, lịch, học phí từng hạng như ECE — **cần chủ văn phòng
     cung cấp**; hiện không được gán 1.200.000đ riêng cho từng hạng.
   - Hướng dẫn viên có ảnh, tên, kinh nghiệm như Aten — cần ảnh và thông tin thật.
   - Đánh giá có ảnh tròn, tên, nghề nghiệp như Aten — thay khung chờ hiện tại.
3. **Không làm:** carousel/slideshow, đếm ngược, popup, “chỉ còn N suất”, giảm giá gạch ngang,
   số học viên/tỷ lệ % chưa xác minh, blog/tin tức/tuyển dụng.

### Kết hợp với plugin thiết kế đã cài
- `/frontend-design:frontend-design`: dùng khi cần **định hướng hình ảnh riêng** (màu, chữ,
  điểm nhấn), tránh giao diện “mẫu chung”. Ngôn ngữ biển báo giao thông hiện tại là kết quả
  của plugin này — giữ nguyên khi thêm phần mới lấy cảm hứng từ các trang trên
  (học cấu trúc của họ, không học giao diện của họ).
- `/ui-ux-pro-max:ui-ux-pro-max`: dùng để **kiểm tra chất lượng**: form, chạm, tương phản,
  hiệu ứng, bố cục mobile. Công cụ tìm kiếm của plugin cần Python (máy hiện chưa cài);
  khi chưa có Python thì đọc trực tiếp `references/quick-reference.md` và các file CSV trong
  thư mục `data/` của plugin.
- Quy trình gợi ý khi thêm một phần mới:
  1. Chọn mẫu bố cục từ bảng trên.
  2. Kiểm tra dữ liệu thật có đủ chưa (theo “Quy tắc nội dung”); thiếu thì hỏi chủ văn phòng.
  3. Dựng theo hệ màu/chữ hiện có (frontend-design).
  4. Rà theo checklist của ui-ux-pro-max, rồi chạy `npm test` và kiểm tra 360/390/768px.

## Kỹ thuật
- Ưu tiên HTML, CSS, JavaScript thuần trừ khi dự án hiện tại dùng framework khác.
- Giữ mã nguồn gọn, dễ bảo trì.
- Ảnh cần nén và dùng định dạng WebP khi có thể.
- Không thêm thư viện lớn nếu không cần thiết.
- Kiểm tra hiển thị trên màn hình nhỏ trước khi hoàn thành.

### Ảnh và video
- Ảnh/video **gốc** do chủ văn phòng gửi: `assets-goc/` (không deploy, giữ nguyên tên thư mục:
  Background, Feedback, Hoạt động trong tháng - carosel, Logo, Phòng học, Sân tập).
- Bản **nén** dùng trên trang: `public/images/` (build chép sang `dist/images/`).
  Ảnh dọc 720px, ảnh ngang 1080–1280px, JPEG chất lượng ~72; ảnh nền hero 1920px +
  bản cắt riêng cho điện thoại `hero-mobile.jpg`.
- Không đặt file trực tiếp vào `dist/` (thư mục build). Thêm ảnh mới: bỏ ảnh gốc vào
  `assets-goc/`, tạo bản nén vào `public/images/`, khai báo trong `src/content.mjs`.
- Video (quay dọc 480×854) không tự phát, `preload="none"`, có ảnh bìa `*-poster.jpg`
  (khung hình đầu của video). Chú thích video viết theo khung hình đầu — cần chủ văn phòng xác nhận.
- Mục “Hình ảnh thực tế tại Vạn Xuân”: mọi ô tỷ lệ 3:4, bấm ảnh để xem lớn (`<dialog>`,
  dùng được chuột/bàn phím, Esc để đóng). Đã bỏ `lop-hoc-3` (gần giống `lop-hoc-2`);
  ảnh biển hiệu dùng bản cắt dọc `san-tap-bien-hieu-doc.jpg`.
- FAQ dạng accordion (aria-expanded/aria-controls), câu học phí mở sẵn; không có JS thì
  mọi câu trả lời đều hiện. Sau FAQ có nút “Gọi tư vấn học phí và lịch học”.
- Màu chữ mô tả/chú thích `--text-2: #3f4856`; `npm test` kiểm tra tương phản ≥ 4.5:1.
- Đã có ảnh thật nên được dùng cụm “sân tập” (chủ văn phòng gửi ảnh/video thư mục “Sân tập”).
  Vẫn không gọi là “trung tâm sát hạch”. Ảnh có người: chủ văn phòng chịu trách nhiệm xin phép.
- Đánh giá Google Maps: giữ nguyên lời nhận xét (kể cả lỗi chính tả), chỉ chỉnh khoảng trắng/viết hoa.
  Không đăng ảnh chụp màn hình Google Maps (tiêu đề trên đó ghi “Trung tâm…”).

### Cấu trúc mã nguồn hiện tại
- HTML/CSS tĩnh, không dependency, build bằng Node (>= 20).
- `src/content.mjs`: toàn bộ dữ liệu có thể thay đổi (tên, hotline, địa chỉ,
  học phí, FAQ, SEO). Sửa nội dung ở đây, không hard-code ở nơi khác.
- `src/render.mjs`: khung HTML của trang và script duy nhất (kiểm tra + gửi form).
- `src/styles.css`: giao diện (được nhúng inline vào HTML khi build).
- `scripts/build.mjs`: xuất `dist/index.html`, chép `public/` (ảnh thật) sang `dist/`.
- `scripts/check.mjs`: kiểm tra nội dung (1 H1, mọi CTA đúng `tel:0978639199`,
  không có cụm từ cấm, chỉ một số điện thoại, đủ số mục của Vấn đề / Quy trình / FAQ,
  footer có địa điểm và hotline).
- `compare/`: bản trước/sau thiết kế để so sánh, có thể xóa khi không cần.
- `scripts/serve.mjs`: máy chủ xem trước, phục vụ mọi file trong `dist/` (có Range cho video).

### Lệnh
- `npm run build`: build ra `dist/index.html`
- `npm test`: build rồi chạy kiểm tra nội dung
- `npm run preview`: build và chạy http://localhost:4173

## Triển khai
- Môi trường demo hiện tại: van-xuan-driving-school.vercel.app
- Repository: tungnguyent33/van-xuan-driving-school
- Khi yêu cầu “cập nhật demo”, hãy build nếu cần và triển khai lên nền tảng hiện có.
- Repo chỉ chứa mã nguồn (src/, scripts/, public/, vercel.json…). Vercel tự build khi có commit
  mới trên nhánh main theo `vercel.json` (`npm run build` → `dist`).
- 2026-10-13: thay phiên bản Next.js cũ bằng landing page tĩnh này (commit mới, không force push;
  bản cũ vẫn còn trong lịch sử git). Đường dẫn cũ được chuyển hướng trong `vercel.json`.
- Không đưa `assets-goc/` (có ảnh chụp tin nhắn riêng) và `compare/` lên repo công khai.
- Không thay đổi tên miền, cấu hình DNS hoặc xóa bản deploy khi chưa được yêu cầu.

## Khi nhận yêu cầu mới
1. Đọc cấu trúc dự án hiện tại.
2. Không phá vỡ nội dung, hotline, địa chỉ và CTA hiện có.
3. Nếu thiếu thông tin quan trọng, hỏi ngắn gọn trước khi triển khai.
4. Sau khi sửa, kiểm tra mobile, tốc độ, liên hệ và nội dung sai lệch.
