'use client'

import { Rnd } from 'react-rnd'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowStore } from '@/lib/store'
import { X, Minus, Plus } from 'lucide-react'

interface WindowWrapperProps {
  windowId: string
  children: React.ReactNode
}

export function WindowWrapper({ windowId, children }: WindowWrapperProps) {
  const { 
    windows, 
    closeWindow, 
    minimizeWindow, 
    focusWindow,
    updateWindowPosition,
    updateWindowSize 
  } = useWindowStore()

  const windowState = windows.find(w => w.id === windowId)
  
  if (!windowState || !windowState.isOpen) return null

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ zIndex: windowState.zIndex }}
        className={`absolute ${isMobile ? 'inset-0' : ''}`}
      >
        <Rnd
          size={{ 
            width: isMobile ? '100%' : windowState.size.width, 
            height: isMobile ? '100%' : windowState.size.height 
          }}
          position={{ 
            x: isMobile ? 0 : windowState.position.x, 
            y: isMobile ? 0 : windowState.position.y 
          }}
          onDragStop={(e, d) => {
            if (!isMobile) {
              updateWindowPosition(windowId, { x: d.x, y: d.y })
            }
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            if (!isMobile) {
              updateWindowSize(windowId, {
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height)
              })
              updateWindowPosition(windowId, position)
            }
          }}
          minWidth={isMobile ? '100%' : 400}
          minHeight={isMobile ? '100%' : 300}
          bounds="window"
          dragHandleClassName="window-header"
          className={`${windowState.isMinimized ? 'hidden' : ''}`}
          onMouseDown={() => focusWindow(windowId)}
          disableDragging={isMobile}
          enableResizing={!isMobile}
        >
          <div className={`w-full h-full bg-black/40 backdrop-blur-xl ${isMobile ? 'rounded-none' : 'rounded-xl'} border border-white/20 overflow-hidden shadow-2xl flex flex-col`}>
            {/* Window Header */}
            <div className={`window-header flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-white/10 to-white/5 border-b border-white/10 ${isMobile ? 'cursor-default' : 'cursor-move'}`}>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <button
                    onClick={() => closeWindow(windowId)}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors duration-200 flex items-center justify-center group"
                  >
                    <X className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button
                    onClick={() => minimizeWindow(windowId)}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center group"
                  >
                    <Minus className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors duration-200 flex items-center justify-center group">
                    <Plus className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
                <span className="text-white/90 font-medium text-xs sm:text-sm">{windowState.title}</span>
              </div>
            </div>
            
            {/* Window Content */}
            <div className="flex-1 overflow-hidden">
              {children}
            </div>
          </div>
        </Rnd>
      </motion.div>
    </AnimatePresence>
  )
}