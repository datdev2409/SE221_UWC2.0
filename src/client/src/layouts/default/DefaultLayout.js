import { Outlet } from "react-router-dom"
import styles from './DefaultLayout.module.css'
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"

function DefaultLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
