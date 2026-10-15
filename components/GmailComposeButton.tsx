import { Button } from '@/components/ui/button'

interface GmailComposeButtonProps {
  readonly email: string
}

/** Opens Gmail's web compose window addressed to `email`; works without a desktop mail app. */
export function GmailComposeButton({ email }: GmailComposeButtonProps) {
  const href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

  return (
    <Button asChild size="lg" variant="outline" className="px-6">
      <a href={href} target="_blank" rel="noopener noreferrer">
        Open in Gmail
        <span className="sr-only"> (opens a new tab)</span>
      </a>
    </Button>
  )
}
