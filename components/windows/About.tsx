'use client'

import { motion } from 'framer-motion'
import { Layers, Wind, Move, Zap, Store, Component, Target } from 'lucide-react'

const tech = [
  {
    name: 'Next.js & TypeScript',
    description: 'A solid foundation for a modern, type-safe React application.',
    icon: <Layers className="w-6 h-6 text-blue-300" />,
  },
  {
    name: 'Tailwind CSS',
    description: 'For utility-first styling that keeps the design consistent and responsive.',
    icon: <Wind className="w-6 h-6 text-cyan-300" />,
  },
  {
    name: 'React-RND',
    description: 'Powers the draggable and resizable windowing system.',
    icon: <Move className="w-6 h-6 text-green-300" />,
  },
  {
    name: 'Framer Motion',
    description: 'Brings the interface to life with smooth, fluid animations.',
    icon: <Zap className="w-6 h-6 text-yellow-300" />,
  },
  {
    name: 'Zustand',
    description: 'Manages the global state for windows and themes simply and efficiently.',
    icon: <Store className="w-6 h-6 text-purple-300" />,
  },
  {
    name: 'Shadcn/ui',
    description: 'Provides the beautifully crafted, accessible UI components.',
    icon: <Component className="w-6 h-6 text-pink-300" />,
  },
]

export function About() {
  return (
    <div className="p-4 sm:p-6 h-full overflow-y-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            About This Portfolio
          </h2>
          <p className="text-md sm:text-lg text-white/70 mt-2">
            A look under the hood at the technologies that power this interactive experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col items-start"
            >
              <div className="flex-shrink-0 mb-3">{item.icon}</div>
              <h3 className="font-semibold text-white mb-1">{item.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-center">
          <h3 className="font-semibold text-white mb-2 flex items-center justify-center"><Target className="w-5 h-5 mr-2 text-red-400" /> The Goal</h3>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            The aim was to move beyond a traditional static site and create a memorable, desktop-like experience. Feel free to drag the windows around, open a few apps, and explore!
          </p>
        </div>
      </motion.div>
    </div>
  )
}