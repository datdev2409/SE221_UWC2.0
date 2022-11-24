import NavItem from '../NavItem'
import styles from "./Sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavItem text="Dashboard" path="/" />
      <NavItem text="Employees" path="/employee" />
      <NavItem text="Vehicles" path="/vehicle" />
      <NavItem text="Area & MCPs" path="/area" />
    </div>
  )
}

export default Sidebar
