# AGENTS.md

## Project context

This repository is a portfolio website for Callum.

The goal is to quickly build and polish an interview-ready portfolio that shows:

- Software projects
- Live demos
- GitHub repositories
- Screenshots or visual previews
- Short explanations of engineering decisions
- Contact links

This project is deliberately scoped as a small, polished frontend website. It is not intended to be a complex application.

The main problem this project solves is giving interviewers one clean place to see what Callum has built, how he thinks about software, and where they can inspect or demo his work.

## Current project priorities

Prioritize in this order:

1. Ship a working portfolio quickly
2. Make the projects section clear and convincing
3. Keep the code readable and maintainable
4. Keep the layout clean on desktop and mobile
5. Avoid overengineering

Do not optimize for perfect architecture, exhaustive test coverage, animation polish, or unnecessary features before the core portfolio works.

## Tech stack

Use the existing project stack.

For this project, assume the preferred stack is:

- React
- TypeScript
- Vite
- Material UI
- ES modules
- Static project data stored in local files

Use TypeScript for React components in this project.

Use PowerShell command syntax whenever suggesting terminal commands.

Example:

```powershell
npm install
npm run dev
npm run build
```

Do not use Bash commands.

## Scope boundaries

This project should stay simple.

Do not add these unless explicitly requested:

- Backend API
- Database
- Authentication
- CMS
- Complex routing
- Global state library
- Animation library
- Unit test setup
- Integration test setup
- End-to-end test setup
- Large design system
- Blog engine

A one-page portfolio is enough if it clearly presents the projects.

## Required website sections

The site should include at minium:

1. Hero section
2. Projects section
3. About section
4. Contact section

The Projects section is the most important section.

Each project card should include:

- Project title
- Short description
- Tech stack
- GitHub link
- Live demo link, if available
- Screenshot or image, if available
- Short engineering notes explaining what the project demonstrates

Keep project descriptions honest, specific, and easy to scan.

## Suggested file structure

Prefer a simple structure like this:

```text
src/
  assets/
  components/
  data/
  sections/
  App.tsx
  main.tsx
```

Suggested responsibilities:

- `components/` contains reusable UI components
- `sections/` contains page-level sections
- `data/` contains portfolio project data
- `assets/` contains screenshots and images

Avoid placing large arrays of portfolio data directly inside JSX components.

## Development workflow

Before changing code:

1. Inspect the existing repository structure.
2. Read the relevant files before editing.
3. Identify the smallest useful change.
4. Explain the intended change briefly if the task is not trivial.
5. Preserve existing working code.
6. Avoid large rewrites unless the current structure clearly blocks progress.

While changing code:

1. Make one logical change at a time.
2. Keep added or changed files limited where possible.
3. Avoid unrelated cleanup.
4. Avoid changing naming conventions unless there is a clear reason.
5. Keep the site working after each change.
6. Prefer practical progress over theoretical perfection.

After changing code:

1. Run the relevant local check, usually:

```powershell
npm run build
```

2. Fix TypeScript errors.
3. Fix obvious runtime errors.
4. Summarize what changed.
5. Provide a short proposed commit message.
6. Pause for review.

Do not continue to the next major task until Callum has reviewed the result or explicitly says to continue.

## Review loop

Work in a back-and-forth review loop.

After each logical change, output:

1. Files changed
2. What changed
3. Why it changed
4. Any trade-offs or assumptions
5. Suggested commit message
6. Suggested files to stage, if relevant
7. Anything Callum should manually check

Then stop and wait for feedback.

Do not push ahead through multiple unrelated changes without review.

If Callum gives feedback, revise the current solution before starting a new task.

## Git workflow

Never commit code.

Never run:

```powershell
git commit
git push
```

Callum will handle commits manually.

You may suggest commands like:

```powershell
git add src/components/ProjectCard.tsx
```

Only stage files automatically if Callum explicitly asks you to stage them.

Always provide a short, copy-pasteable Conventional Commit message after each logical change.

Prefer small commit messages.

Use this format:

```text
feat: add project card component
```

Use a body only if the change needs explanation.

Commit types:

- `feat:` for new features
- `fix:` for bug fixes
- `refactor:` for code reorganization without behaviour changes
- `docs:` for documentation updates
- `chore:` for setup or config changes
- `style:` for visual-only changes

Each proposed commit should represent one logical change.

Do not bundle unrelated changes into one commit.

Each commit should leave the codebase in a working state.

## Commit boundary expectations

After suggesting a commit message, explain briefly why the change belongs in one commit.

If the work should be split, suggest the split.

Good commit boundary examples:

- One commit for adding the project data model
- One commit for adding the project card component
- One commit for wiring the project section into the homepage
- One commit for visual polish
- One commit for documentation updates

Avoid giant commits that mix content, styling, refactoring, and dependency changes.

## Testing decision for this project

Do not write unit tests or integration tests for this portfolio website unless Callum explicitly asks for them.

This is intentional.

For this project, the priority is speed, polish, and interview readiness.

However, the code must still be written in a testable state.

That means:

- Keep components small and focused
- Keep project data separate from UI components
- Use explicit props
- Avoid hidden side effects
- Avoid global state where possible
- Move formatting or transformation logic into standalone functions
- Keep conditional rendering simple
- Avoid large all-in-one components
- Avoid tightly coupling components to browser APIs
- Prefer deterministic functions where practical

