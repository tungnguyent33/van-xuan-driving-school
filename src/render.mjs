const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const phoneIcon = `<svg class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>`;

const chatIcon = `<svg class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 3C6.5 3 2 6.8 2 11.5c0 2.4 1.2 4.6 3.1 6.1L4.5 21l3.8-1.9c1.2.4 2.4.6 3.7.6 5.5 0 10-3.8 10-8.5S17.5 3 12 3z"/></svg>`;

const imageIcon = `<svg class="slot-icon" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false"><path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v9.6l3.3-3.3a1 1 0 0 1 1.4 0L13 15.6l2.3-2.3a1 1 0 0 1 1.4 0L19 15.6V6H5zm10.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>`;

const callLink = (site, label, className, extra = "") =>
  `<a class="${className}" href="${esc(site.hotlineHref)}"${extra}>${label}</a>`;

const zaloLink = (site, label, className) =>
  `<a class="${className}" href="${esc(site.zaloHref)}" target="_blank" rel="noopener">${label}<span class="visually-hidden"> (mở Zalo trong cửa sổ mới)</span></a>`;

const mapIcon = `<svg class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`;

const mapsLink = (site, label, className) =>
  `<a class="${className}" href="${esc(site.mapsHref)}" target="_blank" rel="noopener">${label}<span class="visually-hidden"> (mở Google Maps trong cửa sổ mới)</span></a>`;

const zaloGroupLink = (site, label, className) =>
  `<a class="${className}" href="${esc(site.zaloGroupHref)}" target="_blank" rel="noopener">${label}<span class="visually-hidden"> (mở Zalo trong cửa sổ mới)</span></a>`;

// A. Băn khoăn + hướng giải quyết
const problemsBody = (p) => `<ul class="concerns">
${p.items
  .map(
    (it) => `        <li class="concern">
          <h3>${esc(it.title)}</h3>
          <p class="solution">${esc(it.solution)}</p>
        </li>`
  )
  .join("\n")}
      </ul>`;

// C. FAQ dạng accordion. Không có JS: mọi câu trả lời đều hiện (aria-expanded="true").
const chevron = `<svg class="faq-chevron" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 15.5 5.5 9l1.4-1.4 5.1 5.1 5.1-5.1L18.5 9z"/></svg>`;
const faqBody = (site, faq) => `<div class="faq" data-accordion>
${faq.items
  .map(
    (it, i) => `        <div class="faq-item">
          <h3 class="faq-q"><button type="button" class="faq-toggle" id="faq-q-${i + 1}" aria-expanded="true" aria-controls="faq-a-${i + 1}"><span>${esc(it.q)}</span>${chevron}</button></h3>
          <div class="faq-a" id="faq-a-${i + 1}" role="region" aria-labelledby="faq-q-${i + 1}"><p>${esc(it.a)}</p></div>
        </div>`
  )
  .join("\n")}
      </div>
      <div class="section-cta">${callLink(site, `${phoneIcon}<span>${esc(faq.ctaLabel)}</span>`, "btn btn-primary")}</div>`;

const ctaPair = (site) => `<div class="cta-pair">
        ${callLink(site, `${phoneIcon}<span>${esc(site.ctaLabel)}</span>`, "btn btn-primary")}
        ${zaloLink(site, `${chatIcon}<span>${esc(site.zaloLabel)}</span>`, "btn btn-secondary")}
      </div>`;

const textList = (items, className) => `<ul class="${className}">
${items
  .map(
    (it) => `        <li>
          <h3>${esc(it.title)}</h3>${it.text ? `\n          <p>${esc(it.text)}</p>` : ""}
        </li>`
  )
  .join("\n")}
      </ul>`;

const section = (id, heading, body, extraClass = "") => `  <section class="block${extraClass ? " " + extraClass : ""}" aria-labelledby="${id}">
    <div class="wrap reveal">
      <h2 id="${id}">${esc(heading)}</h2>
      <div class="block-body">
      ${body}
      </div>
    </div>
  </section>`;

const stars = (n) =>
  `<span class="stars" role="img" aria-label="${n} trên 5 sao">${"★".repeat(n)}<span class="stars-off">${"★".repeat(5 - n)}</span></span>`;

