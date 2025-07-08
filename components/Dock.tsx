'use client'

import { motion } from 'framer-motion'
import { useWindowStore } from '@/lib/store'
import { 
  Folder,
  FileText,
  Mail,
  User,
  Settings,
  Briefcase,
  MessageCircle,
  Grid3X3,
  Monitor,
  Archive
} from 'lucide-react'

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
  action: () => void
}

export function Dock() {
  const { openWindow, windows } = useWindowStore()

  const dockItems: DockItem[] = [
    {
      id: 'projects',
      icon: <Folder className="w-6 h-6" />,
      label: 'Projects',
      action: () => openWindow('projects')
    },
    {
      id: 'experience',
      icon: <Briefcase className="w-6 h-6" />,
      label: 'Experience',
      action: () => openWindow('experience')
    },
    {
      id: 'resume',
      icon: <FileText className="w-6 h-6" />,
      label: 'Resume',
      action: () => openWindow('resume')
    },
    {
      id: 'contact',
      icon: <Mail className="w-6 h-6" />,
      label: 'Contact',
      action: () => openWindow('contact')
    },
    {
      id: 'messages',
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'Messages',
      action: () => {}
    },
    {
      id: 'settings',
      icon: <Monitor className="w-6 h-6" />,
      label: 'System Preferences',
      action: () => {}
    }
  ]

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-none sm:w-auto px-2 sm:px-0"
    >
      <div className="flex items-end justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-3 bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 overflow-x-auto">
        {dockItems.map((item, index) => {
          const isOpen = windows.find(w => w.id === item.id)?.isOpen
          
          return (
            <motion.button
              key={item.id}
              onClick={item.action}
              className="relative flex flex-col items-center group flex-shrink-0"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className={`
                p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200
                ${isOpen 
                  ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
                }
              `}>
                <div className="w-4 h-4 sm:w-6 sm:h-6">
                  {item.icon}
                </div>
              </div>
              
              {/* Active indicator */}
              {isOpen && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -bottom-0.5 sm:-bottom-1 w-1 h-1 bg-white rounded-full"
                />
              )}
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-8 sm:-top-12 px-2 py-1 bg-black/80 text-white text-xs rounded backdrop-blur-sm hidden sm:block"
              >
                {item.label}
              </motion.div>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}