// Vercel Serverless Function: POST /api/public/enquiry
// Sends enquiry emails via Resend REST API.
// Requires env var: RESEND_API_KEY
// Optional env vars: ENQUIRY_TO (default websitelelo.team@gmail.com),
//                    ENQUIRY_FROM (default "Website Lelo <onboarding@resend.dev>")

export const config = { runtime: "nodejs" };

type EnquiryBody = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  details?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  let body: EnquiryBody = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const name = (body.name || "").trim();
  const business = (body.business || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const details = (body.details || "").trim();

  if (!name || !business || !email || !phone || !details) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const to = process.env.ENQUIRY_TO || "websitelelo.team@gmail.com";
  const from = process.env.ENQUIRY_FROM || "Website Lelo <onboarding@resend.dev>";

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
      <h2 style="margin:0 0 12px">New Enquiry — Website Lelo</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Business:</strong> ${escapeHtml(business)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Details:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(details)}</p>
    </div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry from ${name} (${business})`,
        html,
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error("Resend error:", r.status, text);
      return res.status(502).json({ error: "Email delivery failed" });
    }

    const data = await r.json().catch(() => ({}));
    return res.status(200).json({ ok: true, id: (data as any)?.id });
  } catch (e: any) {
    console.error("Enquiry handler error:", e);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
