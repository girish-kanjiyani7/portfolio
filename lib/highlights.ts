import { EXPERIENCE, PROJECTS } from '@/lib/resume-data'

export interface Highlight {
  readonly value: string
  readonly label: string
  readonly context: string
}

interface HighlightSpec {
  readonly value: string
  readonly label: string
  /** Exact phrase that must appear in the source bullet. */
  readonly needle: string
  /** The figure behind `value`; must appear in `needle` so the display cannot drift from the source. */
  readonly figure: string
  readonly source: { readonly kind: 'role' | 'project'; readonly name: string }
}

const SPECS: readonly HighlightSpec[] = [
  {
    value: '4 min',
    label: 'Regression testing, down from 2 days',
    needle: 'from 2 days to 4 minutes',
    figure: '4 minutes',
    source: { kind: 'role', name: 'GE Appliances' },
  },
  {
    value: '60%',
    label: 'Admin API response time cut',
    needle: 'cut API response time by 60%',
    figure: '60%',
    source: { kind: 'role', name: 'GE Appliances' },
  },
  {
    value: '71%',
    label: 'Projected AWS cost reduction',
    needle: 'cutting projected AWS costs by 71%',
    figure: '71%',
    source: { kind: 'role', name: 'JMA Wireless' },
  },
  {
    value: '4 teams',
    label: 'Medical research teams on Researchr-Space',
    needle: 'adopted by four medical school research teams',
    figure: 'four',
    source: { kind: 'project', name: 'Researchr-Space' },
  },
]

function sourceBullets(spec: HighlightSpec): readonly string[] {
  if (spec.source.kind === 'role') {
    return EXPERIENCE.find((r) => r.company === spec.source.name)?.bullets ?? []
  }
  return PROJECTS.find((p) => p.name === spec.source.name)?.bullets ?? []
}

function toHighlight(spec: HighlightSpec): Highlight {
  const isBacked =
    spec.needle.includes(spec.figure) && sourceBullets(spec).some((b) => b.includes(spec.needle))
  if (!isBacked) {
    throw new Error(`Highlight "${spec.label}" is not backed by resume data (${spec.source.name})`)
  }
  return { value: spec.value, label: spec.label, context: spec.source.name }
}

/** Headline metrics; each is verified at build time against lib/resume-data.ts. */
export const HIGHLIGHTS: readonly Highlight[] = SPECS.map(toHighlight)