// Ảnh/video trong thư viện. Video không tự phát, chỉ tải phần đầu để hiện khung hình đầu.
const media = (m, className = "media") =>
  m.type === "video"
    ? `<figure class="${className} media-video">
            <video controls playsinline preload="none" poster="${esc(m.poster)}" src="${esc(m.src)}"></video>
            <figcaption>${esc(m.caption)}</figcaption>
          </figure>`
    : `<figure class="${className}">
            <a class="zoom" href="${esc(m.src)}" aria-label="Xem ảnh lớn: ${esc(m.caption)}">
              <img src="${esc(m.src)}" alt="${esc(m.alt)}" width="${m.width}" height="${m.height}" loading="lazy" decoding="async">
            </a>
            <figcaption>${esc(m.caption)}</figcaption>
          </figure>`;

const galleryBody = (g) =>
  g.groups
    .map(
      (group) => `<div class="gallery-group">
        <h3>${esc(group.title)}</h3>
        <ul class="gallery">
${group.items.map((m) => `          <li>${media(m)}</li>`).join("\n")}
        </ul>
      </div>`
    )
    .join("\n      ");

const activitiesBody = (a) => `<div class="strip" data-strip>
        <ul class="strip-track" tabindex="0" aria-label="${esc(a.heading)}: vuốt ngang để xem thêm">
${a.items.map((m, i) => `          <li aria-label="${i + 1} / ${a.items.length}">${media(m, "media strip-item")}</li>`).join("\n")}
        </ul>
        <div class="strip-nav">
          <button type="button" class="strip-btn" data-dir="-1" aria-label="Ảnh trước">‹</button>
          <button type="button" class="strip-btn" data-dir="1" aria-label="Ảnh tiếp theo">›</button>
        </div>
      </div>`;

function testimonialsBody(t) {
  if (t.items.length) {
    return `${t.summary ? `<p class="review-summary"><strong>${esc(t.summary.rating)}</strong>/5 ${stars(5)} <span>${t.summary.count} đánh giá trên ${esc(t.summary.source)}</span></p>` : ""}
      <ul class="reviews">
${t.items
  .map(
    (r) => `        <li class="review">
          ${r.photo ? `<img class="review-photo" src="${esc(r.photo.src)}" alt="${esc(r.photo.alt)}" width="64" height="64" loading="lazy" decoding="async">` : `<span class="review-photo review-initial" aria-hidden="true">${esc(r.name.trim()[0])}</span>`}
          <p class="review-name">${esc(r.name)}${r.detail ? `<span>${esc(r.detail)}</span>` : ""}</p>
          ${r.stars ? stars(r.stars) : ""}
          <blockquote><p>${esc(r.quote)}</p></blockquote>
        </li>`
  )
  .join("\n")}
      </ul>`;
  }
  return `<ul class="reviews">
${Array.from({ length: t.placeholderCount })
  .map(
    () => `        <li class="review review-placeholder">
          <span class="review-photo photo-slot" aria-hidden="true">${imageIcon}</span>
          <p>${esc(t.placeholderText)}</p>
        </li>`
  )
  .join("\n")}
      </ul>`;
}

