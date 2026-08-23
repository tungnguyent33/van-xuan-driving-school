import nodemailer from "nodemailer";
import type { LeadPayload } from "@/types/lead";

/**
 * Gửi thông tin lead mới đến Google Sheets Webhook (Apps Script Web App).
 */
async function sendToGoogleSheet(lead: LeadPayload): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log("[Notification] Bỏ qua Google Sheet (Chưa cấu hình GOOGLE_SHEETS_WEBHOOK_URL)");
    return false;
  }

  try {
    const payload = {
      ...lead,
      createdAt: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("[Notification] Lỗi gửi Google Sheet:", response.statusText);
      return false;
    }

    console.log("[Notification] Đã gửi lead tới Google Sheet thành công.");
    return true;
  } catch (error) {
    console.error("[Notification] Ngoại lệ khi gửi Google Sheet:", error);
    return false;
  }
}

/**
 * Gửi thông tin lead mới qua Telegram Bot.
 */
async function sendToTelegram(lead: LeadPayload): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log("[Notification] Bỏ qua Telegram (Chưa cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID)");
    return false;
  }

  const timeStr = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

  const messageText = `
<b>🔔 CÓ KHÁCH HÀNG ĐĂNG KÝ MỚI!</b>
----------------------------------
👤 <b>Họ tên:</b> ${escapeHtml(lead.name)}
📞 <b>Số điện thoại:</b> <code>${escapeHtml(lead.phone)}</code>
🏍️ <b>Hạng bằng:</b> ${escapeHtml(lead.hangBang || "Chưa chọn")}
📍 <b>Khu vực:</b> ${escapeHtml(lead.khuVuc || "Chưa chọn")}
📝 <b>Nội dung / Ghi chú:</b> ${escapeHtml(lead.ghiChu || "Không có")}
🌐 <b>Trang đăng ký:</b> <code>${escapeHtml(lead.source)}</code>
⏰ <b>Thời gian:</b> ${timeStr}
----------------------------------
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();
    if (!data.ok) {
      console.error("[Notification] Telegram API Error:", data.description);
      return false;
    }

    console.log("[Notification] Đã gửi thông báo Telegram thành công.");
    return true;
  } catch (error) {
    console.error("[Notification] Ngoại lệ khi gửi Telegram:", error);
    return false;
  }
}

/**
 * Gửi email thông báo lead mới qua SMTP (ví dụ Gmail).
 */
async function sendToEmail(lead: LeadPayload): Promise<boolean> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyEmail = process.env.NOTIFY_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass || !notifyEmail) {
    console.log("[Notification] Bỏ qua Email (Chưa cấu hình SMTP_USER / SMTP_PASS / NOTIFY_EMAIL)");
    return false;
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const timeStr = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
          🚗 THÔNG BÁO ĐĂNG KÝ MỚI - VẠN XUÂN
        </h2>
        <p style="font-size: 15px; color: #333;">Hệ thống vừa nhận được thông tin liên hệ mới từ khách hàng:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 140px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">Họ tên:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${escapeHtml(lead.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">Số điện thoại:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #d97706;">${escapeHtml(lead.phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">Hạng bằng:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${escapeHtml(lead.hangBang || "Chưa chọn")}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">Khu vực:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${escapeHtml(lead.khuVuc || "Chưa chọn")}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">Ghi chú / Yêu cầu:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${escapeHtml(lead.ghiChu || "Không có")}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">Nguồn trang:</td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${escapeHtml(lead.source)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; background-color: #f8fafc;">Thời gian:</td>
            <td style="padding: 8px;">${timeStr}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #64748b; text-align: center;">
          Email tự động từ hệ thống Website Trung Tâm Đào Tạo Lái Xe Phú Thọ — Chi nhánh Vạn Xuân
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Vạn Xuân Auto Notification" <${smtpUser}>`,
      to: notifyEmail,
      subject: `[ĐĂNG KÝ MỚI] ${lead.name} - SĐT: ${lead.phone}`,
      html: htmlContent,
    });

    console.log("[Notification] Đã gửi email thông báo thành công.");
    return true;
  } catch (error) {
    console.error("[Notification] Ngoại lệ khi gửi Email:", error);
    return false;
  }
}

/**
 * Hàm tổng hợp gửi thông báo đa kênh song song (Non-blocking).
 */
export async function notifyNewLead(lead: LeadPayload): Promise<void> {
  console.log("[Notification] Đang xử lý phát thông báo cho lead mới:", lead.name, lead.phone);

  const results = await Promise.allSettled([
    sendToGoogleSheet(lead),
    sendToTelegram(lead),
    sendToEmail(lead),
  ]);

  const [sheetRes, telegramRes, emailRes] = results;

  console.log("[Notification Summary]", {
    googleSheet: sheetRes.status === "fulfilled" ? sheetRes.value : false,
    telegram: telegramRes.status === "fulfilled" ? telegramRes.value : false,
    email: emailRes.status === "fulfilled" ? emailRes.value : false,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
