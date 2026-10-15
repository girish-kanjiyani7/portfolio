import { SectionShell } from '@/components/SectionShell'
import { SKILLS } from '@/lib/resume-data'

export function Skills() {
  return (
    <SectionShell id="skills" title="Skills">
      <dl className="divide-y divide-border">
        {SKILLS.map((group) => (
          <div key={group.label} className="grid gap-2 py-4 first:pt-0 md:grid-cols-[14rem_1fr] md:gap-8">
            <dt className="text-sm font-medium">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[15px] text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  )
}
