"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/tracking";
import type { LeadPayload, LeadResponse } from "@/types/lead";

const HANG_BANG_OPTIONS = [
  "Hạng A1",
  "Hạng A",
  "Cấp đổi / cấp lại",
  "Chưa chắc, cần tư vấn thêm",
];

const inputClass =
  "w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60";

type Status = "idle" | "loading" | "success" | "error";

type RegisterFormProps = {
  /** Hạng bằng được chọn sẵn — từ route chi tiết khóa học hoặc query param ở /dang-ky. */
  hangBangPreset?: string;
  /** true: form rút gọn (ẩn Khu vực/chi nhánh + Ghi chú), hạng bằng hiển thị cố định. Dùng cho trang chi tiết khóa học. */
  compact?: boolean;
  /** Nguồn gửi lead, dùng để phân biệt form nào — ví dụ "dang-ky", "khoa-hoc/hang-a1". */
  source?: string;
  className?: string;
};

export default function RegisterForm({
  hangBangPreset,
  compact = false,
  source = "dang-ky",
  className = "",
}: RegisterFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const showPresetBadge = compact && Boolean(hangBangPreset);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: LeadPayload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      hangBang: String(formData.get("hangBang") ?? "") || undefined,
      khuVuc: String(formData.get("khuVuc") ?? "") || undefined,
      ghiChu: String(formData.get("ghiChu") ?? "") || undefined,
      source,
    };

    setStatus("loading");
    setErrorMessage(null);
    trackEvent("submit_register_form", {
      source,
      hangBang: payload.hangBang,
    });

    try {
      const res = await fetch("/api/dang-ky", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: LeadResponse = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          !data.success ? data.error : "Có lỗi xảy ra, vui lòng thử lại.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Không thể kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-xl bg-primary-light p-6 text-center ${className}`}>
        <p className="font-semibold text-primary">Cảm ơn bạn đã đăng ký!</p>
        <p className="mt-1 text-sm text-foreground/70">
          Chúng tôi sẽ liên hệ tư vấn với bạn sớm nhất. Theo dõi Zalo/Fanpage để
          cập nhật thông tin khóa học mới.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Đăng ký thêm một người khác
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Họ tên <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={isLoading}
          placeholder="Nguyễn Văn A"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Số điện thoại <span className="text-accent">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          disabled={isLoading}
          placeholder="09xx xxx xxx"
          className={inputClass}
        />
      </div>

      {showPresetBadge ? (
        <div>
          <span className="mb-1 block text-sm font-semibold text-primary">
            Hạng bằng đăng ký
          </span>
          <div className="rounded-lg border border-primary/30 bg-primary-light px-4 py-2.5 text-sm font-medium text-primary">
            {hangBangPreset}
          </div>
          <input type="hidden" name="hangBang" value={hangBangPreset} />
        </div>
      ) : (
        <div>
          <label
            htmlFor="hangBang"
            className="mb-1 block text-sm font-semibold text-primary"
          >
            Hạng bằng muốn học
          </label>
          <select
            id="hangBang"
            name="hangBang"
            defaultValue={hangBangPreset ?? ""}
            disabled={isLoading}
            className={inputClass}
          >
            <option value="" disabled>
              Chọn hạng bằng
            </option>
            {HANG_BANG_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {!compact ? (
        <>
          <div>
            <label
              htmlFor="khuVuc"
              className="mb-1 block text-sm font-semibold text-primary"
            >
              Khu vực / chi nhánh
            </label>
            <input
              id="khuVuc"
              name="khuVuc"
              type="text"
              disabled={isLoading}
              placeholder="Ví dụ: Chi nhánh Vạn Xuân"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="ghiChu"
              className="mb-1 block text-sm font-semibold text-primary"
            >
              Ghi chú
            </label>
            <textarea
              id="ghiChu"
              name="ghiChu"
              rows={3}
              disabled={isLoading}
              placeholder="Ghi chú thêm (nếu có)"
              className={inputClass}
            />
          </div>
        </>
      ) : null}

      {status === "error" && errorMessage ? (
        <p
          role="alert"
          className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600"
        >
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isLoading ? "Đang gửi..." : "Gửi đăng ký"}
      </button>
      <p className="text-xs text-foreground/50">
        Thông tin của bạn chỉ dùng để liên hệ tư vấn, không chia sẻ cho bên thứ
        ba.
      </p>
    </form>
  );
}
