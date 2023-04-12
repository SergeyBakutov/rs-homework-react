import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useCategoryData } from '../../hooks/useCategoryData'
import { IEpisode } from '../../types/episodes'

import cls from './EpisodeList.module.css'

export const EpisodeList: React.FC = () => {
  const [page, setPage] = useState(1)
  const observer = useRef<IntersectionObserver>()

  const {
    data: episodes,
    loading,
    error,
    hasMore,
  } = useCategoryData<IEpisode>('https://rickandmortyapi.com/api/episode', page)

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

  return (
    <>
      <h2>Episode list</h2>
      <ol className={cls.episodeList} type="1">
        {episodes.map((episode, index) => {
          const { id, name } = episode
          return (
            <li
              ref={index + 1 === episodes.length ? lastCharacterRef : null}
              key={name}
            >
              <Link to={`./${id}`} state={episode}>
                {name}
              </Link>
            </li>
          )
        })}
      </ol>
      {loading && <div className={cls.loading}>Loading episodes...</div>}
      {error && <div className={cls.error}>Something went wrong!</div>}
    </>
  )
}
