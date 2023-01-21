import React from "react"
import styles from './BoardView.module.css'

function BoardColumn({ title, children }) {
  return (
    <div className={styles.col}>
      <div className={styles.colHeader}>
        <h3 className={styles.colTitle}>{title}</h3>
        <div className={styles.colIcon}>
        </div>
      </div>

      <div className={styles.colBody}>
        {children}
      </div>
    </div>
  )
}

export default BoardColumn
