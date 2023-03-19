import { useCallback } from 'react'

import { Signin } from './Signin'

export const Demo: React.FC = () => {

  const onSubmit = useCallback((email: string, password: string): void => {
    console.log('Name:', email, 'Password:',password)
  },[])

  return <Signin onSubmit={onSubmit} />
}