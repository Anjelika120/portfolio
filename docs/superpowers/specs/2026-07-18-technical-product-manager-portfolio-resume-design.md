# Technical Product Manager portfolio and résumé design

## Goal

Reposition Anjelika Tan for Australian Technical Product Manager roles in B2B2C SaaS, with Product Manager and Platform Product Manager as secondary search titles. The portfolio and résumé must make her technical product judgment, client-to-platform translation, cross-functional delivery, and operational ownership easy to understand without overstating seniority, authorship, adoption, or commercial outcomes.

## Audience

Primary readers are Australian hiring managers, Heads of Product, founders, and technical leaders hiring for B2B2C SaaS or platform roles involving integrations, workflow automation, commerce, identity, operational tooling, or fintech-adjacent systems.

The first scan should answer four questions:

1. What role is Anjelika suited for?
2. What kind of product environment has she operated in?
3. What difficult problems has she owned?
4. What evidence supports those claims?

## Positioning

### Primary position

Technical Product Manager building B2B2C platform products across integrations, workflows, commerce, identity, and operations.

### Secondary discoverability

- Product Manager
- Platform Product Manager
- B2B2C SaaS
- API and integration products
- Workflow automation
- Operational tooling
- Fintech-adjacent and regulated product environments

### Seniority treatment

Do not lead with a Senior title. Demonstrate senior-level scope and judgment through decisions, systems ownership, collaboration, release follow-through, and evidence. Do not describe Anjelika as an “early-career product generalist”; it weakens the first impression and makes the reader focus on tenure before work quality.

### Core narrative

Anjelika translates client and operational needs into reusable B2B2C platform capability, then follows the work through engineering clarification, QA, release, supportability, and live operation. Her differentiator is designing for operability: logs, failure states, permissions, deterministic contracts, safe fallbacks, and tools that help non-engineers understand what happened.

## Portfolio information architecture

Retain the current site structure and visual redesign unless a content requirement exposes a small structural gap. This project is a content and positioning revision, not a visual redesign.

### Homepage order

1. Role-specific hero and short value proposition.
2. Compact proof strip with evidence-qualified scale and outcomes.
3. Three flagship case studies.
4. Short supporting product-decision and client-operation vignettes.
5. Experience, capability areas, and contact/resume action.

### Flagship case 1: Store and redemption platform

Tell the evolution from voucher flow to an integration-ready redemption system. Focus on reusable eligibility, redemption, status, permission, fulfilment, refund, API, SDK, and observability decisions. Use the nearly 3,000 Infinox historical purchases corrected in production as the compact outcome chain. Credit engineering implementation separately.

Do not claim Store revenue, conversion lift, callback adoption, or sustained external-commerce success without evidence.

### Flagship case 2: Custom Workflows

Show progressive platformisation across triggers/actions, transformations, concurrency, run history, retry and stop-on-error behaviour, branching, bulk operations, idempotency, and reusable events. Include named-client production use only at the level supported by evidence. Show Anjelika’s architecture challenge and decision-making without claiming sole authorship or end-to-end verification where QA could not perform it.

### Flagship case 3: Large-community operations

Show how a user-list performance problem became a wider operability programme spanning normalized state, queued imports and updates, API Logs, cancellation, asynchronous export, and export history. Keep the evidence categories explicit:

- approximately 360 MB Redux-state observation at 200,000 users;
- QA/test validation up to a 300,000-record loaded list;
- a 50,000-record multi-field update under 15 minutes;
- smaller named-client production operations;
- remaining cancellation, recovery, and exactly-once limitations.

Do not claim 300,000 active production users.

### Supporting vignettes

Use shorter sections for:

- safe client-owned identity through a fail-closed bridge and a separate indexed identifier;
- Infinox historical order-status correction if it is not fully contained in the Store case;
- ADSS widget diagnosis and engineering routing;
- M4Markets campaign operation with 63 participants and 552 attempts, without claiming engagement lift;
- deterministic API contracts and rigorous PM-led QA, including the 100-check Store API review.

### De-emphasised material

