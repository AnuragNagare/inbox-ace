import scoringImg from "@/assets/showcase-scoring.jpg";
import repliesImg from "@/assets/showcase-replies.jpg";
import followupsImg from "@/assets/showcase-followups.jpg";

const items = [
  {
    img: scoringImg,
    label: "Priority sorting",
    title: "Every email lands in a tier",
    description:
      "CRITICAL to Cold, ranked by buying-intent and urgency language — before you open a single thread.",
    delay: "0s",
  },
  {
    img: repliesImg,
    label: "Your voice",
    title: "A draft is already waiting",
    description:
      "Warm, direct, or formal. Pursuit writes the first version and learns from every edit you make.",
    delay: "0.9s",
  },
  {
    img: followupsImg,
    label: "Day 3 · 7 · 14",
    title: "Quiet leads get nudged",
    description:
      "Sequences fly out on schedule and pause the moment a prospect replies. Nothing goes cold.",
    delay: "1.8s",
  },
];

export function FloatingShowcase() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-4 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-teal-light/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Inside Pursuit
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Three quiet machines running behind your inbox
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            You keep using Gmail exactly as you do today. Pursuit works in the
            background.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group text-center">
              <div className="relative mx-auto flex h-56 w-56 items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-background shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative h-full w-full object-contain scale-110 [animation:float-soft_7s_ease-in-out_infinite] transition-transform duration-500 group-hover:scale-105"
                  style={{ animationDelay: item.delay }}
                />
              </div>
              <span className="mt-4 inline-block rounded-full border border-border bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal">
                {item.label}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
