import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { env } from "@/lib/env";

export async function POST(request: Request) {
  try {
    const { to, subject, html } = await request.json();

    if (!to || !subject || !html) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: parseInt(env.SMTP_PORT || "587"),
      secure: env.SMTP_PORT === "465",
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: env.SMTP_FROM,
      to,
      subject,
      html,
    });

    return NextResponse.json({ message: "Email sent", messageId: info.messageId }, { status: 200 });
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
