import { Link, Outlet } from "react-router-dom"

import { useAuth } from "../../context/AuthProvider"

import cls from './Categories.module.css'

export const Categories: React.FC = () => {
  const auth = useAuth()

  return (
    <>
      <h1>Categories</h1>
      {auth.user
        ? <p>Select the category you want to view</p>
        : <p>To view categories, you need to log in</p>
      }
      <div className={cls.categories}>
        <Link className={cls.category} to="./characters">Characters</Link>
        <Link className={cls.category} to="./episodes">Episodes</Link>
        <Link className={cls.category} to="./locations">Locations</Link>
      </div>
      <Outlet />
    </>
  )
}