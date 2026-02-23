// lib/brevo.ts
// Uses Node's built-in https module with family:4 (IPv4 forced).
// This prevents the UND_ERR_SOCKET error when Node resolves api.brevo.com
// to an IPv6 address that silently drops the connection.

import https from "https";

const BREVO_API_KEY = process.env.BREVO_API_KEY as string;
const FROM_EMAIL    = process.env.BREVO_FROM_EMAIL || "noreply@jeclat.in";
const FROM_NAME     = process.env.BREVO_FROM_NAME  || "JECLAT 2026";

if (!BREVO_API_KEY) {
  console.error("[BREVO] WARNING: BREVO_API_KEY is not set in environment variables!");
}

// ─── LOW-LEVEL HTTPS REQUEST (IPv4 forced) ────────────────────────────────────
function brevoRequest(path: string, body: object): Promise<any> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);

    const options: https.RequestOptions = {
      hostname: "api.brevo.com",
      port: 443,
      path,
      method: "POST",
      family: 4, // Force IPv4 — prevents silent connection drops on IPv6
      headers: {
        "accept":         "application/json",
        "content-type":   "application/json",
        "api-key":        BREVO_API_KEY,
        "content-length": Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        console.log(`[BREVO] ${path} → HTTP ${res.statusCode}: ${data}`);
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`Brevo API error ${res.statusCode}: ${data}`));
        } else {
          try { resolve(JSON.parse(data)); }
          catch { resolve(data); }
        }
      });
    });

    req.on("error", (err) => {
      console.error("[BREVO] Request error:", err);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

// ─── SEND TRANSACTIONAL EMAIL ─────────────────────────────────────────────────
export async function sendEmail({
  to,
  toName,
  subject,
  htmlContent,
}: {
  to: string;
  toName: string;
  subject: string;
  htmlContent: string;
}) {
  console.log(`[BREVO] Sending email to: ${to} | Subject: ${subject}`);
  console.log(`[BREVO] From: ${FROM_NAME} <${FROM_EMAIL}>`);
  console.log(`[BREVO] API Key set: ${!!BREVO_API_KEY} (starts with: ${BREVO_API_KEY?.slice(0, 12)}...)`);

  return brevoRequest("/v3/smtp/email", {
    sender:      { name: FROM_NAME, email: FROM_EMAIL },
    to:          [{ email: to, name: toName }],
    subject,
    htmlContent,
  });
}

// ─── OTP EMAIL TEMPLATE ───────────────────────────────────────────────────────
export function otpEmailTemplate(otp: string, name: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0502;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <tr>
      <td style="text-align:center;padding:30px;background:linear-gradient(135deg,#1a0808,#0a0502);border:1px solid #fbba0640;border-radius:12px;">
        
        <div style="color:#fbba06;font-size:10px;letter-spacing:6px;text-transform:uppercase;margin-bottom:8px;font-family:Arial,sans-serif;">
          &#x0964; JECLAT 2026 &#x0964;
        </div>
        <h1 style="color:#f0e6d2;font-size:28px;margin:0 0 4px;letter-spacing:2px;">
          Verify Your Identity
        </h1>
        <p style="color:#fbba06;font-style:italic;margin:0 0 30px;font-size:14px;">
          "O ${name}, prove thyself worthy"
        </p>

        <div style="height:1px;background:linear-gradient(to right,transparent,#fbba0660,transparent);margin:20px 0;"></div>

        <p style="color:#f0e6d2;font-size:14px;margin:0 0 16px;">Your sacred verification code is:</p>
        <div style="background:#fbba0615;border:2px solid #fbba06;border-radius:8px;padding:20px 40px;display:inline-block;margin:0 0 24px;">
          <span style="color:#fbba06;font-size:42px;font-weight:bold;letter-spacing:12px;font-family:monospace;">
            ${otp}
          </span>
        </div>

        <p style="color:#f0e6d2;opacity:0.6;font-size:12px;margin:0;">
          This code expires in <strong style="color:#fbba06;">10 minutes</strong>.<br/>
          Do not share it with anyone.
        </p>

        <div style="height:1px;background:linear-gradient(to right,transparent,#fbba0640,transparent);margin:24px 0;"></div>

        <p style="color:#f0e6d2;opacity:0.4;font-size:11px;margin:0;">
          JEC Lakshmi Ayodhya Teknical Festival &#x2014; 2026
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// ─── CONFIRMATION + VIRTUAL TICKET EMAIL ──────────────────────────────────────
export function confirmationEmailTemplate({
  name,
  eventTitle,
  eventDate,
  eventVenue,
  eventCategory,
  ticketId,
  teamName,
}: {
  name: string;
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
  eventCategory: string;
  ticketId: string;
  teamName?: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0502;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;padding:40px 20px;">
    <tr>
      <td>
        <!-- HEADER -->
        <div style="text-align:center;margin-bottom:30px;">
          <div style="color:#fbba06;font-size:11px;letter-spacing:8px;text-transform:uppercase;font-family:Arial,sans-serif;">
            &#x0964; JECLAT 2026 &#x0964;
          </div>
          <h1 style="color:#f0e6d2;font-size:26px;margin:8px 0 4px;letter-spacing:2px;">
            Pratigya Sweekar Kiya Gaya
          </h1>
          <p style="color:#fbba06;font-size:13px;font-style:italic;margin:0;">
            "Your pledge has been accepted, O Warrior"
          </p>
        </div>

        <!-- VIRTUAL TICKET -->
        <div style="background:linear-gradient(135deg,#1a0a00,#0d0502);border:1px solid #fbba06;border-radius:16px;overflow:hidden;margin-bottom:30px;box-shadow:0 0 40px rgba(251,186,6,0.15);">
          
          <!-- Ticket Top -->
          <div style="background:linear-gradient(to right,#3d1500,#1a0808);padding:28px 32px;">
            <div style="color:#fbba06;font-size:9px;letter-spacing:5px;font-family:Arial,sans-serif;text-transform:uppercase;margin-bottom:12px;">
              Official Entry Pass &#x2014; JECLAT 2026
            </div>
            <h2 style="color:#f0e6d2;font-size:32px;margin:0 0 4px;letter-spacing:1px;">
              ${eventTitle}
            </h2>
            <div style="color:#fbba06;font-size:13px;letter-spacing:2px;font-family:Arial,sans-serif;">
              ${eventCategory}
            </div>
          </div>

          <!-- Dashed separator -->
          <div style="border-top:2px dashed #fbba0630;margin:0 24px;"></div>

          <!-- Ticket Body -->
          <div style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="width:50%;padding-bottom:16px;">
                  <div style="color:#fbba06;font-size:9px;letter-spacing:3px;font-family:Arial,sans-serif;text-transform:uppercase;margin-bottom:4px;">Warrior</div>
                  <div style="color:#f0e6d2;font-size:18px;">${name}</div>
                </td>
                <td style="width:50%;padding-bottom:16px;">
                  <div style="color:#fbba06;font-size:9px;letter-spacing:3px;font-family:Arial,sans-serif;text-transform:uppercase;margin-bottom:4px;">
                    ${teamName ? "Sena (Team)" : "Category"}
                  </div>
                  <div style="color:#f0e6d2;font-size:18px;">
                    ${teamName || "Individual"}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:16px;">
                  <div style="color:#fbba06;font-size:9px;letter-spacing:3px;font-family:Arial,sans-serif;text-transform:uppercase;margin-bottom:4px;">Date</div>
                  <div style="color:#f0e6d2;font-size:15px;">${eventDate}</div>
                </td>
                <td style="padding-bottom:16px;">
                  <div style="color:#fbba06;font-size:9px;letter-spacing:3px;font-family:Arial,sans-serif;text-transform:uppercase;margin-bottom:4px;">Kshetra (Venue)</div>
                  <div style="color:#f0e6d2;font-size:15px;">${eventVenue}</div>
                </td>
              </tr>
            </table>
          </div>

          <!-- Dashed separator -->
          <div style="border-top:2px dashed #fbba0630;margin:0 24px;"></div>

          <!-- Ticket ID -->
          <div style="padding:20px 32px;text-align:center;">
            <div style="color:#fbba06;font-size:9px;letter-spacing:3px;font-family:Arial,sans-serif;text-transform:uppercase;margin-bottom:8px;">Ticket ID</div>
            <div style="background:#fbba0615;border:1px solid #fbba0640;border-radius:6px;padding:10px 24px;display:inline-block;">
              <span style="color:#fbba06;font-family:monospace;font-size:16px;letter-spacing:3px;">${ticketId}</span>
            </div>
            <p style="color:#f0e6d2;opacity:0.4;font-size:11px;margin:12px 0 0;">
              Present this ticket ID at the venue for entry verification.
            </p>
          </div>

        </div>

        <!-- Footer -->
        <div style="text-align:center;color:#f0e6d2;opacity:0.4;font-size:11px;line-height:1.6;">
          <p>This is an auto-generated confirmation. Please do not reply to this email.</p>
          <p style="margin-top:8px;">&#x0964; कर्म कर, फल की चिंता मत कर &#x0964;</p>
          <p style="margin-top:4px;color:#fbba06;opacity:0.5;letter-spacing:4px;font-size:10px;font-family:Arial,sans-serif;">
            JECLAT 2026 &#x2014; JEC LAKSHMI AYODHYA
          </p>
        </div>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}