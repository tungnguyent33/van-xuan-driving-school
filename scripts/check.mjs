// Kiểm tra nội dung trang đã build: CTA, H1, cấu trúc, cụm từ cấm, form.
import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import { test } from "node:test";

const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const visible = html
  .replace(/<style>[\s\S]*?<\/style>/, "")
  .replace(/<script>[\s\S]*?<\/script>/g, "");
const text = visible.toLowerCase();
const section = (id) => html.split(`id="${id}"`)[1].split("</section>")[0];

test("có đúng một H1", () => {
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
});

test("mọi liên kết gọi là tel:0978639199; Zalo chỉ gồm số văn phòng và nhóm học viên", () => {
  const tels = [...html.matchAll(/href="(tel:[^"]*)"/g)].map((m) => m[1]);
  assert.ok(tels.length >= 5, `chỉ thấy ${tels.length} liên kết gọi`);
  for (const t of tels) assert.equal(t, "tel:0978639199");
  const zalos = [...html.matchAll(/href="([^"]*zalo[^"]*)"/gi)].map((m) => m[1]);
  const personal = zalos.filter((z) => z === "https://zalo.me/0978639199").length;
  const group = zalos.filter((z) => z === "https://zalo.me/g/ftqdhz976").length;
  assert.ok(personal >= 3, `chỉ thấy ${personal} liên kết Zalo văn phòng`);
  assert.ok(group >= 2, `chỉ thấy ${group} liên kết nhóm Zalo học viên`);
  assert.equal(personal + group, zalos.length, "có liên kết Zalo lạ");
});

test("có lang=vi, title và meta description đúng", () => {
  assert.match(html, /<html lang="vi">/);
  assert.match(html, /<title>Học lái xe máy A1, A tại Vạn Xuân, Phú Thọ<\/title>/);
  assert.match(
    html,
    /<meta name="description" content="Tìm hiểu khóa học lái xe máy A1, A tại Văn phòng Vạn Xuân, Phú Thọ\. Học phí từ 1\.200\.000đ\. Gọi 0978 639 199 để xác nhận học phí và lịch học\.">/
  );
});

test("có semantic landmarks", () => {
  for (const tag of ["header", "main", "section", "footer"]) {
    assert.ok(html.includes(`<${tag}`), `thiếu <${tag}>`);
  }
});

test("đủ 9 phần theo cấu trúc trong CLAUDE.md", () => {
  assert.ok(html.includes('id="hero-title"'), "thiếu Hero");
  const problems = section("problems-title");
  assert.equal((problems.match(/class="concern"/g) || []).length, 3, "Vấn đề cần 3 mục");
  assert.equal((problems.match(/class="solution"/g) || []).length, 3, "mỗi băn khoăn cần hướng giải quyết");
  assert.equal((section("services-title").match(/class="service"/g) || []).length, 3, "Dịch vụ cần 3 mục");
  assert.equal((section("process-title").match(/<li>/g) || []).length, 4, "Quy trình cần 4 bước");
  assert.ok((section("why-title").match(/<li>/g) || []).length >= 3, "Lý do chọn cần ít nhất 3 mục");
  const reviews = (section("reviews-title").match(/class="review[ "]/g) || []).length;
  assert.ok(reviews >= 2 && reviews <= 4, `Feedback có ${reviews} mục`);
  const faqCount = (section("faq-title").match(/class="faq-item"/g) || []).length;
  assert.ok(faqCount >= 5 && faqCount <= 7, `FAQ có ${faqCount} câu`);
  assert.ok(html.includes('id="lien-he"'), "thiếu CTA cuối");
  const footer = html.split("<footer")[1].split("</footer>")[0];
  assert.ok(footer.includes("Nhà văn hóa thôn 18"), "footer thiếu địa chỉ");
  assert.ok(footer.includes('href="tel:0978639199"'), "footer thiếu hotline");
});

test("FAQ: accordion có aria-expanded/aria-controls, câu đầu về học phí, nút gọi sau FAQ", () => {
  const faq = section("faq-title");
  const toggles = [...faq.matchAll(/<button type="button" class="faq-toggle" id="([^"]+)" aria-expanded="true" aria-controls="([^"]+)">/g)];
  assert.ok(toggles.length >= 5, "thiếu nút mở/đóng câu hỏi");
  for (const [, , panel] of toggles) assert.ok(faq.includes(`id="${panel}"`), `thiếu ${panel}`);
  assert.match(faq.split('class="faq-item"')[1], /Học phí 1\.200\.000đ/, "câu đầu phải là câu học phí");
  assert.match(faq, /<div class="section-cta"><a class="btn btn-primary" href="tel:0978639199">[\s\S]*Gọi tư vấn học phí và lịch học/);
  assert.ok(text.includes("học phí từ 1.200.000đ"), "phải giữ “học phí từ 1.200.000đ”");
});

