import { Outlet } from "react-router-dom"
import styles from './DefaultLayout.module.css'
import Sidebar from "../../components/Sidebar/Sidebar"

function DefaultLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
