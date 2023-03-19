import { useCallback } from 'react'

import { IInputValues, Signup } from './Signup'

export const Demo: React.FC = () => {

  const onSubmit = useCallback((data: IInputValues) => {
    console.log('Data form:', data)
  },[])

  return <Signup onSubmit={onSubmit} />
}