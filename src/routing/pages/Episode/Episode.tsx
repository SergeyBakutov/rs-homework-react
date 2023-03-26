import { useLocationState } from "../../hooks/useLocationState"

import { IEpisode } from "./types/episode"

import cls from './Episode.module.css'

export const Episode: React.FC = () => {
  const { name, air_date, episode } = useLocationState<IEpisode>()

  return (
    <div className={cls.wrapper}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Air date:</strong> {air_date}</p>
      <p><strong>Episode:</strong> {episode}</p>
    </div>
  )
}