# Technical Product Manager portfolio and résumé implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the live portfolio website and résumé to position Anjelika for Australian Technical Product Manager roles in B2B2C SaaS, with evidence-backed platform, integration, workflow, commerce, identity, and operational-product stories.

**Architecture:** Keep the existing Next.js clarity-workbench design and data-driven content model. Replace the current positioning and case-study data, update the two case-order consumers and content validation, then regenerate the résumé PDF from its Markdown source. Run three independent review personas against the integrated draft and revise until no critical or high-severity concern remains.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Node validation scripts, Python/ReportLab résumé generation, Markdown, PDF rendering tools.

## Global Constraints

- Primary target: Australian Technical Product Manager roles in B2B2C SaaS.
- Secondary titles: Product Manager and Platform Product Manager.
- Do not lead with a Senior title or describe Anjelika as an early-career generalist.
- Demonstrate senior-level scope through evidence rather than title inflation.
- Preserve the existing uncommitted clarity-workbench redesign and avoid unrelated visual/component changes.
- Separate production outcomes, client acceptance, internal confirmation, and QA/test validation.
- Credit engineering, QA, design, executive, and client contributions accurately.
- Do not fabricate commercial, adoption, revenue, retention, conversion, or efficiency metrics.
- Do not publish private chat links, credentials, confidential client material, or secret-bearing URLs.
- Do not deploy or publish the website.
- The source of truth for claims is `/Users/anjelikatan/Documents/projects/rai-features/portfolio-research/`.

---

### Task 1: Establish a tested content baseline

**Files:**

- Inspect: `src/data/portfolio.ts`
- Inspect: `src/app/page.tsx`
- Inspect: `src/app/work/[id]/page.tsx`
- Inspect: `scripts/validate-portfolio-design.mjs`
- Inspect: `resume-source.md`
- Create: `.superpowers/sdd/progress.md`

**Interfaces:**

- Consumes: the current dirty clarity-workbench branch and approved positioning spec.
- Produces: a recorded baseline commit/status, baseline test result, and durable task ledger.

- [ ] **Step 1: Record the existing state without changing it**

Run `git status --short`, `git diff --stat`, and `git log -5 --oneline`. Save the starting commit hash in the task report. Existing modifications are user-owned and must not be reset or discarded.

- [ ] **Step 2: Run the existing content/design validation**

Run `pnpm test`. Expected result: the existing portfolio validation passes before content changes. If it fails, record the exact pre-existing failures and do not attribute them to the rewrite.

- [ ] **Step 3: Run the existing production build**

Run `pnpm build`. Expected result: Next.js production build exits 0. Record any pre-existing warning separately.

- [ ] **Step 4: Initialise the durable progress ledger**

Create `.superpowers/sdd/progress.md` with the plan path, baseline commit, baseline test/build results, and `Task 1: complete`.

### Task 2: Rewrite portfolio positioning and flagship cases

**Files:**

- Modify: `src/data/portfolio.ts`
- Modify: `src/app/page.tsx`
- Modify: `src/app/work/[id]/page.tsx`
- Modify: `scripts/validate-portfolio-design.mjs`

**Interfaces:**

- Consumes: approved design spec and claim evidence from `portfolio-review.md`, `case-study-readiness-audit.md`, `evidence-ledger.md`, `infinox-role-audit.md`, `workflow-adoption-continuation.md`, `large-scale-production-outcome.md`, `scale-client-outcome-continuation.md`, `identity-client-outcome-continuation.md`, and `client-impact-metrics.md`.
- Produces: a portfolio data object whose hero, supporting stories, experience, SEO, and three case studies match the Technical PM positioning; both case-order arrays reference the new IDs.

- [ ] **Step 1: Update the hero and role positioning**

Set the primary title to `Technical Product Manager | B2B2C platforms, integrations and workflows` and make the first screen state that Anjelika turns client and operational requirements into reusable platform capability across APIs, workflows, commerce, identity, and support tooling. Keep the Computer Science background, startup context, email, LinkedIn, portrait, résumé link, and accurate B2B2C label. Do not use `Senior`, `early-career`, or `generalist` in the public headline or summary.

- [ ] **Step 2: Rewrite the six workbench stories**

Keep the existing labels `API`, `Webhooks`, `Workflows`, `Store`, `Gamification`, and `AI Automation` so the current interactive design remains valid. Rewrite each story around verifiable product work:

