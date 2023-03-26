import { Link } from 'react-router-dom'

import locations from './assets/locations.json'

import cls from './LocationList.module.css'

export const LocationList: React.FC = () => {
  return (
    <>
      <h1>Location list</h1>
      <ol className={cls.locationList} type="1">
        {locations.map((location) => {
          const {id, name, created} = location
          return (
            <li key={created}>
              <Link to={`/locations/${id}`} state={location}>{name}</Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}