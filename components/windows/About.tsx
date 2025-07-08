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
          About Me
        </h2>
        
        <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
          <p>
            I'm either writing code or chugging coffee, with bugs somehow finding me before I can fix them. As a software developer passionate about problem-solving, I've worked on projects ranging from machine learning models to improving user interfaces.
          </p>
          <p>
            When I’m not coding in Python, C++, or JavaScript, I enjoy working on projects aimed at streamlining processes, like reducing order processing times or predicting real estate prices. I’m always eager to collaborate and build solutions that make a meaningful impact.
          </p>
        </div>
      </motion.div>
    </div>
  )
}