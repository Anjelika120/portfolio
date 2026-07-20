# Zero-to-One Evidence-First Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio communicate Product Manager, B2B2C, 0-to-1 capability and live follow-through within five seconds, then prove that positioning through accessible case metadata, sanitized system artifacts and evidence-qualified copy.

**Architecture:** Keep `src/data/portfolio.ts` as the content source of truth, extend each case with typed team, delivery and artifact fields, and render those fields through focused presentation components. Preserve the existing static Next.js architecture while restructuring landmarks, mobile navigation, hero behavior, case routes and metadata. Use the existing validator as the TDD harness, then add production-render, PDF and two-agent review gates.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3, ReportLab/PyPDF, repository validator, static route generation.

## Global Constraints

- `Product Manager` remains the visible professional title everywhere.
- The homepage H1 is exactly `I take complex B2B2C products from 0 to 1.`
- The 0-to-1 claim is a portfolio pattern; Store remains a platform-evolution story.
- Keep the flagship order: multi-region programme, Store, Custom Workflows, large-community operations.
- Client identities, raw records, payloads, secrets and identifying screenshots remain excluded.
- Engineering architecture and implementation remain shared work.
- Every metric retains its production, QA/test or bounded-operational label.
- No revenue, retention, conversion, AI time saving, defect reduction or team-adoption claim may be added.
- Principal touch targets use a minimum 44 by 44 CSS pixels.
- Visual QA is mandatory; if render tooling is unavailable, completion remains unverified.
- The resume remains one page, ATS readable and linked to `https://portfolio-black-tau-27.vercel.app`.

## File Responsibility Map

- `src/data/portfolio.ts`: approved copy, evidence labels, case metadata and artifact data.
- `src/app/page.tsx`: homepage composition, landmarks, hero wiring and section order.
- `src/components/frame-nav.tsx`: desktop and mobile navigation behavior.
- `src/components/reference-workbench-visual.tsx`: responsive hero, mobile flow, portrait and actions.
- `src/components/clarity-interactions.tsx`: ARIA tabs and static ecosystem groups.
- `src/components/case-study-artifact.tsx`: accessible artifact renderer for all four cases.
- `src/components/case-study-detail.tsx`: case content, metadata rail and observed-result framing.
- `src/components/case-study-footer.tsx`: next-case, selected-work and contact actions.
- `src/app/work/[id]/page.tsx`: case route header, metadata and page composition.
- `src/app/opengraph-image.tsx`: 1200 by 630 homepage social image.
- `src/app/work/[id]/opengraph-image.tsx`: 1200 by 630 case social image.
- `resume-source.md`, `scripts/generate_resume_pdf.py`, `public/resume.pdf`: one-page resume source and artifact.
- `scripts/validate-portfolio-design.mjs`: regression assertions for positioning, structure and evidence boundaries.

---

### Task 1: Expand the validation harness

**Files:**
- Modify: `scripts/validate-portfolio-design.mjs`
- Test: `scripts/validate-portfolio-design.mjs`

**Interfaces:**
- Consumes: current source-text validation pattern in `files` and `checks`.
- Produces: failing assertions for the approved positioning, case schema, accessibility structure and route metadata.

- [ ] **Step 1: Add source files to the validator map**

```js
const files = {
  // existing entries remain
  layout: readSource("src/app/layout.tsx"),
  caseArtifact: readSource("src/components/case-study-artifact.tsx"),
  caseFooter: readSource("src/components/case-study-footer.tsx"),
  homeOg: readSource("src/app/opengraph-image.tsx"),
  caseOg: readSource("src/app/work/[id]/opengraph-image.tsx")
};
```

- [ ] **Step 2: Add exact regression checks**

```js
checks.push(
  {
    name: "approved zero-to-one hero is exact",
    pass:
      files.data.includes('intro: "I take complex B2B2C products from 0 to 1."') &&
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
      files.frameNav.includes("Skip to main content") &&
      files.frameNav.includes("aria-expanded") &&
      files.frameNav.includes("aria-controls") &&
      files.frameNav.includes("Escape")
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
```

- [ ] **Step 3: Run the validator and confirm the new checks fail**

Run: `pnpm test`

Expected: FAIL on the newly added zero-to-one, artifact, navigation, tabs, footer and social-image checks.

- [ ] **Step 4: Commit the failing regression checks**

```bash
git add scripts/validate-portfolio-design.mjs
git commit -m "test: define evidence-first portfolio requirements"
```

---

### Task 2: Update positioning, evidence labels and resume source

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `resume-source.md`
- Test: `scripts/validate-portfolio-design.mjs`

