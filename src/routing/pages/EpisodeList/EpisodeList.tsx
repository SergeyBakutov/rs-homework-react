import { Link } from 'react-router-dom'

import episodes from './assets/episodes.json'

import cls from './EpisodeList.module.css'

export const EpisodeList: React.FC = () => {
  return (
    <>
      <h2>Episode list</h2>
      <ol className={cls.episodeList} type="1">
        {episodes.map((episode) => {
          const { id, name, created } = episode
          return (
            <li key={created}>
              <Link to={`./${id}`} state={episode}>{name}</Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}