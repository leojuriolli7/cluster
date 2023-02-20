import { useRouter } from 'next/router'
import React, { useContext, createContext, useEffect, useState } from 'react'

type History = {
  history: string[]
  canGoBack: () => boolean
}

type ManagerProps = {
  value: History
  children: React.ReactNode
}

export function useHistoryManager() {
  const router = useRouter()
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (!shallow) {
        setHistory((prevState) => [...prevState, url])
      }
    }

    router.beforePopState(() => {
      setHistory((prevState) => prevState.slice(0, -2))
      return true
    })

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return { history, canGoBack: () => history.length > 1 }
}

const historyManagerContext =
  createContext<ReturnType<typeof useHistoryManager>>(null)

export const HistoryManagerProvider = ({ value, children }: ManagerProps) => (
  <historyManagerContext.Provider value={value}>
    {children}
  </historyManagerContext.Provider>
)

export const useHistory = () => useContext(historyManagerContext)
