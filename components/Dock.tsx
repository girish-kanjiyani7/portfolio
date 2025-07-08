'use client'

import { motion } from 'framer-motion'
import { useWindowStore } from '@/lib/store'

interface DockItem {
  id: string
  iconName: string
  label: string
  action: () => void
}

export function Dock() {
  const { openWindow, windows, toggleTheme, isDarkMode } = useWindowStore()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const dockItems: DockItem[] = [
    {
      id: 'projects',
      iconName: 'finder',
      label: 'Projects',
      action: () => openWindow('projects')
    },
    {
      id: 'about',
      iconName: 'launchpad',
      label: 'About',
      action: () => openWindow('about')
    },
    {
      id: 'experience',
      iconName: 'notes',
      label: 'Experience',
      action: () => openWindow('experience')
    },
    {
      id: 'resume',
      iconName: 'preview',
      label: 'Resume',
      action: () => openWindow('resume')
    },
    {
      id: 'contact',
      iconName: 'messages',
      label: 'Contact',
      action: () => openWindow('contact')
    },
    {
      id: 'settings',
      iconName: 'settings',
      label: 'Settings',
      action: () => toggleTheme()
    }
  ]

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pointer-events-auto"
      >
        <div className="flex items-end justify-center space-x-1 sm:space-x-2 px-2 py-2 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10">
          {dockItems.map((item) => {
            const window = windows.find(w => w.id === item.id);
            const isOpen = window?.isOpen || false;
            const iconPath = `${basePath}/icons/${item.iconName}_${isDarkMode ? 'dark' : 'light'}.png`;
            
            return (
              <motion.button
                key={item.id}
                onClick={item.action}
                className="relative flex flex-col items-center group w-12 h-12 sm:w-14 sm:h-14 justify-center"
                whileHover={{ scale: 1.2, y: -8 }}
                whileTap={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img 
                  src={iconPath} 
                  alt={item.label} 
                  className="w-full h-full"
                  onError={(e) => {
                    // Fallback to default icon if theme-specific one is not found
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // prevent infinite loop
                    target.src = `${basePath}/icons/${item.iconName}.png`;
                  }}
                />
                
                {isOpen && (
                  <motion.div
                    layoutId={`dot-${item.id}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full"
                  />
                )}
                
                <div
                  className="absolute -top-10 px-2 py-1 bg-black/80 text-white text-xs rounded-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {item.label}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}