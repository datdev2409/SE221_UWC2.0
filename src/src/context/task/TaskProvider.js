import { useReducer } from "react";
import TaskContext from "./TaskContext";
import { initialState, taskReducer } from "./taskReducer";

function TaskProvider({children}) {

  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  )

}

export default TaskProvider
