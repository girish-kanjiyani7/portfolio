import { SectionShell } from '@/components/SectionShell'
import { ACTIVITIES, EDUCATION } from '@/lib/resume-data'

export function EducationActivities() {
  return (
    <SectionShell id="education" title="Education & Leadership">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-medium">Education</h3>
          <ul className="space-y-4">
            {EDUCATION.map((e) => (
              <li key={e.school}>
                <p className="text-lg font-medium tracking-tight">{e.school}</p>
                <p className="text-muted-foreground">{e.degree}</p>
                <p className="font-mono text-xs text-muted-foreground">{e.graduated}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium">Leadership & activities</h3>
          <ul className="space-y-6">
            {ACTIVITIES.map((a) => (
              <li key={a.event}>
                <p className="text-lg font-medium tracking-tight">{a.event}</p>
                <p className="mb-3 text-muted-foreground">
                  {a.role} · {a.location}
                </p>
                <ul className="list-disc space-y-3 pl-5 text-[15px] leading-relaxed marker:text-muted-foreground">
                  {a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
