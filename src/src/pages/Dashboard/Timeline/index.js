import React, { useEffect, useState } from "react"
import useTaskContext from "../../../context/task/taskHook"
import { getAllTasks } from "../../../firebase/task"
import { setTasks } from "../../../context/task/taskActions"
import { DataGrid } from "@mui/x-data-grid"
import { Box } from "@mui/material"
import {getDate} from "../../../utils/dateConvert"
import TaskModal from "../Modal/TaskModal"

function Timeline() {
  const [tasks, dispatch] = useTaskContext()
  const [taskOpen, setTaskOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    getAllTasks().then((data) => dispatch(setTasks(data)))
  }, [dispatch])

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "timeStart", headerName: "Start", width: 150 },
    { field: "timeEnd", headerName: "End", width: 150 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "status", headerName: "Status", width: 100 }
  ]

  const openTaskModal = (params) => {
    setSelectedTask(params.row)
    setTaskOpen(true)
  }

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGrid
        onRowClick={openTaskModal}
        columns={columns}
        rows={tasks.map(task => {
          return {
            id: task.name + Date.now(),
            ...task, timeStart: getDate(task.timeStart),
            timeEnd: getDate(task.timeEnd)
          }
        })}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      {selectedTask && <TaskModal task={selectedTask} open={taskOpen} handleClose={() => setTaskOpen(false)} />}
    </Box>
  )
}

export default Timeline
