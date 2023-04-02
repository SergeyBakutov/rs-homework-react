import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AuthProvider } from "./context/AuthProvider"
import { MainLayout } from "./layouts/MainLayout"
import { CategoryLayout } from "./layouts/CategoryLayout"
import { Categories } from "./pages/Categories"
import { CharacterList } from "./pages/CharacterList"
import { Character } from "./pages/Character"
import { EpisodeList } from "./pages/EpisodeList"
import { Episode } from "./pages/Episode"
import { Home } from "./pages/Home"
import { LocationList } from "./pages/LocationList"
import { Location } from "./pages/Location"
import { Authorization } from "./pages/Authorization"
import { NotFound } from "./pages/NotFound"

import cls from './Demo.module.css'

export const Demo: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className={cls.wrapper}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="categories" element={<Categories />}>
                <Route path="characters" element={<CategoryLayout />}>
                  <Route index element={<CharacterList />} />
                  <Route path=":id" element={<Character />} />
                </Route>
                <Route path="episodes" element={<CategoryLayout />}>
                  <Route index element={<EpisodeList />} />
                  <Route path=":id" element={<Episode />} />
                </Route>
                <Route path="locations" element={<CategoryLayout />}>
                  <Route index element={<LocationList />} />
                  <Route path=":id" element={<Location />} />
                </Route>
              </Route>
            </Route>
            <Route path="/login" element={<Authorization />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}