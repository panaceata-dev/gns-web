import { Resend } from "resend";
import { NextResponse } from "next/server";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
};

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = getResendClient();

  if (!resend) {
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 503 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Gigglenshine Contact <onboarding@resend.dev>",
    to: "info@panaceata.com",
    replyTo: email,
    subject: `New Contact Request from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