**Interfaces:**
- Produces: `portfolio.person.heroProof`, `portfolio.person.heroTechnical`, and per-case `team`, `delivery`, `artifact` objects consumed by later tasks.

- [ ] **Step 1: Replace the hero and About data**

```ts
person: {
  name: "Anjelika Tan",
  title: "Product Manager",
  intro: "I take complex B2B2C products from 0 to 1.",
  heroLines: [
    "I turn ambiguous client and operational needs into testable product capabilities, then carry them through engineering, QA, launch and live use.",
    "I'm a Product Manager with a Computer Science background. I work best when a client need exposes a bigger platform problem, whether that means a new workflow, integration, identity rule or operating tool."
  ],
  heroTechnical:
    "My Computer Science background helps me work closely with APIs, integrations, workflows and AI-enabled product operations.",
  heroProof:
    "0-to-1 capabilities: workflow execution, client-owned identity and a source-linked AI practice. Platform evolution and live operation: multi-region loyalty, Store and large-community operations.",
```

- [ ] **Step 2: Add case metadata and artifact data**

Use this exact shape on every selected-work item:

```ts
team: "Client stakeholders, product, engineering, QA, portal and data teams",
delivery: "Live multi-region operation with ongoing incident recovery",
artifact: {
  title: "Account lifecycle",
  caption: "A sanitized view of the product boundaries that had to work as one programme.",
  stages: [
    { label: "Data and identity", detail: "Field mapping, account matching and launch risks" },
    { label: "Member experience", detail: "Authenticated regional reward surfaces" },
    { label: "Fulfilment", detail: "Eligibility, trading-credit automation and order states" },
    { label: "Operation", detail: "Monitoring, reconciliation, support and recovery" }
  ],
  contribution: "Connected client goals and incidents to product rules and testable team handoffs.",
  evidence: "Live programme use is proven; the 66-to-66 check was bounded and a later 19-order outage remained visible."
}
```

Add equivalent sanitized artifacts for the other cases using these stage labels:

```ts
// Store
["Eligibility", "Purchase", "Fulfilment", "Status and history"]

// Custom Workflows
["Trigger", "Queue", "Actions", "Error and history"]

// Large-community operations
["Queued", "Running", "Partial or error", "Cancelled or duplicate"]
```

- [ ] **Step 3: Replace case evidence labels**

```ts
// multi-region
impactLabel: "Bounded operational check"
// Store
impactLabel: "Production outcome"
// Custom Workflows
impactLabel: "Production exposure"
// large-community
impactLabel: "QA/test validation"
```

- [ ] **Step 4: Update the ReturningAI summary, selected-work copy and SEO**

Keep the user-confirmed first/sole PM context and describe the work directly:

```ts
summary:
  "First and sole Product Manager for a configurable B2B2C loyalty platform, working across client integrations, administrative tooling and member reward experiences. I introduced clearer acceptance criteria, operational visibility and durable product context alongside delivery."
```

```ts
seo: {
  title: "Anjelika Tan | Product Manager for 0-to-1 B2B2C Products",
  description:
    "Portfolio of Anjelika Tan, a Product Manager taking complex B2B2C products from client need to launch and live operation across APIs, integrations, workflows, commerce, identity and AI-enabled product operations.",
  siteUrl: "https://portfolio-black-tau-27.vercel.app",
  socialImage: "/opengraph-image"
}
```

- [ ] **Step 5: Replace the resume summary**

```md
Product Manager with a Computer Science background who takes complex B2B2C products from ambiguous client need to testable capability, launch and live operation. My work spans APIs, integrations, workflow automation, commerce, identity and large-scale operations. I also use source-linked product context and human review to make AI-assisted delivery safer.
```

- [ ] **Step 6: Run the validator**

Run: `pnpm test`

Expected: hero, case-data, evidence-label, SEO and resume assertions pass; UI assertions from later tasks still fail.

- [ ] **Step 7: Commit the content model**

```bash
git add src/data/portfolio.ts resume-source.md
git commit -m "feat: lead portfolio with zero-to-one positioning"
```

---

### Task 3: Rebuild hero landmarks and responsive navigation

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/frame-nav.tsx`
- Modify: `src/components/reference-workbench-visual.tsx`
- Modify: `src/app/globals.css`
- Test: `scripts/validate-portfolio-design.mjs`

**Interfaces:**
- Consumes: `heroProof`, `heroTechnical`, workbench inputs and existing portfolio links.
- Produces: accessible `FrameNav`, `MobileWorkbenchFlow` and `#main-content` landmark.

- [ ] **Step 1: Add the skip link and mobile disclosure menu**

