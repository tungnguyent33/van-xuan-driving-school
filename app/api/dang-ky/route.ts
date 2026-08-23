import { NextResponse } from "next/server";
import type { LeadPayload, LeadResponse } from "@/types/lead";
import { notifyNewLead } from "@/lib/notifications";

/**
 * API route nhận lead từ RegisterForm và ContactForm.
 * Tự động đồng bộ tới Google Sheets, Telegram Bot và Email.
 */
export async function POST(request: Request) {
  let body: Partial<LeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<LeadResponse>(
      { success: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || !phone) {
    return NextResponse.json<LeadResponse>(
      {
        success: false,
        error: "Vui lòng nhập đầy đủ họ tên và số điện thoại.",
      },
      { status: 400 },
    );
  }

  const lead: LeadPayload = {
    name,
    phone,
    hangBang: typeof body.hangBang === "string" && body.hangBang.trim() ? body.hangBang.trim() : undefined,
    khuVuc: typeof body.khuVuc === "string" && body.khuVuc.trim() ? body.khuVuc.trim() : undefined,
    ghiChu: typeof body.ghiChu === "string" && body.ghiChu.trim() ? body.ghiChu.trim() : undefined,
    source: typeof body.source === "string" && body.source.trim() ? body.source.trim() : "unknown",
  };

  // Gửi thông báo tự động tới Google Sheets, Telegram Bot và Email
  await notifyNewLead(lead);

  return NextResponse.json<LeadResponse>({ success: true });
}
