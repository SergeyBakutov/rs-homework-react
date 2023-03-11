import { useState, useEffect, useRef } from 'react'

interface IReturn<T> {
  hovered: boolean
  ref: React.RefObject<T>
}

export function useHover<Element extends HTMLElement = HTMLDivElement>(): IReturn<Element> {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<Element>(null)

  useEffect(() => {
    const elem = ref.current

    const changeHovered = () => {
      setHovered(prev => !prev)
    }

    if (elem) {
      elem.addEventListener('mouseenter', changeHovered)
      elem.addEventListener('mouseleave', changeHovered)
    }

    return () => {
      if (elem) {
        elem.removeEventListener('mouseenter', changeHovered)
        elem.addEventListener('mouseleave', changeHovered)
      }
    }
  },[])

  return {
    hovered,
    ref,
  }
}