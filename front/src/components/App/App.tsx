import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import CatCards from "../CatsCards/CatsCards";
import LikesCatCards from '../LikesCatCards/LikesCatCards';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route
        path='/'
        element={<CatCards />} />
      <Route
        path='/likes'
        element={<LikesCatCards />} />
    </Routes>
  )
}

export default App
