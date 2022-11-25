import clsx from "clsx"
import { Link } from "react-router-dom"
import styles from "./SidebarItem.module.css"

function SidebarItem({ text, path, isActive }) {
  const classes = clsx(styles.navItem, {
    [styles.active]: isActive
  })

  return (
    <Link className={classes} to={path}>
      {text}
    </Link>
  )
}

export default SidebarItem
