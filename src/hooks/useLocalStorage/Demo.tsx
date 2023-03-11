import { useLocalStorage } from './useLocalStorage'

export function Demo() {
  const [token, { setItem, removeItem }] = useLocalStorage('token')

  return (
    <div>
      <div>
        Твой токен: { token }
      </div>
      <div>
        <button onClick={() => setItem('123')}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  )
}