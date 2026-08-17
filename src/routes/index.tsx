import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Mail,
  Sparkles,
  Target,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  Calendar,
  ChevronRight,
  Star,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/hero.jpg";
import { InboxScoreboard } from "@/components/landing/InboxScoreboard";
import { FloatingShowcase } from "@/components/landing/FloatingShowcase";
import {
  StatsStrip,
  ComparisonSection,
  TestimonialsSection,
  SecuritySection,
} from "@/components/landing/Extras";
import { ContactSection } from "@/components/landing/ContactSection";


export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Pursuit — AI Email Assistant for Solo Professionals" },
      {
        name: "description",
        content:
          "Pursuit connects to your Gmail and uses AI to score incoming leads, draft replies in your tone, and follow up automatically. Built for coaches, freelancers, and consultants.",
      },
      {
        property: "og:title",
        content: "Pursuit — AI Email Assistant for Solo Professionals",
      },
      {
        property: "og:description",
        content:
          "Never let a high-value lead go cold. AI scoring, smart replies, and automated follow-ups inside Gmail.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <FloatingShowcase />
        <InboxScoreboard />
        <StatsStrip />
        <FeaturesSection />
        <ComparisonSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <SecuritySection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-ink">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Target className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Pursuit</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#pricing" className="transition-colors hover:text-ink">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden text-sm font-medium text-ink-muted transition-colors hover:text-ink sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-teal-dark"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-ink-muted shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber" />
              <span>Now in early access</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Your inbox,{" "}
              <span className="text-teal">prioritized by AI.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Pursuit connects to Gmail and scores every incoming email for
              business priority, drafts replies in your voice, and follows up
              with quiet leads — so you never drop the ball while doing the
              work that pays.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-teal-dark hover:shadow-lg"
              >
                Start 14-day free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-muted"
              >
                See how it works
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald" />
                No credit card required
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald" />
                Cancel anytime
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald" />
                Works with Gmail
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-teal/10 via-transparent to-amber/10 blur-2xl" />
            <img
              src={heroImage}
              alt="AI-powered Gmail inbox visualization showing priority scoring"
              width={1344}
              height={768}
              className="relative rounded-2xl border border-border bg-card shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const roles = [
    "Executive coaches",
    "Freelance designers",
    "Solo consultants",
    "Independent agencies",
    "Course creators",
  ];

  return (
    <section className="border-y border-border bg-cream px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-muted">
          Built for service professionals who sell through their inbox
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {roles.map((role) => (
            <span
              key={role}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-ink"
            >
              <Star className="h-3.5 w-3.5 text-amber" />
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            You are the salesperson, account manager, and the one doing the
            work.
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            High-value leads get buried under newsletters and internal threads.
            Prospects go quiet. Follow-ups slip through the cracks because
            there is no CRM, no sales team, and no admin support — just you and
            your Gmail.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <ProblemCard
            icon={<Mail className="h-6 w-6 text-rose" />}
            title="Inbox noise hides money"
            description="The email that could land your next client sits three scrolls down, right next to a receipt."
          />
          <ProblemCard
            icon={<Clock className="h-6 w-6 text-amber" />}
            title="Follow-ups fall through"
            description="You mean to circle back, but billable work always wins. Quiet leads stay quiet."
          />
          <ProblemCard
            icon={<MessageSquare className="h-6 w-6 text-slate" />}
            title="Replying takes too long"
            description="Every response is a small creative project. The inbox becomes a second job."
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-ink-muted">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-rose" />,
      badge: "CRITICAL to Cold",
      title: "AI priority scoring",
      description:
        "Every incoming email is scored for buying intent and urgency. Hot leads surface instantly. Noise stays in its place.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-teal" />,
      badge: "Your tone",
      title: "Smart replies & drafts",
      description:
        "Generate reply suggestions and full drafts that sound like you — warm, direct, or formal, based on your style.",
    },
    {
      icon: <Zap className="h-6 w-6 text-amber" />,
      badge: "Auto-pausing",
      title: "Automated follow-ups",
      description:
        "Build multi-step sequences that nudge quiet leads on day 3, 7, and 14. Auto-pauses if they reply first.",
    },
  ];

  return (
    <section id="features" className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            What Pursuit does
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Three layers of AI on top of Gmail
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Connect once. Pursuit reads, scores, drafts, and follows up — all
            inside your existing workflow.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  badge,
  title,
  description,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-teal-light">
        {icon}
      </div>
      <span className="mt-5 inline-block rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-ink-muted">
        {badge}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect Gmail",
      description:
        "One secure OAuth connection. Pursuit can read, send, and manage labels on your behalf.",
    },
    {
      number: "02",
      title: "Set your tone",
      description:
        "Tell Pursuit how you like to sound. It learns from your corrections over time.",
    },
    {
      number: "03",
      title: "Review the scoreboard",
      description:
        "See every email ranked by business priority. Open the hot ones first.",
    },
    {
      number: "04",
      title: "Approve sends",
      description:
        "Drafts and follow-ups queue for your approval until you trust full automation.",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            How it works
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From inbox chaos to quiet control
          </h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-bold text-border">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Pricing
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One plan. No surprises.
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Start free for 14 days. No credit card required.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:px-16">
          <PricingCard
            name="Monthly"
            price="$29"
            period="/month"
            description="Flexible. Cancel anytime."
            cta="Start 14-day trial"
            highlighted={false}
          />
          <PricingCard
            name="Yearly"
            price="$290"
            period="/year"
            description="Save $58 — two months free."
            cta="Start 14-day trial"
            highlighted={true}
          />
        </div>
        <p className="mt-10 text-center text-sm text-ink-muted">
          Both plans include unlimited Gmail accounts, AI scoring, smart
          replies, follow-up campaigns, and email support.
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  cta,
  highlighted,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border p-8 shadow-sm sm:p-10 ${
        highlighted
          ? "border-teal bg-background shadow-xl"
          : "border-border bg-card"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-primary-foreground">
          Best value
        </span>
      )}
      <h3 className="text-lg font-semibold text-ink">{name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tight text-ink">
          {price}
        </span>
        <span className="text-ink-muted">{period}</span>
      </div>
      <p className="mt-2 text-ink-muted">{description}</p>
      <ul className="mt-8 space-y-4">
        <PricingFeature text="Unlimited Gmail accounts" />
        <PricingFeature text="AI priority scoring" />
        <PricingFeature text="Smart reply drafting" />
        <PricingFeature text="Multi-step follow-up campaigns" />
        <PricingFeature text="Auto-pause on reply" />
        <PricingFeature text="Email support" />
      </ul>
      <a
        href="#"
        className={`mt-10 flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all ${
          highlighted
            ? "bg-primary text-primary-foreground hover:bg-teal-dark"
            : "border border-border bg-background text-ink hover:bg-muted"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-light">
        <Check className="h-3 w-3 text-emerald" />
      </div>
      <span className="text-ink">{text}</span>
    </li>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Do I need a separate AI API key?",
      answer:
        "No. Pursuit includes access to the underlying AI models. You just connect Gmail and start using it.",
    },
    {
      question: "Can Pursuit send emails automatically?",
      answer:
        "Yes, but only after you approve. By default, every draft and follow-up queues for your approval. You can enable full automation per campaign when you are ready.",
    },
    {
      question: "Is my email data private?",
      answer:
        "Yes. We use your Gmail data only to score, draft, and send emails on your behalf. We do not train models on your inbox or sell your data.",
    },
    {
      question: "What happens after the trial?",
      answer:
        "After 14 days, choose the monthly or yearly plan. If you do not subscribe, your account pauses but your data stays intact for 30 days.",
    },
    {
      question: "Can I use Pursuit with multiple Gmail addresses?",
      answer:
        "Yes. Both plans support unlimited Gmail accounts, so you can manage personal and business inboxes in one place.",
    },
  ];

  return (
    <section id="faq" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions & answers
          </h2>
        </div>
        <div className="mt-16 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-semibold text-ink">{question}</span>
        <ChevronRight
          className={`h-5 w-5 shrink-0 text-ink-muted transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-3 pr-8 leading-relaxed text-ink-muted">{answer}</p>
      )}
    </div>
  );
}

function FinalCTASection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-teal px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Stop losing leads to inbox noise.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
              Join solo professionals who use Pursuit to surface what matters,
              reply faster, and follow up without the mental load.
            </p>
            <a
              href="#pricing"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-cream-dark"
            >
              Start your 14-day free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm text-primary-foreground/80">
              No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2 text-ink">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Target className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Pursuit
            </span>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-ink-muted">
            <a href="#features" className="hover:text-ink">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-ink">
              How it works
            </a>
            <a href="#pricing" className="hover:text-ink">
              Pricing
            </a>
            <a href="#faq" className="hover:text-ink">
              FAQ
            </a>
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-ink-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Pursuit. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald" />
            <span>Gmail data stays private and secure.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
