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

  function scrollCardToTop() {
    if (!cardRef.current) {
      return;
    }

    const top = cardRef.current.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="space-y-6">
      <div className="hidden md:block">
        <div className="relative px-4 pt-2">
          <div className="absolute left-8 right-8 top-6 h-px bg-line/70" />
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
                  onClick={() => setSelectedIndex(index)}
                  className="relative z-10 flex flex-col items-center gap-3 text-center"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border text-base font-medium transition ${
                      isSelected
                        ? "border-accent bg-accent text-white shadow-[0_12px_24px_rgba(63,111,107,0.2)]"
                        : "border-line/80 bg-canvas text-ink"
                    }`}
                  >
                    {phase.phase}
                  </span>
                  <span className={`text-base font-medium ${isSelected ? "text-ink" : "text-mist"}`}>
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
              onClick={() => setSelectedIndex(index)}
              className={`flex w-full items-center gap-4 rounded-[1.35rem] px-4 py-4 text-left transition ${
                isSelected ? "bg-paper/82 shadow-[0_12px_28px_rgba(31,41,51,0.06)]" : "bg-transparent"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-base font-medium transition ${
                  isSelected ? "border-accent bg-accent text-white" : "border-line/80 bg-canvas text-ink"
                }`}
              >
                {phase.phase}
              </span>
              <span className={`text-base font-medium ${isSelected ? "text-ink" : "text-mist"}`}>
                {phase.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={cardRef}
        className="rounded-[1.6rem] bg-canvas/78 px-5 py-5 shadow-[0_16px_38px_rgba(31,41,51,0.05)] sm:px-6 sm:py-6"
      >
        <p className="text-base font-medium uppercase tracking-[0.12em] text-accent">
          Phase {selectedIndex + 1} — {selectedPhase.detailTitle ?? selectedPhase.title}
        </p>
        <p className="mt-3 max-w-3xl text-base leading-8 text-mist">{selectedPhase.description}</p>

        <div className="mt-5 space-y-3">
          <p className="text-base font-medium text-ink">What changed</p>
          <ul className="grid gap-3 text-base leading-8 text-ink">
            {selectedPhase.changes.map((item) => (
              <li key={item} className="relative pl-4">
                <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-accent/80" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {selectedPhase.decision ? (
          <div className="mt-5">
            <p className="text-base font-medium text-ink">Important decision</p>
            <p className="mt-2 max-w-3xl text-base leading-8 text-mist">
              {selectedPhase.decision}
            </p>
          </div>
        ) : null}

        <div className="mt-5">
          <p className="text-base font-medium text-ink">What I shaped</p>
          <p className="mt-2 max-w-3xl text-base leading-8 text-mist">{selectedPhase.shaped}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/50 pt-5">
          <button
            type="button"
            onClick={() => {
              setSelectedIndex((index) => Math.max(0, index - 1));
              scrollCardToTop();
            }}
            disabled={!hasPrevious}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-base font-medium transition ${
              hasPrevious
                ? "bg-paper/82 text-ink shadow-[0_10px_24px_rgba(31,41,51,0.05)] hover:text-accent"
                : "cursor-not-allowed bg-paper/42 text-mist/60"
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
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-base font-medium transition ${
              hasNext
                ? "bg-accent text-white shadow-[0_12px_24px_rgba(63,111,107,0.18)] hover:bg-accent/90"
                : "cursor-not-allowed bg-paper/42 text-mist/60"
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
