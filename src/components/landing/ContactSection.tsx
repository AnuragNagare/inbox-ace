import { useState } from "react";
import { Send, CheckCircle, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/lib/contact.functions";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    else if (formData.name.length > 100) nextErrors.name = "Name is too long";

    const email = formData.email.trim();
    if (!email) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Invalid email address";
    } else if (email.length > 255) nextErrors.email = "Email is too long";

    if (!formData.message.trim()) nextErrors.message = "Message is required";
    else if (formData.message.length > 2000) nextErrors.message = "Message is too long";

    if (formData.role && formData.role.length > 100) nextErrors.role = "Role is too long";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContact({ data: formData });
      setStatus("success");
      setFormData({ name: "", email: "", role: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-light/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Get in touch
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Interested in early access?
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Leave your details and I will personally reach out to show you how
            Pursuit can fit your inbox workflow.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-light">
                <CheckCircle className="h-8 w-8 text-emerald" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                Message sent
              </h3>
              <p className="mt-2 max-w-md text-ink-muted">
                Thanks for your interest. I have your details and will be in
                touch soon.
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-full"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    aria-invalid={!!errors.name}
                    className="rounded-xl"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    aria-invalid={!!errors.email}
                    className="rounded-xl"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">What do you do?</Label>
                <Input
                  id="role"
                  placeholder="e.g. Executive coach, freelance designer, consultant"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me what you're looking for, or ask anything about Pursuit."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  aria-invalid={!!errors.message}
                  className="resize-none rounded-xl"
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">{errorMessage}</p>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-teal-dark"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send my details
                  </>
                )}
              </Button>

              <p className="flex items-center justify-center gap-2 text-center text-xs text-ink-muted">
                <Mail className="h-3.5 w-3.5" />
                Your information stays private and will only be used to reply.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
