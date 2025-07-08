'use client'

import { useWindowStore } from '@/lib/store'
import { Sun, Moon, Download, Printer, User, XCircle, XSquare, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MenuBar() {
  const { 
    openWindow, 
    isDarkMode, 
    toggleTheme,
    closeAllWindows,
    closeActiveWindow
  } = useWindowStore()

  const menuItems = [
    { label: 'About', action: () => {} },
    { label: 'Projects', action: () => openWindow('projects') },
    { label: 'Experience', action: () => openWindow('experience') },
    { label: 'Resume', action: () => openWindow('resume') },
    { label: 'Contact', action: () => openWindow('contact') }
  ]

  const handleOpenResume = () => window.open('/GK_back_draft.pdf', '_blank')
  const handlePrint = () => window.print()

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 py-2 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto">
        <button className="text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10 px-1 sm:px-2 py-1 rounded whitespace-nowrap">
          🍎 Girish
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10 px-1 sm:px-2 py-1 rounded whitespace-nowrap outline-none">
              File
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/50 backdrop-blur-xl border-white/20 text-white">
            <DropdownMenuLabel>Resume Actions</DropdownMenuLabel>
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
            <DropdownMenuLabel>Contact</DropdownMenuLabel>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <a href="/Girish_Kanjiyani.vcf" download="Girish_Kanjiyani.vcf" className="flex items-center w-full">
                <User className="mr-2 h-4 w-4" />
                <span>Download Contact (vCard)</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuLabel>Window Management</DropdownMenuLabel>
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