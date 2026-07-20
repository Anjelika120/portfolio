# Clarity Workbench Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved Clarity Workbench redesign locally so Anjelika can review the live portfolio before any GitHub push.

**Architecture:** Keep the portfolio as a static Next.js App Router site with Tailwind styling and a data-driven page. Add small client components only where interaction is needed: active navigation, hero chip highlighting, platform ecosystem highlighting, and the existing roadmap state.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Node-based smoke test, local browser verification.

## Global Constraints

- Keep the facts and case-study substance mostly the same.
- First impression: "Anjelika turns messy product systems into clear, usable workflows."
- Avoid over-dramatic self-branding and generic corporate resume speak.
- Use a light, sharp, structured visual direction with muted green plus small coral/yellow status accents.
- Respect `prefers-reduced-motion`; content must be readable without animation.
- No GitHub push.

---

### Task 1: Add Design Smoke Test

**Files:**
- Create: `scripts/validate-portfolio-design.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: `pnpm test` runs `node scripts/validate-portfolio-design.mjs`.
- Consumes: source files as text checks for portfolio structure and required copy.

- [ ] **Step 1: Write failing test**

Create `scripts/validate-portfolio-design.mjs` with checks for the approved hero copy, renamed sections, workbench component markers, roadmap controls, and no banned dramatic language in hero data.

- [ ] **Step 2: Add test script**

Update `package.json` with `"test": "node scripts/validate-portfolio-design.mjs"`.

- [ ] **Step 3: Run test to verify it fails**

Run: `pnpm test`

Expected: FAIL because implementation has not yet added the Clarity Workbench copy/components.

### Task 2: Reshape Portfolio Data

**Files:**
- Modify: `src/data/portfolio.ts`

**Interfaces:**
- Produces: hero copy, workbench artifacts, transformation-focused capabilities, case-study framing fields, and platform group descriptions used by the page.

- [ ] **Step 1: Update hero and supporting copy**

Change the hero to lead with messy systems becoming clear workflows. Keep contact, resume, LinkedIn, experience, and case-study facts intact.

- [ ] **Step 2: Add structured workbench and case fields**

Add arrays for hero artifact chips and case framing lines without removing existing detail sections.

- [ ] **Step 3: Run smoke test**

Run: `pnpm test`

Expected: still FAIL until the page renders the new structures.

### Task 3: Build Clarity Workbench Page

**Files:**
- Replace/refactor: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

**Interfaces:**
- Consumes: updated `portfolio` data.
- Produces: redesigned long-scroll portfolio with hero workbench, "What I Make Clearer", "Selected Systems", deep dives, other platform work, ecosystem logos, experience, and contact.

- [ ] **Step 1: Create focused page components**

Implement local page components for the hero, active nav, capability rows, system cards, detail sections, platform ecosystem, and contact panel.

- [ ] **Step 2: Replace visual system**

Update Tailwind tokens and global CSS for the sharper off-white, ink, muted green, coral, and yellow palette, modest radii, and reduced-motion rules.

- [ ] **Step 3: Run smoke test**

Run: `pnpm test`

Expected: PASS once required copy and component markers exist.

### Task 4: Upgrade Roadmap Interaction

**Files:**
- Modify: `src/components/evolution-roadmap.tsx`

**Interfaces:**
- Consumes: existing `evolutionPhases`.
- Produces: active phase indicator, progress line, content crossfade, keyboard-accessible controls, and reduced-motion-safe interaction.

- [ ] **Step 1: Preserve existing API**

Keep `EvolutionRoadmap({ phases })` unchanged for consumers.

- [ ] **Step 2: Improve visual states**

Add progress fill, selected phase styling, clearer previous/next controls, and phase content transition classes.

- [ ] **Step 3: Run smoke test and build**

Run: `pnpm test`

Run: `pnpm build`

Expected: both pass.

### Task 5: Verify In Browser

**Files:**
- No required source changes unless verification finds issues.

**Interfaces:**
- Produces: local preview URL for user review.

- [ ] **Step 1: Start local dev server**

Run: `pnpm dev`

- [ ] **Step 2: Inspect desktop and mobile**

Use browser screenshots at desktop and mobile sizes. Verify hero nonblank, no text overlap, active states usable, and the design reads as Clarity Workbench.

- [ ] **Step 3: Fix issues and re-run verification**

If visual or build issues appear, patch them and repeat `pnpm test`, `pnpm build`, and browser checks.
