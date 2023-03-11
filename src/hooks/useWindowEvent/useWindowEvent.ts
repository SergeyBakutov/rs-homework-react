import { useEffect } from 'react'

type EventType = keyof WindowEventMap

export function useWindowEvent(
  type: EventType, 
  listener: (this: Window, event: WindowEventMap[EventType]) => any, 
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options])
}