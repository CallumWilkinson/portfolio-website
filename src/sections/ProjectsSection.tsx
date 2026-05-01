import { Box, Container } from '@mui/material'

import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import type { PortfolioProject } from '../types/portfolio'

interface ProjectsSectionProps {
  projects: PortfolioProject[]
  intro?: string
}

function ProjectsSection({ projects, intro }: ProjectsSectionProps) {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          description={intro}
          eyebrow="Selected Work"
          title="Projects"
        />
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default ProjectsSection