- API: deterministic external contracts, client payload translation, permissions, validation, and the 100-check Store API review.
- Webhooks: incoming/outgoing event contracts, one-way callback scope, logging, failure isolation, and retry/idempotency decisions.
- Workflows: progressive platformisation, inspectable run history, stop-on-error/retry semantics, and named-client operation with explicit limits.
- Store: eligibility, redemption methods, status consistency, refunds, fulfilment handoff, SDK/API contracts, and nearly 3,000 historical orders corrected.
- Gamification: milestone/referral/social logic as supporting breadth, without claiming commercial lift.
- AI Automation: operational adoption of grounded PRD and QA workflows, with Rob and Thuta credited for generator concept/implementation and without the unsupported one-week-to-three-days claim.

- [ ] **Step 3: Replace the three flagship cases**

Use these exact IDs and order:

1. `store-redemption-platform`
2. `custom-workflows-platform`
3. `large-community-operations`

Each case must provide `label`, `featured`, `detailLayout`, `title`, `summary`, `caseTitle`, `problemLine`, `decisionLine`, `outcomeLine`, tags, scope, impact/proof line, bullets, detail, evolution phases where useful, and detail sections compatible with the existing `Portfolio` type.

Store must include the nearly 3,000 historical-order correction and distinguish Anjelika’s product/data decision from engineering implementation. Workflows must include platform progression, operational exposure, named-client use at the evidence-supported level, and remaining reliability/verification gaps. Scale must distinguish the approximately 360 MB/200,000-user observation, 300,000-record QA validation, 50,000-record update under 15 minutes, smaller production batches, and unresolved cancellation/exactly-once limits.

- [ ] **Step 4: Rewrite supporting work, experience, platform groups, and SEO**

Use supporting groups for safe identity, deterministic APIs and QA, client incident/recovery work, integrations, and AI-assisted operations. Keep ReturningAI as `Product Manager`, May 2024 to Present, but make its summary match B2B2C platform scope. Keep Great Eastern concise. Update SEO title/description for Technical Product Manager and B2B2C platform work without changing the placeholder site URL unless a real production domain is already configured elsewhere.

- [ ] **Step 5: Update the case-order consumers**

Replace the legacy IDs in `src/app/page.tsx` and `src/app/work/[id]/page.tsx` with the three exact new IDs in Step 3.

- [ ] **Step 6: Update content validation**

Replace the hard-coded old hero and case-content assertions in `scripts/validate-portfolio-design.mjs` with checks for the Technical PM title, B2B2C language, all three new IDs, evidence-boundary language (`QA` or `test`, `production`, and a limitation/remaining-risk phrase), preserved six workbench labels, and absence of `early-career product generalist`, the unsupported one-week-to-three-days claim, and legacy flagship IDs.

- [ ] **Step 7: Verify the portfolio draft**

Run `pnpm test` and `pnpm build`. Expected: validation passes and the production build exits 0.

### Task 3: Rewrite and regenerate the résumé

**Files:**

- Modify: `resume-source.md`
- Modify: `public/resume.pdf` through `scripts/generate_resume_pdf.py`
- Inspect: `scripts/generate_resume_pdf.py`

**Interfaces:**

- Consumes: approved résumé design, the portfolio draft, and the same evidence base as Task 2.
- Produces: an ATS-readable Markdown résumé and generated PDF with matching claims.

- [ ] **Step 1: Rewrite the header and summary**

Use `Technical Product Manager | B2B2C Platforms, Integrations & Workflows` as the title. Keep the existing verified contact details and relocation line unless the current date/location makes a factual update necessary. The summary must state the Computer Science background, May 2024-present product tenure, B2B2C platform environment, and strength in translating client/operational requirements into reusable, operable systems. Do not use `Senior`, `early-career`, or `generalist`.

- [ ] **Step 2: Replace ReturningAI bullets with evidence-led bullets**

Use seven bullets, ordered as follows:

1. Store/redemption platform and nearly 3,000 historical-order status correction.
2. Custom Workflows progression and evidence-qualified client operation.
3. Large-community hardening with 200,000/300,000 QA context and 50,000-record update under 15 minutes.
4. Two-phase safe client identifier strategy and production/QA boundaries.
5. Client integration delivery across APIs, SDKs, webhooks, widgets, CRM/data systems, and regional/operational constraints without claiming sole implementation.
6. Operability and quality: logs, failure states, 100-check Store API review, and QA rejection/sign-off loops.
7. Grounded AI-assisted delivery adoption with accurate attribution and no unsupported efficiency metric.

Each bullet must fit the generated résumé, avoid repeating the same opening verb, and label QA/test scale where applicable.

- [ ] **Step 3: Tighten prior experience and ATS strengths**

Keep two Great Eastern bullets. Organize strengths into Product & Platform, APIs & Integrations, Delivery & Quality, Data & Technical Fluency, Tools, Domain, and Languages. Remove AES encryption and any engineering-level technology claim that is not needed for the target role; retain REST APIs, OAuth, SQL, webhooks, workflow/rules logic, product analytics/data fluency, and relevant AI tools at product-use level.

