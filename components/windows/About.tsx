'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <div className="p-4 sm:p-6 h-full overflow-y-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          About This Portfolio
        </h2>
        
        <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
          <p>
            This portfolio is an interactive desktop environment built with Next.js, TypeScript, and Tailwind CSS. It's designed to be a creative and engaging way to showcase my projects and skills.
          </p>
          <p>
            The windowing system is powered by <strong className="text-white">React-RND</strong>, allowing for draggable and resizable components. Animations are handled by <strong className="text-white">Framer Motion</strong>, and global state, like window positions and theme, is managed with <strong className="text-white">Zustand</strong>. The UI components are from the excellent <strong className="text-white">Shadcn/ui</strong> library.
          </p>
          <p>
            The goal was to move beyond a traditional static site and create a memorable experience. Feel free to drag the windows around and explore!
          </p>
        </div>
      </motion.div>
    </div>
  )
}