import {
  MoreHoriz,
} from "@mui/icons-material"
import {
  Divider,
  Icon,
  Menu,
  MenuItem
} from "@mui/material"
import moment from "moment"
import { useState } from "react"
import { deleteTask } from "../../../../firebase/task"
import styles from "./Task.module.css"

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
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={typeClasses}>{task.type}</div> */}
        <div className={styles.name}>{task.name}</div>
        <Icon onClick={handleClick}>
          <MoreHoriz />
        </Icon>
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem color="info">Edit</MenuItem>
          <MenuItem color="error" onClick={() => deleteTask(task.id)}>
            Delete
          </MenuItem>
        </Menu>
      </div>

      <Divider />

      <div className={styles.body}>
        <TaskRow isHighlight={true} field="Team:" value={task.team} />
        <TaskRow
          field="Time:"
          value={moment(task.timeStart).format("DD MMM YYYY")}
        />
        <TaskRow field="Location:" value={task.location} />
        <TaskRow field="Description:" value={task.description} />
      </div>
    </div>
  )
}

export default Task
