import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

interface ContactLinkButtonProps {
  label: string
  href: string
  variant?: ButtonProps['variant']
}

function ContactLinkButton({
  label,
  href,
  variant = 'outlined',
}: ContactLinkButtonProps) {
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
      }}
      target="_blank"
      variant={variant}
    >
      {label}
    </Button>
  )
}

export default ContactLinkButton
