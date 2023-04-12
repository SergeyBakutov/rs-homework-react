import { useLocationState } from '../../hooks/useLocationState'

import { ILocation } from '../../types/locations'

import cls from './Location.module.css'

export const Location: React.FC = () => {
  const { name, type, dimension } = useLocationState<ILocation>()

  return (
    <>
      <h2>Location: {name}</h2>
      <div className={cls.wrapper}>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Dimension:</strong> {dimension}
        </p>
      </div>
    </>
  )
}
