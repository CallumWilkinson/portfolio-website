import { Box, Container, Stack, Typography } from '@mui/material'

import SectionHeading from '../components/SectionHeading'

interface AboutSectionProps {
  title: string
  paragraphs: string[]
}

function AboutSection({ title, paragraphs }: AboutSectionProps) {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: 'rgba(244, 247, 246, 0.8)',
        py: { xs: 8, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 6 },
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.7fr) minmax(0, 1.3fr)' },
          }}
        >
          <SectionHeading eyebrow="Background" title={title} />
          <Stack spacing={2.5}>
            {paragraphs.map((paragraph) => (
              <Typography
                color="text.secondary"
                key={paragraph}
                sx={{ fontSize: { xs: '1rem', md: '1.05rem' } }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutSection
