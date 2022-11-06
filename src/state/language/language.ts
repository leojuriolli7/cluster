import create from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  language: string
  toggleLanguage: (value: 'en' | 'pt') => void
}

const ALLOWED_LANGUAGES = ['en', 'pt']
const browserLanguage = navigator.language.substring(0, 2)

const isBrowserLanguageSupported = ALLOWED_LANGUAGES.includes(browserLanguage)

const languageStore = create(
  persist<State>(
    (set) => ({
      language: isBrowserLanguageSupported
        ? browserLanguage
        : 'en',
      toggleLanguage: (value) => set(() => ({ language: value }))
    }),
    {
      name: 'user-language'
    }
  )
)

export default languageStore
