import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useCategoryData } from '../../hooks/useCategoryData'
import { ILocation } from '../../types/locations'

import cls from './LocationList.module.css'

export const LocationList: React.FC = () => {
  const [page, setPage] = useState(1)
  const observer = useRef<IntersectionObserver>()

  const {
    data: locations,
    loading,
    error,
    hasMore,
  } = useCategoryData<ILocation>(
    'https://rickandmortyapi.com/api/location',
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

  return (
    <>
      <h2>Location list</h2>
      <ol className={cls.locationList} type="1">
        {locations.map((location, index) => {
          const { id, name } = location
          return (
            <li
              ref={index + 1 === locations.length ? lastCharacterRef : null}
              key={name}
            >
              <Link to={`./${id}`} state={location}>
                {name}
              </Link>
            </li>
          )
        })}
      </ol>
      {loading && <div className={cls.loading}>Loading locations...</div>}
      {error && <div className={cls.error}>Something went wrong!</div>}
    </>
  )
}
