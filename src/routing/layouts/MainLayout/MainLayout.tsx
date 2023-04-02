import { Outlet } from "react-router-dom"

import cls from './MainLayout.module.css'
import { Navbar } from "../../components/Navbar"
import { AuthButton } from "../../components/AuthButton"

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className={cls.header}>
        <Navbar />
        <AuthButton />
      </div>
      <Outlet />
    </>
  )
}