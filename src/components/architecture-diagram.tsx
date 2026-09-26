import { Reveal } from "@/components/reveal";

type ArchitectureStep = {
  label: string;
  detail: string;
};

export function ArchitectureDiagram({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <div className="mt-12">
      <div
        aria-label={`Architecture flow with ${steps.length} stages`}
        className="diagram-scroll -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
      >
        <div className="flex min-w-max items-stretch">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-stretch">
              <Reveal delay={index * 60} className="diagram-node w-64 shrink-0 sm:w-72">
                <article className="h-full rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.32)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-sky-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.65)]" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-white">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.detail}
                </p>
                </article>
              </Reveal>

              {index < steps.length - 1 ? (
                <div className="flex w-12 shrink-0 items-center justify-center">
                  <span className="h-px w-4 bg-sky-400/30" />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 text-sky-400/70"
                  >
                    <path
                      d="M5 10h10m-4-4 4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-1 text-xs text-slate-500 lg:hidden">
        Scroll horizontally to follow the complete architecture flow.
      </p>
    </div>
  );
}