import { useCallback, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { useCategoryData } from '../../hooks/useCategoryData'
import { ICharacter } from '../../types/characters'

import cls from './CharacterList.module.css'

type TCreated = 'ASC' | 'DESC'

export const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const observer = useRef<IntersectionObserver>()
  const created = (searchParams.get('created') as TCreated) || 'ASC'

  const {
    data: characters,
    loading,
    error,
    hasMore,
  } = useCategoryData<ICharacter>(
    'https://rickandmortyapi.com/api/character',
    page
  )

  const lastCharacterRef = useCallback(
    (node: HTMLLIElement) => {
      if (loading) return

      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1)
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [hasMore, loading]
  )

  const sortByCreated = (current: ICharacter, next: ICharacter) => {
    const currentDateCreated = new Date(current.created).getTime()
    const nextDateCreated = new Date(next.created).getTime()

    if (created === 'DESC') {
      return nextDateCreated - currentDateCreated
    } else {
      return currentDateCreated - nextDateCreated
    }
  }

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchParams({ created: e.target.value })
    },
    [setSearchParams]
  )

  return (
    <>
      <h2>
        Character list (<span>&uarr;</span>
        <input
          type="radio"
          name="created"
          value="ASC"
          checked={created === 'ASC'}
          onChange={onChangeHandler}
        />
        &nbsp;
        <span>&darr;</span>
        <input
          type="radio"
          name="created"
          value="DESC"
          checked={created === 'DESC'}
          onChange={onChangeHandler}
        />
        )
      </h2>
      <ol className={cls.charactersList} type="1">
        {characters.sort(sortByCreated).map((character, index) => {
          const { id, name } = character
          return (
            <li
              ref={index + 1 === characters.length ? lastCharacterRef : null}
              key={name}
            >
              <Link to={`./${id}`} state={character}>
                {name}
              </Link>
            </li>
          )
        })}
      </ol>
      {loading && <div className={cls.loading}>Loading characters...</div>}
      {error && <div className={cls.error}>Something went wrong!</div>}
    </>
  )
}
