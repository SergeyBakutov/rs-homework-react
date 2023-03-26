import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const NotFound: React.FC = () => {
  const [timer, setTimer] = useState(5)
  const navigate = useNavigate()
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)
    if (timer === 0) {
      navigate('/')
    }
    return (): void => clearInterval(interval)
  },[navigate, timer])

  return (
    <>
      <h1>Page not found</h1>
      <p>Return to Home in {timer} sec</p>
    </>
  )
}