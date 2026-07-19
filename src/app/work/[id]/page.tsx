import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-study-detail";
import { FrameNav } from "@/components/frame-nav";
import { PortfolioFrame } from "@/components/portfolio-frame";
import { portfolio, type Portfolio } from "@/data/portfolio";

type CaseStudy = Portfolio["selectedWork"][number];
type WorkPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const caseOrder = [
  "multi-region-loyalty-programme",
  "store-redemption-platform",
  "custom-workflows-platform",
  "large-community-operations"
] as const;

const orderedWork = caseOrder
  .map((id) => portfolio.selectedWork.find((project) => project.id === id))
  .filter((project): project is CaseStudy => Boolean(project));

function findProject(id: string) {
  const project = portfolio.selectedWork.find((item) => item.id === id);
  const orderedIndex = orderedWork.findIndex((item) => item.id === id);
  const fallbackIndex = portfolio.selectedWork.findIndex((item) => item.id === id);

  return {
    project,
    index: orderedIndex >= 0 ? orderedIndex : fallbackIndex
  };
}

export function generateStaticParams() {
  return portfolio.selectedWork.map((project) => ({
    id: project.id
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { id } = await params;
  const { project } = findProject(id);

  if (!project) {
    return {};
  }

  return {
    title: `${project.caseTitle} | ${portfolio.person.name}`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.id}`
    }
  };
}

export default async function WorkCasePage({ params }: WorkPageProps) {
  const { id } = await params;
  const { project, index } = findProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eef1eb] px-3 py-3 text-ink sm:px-5 sm:py-5">
      <PortfolioFrame>
        <FrameNav />
        <section id="top" className="px-5 py-10 sm:px-9 lg:px-10">
          <a
            href="/#systems"
            className="inline-flex min-h-10 items-center rounded-[12px] border border-line bg-surface px-4 text-sm font-semibold text-ink transition hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <span aria-hidden="true" className="mr-2">{"<-"}</span>
            Back to selected systems
          </a>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-accent">{project.label}</p>
              <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em] text-ink">
                {project.caseTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{project.summary}</p>
            </div>
            <div className="rounded-lg border border-line bg-surface p-5">
              <p className="text-xs font-semibold text-accent">Snapshot</p>
              <div className="mt-4 grid gap-3">
                {project.railTags.map((tag) => (
                  <span key={tag} className="rounded-md bg-canvas px-3 py-2 text-sm font-semibold text-ink">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-line">
            <CaseStudyDetail project={project} index={index} />
          </div>
        </section>
      </PortfolioFrame>
    </main>
  );
}
