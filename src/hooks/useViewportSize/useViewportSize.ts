import { useCallback, useEffect, useState } from 'react'

import { useWindowEvent } from '../useWindowEvent/useWindowEvent'

interface IReturn {
  height: number
  width: number
}

export function useViewportSize(): IReturn {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const setViewportSize = useCallback(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  },[])

  useEffect(() => {
    setViewportSize()
  },[setViewportSize])

  useWindowEvent('resize', () => {
    setViewportSize()
  })
  
  return {
    height,
    width,
  } 
}