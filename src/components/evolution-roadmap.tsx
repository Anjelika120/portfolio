"use client";

import { useRef, useState } from "react";

type RoadmapPhase = {
  phase: string;
  title: string;
  detailTitle?: string;
  description: string;
  changes: readonly string[];
  decision?: string;
  shaped: string;
};

type EvolutionRoadmapProps = {
  phases: readonly RoadmapPhase[];
};

export function EvolutionRoadmap({ phases }: EvolutionRoadmapProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPhase = phases[selectedIndex];
  const hasPrevious = selectedIndex > 0;
  const hasNext = selectedIndex < phases.length - 1;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const progressValue = phases.length > 1 ? (selectedIndex / (phases.length - 1)) * 100 : 100;

  function scrollCardToTop() {
    if (!cardRef.current) {
      return;
    }

    const top = cardRef.current.getBoundingClientRect().top + window.scrollY - 120;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <div className="space-y-6">
      <div className="hidden md:block">
        <div className="relative px-4 pt-2">
          <div className="absolute left-8 right-8 top-6 h-px bg-line" />
          <div
            aria-label="Roadmap progress"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={Math.round(progressValue)}
            role="progressbar"
            className="absolute left-8 top-6 h-px bg-accent transition-all duration-300 ease-out"
            style={{ width: `calc((100% - 4rem) * ${progressValue / 100})` }}
          />
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${phases.length}, minmax(0, 1fr))` }}
          >
            {phases.map((phase, index) => {
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={`${phase.phase}-${phase.title}`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedIndex(index)}
                  className="relative z-10 flex flex-col items-center gap-3 rounded-lg text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border text-base font-semibold transition ${
                      isSelected
                        ? "border-accent bg-accent text-white"
                        : "border-line bg-surface text-ink hover:border-accent"
                    }`}
                  >
                    {phase.phase}
                  </span>
                  <span className={`text-sm font-semibold ${isSelected ? "text-ink" : "text-muted"}`}>
                    {phase.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        {phases.map((phase, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={`${phase.phase}-${phase.title}`}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedIndex(index)}
              className={`flex w-full items-center gap-4 rounded-lg px-4 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                isSelected ? "border border-accent bg-accentSoft" : "border border-line bg-surface"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-base font-semibold transition ${
                  isSelected ? "border-accent bg-accent text-white" : "border-line bg-canvas text-ink"
                }`}
              >
                {phase.phase}
              </span>
              <span className={`text-base font-semibold ${isSelected ? "text-ink" : "text-muted"}`}>
                {phase.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={cardRef}
        className="rounded-lg border border-line bg-canvas px-5 py-5 sm:px-6 sm:py-6"
      >
        <p className="text-sm font-semibold text-accent">
          Phase {selectedIndex + 1}: {selectedPhase.detailTitle ?? selectedPhase.title}
        </p>
        <div key={`${selectedPhase.phase}-${selectedPhase.title}`} className="motion-safe:animate-[phaseIn_260ms_var(--ease-out-quart)]">
          <p className="mt-3 max-w-3xl text-base leading-8 text-muted">{selectedPhase.description}</p>

          <div className="mt-5 space-y-3">
            <p className="text-base font-semibold text-ink">What changed</p>
            <ul className="grid gap-3 text-base leading-8 text-ink">
              {selectedPhase.changes.map((item) => (
                <li key={item} className="rounded-md bg-surface px-4 py-3 text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
          </div>

          {selectedPhase.decision ? (
            <div className="mt-5 rounded-lg bg-yellowSoft p-4">
              <p className="text-sm font-semibold text-ink">Important decision</p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-ink/82">
                {selectedPhase.decision}
              </p>
            </div>
          ) : null}

          <div className="mt-5">
            <p className="text-base font-semibold text-ink">What I shaped</p>
            <p className="mt-2 max-w-3xl text-base leading-8 text-muted">{selectedPhase.shaped}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/50 pt-5">
          <button
            type="button"
            onClick={() => {
              setSelectedIndex((index) => Math.max(0, index - 1));
              scrollCardToTop();
            }}
            disabled={!hasPrevious}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
              hasPrevious
                ? "border border-line bg-surface text-ink hover:border-accent hover:text-accent"
                : "cursor-not-allowed border border-line bg-surface text-muted/60"
            }`}
          >
            <span aria-hidden="true">←</span>
            Previous phase
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedIndex((index) => Math.min(phases.length - 1, index + 1));
              scrollCardToTop();
            }}
            disabled={!hasNext}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
              hasNext
                ? "bg-accent text-white hover:bg-ink"
                : "cursor-not-allowed bg-surface text-muted/60"
            }`}
          >
            Next phase
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
