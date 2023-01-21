import React from 'react'
import { Outlet } from 'react-router-dom'
import TaskProvider from '../../context/task/TaskProvider'
import Navbar from './Navbar'

function Dashboard() {
  return (
    <TaskProvider>
      <Navbar />
      <div style={{padding: '12px'}}>
          {<Outlet />}
      </div>
    </TaskProvider>
  )
}

export default Dashboard
