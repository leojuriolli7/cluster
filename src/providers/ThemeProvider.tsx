import React, { useEffect, useState, useLayoutEffect } from 'react'
import { dark, light } from '@styles/theme'
import { GlobalStyle } from '@styles/global'
import themeStore from '@state/theme/theme'
import { ThemeProvider as StyledProvider } from 'styled-components'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const ThemeProvide: React.FC<Props> = ({ children }: Props) => {
  const { theme } = themeStore((state) => state)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <StyledProvider theme={theme === 'dark' ? dark : light}>
      {mounted && <GlobalStyle />}
      {children}
    </StyledProvider>
  )

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}
export default ThemeProvide
