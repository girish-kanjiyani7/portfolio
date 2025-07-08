'use client'

import { motion } from 'framer-motion'
import { Info, Code, Feather } from 'lucide-react'

export function About() {
  return (
    <div className="p-4 sm:p-6 h-full overflow-y-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          About This Portfolio
        </h2>
        <p className="text-center text-white/80 mb-8">
          This portfolio is an interactive desktop experience built to showcase my projects and skills in a more engaging way.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Info className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Concept</h3>
              <p className="text-white/70 text-sm">
                The goal was to create a familiar, desktop-like environment where you can open, move, and interact with windows, just like a real operating system.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Code className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Technology</h3>
              <p className="text-white/70 text-sm">
                This application is built with Next.js, TypeScript, and Tailwind CSS. The window management and animations are powered by Framer Motion and React-RND.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Feather className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Design</h3>
              <p className="text-white/70 text-sm">
                The design is heavily inspired by macOS, aiming for a clean, intuitive, and visually appealing interface that is both fun to use and functional.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}