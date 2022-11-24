import NavItem from '../nav-item'
import styles from "./sidebar.module.css"

function Sidebar() {
  return (
    <div className={styles.sidebar}>

      <div className={styles.logo}>
        <h1 className={styles.heading}>UWC.io</h1>
      </div>

      <hr></hr>

      <div className='navbar'>
        <NavItem text="Dashboard" path="/" />
        <NavItem text="Employees" path="/employee" />
        <NavItem text="Vehicles" path="/vehicle" />
        <NavItem text="Area & MCPs" path="/area" />
      </div>
    </div>
  )
}

export default Sidebar
