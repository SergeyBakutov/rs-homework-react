import { useNavigate } from "react-router-dom"

import { useAuth } from "../../context/AuthProvider"

import cls from './AuthButton.module.css'

export const AuthButton: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(() => {
      navigate('/')
    })
  }

  if (!user) {
    return (
      <button className={cls.button} onClick={(): void => navigate('/login')}>
        Sign in
      </button>
    )
  }

  return (
    <button className={cls.button} onClick={handleSignOut}>
      Sign out
    </button>
  )
}