function leadFormHtml(site) {
  const f = site.leadForm;
  const name = (key) => esc(f.entries[key] || key);
  const messages = {
    submit: f.submitLabel,
    sending: f.sendingLabel,
    success: f.successText,
    error: f.errorText,
    notConnected: f.notConnectedText,
  };
  return `<form id="lead-form" class="lead-form" novalidate data-action="${esc(f.action)}" data-messages="${esc(JSON.stringify(messages))}" aria-labelledby="lead-form-title">
        <h3 id="lead-form-title">${esc(f.heading)}</h3>
        <div class="field">
          <label for="lead-name">Họ và tên <span class="req">(bắt buộc)</span></label>
          <input id="lead-name" name="${name("name")}" type="text" autocomplete="name" required data-field="name" aria-describedby="lead-name-error">
          <p class="field-error" id="lead-name-error" role="alert"></p>
        </div>
        <div class="field">
          <label for="lead-phone">Số điện thoại <span class="req">(bắt buộc)</span></label>
          <input id="lead-phone" name="${name("phone")}" type="tel" inputmode="tel" autocomplete="tel" required data-field="phone" aria-describedby="lead-phone-hint lead-phone-error">
          <p class="field-hint" id="lead-phone-hint">${esc(f.purposeNote)}</p>
          <p class="field-error" id="lead-phone-error" role="alert"></p>
        </div>
        <div class="field">
          <label for="lead-class">Hạng muốn học</label>
          <select id="lead-class" name="${name("licenseClass")}">
${f.licenseOptions.map((o) => `            <option>${esc(o)}</option>`).join("\n")}
          </select>
        </div>
        <div class="field">
          <label for="lead-note">Ghi chú <span class="opt">(không bắt buộc)</span></label>
          <textarea id="lead-note" name="${name("note")}" rows="3" autocomplete="off"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">${esc(f.submitLabel)}</button>
        <p class="form-status" id="lead-status" role="status" aria-live="polite"></p>
      </form>`;
}

// Script của trang: kiểm tra và gửi form tới Google Form, hiệu ứng khi cuộn.
const formScript = `(function () {
  var form = document.getElementById("lead-form");
  if (!form) return;
  var status = document.getElementById("lead-status");
  var button = form.querySelector('button[type="submit"]');
  var msg = JSON.parse(form.dataset.messages);
  var rules = {
    name: function (v) { return v.trim().length >= 2 || "Vui lòng nhập họ và tên."; },
    phone: function (v) {
      if (!v.trim()) return "Vui lòng nhập số điện thoại.";
      return /^(0|\\+84)\\d{9}$/.test(v.replace(/[\\s.\\-]/g, "")) || "Số điện thoại chưa đúng. Ví dụ: 0978 639 199.";
    }
  };
  function check(input) {
    var result = rules[input.dataset.field](input.value);
    var ok = result === true;
    input.setAttribute("aria-invalid", String(!ok));
    var error = document.getElementById(input.id + "-error");
    var changed = error.textContent !== (ok ? "" : result);
    error.textContent = ok ? "" : result;
    if (!ok && changed) pop(error);
    return ok;
  }
  function pop(el) {
    el.classList.remove("pop");
    void el.offsetWidth;
    el.classList.add("pop");
  }
  function show(text, type) {
    status.textContent = text;
    status.setAttribute("data-type", type);
    if (text) pop(status);
  }
  var fields = form.querySelectorAll("[data-field]");
  fields.forEach(function (input) {
    input.addEventListener("blur", function () { if (input.value) check(input); });
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var invalid = Array.prototype.filter.call(fields, function (i) { return !check(i); });
    if (invalid.length) { invalid[0].focus(); return; }
    if (!form.dataset.action) { show(msg.notConnected, "error"); return; }
    button.disabled = true;
    button.textContent = msg.sending;
    show("", "");
    fetch(form.dataset.action, { method: "POST", mode: "no-cors", body: new FormData(form) })
      .then(function () { form.reset(); show(msg.success, "success"); })
      .catch(function () { show(msg.error, "error"); })
      .then(function () { button.disabled = false; button.textContent = msg.submit; });
  });
})();

// FAQ accordion: câu đầu mở sẵn, các câu khác đóng.
(function () {
  document.querySelectorAll("[data-accordion]").forEach(function (acc) {
    acc.querySelectorAll(".faq-toggle").forEach(function (btn, i) {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      function set(open) {
        btn.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
      }
      set(i === 0);
      btn.addEventListener("click", function () {
        set(btn.getAttribute("aria-expanded") !== "true");
      });
    });
  });
})();

// Xem ảnh lớn: link .zoom vẫn mở ảnh nếu trình duyệt không hỗ trợ <dialog>.
(function () {
  var box = document.querySelector(".lightbox");
  if (!box || typeof box.showModal !== "function") return;
  var img = box.querySelector("img");
  var cap = box.querySelector("figcaption");
  var opener = null;
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a.zoom");
    if (!link) return;
    event.preventDefault();
    var thumb = link.querySelector("img");
    var fig = link.closest("figure");
    img.src = link.href;
    img.alt = thumb ? thumb.alt : "";
    cap.textContent = fig && fig.querySelector("figcaption") ? fig.querySelector("figcaption").textContent : "";
    opener = link;
    box.showModal();
  });
  box.addEventListener("click", function (event) {
    if (event.target === box) box.close();
  });
  box.addEventListener("close", function () {
    img.removeAttribute("src");
    if (opener) opener.focus();
  });
})();

// Hiện dần các phần khi cuộn tới, và chỉ hiện thanh Gọi/Zalo trên mobile
// khi nút trong hero không nằm trong màn hình. Không có IntersectionObserver thì hiện hết.
(function () {
  var reveals = document.querySelectorAll(".reveal");
  var bar = document.querySelector(".call-bar");
  var heroCtas = document.querySelector(".hero .cta-pair");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
    if (bar) bar.classList.add("is-visible");
    return;
  }
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  reveals.forEach(function (el) { revealObserver.observe(el); });

  document.querySelectorAll("[data-strip]").forEach(function (strip) {
    var track = strip.querySelector(".strip-track");
    strip.querySelectorAll(".strip-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = track.querySelector("li");
        var step = item ? item.getBoundingClientRect().width + 12 : track.clientWidth;
        track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    });
  });

  if (bar && heroCtas) {
    new IntersectionObserver(function (entries) {
      var entry = entries[0];
      // Hiện thanh khi nút trong hero không nằm trong màn hình (đã cuộn qua, hoặc chưa tới trên màn hình thấp).
      bar.classList.toggle("is-visible", !entry.isIntersecting);
    }).observe(heroCtas);
  }
})();`;

