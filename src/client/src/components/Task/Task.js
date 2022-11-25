import styles from "./Task.module.css"

function Task({ type, name, team, time, location, description }) {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <p className={styles.type}>{type}</p>
        <h3 className={styles.name}>{name}</h3>
      </div>  

      <div className={styles.body}></div>  
    </div>
  )
}

export default Task
