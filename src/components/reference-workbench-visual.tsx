"use client";

import { useId, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { DownloadOpenLink } from "@/components/download-open-link";
import type { Portfolio } from "@/data/portfolio";

type PortfolioWorkbenchArtifact = Portfolio["person"]["workbenchArtifacts"][number];

export type ReferenceWorkbenchTone = "accent" | "coral" | "yellow" | "ink";

export type ReferenceWorkbenchIcon =
  | "ai"
  | "api"
  | "automation"
  | "crm"
  | "execute"
  | "gamification"
  | "integrations"
  | "ops"
  | "outcomes"
  | "permissions"
  | "prd"
  | "redemption"
  | "rules"
  | "store"
  | "systems"
  | "tools"
  | "trigger"
  | "validate"
  | "webhook"
  | "workflow";

export type ReferenceWorkbenchInput = {
  id?: string;
  label: string;
  description: string;
  lane?: PortfolioWorkbenchArtifact["lane"] | string;
  href?: string;
  targetStoryId?: string;
  icon?: ReferenceWorkbenchIcon;
  tone?: ReferenceWorkbenchTone;
  storyTitle?: string;
  storyBody?: string;
  storyPreview?: string;
  storyPoints?: readonly string[];
};

export type ReferenceAboutFact = {
  label: string;
  value: string;
};

export type ReferenceAboutPortrait = {
  src: string;
  alt: string;
};

export type ReferenceAboutLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export type ReferenceWorkbenchTile = {
  id?: string;
  label: string;
  description?: string;
  icon?: ReferenceWorkbenchIcon;
  tone?: ReferenceWorkbenchTone;
};

export type ReferenceWorkbenchVisualProps = {
  inputs?: readonly ReferenceWorkbenchInput[];
  capabilityTiles?: readonly ReferenceWorkbenchTile[];
  aboutText?: string;
  aboutFacts?: readonly ReferenceAboutFact[];
  aboutName?: string;
  aboutPortrait?: ReferenceAboutPortrait;
  aboutLinks?: readonly ReferenceAboutLink[];
  eyebrow?: string;
  title?: string;
  caption?: string;
  className?: string;
  activeInputId?: string;
  defaultActiveInputId?: string;
  onActiveInputChange?: (input: ReferenceWorkbenchInput) => void;
};

type NormalizedInput = Required<Pick<ReferenceWorkbenchInput, "id" | "label" | "description" | "icon" | "tone" | "storyTitle" | "storyBody" | "storyPreview" | "targetStoryId">> &
  Pick<ReferenceWorkbenchInput, "lane" | "href"> & {
    storyPoints: readonly string[];
  };

type NormalizedTile = Required<Pick<ReferenceWorkbenchTile, "id" | "label" | "icon" | "tone">> &
  Pick<ReferenceWorkbenchTile, "description">;

type InputLayoutStyle = CSSProperties & {
  "--card-rotate"?: string;
  "--reference-card-delay"?: string;
};

const defaultInputs = [
  {
    id: "api-events",
    label: "API",
    description: "Platform and client APIs",
    lane: "Inputs",
    icon: "api",
    tone: "coral"
  },
  {
    id: "webhooks",
    label: "Webhooks",
    description: "Incoming and outgoing",
    lane: "Inputs",
    icon: "webhook",
    tone: "coral"
  },
  {
    id: "workflows",
    label: "Workflows",
    description: "Custom workflow logic",
    lane: "Inputs",
    icon: "workflow",
    tone: "coral"
  },
  {
    id: "store",
    label: "Store",
    description: "E-commerce systems",
    lane: "Logic",
    icon: "store",
    tone: "coral"
  },
  {
    id: "gamification",
    label: "Gamification",
    description: "Client engagement",
    lane: "Logic",
    icon: "gamification",
    tone: "yellow"
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    description: "AI-assisted systems",
    lane: "Output",
    icon: "automation",
    tone: "accent"
  }
] satisfies readonly ReferenceWorkbenchInput[];

const defaultCapabilityTiles = [
  {
    id: "complex-rules",
    label: "Complex rules",
    description: "I define and simplify",
    icon: "rules",
    tone: "ink"
  },
  {
    id: "integrations",
    label: "Integrations",
    description: "I connect and harden",
    icon: "integrations",
    tone: "accent"
  },
  {
    id: "workflows",
    label: "Workflows",
    description: "I design and operate",
    icon: "workflow",
    tone: "accent"
  },
  {
    id: "tools",
    label: "Tools",
    description: "I build for teams",
    icon: "tools",
    tone: "coral"
  },
  {
    id: "automation",
    label: "Automation",
    description: "I use it to remove friction",
    icon: "automation",
    tone: "yellow"
  }
] satisfies readonly ReferenceWorkbenchTile[];

const defaultAboutFacts = [
  {
    label: "Focus",
    value: "Product, platform, and workflow systems"
  },
  {
    label: "Domain",
    value: "B2B2C SaaS with fintech-related workflows"
  }
] satisfies readonly ReferenceAboutFact[];

const defaultAboutPortrait = {
  src: "/me2.png",
  alt: "Portrait of Anjelika Tan"
} satisfies ReferenceAboutPortrait;

const defaultAboutLinks = [
  {
    label: "LinkedIn",
    href: "#contact"
  },
  {
    label: "Resume",
    href: "#contact"
  },
  {
    label: "Email me",
    href: "#contact"
  }
] satisfies readonly ReferenceAboutLink[];

const inputLayouts = [
  { left: "30%", top: "4%", rotate: "-1deg" },
  { left: "13%", top: "22%", rotate: "-1.5deg" },
  { left: "1%", top: "40%", rotate: "3deg" },
  { left: "35%", top: "42%", rotate: "2deg" },
  { left: "6%", top: "60%", rotate: "-2deg" },
  { left: "38%", top: "69%", rotate: "-3deg" }
] as const;

const connectorPaths = [
  "M 336 70 C 392 91 432 136 472 208",
  "M 250 150 C 326 166 402 204 472 252",
  "M 188 256 C 286 259 382 278 472 294",
  "M 365 258 C 414 272 446 292 472 318",
  "M 215 356 C 310 354 398 342 472 332",
  "M 380 389 C 425 380 452 363 472 346"
] as const;

const toneClassNames: Record<ReferenceWorkbenchTone, { text: string; bg: string; soft: string; border: string }> = {
  accent: {
    text: "text-accent",
    bg: "bg-accent",
    soft: "bg-accentSoft",
    border: "border-accent"
  },
  coral: {
    text: "text-coral",
    bg: "bg-coral",
    soft: "bg-coralSoft",
    border: "border-coral"
  },
  yellow: {
    text: "text-yellow",
    bg: "bg-yellow",
    soft: "bg-yellowSoft",
    border: "border-yellow"
  },
  ink: {
    text: "text-ink",
    bg: "bg-ink",
    soft: "bg-canvas",
    border: "border-ink"
  }
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeInputs(inputs: readonly ReferenceWorkbenchInput[]): NormalizedInput[] {
  return inputs.slice(0, inputLayouts.length).map((input, index) => ({
    id: (input.id ?? slugify(input.label)) || `input-${index + 1}`,
    label: input.label,
    description: input.description,
    lane: input.lane,
    href: input.href ?? "#work",
    targetStoryId: input.targetStoryId ?? slugify(input.label),
    icon: input.icon ?? iconForLabel(input.label),
    tone: input.tone ?? toneForIndex(index),
    storyTitle: input.storyTitle ?? `${input.label} becomes product logic`,
    storyBody:
      input.storyBody ??
      `${input.label} ${input.description.toLowerCase()} become clearer rules, decisions, and handoff for the system.`,
    storyPreview:
      input.storyPreview ??
      input.storyPoints?.[0] ??
      `${input.label} becomes clearer product logic.`,
    storyPoints: input.storyPoints ?? []
  }));
}

function normalizeTiles(tiles: readonly ReferenceWorkbenchTile[]): NormalizedTile[] {
  return tiles.map((tile, index) => ({
    id: (tile.id ?? slugify(tile.label)) || `tile-${index + 1}`,
    label: tile.label,
    description: tile.description,
    icon: tile.icon ?? iconForLabel(tile.label),
    tone: tile.tone ?? "accent"
  }));
}

function toneForIndex(index: number): ReferenceWorkbenchTone {
  if (index === 4) {
    return "yellow";
  }

  return index % 3 === 0 ? "coral" : "accent";
}

function iconForLabel(label: string): ReferenceWorkbenchIcon {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("api")) return "api";
  if (normalizedLabel.includes("webhook")) return "webhook";
  if (normalizedLabel.includes("store") || normalizedLabel.includes("commerce")) return "store";
  if (normalizedLabel.includes("gamification") || normalizedLabel.includes("game") || normalizedLabel.includes("engagement")) return "gamification";
  if (normalizedLabel.includes("crm")) return "crm";
  if (normalizedLabel.includes("permission") || normalizedLabel.includes("role")) return "permissions";
  if (normalizedLabel.includes("redemption") || normalizedLabel.includes("reward")) return "redemption";
  if (normalizedLabel.includes("prd") || normalizedLabel.includes("note")) return "prd";
  if (normalizedLabel.includes("ops") || normalizedLabel.includes("incident")) return "ops";
  if (normalizedLabel.includes("integration")) return "integrations";
  if (normalizedLabel.includes("automation")) return "automation";
  if (normalizedLabel.includes("tool")) return "tools";
  if (normalizedLabel.includes("workflow")) return "workflow";
  if (normalizedLabel.includes("system")) return "systems";
  if (normalizedLabel.includes("outcome") || normalizedLabel.includes("analytic")) return "outcomes";
  if (normalizedLabel.includes("rule")) return "rules";

  return "systems";
}

export function ReferenceWorkbenchVisual({
  inputs = defaultInputs,
  capabilityTiles = defaultCapabilityTiles,
  aboutText = "I work best where product, operations, and technical constraints overlap, especially when the system needs to become easier to explain, build, and run.",
  aboutFacts = defaultAboutFacts,
  aboutName = "Anjelika Tan",
  aboutPortrait = defaultAboutPortrait,
  aboutLinks = defaultAboutLinks,
  eyebrow = "Product Manager",
  title = "Clear, usable workflows",
  caption,
  className,
  activeInputId,
  defaultActiveInputId,
  onActiveInputChange
}: ReferenceWorkbenchVisualProps) {
  const headingId = useId();
  const normalizedInputs = useMemo(() => normalizeInputs(inputs), [inputs]);
  const normalizedCapabilities = useMemo(() => normalizeTiles(capabilityTiles), [capabilityTiles]);
  const firstInputId = normalizedInputs[0]?.id ?? "";
  const [uncontrolledActiveInputId, setUncontrolledActiveInputId] = useState(
    defaultActiveInputId ?? firstInputId
  );
  const currentActiveInputId = activeInputId ?? uncontrolledActiveInputId ?? firstInputId;

  function activateInput(input: NormalizedInput) {
    if (activeInputId === undefined) {
      setUncontrolledActiveInputId(input.id);
    }

    onActiveInputChange?.(input);
  }

  function selectStory(input: NormalizedInput) {
    activateInput(input);
    window.dispatchEvent(new CustomEvent("portfolio-story-select", { detail: input.targetStoryId }));
  }

  return (
    <figure
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-canvas p-4 text-ink sm:p-5 lg:p-6",
        className
      )}
    >
      <div className="grid gap-4 lg:grid-cols-[0.96fr_1.04fr] lg:grid-rows-[auto_1fr]">
        <div className="order-2 hidden min-h-[30rem] overflow-hidden rounded-lg bg-surface/65 p-3 sm:min-h-[32rem] sm:p-5 lg:order-1 lg:row-span-2 lg:block lg:min-h-[33.5rem] relative">
          <ConnectorField activeIndex={normalizedInputs.findIndex((input) => input.id === currentActiveInputId)} />

          <div className="mb-3 flex items-start gap-2 text-sm font-semibold italic leading-5 text-ink/76 sm:absolute sm:left-4 sm:top-4 sm:z-10 sm:max-w-[9rem]">
            <span>hover me!</span>
            <span aria-hidden="true" className="mt-2 h-px w-7 rotate-[18deg] bg-line" />
          </div>

          <div className="relative z-10 grid gap-3 pt-14 sm:absolute sm:inset-0 sm:block sm:pt-0">
            {normalizedInputs.map((input, index) => {
              const layout = inputLayouts[index];
              const tone = toneClassNames[input.tone];
              const isActive = input.id === currentActiveInputId;
              const style: InputLayoutStyle = {
                left: layout.left,
                top: layout.top,
                "--card-rotate": layout.rotate,
                "--reference-card-delay": `${120 + index * 55}ms`
              };

              return (
                <a
                  key={input.id}
                  href={input.href}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`${input.label}: ${input.storyPreview}. Click to learn more.`}
                  onClick={() => selectStory(input)}
                  onFocus={() => activateInput(input)}
                  onMouseEnter={() => activateInput(input)}
                  style={style}
                  className={cn(
                    "reference-input-card reference-flip-card group/input w-full rounded-lg text-left motion-safe:transition motion-safe:duration-200 sm:absolute sm:w-[11.25rem] sm:rotate-[var(--card-rotate)] motion-safe:sm:hover:-translate-y-1",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                    isActive ? cn(tone.border, tone.soft) : "hover:border-accent/70"
                  )}
                >
                  <span className="reference-flip-card-inner">
                    <span className={cn("reference-input-card-face reference-input-card-front border bg-surface", isActive ? cn(tone.border, tone.soft) : "border-line")}>
                      <span className="flex items-start justify-between gap-3">
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-canvas",
                              isActive ? tone.border : "border-line",
                              tone.text
                            )}
                            aria-hidden="true"
                          >
                            <WorkbenchIcon name={input.icon} className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold leading-5 text-ink">{input.label}</span>
                            <span className="mt-0.5 block text-xs leading-5 text-muted">{input.description}</span>
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn("mt-1 h-2.5 w-2.5 rounded-full", isActive ? tone.bg : "bg-line")}
                        />
                      </span>
                    </span>
                    <span className={cn("reference-input-card-face reference-input-card-back border", tone.border, tone.soft)}>
                      <span className="block text-[0.7rem] font-semibold leading-4 text-ink">
                        {input.storyPreview}
                      </span>
                      <span className="mt-2 block text-[0.68rem] font-semibold text-accent">
                        Click to learn more -&gt;
                      </span>
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="order-1 flex flex-col gap-4 lg:order-2 lg:col-start-2 lg:row-start-1">
          <div className="space-y-3">
            <div className="inline-flex rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">
              {eyebrow}
            </div>
            <div>
              <h1 id={headingId} className="max-w-xl font-serif text-[clamp(2.45rem,5.2vw,4.35rem)] leading-[0.98] tracking-[-0.03em] text-ink">
                <HighlightedTitle title={title} />
              </h1>
              {caption ? (
                <p className="mt-2 max-w-xl text-xs leading-5 text-muted sm:text-sm sm:leading-6">{caption}</p>
              ) : null}
            </div>
            <p className="rounded-lg border border-line bg-surface px-3 py-2 text-xs font-semibold leading-5 text-muted lg:hidden">
              Best viewed on desktop for the full system map. On mobile, I’ve simplified it into a linear walkthrough.
            </p>
            <CapabilityPills tiles={normalizedCapabilities.slice(0, 5)} />
          </div>
        </div>

        <div className="order-4 lg:order-3 lg:col-start-2 lg:row-start-2 lg:self-end">
          <AboutMePanel
            aboutText={aboutText}
            aboutFacts={aboutFacts}
            aboutName={aboutName}
            aboutPortrait={aboutPortrait}
            aboutLinks={aboutLinks}
          />
        </div>
      </div>

    </figure>
  );
}

