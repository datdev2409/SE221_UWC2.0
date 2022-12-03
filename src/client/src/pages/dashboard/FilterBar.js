import React from 'react'
import './dashboard.css'

export default function FilterBar() {
  return (
    <div className='filterBar'>
      <div className='views'>
        <div>Board</div>
        <div>Timeline</div>
        <div>Calendar</div>
      </div>
      <div className='filters'>
        <select className='filter'>
          <option>Team</option>
        </select>
        <select className='filter'>
          <option>Type</option>
        </select>
        <select className='filter'>
          <option>Time</option>
        </select>
        <div>ADD TASK</div>
      </div>
    </div>
  )
}
