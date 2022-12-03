import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Dashboard</h1>
      <div className={styles.headerControl}>
        <FAIcon className={styles.headerIcon} icon={faBell} />
        <FAIcon className={styles.headerIcon} icon={faGear}/>
        <FAIcon className={styles.headerIcon} icon={faRightFromBracket}/>
      </div>
    </div>
  )
}

export default Header
