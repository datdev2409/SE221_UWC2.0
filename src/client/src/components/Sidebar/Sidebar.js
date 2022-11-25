import { useLocation } from "react-router-dom"

import SidebarItem from './SidebarItem'
import styles from "./Sidebar.module.css"

const items = [
  { text: "Dashboard", path: "/" },
  { text: "Employee", path: "/employee" },
  { text: "Vehicle", path: "/vehicle" },
  { text: "Area & MCPs", path: "/area-and-mcps" }
]

function Sidebar() {
  const pathname = useLocation().pathname

  return (
    <div className={styles.sidebar}>
      <header className={styles.header}>
        <h1 className={styles.heading}>UWC.io</h1>
      </header>

      <div>
        {items.map(({ text, path }, index) => (
          <SidebarItem
            key={index}
            text={text}
            path={path}
            isActive={pathname === path}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
