# Zero-to-one evidence-first portfolio revision

## Goal

Make Anjelika's 0-to-1 B2B2C product strength clear within five seconds, then prove it through role clarity, evidence-qualified case studies, sanitized product artifacts and a complete mobile experience.

The revision must retain the existing technical/platform positioning, AI product-memory story, honest attribution and production-versus-test boundaries. It must not turn every project into a greenfield claim.

## Positioning

### Professional title

Use `Product Manager` everywhere as the visible professional title.

### Hero

- Eyebrow: `Product Manager`
- Headline: `I take complex B2B2C products from 0 to 1.`
- Supporting copy: `I turn ambiguous client and operational needs into testable product capabilities, then carry them through engineering, QA, launch and live use.`
- Technical context: `My Computer Science background helps me work closely with APIs, integrations, workflows and AI-enabled product operations.`
- Primary action: `View flagship case`
- Secondary action: `View resume`

The hero must include a flat proof line rather than a metric-card strip:

`Built from zero: workflow automation, identity capabilities and AI-ready product memory. Carried into use: multi-region loyalty, Store and large-community operations.`

### About and role context

Use a more natural About introduction:

`I'm a Product Manager with a Computer Science background. I work best when a client need exposes a bigger platform problem, whether that means a new workflow, integration, identity rule or operating tool.`

Retain the factual `first and sole Product Manager` context in the ReturningAI experience summary. It explains the breadth of ownership but must not be used as proof of senior title, irreplaceability or healthy dependence on one person.

### Resume summary

Use:

`Product Manager with a Computer Science background who takes complex B2B2C products from ambiguous client need to testable capability, launch and live operation. My work spans APIs, integrations, workflow automation, commerce, identity and large-scale operations. I also use source-linked product context and human review to make AI-assisted delivery safer.`

The resume remains one page, ATS readable and linked to the confirmed portfolio URL.

### SEO

- Title: `Anjelika Tan | Product Manager for 0-to-1 B2B2C Products`
- Description: `Portfolio of Anjelika Tan, a Product Manager taking complex B2B2C products from client need to launch and live operation across APIs, integrations, workflows, commerce, identity and AI-enabled product operations.`

## Homepage information architecture

1. Responsive global navigation
2. Hero with role, approved headline, end-to-end support copy, proof line and actions
3. Selected work
   - lead multi-region lifecycle case
   - Store
   - Custom Workflows
   - large-community operations
4. Capability stories and workbench
5. AI product-memory practice
6. Product surfaces and systems
7. Experience
8. Supporting product decisions
9. Contact and footer

Selected-work introduction:

`The lead case follows a client programme from data and product rules through launch and live operation. The next three show how I built or expanded the platform systems underneath it.`

Add this evidence note close to Selected Work:

`Client names, screenshots and identifying operational details are generalized or omitted. Metrics are labelled as production, QA/test or bounded operational evidence.`

## Hero and mobile workbench

Preserve the desktop workbench metaphor because it shows how inputs become product decisions. The desktop visual must no longer carry the entire hero story.

On mobile:

- remove the `best viewed on desktop` apology;
- show a compact three-stage flow: `Client signal -> Product decision -> Shipped capability`;
- allow each stage to link to the relevant capability evidence;
- keep the headline, proof line and primary actions visible before the flow;
- avoid horizontal interactions that depend on accidental swiping.

The hero must remain understandable if all animation is disabled.

## Navigation and page landmarks

- Render the global header outside the main landmark.
- Add a keyboard-visible skip link to `#main-content`.
- Use navigation labels in document order: `Overview`, `Selected work`, `Capabilities`, `AI practice`, `Experience`, `Contact`.
- Add a real mobile menu with the same destinations.
- Use at least 44 by 44 CSS pixels for principal touch targets.
- Keep visible focus states.

## Selected-work cards

Keep the flagship full-width and the three platform cases below it.

Replace the repeated generic `Evidence` label with each case's evidence type:

- Multi-region programme: `Bounded operational check`
- Store: `Production outcome`
- Custom Workflows: `Production exposure`
- Large-community operations: `QA/test validation`

Do not recast Store as wholly greenfield. It remains an evolution and platform-expansion story.

## Case-study design

### Header

Each case header must show:

- context;
- Anjelika's role;
- scope;
- collaborators or team boundary;
- delivery state;
- evidence type and outcome.

Use existing role and scope data where available. Add explicit team and delivery fields to the portfolio data. Do not invent exact calendar dates when the evidence only supports a multi-release period.

### Flow

1. Title and one-sentence outcome
2. Role, scope, collaborators, delivery state and evidence type
3. Problem, decision and outcome
4. Sanitized product artifact
5. What Anjelika owned
6. Evolution and trade-offs
7. What is proven and what remains unmeasured
8. Reflection where useful
9. Next case, back to selected work and contact action

Remove repeated title and summary content from the case-detail side rail. Use that space for role, scope, evidence status and navigation.

### Sanitized product artifacts

Add one primary artifact per case, built from evidence-qualified data rather than confidential screenshots:

- Multi-region programme: account lifecycle map connecting data, identity, embedded experiences, fulfilment, operations and recovery.
- Store: eligibility and order-status model showing validation, purchase, fulfilment, custom status, refund and historical-read behavior.
- Custom Workflows: execution model covering trigger, queue, action, error behavior, retry and inspectable run history.
- Large-community operations: job-state model covering queued, running, partial success, error, cancelled, skipped and duplicate effects.

Each artifact must state the problem, product decision, Anjelika's contribution and verified result or limit. Client names, raw records, secret-bearing payloads and identifying operational details are prohibited.

## AI product-memory section

Keep the substantial title `Building product memory that humans and AI can actually use` and the current claim boundaries.

Clarify that the practice stores feature intent, decisions, trade-offs, known gaps, source confidence, production-versus-test evidence, handoffs, human review, attribution and secret exclusion. It supports requirements, QA planning, research, onboarding and handover.

Preserve the YAML attribution exactly in meaning:

- Rob introduced the concept.
- Thuta built the generator.
- Anjelika adopted, operationalised, tested and refined it on live product work.
- No measured time, quality, defect or adoption gain is claimed.

## Interaction and accessibility

### Capability selector

Implement the WAI-ARIA tabs pattern:

- `tablist`, `tab` and `tabpanel` roles;
- `aria-selected` and `aria-labelledby`;
- Left/Right or Up/Down arrow movement;
- deliberate activation;
- one tab in the keyboard tab order at a time.

### Ecosystem groups

Render groups as static articles unless selecting one reveals meaningful associated evidence. Do not use pressed-button semantics only to dim siblings.

### Resume actions

One control performs one action. Use `View resume` for opening the PDF. If downloading remains available, expose a separately labelled `Download resume PDF` action.

### Responsive safety

- Remove global horizontal clipping after component-level overflow has been fixed.
- Verify 320, 375, 768 and 1024 pixel widths plus 200 percent text zoom.
- Ensure horizontal selectors have visible affordances or are replaced by wrapping layouts.
- Preserve reduced-motion behavior.

## Performance and metadata

- Replace the raw hero portrait with `next/image`, intrinsic dimensions and an appropriate `sizes` value.
- Use a compressed source suitable for its displayed size.
- Create a genuine 1200 by 630 Open Graph image.
- Add intentional case-specific Open Graph metadata.
- Keep the site static and dependency-light.

## Copy refinements

Replace:

`The useful part is making product logic easier to run.`

With:

`I make the rules, failures and handoffs easier to see.`

Replace:

`Let's talk about product systems that need clearer shape.`

With:

`Let's talk about the product, platform or integration problem you're trying to untangle.`

Use plain punctuation and natural sentence rhythm. Avoid keyword inventories, repeated `operable`, `durable` and `explicit` phrasing, inflated seniority and generic PM language.

## Evidence boundaries

The revision must preserve these distinctions:

- nearly 3,000 Store statuses is a production correction, not revenue, retention or adoption;
- 66 of 66 is one Slack-channel reconciliation window, not full API-to-broker proof or sustained reliability;
- Custom Workflow production exposure does not establish volume, stable-operation rate or external acceptance;
- 300,000 records and the 50,000-record update are QA/test evidence;
- smaller named-client bulk runs are bounded production operation;
- 63 participants and 552 attempts demonstrate usage, not engagement lift;
- the 0-to-1 portfolio claim does not imply that every case began from zero;
- engineering architecture and implementation remain shared work;
- client identities and identifiable operational records remain generalized or omitted.

## Review loop

After implementation:

1. Run repository validation, production build and PDF checks.
2. Inspect desktop and mobile rendering if the browser runtime is available; otherwise document the limitation and use the best available render checks.
3. Run a fresh content/evidence audit agent.
4. Run a fresh website/UX/frontend audit agent.
5. Fix every P0 and P1 finding that is supported by evidence and in scope.
6. Repeat the two reviews until neither returns a P0 or P1 issue.
7. Review remaining P2 findings and fix those that materially affect hiring-manager comprehension, accessibility, responsiveness, performance or trust.

The loop ends when the site passes its checks, contains no P0/P1 audit findings, preserves all evidence boundaries and presents the approved 0-to-1 story clearly on desktop and mobile.

## Acceptance criteria

- A five-second scan communicates Product Manager, B2B2C, 0-to-1 and end-to-end follow-through.
- The approved headline is used exactly.
- The homepage and resume support the same positioning.
- Mobile has complete navigation and a meaningful compact workbench flow.
- Global landmarks and skip navigation are correct.
- Every case displays role, scope, collaborators, delivery state, evidence type and outcome.
- Every case contains one sanitized, annotated product artifact.
- Every case ends with onward navigation and contact.
- Capability tabs follow the ARIA tabs keyboard model.
- Ecosystem content has truthful semantics.
- Resume actions are explicit and singular.
- Primary touch targets meet the 44 pixel recommendation.
- Portrait and Open Graph assets have correct dimensions.
- No content is hidden by global horizontal clipping.
- The resume remains one page with working links.
- Existing evidence qualifications, confidentiality and attribution remain intact.
- Repository tests and production build pass.
- Final content and website audits report no P0 or P1 findings.
