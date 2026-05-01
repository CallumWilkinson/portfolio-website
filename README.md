# Portfolio Website

A fast-built portfolio website for showcasing my software projects, live demos, GitHub repositories, and the engineering decisions behind each project.

This project was created with the help of CLI programming agents so I could quickly get a clean portfolio up and running for interviews.

## Purpose

The goal of this website is simple:

- Present my strongest projects clearly
- Provide quick access to live demos and GitHub repositories
- Show the technologies I have been working with
- Give interviewers a fast way to understand what I have built
- Keep the site clean, readable, and easy to maintain

This is not intended to be a complex application. It is a focused portfolio site designed to communicate my work clearly.

## Why I built it this way

I wanted to build and ship this portfolio quickly, so I used CLI programming agents as part of my workflow.

The focus was on:

- Speed
- Clear project presentation
- Simple structure
- Maintainable code
- Avoiding unnecessary complexity

The agents helped generate and iterate on the code, but the structure, content, and final decisions were guided by me.

## Testing decision

For this project, I intentionally chose not to write unit tests or integration tests.

That was a deliberate trade-off.

Because this is mostly a static portfolio website, I optimised for speed and interview readiness rather than automated test coverage.

However, I still wanted the code to stay easy to test later if needed, so the project should favour:

- Small components
- Clear props
- Project data separated from UI components
- Simple conditional rendering
- Minimal hidden side effects
- Standalone formatting or helper functions where useful

The goal was not to ignore code quality. The goal was to ship quickly while keeping the codebase in a state where tests could be added later without a major refactor.

## Tech stack

This project uses:

- React
- TypeScript
- Vite
- Material UI
- CSS / component styling
- CLI programming agents for assisted development

## Main features

- Hero section with a short personal introduction
- Project cards for key portfolio projects
- Links to live demos
- Links to GitHub repositories
- About section
- Contact section
- Responsive layout for desktop and mobile

## Running locally

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Create a production build:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Suggested project structure

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

## Development principles

For this project, the main development principles are:

- Prefer readable code over clever code
- Keep components small
- Keep project content easy to update
- Avoid unnecessary dependencies
- Avoid overengineering
- Ship a clean version first
- Improve polish after the core portfolio is working

## AI-assisted workflow

This project was built using CLI programming agents as a coding assistant.

The workflow was:

1. Define the goal of the portfolio
2. Break the project into a simple structure
3. Use agents to scaffold and iterate quickly
4. Review the generated code manually
5. Keep the implementation simple and easy to understand
6. Prioritise a working deployed portfolio over perfect architecture

AI was used as a development accelerator, not as a replacement for understanding or reviewing the code.

## Interview note

This repository is also an example of how I use AI-assisted development responsibly.

For a speed-focused project like this, I chose a pragmatic approach:

- Use agents to move faster
- Keep the scope small
- Avoid unnecessary tests for static UI
- Maintain readable and testable structure
- Review and guide the final implementation myself
