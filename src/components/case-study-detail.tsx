import { EvolutionRoadmap } from "@/components/evolution-roadmap";
import { CaseStudyArtifact } from "@/components/case-study-artifact";
import type { Portfolio } from "@/data/portfolio";

type CaseStudy = Portfolio["selectedWork"][number];
type DetailSectionProps = {
  heading: string;
  body: string;
  items: readonly string[];
  layout: string;
};

function FeatureDetailSection({ heading, body, items, layout }: DetailSectionProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold text-accent">{heading}</h3>
      {body ? <p className="max-w-3xl text-base leading-8 text-muted">{body}</p> : null}
      {items.length > 0 ? (
        <ul className={`grid gap-3 ${layout === "compact-bullets" ? "md:grid-cols-2" : ""}`}>
          {items.map((item) => (
            <li key={item} className="rounded-md bg-canvas px-4 py-3 text-sm leading-6 text-ink">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export function CaseStudyDetail({ project, index }: { project: CaseStudy; index: number }) {
  const leadSections =
    project.evolutionPhases.length > 0
      ? project.detailSections.slice(0, 2)
      : project.detailSections;
  const trailingSections =
    project.evolutionPhases.length > 0 ? project.detailSections.slice(2) : [];

  return (
    <article id={project.id} className="scroll-mt-28 py-10">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold text-accent">Case Study {String(index + 1).padStart(2, "0")}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-ink">
            {project.caseTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{project.detail}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.railTags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink">
                {tag}
              </span>
            ))}
          </div>
          {project.impactLine ? (
            <div className="mt-6 rounded-lg bg-accentSoft p-4">
              <p className="text-xs font-semibold text-accent">{project.impactLabel}</p>
              <p className="mt-2 text-sm leading-6 text-ink">{project.impactLine}</p>
            </div>
          ) : null}
        </aside>

        <div className="space-y-8 rounded-lg border border-line bg-surface p-5 sm:p-7">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["Problem", project.problemLine],
              ["Decision", project.decisionLine],
              ["Observed result", project.outcomeLine]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-canvas p-4">
                <p className="text-xs font-semibold text-accent">{label}</p>
                <p className="mt-2 text-sm leading-6 text-ink">{value}</p>
              </div>
            ))}
          </div>

          <CaseStudyArtifact artifact={project.artifact} />

          {leadSections.map((section) => (
            <FeatureDetailSection
              key={section.heading}
              heading={section.heading}
              body={section.body}
              items={section.items}
              layout={section.layout}
            />
          ))}

          {project.evolutionPhases.length > 0 ? (
            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-accent">How the system evolved</h3>
              <EvolutionRoadmap phases={project.evolutionPhases} />
            </section>
          ) : null}

          {trailingSections.map((section) => (
            <FeatureDetailSection
              key={section.heading}
              heading={section.heading}
              body={section.body}
              items={section.items}
              layout={section.layout}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
