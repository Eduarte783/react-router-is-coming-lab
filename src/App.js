import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home"
import Houses from './components/pages/Houses'
import House from './components/pages/House'
import Member from './components/pages/Member'

import gameOfThrones from "./data/gameOfThrones"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/houses" element={<Houses houses={gameOfThrones}/>} />
        <Route path="/houses/:id" element={<House houses={gameOfThrones}/>} /> 
        <Route path="/houses/:houseId/members/:memberId" element={<Member houses={gameOfThrones}/>} />
        </Routes>     
    </BrowserRouter>
  )
}