function HighlightedTitle({ title }: { title: string }) {
  const phrase = "clear, usable";
  const messyWord = "messy";
  const [beforeMessy, afterMessyValue] = title.split(messyWord);

  if (afterMessyValue === undefined) {
    return <HighlightedPhrase title={title} phrase={phrase} />;
  }

  return (
    <>
      {beforeMessy}
      <span className="messy-word" aria-label={messyWord}>
        <span aria-hidden="true">
          {messyWord.split("").map((letter, index) => (
            <span key={`${letter}-${index}`} className="messy-letter">
              {letter}
            </span>
          ))}
        </span>
      </span>
      <HighlightedPhrase title={afterMessyValue} phrase={phrase} />
    </>
  );
}

function HighlightedPhrase({ title, phrase }: { title: string; phrase: string }) {
  const [before, after] = title.split(phrase);

  if (after === undefined) {
    return title;
  }

  return (
    <>
      {before}
      <span className="relative inline-block text-accent">
        {phrase}
        <span className="phrase-underline absolute inset-x-1 -bottom-1 h-1 rounded-full bg-accentSoft" aria-hidden="true" />
      </span>
      {after}
    </>
  );
}

function ConnectorField({ activeIndex }: { activeIndex: number }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
      viewBox="0 0 520 520"
      preserveAspectRatio="none"
    >
      {connectorPaths.map((path, index) => {
        const isActive = index === activeIndex;

        return (
          <path
            key={path}
            d={path}
            fill="none"
            strokeDasharray="5 8"
            strokeLinecap="round"
            strokeWidth={isActive ? 2.4 : 1.4}
            className={cn(
              "reference-connector motion-safe:transition motion-safe:duration-200",
              isActive ? "stroke-accent opacity-85" : "stroke-line opacity-80"
            )}
          />
        );
      })}
    </svg>
  );
}

