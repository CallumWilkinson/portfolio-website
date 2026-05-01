import type { ProfileContent } from "../types/portfolio";

export const profile: ProfileContent = {
  name: "Callum Wilkinson",
  headline: "Software developer building pragmatic JavaScript and C# projects.",
  summary:
    "I build software that solves concrete problems, from real-time multiplayer systems to .NET data ingestion tools and practical internal apps. This portfolio focuses on work I can explain clearly in an interview, including the trade-offs behind the implementation.",
  location: "Melbourne, VIC",
  githubUrl: "https://github.com/CallumWilkinson",
  avatarUrl: "https://avatars.githubusercontent.com/u/84135636?v=4",
  strengths: [
    "JavaScript",
    "TypeScript",
    "React",
    "C#",
    ".NET",
    "Test-Driven-Development",
    "Software Architecture",
    "AI with Quality",
  ],
  projectsIntro:
    "These are the projects that best show how I think about architecture, practical delivery, and maintainable code.",
  aboutTitle: "About",
  aboutParagraphs: [
    "Most of my recent work sits around JavaScript, TypeScript, and C#, with a bias toward explicit control flow, small units of code, and solutions that stay understandable under change.",
    "I like projects with a real technical problem behind them: keeping multiplayer game state authoritative, separating read and write paths in a .NET application, or turning a manual quoting process into a tool a team can actually use every day.",
    "I also use AI coding tools pragmatically to move faster on scoped work, but I still review the structure, trade-offs, and final output myself.",
  ],
  contactTitle: "Contact",
  contactSummary:
    "GitHub is the fastest way to review more of my work right now. I am based in Melbourne, VIC and interested in software roles where clarity, maintainability, and practical delivery matter.",
  contactLinks: [
    {
      id: "github-profile",
      label: "GitHub profile",
      href: "https://github.com/CallumWilkinson",
      variant: "contained",
    },
    {
      id: "portfolio-source",
      label: "Portfolio source",
      href: "https://github.com/CallumWilkinson/portfolio-website",
      variant: "outlined",
    },
  ],
};
