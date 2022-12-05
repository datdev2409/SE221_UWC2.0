import BoardColumn from "./BoardColumn"
import Task from "./Task"
import { useEffect, useState } from "react"
import { getAllTasks } from "../../../firebase/task"

function BoardView() {
  let [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchTasks() {
      let data = await getAllTasks()
      setTasks(data)
    }

    fetchTasks()
  }, [])

  const filterByStatus = (tasks, status) => {
    return tasks.filter((task) => task.status === status)
  }

  return (
    <div className="flex fx-start fy-start g-12">
      <BoardColumn title="Todo">
        {filterByStatus(tasks, "todo").map((element, idx) => (
          <Task key={idx} task={element} />
        ))}
      </BoardColumn>
      <BoardColumn title="In Progress">
        {filterByStatus(tasks, "doing").map((element, idx) => (
          <Task key={idx} task={element} />
        ))}
      </BoardColumn>
      <BoardColumn title="Done">
        {filterByStatus(tasks, "done").map((element, idx) => (
          <Task key={idx} task={element} />
        ))}
      </BoardColumn>
    </div>
  )
}

export default BoardView
