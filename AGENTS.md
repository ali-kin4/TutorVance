# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages. `layout.jsx` defines HTML shell; `page.jsx` lazy-loads the UI.
- `app/components/`: Reusable React components (e.g., `Tutorvance.jsx`).
- `app/globals.css`: Global styles (Tailwind).
- `lib/`: Clients/utilities (e.g., `supabaseClient.js`).
- `postcss.config.js`, `tailwind.config.js`: Styling pipeline.
- `.env.local.example`: Copy to `.env.local` for local config.

## Build, Test, and Development Commands
- Install: `npm install` (Node 18+ recommended for Next 14).
- Dev server: `npm run dev` (serves at `http://localhost:3000`).
- Production build: `npm run build`.
- Start production: `npm start` (after build).

## Coding Style & Naming Conventions
- Indentation: 2 spaces; ES modules; React 18 with functional components.
- Files: route segments under `app/` are lowercase; components in `app/components/` use PascalCase (e.g., `MyWidget.jsx`).
- "use client" for client components; keep server/client boundaries clear.
- Tailwind: prefer utility-first styling; group related classes logically.
- No linter/formatter is configured; follow standard Next.js/React conventions and keep imports sorted.

## Testing Guidelines
- No test runner is configured yet. Suggested: unit tests with Vitest + React Testing Library; E2E with Playwright.
- Naming: `*.test.jsx` colocated with source or in `__tests__/`.
- Add a script before introducing tests, e.g., `"test": "vitest run"`.

## Commit & Pull Request Guidelines
- Commits: prefer Conventional Commits, e.g., `feat(app): add tutor search` or `fix(ui): correct button focus`.
- PRs: concise description, linked issues, screenshots for UI changes, steps to verify, and notes on env/config changes.
- Keep diffs focused; update docs when behavior changes.

## Security & Configuration Tips
- Configure Supabase via `.env.local`: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser—never put secrets there.
- Do not commit `.env.local`; sanitize logs to avoid leaking keys.