Use this state and behavior in `FrameNav`:

```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
const triggerRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      triggerRef.current?.focus();
    }
  }
  function closeAtDesktop() {
    if (window.matchMedia("(min-width: 768px)").matches) setIsMenuOpen(false);
  }
  window.addEventListener("keydown", closeOnEscape);
  window.addEventListener("resize", closeAtDesktop);
  return () => {
    window.removeEventListener("keydown", closeOnEscape);
    window.removeEventListener("resize", closeAtDesktop);
  };
}, [isMenuOpen]);
```

Render a visible-on-focus skip link and a labelled button:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-3 focus:min-h-11 focus:bg-ink focus:px-4 focus:py-3 focus:text-canvas">
  Skip to main content
</a>
<button
  ref={triggerRef}
  type="button"
  aria-expanded={isMenuOpen}
  aria-controls="mobile-portfolio-nav"
  onClick={() => setIsMenuOpen((open) => !open)}
  className="min-h-11 min-w-11 md:hidden"
>
  Menu
</button>
```

- [ ] **Step 2: Put the header outside the main landmark**

```tsx
<div className="min-h-screen bg-[#eef1eb] px-3 py-3 text-ink sm:px-5 sm:py-5">
  <PortfolioFrame>
    <FrameNav />
    <main id="main-content">
      <WorkbenchHero />
      {/* ordered homepage sections */}
    </main>
    <PortfolioFooter />
  </PortfolioFrame>
</div>
```

- [ ] **Step 3: Wire hero support, proof and actions**

Extend `ReferenceWorkbenchVisualProps` with:

```ts
supportText: string;
technicalText: string;
proofLine: string;
primaryAction: { label: string; href: string };
secondaryAction: { label: string; href: string };
```

Render the support before the proof line and use `View flagship case` plus `View resume` as independent links.

- [ ] **Step 4: Add the compact mobile flow**

```tsx
function MobileWorkbenchFlow() {
  const stages = [
    ["Client signal", "A request, operating gap or failure exposes a wider need."],
    ["Product decision", "Scope, rules, trade-offs and team boundaries become testable."],
    ["Delivery, evidence and limits", "QA, launch and live use show what worked and what remains open."]
  ];

  return (
    <ol className="grid gap-3 lg:hidden">
      {stages.map(([label, detail]) => (
        <li key={label} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-4">
          <span aria-hidden="true" className="text-accent">-&gt;</span>
          <span><strong className="block text-ink">{label}</strong><span className="text-muted">{detail}</span></span>
        </li>
      ))}
    </ol>
  );
}
```

Remove the desktop-apology copy.

- [ ] **Step 5: Update section labels and natural copy**

Use `Overview`, `Selected work`, `Capabilities`, `AI practice`, `Experience`, `Contact`. Replace the capability title with `I make the rules, failures and handoffs easier to see.` and the contact title with `Let's talk about the product, platform or integration problem you're trying to untangle.`

- [ ] **Step 6: Run tests and commit**

Run: `pnpm test`

Expected: hero, landmark and mobile-navigation assertions pass.

```bash
git add src/app/page.tsx src/components/frame-nav.tsx src/components/reference-workbench-visual.tsx src/app/globals.css
git commit -m "feat: make the portfolio hero responsive and accessible"
```

---

### Task 4: Add case metadata, artifacts and conversion paths

**Files:**
- Create: `src/components/case-study-artifact.tsx`
- Create: `src/components/case-study-footer.tsx`
- Modify: `src/components/case-study-detail.tsx`
- Modify: `src/app/work/[id]/page.tsx`
- Test: `scripts/validate-portfolio-design.mjs`

**Interfaces:**
- Consumes: `project.artifact`, `project.team`, `project.delivery`, `project.scope`, `project.impactLabel` and ordered cases.
- Produces: `CaseStudyArtifact` and `CaseStudyFooter` components.

- [ ] **Step 1: Create the accessible artifact renderer**

```tsx
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
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <p><strong>My contribution:</strong> {artifact.contribution}</p>
        <p><strong>Observed result or limit:</strong> {artifact.evidence}</p>
      </div>
    </figure>
  );
}
```

- [ ] **Step 2: Replace the duplicate case rail with metadata**

Render `My role`, `Scope`, `Team`, `Delivery` and `project.impactLabel` in the case header. Change the third framing label from `Outcome` to `Observed result`.

- [ ] **Step 3: Insert the artifact after Problem/Decision/Observed result**

```tsx
<CaseStudyArtifact artifact={project.artifact} />
```

- [ ] **Step 4: Create the end-of-case actions**

```tsx
export function CaseStudyFooter({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <nav aria-label="Case study actions" className="grid gap-3 border-t border-line py-8 sm:grid-cols-3">
      <a className="min-h-11" href={`/work/${nextProject.id}`}>Next case: {nextProject.title}</a>
      <a className="min-h-11" href="/#systems">Back to selected work</a>
      <a className="min-h-11" href="mailto:anjelikatan99@gmail.com">Discuss this work</a>
    </nav>
  );
}
```

Calculate the next project from the existing ordered case array and wrap to the first case.

- [ ] **Step 5: Run tests and build**

Run: `pnpm test && pnpm build`

Expected: validator passes the case schema, artifact and footer checks; all four static case routes build.

- [ ] **Step 6: Commit**

```bash
git add src/components/case-study-artifact.tsx src/components/case-study-footer.tsx src/components/case-study-detail.tsx 'src/app/work/[id]/page.tsx'
git commit -m "feat: add evidence-led case artifacts and navigation"
```

---

### Task 5: Correct interaction semantics and resume behavior

**Files:**
- Modify: `src/components/clarity-interactions.tsx`
- Modify: `src/components/reference-workbench-visual.tsx`
- Modify: `src/app/page.tsx`
- Delete if unused: `src/components/download-open-link.tsx`
- Test: `scripts/validate-portfolio-design.mjs`

**Interfaces:**
- Produces: keyboard-operable `InputStoryExplorer` and static `PlatformEcosystem`.

- [ ] **Step 1: Convert the capability controls to tabs**

Keep refs for each tab and implement arrow movement:

```tsx
function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
  const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1
    : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
  if (!direction) return;
  event.preventDefault();
  const nextIndex = (index + direction + stories.length) % stories.length;
  tabRefs.current[nextIndex]?.focus();
}
```

Use `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `tabIndex`, and a `role="tabpanel"` labelled by the selected tab. Do not activate a story merely on focus.

