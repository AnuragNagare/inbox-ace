// Sends the "someone filled out the contact form" notification via Resend.
import { Resend } from "resend";

let _resend: Resend | undefined;

function getResend() {
  if (!_resend) {
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    if (!RESEND_API_KEY) {
      throw new Error("Missing environment variable: RESEND_API_KEY");
    }
    _resend = new Resend(RESEND_API_KEY);
  }
  return _resend;
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  role?: string | null;
  message: string;
}) {
  const to = process.env["CONTACT_NOTIFY_EMAIL"];
  if (!to) {
    throw new Error("Missing environment variable: CONTACT_NOTIFY_EMAIL");
  }

  await getResend().emails.send({
    from: "Pursuit Landing Page <onboarding@resend.dev>",
    to,
    replyTo: data.email,
    subject: `New contact form submission from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Role: ${data.role || "—"}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}
