import { Badge } from '@/components/ui/badge'
import { SectionShell } from '@/components/SectionShell'
import { PROJECTS, type Project } from '@/lib/resume-data'

function linkLabel(project: Project): string {
  return project.href?.includes('github.com') ? 'GitHub' : 'Live site'
}

function ProjectItem({ project }: { readonly project: Project }) {
  return (
    <li className="flex flex-col border-t border-border pt-6 first:border-t-0 first:pt-0 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(2)]:pt-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-lg font-medium tracking-tight">{project.name}</h3>
        {project.isOpenSource && (
          <Badge variant="outline" className="rounded-sm font-mono text-[10px] uppercase tracking-wider">
            Open source
          </Badge>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{project.kind}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-muted-foreground">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
        {project.stack.map((s) => (
          <li key={s} className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground">
            {s}
          </li>
        ))}
      </ul>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[2.75rem] items-center self-start text-sm font-medium underline underline-offset-4 decoration-border hover:decoration-foreground"
        >
          {linkLabel(project)} <span aria-hidden>&nbsp;↗</span>
          <span className="sr-only"> (opens {project.name} in a new tab)</span>
        </a>
      )}
    </li>
  )
}

export function Projects() {
  return (
    <SectionShell id="projects" title="Projects">
      <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectItem key={p.name} project={p} />
        ))}
      </ul>
    </SectionShell>
  )
}
