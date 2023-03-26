import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { CharacterList } from "./pages/CharacterList"
import { Character } from "./pages/Character"
import { EpisodeList } from "./pages/EpisodeList"
import { Episode } from "./pages/Episode"
import { LocationList } from "./pages/LocationList"
import { Location } from "./pages/Location"

import cls from './Demo.module.css'
import { NotFound } from "./pages/NotFound"

export const Demo: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={cls.wrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/episodes/:id" element={<Episode />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/locations/:id" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}