import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

interface ContactLinkButtonProps {
  label: string
  href: string
  variant?: ButtonProps['variant']
  tone?: 'primary' | 'default' | 'muted'
}

function ContactLinkButton({
  label,
  href,
  variant = 'outlined',
  tone = 'default',
}: ContactLinkButtonProps) {
  const openInNewTab = href.startsWith('http')

  let toneStyles = {}

  if (tone === 'primary') {
    toneStyles = {
      backgroundColor: 'primary.main',
      borderColor: 'primary.main',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#0b594b',
        borderColor: '#0b594b',
      },
    }
  }

  if (tone === 'muted') {
    toneStyles = {
      backgroundColor: 'rgba(15, 108, 91, 0.06)',
      borderColor: 'rgba(15, 108, 91, 0.18)',
      color: 'text.secondary',
      '&:hover': {
        backgroundColor: 'rgba(15, 108, 91, 0.1)',
        borderColor: 'rgba(15, 108, 91, 0.28)',
      },
    }
  }

  return (
    <Button
      component="a"
      href={href}
      rel="noreferrer"
      size="large"
      sx={{
        borderRadius: 999,
        px: 2.5,
        py: 1.2,
        textTransform: 'none',
        ...toneStyles,
      }}
      target={openInNewTab ? '_blank' : undefined}
      variant={variant}
    >
      {label}
    </Button>
  )
}

export default ContactLinkButton
