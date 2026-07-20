import type { Portfolio } from "@/data/portfolio";

type CaseStudy = Portfolio["selectedWork"][number];

const actionClassName =
  "inline-flex min-h-11 items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export function CaseStudyFooter({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <nav aria-label="Case study actions" className="grid gap-3 border-t border-line py-8 sm:grid-cols-3">
      <a className={actionClassName} href={`/work/${nextProject.id}`}>
        <span>Next case: {nextProject.title}</span>
        <span aria-hidden="true">-&gt;</span>
      </a>
      <a className={actionClassName} href="/#systems">
        <span>Back to selected work</span>
        <span aria-hidden="true">-&gt;</span>
      </a>
      <a className={actionClassName} href="mailto:anjelikatan99@gmail.com">
        <span>Discuss this work</span>
        <span aria-hidden="true">-&gt;</span>
      </a>
    </nav>
  );
}
