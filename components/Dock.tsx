'use client'

import { motion } from 'framer-motion'
import { useWindowStore } from '@/lib/store'
import { 
  Folder,
  FileText,
  Mail,
  Briefcase,
  MessageCircle,
  Monitor,
  Menu
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
      icon: <Folder />,
      label: 'Projects',
      action: () => openWindow('projects')
    },
    {
      id: 'experience',
      icon: <Briefcase />,
      label: 'Experience',
      action: () => openWindow('experience')
    },
    {
      id: 'resume',
      icon: <FileText />,
      label: 'Resume',
      action: () => openWindow('resume')
    },
    {
      id: 'contact',
      icon: <Mail />,
      label: 'Contact',
      action: () => openWindow('contact')
    },
    {
      id: 'messages',
      icon: <MessageCircle />,
      label: 'Messages',
      action: () => {}
    },
    {
      id: 'settings',
      icon: <Monitor />,
      label: 'System Preferences',
      action: () => {}
    }
  ]

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto"
    >
      <div className="flex items-end justify-center space-x-1 sm:space-x-2 px-2 py-2 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10">
        {dockItems.map((item) => {
          const window = windows.find(w => w.id === item.id);
          const isOpen = window?.isOpen || false;
          
          return (
            <motion.button
              key={item.id}
              onClick={item.action}
              className="relative flex flex-col items-center group w-12 h-12 sm:w-14 sm:h-14 justify-center"
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="text-white/90 w-7 h-7 sm:w-8 sm:h-8 transition-colors group-hover:text-white">
                {item.icon}
              </div>
              
              {isOpen && (
                <motion.div
                  layoutId={`dot-${item.id}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full"
                />
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-10 px-2 py-1 bg-black/80 text-white text-xs rounded-md backdrop-blur-sm"
              >
                {item.label}
              </motion.div>
            </motion.button>
          )
        })}

        <div className="h-10 sm:h-12 w-px bg-white/20 mx-1"></div>

        <motion.button
          className="relative flex flex-col items-center group w-12 h-12 sm:w-14 sm:h-14 justify-center"
          whileHover={{ scale: 1.2, y: -8 }}
          whileTap={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
            <Menu className="text-white/90 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-10 px-2 py-1 bg-black/80 text-white text-xs rounded-md backdrop-blur-sm"
          >
            Apps
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  )
}