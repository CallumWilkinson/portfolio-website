import type { ProfileContent } from "../types/portfolio";

export const profile: ProfileContent = {
  name: "Callum Wilkinson",
  headline: "Software developer building practical full-stack projects.",
  summary:
    "I build practical software using TypeScript, JavaScript, React, and C#, including multiplayer games, data tools, and internal business apps. I focus on clean architecture, readable code, and continuous improvement through testing and iteration.",
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
    "These projects reflect how I approach building software that is clear, maintainable, and useful.",
  aboutTitle: "About",
  aboutParagraphs: [
    "Most of my recent work sits around JavaScript, TypeScript, and C#, with a bias toward explicit control flow, small units of code, and solutions that stay understandable under change.",
    "I like projects with a real technical problem behind them: keeping multiplayer game state authoritative, separating read and write paths in a .NET application, or turning a manual quoting process into a tool a team can actually use every day.",
    "I also use AI coding tools pragmatically to move faster on scoped work, but I still review the structure, trade-offs, and final output myself.",
  ],
  contactTitle: "Contact",
  contactSummary:
    "I am based in Melbourne, VIC and interested in software roles where clarity, maintainability, and practical delivery matter. You can contact me directly by email or mobile, or review more of my work through GitHub and LinkedIn.",
  contactLinks: [
    {
      id: "github-profile",
      label: "GitHub profile",
      href: "https://github.com/CallumWilkinson",
      variant: "contained",
      row: 1,
      tone: "primary",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/callumwilkinsondev/",
      variant: "outlined",
      row: 1,
      tone: "default",
    },
    {
      id: "email",
      label: "callumwilkinson773@gmail.com",
      href: "mailto:callumwilkinson773@gmail.com",
      row: 4,
    },
    {
      id: "mobile",
      label: "0403 136 269",
      href: "tel:0403136269",
      row: 4,
    },
    {
      id: "portfolio-source",
      label: "Source code for this site",
      href: "https://github.com/CallumWilkinson/portfolio-website",
      variant: "outlined",
      row: 3,
      tone: "muted",
    },
  ],
};
