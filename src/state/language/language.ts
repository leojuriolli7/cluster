import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  language: string
  toggleLanguage: (value: 'en' | 'pt') => void
}

const languageStore = create(
  persist<State>(
    (set) => ({
      language: 'en',
      toggleLanguage: (value) => set(() => ({ language: value }))
    }),
    {
      name: 'user-language'
    }
  )
)

export default languageStore
