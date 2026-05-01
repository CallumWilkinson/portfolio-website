# Portfolio Website

This repository contains my interview-focused portfolio website.

It is a small frontend project built to present real software projects, live demos, GitHub repositories, and the engineering decisions behind each project in one clean place.

## Current status

The website currently includes:

- A hero section with a short introduction
- A projects section with real portfolio projects
- An about section
- A contact section
- Responsive card-based project presentation for desktop and mobile

The projects section is the most important part of the site.

It currently highlights:

- World of Warcraft Auction House Platform
- Multiplayer Chess
- 2D Platformer Game
- Clark Rubber Foam Calculator

Each project card is designed to show:

- A short description
- Tech stack
- GitHub link
- Live demo link when available
- Screenshot or preview image when available
- Technical details explaining what the project demonstrates

## Purpose

The goal of this site is to help interviewers quickly understand:

- What I have built
- What technologies I have worked with
- How I think about architecture and implementation
- Which projects are worth exploring in more depth

This is intentionally not a complex application. It is a focused portfolio site designed for clarity, speed, and interview readiness.

## Why it is built this way

I wanted a portfolio that could be shipped quickly without turning into an overengineered side project.

The main priorities were:

- Clear project presentation
- Honest and specific project descriptions
- Readable, maintainable code
- Simple content updates through local data files
- Practical delivery over perfect architecture

## Tech stack

This project uses:

- React
- TypeScript
- Vite
- Material UI
- Local TypeScript data files for portfolio content

## Testing decision

I deliberately chose not to add unit tests or integration tests for this portfolio site.

Because this project is mostly static presentation, I prioritised speed and interview readiness over automated UI coverage.

That said, the code is still intended to stay testable later by keeping:

- Components small
- Props explicit
- Project data separate from rendering
- Conditional rendering simple
- Side effects minimal

## Development principles

The codebase is intentionally simple.

Key principles:

- Keep components focused on one job
- Keep project content easy to update
- Avoid unnecessary dependencies
- Avoid unnecessary abstractions
- Prefer readable code over clever code
- Ship a clean version first, then refine

## AI-assisted workflow

This project was built with the help of CLI programming agents as part of the implementation workflow.

I used AI to move faster on scaffolding, iteration, and content presentation, but I still review the structure, decisions, and final output myself.

For this project, AI is a delivery accelerator, not a replacement for technical judgment.

## Interview note

This repository also reflects how I use AI-assisted development in a practical way:

- Define a clear goal
- Keep the scope small
- Use AI to accelerate implementation
- Review the result carefully
- Keep the final code understandable

The portfolio itself is meant to be explainable in under a minute while still giving enough technical detail for deeper follow-up questions.