test("hình ảnh: bấm xem ảnh lớn, video có poster + controls, không autoplay", () => {
  const gallery = section("gallery-title");
  assert.match(gallery, /Hình ảnh thực tế tại Vạn Xuân/);
  const imgs = (gallery.match(/<img /g) || []).length;
  assert.equal((gallery.match(/<a class="zoom" href=/g) || []).length, imgs, "mỗi ảnh cần link xem lớn");
  for (const v of html.match(/<video[^>]*>/g) || []) {
    assert.match(v, /controls/);
    assert.match(v, /poster="[^"]+"/);
    assert.ok(!/autoplay/.test(v), "video không được autoplay");
  }
  assert.ok(!/Video \(\d\)|Video sân tập \(\d\)/.test(html), "còn chú thích video chung chung");
  assert.ok(html.includes('<dialog class="lightbox"'), "thiếu khung xem ảnh lớn");
});

test("chữ thường đạt tương phản tối thiểu 4.5:1", () => {
  const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  const token = (name) => css.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"))[1];
  const lum = (hex) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };
  for (const fg of ["ink", "text-2", "muted", "sign"]) {
    for (const bg of ["paper", "tint", "sign-soft"]) {
      const r = ratio(token(fg), token(bg));
      assert.ok(r >= 4.5, `--${fg} trên --${bg} chỉ đạt ${r.toFixed(2)}:1`);
    }
  }
});

test("không có nội dung cấm hoặc chưa xác minh", () => {
  const banned = [
    "trọn gói", "bao đỗ", "100%", "nhận bằng nhanh", "trung tâm sát hạch",
    "24/7", "ưu đãi", "khai giảng", "canonical", "og:url", "og:image",
    "application/ld+json", "<iframe", "lorem", "todo",
  ];
  for (const w of banned) assert.ok(!text.includes(w), `xuất hiện: "${w}"`);
  assert.ok(!/\d+\s*%/.test(text), "không được có con số phần trăm (tỷ lệ đỗ)");
});

test("chỉ có script nội tuyến của trang, không tải script ngoài hay mã theo dõi", () => {
  // 1 dòng gắn class "js" trong <head> + 1 script form/hiệu ứng cuối trang.
  assert.equal((html.match(/<script/g) || []).length, 2);
  assert.ok(!/<script[^>]+src=/.test(html));
  assert.ok(!/gtag|googletagmanager|fbq\(|facebook\.net/i.test(html));
});

test("form có nhãn hiển thị, ô điện thoại đúng kiểu, báo lỗi gắn với ô", () => {
  const form = html.split('id="lead-form"')[1].split("</form>")[0];
  for (const id of ["lead-name", "lead-phone", "lead-class", "lead-note"]) {
    assert.ok(form.includes(`<label for="${id}"`), `thiếu nhãn cho ${id}`);
  }
  assert.match(form, /type="tel"[^>]*autocomplete="tel"/);
  assert.match(form, /aria-describedby="[^"]*lead-phone-error/);
  assert.match(form, /role="status"/);
});

test("hiệu ứng tôn trọng chế độ giảm chuyển động và không ẩn nội dung khi thiếu JS", () => {
  const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  assert.ok(css.includes("prefers-reduced-motion"), "thiếu xử lý prefers-reduced-motion");
  // Mọi trạng thái ẩn của .reveal phải nằm dưới .js
  assert.ok(!/(^|[^-\w])\.reveal\s*\{[^}]*opacity:\s*0/.test(css.replace(/\.js \.reveal/g, "")), ".reveal bị ẩn mà không cần .js");
  // Không animate thuộc tính gây xô lệch bố cục
  assert.ok(!/transition:[^;]*\b(width|height|top|left|margin)\b/.test(css), "có transition trên thuộc tính bố cục");
});

test("link Google Maps đúng và mở tab mới, không nhúng bản đồ", () => {
  const maps = [...html.matchAll(/<a [^>]*href="(https:\/\/maps[^"]*)"[^>]*>/g)];
  assert.ok(maps.length >= 2, `chỉ thấy ${maps.length} link Google Maps`);
  for (const m of maps) {
    assert.equal(m[1], "https://maps.app.goo.gl/WUqzWExNqY2sK7aD6");
    assert.match(m[0], /target="_blank" rel="noopener"/);
  }
  assert.ok(!text.includes("trung tâm"), "không được gọi là trung tâm");
});

test("chỉ có một số điện thoại", () => {
  const phones = new Set(text.match(/0\d{3}[\s.]?\d{3}[\s.]?\d{3}/g).map((p) => p.replace(/\D/g, "")));
  assert.deepEqual([...phones], ["0978639199"]);
});
