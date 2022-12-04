import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBorderNone, faListUl, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import './dashboard.css'
import routes from "../../config/routes"

const viewOption = [
  {
    path: routes.dashboard__board,
    text: 'Board',
    icon: faBorderNone
  },
  {
    path: routes.dashboard__timeline,
    text: 'Timeline',
    icon: faListUl
  },
  {
    path: routes.dashboard__calendar,
    text: 'Calendar',
    icon: faCalendar
  },
]

export default function FilterBar() {
  const { pathname } = useLocation()

  return (
    <div className='filterBar'>
      <div className='views'>
        {viewOption.map(({path, text, icon}, index) => {
          return (
            <Link key={index} to={path} className={`viewItem ${path === pathname ? 'viewActive' : ''}`}>
              <FAIcon icon={icon} />
              <div>{text}</div>
            </Link>
          )
        })}
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
        <div className='filterBtn'>
          ADD TASK
          <FAIcon icon={faPlus} />
        </div>
      </div>
    </div>
  )
}
