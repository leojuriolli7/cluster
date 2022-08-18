import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  language: string
  toggleLanguage: (value: 'en' | 'pt') => void
}

const isBrowserLanguageSupported =
  navigator.language.substring(0, 2) === 'pt' || 'en'

const languageStore = create(
  persist<State>(
    (set) => ({
      language: isBrowserLanguageSupported
        ? navigator.language.substring(0, 2)
        : 'en',
      toggleLanguage: (value) => set(() => ({ language: value }))
    }),
    {
      name: 'user-language'
    }
  )
)

export default languageStore
