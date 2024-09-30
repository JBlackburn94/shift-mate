import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, collection, dropOff, date } = await req.json();

    if (!email || !collection || !dropOff || !date) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose and send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "blackburntestemail@gmail.com",
      subject: "New Contact Form Submission",
      text: `You have received a new submission.\n\nEmail: ${email}\nCollection: ${collection}\nDrop Off: ${dropOff}\nDate: ${date}`,
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
