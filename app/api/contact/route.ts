import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  inquiry?: string;
  message?: string;
  "bot-field"?: string;
};

function getTransporter() {
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASSWORD;
  if (!user || !pass) return null;

  // Zoho's SMTP host differs by data center: smtp.zoho.com (global/US),
  // smtp.zoho.eu, smtp.zoho.in, etc. Override via ZOHO_SMTP_HOST if your
  // Zoho Mail account isn't on the default .com data center.
  return nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  const transporter = getTransporter();
  if (!transporter) {
    console.error("ZOHO_SMTP_USER / ZOHO_SMTP_PASSWORD are not set.");
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
    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: textLines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 },
    );
  }
}
