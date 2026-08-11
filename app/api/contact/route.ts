import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Resend's shared sender only delivers to the email address the Resend
// account was signed up with. For real delivery to siteConfig.email,
// verify the imanovasys.com domain in Resend and change this to an
// address on that domain (e.g. "Imanova Systems <contact@imanovasys.com>").
const FROM_ADDRESS = `${siteConfig.name} Website <onboarding@resend.dev>`;

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  inquiry?: string;
  message?: string;
  "bot-field"?: string;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields humans never see. Pretend success.
  if (body["bot-field"]) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const organization = body.organization?.trim();
  const inquiry = body.inquiry?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    inquiry ? `Interested in: ${inquiry}` : null,
    "",
    message,
  ].filter((line): line is string => line !== null);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [siteConfig.email],
        reply_to: email,
        subject: `New contact form message from ${name}`,
        text: textLines.join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("Resend API error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 },
    );
  }
}
