# Anjelika Tan Portfolio

A simple one-page personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It is designed to be static-friendly, easy to edit in code, and straightforward to deploy on Vercel.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Project Structure

```text
.
├── public
│   ├── favicon.svg
│   └── resume.pdf
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── opengraph-image.tsx
│   │   └── page.tsx
│   └── data
│       └── portfolio.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Editing Content

Update [src/data/portfolio.ts](/Users/returning/Documents/Portfolio/src/data/portfolio.ts) to change:

- name, title, intro, and location
- email and LinkedIn URL
- resume file path
- about copy
- selected work case studies
- skills and focus areas
- SEO metadata and site URL

To replace the resume download file, swap [public/resume.pdf](/Users/returning/Documents/Portfolio/public/resume.pdf) with your real resume. If you rename the file, update `resumeHref` in `src/data/portfolio.ts`.

## Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Start the local dev server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Build

Run:

```bash
pnpm build
```

If `pnpm` is not installed globally, you can use the project-local binary created during setup:

```bash
./.pnpm-home/pnpm install
./.pnpm-home/pnpm dev
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default framework preset as `Next.js`.
4. Leave the build command as `next build`.
5. Deploy.

After deployment, update `siteUrl` in `src/data/portfolio.ts` so canonical metadata and social previews use your real domain.
