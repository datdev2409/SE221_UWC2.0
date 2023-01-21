import { useContext } from "react";
import EmployeeContext from "./employeeContext";

function useEmployeeContext() {
  const [state, dispatch] = useContext(EmployeeContext)
  return [state, dispatch]
}

export default useEmployeeContext
