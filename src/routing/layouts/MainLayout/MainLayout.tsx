import { Outlet } from "react-router-dom"

import cls from './MainLayout.module.css'
import { Navbar } from "../../components/Navbar"
import { AuthButton } from "../../components/AuthButton"
import { Suspense } from "react"

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className={cls.header}>
        <Navbar />
        <AuthButton />
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}