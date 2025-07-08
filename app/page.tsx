'use client'

import { useEffect } from 'react'
import { useWindowStore } from '@/lib/store'
import { MenuBar } from '@/components/MenuBar'
import { Dock } from '@/components/Dock'
import { WindowWrapper } from '@/components/WindowWrapper'
import { Background } from '@/components/Background'
import { Projects } from '@/components/windows/Projects'
import { Experience } from '@/components/windows/Experience'
import { Resume } from '@/components/windows/Resume'
import { Contact } from '@/components/windows/Contact'

export default function Home() {
  const { initializeWindows, isDarkMode } = useWindowStore()

  useEffect(() => {
    initializeWindows()
  }, [initializeWindows])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <main className="relative w-screen h-screen overflow-hidden touch-manipulation">
      <Background />
      <MenuBar />
      <Dock />
      
      {/* Windows */}
      <WindowWrapper windowId="projects">
        <Projects />
      </WindowWrapper>
      
      <WindowWrapper windowId="experience">
        <Experience />
      </WindowWrapper>
      
      <WindowWrapper windowId="resume">
        <Resume />
      </WindowWrapper>
      
      <WindowWrapper windowId="contact">
        <Contact />
      </WindowWrapper>
    </main>
  )
}