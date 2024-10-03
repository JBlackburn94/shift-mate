import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, collection, dropOff, date, multipleDrop, vanSize } =
      await req.json();

    if (!email || !collection || !dropOff || !date || !vanSize) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "blackburntestemail@gmail.com",
      subject: "New Contact Form Submission",
      text: `You have received a new submission.\n\nEmail: ${email}\nCollection: ${collection}\nDrop Off: ${dropOff}\nDate: ${date}\nMultiple Drop Offs: ${multipleDrop}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
