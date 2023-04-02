import { Link } from 'react-router-dom'

import locations from './assets/locations.json'

import cls from './LocationList.module.css'

export const LocationList: React.FC = () => {
  return (
    <>
      <h2>Location list</h2>
      <ol className={cls.locationList} type="1">
        {locations.map((location) => {
          const { id, name, created } = location
          return (
            <li key={created}>
              <Link to={`./${id}`} state={location}>{name}</Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}