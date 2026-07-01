# Portfolio Redesign Design Spec: Clarity Workbench

Date: 2026-07-01
Status: Draft for user review

## Goal

Redesign Anjelika Tan's portfolio around the approved **Clarity Workbench** direction.

The site should make this impression within the first 10 seconds:

> Anjelika turns messy product systems into clear, usable workflows.

The design should feel polished, memorable, and product-minded without sounding dramatic or self-mythologizing. It can be lightly playful, but the work stays central.

## Source Context

- Existing app: Next.js App Router, TypeScript, Tailwind CSS.
- Current content source: `src/data/portfolio.ts`.
- Current UI files: `src/app/page.tsx`, `src/app/globals.css`, `src/components/evolution-roadmap.tsx`, `src/components/download-open-link.tsx`, `tailwind.config.ts`.
- Existing assets: portrait images, resume PDF, platform logos.
- Strategic context: `PRODUCT.md`.
- Reference site: `https://testruitong1.netlify.app/`.

## Approved Direction

### Clarity Workbench

The homepage should feel like a clean product work surface: scattered product inputs become organized workflows.

Visual metaphors:

- Messy inputs: API events, webhook payloads, CRM data, permissions, redemption rules, PRD notes, operational edge cases.
- Clarifying work: grouping, sequencing, validation, decision rules, reusable platform capability.
- Result: workflows teams can build, run, and maintain.

The reference site's useful lessons are its strong first impression, white space, floating artifacts, section rhythm, and case-study depth. The redesign should not copy its editorial serif style, easter eggs, custom cursor, or theatrical personality.

## Content Strategy

Keep the facts and case-study substance mostly the same. Rephrase for sharper hierarchy and lower-drama clarity.

### Primary Hero Copy

Headline:

> I turn messy product systems into clear, usable workflows.

Subheadline:

> Product Manager at Returning AI, working across integrations, platform logic, internal tools, automation, and AI-assisted product workflows in B2B SaaS.

Supporting line:

> I work best where product, operations, and technical constraints overlap, especially when the system needs to become easier to explain, build, and run.

### Section Renaming

- "What I Work On" becomes "What I Make Clearer".
- "Selected Work" becomes "Selected Systems".
- "Additional Work" becomes "Other Platform Work".
- "Platforms and ecosystems I've worked across" becomes "Systems I've Worked With".
- "Experience" stays simple.

### Case Study Framing

Each case study should follow a consistent narrative:

1. Problem: what was messy, unclear, or hard to scale.
2. My role: what Anjelika shaped or owned.
3. System decisions: rules, permissions, workflows, edge cases, integrations.
4. Result: what became clearer, more reusable, or easier to operate.

Recommended case order:

1. E-commerce store: strongest proof of messy system becoming reusable capability.
2. Milestone: strong platform logic proof.
3. AI-assisted PRD workflow: proof of working style and AI judgment.

Preferred framing:

- Store: "From voucher page to configurable redemption system."
- Milestone: "From reward mechanic to reusable rules system."
- AI PRD workflow: "A grounded PRD workflow for logic-heavy handoff."

### Copy Guardrails

Use plain, specific language: shaped, defined, clarified, connected, reduced, supported, handled, simplified.

Avoid inflated language unless the proof is right beside it: transformative, seamless, visionary, magic, genius, revolutionized, powered.

Avoid making "Product & Platform Generalist" the first message. It can remain in supporting metadata, but the hero should lead with the clearer promise.

## Information Architecture

The site can remain a long scroll, but it should no longer feel like a generic one-page resume. It should feel like a guided portfolio with distinct sections and stronger pacing.

1. **Hero / Workbench**
   - Name and role.
   - Main clarity headline.
   - CTAs: View selected systems, Resume, LinkedIn or Email.
   - Visual system map with artifact chips that represent messy inputs becoming organized lanes.
   - Quick facts as compact labels, not large metric cards.

2. **What I Make Clearer**
   - Reframe current focus areas as product/system transformations.
   - Use dense but readable rows or tiles.
   - Example structure: input, product work, clearer outcome.

3. **Selected Systems**
   - Three case-study summary cards.
   - Each card shows a compact "messy input -> product decision -> clearer outcome" layer.
   - Cards link to detail sections lower on the page.

4. **Case Study Deep Dives**
   - Full details for Store, Milestone, and AI PRD workflow.
   - Store includes the upgraded evolution roadmap.
   - Details should be scannable with side rails, short sections, tags, and clear headings.

5. **Other Platform Work**
   - Keep additional work, but make it feel like supporting evidence.
   - Two groups: integrations and operations/infrastructure.

6. **Systems I've Worked With**
   - Move platform logos lower than the case studies.
   - Present them as ecosystems, not a trophy strip.

7. **Experience**
   - Keep short and factual.
   - Returning AI first, Great Eastern second.

8. **Contact**
   - Direct, calm close.
   - Email, LinkedIn, resume.
   - Copy should invite product/platform conversations without sounding like a sales pitch.

## Visual Direction

### Scene Sentence

