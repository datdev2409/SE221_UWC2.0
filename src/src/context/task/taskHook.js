import { useContext } from "react";
import TaskContext from "./TaskContext";


export default function useTaskContext() {
  const [state, dispatch] = useContext(TaskContext)
  return [state, dispatch]
}
