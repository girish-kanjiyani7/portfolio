'use client'

import { useWindowStore } from '@/lib/store'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export function MenuBar() {
  const { openWindow, isDarkMode, toggleTheme } = useWindowStore()

  const menuItems = [
    { label: '🍎 Girish', action: () => {} },
    { label: 'File', action: () => {} },
    { label: 'About', action: () => {} },
    { label: 'Projects', action: () => openWindow('projects') },
    { label: 'Experience', action: () => openWindow('experience') },
    { label: 'Resume', action: () => openWindow('resume') },
    { label: 'Contact', action: () => openWindow('contact') }
  ]

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 py-2 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10 px-1 sm:px-2 py-1 rounded whitespace-nowrap"
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
      >
        {isDarkMode ? (
          <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-white/90" />
        ) : (
          <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-white/90" />
        )}
      </button>
    </motion.div>
  )
}