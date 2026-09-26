import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Reveal } from "@/components/reveal";
import { TransitionLink } from "@/components/page-transition";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: `${study.title} | ${site.name}`,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article",
    },
  };
}

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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const nextStudy =
    caseStudies[(currentIndex + 1) % caseStudies.length] ?? caseStudies[0];

  return (
    <main className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          >
            <span className="font-mono text-sky-400">{"//"}</span>
            {site.name}
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <Link className="transition hover:text-white" href="/#impact">
              Selected work
            </Link>
            <Link className="transition hover:text-white" href="/#approach">
              Approach
            </Link>
            <Link className="transition hover:text-white" href="/#contact">
              Contact
            </Link>
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
            href={`mailto:${site.email}`}
            className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300 transition hover:border-sky-300/60 hover:bg-sky-400/20 hover:text-white"
          >
            Email me
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pt-14">
          <Link
            href="/#impact"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to selected work
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              {study.category}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-200 sm:text-2xl">
              {study.tagline}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
              {study.summary}
            </p>
          </div>

          <dl className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Role", value: study.role },
              { label: "Engagement", value: study.timeline },
              { label: "Context", value: study.sector },
              { label: "Focus", value: study.focus },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`px-5 py-6 ${
                  index > 0 ? "border-t border-white/10 sm:border-l" : ""
                } ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-3 text-sm font-semibold leading-6 text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Discuss this work
              <ArrowIcon />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              View résumé
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              The challenge
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Making the platform useful, secure, and operable from day one.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-300">{study.challenge}</p>
            <div className="mt-8 grid gap-3">
              {study.constraints.map((constraint, index) => (
                <Reveal key={constraint} delay={index * 70}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <span className="font-mono text-sm text-sky-400">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-400">{constraint}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              End-to-end architecture
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How the platform connects from user action to operational control.
            </h2>
          </div>

          <ArchitectureDiagram steps={study.architecture} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            How I built it
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Delivery work from foundation to production operations.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {study.delivery.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <span className="font-mono text-sm text-sky-400">
                0{index + 1}
              </span>
              <h3 className="mt-7 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              What changed
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Outcomes that made the platform easier to trust and operate.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {study.outcomes.map((outcome, index) => (
              <Reveal key={outcome.title} delay={index * 80} className="h-full">
                <article className="h-full rounded-2xl border border-sky-400/20 bg-sky-400/[0.035] p-7">
                <h3 className="text-xl font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {outcome.description}
                </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Technology stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Tools used across the platform.
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {study.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Lessons
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              What I would carry into the next platform.
            </h2>
          </div>
          <div className="grid gap-4">
            {study.lessons.map((lesson) => (
              <p
                key={lesson}
                className="border-l border-sky-400/40 pl-5 text-base leading-8 text-slate-300"
              >
                {lesson}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/60 p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Next case study
          </p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white">
                {nextStudy.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {nextStudy.summary}
              </p>
            </div>
            <TransitionLink
              href={`/work/${nextStudy.slug}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
            >
              Read next case study
              <ArrowIcon />
            </TransitionLink>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{site.name}</p>
        <p>Cloud platform engineering, GenAI enablement, and reliable delivery.</p>
      </footer>
    </main>
  );
}