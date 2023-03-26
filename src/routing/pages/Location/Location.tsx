import { useLocationState } from "../../hooks/useLocationState"

import { ILocation } from "./types/location"

import cls from './Location.module.css'

export const Location: React.FC = () => {
  const { name, type, dimension } = useLocationState<ILocation>()

  return (
    <div className={cls.wrapper}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Dimension:</strong> {dimension}</p>
    </div>
  )
}