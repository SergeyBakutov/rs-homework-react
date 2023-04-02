import { useLocationState } from "../../hooks/useLocationState"

import { ICharacter } from "../../types/character"

import cls from './Character.module.css'

export const Character: React.FC = () => {
  const { name, status, species, type, gender, image } = useLocationState<ICharacter>()

  return (
    <>
      <h2>Character: {name}</h2>
      <div className={cls.wrapper}>
        <img className={cls.image} src={image} alt={name} width={250} />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Species:</strong> {species}</p>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Gender:</strong> {gender}</p>
      </div>
    </>
  )
}