function CapabilityPills({ tiles }: { tiles: readonly NormalizedTile[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-3">
      {tiles.map((tile) => {
        const tone = toneClassNames[tile.tone];

        return (
          <span key={tile.id} className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
            <span aria-hidden="true" className={cn("flex h-7 w-7 items-center justify-center rounded-full", tone.soft, tone.text)}>
              <WorkbenchIcon name={tile.icon} className="h-3.5 w-3.5" />
            </span>
            {tile.label}
          </span>
        );
      })}
    </div>
  );
}

function AboutMePanel({
  aboutText,
  aboutFacts,
  aboutName,
  aboutPortrait,
  aboutLinks
}: {
  aboutText: string;
  aboutFacts: readonly ReferenceAboutFact[];
  aboutName: string;
  aboutPortrait: ReferenceAboutPortrait;
  aboutLinks: readonly ReferenceAboutLink[];
}) {
  const actionClassName =
    "inline-flex min-h-9 items-center justify-center rounded-full border border-line bg-canvas px-3 py-2 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <div className="rounded-lg border border-line bg-surface p-3">
      <div className="mb-3 flex items-center gap-3">
        <p className="text-sm font-semibold text-ink">About me</p>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="grid gap-3">
        <div className="grid gap-3 sm:grid-cols-[4.5rem_1fr] sm:items-start">
          <img
            src={aboutPortrait.src}
            alt={aboutPortrait.alt}
            className="h-[4.5rem] w-[4.5rem] rounded-lg border border-line bg-canvas object-cover"
          />
          <div>
            <p className="text-base font-semibold leading-6 text-ink">{aboutName}</p>
            <p className="mt-1 max-w-3xl text-pretty text-xs leading-5 text-muted sm:text-sm sm:leading-6">
              {aboutText}
            </p>
          </div>
        </div>

        <dl className="grid gap-2 sm:grid-cols-2">
          {aboutFacts.slice(0, 2).map((fact) => (
            <div key={fact.label} className="rounded-lg bg-canvas px-3 py-2">
              <dt className="text-[0.68rem] font-semibold leading-4 text-accent">{fact.label}</dt>
              <dd className="mt-1 text-xs font-semibold leading-5 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-2">
          {aboutLinks.map((link) =>
            link.download ? (
              <DownloadOpenLink key={link.label} href={link.href} download className={actionClassName}>
                {link.label}
              </DownloadOpenLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={actionClassName}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function WorkbenchIcon({ name, className }: { name: ReferenceWorkbenchIcon; className?: string }) {
  const icon = iconPaths[name];

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {icon}
    </svg>
  );
}

const iconPaths: Record<ReferenceWorkbenchIcon, ReactNode> = {
  ai: (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="M8.5 8.5 6 6" />
      <path d="m18 18-2.5-2.5" />
      <path d="m15.5 8.5 2.5-2.5" />
      <path d="M6 18l2.5-2.5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  api: (
    <>
      <circle cx="6.5" cy="7.5" r="2.5" />
      <circle cx="17.5" cy="7.5" r="2.5" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M8.6 8.8 10.5 14" />
      <path d="m15.4 8.8-1.9 5.2" />
      <path d="M9 7.5h6" />
    </>
  ),
  automation: (
    <>
      <path d="M12 2.75v3" />
      <path d="M12 18.25v3" />
      <path d="M4.9 4.9 7 7" />
      <path d="m17 17 2.1 2.1" />
      <path d="m19.1 4.9-2.1 2.1" />
      <path d="M4.9 19.1 7 17" />
      <path d="M2.75 12h3" />
      <path d="M18.25 12h3" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  crm: (
    <>
      <rect height="14" rx="2" width="16" x="4" y="5" />
      <path d="M8 9h8" />
      <path d="M8 13h4" />
      <path d="M15 13h1" />
    </>
  ),
  execute: (
    <>
      <path d="M8 5.5v13l10-6.5Z" />
    </>
  ),
  gamification: (
    <>
      <path d="M7 8.5h10" />
      <path d="M9 6.5v4" />
      <path d="M15 6.5v4" />
      <path d="M6 14h.01" />
      <path d="M18 14h.01" />
      <path d="M9.5 17.5h5" />
      <path d="M4.5 11.5c0-3 2.4-5.5 5.4-5.5h4.2c3 0 5.4 2.5 5.4 5.5v3.2c0 2.5-2 4.6-4.5 4.6H9c-2.5 0-4.5-2.1-4.5-4.6Z" />
    </>
  ),
  integrations: (
    <>
      <path d="M10.5 7.5 9 6a4 4 0 0 0-5.7 5.7l1.5 1.5" />
      <path d="m13.5 16.5 1.5 1.5a4 4 0 0 0 5.7-5.7l-1.5-1.5" />
      <path d="m8.5 15.5 7-7" />
    </>
  ),
  ops: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4" />
      <path d="M12 18.8v2.4" />
      <path d="m5.5 5.5 1.7 1.7" />
      <path d="m16.8 16.8 1.7 1.7" />
      <path d="M2.8 12h2.4" />
      <path d="M18.8 12h2.4" />
      <path d="m5.5 18.5 1.7-1.7" />
      <path d="m16.8 7.2 1.7-1.7" />
    </>
  ),
  outcomes: (
    <>
      <rect height="14" rx="2" width="16" x="4" y="5" />
      <path d="M8 15v-3" />
      <path d="M12 15V9" />
      <path d="M16 15v-5" />
    </>
  ),
  permissions: (
    <>
      <path d="M12 3.5 18.5 6v5.3c0 4-2.6 7.6-6.5 9.2-3.9-1.6-6.5-5.2-6.5-9.2V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  prd: (
    <>
      <path d="M7 3.5h7l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
      <path d="M14 3.5V7h3" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </>
  ),
  redemption: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.8 12.3 2.2 2.2 4.4-5" />
    </>
  ),
  rules: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <circle cx="8" cy="7" r="1.7" />
      <circle cx="15" cy="12" r="1.7" />
      <circle cx="10.5" cy="17" r="1.7" />
    </>
  ),
  store: (
    <>
      <path d="M5 6h14l-1.2 6.5H7.1Z" />
      <path d="M8 6 9.2 3.5h5.6L16 6" />
      <path d="M8 16.5h9" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
      <path d="M7.1 12.5 8 16.5" />
      <path d="M17.8 12.5 17 16.5" />
    </>
  ),
  systems: (
    <>
      <rect height="7" rx="1.5" width="7" x="4" y="4" />
      <rect height="7" rx="1.5" width="7" x="13" y="4" />
      <rect height="7" rx="1.5" width="7" x="8.5" y="13" />
      <path d="M11 7.5h2" />
      <path d="M12 11v2" />
    </>
  ),
  tools: (
    <>
      <path d="m14.7 6.7 2.6-2.6a4.2 4.2 0 0 1 2.4 5.4l-9.8 9.8a2.3 2.3 0 0 1-3.2-3.2l9.8-9.8" />
      <path d="m5 19-2 2" />
    </>
  ),
  trigger: (
    <>
      <path d="M13 2.8 5.8 13h5.4L10 21.2 18.2 10h-5.4Z" />
    </>
  ),
  validate: (
    <>
      <path d="M12 3.5 18 6v5.2c0 3.7-2.4 7-6 8.3-3.6-1.3-6-4.6-6-8.3V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  webhook: (
    <>
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="17" r="3" />
      <path d="M9.3 8.8 14.7 15" />
      <path d="M9.8 17h4.2" />
    </>
  ),
  workflow: (
    <>
      <path d="M4 7h9" />
      <path d="m10 4 3 3-3 3" />
      <path d="M20 17h-9" />
      <path d="m14 14-3 3 3 3" />
      <path d="M7 10v4" />
      <path d="M17 10v4" />
    </>
  )
};
