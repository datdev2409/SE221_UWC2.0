import BoardColumn from "./BoardColumn"
import tasks from "../../../data/task"
import Task from "./Task"

function BoardView() {
  const todoTasks = tasks.filter(({status}) => status === 'todo')
  const doingTasks = tasks.filter(({status}) => status === 'doing')
  const doneTasks = tasks.filter(({status}) => status === 'done')

  return (
    <div className="flex fx-start fy-start g-12">
      <BoardColumn title="Todo">
        {todoTasks.map((element, idx) => <Task key={idx} task={element} />)}
      </BoardColumn>
      <BoardColumn title="In Progress">
        {doingTasks.map((element, idx) => <Task key={idx} task={element} />)}
      </BoardColumn>
      <BoardColumn title="Done">
        {doneTasks.map((element, idx) => <Task key={idx} task={element} />)}
      </BoardColumn>
    </div>
  )
}

export default BoardView
