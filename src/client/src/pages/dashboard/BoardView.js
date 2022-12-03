import tasks from "../../data/task"
import Task from "../../components/Task/Task"
import FilterBar from "./FilterBar"

function BoardView() {
  return (
    <div>
      <FilterBar />
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
