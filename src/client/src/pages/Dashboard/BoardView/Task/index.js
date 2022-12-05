import { Divider } from "@mui/material"
import clsx from "clsx"
import styles from './Task.module.css'

function TaskRow({ field, value, isHighlight }) {
  if (!value) return <div></div>
  return (
    <div className={styles.row}>
      <div className={styles.field}>{field}</div>
      <div className={`${styles.value} ${isHighlight ? styles.highlight : ""}`}>
        {value}
      </div>
    </div>
  )
}

function Task({ task }) {
  const typeClasses = clsx(styles.type, {
    [styles.typeCol]: task.type === 'Collector' 
  })
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={typeClasses}>{task.type}</div>
        <div className={styles.name}>{task.name}</div>
      </div>

      <Divider />

      <div className={styles.body}>
        <TaskRow isHighlight={true} field="Team:" value={task.team} />
        <TaskRow field="Time:" value={task.time.start} />
        <TaskRow field="Location:" value={task.location} />
        <TaskRow field="Description:" value={task.description} />
      </div>
    </div>
  )
}

export default Task
