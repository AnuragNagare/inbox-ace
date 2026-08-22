import {
  BadgeDollarSign,
  Brain,
  History,
  LineChart,
  MessageCircleQuestion,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export function RevenueAttributionSection() {
  const timeline = [
    { step: "Inbound email", detail: "“What do your 6-week packages cost?”" },
    { step: "Pursuit scored it", detail: "92 — pricing enquiry, high intent" },
    { step: "Draft sent", detail: "Reply in your tone, approved in 20 seconds" },
    { step: "Went quiet", detail: "No answer for 9 days" },
    { step: "Follow-up ran", detail: "Day 3 / 7 / 14 nudge, auto-paused on reply" },
    { step: "Outcome", detail: "Discovery call booked → $4,800 closed" },
  ];

  return (
    <section id="revenue" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Revenue attribution
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Proof that Pursuit pays for itself
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Pursuit tracks the whole lifecycle — first email, score, draft,
            follow-up, outcome — then tells you what it was worth in plain money
            terms. Not a cost. An obvious return.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-teal/30 bg-card p-8 shadow-sm lg:col-span-3">
            <div className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-teal" />
              <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                This month
              </span>
            </div>
            <p className="mt-5 text-balance text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              Pursuit revived 3 dead leads worth{" "}
              <span className="text-teal">$14,000</span>.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: TrendingUp, value: "7", label: "hot leads surfaced first" },
                { icon: Users, value: "4", label: "calls booked" },
                { icon: BadgeDollarSign, value: "2", label: "deals closed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-cream p-5"
                >
                  <s.icon className="h-4 w-4 text-teal" />
                  <p className="mt-3 text-2xl font-bold tracking-tight text-ink">
                    {s.value}
                  </p>
                  <p className="text-sm text-ink-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              Confirm a deal value once — or set a default package price — and
              Pursuit connects the dots from quiet lead to closed contract.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-cream p-8 lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              One lead, end to end
            </span>
            <ol className="mt-5 space-y-4">
              {timeline.map((t, i) => (
                <li key={t.step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.step}</p>
                    <p className="text-sm text-ink-muted">{t.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeadMemorySection() {
  const contacts = [
    {
      name: "Dana Whitfield",
      stage: "Booked",
      last: "2 days ago",
      wanted: "Leadership coaching for 4 new VPs, Q3 start",
    },
    {
      name: "Marcus Reed",
      stage: "Awaiting reply",
      last: "6 days ago",
      wanted: "Asked about the 6-week package pricing",
    },
    {
      name: "Priya Nair",
      stage: "Gone quiet",
      last: "11 days ago",
      wanted: "Wanted a proposal after the discovery call",
    },
    {
      name: "Tomas Berg",
      stage: "New lead",
      last: "Today",
      wanted: "“Can we hop on a call this week?”",
    },
  ];

  const stageStyles: Record<string, string> = {
    Booked: "bg-emerald/15 text-emerald",
    "Awaiting reply": "bg-amber-light text-amber",
    "Gone quiet": "bg-slate-light text-slate",
    "New lead": "bg-teal-light text-teal",
  };

  return (
    <section id="lead-memory" className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Lead memory
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            CRM value without adopting a CRM
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            No pipelines to maintain, no custom fields, no data entry. Just a
            one-glance memory of every contact, built automatically from your
            email history — right where you already work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3">
              <History className="h-4 w-4 text-teal" />
              <span className="text-xs font-medium text-ink-muted">
                Contacts — remembered for you
              </span>
            </div>
            <ul className="divide-y divide-border">
              {contacts.map((c) => (
                <li key={c.name} className="px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-ink">
                      {c.name}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${stageStyles[c.stage]}`}
                    >
                      {c.stage}
                    </span>
                    <span className="ml-auto text-xs text-ink-muted">
                      Last contact {c.last}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">{c.wanted}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                title: "Where did we leave off?",
                body: "Every thread with a contact collapses into one timeline instead of scattered replies.",
              },
              {
                title: "Auto-summarised intent",
                body: "Pursuit writes down what they actually wanted, so you never re-read a thread to remember.",
              },
              {
                title: "Deliberately CRM-lite",
                body: "Memory without the admin burden. No setup, no maintenance, nothing new to learn.",
              },
            ].map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold text-ink">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {i.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function NicheIntelligenceSection() {
  const signals = [
    "“Can we hop on a call?”",
    "Discovery-call requests",
    "Package & pricing enquiries",
    "Program / curriculum questions",
    "Referral intros from past clients",
  ];

  const objections = [
    { o: "“I need to think about it.”", a: "Reframes with a low-pressure next step and a specific date." },
    { o: "“What's the ROI?”", a: "Answers with outcomes from similar clients, not features." },
    { o: "“It's expensive right now.”", a: "Offers a smaller entry point instead of discounting." },
    { o: "“Let me check with my partner.”", a: "Gives them something forwardable to share." },
  ];

  return (
    <section id="niche" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Niche intelligence
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built by someone who understands how coaches sell
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Generic email AI treats a discovery-call request like any other
            message. Pursuit is tuned to the way coaching, consulting, and
            freelance work actually gets sold.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal" />
              <h3 className="font-semibold text-ink">
                Signals it scores as high value
              </h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {signals.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-cream px-3 py-1.5 text-sm text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-2">
              <MessageCircleQuestion className="h-4 w-4 text-teal" />
              <h3 className="font-semibold text-ink">
                Objections it knows how to answer
              </h3>
            </div>
            <ul className="mt-5 space-y-4">
              {objections.map((x) => (
                <li key={x.o}>
                  <p className="text-sm font-semibold text-ink">{x.o}</p>
                  <p className="text-sm text-ink-muted">{x.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-teal/30 bg-cream p-8 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-ink">It gets smarter every month</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Pursuit learns — from anonymised, aggregated patterns — which
              messaging and follow-up timing actually converts coaching leads,
              then feeds that back into your scoring and drafts. The longer the
              community uses it, the sharper your replies get.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
