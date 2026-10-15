import { SectionShell } from '@/components/SectionShell'
import { EXPERIENCE, type Role } from '@/lib/resume-data'

const VISIBLE_BULLETS = 2

interface RoleItemProps {
  readonly role: Role
}

function BulletList({ items }: { readonly items: readonly string[] }) {
  return (
    <ul className="space-y-3 text-[15px] leading-relaxed">
      {items.map((b) => (
        <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-muted-foreground">
          {b}
        </li>
      ))}
    </ul>
  )
}

function RoleItem({ role }: RoleItemProps) {
  const top = role.bullets.slice(0, VISIBLE_BULLETS)
  const rest = role.bullets.slice(VISIBLE_BULLETS)
  return (
    <li className="relative grid gap-2 border-l border-border pb-12 pl-6 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-8 md:border-l-0 md:pl-0">
      <span className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full bg-foreground md:hidden" aria-hidden />
      <p className="font-mono text-xs text-muted-foreground md:pt-1.5">
        {role.start} – {role.end}
      </p>
      <div>
        <h3 className="text-lg font-medium tracking-tight">{role.title}</h3>
        <p className="mb-4 text-muted-foreground">
          {role.company} · {role.location}
        </p>
        <BulletList items={top} />
        {rest.length > 0 && (
          <details className="group mt-3">
            <summary className="inline-flex min-h-[2.75rem] cursor-pointer items-center font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">
              <span className="group-open:hidden">Show {rest.length} more</span>
              <span className="hidden group-open:inline">Show less</span>
            </summary>
            <div className="mt-2">
              <BulletList items={rest} />
            </div>
          </details>
        )}
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <SectionShell id="experience" title="Experience">
      <ol>
        {EXPERIENCE.map((role) => (
          <RoleItem key={`${role.company}-${role.start}`} role={role} />
        ))}
      </ol>
    </SectionShell>
  )
}
