import type { ReactNode } from "react";
import { InputStoryExplorer, PlatformEcosystem } from "@/components/clarity-interactions";
import { DownloadOpenLink } from "@/components/download-open-link";
import { FrameNav } from "@/components/frame-nav";
import { PortfolioFrame } from "@/components/portfolio-frame";
import { ReferenceWorkbenchVisual } from "@/components/reference-workbench-visual";
import { portfolio, type Portfolio } from "@/data/portfolio";

type ExperienceRole = Portfolio["experience"]["roles"][number];
type CaseStudy = Portfolio["selectedWork"][number];
type AdditionalWorkGroup = Portfolio["additionalWork"]["groups"][number];

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  download?: boolean;
  external?: boolean;
};

const caseOrder = [
  "multi-region-loyalty-programme",
  "store-redemption-platform",
  "custom-workflows-platform",
  "large-community-operations"
];

function ActionLink({
  href,
  children,
  variant = "secondary",
  download = false,
  external = false
}: ActionLinkProps) {
  const classNameByVariant = {
    primary:
      "inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-semibold text-canvas transition duration-200 hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:px-5",
    secondary:
      "inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-surface px-4 py-3 text-sm font-semibold text-ink transition duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:px-5",
    quiet:
      "inline-flex min-h-11 items-center justify-center rounded-full px-2 py-3 text-sm font-semibold text-ink underline decoration-line underline-offset-8 transition duration-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
  };

  const className = classNameByVariant[variant];

  if (download) {
    return (
      <DownloadOpenLink href={href} className={className} download={download}>
        {children}
      </DownloadOpenLink>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function MiniIcon({ type }: { type: string }) {
  const className = "h-5 w-5 stroke-current";

  if (type === "cart") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <path d="M5 5h2l2 11h9l2-8H8" />
        <circle cx="10" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </svg>
    );
  }

  if (type === "trophy") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
        <path d="M8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3M12 13v4M8 20h8M9 17h6" />
      </svg>
    );
  }

  if (type === "file") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <path d="M7 3.5h7l3 3V20H7z" />
        <path d="M14 3.5V7h3M9.5 11h5M9.5 14h5M9.5 17h3" />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <path d="M10 13a4 4 0 0 0 5.5.3l2-2a4 4 0 0 0-5.6-5.6l-1.1 1.1" />
        <path d="M14 11a4 4 0 0 0-5.5-.3l-2 2a4 4 0 0 0 5.6 5.6l1.1-1.1" />
      </svg>
    );
  }

  if (type === "sliders") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="9" cy="7" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="11" cy="17" r="2" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="m9 9 6 6M15 9l-6 6" />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
        <path d="M12 3v5M12 16v5M4 12h5M15 12h5M7 7l2.5 2.5M14.5 14.5 17 17M17 7l-2.5 2.5M9.5 14.5 7 17" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" strokeWidth="1.8">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function WorkbenchHero() {
  const { person } = portfolio;
  const storyMap = new Map<string, Portfolio["person"]["workbenchStories"][number]>(
    person.workbenchStories.map((story) => [story.label, story])
  );
  const heroAboutFacts = (
    person.glance as ReadonlyArray<{ label: string; value: string }>
  ).filter((fact) => fact.label !== "Current role");
  const heroAboutLinks = [
    {
      label: "LinkedIn",
      href: person.linkedin,
      external: true
    },
    {
      label: "Resume",
      href: person.resumeHref,
      download: true
    },
    {
      label: "Email me",
      href: `mailto:${person.email}`
    }
  ];
  const heroInputs = person.workbenchArtifacts.map((artifact) => {
    const label = artifact.label;
    const story = storyMap.get(label);

    return {
      label,
      description: artifact.description,
      href: "#work",
      targetStoryId: story?.id ?? slugify(label),
      lane: artifact.lane,
      storyTitle: story?.title,
      storyBody: story?.body,
      storyPreview: story?.preview,
      storyPoints: story?.points
    };
  });

  return (
    <section id="top" className="reference-hero scroll-mt-28 px-5 pb-5 pt-6 sm:px-9 sm:pb-7 lg:px-10 lg:pt-8">
      <ReferenceWorkbenchVisual
        inputs={heroInputs}
        eyebrow={person.title}
        title={person.intro}
        supportText={person.heroLines[0]}
        technicalText={person.heroTechnical}
        proofLine={person.heroProof}
        primaryAction={{
          label: "View flagship case",
          href: `/work/${caseOrder[0]}`
        }}
        secondaryAction={{
          label: "View resume",
          href: person.resumeHref
        }}
        aboutText={person.heroLines[1]}
        aboutFacts={heroAboutFacts}
        aboutName={person.name}
        aboutPortrait={person.portrait}
        aboutLinks={heroAboutLinks}
        className="border-0 bg-transparent p-0 shadow-none sm:p-0 lg:p-0"
      />
    </section>
  );
}

