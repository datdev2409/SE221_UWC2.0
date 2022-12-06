import { DeleteOutline } from "@mui/icons-material"
import {
  Alert,
  Dialog,
  DialogContent,
  Button,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  Chip
} from "@mui/material"
import moment from "moment"
import { deleteTask } from "../../../../context/task/taskActions"
import styles from "./Task.module.css"
import useTaskContext from "../../../../context/task/taskHook"
import { useState } from "react"

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
  const dispatch = useTaskContext()[1]
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
    setDialogOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="flex g-12" style={{maxWidth: '200px'}}>
          <Chip
            size="small"
            variant="outlined"
            color={task.type === "janitor" ? "primary" : "success"}
            label={task.type}
          />
          <div className={styles.name}>{task.name}</div>
        </div>
        <IconButton onClick={() => setDialogOpen(true)} size="small">
          <DeleteOutline color="error" fontSize="inherit" />
        </IconButton>

        {/* Confirm delete dialog */}
        <Dialog fullWidth={true} open={dialogOpen}>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogContent>
            <Alert severity="error">This will permanently delete task.</Alert>
            <Typography
              sx={{ fontSize: 12, mt: 2 }}
              variant="subtitle1"
              color="text.secondary">
              Deleted task:
            </Typography>
            <Typography variant="subtitle1">
              <strong>{task.name}</strong>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              autoFocus>
              Start delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Divider />

      <div className={styles.body}>
        <TaskRow isHighlight={true} field="Employee:" value={task.employee} />
        <TaskRow
          field="Start at:"
          value={moment(task.timeStart).format("DD MMM YYYY")}
        />
        <TaskRow
          field="End at:"
          value={moment(task.timeEnd).format("DD MMM YYYY")}
        />
        <TaskRow field="Address:" value={task.address} />
        <TaskRow field="Description:" value={task.description} />
      </div>
    </div>
  )
}

export default Task
