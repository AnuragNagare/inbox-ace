import { useState } from "react";
import { Flame, Mail, Sparkles, Snowflake, ArrowRight } from "lucide-react";

type Email = {
  from: string;
  subject: string;
  snippet: string;
  score: number;
  label: "CRITICAL" | "Warm" | "Low" | "Cold";
  reason: string;
  draft: string;
};

const EMAILS: Email[] = [
  {
    from: "Dana Whitfield — Northwind Group",
    subject: "Leadership coaching for our new VPs — budget approved",
    snippet:
      "We have sign-off for Q3 and want to start in three weeks. Can you send availability?",
    score: 96,
    label: "CRITICAL",
    reason: "Budget approved + explicit timeline + decision maker",
    draft:
      "Hi Dana — great news on the sign-off. I have two openings in the next three weeks; I'll hold Thursday 10am and Monday 2pm for you. Which suits your VPs better?",
  },
  {
    from: "Marcus Reed",
    subject: "Following up on our call",
    snippet:
      "Thanks for the walkthrough. Sharing internally this week and will circle back.",
    score: 68,
    label: "Warm",
    reason: "Engaged, no timeline yet — follow-up scheduled for day 3",
    draft:
      "Hi Marcus — thanks again for the time. I put together a one-pager your team can skim before deciding. Want me to send it over?",
  },
  {
    from: "Design Weekly",
    subject: "Issue #212: 7 portfolio trends",
    snippet: "Plus: the case against case studies, and a new grid generator.",
    score: 12,
    label: "Low",
    reason: "Newsletter — no buying intent detected",
    draft: "No reply needed. Archived automatically.",
  },
  {
    from: "Priya Nair",
    subject: "Re: proposal",
    snippet: "Quiet for 11 days after showing strong interest.",
    score: 41,
    label: "Cold",
    reason: "Went cold after high interest — re-engagement nudge queued",
    draft:
      "Hi Priya — checking in once before I close the file. Is the proposal still something you'd like to move on this quarter?",
  },
];

const LABEL_STYLES: Record<Email["label"], string> = {
  CRITICAL: "bg-rose-light text-rose",
  Warm: "bg-amber-light text-amber",
  Low: "bg-muted text-ink-muted",
  Cold: "bg-slate-light text-slate",
};

const LABEL_ICONS: Record<Email["label"], React.ReactNode> = {
  CRITICAL: <Flame className="h-3.5 w-3.5" />,
  Warm: <Mail className="h-3.5 w-3.5" />,
  Low: <Mail className="h-3.5 w-3.5" />,
  Cold: <Snowflake className="h-3.5 w-3.5" />,
};

export function InboxScoreboard() {
  const [active, setActive] = useState(0);
  const email = EMAILS[active]!;

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            The scoreboard
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            See what Pursuit sees in your inbox
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Click an email to see the score, the reasoning behind it, and the
            draft Pursuit prepared for you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:col-span-3">
            <div className="flex items-center gap-2 border-b border-border bg-cream px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald/60" />
              <span className="ml-3 text-xs font-medium text-ink-muted">
                Inbox — ranked by business priority
              </span>
            </div>
            <ul className="divide-y divide-border">
              {EMAILS.map((item, i) => (
                <li key={item.subject}>
                  <button
                    onClick={() => setActive(i)}
                    className={`flex w-full items-start gap-4 px-5 py-4 text-left transition-colors ${
                      i === active ? "bg-teal-light/60" : "hover:bg-muted/60"
                    }`}
                  >
                    <div className="flex w-12 shrink-0 flex-col items-center">
                      <span className="text-lg font-bold text-ink">
                        {item.score}
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-ink-muted">
                        score
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="truncate text-sm font-semibold text-ink">
                          {item.from}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${LABEL_STYLES[item.label]}`}
                        >
                          {LABEL_ICONS[item.label]}
                          {item.label}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-sm font-medium text-ink">
                        {item.subject}
                      </p>
                      <p className="mt-0.5 truncate text-sm text-ink-muted">
                        {item.snippet}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-cream p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Why this score
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-teal">
                  {email.score}
                </span>
                <span className="text-sm text-ink-muted">/ 100</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${email.score}%` }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink">
                {email.reason}
              </p>
            </div>

            <div className="flex-1 rounded-2xl border border-teal/30 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-teal" />
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  Draft in your tone
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                {email.draft}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
                  Approve & send <ArrowRight className="h-3 w-3" />
                </span>
                <span className="rounded-full border border-border px-3 py-1.5">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
