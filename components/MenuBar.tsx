'use client'

import { useState, useEffect } from 'react'
import { useWindowStore } from '@/lib/store'
import { Sun, Moon, Download, Printer, User, XCircle, XSquare, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MenuBar() {
  const { 
    isDarkMode, 
    toggleTheme,
    closeAllWindows,
    closeActiveWindow
  } = useWindowStore()
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString([], {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      }))
    }
    updateClock()
    const timerId = setInterval(updateClock, 1000 * 60) // Update every minute
    return () => clearInterval(timerId)
  }, [])

  const handleOpenResume = () => window.open('/GK_back_draft.pdf', '_blank')
  const handlePrint = () => window.print()

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-4 py-1 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 overflow-x-auto">
        <button className="text-white/90 hover:text-white text-lg font-bold transition-colors duration-200 px-2 py-1 rounded whitespace-nowrap">
          
        </button>
        <span className="text-white text-sm font-bold px-2 py-1 rounded whitespace-nowrap cursor-default">Girish</span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 hover:bg-white/10 px-2 py-1 rounded whitespace-nowrap outline-none">
              File
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/50 backdrop-blur-xl border-white/20 text-white">
            <DropdownMenuItem onSelect={handleOpenResume}>
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>Open Resume in New Tab</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <a href="/GK_back_draft.pdf" download="Girish_Kanjiyani_Resume.pdf" className="flex items-center w-full">
                <Download className="mr-2 h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              <span>Print</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <a href="/Girish_Kanjiyani.vcf" download="Girish_Kanjiyani.vcf" className="flex items-center w-full">
                <User className="mr-2 h-4 w-4" />
                <span>Download Contact (vCard)</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuItem onSelect={closeActiveWindow}>
              <XCircle className="mr-2 h-4 w-4" />
              <span>Close Active Window</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={closeAllWindows}>
              <XSquare className="mr-2 h-4 w-4" />
              <span>Close All Windows</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Placeholder menu items for authentic look */}
        <span className="text-white/70 text-sm font-medium px-2 py-1 rounded whitespace-nowrap cursor-default hidden sm:inline">Edit</span>
        <span className="text-white/70 text-sm font-medium px-2 py-1 rounded whitespace-nowrap cursor-default hidden sm:inline">View</span>
        <span className="text-white/70 text-sm font-medium px-2 py-1 rounded whitespace-nowrap cursor-default hidden md:inline">Window</span>
        <span className="text-white/70 text-sm font-medium px-2 py-1 rounded whitespace-nowrap cursor-default hidden md:inline">Help</span>
      </div>
      
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 text-white/90" />
          ) : (
            <Moon className="w-4 h-4 text-white/90" />
          )}
        </button>
        <span className="text-white/90 text-xs sm:text-sm hidden sm:block whitespace-nowrap">{time}</span>
      </div>
    </motion.div>
  )
}