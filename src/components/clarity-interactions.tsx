"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Portfolio } from "@/data/portfolio";
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

type PlatformGroup = Portfolio["platforms"]["groups"][number];
type WorkbenchArtifact = Portfolio["person"]["workbenchArtifacts"][number];
type WorkbenchStory = {
  id?: string;
  label: string;
  title: string;
  preview: string;
  body: string;
  points: readonly string[];
};

type SectionLink = {
  href: string;
  label: string;
  id: string;
};

type PlatformLogoConfig = {
  alt: string;
  src: StaticImageData;
  variant: "wordmark" | "icon";
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function storyAnchorId(story: { id?: string; label: string }) {
  return `work-${story.id ?? slugify(story.label)}`;
}

const sectionLinks: SectionLink[] = [
  { href: "#top", id: "top", label: "Workbench" },
  { href: "#what-i-make-clearer", id: "what-i-make-clearer", label: "Clarity" },
  { href: "#selected-systems", id: "selected-systems", label: "Systems" },
  { href: "#ecosystem", id: "ecosystem", label: "Ecosystem" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" }
];

const sectionIds = sectionLinks.map((link) => link.id);
const laneOrder = ["Inputs", "Logic", "Output"] as const;

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

function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0.12, 0.3, 0.55]
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function ActiveSectionNav({ name }: { name: string }) {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-7 lg:px-9">
        <a href="#top" className="font-serif text-xl text-ink">
          {name}
        </a>
        <nav aria-label="Portfolio sections" className="-mr-2 hidden items-center gap-1 md:flex">
          {sectionLinks.map((section) => {
            const isActive = activeId === section.id;

            return (
              <a
                key={section.href}
                href={section.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas`}
              >
                {section.label}
                <span
                  className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent transition ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function WorkbenchChip({
  artifact,
  isActive,
  onActivate
}: {
  artifact: WorkbenchArtifact;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onActivate}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      className={`group/chip rounded-lg border px-3 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
        isActive
          ? "border-accent bg-accentSoft text-ink"
          : "border-line bg-surface text-ink hover:border-accent/60"
      }`}
    >
      <span className="block text-xs font-semibold text-muted">{artifact.lane}</span>
      <span className="mt-1 block text-sm font-semibold">{artifact.label}</span>
      <span className="mt-2 block text-xs leading-5 text-muted group-hover/chip:text-ink/78">
        {artifact.description}
      </span>
    </button>
  );
}

export function WorkbenchVisual({ artifacts }: { artifacts: readonly WorkbenchArtifact[] }) {
  const [activeArtifact, setActiveArtifact] = useState<string>(artifacts[0]?.label ?? "");
  const artifactsByLane = laneOrder.map((lane) => ({
    lane,
    artifacts: artifacts.filter((artifact) => artifact.lane === lane)
  }));

  return (
    <div className="relative rounded-lg border border-line bg-surface p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <p className="text-sm font-semibold text-ink">Clarity workbench</p>
          <p className="mt-1 text-xs leading-5 text-muted">
            {"messy input -> product decision -> clearer outcome"}
          </p>
        </div>
        <span className="rounded-full bg-yellowSoft px-3 py-1 text-xs font-semibold text-ink">
          Live product logic
        </span>
      </div>

      <div className="grid gap-4">
        {artifactsByLane.map(({ lane, artifacts: laneArtifacts }, laneIndex) => (
          <div key={lane} className="grid gap-3 rounded-lg bg-canvas p-3 sm:grid-cols-[6rem_1fr] sm:items-start">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-semibold text-canvas">
                {laneIndex + 1}
              </span>
              <p className="text-sm font-semibold text-ink">{lane}</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {laneArtifacts.map((artifact) => (
                <WorkbenchChip
                  key={artifact.label}
                  artifact={artifact}
                  isActive={activeArtifact === artifact.label}
                  onActivate={() => setActiveArtifact(artifact.label)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InputStoryExplorer({ stories }: { stories: readonly WorkbenchStory[] }) {
  const [activeLabel, setActiveLabel] = useState(stories[0]?.label ?? "");
  const [focusedLabel, setFocusedLabel] = useState(stories[0]?.label ?? "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeStory = stories.find((story) => story.label === activeLabel) ?? stories[0];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1
      : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;

    if (!direction) {
      return;
    }

    event.preventDefault();
    const nextIndex = (index + direction + stories.length) % stories.length;
    const nextStory = stories[nextIndex];

    if (nextStory) {
      setFocusedLabel(nextStory.label);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  useEffect(() => {
    function selectStoryById(storyId: string) {
      const selectedStory = stories.find((story) => {
        const storyIdValue = story.id ?? slugify(story.label);

        return storyIdValue === storyId || storyAnchorId(story) === storyId || storyAnchorId(story) === `work-${storyId}`;
      });

      if (selectedStory) {
        setActiveLabel(selectedStory.label);
        setFocusedLabel(selectedStory.label);
      }
    }

    function syncStoryFromHash() {
      const hash = window.location.hash.replace("#", "");
      const hashStory = stories.find((story) => storyAnchorId(story) === hash);

      if (hashStory) {
        setActiveLabel(hashStory.label);
        setFocusedLabel(hashStory.label);
      }
    }

    function handleStorySelect(event: Event) {
      const storyId = (event as CustomEvent<string>).detail;

      if (storyId) {
        selectStoryById(storyId);
      }
    }

    syncStoryFromHash();
    window.addEventListener("hashchange", syncStoryFromHash);
    window.addEventListener("portfolio-story-select", handleStorySelect);

    return () => {
      window.removeEventListener("hashchange", syncStoryFromHash);
      window.removeEventListener("portfolio-story-select", handleStorySelect);
    };
  }, [stories]);

  if (!activeStory) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div role="tablist" aria-label="Product capabilities" className="flex flex-wrap gap-2">
        {stories.map((story, index) => {
          const isActive = activeStory.label === story.label;
          const isFocused = focusedLabel === story.label;

          return (
            <button
              key={story.label}
              id={storyAnchorId(story)}
              ref={(tab) => {
                tabRefs.current[index] = tab;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="messy-input-story-panel"
              tabIndex={isFocused ? 0 : -1}
              onClick={() => {
                setActiveLabel(story.label);
                setFocusedLabel(story.label);
                window.history.replaceState(null, "", `#${storyAnchorId(story)}`);
              }}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-center text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-surface text-muted hover:border-accent/70 hover:text-ink"
              }`}
            >
              <span className="block whitespace-nowrap">{story.label}</span>
            </button>
          );
        })}
      </div>

      <article
        id="messy-input-story-panel"
        role="tabpanel"
        aria-labelledby={storyAnchorId(activeStory)}
        data-work-dossier
        className="border-y border-line py-6 sm:py-7"
      >
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.58fr)_minmax(16rem,0.42fr)] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-sm font-semibold text-accent">{activeStory.label}</p>
              <span className="text-xs font-semibold text-muted">Product logic note</span>
            </div>
            <h3 className="mt-4 max-w-2xl text-balance text-[clamp(1.45rem,2.3vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-ink">
              {activeStory.title}
            </h3>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-muted">
              {activeStory.body}
            </p>
          </div>

          <aside className="lg:border-l lg:border-line lg:pl-7">
            <p className="text-sm font-semibold text-ink">What this shows</p>
            <ol className="mt-4 grid gap-4">
              {activeStory.points.map((point, index) => (
                <li key={point} className="grid grid-cols-[2rem_1fr] gap-3 text-sm font-semibold leading-6 text-ink">
                  <span className="font-serif text-lg leading-6 text-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </article>
    </div>
  );
}

function PlatformGroupColumn({
  group
}: {
  group: PlatformGroup;
}) {
  return (
    <article className="rounded-lg border border-line bg-surface p-5">
      <h3 className="text-sm font-semibold text-accent">{group.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4">
        {group.items.map((item) => {
          const logo = platformLogoMap[item];

          if (!logo) {
            return <span key={item} className="text-sm font-semibold text-ink">{item}</span>;
          }

          return (
            <span
              key={item}
              className={`flex ${logo.variant === "icon" ? "h-10 w-10" : "h-8 min-w-24"} items-center justify-center`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className={`${logo.variant === "icon" ? "h-8 w-8" : "h-8 w-auto"} object-contain`}
                sizes={logo.variant === "icon" ? "40px" : "160px"}
              />
            </span>
          );
        })}
      </div>
    </article>
  );
}

export function PlatformEcosystem({ groups }: { groups: readonly PlatformGroup[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <PlatformGroupColumn key={group.title} group={group} />
      ))}
    </div>
  );
}
