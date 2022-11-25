import tasks from "../../data/task"
import Task from "../../components/Task/Task"

function BoardView() {
  return (
    <div>
      {tasks.map(({ type, name, team, time, location, description }, index) => (
        <Task
          type={type}
          name={name}
          team={team}
          time={time}
          location={location}
          description={description}
        />
      ))}
    </div>
  )
}

export default BoardView
