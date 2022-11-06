import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  theme: 'light' | 'dark'
  toggleTheme: (value: 'light' | 'dark') => void
}

const isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches

const themeStore = create(
  persist<State>(
    (set) => ({
      theme: isDarkMode ? 'dark' : 'light',
      toggleTheme: (value) => set(() => ({ theme: value }))
    }),
    {
      name: 'user-theme'
    }
  )
)

export default themeStore
