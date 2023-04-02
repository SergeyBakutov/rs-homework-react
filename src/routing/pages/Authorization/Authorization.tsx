import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../context/AuthProvider"
import { useLocationState } from "../../hooks/useLocationState"

import cls from './Authorization.module.css'

export const Authorization: React.FC = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const { from = '/' } = useLocationState<{ from?: string }>()
  const { signIn } = useAuth()

  const onChangeUsernameHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signIn(username, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <>
      <h1>Authorization</h1>
      <form className={cls.form} onSubmit={handleSubmit}>
        <label className={cls.label} htmlFor="username">
          Username: <input className={cls.input} id="username" type="text" name="username" onChange={onChangeUsernameHandler} />
        </label>
        <button className={cls.button} type="submit">Sign in</button>
      </form>
    </>
  )
}