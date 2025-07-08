'use client'

import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'

export function Resume() {
  const resumePdfUrl = '/GK_back_draft.pdf';

  return (
    <div className="p-3 sm:p-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Resume</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors duration-200"
          >
            <Eye className="w-4 h-4 text-blue-300" />
            <span className="text-blue-300 text-sm">Preview</span>
          </motion.a>
          <motion.a
            href={resumePdfUrl}
            download="Girish_Kanjiyani_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors duration-200"
          >
            <Download className="w-4 h-4 text-green-300" />
            <span className="text-green-300 text-sm">Download</span>
          </motion.a>
        </div>
      </div>
      
      <div className="flex-1 bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        <iframe
          src={resumePdfUrl}
          className="w-full h-full"
          title="Girish Kanjiyani Resume"
        />
      </div>
    </div>
  )
}