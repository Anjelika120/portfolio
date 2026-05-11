import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { DownloadOpenLink } from "@/components/download-open-link";
import { EvolutionRoadmap } from "@/components/evolution-roadmap";
import { portfolio, type Portfolio } from "@/data/portfolio";
import hubspotLogo from "../../public/logo/HubSpot-Logo.png";
import trustpilotLogo from "../../public/logo/Trustpilot_Logo.png";
import facebookLogo from "../../public/logo/facebook.png";
import instagramLogo from "../../public/logo/instagram.webp";
import linkedinLogo from "../../public/logo/linkedin.png";
import salesforceLogo from "../../public/logo/salesforce.png";
import snowflakeLogo from "../../public/logo/snowflake.png";
import stripeLogo from "../../public/logo/stripe.png";
import woocommerceLogo from "../../public/logo/woocommerce-logo.png";
import xLogo from "../../public/logo/x.avif";
import youtubeLogo from "../../public/logo/Youtube_logo.png";

type ExperienceRole = Portfolio["experience"]["roles"][number];
type PlatformGroup = Portfolio["platforms"]["groups"][number];
type Capability = Portfolio["whatIWorkOn"]["areas"][number];
type CaseStudy = Portfolio["selectedWork"][number];
type AdditionalWorkGroup = Portfolio["additionalWork"]["groups"][number];

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
};

type SectionLink = {
  href: string;
  label: string;
  download?: boolean;
};

type PlatformLogoConfig = {
  alt: string;
  src: StaticImageData;
  variant: "wordmark" | "icon";
};

const sectionLinks: SectionLink[] = [
  { href: "#experience", label: "Experience" },
  { href: "#platforms", label: "Platforms" },
  { href: "#what-i-work-on", label: "What I Work On" },
  { href: "#selected-work", label: "Selected Work" },
  { href: "#contact", label: "Contact" }
];

const platformLogoMap: Record<string, PlatformLogoConfig> = {
  HubSpot: {
    alt: "HubSpot logo",
    src: hubspotLogo,
    variant: "wordmark"
  },
  Salesforce: {
    alt: "Salesforce logo",
    src: salesforceLogo,
    variant: "wordmark"
  },
  Snowflake: {
    alt: "Snowflake logo",
    src: snowflakeLogo,
    variant: "wordmark"
  },
  Meta: {
    alt: "Meta logo",
    src: facebookLogo,
    variant: "icon"
  },
  Instagram: {
    alt: "Instagram logo",
    src: instagramLogo,
    variant: "icon"
  },
  LinkedIn: {
    alt: "LinkedIn logo",
    src: linkedinLogo,
    variant: "icon"
  },
  X: {
    alt: "X logo",
    src: xLogo,
    variant: "icon"
  },
  YouTube: {
    alt: "YouTube logo",
    src: youtubeLogo,
    variant: "icon"
  },
  Stripe: {
    alt: "Stripe logo",
    src: stripeLogo,
    variant: "wordmark"
  },
  WooCommerce: {
    alt: "WooCommerce logo",
    src: woocommerceLogo,
    variant: "wordmark"
  },
  Trustpilot: {
    alt: "Trustpilot logo",
    src: trustpilotLogo,
    variant: "wordmark"
  }
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-2.5">
      {eyebrow ? (
        <p className="text-[0.92rem] font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[clamp(1.8rem,2.8vw,1.95rem)] leading-[1.08] tracking-[-0.03em] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[1.125rem] leading-8 text-mist">{description}</p>
      ) : null}
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "outline",
  download = false,
  external = false
}: ActionLinkProps) {
  const className =
    variant === "solid"
      ? "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-[0.98rem] font-medium text-white transition hover:bg-accent/90"
      : "inline-flex items-center justify-center rounded-full border border-line/70 bg-paper/45 px-5 py-3 text-[0.98rem] font-medium text-ink transition hover:border-accent hover:text-accent";

  return (
    download ? (
      <DownloadOpenLink href={href} className={className} download={download}>
        {children}
      </DownloadOpenLink>
    ) : (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    )
  );
}

