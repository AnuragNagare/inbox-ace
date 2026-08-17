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
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    const { error } = await (supabaseAdmin.from("contact_submissions" as any) as any)
      .insert({
        name: data.name,
        email: data.email,
        role: data.role || null,
        message: data.message,
      });

    if (error) {
      throw new Error("Failed to submit your message. Please try again.");
    }

    return { success: true };
  });
