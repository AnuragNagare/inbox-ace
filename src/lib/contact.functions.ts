import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, {
    message: "Name must be less than 100 characters",
  }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  role: z
    .string()
    .trim()
    .max(100, { message: "Role must be less than 100 characters" })
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { getSql } = await import("@/lib/db.server");
    const { sendContactNotification } = await import("@/lib/email.server");

    const sql = getSql();

    let id: string;
    try {
      const rows = await sql`
        INSERT INTO landing.contact_submissions (name, email, role, message)
        VALUES (${data.name}, ${data.email}, ${data.role || null}, ${data.message})
        RETURNING id
      `;
      id = (rows as { id: string }[])[0]!.id;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to submit your message. Please try again.");
    }

    // The submission is already saved — a notification-email failure shouldn't
    // fail the request, just get logged for follow-up.
    try {
      await sendContactNotification(data);
      await sql`
        UPDATE landing.contact_submissions SET notified_at = now() WHERE id = ${id}
      `;
    } catch (error) {
      console.error("Failed to send contact notification email", error);
    }

    return { success: true };
  });
