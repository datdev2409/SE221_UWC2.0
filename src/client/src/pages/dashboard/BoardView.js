import BoardColumn from "./components/BoardColumn"
import tasks from "../../data/task"
import Task from "./components/Task"

function BoardView() {
  const todoTasks = tasks.filter(({status}) => status === 'todo')
  const doingTasks = tasks.filter(({status}) => status === 'doing')
  const doneTasks = tasks.filter(({status}) => status === 'done')

  return (
    <div className="board">
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
