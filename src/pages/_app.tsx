import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import themeStore from '@state/theme/theme'
import languageStore from '@state/language/language'
import authStore from '@state/auth/auth'
import i18next from 'i18next'
import client from 'src/api/apollo-client'
import { GlobalStyle } from '@styles/global'
import { ApolloProvider } from '@apollo/client'
import { LanguageSelector } from '@components/LanguageSelector'
import { ToastContainer } from 'react-toastify'
import {
  HistoryManagerProvider,
  useHistoryManager
} from 'src/providers/HistoryManagerProvider'
import { I18nextProvider } from 'react-i18next'

import 'react-toastify/dist/ReactToastify.css'
import i18n from 'src/i18n'
import 'src/index.css'
import ThemeProvide from '@providers/ThemeProvider'

const Application = ({ Component, pageProps, router }: AppProps) => {
  const { theme, toggleTheme } = themeStore((state) => state)
  const { language: storeLanguage } = languageStore()
  const { token } = authStore()

  const historyManager = useHistoryManager()

  useEffect(() => {
    i18next.changeLanguage(storeLanguage)
  }, [storeLanguage])

  useEffect(() => {
    if (localStorage.getItem('cluster-token') !== token) {
      localStorage.setItem('cluster-token', token)
    }
  }, [token])

  const isDarkTheme = theme === 'dark'

  return (
    <HistoryManagerProvider value={historyManager}>
      <I18nextProvider i18n={i18n}>
        <ApolloProvider client={client}>
          <ThemeProvide>
            <GlobalStyle />
            <Component {...pageProps} />

            <LanguageSelector />
          </ThemeProvide>
          <ToastContainer
            draggable
            position="top-center"
            theme={isDarkTheme ? 'dark' : 'light'}
          />
        </ApolloProvider>
      </I18nextProvider>
    </HistoryManagerProvider>
  )
}

export default Application