- [ ] **Step 2: Render ecosystem groups as static articles**

Remove `activeGroup`, `aria-pressed`, event handlers and dimming. Each group becomes:

```tsx
<article className="rounded-lg border border-line bg-surface p-5">
  <h3 className="text-sm font-semibold text-accent">{group.title}</h3>
  <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
  {/* existing logo list */}
</article>
```

- [ ] **Step 3: Make resume actions singular**

Replace `DownloadOpenLink` usage with normal anchors labelled `View resume`. If a download link remains in the footer, use a separate anchor with `download` and the label `Download resume PDF`.

- [ ] **Step 4: Run tests and commit**

Run: `pnpm test`

Expected: tab, static-ecosystem and resume-action checks pass.

```bash
git add src/components/clarity-interactions.tsx src/components/reference-workbench-visual.tsx src/app/page.tsx src/components/download-open-link.tsx
git commit -m "fix: correct portfolio interaction semantics"
```

---

### Task 6: Fix image delivery and route metadata

**Files:**
- Create: `src/app/opengraph-image.tsx`
- Create: `src/app/work/[id]/opengraph-image.tsx`
- Modify: `src/components/reference-workbench-visual.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/work/[id]/page.tsx`
- Modify: `src/data/portfolio.ts`
- Test: `scripts/validate-portfolio-design.mjs`

**Interfaces:**
- Produces: static 1200 by 630 `ImageResponse` routes and responsive portrait delivery.

- [ ] **Step 1: Use `next/image` for the portrait**

```tsx
import Image from "next/image";

<Image
  src={aboutPortrait.src}
  alt={aboutPortrait.alt}
  width={72}
  height={72}
  sizes="72px"
  className="h-[4.5rem] w-[4.5rem] rounded-lg border border-line bg-canvas object-cover"
/>
```

