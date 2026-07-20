import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-study-detail";
import { CaseStudyFooter } from "@/components/case-study-footer";
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

function findNextProject(id: string) {
  const currentIndex = orderedWork.findIndex((project) => project.id === id);

  return orderedWork[(currentIndex + 1) % orderedWork.length] ?? orderedWork[0];
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

  const title = `${project.caseTitle} | ${portfolio.person.name}`;
  const description = project.summary;
  const caseUrl = new URL(`/work/${project.id}`, portfolio.seo.siteUrl).toString();
  const socialImageUrl = new URL(`/work/${project.id}/opengraph-image`, portfolio.seo.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: caseUrl
    },
    openGraph: {
      title,
      description,
      url: caseUrl,
      siteName: portfolio.person.name,
      locale: "en_AU",
      type: "article",
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.caseTitle} case study preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImageUrl]
    }
  };
}

export default async function WorkCasePage({ params }: WorkPageProps) {
  const { id } = await params;
  const { project, index } = findProject(id);

  if (!project) {
    notFound();
  }

  const nextProject = findNextProject(project.id);

  return (
    <div className="min-h-screen bg-[#eef1eb] px-3 py-3 text-ink sm:px-5 sm:py-5">
      <PortfolioFrame>
        <FrameNav isHomePage={false} />
        <main id="main-content">
          <section id="top" className="px-5 py-10 sm:px-9 lg:px-10">
            <a
              href="/#systems"
              className="inline-flex min-h-11 items-center rounded-[12px] border border-line bg-surface px-4 text-sm font-semibold text-ink transition hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
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
              <dl className="divide-y divide-line border-y border-line">
                {[
                  ["My role", project.railNote],
                  ["Scope", project.scope],
                  ["Team", project.team],
                  ["Delivery", project.delivery],
                  ["Evidence type", project.impactLabel],
                  ["Observed result", project.impactLine]
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-1 py-3 sm:grid-cols-[7rem_1fr] lg:grid-cols-1">
                    <dt className="text-xs font-semibold text-accent">{label}</dt>
                    <dd className="text-sm leading-6 text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 border-t border-line">
              <CaseStudyDetail project={project} index={index} />
            </div>

            <CaseStudyFooter nextProject={nextProject} />
          </section>
        </main>
      </PortfolioFrame>
    </div>
  );
}