A product leader or technical teammate opens the portfolio during a hiring review, likely on a laptop, scanning for evidence that Anjelika can handle ambiguous product systems without adding noise.

This supports a light theme with sharp contrast, structured layouts, and enough visual energy to be memorable.

### Color Strategy

Use a restrained-to-committed palette.

- Base: true neutral off-white, not a beige-heavy parchment look.
- Ink: deep charcoal for strong readability.
- Primary accent: muted green, connected to the existing identity but sharper.
- Secondary accents: small coral and yellow status tones for system chips, warnings, validations, and decision markers.
- Avoid a one-note green palette.
- Avoid purple-blue gradients, beige domination, and decorative blobs.

### Typography

- Use a clear sans for most content so the site feels product-minded and easy to scan.
- Keep serif as a restrained personal/display accent, such as the name or one hero phrase.
- Avoid over-tight display letter spacing. Keep display tracking no tighter than `-0.04em`.
- Use balanced headings and readable prose line lengths around 65 to 75 characters.

### Layout Language

- Thin rules, compact panels, tabs, labels, system-map lines, and clear grouping.
- Cards should have modest radii, generally 8 to 16px.
- Avoid nested cards.
- Avoid repeating tiny uppercase eyebrows above every section. Use varied section openings instead.
- Avoid default equal-card grids everywhere. Mix rows, split layouts, side rails, and interactive detail panels.

## Motion And Interaction

Motion should explain the portfolio's thesis.

### P0 Motion

1. **Hero Workbench**
   - Artifact chips load in slightly offset positions and settle into clean workflow lanes.
   - On hover or focus, a chip highlights its related lane.
   - Reduced motion renders the final organized state immediately.

2. **Case Study Cards**
   - Hover and focus reveal "messy input -> product decision -> outcome".
   - Clicking smooth-scrolls to the detail section.
   - The target detail section receives a brief, non-flashy highlight.

3. **Evolution Roadmap**
   - Add a moving active indicator.
   - Add progress-line fill across phases.
   - Crossfade selected phase content.
   - Stagger bullets lightly within the selected phase.

### P1 Motion

1. **Active Navigation**
   - Sticky nav shows current section with a gliding underline or small progress marker.

2. **Systems Logos**
   - Hovering a platform group brightens related logos and softens unrelated groups.

3. **Capability Rows**
   - Hover or focus reveals a tiny secondary transformation line, such as "client request -> reusable workflow".

### Avoid

- Custom cursor.
- Scroll hijacking.
- Constant floating motion.
- Particles, confetti, and full-page effects.
- Bounce or elastic easing.
- Making content invisible until animation runs.

## Components

Likely components to create or refactor:

- `WorkbenchHero`: hero copy, CTAs, artifact chips, and workflow-lane visual.
- `ActiveSectionNav`: sticky navigation with current-section state.
- `ClarifyArea`: row or tile for each capability.
- `SystemCaseCard`: summary card with problem, decision, outcome reveal.
- `CaseStudyDetail`: refactored detail layout for consistency.
- `EvolutionRoadmap`: upgrade existing component rather than replacing it.
- `PlatformEcosystem`: logo groups with subtle interaction.
- `ContactPanel`: final CTA area.

Keep `src/data/portfolio.ts` as the primary content source. Add fields only where the design needs structured content, such as transformation labels or case-study problem/decision/outcome lines.

## Data Flow

- Server component page reads static portfolio data.
- Small client components handle interactive UI:
  - Workbench chip hover state.
  - Active nav section detection.
  - Roadmap selection.
  - Resume download/open behavior.
- No backend or API calls are needed.
- No GitHub push is part of this work.

## Accessibility

- Maintain WCAG AA contrast for body text, labels, buttons, and muted text.
- Every interactive card must be keyboard accessible.
- Hover-only reveals must also work on focus and be visible enough on touch devices.
- Preserve semantic headings and landmark structure.
- Use descriptive alt text for portrait and logos.
- Respect `prefers-reduced-motion`.
- Avoid relying on color alone for status or grouping.

## Responsive Behavior

- Mobile hero stacks copy above the workbench visual.
- Artifact chips become a compact two-column or wrapped layout.
- Case-study cards become full-width rows.
- Deep-dive side rails stack above content on smaller screens.
- Sticky nav can collapse to fewer links or horizontal scroll on mobile.
- Text must never overflow buttons, tags, cards, or hero containers.

## Testing And Verification

Before calling the implementation complete:

- Run a production build.
- Use browser screenshots for desktop and mobile.
- Verify hero visual is nonblank and not overlapping.
- Verify keyboard focus on case cards, nav links, CTAs, and roadmap controls.
- Verify reduced-motion behavior.
- Check contrast for body, muted, and accent text.
- Confirm all resume, email, LinkedIn, and anchor links work.
- Confirm the page stays readable without JavaScript-enhanced motion.

## Resolved Decisions

The approved direction is Clarity Workbench.

Implementation should choose exact colors, spacing, and component boundaries based on what works best in the existing Next/Tailwind codebase. No additional user decision is needed before implementation planning unless the user wants to revise this spec.
