import { create } from 'zustand'

export interface WindowState {
  id: string
  title: string
  isOpen: boolean
  isMinimized: boolean
  zIndex: number
  position: { x: number; y: number }
  size: { width: number; height: number }
}

interface WindowStore {
  windows: WindowState[]
  maxZIndex: number
  isDarkMode: boolean
  openWindow: (id: string) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  focusWindow: (id: string) => void
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void
  updateWindowSize: (id: string, size: { width: number; height: number }) => void
  toggleTheme: () => void
  initializeWindows: () => void
  closeAllWindows: () => void
  closeActiveWindow: () => void
}

const defaultWindows: Omit<WindowState, 'zIndex'>[] = [
  {
    id: 'projects',
    title: 'Projects',
    isOpen: false,
    isMinimized: false,
    position: { x: 50, y: 80 },
    size: { width: 900, height: 650 }
  },
  {
    id: 'experience',
    title: 'Experience',
    isOpen: false,
    isMinimized: false,
    position: { x: 100, y: 120 },
    size: { width: 800, height: 600 }
  },
  {
    id: 'resume',
    title: 'Resume',
    isOpen: false,
    isMinimized: false,
    position: { x: 150, y: 160 },
    size: { width: 700, height: 750 }
  },
  {
    id: 'contact',
    title: 'Contact',
    isOpen: false,
    isMinimized: false,
    position: { x: 200, y: 200 },
    size: { width: 600, height: 650 }
  },
  {
    id: 'about',
    title: 'About This Portfolio',
    isOpen: false,
    isMinimized: false,
    position: { x: 250, y: 100 },
    size: { width: 550, height: 450 }
  }
]

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  maxZIndex: 10,
  isDarkMode: true,
  
  initializeWindows: () => {
    const windows = defaultWindows.map((window, index) => ({
      ...window,
      zIndex: 10 + index
    }))
    set({ windows, maxZIndex: 10 + defaultWindows.length })
  },

  openWindow: (id: string) => {
    const { windows, maxZIndex } = get()
    const newZIndex = maxZIndex + 1
    
    set({
      windows: windows.map(window => 
        window.id === id 
          ? { ...window, isOpen: true, isMinimized: false, zIndex: newZIndex }
          : window
      ),
      maxZIndex: newZIndex
    })
  },

  closeWindow: (id: string) => {
    set(state => ({
      windows: state.windows.map(window => 
        window.id === id ? { ...window, isOpen: false } : window
      )
    }))
  },

  minimizeWindow: (id: string) => {
    set(state => ({
      windows: state.windows.map(window => 
        window.id === id ? { ...window, isMinimized: !window.isMinimized } : window
      )
    }))
  },

  focusWindow: (id: string) => {
    const { windows, maxZIndex } = get()
    const targetWindow = windows.find(w => w.id === id)
    
    if (targetWindow && targetWindow.zIndex !== maxZIndex) {
      const newZIndex = maxZIndex + 1
      set({
        windows: windows.map(window => 
          window.id === id ? { ...window, zIndex: newZIndex } : window
        ),
        maxZIndex: newZIndex
      })
    }
  },

  updateWindowPosition: (id: string, position: { x: number; y: number }) => {
    set(state => ({
      windows: state.windows.map(window => 
        window.id === id ? { ...window, position } : window
      )
    }))
  },

  updateWindowSize: (id: string, size: { width: number; height: number }) => {
    set(state => ({
      windows: state.windows.map(window => 
        window.id === id ? { ...window, size } : window
      )
    }))
  },

  toggleTheme: () => {
    set(state => ({ isDarkMode: !state.isDarkMode }))
  },

  closeAllWindows: () => {
    set(state => ({
      windows: state.windows.map(window => ({ ...window, isOpen: false }))
    }))
  },

  closeActiveWindow: () => {
    const { windows, closeWindow } = get()
    const openWindows = windows.filter(w => w.isOpen && !w.isMinimized)
    if (openWindows.length === 0) return
  
    const activeWindow = openWindows.reduce((prev, current) => 
      (prev.zIndex > current.zIndex) ? prev : current
    )
    
    closeWindow(activeWindow.id)
  },
}))