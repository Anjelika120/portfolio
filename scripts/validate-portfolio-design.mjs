import { existsSync, readFileSync, statSync } from "node:fs";

function readSource(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

const files = {
  data: readSource("src/data/portfolio.ts"),
  layout: readSource("src/app/layout.tsx"),
  clarityInteractions: readSource("src/components/clarity-interactions.tsx"),
  downloadOpenLink: readSource("src/components/download-open-link.tsx"),
  frameNav: readSource("src/components/frame-nav.tsx"),
  referenceWorkbench: readSource("src/components/reference-workbench-visual.tsx"),
  caseDetail: readSource("src/components/case-study-detail.tsx"),
  caseArtifact: readSource("src/components/case-study-artifact.tsx"),
  caseFooter: readSource("src/components/case-study-footer.tsx"),
  caseRoute: readSource("src/app/work/[id]/page.tsx"),
  page: readSource("src/app/page.tsx"),
  homeOg: readSource("src/app/opengraph-image.tsx"),
  caseOg: readSource("src/app/work/[id]/opengraph-image.tsx"),
  roadmap: readSource("src/components/evolution-roadmap.tsx"),
  globals: readSource("src/app/globals.css"),
  resume: readSource("resume-source.md"),
  resumeGenerator: readSource("scripts/generate_resume_pdf.py")
};

const optimizedPortraitPath = "public/me2-portrait.png";
const optimizedPortrait = existsSync(optimizedPortraitPath)
  ? {
      bytes: statSync(optimizedPortraitPath).size,
      data: readFileSync(optimizedPortraitPath)
    }
  : { bytes: Number.POSITIVE_INFINITY, data: Buffer.alloc(0) };
const optimizedPortraitWidth = optimizedPortrait.data.length >= 24
  ? optimizedPortrait.data.readUInt32BE(16)
  : 0;
const optimizedPortraitHeight = optimizedPortrait.data.length >= 24
  ? optimizedPortrait.data.readUInt32BE(20)
  : 0;

const platformEcosystemStart = files.clarityInteractions.indexOf("function PlatformGroupColumn");
const inputStoryExplorerSource = files.clarityInteractions.slice(
  files.clarityInteractions.indexOf("export function InputStoryExplorer"),
  platformEcosystemStart
);
const platformEcosystemSource = files.clarityInteractions.slice(platformEcosystemStart);

const checks = [
  {
    name: "Product Manager is the primary title across portfolio and resume",
    pass:
      files.data.includes('title: "Product Manager"') &&
      files.resume.includes("\nProduct Manager\n") &&
      !files.data.includes("Technical Product Manager") &&
      !files.data.includes("AI Product Manager") &&
      !files.resume.includes("Technical Product Manager") &&
      !files.resume.includes("AI Product Manager")
  },
  {
    name: "technical and AI discoverability remain in supporting copy",
    pass:
      files.data.includes("B2B2C SaaS") &&
      files.data.includes("APIs") &&
      files.data.includes("integrations") &&
      files.data.includes("AI-enabled product") &&
      files.resume.includes("AI-enabled product workflows")
  },
  {
    name: "homepage includes a substantial AI-ready product memory section",
    pass:
      files.data.includes("Building product memory that humans and AI can actually use") &&
      files.data.includes("source-confidence") &&
      files.data.includes("production evidence") &&
      files.data.includes("human review") &&
      files.data.includes("secret exclusion") &&
      files.page.includes("function ProductMemorySection") &&
      files.page.includes('id="product-memory"')
  },
  {
    name: "YAML PRD generator attribution and outcome boundaries are explicit",
    pass:
      files.data.includes("Rob introduced the concept") &&
      files.data.includes("Thuta built the generator") &&
      files.data.includes("I adopted, operationalised, tested and refined") &&
      files.data.includes("No measured time, quality or defect improvement")
  },
  {
    name: "hero artifacts are structured in portfolio data",
    pass: files.data.includes("workbenchArtifacts")
  },
  {
    name: "hero artifacts include clickable story details",
    pass:
      files.data.includes("workbenchStories") &&
      files.data.includes("preview") &&
      files.data.includes("client documentation and payloads") &&
      files.data.includes("Incoming events and outgoing callbacks")
  },
  {
    name: "hero and about copy avoid repeating the Computer Science background",
    pass:
      !files.data.includes("heroTechnical") &&
      files.page.includes("aboutText={person.heroLines[1]}") &&
      !files.referenceWorkbench.includes("technicalText")
  },
  {
    name: "hero keeps the B2B2C setting visible",
    pass: files.data.includes("B2B2C SaaS")
  },
  {
    name: "case-study framing fields exist",
    pass: files.data.includes("problemLine") && files.data.includes("decisionLine") && files.data.includes("outcomeLine")
  },
  {
    name: "page renders the WorkbenchHero component",
    pass: files.page.includes("function WorkbenchHero")
  },
  {
    name: "page uses the screenshot-inspired portfolio frame",
    pass:
      files.page.includes("PortfolioFrame") &&
      files.frameNav.includes('import { portfolio } from "@/data/portfolio"') &&
      files.frameNav.includes("{portfolio.person.name}") &&
      !files.frameNav.includes("\n            AT\n")
  },
  {
    name: "header removes the unused theme control",
    pass:
      !files.frameNav.includes('hidden h-11 w-11 items-center justify-center rounded-full border border-line bg-ink') &&
      !files.frameNav.includes('<circle cx="12" cy="12" r="3" />')
  },
  {
    name: "mobile menu remains pinned to the right header column",
    pass: files.frameNav.includes("col-start-3") && files.frameNav.includes("justify-self-end")
  },
  {
    name: "page nav uses the approved section labels",
    pass:
      ["Overview", "Selected work", "Capabilities", "AI practice", "Experience", "Contact"].every((label) =>
        files.frameNav.includes(`label: "${label}"`)
      ) &&
      !files.frameNav.includes('label: "Systems"') &&
      !files.frameNav.includes('label: "About"')
  },
  {
    name: "hero renders the reference workbench visual",
    pass: files.page.includes("ReferenceWorkbenchVisual")
  },
  {
    name: "reference hero renders the visible title as h1",
    pass: files.referenceWorkbench.includes("<h1") && !files.page.includes("<h1>{person.intro}</h1>")
  },
  {
    name: "reference visual changes messy map prompt to hover me",
    pass:
      files.referenceWorkbench.includes("hover me!") &&
      !files.referenceWorkbench.includes("incoming messy inputs")
  },
  {
    name: "reference visual turns messy cards and lands on the work section",
    pass:
      files.referenceWorkbench.includes("reference-flip-card") &&
      files.referenceWorkbench.includes("input.href") &&
      files.referenceWorkbench.includes("targetStoryId") &&
      files.referenceWorkbench.includes("portfolio-story-select") &&
      files.page.includes('href: "#work"') &&
      files.page.includes("targetStoryId: story?.id ?? slugify(label)") &&
      !files.page.includes('href: `#work-${story?.id ?? slugify(label)}`') &&
      !files.referenceWorkbench.includes("reference-story-drawer") &&
      !files.referenceWorkbench.includes("active-workbench-story")
  },
  {
    name: "reference visual keeps the messy input map desktop-only",
    pass:
      files.referenceWorkbench.includes("hidden min-h") &&
      files.referenceWorkbench.includes("xl:block")
  },
  {
    name: "reference hero keeps a concise about panel without proof cards",
    pass:
      files.referenceWorkbench.includes("About me") &&
      files.referenceWorkbench.includes("aboutName") &&
      files.referenceWorkbench.includes("aboutPortrait") &&
      files.referenceWorkbench.includes("LinkedIn") &&
      files.referenceWorkbench.includes("Email me") &&
      !files.referenceWorkbench.includes("aboutFacts") &&
      !files.referenceWorkbench.includes("<WorkflowPanel")
  },
  {
    name: "reference connectors avoid unexplained standalone marks",
    pass:
      !files.referenceWorkbench.includes("reference-workbench-arrow") &&
      !files.referenceWorkbench.includes("M 34 154 C 2 194 18 240 72 271") &&
      !files.referenceWorkbench.includes('markerEnd="url(#reference-workbench-arrow)"')
  },
  {
    name: "reference visual replaces the mobile apology with a compact workbench flow",
    pass:
      files.referenceWorkbench.includes("function MobileWorkbenchFlow") &&
      files.referenceWorkbench.includes("Client signal") &&
      files.referenceWorkbench.includes("Product shape") &&
      files.referenceWorkbench.includes("Delivery, evidence and limits") &&
      files.referenceWorkbench.includes('className="grid gap-1 xl:hidden"') &&
      !files.referenceWorkbench.includes("Best viewed on desktop") &&
      !files.referenceWorkbench.includes("On mobile, I’ve simplified")
  },
  {
    name: "reference visual includes messy word animation hooks",
    pass: files.referenceWorkbench.includes("messy-word") && files.globals.includes("messyLetter")
  },
  {
    name: "page merges clarity strip into the detailed Capabilities section",
    pass:
      files.page.includes('id="work"') &&
      files.page.includes('label="Capabilities"') &&
      files.page.includes("I define how the product should behave, fail and recover.") &&
      files.page.includes("InputStoryExplorer") &&
      !files.page.includes("function ClarityStrip") &&
      !files.page.includes("clarityTiles") &&
      !files.page.includes('id="messy-inputs"') &&
      !files.page.includes('id="about"') &&
      !files.page.includes("About the work") &&
      !files.page.includes("whatIWorkOn.areas.map") &&
      !files.frameNav.includes('href: "/#about"')
  },
  {
    name: "homepage includes the approved six expandable clarity stories",
    pass:
      ["API", "Webhooks", "Workflows", "Store", "Gamification", "AI Automation"].every((label) =>
        files.data.includes(`label: "${label}"`)
      ) &&
      !files.data.includes('label: "CRM"') &&
      !files.data.includes('label: "Permissions"') &&
      !files.data.includes('label: "Redemption"') &&
      !files.data.includes('label: "PRD"') &&
      !files.data.includes('label: "Ops"') &&
      files.clarityInteractions.includes("export function InputStoryExplorer") &&
      files.clarityInteractions.includes("window.location.hash") &&
      files.clarityInteractions.includes("setActiveLabel(hashStory.label)") &&
      files.clarityInteractions.includes('role="tablist"') &&
      files.clarityInteractions.includes("flex flex-wrap gap-2") &&
      !files.clarityInteractions.includes("min-w-max") &&
      !files.clarityInteractions.includes("rounded-[12px] border px-4 py-3") &&
      !files.clarityInteractions.includes("rounded-lg bg-canvas px-3 py-3")
  },
  {
    name: "work story detail uses a flatter dossier layout",
    pass:
      files.clarityInteractions.includes("data-work-dossier") &&
      files.clarityInteractions.includes("border-y border-line py-6") &&
      files.clarityInteractions.includes("lg:grid-cols-[minmax(0,0.58fr)_minmax(16rem,0.42fr)]") &&
      files.clarityInteractions.includes("What this shows") &&
      !files.clarityInteractions.includes('id="messy-input-story-panel" className="rounded-[12px] border border-line bg-surface p-5 sm:p-6"')
  },
  {
    name: "page uses the approved section labels and direct section copy",
    pass:
      files.frameNav.includes('label: "Overview"') &&
      files.page.includes("eyebrow={person.title}") &&
      files.page.includes('label="Selected work"') &&
      files.page.includes('label="Capabilities"') &&
      files.page.includes('sectionLabel="AI practice"') &&
      files.page.includes('label="Experience"') &&
      files.page.includes(">Contact</p>") &&
      files.page.includes("I define how the product should behave, fail and recover.") &&
      files.page.includes("Let's talk about the product, platform or integration problem you're trying to untangle.")
  },
  {
    name: "reviewed homepage copy is direct and personal",
    pass:
      files.data.includes("finding the bigger platform problem behind a one-off client request") &&
      files.page.includes("Most of my work sits across APIs, webhooks, workflows, Store, gamification and AI-enabled product operations.") &&
      files.data.includes("I use AI as a layer over product context, not a substitute for it.") &&
      files.data.includes('title: "The tools behind the work"') &&
      files.data.includes("I have used these systems directly while testing APIs, mapping data, setting up workflows and supporting live products.")
  },
  {
    name: "homepage follows the approved content order",
    pass:
      files.page.indexOf('id="work"') < files.page.indexOf('id="systems"') &&
      files.page.indexOf('id="systems"') < files.page.indexOf("<ProductMemorySection") &&
      files.page.indexOf('id="ecosystem"') < files.page.indexOf('id="supporting-work"') &&
      files.page.indexOf('id="supporting-work"') < files.page.indexOf('id="experience"') &&
      files.frameNav.indexOf('label: "Capabilities"') < files.frameNav.indexOf('label: "Selected work"')
  },
  {
    name: "AI practice uses the same light surface system as the homepage",
    pass:
      files.page.includes('data-product-memory-surface="integrated"') &&
      !files.page.includes('rounded-[18px] bg-ink text-canvas') &&
      !files.page.includes('border-canvas/20')
  },
  {
    name: "flagship cases match the approved Product Manager hierarchy",
    pass:
      [
        "multi-region-loyalty-programme",
        "store-redemption-platform",
        "custom-workflows-platform",
        "large-community-operations"
      ].every((id) => files.data.includes(`id: "${id}"`) && files.page.includes(`"${id}"`) && files.caseRoute.includes(`"${id}"`)) &&
      !files.data.includes('id: "ai-prd-workflow"') &&
      !files.data.includes('id: "milestone-gamification-engine"')
  },
  {
    name: "homepage links case cards to dedicated work pages",
    pass:
      files.page.includes("href={`/work/${project.id}`}") &&
      files.page.includes("project.outcomeLine") &&
      files.page.includes("project.impactLabel") &&
      !files.page.includes('const statuses = [') &&
      !files.page.includes(">Evidence</p>")
  },
  {
    name: "homepage does not inline deep case-study notes",
    pass: !files.page.includes("function CaseStudyDetail") && !files.page.includes('id="case-notes"')
  },
  {
    name: "dedicated case-study route exists",
    pass: files.caseRoute.includes("generateStaticParams") && files.caseRoute.includes("notFound")
  },
  {
    name: "case-study detail component keeps evidence-qualified transformation framing",
    pass:
      files.caseDetail.includes("Problem") &&
      files.caseDetail.includes("Decision") &&
      files.caseDetail.includes('"Observed result"') &&
      !files.caseDetail.includes('["Outcome", project.outcomeLine]')
  },
  {
    name: "roadmap includes a progress line",
    pass: files.roadmap.includes("aria-valuenow") && files.roadmap.includes("progress")
  },
  {
    name: "roadmap selected phases expose pressed state",
    pass: files.roadmap.includes("aria-pressed={isSelected}")
  },
  {
    name: "frame nav exposes the current section",
    pass:
      files.frameNav.includes("isHomePage") &&
      files.frameNav.includes("aria-current={isActive ? \"location\" : undefined}") &&
      files.page.includes("<FrameNav isHomePage />") &&
      files.caseRoute.includes("<FrameNav isHomePage={false} />")
  },
  {
    name: "clarity section copy includes technical Product Manager content anchors",
    pass:
      files.data.includes("deterministic platform APIs") &&
      files.data.includes("failure semantics") &&
      files.data.includes("Custom and Data Workflows") &&
      files.data.includes("historical purchases") &&
      files.data.includes("idempotency") &&
      files.data.includes("AI-assisted")
  },
  {
    name: "portfolio uses evidence-qualified outcomes",
    pass:
      files.data.includes("nearly 3,000") &&
      files.data.includes("300,000-record list") &&
      files.data.includes("50,000-record multi-field update") &&
      files.data.includes("production use is proven at smaller batch sizes")
  },
  {
    name: "portfolio avoids rejected positioning and unsupported impact claims",
    pass:
      !files.data.toLowerCase().includes("early-career") &&
      !files.data.includes("one-week estimate") &&
      !files.data.includes("most-used feature") &&
      !files.data.includes("more widely used")
  },
  {
    name: "confirmed public URL is used in SEO and the resume contact line",
    pass:
      files.data.includes('siteUrl: "https://anjelikatan.com"') &&
      files.resume.includes("anjelikatan.com") &&
      !files.resume.includes("portfolio-black-tau-27.vercel.app") &&
      files.resumeGenerator.includes('part == "anjelikatan.com"')
  },
  {
    name: "resume contact line uses Australian phone and omits visa status",
    pass:
      files.resume.includes("0494 726 205") &&
      !files.resume.includes("+65 9641 1517") &&
      !files.resume.includes("Work and Holiday visa") &&
      !files.resume.toLowerCase().includes("seeking sponsorship")
  },
  {
    name: "global styles include reduced motion handling",
    pass: files.globals.includes("prefers-reduced-motion")
  }
];

checks.push(
  {
    name: "approved zero-to-one hero is specific and natural",
    pass:
      files.data.includes('intro: "I build B2B2C products from the first messy brief to live operation."') &&
      files.page.includes("const { person } = portfolio") &&
      files.page.includes("eyebrow={person.title}") &&
      !files.page.includes('eyebrow="Overview"') &&
      files.page.includes("title={person.intro}") &&
      files.referenceWorkbench.includes("<h1") &&
      files.referenceWorkbench.includes("<HighlightedTitle title={title} />") &&
      files.data.includes("new product capabilities") &&
      files.data.includes("Delivery, evidence and limits")
  },
  {
    name: "case headers render complete evidence metadata from portfolio data",
    pass:
      ["team", "delivery", "artifact"].every((field) => files.data.includes(`${field}:`)) &&
      files.caseRoute.includes("<dl") &&
      files.caseRoute.includes("<dt") &&
      files.caseRoute.includes("<dd") &&
      [
        ["My role", "project.railNote"],
        ["Scope", "project.scope"],
        ["Team", "project.team"],
        ["Delivery", "project.delivery"],
        ["Evidence type", "project.impactLabel"],
        ["Observed result", "project.impactLine"]
      ].every(([label, binding]) => files.caseRoute.includes(`["${label}", ${binding}]`))
  },
  {
    name: "case artifacts are semantic, mounted and linear on mobile",
    pass:
      files.caseDetail.includes("<CaseStudyArtifact artifact={project.artifact} />") &&
      files.caseArtifact.includes("<figure") &&
      files.caseArtifact.includes("<figcaption") &&
      files.caseArtifact.includes('<ol className="mt-6 grid gap-3 md:grid-cols-4">') &&
      files.caseArtifact.includes("artifact.stages.map") &&
      files.caseArtifact.includes("Observed result or limit")
  },
  {
    name: "case detail preserves its narrative without repeating header metadata",
    pass:
      files.caseDetail.includes("{project.detail}") &&
      ![
        "project.caseTitle",
        "project.summary",
        "project.railTags",
        "project.impactLabel",
        "project.impactLine"
      ].some((binding) => files.caseDetail.includes(binding))
  },
  {
    name: "landmarks and mobile navigation are accessible",
    pass:
      files.page.includes('id="main-content"') &&
      files.page.includes("<FrameNav isHomePage />") &&
      files.page.indexOf("<FrameNav isHomePage />") < files.page.indexOf('<main id="main-content">') &&
      files.page.indexOf("</main>") < files.page.indexOf("<PortfolioFooter") &&
      files.caseRoute.includes('<main id="main-content">') &&
      files.caseRoute.includes("<FrameNav isHomePage={false} />") &&
      files.caseRoute.indexOf("<FrameNav isHomePage={false} />") < files.caseRoute.indexOf('<main id="main-content">') &&
      files.caseRoute.indexOf('<main id="main-content">') < files.caseRoute.indexOf("</main>") &&
      files.frameNav.includes("Skip to main content") &&
      files.frameNav.includes('href="#main-content"') &&
      files.frameNav.includes("const [isMenuOpen, setIsMenuOpen] = useState(false)") &&
      files.frameNav.includes("const triggerRef = useRef<HTMLButtonElement>(null)") &&
      files.frameNav.includes("aria-expanded") &&
      files.frameNav.includes("aria-controls") &&
      files.frameNav.includes('id="mobile-portfolio-nav"') &&
      files.frameNav.includes("Escape") &&
      files.frameNav.includes("triggerRef.current?.focus()") &&
      files.frameNav.includes('window.matchMedia("(min-width: 1280px)")') &&
      files.frameNav.includes("min-h-11 min-w-11")
  },
  {
    name: "hero links to selected work and the integrated AI practice",
    pass:
      files.data.includes('intro: "I build B2B2C products from the first messy brief to live operation."') &&
      files.page.includes("supportText={person.heroLines[0]}") &&
      files.page.includes("proofLine={person.heroProof}") &&
      files.page.includes('label: "View selected work"') &&
      files.page.includes('label: "How I work with AI"') &&
      files.referenceWorkbench.includes("supportText: string") &&
      files.referenceWorkbench.includes("proofLine: string") &&
      files.referenceWorkbench.includes("primaryAction: { label: string; href: string }") &&
      files.referenceWorkbench.includes("secondaryAction: { label: string; href: string }") &&
      files.referenceWorkbench.indexOf("{supportText}") < files.referenceWorkbench.indexOf("{proofLine}") &&
      files.referenceWorkbench.indexOf("href={primaryAction.href}") < files.referenceWorkbench.indexOf("href={secondaryAction.href}") &&
      files.referenceWorkbench.indexOf("{primaryAction.label}") < files.referenceWorkbench.indexOf("{secondaryAction.label}") &&
      files.page.includes('href: "#systems"') &&
      files.page.includes('href: "#product-memory"')
  },
  {
    name: "global layout does not clip horizontal overflow",
    pass:
      !/html\s*\{[^}]*overflow-x:\s*(?:hidden|clip)/s.test(files.globals) &&
      !/body\s*\{[^}]*overflow-x:\s*(?:hidden|clip)/s.test(files.globals) &&
      !files.frameNav.includes("md:flex") &&
      !files.referenceWorkbench.includes("lg:grid-cols-[0.96fr_1.04fr]") &&
      !readSource("src/components/portfolio-frame.tsx").includes("overflow-hidden") &&
      files.referenceWorkbench.includes("minmax(0,")
  },
  {
    name: "capabilities use manual-activation tabs with roving keyboard focus",
    pass:
      inputStoryExplorerSource.includes('role="tablist"') &&
      inputStoryExplorerSource.includes('role="tab"') &&
      inputStoryExplorerSource.includes('role="tabpanel"') &&
      inputStoryExplorerSource.includes("aria-selected={isActive}") &&
      inputStoryExplorerSource.includes('aria-controls="messy-input-story-panel"') &&
      inputStoryExplorerSource.includes("aria-labelledby={storyAnchorId(activeStory)}") &&
      inputStoryExplorerSource.includes("tabIndex={isFocused ? 0 : -1}") &&
      inputStoryExplorerSource.includes("useRef<Array<HTMLButtonElement | null>>([])") &&
      inputStoryExplorerSource.includes('event.key === "ArrowRight"') &&
      inputStoryExplorerSource.includes('event.key === "ArrowDown"') &&
      inputStoryExplorerSource.includes('event.key === "ArrowLeft"') &&
      inputStoryExplorerSource.includes('event.key === "ArrowUp"') &&
      inputStoryExplorerSource.includes("event.preventDefault()") &&
      inputStoryExplorerSource.includes("tabRefs.current[nextIndex]?.focus()") &&
      inputStoryExplorerSource.includes("onKeyDown={(event) => handleTabKeyDown(event, index)}") &&
      inputStoryExplorerSource.includes("min-h-11") &&
      inputStoryExplorerSource.includes("focus-visible:ring-2") &&
      !inputStoryExplorerSource.includes("onFocus={() => setActiveLabel") &&
      !inputStoryExplorerSource.includes("min-w-max")
  },
  {
    name: "ecosystem groups are static articles",
    pass:
      platformEcosystemSource.includes("<article") &&
      platformEcosystemSource.includes("<h3") &&
      !platformEcosystemSource.includes("activeGroup") &&
      !platformEcosystemSource.includes("aria-pressed") &&
      !platformEcosystemSource.includes("onClick") &&
      !platformEcosystemSource.includes("onFocus") &&
      !platformEcosystemSource.includes("onMouseEnter") &&
      !platformEcosystemSource.includes("opacity-55") &&
      !platformEcosystemSource.toLowerCase().includes("carousel") &&
      ["Postman", "Activepieces", "Intercom"].every((tool) => files.data.includes(`"${tool}"`))
  },
  {
    name: "resume controls appear in About and Contact plus one footer download",
    pass:
      files.downloadOpenLink === "" &&
      !files.page.includes("DownloadOpenLink") &&
      !files.referenceWorkbench.includes("DownloadOpenLink") &&
      !files.referenceWorkbench.includes("link.download") &&
      (files.page.match(/View resume/g) ?? []).length === 2 &&
      (files.referenceWorkbench.match(/View resume/g) ?? []).length === 0 &&
      files.page.includes("heroAboutLinks") &&
      files.page.includes("href={person.resumeHref}") &&
      files.page.includes("Download resume PDF") &&
      (files.page.match(/\bdownload\b/g) ?? []).length === 1
  },
  {
    name: "View resume links open a new tab without replacing the portfolio",
    pass:
      /label:\s*"View resume",\s*href:\s*person\.resumeHref,\s*external:\s*true/.test(files.page) &&
      /href=\{person\.resumeHref\}\s*target="_blank"\s*rel="noreferrer"/.test(files.page) &&
      files.referenceWorkbench.includes('target={link.external ? "_blank" : undefined}') &&
      files.referenceWorkbench.includes('rel={link.external ? "noreferrer" : undefined}')
  },
  {
    name: "case pages end with onward actions",
    pass:
      files.caseRoute.includes("<CaseStudyFooter nextProject={nextProject} />") &&
      files.caseRoute.includes("(currentIndex + 1) % orderedWork.length") &&
      files.caseFooter.includes('aria-label="Case study actions"') &&
      files.caseFooter.includes("min-h-11") &&
      (files.caseFooter.match(/className={actionClassName}/g) ?? []).length === 3 &&
      files.caseFooter.includes("href={`/work/${nextProject.id}`}") &&
      files.caseFooter.includes("Next case") &&
      files.caseFooter.includes('href="/#systems"') &&
      files.caseFooter.includes("Back to selected work") &&
      files.caseFooter.includes('href="mailto:anjelikatan99@gmail.com"') &&
      files.caseFooter.includes("Discuss this work")
  },
  {
    name: "about portrait uses responsive next image delivery",
    pass:
      files.referenceWorkbench.includes('import Image from "next/image"') &&
      files.referenceWorkbench.includes("<Image") &&
      files.referenceWorkbench.includes("src={aboutPortrait.src}") &&
      files.referenceWorkbench.includes("alt={aboutPortrait.alt}") &&
      files.referenceWorkbench.includes("width={72}") &&
      files.referenceWorkbench.includes("height={72}") &&
      files.referenceWorkbench.includes('sizes="72px"') &&
      files.data.includes('src: "/me2-portrait.png"') &&
      optimizedPortraitWidth > 0 &&
      optimizedPortraitWidth <= 180 &&
      optimizedPortraitHeight > 0 &&
      optimizedPortraitHeight <= 180 &&
      optimizedPortrait.bytes <= 100_000
  },
  {
    name: "homepage social image has real dimensions and portfolio content",
    pass:
      files.homeOg.includes('import { ImageResponse } from "next/og"') &&
      files.homeOg.includes("width: 1200") &&
      files.homeOg.includes("height: 630") &&
      files.homeOg.includes('contentType = "image/png"') &&
      files.homeOg.includes("portfolio.person.name") &&
      files.homeOg.includes("portfolio.person.title") &&
      files.homeOg.includes("portfolio.person.intro") &&
      files.homeOg.includes("export const alt = portfolio.seo.socialImageAlt")
  },
  {
    name: "case social images are static, typed and case specific",
    pass:
      files.caseOg.includes('import { ImageResponse } from "next/og"') &&
      files.caseOg.includes("width: 1200") &&
      files.caseOg.includes("height: 630") &&
      files.caseOg.includes('contentType = "image/png"') &&
      files.caseOg.includes("generateStaticParams") &&
      files.caseOg.includes("portfolio.selectedWork.map") &&
      files.caseOg.includes("project.caseTitle") &&
      files.caseOg.includes("project.impactLabel")
  },
  {
    name: "homepage metadata uses absolute canonical and social URLs",
    pass:
      files.layout.includes("new URL(\"/\", portfolio.seo.siteUrl).toString()") &&
      files.layout.includes("new URL(portfolio.seo.socialImage, portfolio.seo.siteUrl).toString()") &&
      files.layout.includes("canonical: homeUrl") &&
      files.layout.includes("url: homeUrl") &&
      files.layout.includes("url: homeSocialImageUrl") &&
      files.layout.includes("images: [homeSocialImageUrl]")
  },
  {
    name: "case metadata is complete and uses absolute route URLs",
    pass:
      files.caseRoute.includes("new URL(`/work/${project.id}`, portfolio.seo.siteUrl).toString()") &&
      files.caseRoute.includes("new URL(`/work/${project.id}/opengraph-image`, portfolio.seo.siteUrl).toString()") &&
      files.caseRoute.includes("canonical: caseUrl") &&
      files.caseRoute.includes("openGraph:") &&
      files.caseRoute.includes("url: caseUrl") &&
      files.caseRoute.includes("url: socialImageUrl") &&
      files.caseRoute.includes("twitter:") &&
      files.caseRoute.includes('card: "summary_large_image"') &&
      files.caseRoute.includes("images: [socialImageUrl]")
  },
  {
    name: "square portrait is not reused as a social image",
    pass:
      !files.layout.includes("me2.png") &&
      !files.caseRoute.includes("me2.png") &&
      !files.homeOg.includes("me2.png") &&
      !files.caseOg.includes("me2.png") &&
      !files.data.includes('socialImage: "/me2.png"')
  },
  {
    name: "selected work renders typed evidence labels and the confidentiality note",
    pass:
      files.page.includes("project.impactLabel") &&
      files.page.includes("The lead case follows a client programme from data and product rules through launch and live operation. The next three show how I shaped and expanded the platform systems underneath it with engineering, design and QA.") &&
      files.page.includes("Client names, screenshots and identifying operational details are generalized or omitted. Metrics are labelled as production, QA/test or bounded operational evidence.") &&
      [
        "Bounded operational check",
        "Production outcome",
        "Production exposure",
        "QA/test validation"
      ].every((label) => files.data.includes(`impactLabel: "${label}"`))
  },
  {
    name: "AI actual uses stay separate from onboarding support by design",
    pass:
      !/uses:\s*\[[\s\S]*?onboarding support by design[\s\S]*?\]/.test(files.data) &&
      files.data.includes("It is designed to support onboarding, but I do not claim team-wide onboarding use or adoption.")
  },
  {
    name: "mobile workbench links to evidence and uses a compact identity",
    pass:
      files.referenceWorkbench.includes("function MobileWorkbenchFlow") &&
      files.referenceWorkbench.includes('href: "#systems"') &&
      files.referenceWorkbench.includes('href: "#work"') &&
      files.referenceWorkbench.includes("min-h-11") &&
      files.referenceWorkbench.includes("function MobileAboutIdentifier") &&
      files.referenceWorkbench.includes("sm:hidden") &&
      files.referenceWorkbench.includes("hidden sm:block")
  },
  {
    name: "desktop workbench removes the redundant floating decision card",
    pass:
      !files.referenceWorkbench.includes("Product decision") &&
      !files.referenceWorkbench.includes("Testable delivery") &&
      !files.referenceWorkbench.includes("data-workbench-destination")
  },
  {
    name: "mobile menu selection transfers focus to a focusable homepage destination",
    pass:
      files.frameNav.includes("handleMobileNavigation") &&
      files.frameNav.includes("destination.focus({ preventScroll: true })") &&
      files.frameNav.includes('destination.scrollIntoView({ block: "start" })') &&
      files.frameNav.includes("requestAnimationFrame") &&
      ["top", "systems", "work", "product-memory", "experience", "contact"].every((id) =>
        new RegExp(`id=[\"']${id}[\"'][^>]*tabIndex=\\{-1\\}`).test(files.page) &&
        new RegExp(`id=[\"']${id}[\"'][^>]*focus-visible:ring-2`).test(files.page)
      )
  },
  {
    name: "resume generation rejects multi-page or unlinked contact output",
    pass:
      files.resumeGenerator.includes("if chosen_pages != 1:") &&
      files.resumeGenerator.includes("verify_required_links") &&
      files.resumeGenerator.includes("mailto:") &&
      files.resumeGenerator.includes("linkedin.com/") &&
      files.resumeGenerator.includes("anjelikatan.com") &&
      files.resumeGenerator.indexOf("verify_required_links") < files.resumeGenerator.indexOf("OUTPUT.write_bytes")
  }
);

const bannedHeroLanguage = [
  "magic",
  "visionary",
  "revolutionized",
  "genius",
  "transformative"
];

const lowerData = files.data.toLowerCase();
for (const word of bannedHeroLanguage) {
  checks.push({
    name: `portfolio data avoids inflated hero language: ${word}`,
    pass: !lowerData.includes(word)
  });
}

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
  console.error("Portfolio design validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}`);
  }
  process.exit(1);
}

console.log(`Portfolio design validation passed (${checks.length} checks).`);
