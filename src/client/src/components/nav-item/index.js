import clsx from 'clsx'
import { Link, useLocation } from "react-router-dom"
import styles from "./nav-item.module.css"

function NavItem({ text, path }) {
  const location = useLocation()
  const classes = clsx(styles.navItem, {
    [styles.active]: location.pathname === path
  })

  return (
    <Link className={classes} to={path}>
      {text}
    </Link>
  )
}

export default NavItem
