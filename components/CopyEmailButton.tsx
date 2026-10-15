'use client'

import { Button } from '@/components/ui/button'
import { useCopyFeedback, type CopyState } from '@/hooks/useCopyFeedback'

const LABELS: Record<CopyState, string> = {
  idle: 'Copy email',
  copied: 'Copied',
  failed: 'Copy failed',
}

interface CopyEmailButtonProps {
  readonly email: string
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const { state, copy } = useCopyFeedback(email)

  return (
    <Button variant="outline" size="lg" className="px-6" onClick={copy}>
      <span aria-live="polite">{LABELS[state]}</span>
    </Button>
  )
}
