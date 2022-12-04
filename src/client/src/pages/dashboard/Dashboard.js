import React from 'react'
import { Outlet } from 'react-router-dom'
import FilterBar from './FilterBar'

function Dashboard() {
  return (
    <div>
      <FilterBar />
      <div style={{padding: '12px'}}>
        {<Outlet />}
      </div>
    </div>
  )
}

export default Dashboard
