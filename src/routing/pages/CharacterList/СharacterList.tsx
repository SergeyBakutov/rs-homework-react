import { useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { ICharacter } from '../../types/character'

import characters from './assets/characters.json'

import cls from './CharacterList.module.css'

type TCreated = 'ASC' | 'DESC'

export const CharacterList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const created = searchParams.get('created') as TCreated || 'ASC'

  const sortByCreated = (current: ICharacter, next: ICharacter) => {
    const currentDateCreated = new Date(current.created).getTime()
    const nextDateCreated = new Date(next.created).getTime()

    if (created === 'DESC') {
      return nextDateCreated - currentDateCreated
    } else {
      return currentDateCreated - nextDateCreated
    }
  }

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ created: e.target.value })
  }, [setSearchParams])

  return (
    <>
      <h2>Character list (
        <span>&uarr;</span>
        <input type="radio" name="created" value="ASC" checked={created === "ASC"} onChange={onChangeHandler} />&nbsp;
        <span>&darr;</span>
        <input type="radio" name="created" value="DESC" checked={created === "DESC"} onChange={onChangeHandler} />)
      </h2>
      <ol className={cls.charactersList} type="1">
        {characters.sort(sortByCreated).map((character) => {
          const { id, name, created } = character
          return (
            <li key={created}>
              <Link to={`./${id}`} state={character}>{name}</Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}