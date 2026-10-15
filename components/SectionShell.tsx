import type { ReactNode } from 'react'

interface SectionShellProps {
  readonly id: string
  readonly title: string
  readonly children: ReactNode
}

export function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <h2
          id={`${id}-title`}
          className="mb-10 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
