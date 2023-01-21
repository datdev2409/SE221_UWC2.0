import { useReducer } from "react";
import EmployeeContext from "./employeeContext";
import {initialState, employeeReducer} from './employeeReducer'

function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState)

  return (
    <EmployeeContext.Provider value={[state, dispatch]}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