- Move AI-assisted PRD workflow out of the flagship position. Present it as responsible workflow adoption, not a proven efficiency programme or sole invention.
- Replace the broad Milestone flagship unless a compact attributable outcome is needed as a supporting vignette.
- Hold unproven AI-user delivery, rolling-calculation adoption, purchase-success callback runtime, broad external-commerce adoption, and unsupported commercial metrics.

## Case-study writing contract

Each flagship case must include:

1. Context and user/business problem.
2. Why the existing system or process failed.
3. Anjelika’s specific role and decision ownership.
4. The main product and technical trade-offs.
5. Named or role-based collaborators with accurate implementation credit.
6. Release, QA, client, or operational evidence.
7. Remaining limitations or what was not measured.
8. What the decision demonstrates for the target role.

Use first person where it clarifies ownership. Prefer concrete verbs and numbers over broad transformation claims. Do not use private-chat quotations, credentials, client secrets, or confidential implementation details.

## Résumé design

### Header and summary

Use Technical Product Manager as the primary role. State B2B2C SaaS, Computer Science background, platform/integration scope, and Australian location or work-status information only as accurately confirmed in the existing source.

Remove “early-career product generalist.” The summary should not claim a Senior title or use vague 0-to-1 language without a specific example.

### ReturningAI experience

Use six to eight bullets ordered by relevance to Technical Product Manager hiring:

1. Store/redemption platform ownership and historical-status outcome.
2. Custom Workflows platform progression and client operation.
3. Scale and bulk-operation hardening with evidence-qualified numbers.
4. Safe identity and deterministic external API/product contracts.
5. Integration and client delivery across CRM, data, SDK, webhook, and widget surfaces.
6. Operability, observability, QA, and support tooling.
7. AI-assisted delivery adoption only if space remains and attribution is precise.

Each bullet should communicate scope, action, and evidence. Production, QA/test, internal confirmation, and client acceptance must remain distinct.

### Earlier experience, education, and skills

- Retain Great Eastern with two concise bullets showing regulated client communication and practical tooling.
- Retain the Computer Science degree.
- Organize skills for ATS matching without keyword stuffing: product/platform, APIs and integrations, delivery/quality, data and technical fluency, tools, languages.
- Remove or qualify technologies that imply engineering-level implementation if the evidence only supports product use.

### Format

Target one to two readable pages, with one page preferred if evidence remains legible. Keep the Markdown source authoritative and regenerate the existing PDF through the repository script.

## Review loop

Use three independent reviewers after the first draft:

1. Australian hiring manager: scan behaviour, shortlist decision, role/level fit, ambiguity, and reasons to reject.
2. Head of Product or Technical PM leader: product judgment, systems depth, prioritisation, ownership, collaboration, and seniority signal.
3. Evidence and ATS reviewer: unsupported claims, attribution, metric qualification, keyword coverage, readability, and résumé parsing risk.

Reviewers return severity-ranked findings. Critical and high findings must be resolved or explicitly rejected with evidence. Return revised drafts to the same reviewers until no unresolved critical or high issue remains. The primary agent independently checks all reviewer claims and does not treat agent approval as proof.

After substantive review, apply the humanizer workflow to remove generic AI phrasing while preserving professional ATS language and Anjelika’s direct voice.

## Verification

Before completion:

- run the portfolio validation script and production build;
- regenerate the résumé PDF;
- render and visually inspect the portfolio and résumé at relevant desktop/mobile or page sizes;
- verify links, contact details, dates, headings, and résumé download behaviour;
- scan public copy for private source links, credentials, unsupported client details, and claim inflation;
- confirm every quantified claim against the evidence base;
- review the final diff without overwriting unrelated existing worktree changes.

## Source of truth

- Portfolio content: `src/data/portfolio.ts`
- Résumé source: `resume-source.md`
- Generated résumé: `public/resume.pdf`
- Evidence base: `/Users/anjelikatan/Documents/projects/rai-features/portfolio-research/`
- Existing site product/design intent: `PRODUCT.md` and the current clarity-workbench redesign files

## Out of scope

- A new visual identity or full component redesign.
- Fabricating commercial, adoption, revenue, retention, or efficiency metrics.
- Publishing or deploying the site without a separate explicit request.
- Sending external messages or applications.
- Copying raw workplace chats or confidential client material into public assets.
