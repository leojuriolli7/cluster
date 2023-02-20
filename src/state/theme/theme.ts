import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  theme: 'light' | 'dark'
  toggleTheme: (value: 'light' | 'dark') => void
}

const themeStore = create(
  persist<State>(
    (set) => ({
      theme: 'dark',
      toggleTheme: (value) => set(() => ({ theme: value }))
    }),
    {
      name: 'user-theme'
    }
  )
)

export default themeStore
