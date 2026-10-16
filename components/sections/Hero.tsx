import { Button } from '@/components/ui/button'
import { EmailMeButton } from '@/components/EmailMeButton'
import { CONTACT, EXPERIENCE, RESUME_PDF_HREF } from '@/lib/resume-data'

const CURRENT_ROLE = EXPERIENCE[0]

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:pb-24 sm:pt-28">
      <p className="rise font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {CURRENT_ROLE.location}
      </p>
      <h1
        className="rise mt-4 font-serif text-5xl leading-[1.05] tracking-[-0.03em] sm:text-7xl"
        style={{ '--i': 1 } as React.CSSProperties}
      >
        {CONTACT.name}
      </h1>
      <p
        className="rise mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        style={{ '--i': 2 } as React.CSSProperties}
      >
        {CURRENT_ROLE.title} at {CURRENT_ROLE.company}
      </p>
      <div
        className="rise mt-9 flex flex-wrap gap-3"
        style={{ '--i': 3 } as React.CSSProperties}
      >
        <EmailMeButton email={CONTACT.email} />
        <Button asChild size="lg" variant="outline" className="px-6">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-6">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-6">
          <a href={RESUME_PDF_HREF} target="_blank" rel="noopener noreferrer">
            Resume
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
