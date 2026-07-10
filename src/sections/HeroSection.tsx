import { Avatar, Box, Button, Chip, Container, Stack, Typography } from '@mui/material'

interface HeroSectionProps {
  name: string
  headline: string
  summary: string
  summaryNote?: string
  location: string
  githubUrl: string
  linkedinUrl: string
  avatarUrl: string
  strengths: string[]
}

function HeroSection({
  name,
  headline,
  summary,
  summaryNote,
  location,
  githubUrl,
  linkedinUrl,
  avatarUrl,
  strengths,
}: HeroSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        pt: { xs: 9, md: 12 },
      }}
    >
      <Box
        sx={{
          background:
            'radial-gradient(circle at top right, rgba(15, 108, 91, 0.18), transparent 30%)',
          inset: 0,
          pointerEvents: 'none',
          position: 'absolute',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'grid',
            gap: { xs: 4, md: 6 },
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.3fr) minmax(280px, 0.7fr)' },
          }}
        >
          <Stack spacing={3}>
            <Stack spacing={1.5}>
              <Typography
                component="p"
                sx={{
                  color: 'primary.main',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Callum Wilkinson
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.8rem', md: '4.6rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                  lineHeight: 1,
                  maxWidth: 720,
                }}
                variant="h1"
              >
                {headline}
              </Typography>
            </Stack>

            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, maxWidth: 740 }}
            >
              {summary}
            </Typography>

            {summaryNote !== undefined && (
              <Typography
                color="text.secondary"
                sx={{
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  fontSize: { xs: '0.98rem', md: '1.05rem' },
                  maxWidth: 740,
                  pl: 2,
                }}
              >
                {summaryNote}
              </Typography>
            )}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Button href="#projects" size="large" variant="contained">
                View projects
              </Button>
              <Button
                component="a"
                href={githubUrl}
                rel="noreferrer"
                size="large"
                target="_blank"
                variant="outlined"
              >
                GitHub profile
              </Button>
            </Box>
          </Stack>

          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.86)',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 5,
              boxShadow: '0 24px 48px rgba(19, 35, 33, 0.08)',
              p: { xs: 3, md: 4 },
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <Box
                  component="a"
                  href={linkedinUrl}
                  rel="noreferrer"
                  sx={{
                    borderRadius: '50%',
                    display: 'inline-flex',
                    outline: '2px solid transparent',
                    outlineOffset: 4,
                    transition: 'box-shadow 0.2s ease, outline-color 0.2s ease',
                    '&:hover': {
                      boxShadow: '0 0 0 3px rgba(15, 108, 91, 0.18)',
                      outlineColor: 'rgba(15, 108, 91, 0.34)',
                    },
                    '&:focus-visible': {
                      boxShadow: '0 0 0 3px rgba(15, 108, 91, 0.22)',
                      outlineColor: 'rgba(15, 108, 91, 0.42)',
                    },
                  }}
                  target="_blank"
                >
                  <Avatar
                    alt={name}
                    src={avatarUrl}
                    sx={{ height: 72, width: 72 }}
                  />
                </Box>
                <Stack spacing={0.5}>
                  <Typography component="p" variant="h6">
                    {name}
                  </Typography>
                  <Typography color="text.secondary">{location}</Typography>
                </Stack>
              </Stack>

              <Stack spacing={1.5}>
                <Typography component="p" sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
                  Current focus
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {strengths.map((strength) => (
                    <Chip
                      clickable={false}
                      component="div"
                      key={strength}
                      label={strength}
                      sx={{
                        backgroundColor: 'rgba(15, 108, 91, 0.08)',
                        borderRadius: 999,
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
