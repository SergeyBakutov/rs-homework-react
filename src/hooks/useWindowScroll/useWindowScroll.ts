import { useCallback, useState } from 'react'

import { useWindowEvent } from '../useWindowEvent/useWindowEvent'

interface Scroll {
  x: number
  y: number
}

type TReturn = [Scroll, (options: Partial<Scroll>) => void]

export function useWindowScroll(): TReturn {
  const [scroll, setScroll] = useState<Scroll>({
    x: 0,
    y: 0,
  })

  useWindowEvent('scroll', () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    })
  })

  const scrollTo = useCallback((options: Partial<Scroll>) => {
    window.scrollTo({ left: options.x, top: options.y })
  },[])

  return [ scroll, scrollTo]
}