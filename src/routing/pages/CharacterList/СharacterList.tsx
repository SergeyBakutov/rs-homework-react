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
  },[setSearchParams])

  return (
    <>
      <h1>Character list</h1>
      <p className={cls.sortedWrapper}>
        Sort by created:
        <span>&uarr;</span>
        <input type="radio" name="created" value="ASC" checked={created === "ASC"} onChange={onChangeHandler} />
        <span>&darr;</span>
        <input type="radio" name="created" value="DESC" checked={created === "DESC"} onChange={onChangeHandler} />
      </p>
      <ol className={cls.charactersList} type="1">
        {characters.sort(sortByCreated).map((character) => {
          const {id, name, created} = character
          return (
            <li key={created}>
              <Link to={`/characters/${id}`} state={character}>{name}</Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}