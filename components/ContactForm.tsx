"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/tracking";
import type { LeadPayload, LeadResponse } from "@/types/lead";

const inputClass =
  "w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60";

type Status = "idle" | "loading" | "success" | "error";

type ContactFormProps = {
  /** Nguồn gửi lead, dùng để phân biệt form nào. Mặc định "lien-he". */
  source?: string;
};

export default function ContactForm({ source = "lien-he" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: LeadPayload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      ghiChu: String(formData.get("message") ?? "") || undefined,
      source,
    };

    setStatus("loading");
    setErrorMessage(null);
    trackEvent("submit_contact_form", { source });

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
      <div className="rounded-xl bg-primary-light p-6 text-center">
        <p className="font-semibold text-primary">Cảm ơn bạn đã liên hệ!</p>
        <p className="mt-1 text-sm text-foreground/70">
          Đội ngũ tư vấn sẽ liên hệ lại với bạn sớm nhất.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Gửi liên hệ khác
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-semibold text-primary"
        >
          Nội dung cần hỗ trợ
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isLoading}
          placeholder="Bạn cần tư vấn về khóa học nào?"
          className={inputClass}
        />
      </div>

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
        {isLoading ? "Đang gửi..." : "Gửi liên hệ"}
      </button>
      <p className="text-xs text-foreground/50">
        Thông tin của bạn chỉ dùng để liên hệ tư vấn, không chia sẻ cho bên thứ
        ba.
      </p>
    </form>
  );
}
