import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_EMAIL || "theqodexsoftware@gmail.com";

const serviceLabels: Record<string, string> = {
  web: "Web Application", mobile: "Mobile App", ai: "AI / Machine Learning",
  design: "UI/UX Design", devops: "Cloud & DevOps", saas: "SaaS Development",
  chatbot: "Chatbot Development", other: "Other / Consulting",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    // Import Resend inside handler — only runs at request time, not build time
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Qodex Contact Form <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f6f9fe;padding:32px;border-radius:12px;">
          <div style="background:linear-gradient(135deg,#1058a8,#1a7ec8);padding:24px 32px;border-radius:8px;margin-bottom:24px;">
            <h1 style="color:white;margin:0;font-size:22px;">New Project Enquiry</h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:14px;">Received via Qodex Software website</p>
          </div>
          <div style="background:white;border-radius:8px;padding:24px;margin-bottom:16px;border:1px solid #e2e8f0;">
            <h2 style="color:#1058a8;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:0 0 16px;">Contact Details</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:120px;">Name</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${name}</td></tr>
              <tr style="border-top:1px solid #f1f5f9;"><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#1058a8;">${email}</a></td></tr>
              ${company ? `<tr style="border-top:1px solid #f1f5f9;"><td style="padding:8px 0;color:#64748b;font-size:14px;">Company</td><td style="padding:8px 0;color:#0f172a;font-size:14px;">${company}</td></tr>` : ""}
              ${service ? `<tr style="border-top:1px solid #f1f5f9;"><td style="padding:8px 0;color:#64748b;font-size:14px;">Service</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${serviceLabels[service] || service}</td></tr>` : ""}
            </table>
          </div>
          <div style="background:white;border-radius:8px;padding:24px;border:1px solid #e2e8f0;">
            <h2 style="color:#1058a8;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">Message</h2>
            <p style="color:#334155;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#94a3b8;font-size:12px;text-align:center;margin-top:24px;">Sent from qodexsoftware.com contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
