# AGENTS.md

## Project purpose

This repository is a portfolio website for Callum.

The goal is to ship a clean, interview-ready website that clearly presents real software projects, live demos, GitHub links, screenshots, and short explanations of engineering decisions.

Prioritize clarity, speed, and polish over complexity.

## Product priorities

Build the smallest version that creates a strong impression in an interview.

Required sections:

1. Hero section
2. Projects section
3. About section
4. Contact section

The Projects section is the most important part of the site.

Each project should show:

- Project name
- Short description
- Tech stack
- GitHub link
- Live demo link if available
- Screenshot or visual preview if available
- Brief note on the engineering value of the project

## Preferred stack

Follow the existing repository setup.

If this repository is a Vite React TypeScript project, use:

- React
- TypeScript
- Vite
- Material UI
- ES modules

Do not introduce a backend, database, CMS, authentication, routing system, or complex state management unless explicitly requested.

Use simple local data files for portfolio content, such as:

- `src/data/projects.ts`
- `src/components/ProjectCard.tsx`
- `src/sections/HeroSection.tsx`
- `src/sections/ProjectsSection.tsx`
- `src/sections/AboutSection.tsx`
- `src/sections/ContactSection.tsx`

## Development workflow

Before changing code:

1. Inspect the existing file structure.
2. Identify the smallest safe change.
3. Preserve existing working code.
4. Avoid large rewrites unless the current structure is clearly blocking progress.
5. Make one logical change at a time.

After changing code:

1. Run the relevant checks.
2. Fix TypeScript errors.
3. Fix obvious runtime errors.
4. Make sure the app still builds.
5. Summarize what changed and why.

Use PowerShell command syntax when showing commands.

Example commands:

```powershell
npm install
npm run dev
npm run build
npm test
```

## Coding style

Write code for humans first.

Use:

- Clear names
- Small functions
- Small components
- Early returns
- Explicit control flow
- Constants instead of magic strings or numbers
- ES module imports and exports

Avoid:

- Ternary operators
- Clever one-liners
- Unnecessary abstractions
- Deeply nested logic
- CommonJS syntax
- Silent error handling
- Large all-in-one components
- Rewriting unrelated files

Prefer this:

```ts
if (project.liveDemoUrl === undefined) {
  return null;
}
```

Avoid this:

```ts
return project.liveDemoUrl ? <Button /> : null;
```

## React guidelines

Use functional React components.

Keep components focused on one job.

Prefer this structure:

- Page or app-level layout component
- Section components
- Reusable card components
- Data stored separately from UI components

Use descriptive prop names.

Avoid putting large arrays of project data directly inside JSX components.

Prefer mapping over project data:

```tsx
{
  projects.map((project) => <ProjectCard key={project.id} project={project} />);
}
```

Use Material UI components where they make the layout faster and cleaner.

Prefer simple, readable `sx` styling over complex custom CSS.

Do not add animation libraries unless explicitly requested.

## TypeScript guidelines

If the repository uses TypeScript, keep types simple and explicit.

Use interfaces or type aliases for shared data shapes.

Example:

```ts
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  engineeringNotes: string[];
}
```

Do not over-model the domain.

This is a portfolio website, not an enterprise application.

## Testing guidelines

For this portfolio website, do not write unit tests or integration tests unless explicitly requested.

The priority for this project is speed, polish, and getting the site interview-ready.

However, still write code that would be easy to test later.

To keep the code testable:

- Keep components small and focused
- Keep project data separate from UI components
- Move formatting or transformation logic into standalone functions
- Avoid tightly coupling components to browser APIs
- Avoid hidden side effects
- Use explicit props instead of reaching into global state
- Keep conditional rendering simple and readable
- Avoid large all-in-one components

Do not add test libraries, test setup, test files, mocks, or integration test scaffolding unless explicitly requested.

A good outcome is code that ships quickly now but could have tests added later without needing a major refactor.

## Git guidelines

Use Conventional Commits when suggesting commit messages.

Examples:

```text
feat: add project card component
feat: add portfolio project data
fix: correct broken demo link
refactor: split homepage into sections
test: add project formatting tests
docs: update portfolio content
```

Do not commit automatically unless explicitly asked.

## Portfolio content guidance

Use honest, concrete project descriptions.

Emphasize:

- Real project goals
- Architecture decisions
- Testing
- Debugging
- Trade-offs
- Maintainability
- AI-assisted workflow with human review
- What the project demonstrates to an employer

Avoid:

- Overhyped language
- Fake metrics
- Claims that are not supported by the project
- Long paragraphs
- Vague descriptions like “modern web app”

Good project description style:

```text
A full-stack auction house analysis app that ingests World of Warcraft commodity auction data and exposes searchable item pricing through a React frontend and .NET API.
```

Good engineering note style:

```text
Uses separate read and write paths so search queries can stay fast while ingestion logic remains isolated.
```

## Interview-readiness checklist

Before considering the task finished, verify:

- The site loads locally.
- The production build succeeds.
- The layout works on desktop and mobile.
- Project cards are readable.
- GitHub links work.
- Demo links work or are clearly omitted.
- There is no placeholder text.
- There are no obvious console errors.
- The strongest projects are shown first.
- The website can be explained in under 60 seconds.

## What not to do

Do not spend time on:

- Blog support
- CMS setup
- Backend APIs
- Authentication
- Complex routing
- Heavy animations
- Perfect design systems
- Theme architecture
- Premature test coverage for static layout
- Large rewrites

The priority is to ship a clean, useful, interview-ready portfolio.

## When uncertain

If a decision affects architecture, dependencies, deployment, or public-facing content, ask before proceeding.

If the decision is small and reversible, make the simplest reasonable choice and document it in the summary.

Prefer practical progress over perfection.
