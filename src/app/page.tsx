import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

const metrics = [
  { value: "40%", label: "Lower API latency" },
  { value: "10M+", label: "Requests handled daily" },
  { value: "50+", label: "Services migrated" },
  { value: "3x", label: "Faster deployments" },
];

const approach = [
  {
    title: "System-level thinking",
    description:
      "Design decisions are grounded in reliability, failure modes, operational cost, and long-term maintainability.",
  },
  {
    title: "Measurable outcomes",
    description:
      "Engineering work should move a meaningful business metric, not simply add more technical surface area.",
  },
  {
    title: "Team leverage",
    description:
      "Strong systems are built by strong teams, supported through clear design documentation and technical mentorship.",
  },
];

const leadership = [
  {
    metric: "10+",
    title: "Engineers mentored",
    description: "Supported mid-level engineers in growing into senior roles.",
  },
  {
    metric: "20+",
    title: "Architectural blueprints",
    description: "Authored RFCs and designs for core platforms.",
  },
  {
    metric: "High scale",
    title: "Open-source contribution",
    description: "Contributing to cloud frameworks and engineering patterns.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4.5 15.5L15.5 4.5M7 4.5H15.5V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        >
          <a
            href="#top"
            aria-label="Back to top"
            className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          >
            <span className="font-mono text-sky-400">{"//"}</span>
            Engineering Portfolio
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#impact">
              Impact
            </a>
            <a className="transition hover:text-white" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-white" href="#leadership">
              Leadership
            </a>
            <a
              className="transition hover:text-white"
              href={site.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300 transition hover:border-sky-300/60 hover:bg-sky-400/20 hover:text-white"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <section id="top" className="relative">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pt-12">
          <div className="max-w-4xl animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Senior Software Engineer
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Satish Kumar Bezawada
            </h1>
            <p className="mt-5 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] text-slate-100 sm:text-3xl">
              Building scalable systems that create{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                measurable impact.
              </span>
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              I specialize in distributed systems, cloud architecture, and
              technical leadership, turning complex engineering challenges into
              reliable platforms and durable business outcomes.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 text-sky-400"
                >
                  <path
                    d="M10 17s5-4.35 5-9a5 5 0 1 0-10 0c0 4.65 5 9 5 9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10"
                    cy="8"
                    r="1.75"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                United States
              </span>
              {/* Availability message hidden for now.
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                Open to senior engineering opportunities
              </span>
              */}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#impact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Explore selected work
                <ArrowIcon />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                Email
              </a>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                LinkedIn
                <ArrowIcon />
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                Résumé
                <ArrowIcon />
              </a>
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`px-5 py-6 text-center sm:py-7 ${
                  index > 0 ? "border-l border-white/10" : ""
                } ${index > 1 ? "border-t border-white/10 sm:border-t-0" : ""}`}
              >
                <dt className="order-2 mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  {metric.label}
                </dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="impact" className="scroll-mt-24 border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                Selected impact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Engineering outcomes, not just features.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-400 lg:justify-self-end">
              A focused view of platform work across distributed systems and
              cloud architecture, with results expressed in terms of speed,
              scale, reliability, and cost.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900 sm:p-9">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {study.category}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {study.title}
                  </h3>
                  <p className="mt-4 min-h-24 text-base leading-7 text-slate-400">
                    {study.summary}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                        Result
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        {study.result}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-sky-400 transition group-hover:text-sky-300">
                      Read case study
                      <ArrowIcon />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 border-y border-white/10 bg-slate-900/50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              How I work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Thoughtful engineering with a bias toward execution.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-7"
              >
                <span className="font-mono text-sm text-sky-400">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="scroll-mt-24 py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Technical leadership
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Raising the quality and capability of the team.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Mentorship, architecture, and clear technical communication help
              teams move faster without sacrificing reliability.
            </p>
          </div>

          <div className="grid gap-4">
            {leadership.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-[8rem_1fr] sm:items-center"
              >
                <p className="text-2xl font-semibold tracking-tight text-sky-300">
                  {item.metric}
                </p>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 pb-12 pt-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/60 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something reliable and meaningful.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Open to discussing distributed systems, cloud architecture,
              platform engineering, and technical leadership opportunities.
            </p>
            <a
              href="https://github.com/zippyzap2"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
            >
              Connect on GitHub
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Engineering Portfolio</p>
        <p>Distributed systems, cloud architecture, and technical leadership.</p>
      </footer>
    </main>
  );
}
