import { useCallback, useEffect, useState } from 'react'

interface IParams {
  [key: string]: string | number
}

interface IRefetchProps {
  params?: IParams
}

interface IReturn<T> {
  data: T | undefined,
  isLoading: boolean,
  error: any,
  refetch: (refetchProps: IRefetchProps) => Promise<void>
}

export function useFetch<Data = any>(url: string): IReturn<Data>  {
  const [data, setData] = useState<Data>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<any>()

  const fetchData = useCallback(async (fetchUrl: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(fetchUrl)
      const receivedData = await response.json()
      setData(receivedData)
    } catch(err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  },[])

  useEffect(() => {
    fetchData(url)
  },[fetchData, url])

  const refetch = useCallback(async (refetchProps: IRefetchProps) => {
    const { params } = refetchProps
    let generatedUrl: string = url
    
    if (params) {
      const searchParams = Object.entries(params).reduce((acc, [key, value]): string => {
        return acc + `${key}=${value}`
      }, '')
      generatedUrl += `?${searchParams}`
    }

    await fetchData(generatedUrl)
  }, [fetchData, url])

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}