function SectionIntro({
  label,
  title,
  description,
  action
}: {
  label: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-accent">{label}</p>
        <h2 className="mt-3 text-balance font-serif text-[clamp(1.65rem,3vw,2.4rem)] leading-tight tracking-[-0.03em] text-ink">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

function SystemCaseCard({ project, index }: { project: CaseStudy; index: number }) {
  const icons = ["link", "cart", "sliders", "file"];
  const icon = icons[index] ?? "spark";
  const statuses = ["Account lifecycle", "Production correction", "Production exposure", "QA scale validation"];
  const status = statuses[index] ?? "Evidence-led case";
  const isLeadCase = index === 0;

  return (
    <a
      href={`/work/${project.id}`}
      className={`group flex min-h-[18rem] flex-col rounded-[14px] border border-line bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
        isLeadCase ? "lg:col-span-3 lg:min-h-[15rem] lg:p-8" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center text-accent">
          <MiniIcon type={icon} />
        </span>
        <span className="rounded-lg border border-line bg-canvas px-3 py-1.5 text-xs font-semibold text-muted">
          {status}
        </span>
      </div>
      <div className={`mt-8 space-y-3 ${isLeadCase ? "lg:grid lg:grid-cols-[0.56fr_0.44fr] lg:gap-12 lg:space-y-0" : ""}`}>
        <div>
        <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">
          {project.caseTitle}
        </h3>
        <p className={`${isLeadCase ? "max-w-2xl" : "max-w-sm"} mt-3 text-pretty text-base leading-7 text-muted`}>{project.summary}</p>
        </div>
        <div className="border-t border-line pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Evidence</p>
          <p className="mt-2 text-sm leading-6 text-ink">{project.outcomeLine}</p>
        </div>
      </div>

      <span className="mt-auto pt-8 text-sm font-semibold text-ink">
        View case study <span className="inline-block transition group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
      </span>
    </a>
  );
}

function ProductMemorySection({ sectionLabel }: { sectionLabel: string }) {
  const { productMemory } = portfolio;

  return (
    <section id="product-memory" className="scroll-mt-28 border-t border-line px-5 py-12 sm:px-9 lg:px-10">
      <div className="overflow-hidden rounded-[18px] bg-ink text-canvas">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.58fr_0.42fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold text-yellow">{sectionLabel}</p>
            <h2 className="mt-4 max-w-4xl text-balance font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.035em]">
              {productMemory.title}
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-canvas/80">
              {productMemory.description}
            </p>
          </div>
          <div className="border-t border-canvas/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-yellow">Why I built it</p>
            <p className="mt-4 text-base leading-8 text-canvas/80">{productMemory.problem}</p>
          </div>
        </div>

        <div className="border-t border-canvas/20 px-6 sm:px-8 lg:px-10">
          {productMemory.memoryLayers.map((layer, index) => (
            <article
              key={layer.label}
              className="grid gap-3 border-b border-canvas/15 py-6 last:border-b-0 md:grid-cols-[5rem_0.34fr_0.66fr] md:items-start"
            >
              <span className="text-sm font-semibold text-yellow">0{index + 1}</span>
              <h3 className="text-lg font-semibold text-canvas">{layer.label}</h3>
              <p className="text-sm leading-7 text-canvas/75">{layer.detail}</p>
            </article>
          ))}
        </div>

        <div className="grid border-t border-canvas/20 lg:grid-cols-[0.44fr_0.56fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-yellow">Used across</p>
            <ul className="mt-5 grid gap-3">
              {productMemory.uses.map((use) => (
                <li key={use} className="flex gap-3 text-sm leading-6 text-canvas/80">
                  <span aria-hidden="true" className="text-yellow">-&gt;</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-canvas/20 bg-canvas/[0.05] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-yellow">{productMemory.yamlStory.title}</p>
            <p className="mt-5 text-base leading-8 text-canvas/80">{productMemory.yamlStory.body}</p>
            <p className="mt-6 border-t border-canvas/20 pt-5 text-sm leading-7 text-canvas/60">
              {productMemory.evidenceLimit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdditionalWorkGroupColumn({ group }: { group: AdditionalWorkGroup }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-5">
      <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
      <ul className="mt-5 grid gap-3">
        {group.items.map((item) => (
          <li key={item} className="grid grid-cols-[0.6rem_1fr] gap-3 text-sm leading-6 text-muted">
            <span className="mt-2 h-2 w-2 rounded-full bg-coral" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceRow({ role }: { role: ExperienceRole }) {
  return (
    <article className="grid gap-3 border-t border-line py-5 md:grid-cols-[0.32fr_0.68fr]">
      <div>
        <p className="text-sm font-semibold text-accent">{role.period}</p>
        <h3 className="mt-2 text-xl font-semibold text-ink">{role.company}</h3>
      </div>
      <div>
        <p className="text-base font-semibold text-ink">{role.role}</p>
        <p className="mt-2 max-w-2xl text-base leading-7 text-muted">{role.summary}</p>
      </div>
    </article>
  );
}

function ContactPanel() {
  const { person } = portfolio;

  return (
    <section id="contact" className="scroll-mt-28 px-5 py-20 sm:px-7 lg:px-9">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-ink p-6 text-canvas sm:p-8 lg:grid-cols-[0.62fr_0.38fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold text-yellow">Contact</p>
          <h2 className="mt-4 max-w-3xl text-balance text-[clamp(2.2rem,5vw,4.6rem)] font-semibold leading-none tracking-[-0.035em]">
            {"Let's talk about the product, platform or integration problem you're trying to untangle."}
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-3">
          <a className="inline-flex min-h-11 items-center text-base font-semibold underline decoration-accent underline-offset-8" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <a className="inline-flex min-h-11 items-center text-base font-semibold underline decoration-accent underline-offset-8" href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <DownloadOpenLink
            className="inline-flex min-h-11 items-center text-base font-semibold underline decoration-accent underline-offset-8"
            href={person.resumeHref}
            download
          >
            Resume
          </DownloadOpenLink>
        </div>
      </div>
    </section>
  );
}

function PortfolioFooter() {
  const { person } = portfolio;

  return (
    <footer className="border-t border-line px-5 py-8 text-sm text-muted sm:px-9 lg:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-3 sm:gap-5">
          <a href={`mailto:${person.email}`} className="inline-flex min-h-11 items-center transition hover:text-ink">
            Email
          </a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center transition hover:text-ink">
            LinkedIn
          </a>
          <DownloadOpenLink href={person.resumeHref} download className="inline-flex min-h-11 items-center transition hover:text-ink">
            Resume
          </DownloadOpenLink>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const {
    experience,
    platforms,
    additionalWork,
    selectedWork,
    person
  } = portfolio;

  const orderedWork = caseOrder
    .map((id) => selectedWork.find((project) => project.id === id))
    .filter((project): project is CaseStudy => Boolean(project));

  return (
    <div className="min-h-screen bg-[#eef1eb] px-3 py-3 text-ink sm:px-5 sm:py-5">
      <PortfolioFrame>
        <FrameNav />
        <main id="main-content">
          <WorkbenchHero />

          <section id="systems" className="scroll-mt-28 border-t border-line px-5 py-12 sm:px-9 lg:px-10">
            <SectionIntro
              label="Selected work"
              title="One client lifecycle and three platform systems."
              description="The lead case shows how the pieces operated together. The next three go deeper on the product systems underneath it."
              action={
                <a
                  href="#supporting-work"
                  className="inline-flex min-h-11 items-center justify-center rounded-[12px] border border-line bg-surface px-5 text-sm font-semibold text-ink transition hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  Other work
                </a>
              }
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {orderedWork.map((project, index) => (
                <SystemCaseCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>

          <section id="work" className="scroll-mt-28 border-t border-line px-5 py-12 sm:px-9 lg:px-10">
            <SectionIntro
              label="Capabilities"
              title="I make the rules, failures and handoffs easier to see."
              description={`${person.heroLines[1]} Below is the practical detail behind the system map: APIs, webhooks, workflows, Store, gamification and AI product operations.`}
            />
            <div className="mt-8">
              <InputStoryExplorer stories={person.workbenchStories} />
            </div>
          </section>

          <ProductMemorySection sectionLabel="AI practice" />

        <section id="ecosystem" className="scroll-mt-28 border-t-2 border-accent/45 px-5 py-12 sm:px-9 lg:px-10">
          <SectionIntro
            label="Systems I’ve worked with"
            title={platforms.title}
            description={platforms.description}
          />
          <div className="mt-8">
            <PlatformEcosystem groups={platforms.groups} />
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 border-t border-line px-5 py-12 sm:px-9 lg:px-10">
          <SectionIntro
            label="Experience"
            title="A short career anchor for context."
            description={experience.description}
            action={
              <ActionLink href={person.resumeHref} download>
                Resume
              </ActionLink>
            }
          />
          <div className="mt-8">
            {experience.roles.map((role) => (
              <ExperienceRow key={`${role.company}-${role.role}`} role={role} />
            ))}
          </div>
        </section>

        <section id="supporting-work" className="border-t border-line px-5 py-12 sm:px-9 lg:px-10">
          <SectionIntro
            label="Other platform work"
            title={additionalWork.title}
            description={additionalWork.description}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {additionalWork.groups.map((group) => (
              <AdditionalWorkGroupColumn key={group.title} group={group} />
            ))}
          </div>
        </section>

          <ContactPanel />
        </main>

        <PortfolioFooter />
      </PortfolioFrame>
    </div>
  );
}
