import { Link } from "react-router-dom"

import cls from './Navbar.module.css'

export const Navbar: React.FC = () => {
  return (
    <nav className={cls.navbar}>
      <Link className={cls.navLink} to="/">Home</Link>
      <Link className={cls.navLink} to="/characters">Characters</Link>
      <Link className={cls.navLink} to="/episodes">Episodes</Link>
      <Link className={cls.navLink} to="/locations">Locations</Link>
    </nav>
  )
}