- [ ] **Step 2: Create the homepage Open Graph image**

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 72, background: "#f7f8f4", color: "#16201f" }}>
      <div style={{ fontSize: 30, color: "#3a7069" }}>Anjelika Tan · Product Manager</div>
      <div style={{ marginTop: 28, maxWidth: 980, fontSize: 72, lineHeight: 1.05 }}>I take complex B2B2C products from 0 to 1.</div>
    </div>,
    size
  );
}
```

- [ ] **Step 3: Create the case Open Graph image**

Use `generateStaticParams`, resolve the project from `portfolio.selectedWork`, and render the project title plus `impactLabel` in the same 1200 by 630 visual system.

- [ ] **Step 4: Complete route metadata**

For the homepage and each case, verify title, description, canonical, Open Graph URL/title/description/image and Twitter card image. Use absolute URLs derived from `portfolio.seo.siteUrl`.

- [ ] **Step 5: Run tests and build**

Run: `pnpm test && pnpm build`

Expected: social-image checks pass and Next generates the homepage, four case pages and Open Graph image routes.

- [ ] **Step 6: Commit**

```bash
git add src/app/opengraph-image.tsx 'src/app/work/[id]/opengraph-image.tsx' src/components/reference-workbench-visual.tsx src/app/layout.tsx 'src/app/work/[id]/page.tsx' src/data/portfolio.ts
git commit -m "feat: add responsive media and social previews"
```

---

### Task 7: Regenerate and verify the one-page resume

**Files:**
- Modify if needed: `scripts/generate_resume_pdf.py`
- Modify: `public/resume.pdf`
- Test: `resume-source.md`, `public/resume.pdf`

**Interfaces:**
- Consumes: updated `resume-source.md`.
- Produces: one-page linked PDF at `public/resume.pdf`.

- [ ] **Step 1: Generate with the bundled runtime**

Run:

```bash
/Users/anjelikatan/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python scripts/generate_resume_pdf.py
```

Expected: `Wrote .../public/resume.pdf with 1 page(s)`.

- [ ] **Step 2: Verify page count and links**

Run:

```bash
/Users/anjelikatan/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python -c 'from pypdf import PdfReader; r=PdfReader("public/resume.pdf"); assert len(r.pages)==1; links=[a.get("/A",{}).get("/URI") for a in r.pages[0].get("/Annots",[])]; assert "https://portfolio-black-tau-27.vercel.app" in links; print(len(r.pages), links)'
```

Expected: one page and visible mail, portfolio and LinkedIn links.

- [ ] **Step 3: Render and inspect the PDF**

Run:

```bash
mkdir -p tmp/pdfs/resume
/Users/anjelikatan/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/pdftoppm -png -r 150 public/resume.pdf tmp/pdfs/resume/page
```

Inspect `tmp/pdfs/resume/page-1.png` for clipping, overlap, tiny type and uneven spacing.

- [ ] **Step 4: Commit**

```bash
git add resume-source.md scripts/generate_resume_pdf.py public/resume.pdf
git commit -m "docs: align resume with zero-to-one positioning"
```

---

### Task 8: Complete production verification and the two-agent review loop

**Files:**
- Modify only when a verified issue is found: affected source files.
- Test: all portfolio, route, PDF and visual behavior.

**Interfaces:**
- Consumes: completed implementation.
- Produces: zero supported P0/P1 findings and a release-ready branch.

- [ ] **Step 1: Run fresh repository verification**

Run: `pnpm test && pnpm build`

Expected: all validator checks pass; homepage and all four case routes build.

- [ ] **Step 2: Run mandatory production visual QA**

Inspect 320, 375, 768, 1024 and 1440 pixel widths plus 200 percent text zoom. Verify keyboard-only navigation, visible focus, mobile-menu open/close/Escape/focus return/destination behavior, capability-tab arrows and deliberate activation, reduced motion, case artifacts and real social previews.

Record CLS and mobile LCP under the chosen production audit profile. Required targets: CLS at or below 0.1 and mobile LCP at or below 2.5 seconds.

- [ ] **Step 3: Dispatch the content audit agent**

Give the agent the final source, sanitized corpus and explicit evidence-boundary checklist. Require `APPROVE` or P0/P1 findings with exact corrections.

- [ ] **Step 4: Dispatch the website audit agent**

Give the agent the final source and production render. Require review of five-second comprehension, mobile behavior, landmarks, keyboard interaction, artifacts, route endings, media and metadata.

- [ ] **Step 5: Fix supported findings and repeat**

For each supported P0/P1 issue, first add or tighten a validator assertion, confirm it fails, implement the correction, rerun `pnpm test && pnpm build`, and send the revision back to the same reviewer. Continue until both return `APPROVE` with no P0/P1 issues.

- [ ] **Step 6: Review material P2 findings**

Fix P2 items that affect hiring-manager comprehension, accessibility, responsive behavior, performance or trust. Record non-material polish suggestions as deferred rather than expanding scope.

- [ ] **Step 7: Commit the verified review fixes**

Inspect `git status --short`, stage the validator plus each specifically corrected implementation file, and confirm the staged diff contains no unrelated working-tree changes before committing:

```bash
git diff --cached --check
git diff --cached --stat
git commit -m "fix: close final portfolio review findings"
```

- [ ] **Step 8: Prepare release handoff**

Report the final test count, build routes, PDF page/link check, visual-QA viewports, performance measurements, reviewer verdicts, branch state and any external blocker such as expired GitHub authentication.
