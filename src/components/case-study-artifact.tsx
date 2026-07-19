import type { Portfolio } from "@/data/portfolio";

type CaseStudy = Portfolio["selectedWork"][number];

export function CaseStudyArtifact({ artifact }: { artifact: CaseStudy["artifact"] }) {
  return (
    <figure className="border-y border-line py-7">
      <figcaption>
        <p className="text-sm font-semibold text-accent">Sanitized product artifact</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink">{artifact.title}</h3>
        <p className="mt-2 max-w-3xl text-base leading-7 text-muted">{artifact.caption}</p>
      </figcaption>

      <ol className="mt-6 grid gap-3 md:grid-cols-4">
        {artifact.stages.map((stage, index) => (
          <li key={stage.label} className="border-t border-line pt-4 md:border-l md:border-t-0 md:pl-4">
            <span className="text-sm font-semibold text-accent">{index + 1}</span>
            <strong className="mt-2 block text-ink">{stage.label}</strong>
            <span className="mt-1 block text-sm leading-6 text-muted">{stage.detail}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-4 text-sm leading-6 text-muted md:grid-cols-2">
        <p>
          <strong className="text-ink">My contribution:</strong> {artifact.contribution}
        </p>
        <p>
          <strong className="text-ink">Observed result or limit:</strong> {artifact.evidence}
        </p>
      </div>
    </figure>
  );
}
