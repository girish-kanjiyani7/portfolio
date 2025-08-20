'use client'

import { motion } from 'framer-motion'
import { useWindowStore } from '@/lib/store'

export function Background() {
  const { isDarkMode } = useWindowStore()

  return (
    <div className={`fixed inset-0 transition-colors duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-radial from-[#1a2035] at-center to-[#0d1117]' 
        : 'bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600'
    }`}>

      {/* Central content area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4">
            Hi, I'm Girish
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            Building Intelligent Software
          </p>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-t from-black/20 via-transparent to-transparent' 
          : 'bg-gradient-to-t from-white/20 via-transparent to-transparent'
      }`} />
    </div>
  )
}