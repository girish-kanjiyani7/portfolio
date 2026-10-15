import { Button } from '@/components/ui/button'
import { EmailMeButton } from '@/components/EmailMeButton'
import { CopyEmailButton } from '@/components/CopyEmailButton'
import { SectionShell } from '@/components/SectionShell'
import { CONTACT } from '@/lib/resume-data'

export function Contact() {
  return (
    <SectionShell id="contact" title="Contact">
      <a
        href={`mailto:${CONTACT.email}`}
        className="break-all font-serif text-3xl tracking-[-0.02em] underline decoration-border underline-offset-8 hover:decoration-foreground sm:text-5xl"
      >
        {CONTACT.email}
      </a>
      {/* TODO(contact-form): contact form backend (e.g. Formspree) is undecided. The static export
          cannot run API routes, so mailto + copy is used for now. */}
      <div className="mt-8 flex flex-wrap gap-3">
        <EmailMeButton email={CONTACT.email} />
        <CopyEmailButton email={CONTACT.email} />
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
      </div>
    </SectionShell>
  )
}
