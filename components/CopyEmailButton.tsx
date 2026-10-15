'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

type CopyState = 'idle' | 'copied' | 'failed'

const RESET_DELAY_MS = 2000
const LABELS: Record<CopyState, string> = {
  idle: 'Copy email',
  copied: 'Copied',
  failed: 'Copy failed',
}

interface CopyEmailButtonProps {
  readonly email: string
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [state, setState] = useState<CopyState>('idle')
  const resetTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setState('copied')
    } catch {
      setState('failed')
    }
    window.clearTimeout(resetTimer.current)
    resetTimer.current = window.setTimeout(() => setState('idle'), RESET_DELAY_MS)
  }

  return (
    <Button variant="outline" size="lg" className="px-6" onClick={handleCopy}>
      <span aria-live="polite">{LABELS[state]}</span>
    </Button>
  )
}
