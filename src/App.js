import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import Board from "./pages/Board"
import { Route, Routes } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </>
  )
}

export default App
