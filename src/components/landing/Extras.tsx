import { Check, Minus, Quote, Clock, TrendingUp, Inbox } from "lucide-react";

export function StatsStrip() {
  const stats = [
    {
      icon: <Clock className="h-5 w-5 text-teal" />,
      value: "6.4 hrs",
      label: "saved on email each week",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-teal" />,
      value: "2.3×",
      label: "more quiet leads revived",
    },
    {
      icon: <Inbox className="h-5 w-5 text-teal" />,
      value: "94%",
      label: "of hot leads surfaced first",
    },
  ];

  return (
    <section className="border-y border-border bg-cream px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.value} className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light">
              {s.icon}
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight text-ink">
                {s.value}
              </p>
              <p className="text-sm text-ink-muted">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const rows = [
    "Hot leads surfaced above newsletters",
    "Replies drafted in your own tone",
    "Day 3 / 7 / 14 follow-ups sent for you",
    "Auto-pause the moment they reply",
    "Learns from every score you correct",
    "Notices when a warm lead goes cold",
  ];

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Before & after
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Same inbox. Completely different week.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-ink">Plain Gmail</h3>
            <p className="mt-1 text-sm text-ink-muted">
              Willpower as a sales system.
            </p>
            <ul className="mt-6 space-y-4">
              {rows.map((row) => (
                <li key={row} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Minus className="h-3 w-3 text-ink-muted" />
                  </div>
                  <span className="text-ink-muted line-through decoration-border">
                    {row}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-teal bg-cream p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-ink">Gmail + Pursuit</h3>
            <p className="mt-1 text-sm text-ink-muted">
              A quiet system that does the remembering.
            </p>
            <ul className="mt-6 space-y-4">
              {rows.map((row) => (
                <li key={row} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-ink">{row}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const quotes = [
    {
      quote:
        "I found a $12k coaching contract sitting under a stack of receipts. Pursuit put it at the top on day one.",
      name: "Dana Whitfield",
      role: "Executive coach",
    },
    {
      quote:
        "The follow-ups are the whole product for me. I stopped losing deals to my own forgetfulness.",
      name: "Marcus Reed",
      role: "Brand consultant",
    },
    {
      quote:
        "The drafts actually sound like me. I edit maybe one sentence before sending.",
      name: "Priya Nair",
      role: "Freelance designer",
    },
  ];

  return (
    <section className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            From early access
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Solo professionals, fewer dropped balls
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm"
            >
              <Quote className="h-6 w-6 text-teal" />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-ink">{q.name}</p>
                <p className="text-sm text-ink-muted">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecuritySection() {
  const items = [
    {
      title: "Read-only until you approve",
      body: "Nothing leaves your account without an explicit approval, until you decide otherwise per campaign.",
    },
    {
      title: "Your inbox is never training data",
      body: "We use your Gmail data to score, draft, and send on your behalf — nothing else, ever.",
    },
    {
      title: "Revoke access in one click",
      body: "Disconnect Gmail whenever you want. Tokens are dropped immediately.",
    },
  ];

  return (
    <section className="px-6 pb-8 pt-4">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold text-ink">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {i.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
