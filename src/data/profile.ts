import type { ProfileContent } from "../types/portfolio";

export const profile: ProfileContent = {
  name: "Callum Wilkinson",
  headline: "Software developer building practical full-stack projects",
  summary:
    "I build practical software using TypeScript, JavaScript, React, and C#, including multiplayer games, data tools, and internal business apps. I focus on clean architecture, readable code, and continuous improvement through testing and iteration.",
  location: "Melbourne, VIC",
  githubUrl: "https://github.com/CallumWilkinson",
  linkedinUrl: "https://www.linkedin.com/in/callumwilkinsondev/",
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
    "I have a background in accounting and finance and started my career in the superannuation industry before transitioning into software development.",
    "Over the past few years, I’ve built complete projects across JavaScript, TypeScript, and C#, including multiplayer systems, data platforms, and internal tools.",
    "This has developed my ability to quickly understand unfamiliar problems and take ownership of delivering end-to-end solutions.",
  ],
  contactTitle: "Contact",
  contactSummary:
    "I am based in Melbourne, VIC and interested in software roles where code quality, maintainability, and practical delivery matter. You can contact me directly by email or mobile, or review more of my work through GitHub and LinkedIn.",
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
      id: "portfolio-source",
      label: "Source code for this site",
      href: "https://github.com/CallumWilkinson/portfolio-website",
      variant: "outlined",
      row: 3,
      tone: "muted",
    },
  ],
};
