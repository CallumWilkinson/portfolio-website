import { Box } from '@mui/material'

import { profile } from './data/profile'
import { projects } from './data/projects'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'

function App() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(180deg, #edf5f2 0%, #ffffff 18%, #ffffff 100%)',
        color: 'text.primary',
        minHeight: '100vh',
      }}
    >
      <HeroSection
        avatarUrl={profile.avatarUrl}
        githubUrl={profile.githubUrl}
        headline={profile.headline}
        linkedinUrl={profile.linkedinUrl}
        location={profile.location}
        name={profile.name}
        strengths={profile.strengths}
        summary={profile.summary}
        summaryNote={profile.summaryNote}
      />
      <ProjectsSection intro={profile.projectsIntro} projects={projects} />
      <AboutSection
        paragraphs={profile.aboutParagraphs}
        title={profile.aboutTitle}
      />
      <ContactSection
        links={profile.contactLinks}
        summary={profile.contactSummary}
        title={profile.contactTitle}
      />
    </Box>
  )
}

export default App