export function renderPage(site, css) {
  const { hero, problems, services, process, gallery, whyUs, testimonials, activities, faq, contact, seo } = site;
  const bg = hero.background;

  return `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js")</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(seo.title)}</title>
<meta name="description" content="${esc(seo.description)}">
<meta name="theme-color" content="#ffffff">
<meta name="format-detection" content="telephone=no">
<meta property="og:type" content="website">
<meta property="og:locale" content="vi_VN">
<meta property="og:title" content="${esc(seo.title)}">
<meta property="og:description" content="${esc(seo.description)}">
<link rel="preload" as="image" href="${esc(bg.srcMobile)}" media="(max-width: 47.99em)" fetchpriority="high">
<link rel="preload" as="image" href="${esc(bg.src)}" media="(min-width: 48em)" fetchpriority="high">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&amp;family=Barlow:wght@400;500;600&amp;display=swap">
<style>
${css}
</style>
</head>
<body>
<a class="skip-link" href="#lien-he">Bỏ qua, đến phần liên hệ</a>
<header class="site-header">
  <div class="wrap header-inner">
    <div class="brand-wrap">
    <img class="brand-logo" src="${esc(site.logo.src)}" alt="" width="${site.logo.width}" height="${site.logo.height}">
    <p class="brand">
      <span class="brand-top">${esc(site.officeNameLines[0])}</span>
      <span class="brand-name">${esc(site.officeNameLines[1])}</span>
    </p>
    </div>
    ${callLink(site, `${phoneIcon}<span>${esc(site.hotlineDisplay)}</span>`, "header-phone", ` aria-label="Gọi hotline ${esc(site.hotlineDisplay)}"`)}
  </div>
</header>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <picture class="hero-media">
      <source media="(max-width: 47.99em)" srcset="${esc(bg.srcMobile)}">
      <img src="${esc(bg.src)}" alt="${esc(bg.alt)}" width="${bg.width}" height="${bg.height}" fetchpriority="high" decoding="async">
    </picture>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">${esc(hero.eyebrow)}</p>
        <ul class="plates" aria-label="Hạng giấy phép">
${site.licenseClasses.map((c) => `          <li class="plate"><span class="plate-kicker">Hạng</span><span class="plate-class">${esc(c)}</span></li>`).join("\n")}
        </ul>
        <h1 id="hero-title">${esc(hero.heading)}</h1>
        <p class="lead">${esc(hero.lead)}</p>
        <div class="offer">
          <p class="price"><span class="price-label">Học phí từ</span> <span class="price-value">${esc(site.priceFrom)}</span></p>
          <p class="price-note">${esc(site.priceNote)}</p>
        </div>
        ${ctaPair(site)}
        <p class="hero-place"><span class="label">Địa điểm liên hệ:</span> ${esc(site.contactAddressShort)}. ${mapsLink(site, "Chỉ đường", "place-link")}</p>
      </div>
    </div>
  </section>

${section("problems-title", problems.heading, problemsBody(problems), "block-wide")}

${section(
  "services-title",
  services.heading,
  `<ul class="services">
${services.items
  .map(
    (it) => `        <li class="service">
          ${it.mark ? `<span class="service-mark" aria-hidden="true">${esc(it.mark)}</span>` : `<span class="service-mark service-mark-plain" aria-hidden="true">${phoneIcon}</span>`}
          <div>
            <h3>${esc(it.title)}</h3>
            <p>${esc(it.text)}</p>
          </div>
        </li>`
  )
  .join("\n")}
      </ul>
      <div class="price-band">
        <p class="price"><span class="price-label">Học phí từ</span> <span class="price-value">${esc(site.priceFrom)}</span></p>
        <p class="price-note">${esc(site.priceNote)}</p>
        ${ctaPair(site)}
      </div>`
)}

${section(
  "process-title",
  process.heading,
  `<ol class="steps">
${process.steps
  .map(
    (it) => `        <li>
          <h3>${esc(it.title)}</h3>
          <p>${esc(it.text)}</p>
        </li>`
  )
  .join("\n")}
      </ol>`
)}

${section("gallery-title", gallery.heading, galleryBody(gallery), "block-wide")}

${section("why-title", whyUs.heading, textList(whyUs.items, "reasons"), "block-tint")}

${section("reviews-title", testimonials.heading, testimonialsBody(testimonials))}

${section("activities-title", activities.heading, activitiesBody(activities), "block-wide block-tint")}

${section("faq-title", faq.heading, faqBody(site, faq), "block-wide")}

  <section class="block contact" id="lien-he" aria-labelledby="contact-title">
    <div class="wrap reveal">
      <h2 id="contact-title">${esc(contact.heading)}</h2>
      <div class="block-body contact-body">
        <div class="contact-direct">
          <p class="contact-lead">${esc(contact.lead)}</p>
          ${callLink(site, esc(site.hotlineDisplay), "big-phone")}
          ${ctaPair(site)}
          ${zaloGroupLink(site, `${chatIcon}<span>${esc(site.zaloGroupLabel)}</span>`, "btn btn-map btn-group")}
          <div class="contact-place">
            <p><span class="label">Địa điểm liên hệ:</span> ${esc(site.contactAddress)}.</p>
            ${mapsLink(site, `${mapIcon}<span>${esc(site.mapsLabel)}</span>`, "btn btn-map")}
          </div>
        </div>
        ${leadFormHtml(site)}
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="wrap footer-inner">
    <p class="footer-name">${esc(site.officeName)}</p>
    <p>Địa điểm liên hệ: ${esc(site.contactAddress)}. ${mapsLink(site, "Google Maps", "footer-link")}</p>
    <p>Hotline: ${callLink(site, esc(site.hotlineDisplay), "footer-link")} · Zalo: ${zaloLink(site, esc(site.hotlineDisplay), "footer-link")}</p>
    <p>${zaloGroupLink(site, esc(site.zaloGroupLabel), "footer-link")}</p>
  </div>
</footer>

<dialog class="lightbox" aria-label="Xem ảnh lớn">
  <form method="dialog"><button class="lightbox-close" aria-label="Đóng ảnh">×</button></form>
  <figure><img alt=""><figcaption></figcaption></figure>
</dialog>

<div class="call-bar">
  ${callLink(site, `${phoneIcon}<span>${esc(site.stickyCallLabel)}</span>`, "bar-btn bar-call")}
  ${zaloLink(site, `${chatIcon}<span>${esc(site.stickyZaloLabel)}</span>`, "bar-btn bar-zalo")}
</div>
<script>
${formScript}
</script>
</body>
</html>
`;
}
