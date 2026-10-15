import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { CONTACT, EXPERIENCE } from '@/lib/resume-data'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif' })

const CURRENT_ROLE = EXPERIENCE[0]
const TITLE = `${CONTACT.name} | ${CURRENT_ROLE.title}`
const DESCRIPTION = `${CURRENT_ROLE.title} at ${CURRENT_ROLE.company}. Test automation, backend performance and AI-assisted engineering.`

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.site),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CONTACT.site,
    siteName: CONTACT.name,
    type: 'website',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#121110' },
  ],
}

// Follows the OS color scheme; runs before paint to avoid a flash.
const THEME_SCRIPT = `document.documentElement.classList.toggle('dark',window.matchMedia('(prefers-color-scheme: dark)').matches)`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={`${sans.variable} ${mono.variable} ${serif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