Do not add test libraries, test files, mocks, fixtures, or test scaffolding unless explicitly requested.

A good outcome is code that ships quickly now but could have tests added later without a major refactor.

## Clean code principles

Write code for humans first.

Use:

- Descriptive names
- Small components
- Small functions
- Clear file responsibilities
- Explicit control flow
- Guard clauses and early returns
- Constants instead of magic strings or numbers
- Consistent formatting
- Simple data shapes
- Clear seams between data, layout, and presentation

Avoid:

- Ternary operators
- Clever one-liners
- Deeply nested logic
- Vague names like `data`, `temp`, `foo`, or `x`
- Copy-pasted logic
- Unnecessary abstraction
- Mixed concerns
- Hidden dependencies
- CommonJS syntax
- Silent error handling
- Large files that do too many things

Prefer this:

```tsx
if (project.liveDemoUrl === undefined) {
  return null;
}

return <Button href={project.liveDemoUrl}>Live Demo</Button>;
```

Avoid this:

```tsx
return project.liveDemoUrl ? (
  <Button href={project.liveDemoUrl}>Live Demo</Button>
) : null;
```

## React and TypeScript guidelines

Use functional React components.

Keep components focused on one job.

Prefer simple props and simple types.

Example project type:

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

Prefer mapping over local project data:

```tsx
{
  projects.map((project) => <ProjectCard key={project.id} project={project} />);
}
```

Use Material UI where it helps build quickly and consistently.

Prefer readable `sx` styling over large custom CSS files.

Avoid complex theme architecture unless explicitly requested.

Keep styling simple, responsive, and easy to adjust.

## Data and content guidelines

Portfolio content should be honest and concrete.

Emphasize:

- Real project goals
- Real technologies used
- Architecture decisions
- Debugging
- Trade-offs
- Maintainability
- AI-assisted workflow with human review
- What the project demonstrates to an employer

Avoid:

- Fake metrics
- Exaggerated claims
- Vague descriptions
- Overly polished corporate language
- Long paragraphs
- Placeholder content

Good description style:

```text
A full-stack auction house analysis app that ingests World of Warcraft commodity auction data and exposes searchable item pricing through a React frontend and .NET API.
```

Good engineering note style:

```text
Separates ingestion, persistence, and read models so search remains simple while the data collection logic stays isolated.
```

## Commenting rules

Only write comments when the reason, intent, or assumption is not obvious from the code.

Do not comment what the code is doing.

Prefer clearer names and smaller functions over explanatory comments.

Use comments for:

- Non-obvious decisions
- Assumptions
- Edge cases
- Workarounds
- Gotchas
- Future review notes

Use these tags responsibly:

```ts
// TODO: Add resume download link after the PDF is finalized.
// FIXME: Replace temporary project screenshot before deployment.
// HACK: Keeps card heights consistent until final images are cropped.
```

Do not write comments that may quickly become false.

Delete outdated comments.

Do not add AI-generated signature comments.

Do not add:

```text
Generated with Claude Code
Co-Authored-By: Claude
```

## Error handling and debugging

Handle errors explicitly when they exist.

For this static portfolio, most errors will be broken links, missing data, missing images, or build errors.

Prefer:

- Clear fallback UI
- Guard clauses
- Defensive checks around optional fields
- Helpful local variable names
- Simple debugging steps

Do not silently swallow problems.

If something seems structurally wrong, flag it instead of working around it.

## Refactoring expectations

Refactor only with a clear purpose.

Do not move code just to tidy it up.

If code is unclear:

1. Identify the issue.
2. Explain why it may be a problem.
3. Suggest a small fix.
4. Wait for review if the change is not clearly necessary.

If you find old or questionable code, do not delete it unless it is clearly unused and safe to remove.

If unsure, flag it for review.

Use `// legacy:` comments only when needed to mark old code that should not be removed yet.

Always question design flaws and assumptions.

Do not blindly follow a poor structure if a small improvement would make the code clearer.

## Large task handling

If a task is too large to safely complete in one pass, split it into smaller steps.

Use this format:

```text
This task is too large to do safely in one pass. I recommend splitting it into:

1. Step one
2. Step two
3. Step three
```

Then complete only the first useful step and pause for review.

Do not silently truncate work.

Do not pretend that a large task is fully complete if only part of it was handled.

At the end of a multi-step task, summarize what was completed and what remains.

## Design principles

The site should feel:

- Clean
- Simple
- Professional
- Fast to scan
- Honest
- Developer-focused

Avoid making it look like a generic template.

The content should sound like a real developer explaining real work.

Prefer strong project cards over decorative design.

## Interview readiness checklist

Before considering the project ready, verify:

- The site loads locally
- The production build succeeds
- The layout works on desktop
- The layout works on mobile
- Project cards are readable
- Strongest projects appear first
- GitHub links work
- Demo links work or are omitted
- Screenshots load correctly
- There is no placeholder text
- Contact links work
- There are no obvious console errors
- The site can be explained in under 60 seconds

## Final response format after a code change

After making a code change, respond with:

```text
Files changed:
- path/to/file

What changed:
- ...

Why:
- ...

Checks:
- npm run build passed
```

Then include:

```text
Suggested commit message:
feat: add portfolio hero section
```

Then include:

```text
Commit boundary:
This should be one commit because ...
```

Then pause for Callum's review.

Do not keep making changes after this unless Callum says to continue.
