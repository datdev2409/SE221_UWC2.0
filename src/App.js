import Navbar from "./Navbar"
import Timeline from "./pages/Timeline"
import Home from "./pages/Home"
import Board from "./pages/Board"
import Calendar from "./pages/Calendar"
import { Route, Routes } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/board" element={<Board />} />
          <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