function ExperienceRow({ role }: { role: ExperienceRole }) {
  return (
    <article className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
      <div className="space-y-1.5">
        <h3 className="text-[clamp(1.25rem,2vw,1.4rem)] font-medium leading-tight text-ink">
          {role.company}
        </h3>
        <p className="text-[1.05rem] leading-7 text-mist">{role.role}</p>
        <p className="pt-1 text-base leading-7 text-mist">{role.summary}</p>
      </div>
      <p className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
        {role.period}
      </p>
    </article>
  );
}

function PlatformGroupColumn({ group }: { group: PlatformGroup }) {
  const isSocialGroup = group.title === "Channels & social";

  return (
    <div className="space-y-4">
      <p className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-mist">
        {group.title}
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
        {group.items.map((item) => {
          const logo = platformLogoMap[item];

          if (!logo) {
            return <span key={item} className="text-[1rem] font-medium text-ink/84">{item}</span>;
          }

          if (isSocialGroup || logo.variant === "icon") {
            return (
              <div key={item} className="flex h-10 w-10 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-8 object-contain"
                  sizes="40px"
                />
              </div>
            );
          }

          return (
            <div key={item} className="flex h-8 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain"
                sizes="(min-width: 1024px) 180px, 140px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CapabilityItem({
  capability,
  index
}: {
  capability: Capability;
  index: number;
}) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-4">
      <span className="pt-1 text-[0.92rem] font-medium tracking-[0.12em] text-accent/85">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="space-y-2.5">
        <h3 className="text-[clamp(1.25rem,2vw,1.4rem)] font-medium leading-tight text-ink">
          {capability.label}
        </h3>
        <p className="max-w-xl text-base leading-7 text-mist">{capability.description}</p>
      </div>
    </article>
  );
}

function AdditionalWorkGroupColumn({ group }: { group: AdditionalWorkGroup }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[clamp(1.25rem,2vw,1.4rem)] font-medium leading-tight text-ink">
        {group.title}
      </h3>
      <ul className="space-y-3">
        {group.items.map((item) => (
          <li key={item} className="relative pl-4 text-base leading-7 text-mist">
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent/70" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyCard({
  project,
  index
}: {
  project: CaseStudy;
  index: number;
}) {
  return (
    <a
      href={`#${project.id}`}
      className="group flex h-full flex-col gap-4 rounded-[1.85rem] border border-white/70 bg-paper/78 p-5 shadow-[0_18px_46px_rgba(31,41,51,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(31,41,51,0.08)] sm:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.92rem] uppercase tracking-[0.16em] text-accent">{project.label}</p>
        <span className="text-[0.92rem] text-mist">0{index + 1}</span>
      </div>

      <div className="space-y-2.5">
        <h3 className="font-serif text-[clamp(1.45rem,2.4vw,1.6rem)] leading-[1.08] tracking-[-0.03em] text-ink">
          {project.title}
        </h3>
        <p className="text-base leading-7 text-mist">{project.summary}</p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.98rem] text-ink/75">
        {project.tags.map((tag) => (
          <span key={tag} className="relative pl-4">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-auto inline-flex text-[0.98rem] font-medium text-accent/90">
        View details
      </span>
    </a>
  );
}

function FeatureDetailSection({
  heading,
  body,
  items,
  layout
}: {
  heading: string;
  body: string;
  items: readonly string[];
  layout: string;
}) {
  return (
    <section className="space-y-2.5">
      <h4 className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
        {heading}
      </h4>
      {body ? <p className="max-w-3xl text-base leading-7 text-mist">{body}</p> : null}
      {items.length > 0 ? (
        <ul
          className={`grid gap-x-8 gap-y-3 text-base leading-7 text-ink ${
            layout === "compact-bullets" ? "md:grid-cols-2" : ""
          }`}
        >
          {items.map((item) => (
            <li key={item} className="relative pl-4">
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent/80" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function FeaturedCaseStudyDetail({
  project,
  index
}: {
  project: CaseStudy;
  index: number;
}) {
  const leadSections =
    project.evolutionPhases.length > 0
      ? project.detailSections.slice(0, 2)
      : project.detailSections;
  const trailingSections =
    project.evolutionPhases.length > 0 ? project.detailSections.slice(2) : [];

  return (
    <article
      id={project.id}
      className="scroll-mt-32 rounded-[2rem] bg-paper px-7 py-7 shadow-[0_22px_64px_rgba(31,41,51,0.08)] sm:px-9 sm:py-9"
    >
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[0.92rem] uppercase tracking-[0.16em] text-accent">
              Case Study 0{index + 1}
            </p>
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2rem)] leading-[1.06] tracking-[-0.03em] text-ink">
              {project.title}
            </h3>
            <p className="text-[1.125rem] leading-8 text-mist">{project.summary}</p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.98rem] text-ink/75">
            {project.railTags.map((tag) => (
              <span key={tag} className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 pt-1">
            {project.scope ? (
              <div>
                <p className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
                  Used for
                </p>
                <p className="mt-2 text-base leading-7 text-ink">{project.scope}</p>
              </div>
            ) : null}
            {project.impactLine ? (
              <div>
                <p className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
                  {project.impactLabel}
                </p>
                <p className="mt-2 text-base leading-7 text-mist">{project.impactLine}</p>
              </div>
            ) : null}
            {project.railNote ? (
              <div>
                <p className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
                  {project.railNoteLabel}
                </p>
                <p className="mt-2 text-base leading-7 text-mist">{project.railNote}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-7">
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
            <section className="space-y-3">
              <h4 className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
                How the system evolved
              </h4>
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

function StandardCaseStudyDetail({
  project,
  index
}: {
  project: CaseStudy;
  index: number;
}) {
  return (
    <article
      id={project.id}
      className="scroll-mt-32 rounded-[1.95rem] bg-paper/84 px-7 py-7 shadow-[0_18px_52px_rgba(31,41,51,0.06)] sm:px-9 sm:py-9"
    >
      <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-9">
        <div className="space-y-3">
          <p className="text-[0.92rem] uppercase tracking-[0.16em] text-accent">
            Case Study 0{index + 1}
          </p>
          <h3 className="font-serif text-[clamp(1.8rem,3vw,2rem)] leading-[1.06] tracking-[-0.03em] text-ink">
            {project.title}
          </h3>
          <p className="text-[1.05rem] leading-7 text-mist">{project.label}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.98rem] text-ink/75">
            {project.tags.map((tag) => (
              <span key={tag} className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="max-w-3xl text-[1.125rem] leading-8 text-ink/90">{project.summary}</p>
          <p className="max-w-3xl text-base leading-7 text-mist">{project.detail}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="relative pl-4 text-base leading-7 text-ink/88">
                <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent/80" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function CaseStudyDetail({
  project,
  index
}: {
  project: CaseStudy;
  index: number;
}) {
  if (project.detailLayout === "feature" && project.detailSections.length > 0) {
    return <FeaturedCaseStudyDetail project={project} index={index} />;
  }

  return <StandardCaseStudyDetail project={project} index={index} />;
}

export default function HomePage() {
  const {
    person,
    experience,
    platforms,
    whatIWorkOn,
    additionalWork,
    selectedWork
  } = portfolio;

  return (
    <main className="min-h-screen bg-canvas bg-grain text-ink">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-2 sm:px-7 lg:px-8">
        <header className="sticky top-0 z-30 mb-8 flex items-center justify-between border-b border-line/35 bg-canvas/72 py-3 backdrop-blur-[6px]">
          <a href="#top" className="font-serif text-[1.45rem] tracking-tight text-ink">
            {person.name}
          </a>
          <nav className="hidden flex-wrap gap-5 text-[0.98rem] text-mist md:flex">
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="transition hover:text-ink"
                download={section.download}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="top" className="scroll-mt-28 pb-16 pt-2">
          <div className="max-w-4xl space-y-6">
            <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-paper/82 shadow-[0_12px_30px_rgba(31,41,51,0.06)]">
              <Image
                src={person.portrait.src}
                alt={person.portrait.alt}
                width={112}
                height={112}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="space-y-3">
              <h1 className="max-w-4xl font-serif text-[clamp(3rem,6vw,3.5rem)] leading-[0.96] tracking-[-0.045em] text-ink">
                {person.name}
              </h1>
              <p className="max-w-3xl text-[clamp(1.25rem,2.3vw,1.5rem)] leading-[1.4] text-mist">
                {person.title}
              </p>
            </div>

            <p className="max-w-3xl text-[1.125rem] leading-8 text-ink/90">{person.intro}</p>

            <div className="flex flex-wrap gap-3">
              <ActionLink href={person.resumeHref} variant="solid" download>
                Download Resume
              </ActionLink>
              <ActionLink href={person.linkedin} external>
                LinkedIn Profile
              </ActionLink>
              <ActionLink href={`mailto:${person.email}`}>Email Me</ActionLink>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Experience"
              title="Experience"
              description={experience.description}
            />
            <ActionLink href={person.resumeHref} download>
              Download Resume
            </ActionLink>
          </div>

          <div className="mt-7 rounded-[1.8rem] bg-paper/76 px-6 py-6 shadow-[0_16px_44px_rgba(31,41,51,0.05)] sm:px-7">
            <div className="space-y-7">
              {experience.roles.map((role) => (
                <ExperienceRow key={`${role.company}-${role.role}`} role={role} />
              ))}
            </div>
          </div>
        </section>

        <section id="platforms" className="scroll-mt-28 py-16">
          <SectionHeading
            eyebrow="Platforms"
            title={platforms.title}
            description={platforms.description}
          />

          <div className="mt-7 rounded-[1.8rem] bg-paper/72 px-6 py-6 shadow-[0_16px_44px_rgba(31,41,51,0.05)] sm:px-7">
            <div className="grid gap-7 lg:grid-cols-3">
              {platforms.groups.map((group) => (
                <PlatformGroupColumn key={group.title} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section id="what-i-work-on" className="scroll-mt-28 py-16">
          <SectionHeading
            eyebrow="What I Work On"
            title="The kinds of problems I solve"
            description={whatIWorkOn.description}
          />
          <p className="mt-5 max-w-3xl text-[1.125rem] leading-8 text-mist">
            {whatIWorkOn.intro}
          </p>

          <div className="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2">
            {whatIWorkOn.areas.map((capability, index) => (
              <CapabilityItem key={capability.label} capability={capability} index={index} />
            ))}
          </div>
        </section>

        <section id="selected-work" className="scroll-mt-28 py-16">
          <SectionHeading
            eyebrow="Selected Work"
            title="Three featured case studies"
            description="A focused set of projects that show how I approach workflow clarity, platform logic, and reusable product systems."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {selectedWork.map((project, index) => (
              <CaseStudyCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div
            id="supporting-work"
            className="mt-12 rounded-[1.8rem] bg-paper/70 px-6 py-6 shadow-[0_16px_44px_rgba(31,41,51,0.05)] sm:px-7"
          >
            <SectionHeading
              eyebrow="Supporting Work"
              title={additionalWork.title}
              description={additionalWork.description}
            />

            <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-x-12">
              {additionalWork.groups.map((group) => (
                <AdditionalWorkGroupColumn key={group.title} group={group} />
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-6">
            {selectedWork.map((project, index) => (
              <CaseStudyDetail key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16">
          <div className="rounded-[1.95rem] bg-paper/80 px-7 py-8 shadow-[0_20px_54px_rgba(31,41,51,0.07)] sm:px-8 sm:py-9">
            <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="space-y-4">
                <p className="text-[0.92rem] font-medium uppercase tracking-[0.16em] text-accent">
                  Contact / Resume
                </p>
                <h2 className="font-serif text-[clamp(1.8rem,2.8vw,1.95rem)] leading-[1.08] tracking-[-0.03em] text-ink">
                  Get in touch or download the resume
                </h2>
                <p className="max-w-2xl text-[1.125rem] leading-8 text-mist">
                  If you are hiring for a thoughtful early-career generalist with hands-on
                  experience in technical product work, operational systems, and cross-functional
                  execution, I would love to connect.
                </p>
              </div>

              <div className="space-y-3.5 text-base">
                <a className="block transition hover:text-accent" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
                <a
                  className="block transition hover:text-accent"
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <DownloadOpenLink
                  className="block transition hover:text-accent"
                  href={person.resumeHref}
                  download
                >
                  Download Resume
                </DownloadOpenLink>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-6 text-[0.98rem] text-mist sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap gap-5 sm:mt-0">
            <a href={`mailto:${person.email}`} className="transition hover:text-ink">
              Email
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-ink"
            >
              LinkedIn
            </a>
            <DownloadOpenLink href={person.resumeHref} download className="transition hover:text-ink">
              Resume
            </DownloadOpenLink>
          </div>
        </footer>
      </div>
    </main>
  );
}
