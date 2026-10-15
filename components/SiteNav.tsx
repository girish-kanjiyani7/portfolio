import { CONTACT } from '@/lib/resume-data'

interface NavItem {
  readonly href: string
  readonly label: string
  readonly isHiddenOnPhone?: boolean
}

const NAV_ITEMS: readonly NavItem[] = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education', isHiddenOnPhone: true },
  { href: '#contact', label: 'Contact' },
]

const INITIALS = CONTACT.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-5"
      >
        <a href="#top" className="shrink-0 py-2 font-medium tracking-tight" aria-label={CONTACT.name}>
          <span className="sm:hidden" aria-hidden>{INITIALS}</span>
          <span className="max-sm:hidden">{CONTACT.name}</span>
        </a>
        <ul className="-mr-2 flex items-center overflow-x-auto text-sm text-muted-foreground">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className={item.isHiddenOnPhone ? 'max-sm:hidden' : undefined}>
              <a
                href={item.href}
                className="block whitespace-nowrap px-2.5 py-2 transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
