import clsx from "clsx"

function TaskRow({ field, value, isHighlight }) {
  if (!value) return <div></div>
  return (
    <div className="taskRow">
      <div className="taskField">{field}</div>
      <div className={`taskValue ${isHighlight ? "taskValueHighlight" : ""}`}>
        {value}
      </div>
    </div>
  )
}

function Task({ task }) {
  const typeClasses = clsx('taskType', {
    'taskTypeCol': task.type === 'Collector' 
  })
  return (
    <div className="task">
      <div className="taskHeader">
        <div className={typeClasses}>{task.type}</div>
        <div className="taskName">{task.name}</div>
      </div>

      <div className="taskDivider"></div>

      <div className="taskBody">
        <TaskRow isHighlight={true} field="Team:" value={task.team} />
        <TaskRow field="Time:" value={task.time.start} />
        <TaskRow field="Location:" value={task.location} />
        <TaskRow field="Description:" value={task.description} />
      </div>
    </div>
  )
}

export default Task
