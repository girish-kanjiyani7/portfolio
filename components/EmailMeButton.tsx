'use client'

import { Button } from '@/components/ui/button'
import { useCopyFeedback, type CopyState } from '@/hooks/useCopyFeedback'

const LABELS: Record<CopyState, string> = {
  idle: 'Email me',
  copied: 'Email copied',
  failed: 'Copy failed',
}

interface EmailMeButtonProps {
  readonly email: string
}

/**
 * Opens the visitor's mail app via mailto:. Many browsers have no mail handler, which makes a
 * plain mailto link look broken, so the address is also copied and the button confirms it.
 */
export function EmailMeButton({ email }: EmailMeButtonProps) {
  const { state, copy } = useCopyFeedback(email)

  return (
    <Button asChild size="lg" className="px-6">
      <a href={`mailto:${email}`} onClick={copy}>
        <span aria-live="polite">{LABELS[state]}</span>
      </a>
    </Button>
  )
}
