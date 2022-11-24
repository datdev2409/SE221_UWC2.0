import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar'

function DefaultLayout() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
