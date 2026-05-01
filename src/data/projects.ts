import type { PortfolioProject } from '../types/portfolio'

export const projects: PortfolioProject[] = [
  {
    id: 'wow-paper-trader',
    title: 'WowPaperTrader',
    description:
      'A .NET 10 application that ingests World of Warcraft commodity auction data from the Blizzard API, stores hourly snapshots in SQL Server, and exposes fast, query-optimised endpoints for item search and pricing.',
    techStack: [
      '.NET 10',
      'ASP.NET Core',
      'EF Core',
      'Dapper',
      'SQL Server',
      'Worker Service',
      'Blizzard API',
    ],
    githubUrl: 'https://github.com/CallumWilkinson/wow-paper-trader',
    engineeringNotes: [
      'Implements a clear separation between write-side ingestion and read-side query services using CQRS principles.',
      'Uses EF Core for transactional snapshot writes and Dapper for high-performance, read-optimised queries.',
      'Runs ingestion as a background worker service while keeping command and query boundaries explicit in the application layer.',
    ],
    featured: true,
  },
  {
    id: 'chess-cs50-v2',
    title: 'Multiplayer Chess Platform',
    description:
      'A server-authoritative online chess platform built in vanilla JavaScript, featuring lobby management, WebSocket state synchronisation, and a clean separation between game logic and networking.',
    techStack: [
      'Vanilla JavaScript',
      'Node.js',
      'Express',
      'Socket.IO',
      'Jest',
      'Fly.io',
    ],
    githubUrl: 'https://github.com/CallumWilkinson/Chess_CS50_v2',
    liveDemoUrl: 'https://multiplayer-chess-qh1o.onrender.com/',
    imageUrl:
      'https://raw.githubusercontent.com/CallumWilkinson/Chess_CS50_v2/server-side-refactor/architecture.png',
    imageAlt: 'Architecture diagram for the multiplayer chess platform',
    engineeringNotes: [
      'Encapsulates chess rules in framework-agnostic modules so core logic can be tested independently of sockets or the DOM.',
      'Implements a server-authoritative architecture to ensure a single source of truth for game state.',
      'Separates lobby/session orchestration from gameplay logic, allowing the real-time layer to be reused for other turn-based games.',
    ],
    featured: true,
  },
  {
    id: 'foam-calculator',
    title: 'Foam Calculator',
    description:
      'An internal quoting tool built for Clark Rubber that retrieves foam pricing and SKU data, and generates customer quotes quickly and consistently. Designed for mobile-first usage and prioritises speed and usability over visual design.',
    techStack: ['C#', '.NET', 'Azure App Service', 'CSV Data Lookup'],
    githubUrl: 'https://github.com/CallumWilkinson/Foam_Calculator',
    liveDemoUrl: 'https://foamcalculator.azurewebsites.net/',
    engineeringNotes: [
      'Replaced a manual, paper-based quoting workflow with a repeatable lookup and calculation system.',
      'Optimised for mobile use in-store, focusing on fast input and minimal friction rather than UI polish.',
      'Delivers practical business value by enabling faster, more consistent quoting without adding unnecessary technical complexity.',
    ],
  },
  {
    id: '2d-game-speedyboi',
    title: '2D Platformer',
    description:
      "This is my first project where I applied object-oriented programming in C# using Unity. You control the player using the left and right arrow keys, and jump using the space bar, with the goal of reaching the campfire to progress through each level where the game's physics become increasingly harder to control.",
    techStack: ['Unity', 'C#', '2D game development', 'Physics tuning'],
    githubUrl: 'https://github.com/CallumWilkinson/2D-game-speedyboi',
    liveDemoUrl: 'https://callumwilkinson.github.io/2D-game-speedyboi/',
    engineeringNotes: [
      'Applied OOP principles in a real Unity project to structure player behaviour and game systems.',
      'Designed modular, maintainable scripts to support gameplay features and iteration.',
      'Tuned physics and movement to create responsive controls and progressively harder levels',
    ],
  },
]
