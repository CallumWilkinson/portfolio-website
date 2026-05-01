import type { PortfolioProject } from "../types/portfolio";

export const projects: PortfolioProject[] = [
  {
    id: "wow-paper-trader",
    title: "World of Warcraft Auction House Platform",
    description:
      "A **.NET 10** application that ingests **World of Warcraft commodity auction data** from the **Blizzard API**,\nstores **hourly snapshots** in **SQL Server**,\nand exposes **fast, query-optimised endpoints** for item search and pricing.",
    techStack: [
      ".NET 10",
      "ASP.NET Core",
      "EF Core",
      "Dapper",
      "SQL Server",
      "Worker Service",
      "Blizzard API",
    ],
    githubUrl: "https://github.com/CallumWilkinson/wow-paper-trader",
    engineeringNotes: [
      "Implements a clear separation between write-side ingestion and read-side query services using CQRS principles.",
      "Uses EF Core for transactional snapshot writes and Dapper for high-performance, read-optimised queries.",
      "Runs ingestion as a background worker service while keeping command and query boundaries explicit in the application layer.",
    ],
    featured: true,
  },
  {
    id: "chess-cs50-v2",
    title: "Multiplayer Chess",
    description:
      "A **server-authoritative** online chess platform built in vanilla JavaScript,\nfeaturing lobby management, WebSocket state synchronisation,\nand a clean separation between game logic and networking.\n\nTo try the demo, open two browser tabs to simulate two players.\nIn the first tab, click **Create New Game**, enter a lobby name,\nand submit your username in the prompt.\nIn the second tab, click **Join Existing Game** and select the lobby\nyou just created from the list, then enter a username.\n\nYou can play against yourself and observe both clients staying fully\nin sync in real time. Moves are currently made by clicking a piece\nto select it, then clicking a destination square.\n**Drag-and-drop movement has not been implemented yet.**",
    techStack: [
      "Vanilla JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "Jest",
      "Fly.io",
    ],
    githubUrl: "https://github.com/CallumWilkinson/Chess_CS50_v2",
    liveDemoUrl: "https://chess-cs50-v2.fly.dev/welcome.html",
    imageUrl: "/images/chess.png",
    imageAlt: "Chess game demo image",
    engineeringNotes: [
      "Encapsulates chess rules in framework-agnostic modules so core logic can be tested independently of sockets or the DOM.",
      "Implements a server-authoritative architecture to ensure a single source of truth for game state.",
      "Separates lobby/session orchestration from gameplay logic, allowing the real-time layer to be reused for other turn-based games.",
    ],
    featured: true,
  },
  {
    id: "2d-game-speedyboi",
    title: "2D Platformer Game",
    description:
      "My **first project** where I applied **object-oriented programming in C#** using **Unity**.\nYou control the player with the arrow keys and jump with the space bar,\nwith the goal of reaching the campfire to progress through each level.\nEach level increases the difficulty by making the game's **physics and movement harder to control**.",
    techStack: ["Unity", "C#", "2D game development", "Physics tuning"],
    githubUrl: "https://github.com/CallumWilkinson/2D-game-speedyboi",
    liveDemoUrl: "https://callumwilkinson.github.io/2D-game-speedyboi/",
    imageUrl: "/images/platformer.png",
    imageAlt: "Platformer game demo image",
    engineeringNotes: [
      "Applied OOP principles in a real Unity project to structure player behaviour and game systems.",
      "Designed modular, maintainable scripts to support gameplay features and iteration.",
      "Tuned physics and movement to create responsive controls and progressively harder levels",
    ],
  },
  {
    id: "foam-calculator",
    title: "Cark Rubber Foam Calculator",
    description:
      "An **internal quoting tool** built for the **Clark Rubber** retail business\nthat retrieves **foam pricing and SKU data**\nand generates customer quotes **quickly and consistently**.\nDesigned for **mobile-first** usage and prioritises **speed and usability** over visual design.",
    techStack: ["C#", ".NET", "Azure App Service", "CSV Data Lookup"],
    githubUrl: "https://github.com/CallumWilkinson/Foam_Calculator",
    liveDemoUrl: "https://foamcalculator.azurewebsites.net/",
    imageUrl: "/images/foam-calculator.png",
    imageAlt: "Foam Calculator demo image",
    engineeringNotes: [
      "Replaced a manual, paper-based quoting workflow with a repeatable lookup and calculation system.",
      "Optimised for mobile use in-store, focusing on fast input and minimal friction rather than UI polish.",
      "Delivers practical business value by enabling faster, more consistent quoting without adding unnecessary technical complexity.",
    ],
  },
];