- [ ] **Step 4: Generate and inspect the PDF metadata/page count**

Run the bundled workspace dependency loader if the project Python cannot import ReportLab or pypdf. Run `python3 scripts/generate_resume_pdf.py`. Expected output: `public/resume.pdf`, preferably one page, with no parser error. Use `pdfinfo public/resume.pdf` or the bundled PDF runtime to confirm page count and metadata.

- [ ] **Step 5: Verify source/PDF consistency**

Extract PDF text with `pdftotext public/resume.pdf -` and confirm the Technical Product Manager title, all seven ReturningAI bullets, dates, contact details, strengths, and education are present without truncation.

### Task 4: Run independent critical review and revision loops

**Files:**

- Inspect: `src/data/portfolio.ts`
- Inspect: `resume-source.md`
- Inspect: generated `public/resume.pdf`
- Create: `.superpowers/sdd/reviews/hiring-manager.md`
- Create: `.superpowers/sdd/reviews/head-of-product.md`
- Create: `.superpowers/sdd/reviews/evidence-ats.md`
- Modify: Task 2 and Task 3 files when findings are accepted.

**Interfaces:**

- Consumes: the integrated first drafts and evidence sources.
- Produces: severity-ranked independent reviews and revised copy with no unresolved Critical or High finding.

- [ ] **Step 1: Dispatch the Australian hiring-manager review**

Ask the reviewer to make a 20-second shortlist decision for Technical Product Manager and Product Manager roles, identify reasons to reject, assess title/tenure fit, scan clarity, and rank findings as Critical, High, Medium, or Low. Require exact copy references and proposed direction, not a wholesale rewrite.

- [ ] **Step 2: Dispatch the Head of Product review**

Ask the reviewer to assess product judgment, prioritisation, technical/platform depth, ownership versus collaboration, client-to-platform thinking, execution follow-through, and whether the work signals readiness for the target role without title inflation.

- [ ] **Step 3: Dispatch the evidence and ATS review**

Ask the reviewer to cross-check every quantified or outcome claim against the research files, flag attribution errors and confidential/public-safety issues, and assess ATS title/keyword coverage, parsing, density, repetition, and unsupported technology claims.

- [ ] **Step 4: Adjudicate and apply findings**

The primary agent verifies each Critical/High claim against the source, applies justified changes, records rejected findings with evidence in the review file, and reruns `pnpm test`, `pnpm build`, résumé generation, and PDF text extraction after edits.

- [ ] **Step 5: Re-review until the severity gate passes**

Return revised files to the same three reviewers. Repeat until all three report no unresolved Critical or High finding. Medium/Low findings must be either fixed or listed with a concise reason for acceptance.

### Task 5: Humanise and perform final visual/content verification

**Files:**

- Modify if needed: `src/data/portfolio.ts`
- Modify if needed: `resume-source.md`
- Regenerate if needed: `public/resume.pdf`
- Create: `.superpowers/sdd/final-verification.md`

**Interfaces:**

- Consumes: reviewer-approved copy.
- Produces: natural final copy and a verified portfolio/resume handoff.

- [ ] **Step 1: Apply the humanizer audit**

Audit for promotional language, vague transformation claims, AI vocabulary, repeated three-part constructions, robotic section cadence, excessive bold-style emphasis in résumé source, and unsupported confidence. Preserve ATS terms, exact product vocabulary, evidence, and Anjelika’s direct voice. The final public copy must contain no em or en dashes.

- [ ] **Step 2: Run full automated verification**

Run `pnpm test`, `pnpm build`, `python3 scripts/generate_resume_pdf.py`, `pdftotext public/resume.pdf -`, `git diff --check`, and public-copy scans for credentials, private ClickUp/Slack/Teams links, `/Users/` paths, `early-career`, unsupported efficiency claims, and legacy case IDs. Record commands and results in `.superpowers/sdd/final-verification.md`.

- [ ] **Step 3: Render and inspect the résumé**

Follow the PDF skill workflow to render every résumé page to PNG. Inspect legibility, margins, line wrapping, hierarchy, bullet density, contact information, and absence of clipping. Revise and regenerate until the PDF is visually sound.

- [ ] **Step 4: Render and inspect the website**

Start the local site, inspect the homepage and all three case routes at desktop and mobile widths, and verify navigation, content hierarchy, case order, CTA/resume link, missing content, overflow, and obvious visual regressions. Do not redesign unrelated components.

- [ ] **Step 5: Review the final diff and preserve unrelated work**

Compare the final files to the starting state and confirm that only planned content, case ordering, validation, résumé source/PDF, and verification artefacts changed. Do not reset, discard, or absorb unrelated pre-existing modifications.
