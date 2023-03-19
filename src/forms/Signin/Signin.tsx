import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

import './Signin.css'

interface ISigninProps {
  onSubmit: (email: string, password: string) => void
}

interface IInputValues {
  email: string
  password: string
}

export const Signin: React.FC<ISigninProps> = ({ onSubmit }) => {
  const [inputValues, setInputValues] = useState<IInputValues>({
    email: '',
    password: ''
  })

  const onChangeFieldHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setInputValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  },[])

  const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit(inputValues.email, inputValues.password)
  },[inputValues.email, inputValues.password, onSubmit])

  return (
    <form
      className="Signin__form"
      onSubmit={onSubmitHandler}
    > 
      <input 
        className="Signin__input"
        type="email"
        name="email"
        value={inputValues.email}
        onChange={onChangeFieldHandler}
      />
      <input
        className="Signin__input"
        type="password" 
        name="password"
        value={inputValues.password}
        onChange={onChangeFieldHandler}
      />
      <button
        className="Signin__button"
        type="submit"
      >
        Войти
      </button>
    </form>
  )
}