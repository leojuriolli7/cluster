/* eslint-disable consistent-return */
import { useEffect, useMemo, useState } from 'react'

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const isSSR = typeof window === 'undefined'

  const observer = useMemo(() => {
    if (isSSR) return

    return new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref.current])

  return isIntersecting
}
