import type { ButtonProps } from '@mui/material/Button'

export interface PortfolioProject {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveDemoUrl?: string
  imageUrl?: string
  imageAlt?: string
  engineeringNotes: string[]
  featured?: boolean
}

export interface ContactLink {
  id: string
  label: string
  href: string
  variant?: ButtonProps['variant']
  row?: number
  tone?: 'primary' | 'default' | 'muted'
}

export interface ProfileContent {
  name: string
  headline: string
  summary: string
  summaryNote?: string
  location: string
  githubUrl: string
  linkedinUrl: string
  avatarUrl: string
  strengths: string[]
  projectsIntro: string
  aboutTitle: string
  aboutParagraphs: string[]
  contactTitle: string
  contactSummary: string
  contactLinks: ContactLink[]
}
