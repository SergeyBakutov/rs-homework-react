import { useCallback, useState } from 'react'

interface IMethods {
  setItem: (value: string) => void,
  removeItem: () => void,
}

type TReturn = [string, IMethods]

export function useLocalStorage(key: string): TReturn {
  const [value, setValue] = useState('')

  const setItem = useCallback((value: string) => {
    localStorage.setItem(key, value)
    setValue(value)
  },[key])
  
  const removeItem = useCallback(() => {
    localStorage.removeItem(key)
    setValue('')
  },[key])

  return [
    value,
    {
      setItem,
      removeItem,
    },
  ]
}