import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{padding: '12px'}}>
        {<Outlet />}
      </div>
    </div>
  )
}

export default Dashboard
