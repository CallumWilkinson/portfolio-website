import { Stack, Typography } from '@mui/material'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  let eyebrowContent = null
  if (eyebrow !== undefined) {
    eyebrowContent = (
      <Typography
        component="p"
        sx={{
          color: 'primary.main',
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}
      >
        {eyebrow}
      </Typography>
    )
  }

  let descriptionContent = null
  if (description !== undefined) {
    descriptionContent = (
      <Typography
        color="text.secondary"
        sx={{ fontSize: { xs: '1rem', md: '1.05rem' }, maxWidth: 720 }}
      >
        {description}
      </Typography>
    )
  }

  return (
    <Stack spacing={1.5} sx={{ mb: { xs: 4, md: 5 } }}>
      {eyebrowContent}
      <Typography
        component="h2"
        variant="h2"
        sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, letterSpacing: '-0.04em' }}
      >
        {title}
      </Typography>
      {descriptionContent}
    </Stack>
  )
}

export default SectionHeading
