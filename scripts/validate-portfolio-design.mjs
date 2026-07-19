import { existsSync, readFileSync } from "node:fs";

function readSource(path) {
  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

const files = {
  data: readSource("src/data/portfolio.ts"),
  layout: readSource("src/app/layout.tsx"),
  clarityInteractions: readSource("src/components/clarity-interactions.tsx"),
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
    name: "hero bio moves Computer Science background into about me",
    pass:
      files.data.includes("With a Computer Science background") &&
      files.page.includes("aboutText={person.heroLines[1]}") &&
      !files.page.includes("caption={person.heroLines[0]}")
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
    pass: files.page.includes("PortfolioFrame") && files.frameNav.includes("AT")
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
      files.referenceWorkbench.includes("lg:block")
  },
  {
    name: "reference hero replaces the workflow explainer with about me",
    pass:
      files.referenceWorkbench.includes("About me") &&
      files.referenceWorkbench.includes("aboutFacts") &&
      files.referenceWorkbench.includes("aboutName") &&
      files.referenceWorkbench.includes("aboutPortrait") &&
      files.referenceWorkbench.includes("LinkedIn") &&
      files.referenceWorkbench.includes("Resume") &&
      files.referenceWorkbench.includes("Email me") &&
      !files.referenceWorkbench.includes('href="#about"') &&
      !files.referenceWorkbench.includes("<WorkflowPanel")
  },
  {
    name: "about me facts remove current role and use B2B2C domain",
    pass:
      files.data.includes("B2B2C") &&
      !files.data.includes('label: "Current role"') &&
      files.page.includes("heroAboutFacts") &&
      files.page.includes('fact.label !== "Current role"')
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
      files.referenceWorkbench.includes("Product decision") &&
      files.referenceWorkbench.includes("Delivery, evidence and limits") &&
      files.referenceWorkbench.includes('className="grid gap-3 lg:hidden"') &&
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
      files.page.includes("I make the rules, failures and handoffs easier to see.") &&
      files.page.includes("person.heroLines[1]") &&
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
      files.clarityInteractions.includes("overflow-x-auto") &&
      files.clarityInteractions.includes("min-w-max") &&
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
      files.page.includes('eyebrow="Overview"') &&
      files.page.includes('label="Selected work"') &&
      files.page.includes('label="Capabilities"') &&
      files.page.includes('sectionLabel="AI practice"') &&
      files.page.includes('label="Experience"') &&
      files.page.includes(">Contact</p>") &&
      files.page.includes("I make the rules, failures and handoffs easier to see.") &&
      files.page.includes("Let's talk about the product, platform or integration problem you're trying to untangle.")
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
      files.page.includes("Production correction") &&
      files.page.includes("Production exposure") &&
      files.page.includes("QA scale validation")
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
    name: "case-study detail component keeps transformation framing",
    pass: files.caseDetail.includes("Problem") && files.caseDetail.includes("Decision") && files.caseDetail.includes("Outcome")
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
    pass: files.frameNav.includes("aria-current={isActive ? \"location\" : undefined}")
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
      files.data.includes('siteUrl: "https://portfolio-black-tau-27.vercel.app"') &&
      files.resume.includes("portfolio-black-tau-27.vercel.app") &&
      files.resumeGenerator.includes('part.endswith(".vercel.app")')
  },
  {
    name: "global styles include reduced motion handling",
    pass: files.globals.includes("prefers-reduced-motion")
  }
];

checks.push(
  {
    name: "approved zero-to-one hero is exact",
    pass:
      files.data.includes('intro: "I take complex B2B2C products from 0 to 1."') &&
      files.page.includes("const { person } = portfolio") &&
      files.page.includes("title={person.intro}") &&
      files.referenceWorkbench.includes("<h1") &&
      files.referenceWorkbench.includes("<HighlightedTitle title={title} />") &&
      files.data.includes("ambiguous client and operational needs") &&
      files.data.includes("Delivery, evidence and limits")
  },
  {
    name: "case evidence fields and artifacts are structured",
    pass:
      ["team", "delivery", "artifact"].every((field) => files.data.includes(`${field}:`)) &&
      files.caseArtifact.includes("<figure") &&
      files.caseArtifact.includes("<figcaption") &&
      files.caseDetail.includes("Observed result")
  },
  {
    name: "landmarks and mobile navigation are accessible",
    pass:
      files.page.includes('id="main-content"') &&
      files.page.indexOf("<FrameNav />") < files.page.indexOf('<main id="main-content">') &&
      files.page.indexOf("</main>") < files.page.indexOf("<PortfolioFooter") &&
      files.frameNav.includes("Skip to main content") &&
      files.frameNav.includes('href="#main-content"') &&
      files.frameNav.includes("const [isMenuOpen, setIsMenuOpen] = useState(false)") &&
      files.frameNav.includes("const triggerRef = useRef<HTMLButtonElement>(null)") &&
      files.frameNav.includes("aria-expanded") &&
      files.frameNav.includes("aria-controls") &&
      files.frameNav.includes('id="mobile-portfolio-nav"') &&
      files.frameNav.includes("Escape") &&
      files.frameNav.includes("triggerRef.current?.focus()") &&
      files.frameNav.includes('window.matchMedia("(min-width: 768px)")') &&
      files.frameNav.includes("min-h-11 min-w-11")
  },
  {
    name: "hero support, technical proof and independent actions are exact",
    pass:
      files.data.includes('intro: "I take complex B2B2C products from 0 to 1."') &&
      files.page.includes("supportText={person.heroLines[0]}") &&
      files.page.includes("technicalText={person.heroTechnical}") &&
      files.page.includes("proofLine={person.heroProof}") &&
      files.page.includes('label: "View flagship case"') &&
      files.page.includes('label: "View resume"') &&
      files.referenceWorkbench.includes("supportText: string") &&
      files.referenceWorkbench.includes("technicalText: string") &&
      files.referenceWorkbench.includes("proofLine: string") &&
      files.referenceWorkbench.includes("primaryAction: { label: string; href: string }") &&
      files.referenceWorkbench.includes("secondaryAction: { label: string; href: string }") &&
      files.referenceWorkbench.indexOf("{supportText}") < files.referenceWorkbench.indexOf("{proofLine}") &&
      files.referenceWorkbench.includes("{technicalText}") &&
      files.referenceWorkbench.includes("{primaryAction.label}") &&
      files.referenceWorkbench.includes("{secondaryAction.label}")
  },
  {
    name: "global layout does not clip horizontal overflow",
    pass:
      !/html\s*\{[^}]*overflow-x:\s*(?:hidden|clip)/s.test(files.globals) &&
      !/body\s*\{[^}]*overflow-x:\s*(?:hidden|clip)/s.test(files.globals)
  },
  {
    name: "capabilities use tabs and ecosystems use static articles",
    pass:
      files.clarityInteractions.includes('role="tablist"') &&
      files.clarityInteractions.includes('role="tab"') &&
      files.clarityInteractions.includes('role="tabpanel"') &&
      files.clarityInteractions.includes("<article") &&
      !files.clarityInteractions.includes("aria-pressed={isActive}")
  },
  {
    name: "case pages end with onward actions",
    pass:
      files.caseFooter.includes("Next case") &&
      files.caseFooter.includes("Back to selected work") &&
      files.caseFooter.includes("Discuss this work")
  },
  {
    name: "social images have real dimensions",
    pass:
      files.homeOg.includes("width: 1200") &&
      files.homeOg.includes("height: 630") &&
      files.caseOg.includes("width: 1200") &&
      files.caseOg.includes("height: 630")
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
