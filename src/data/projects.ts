import type { PortfolioProject } from '../types/portfolio'

export const projects: PortfolioProject[] = [
  {
    id: 'wow-paper-trader',
    title: 'WowPaperTrader',
    description:
      'A .NET 10 app that ingests World of Warcraft commodity auction data from Blizzard, stores snapshots in SQL Server, and exposes search and pricing endpoints for item lookups.',
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
      'Separates write-side ingestion from query-side read services so the API can return simple read models while imports stay isolated.',
      'Uses EF Core for transactional snapshot writes and Dapper for read paths shaped around API responses.',
      'Runs auction ingestion in a worker service and keeps command/query boundaries explicit across the application layer.',
    ],
    featured: true,
  },
  {
    id: 'chess-cs50-v2',
    title: 'Multiplayer Chess Platform',
    description:
      'A server-authoritative online chess game built in vanilla JavaScript, with lobby management, WebSocket state sync, and a pure chess domain kept separate from the networking layer.',
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
      'Keeps chess rules in framework-agnostic modules so move validation can be tested without socket or DOM code.',
      'Uses a server-authoritative Socket.IO flow so clients do not own the canonical game state.',
      'Separates lobby and session orchestration from piece movement logic so the real-time layer can be reused for other turn-based games.',
    ],
    featured: true,
  },
  {
    id: 'foam-calculator',
    title: 'Foam Calculator',
    description:
      'An internal quoting tool built for Clark Rubber that looks up foam pricing and SKU data, then calculates customer quotes faster and more consistently than the previous manual process.',
    techStack: ['C#', '.NET', 'Azure App Service', 'CSV data lookup'],
    githubUrl: 'https://github.com/CallumWilkinson/Foam_Calculator',
    liveDemoUrl: 'https://foamcalculator.azurewebsites.net/',
    engineeringNotes: [
      'Replaced a paper-based quoting workflow with a repeatable lookup and calculation flow.',
      'Made it easy to compare different foam options quickly so staff could handle what-if changes without rewriting a quote from scratch.',
      'Focuses on practical business value instead of framework complexity.',
    ],
  },
  {
    id: 'contract-tracker',
    title: 'Contract Approval Workflow App',
    description:
      'A small PHP backend project that models contract approval as explicit workflow rules, with strict typing and tests around status transitions.',
    techStack: ['PHP 8', 'PHPUnit', 'PHPStan', 'Strict typing'],
    githubUrl: 'https://github.com/CallumWilkinson/contract-tracker',
    engineeringNotes: [
      'Treats workflow rules as the core of the project instead of hiding them behind controller code.',
      'Uses tests and static analysis to lock down approval and rejection transitions in a small codebase.',
      'Demonstrates clear domain modelling without needing a large framework or UI layer.',
    ],
  },
]
