import { SiteNav } from '@/components/SiteNav'
import { Hero } from '@/components/sections/Hero'
import { Impact } from '@/components/sections/Impact'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { EducationActivities } from '@/components/sections/EducationActivities'
import { Contact } from '@/components/sections/Contact'
import { CONTACT } from '@/lib/resume-data'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <EducationActivities />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        {CONTACT.name}
      </footer>
    </>
  )
}
