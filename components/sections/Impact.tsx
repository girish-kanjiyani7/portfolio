import { HIGHLIGHTS } from '@/lib/highlights'

export function Impact() {
  return (
    <section aria-label="Impact highlights" className="border-t border-border">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.label}
            className="flex flex-col-reverse justify-end gap-3 border-b border-border px-5 py-8 odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <dt className="text-sm text-muted-foreground">
              {h.label}
              <span className="block font-mono text-xs">{h.context}</span>
            </dt>
            <dd className="font-serif text-4xl leading-none tracking-[-0.02em] sm:text-5xl">
              {h.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
