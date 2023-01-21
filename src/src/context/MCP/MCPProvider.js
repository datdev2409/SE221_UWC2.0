import { useReducer } from "react";
import MCPContext from "./MCPContext";
import {initialState, MCPReducer} from './MCPReducer'

function MCPProvider({ children }) {
  const [state, dispatch] = useReducer(MCPReducer, initialState)

  return (
    <MCPContext.Provider value={[state, dispatch]}>
      {children}
    </MCPContext.Provider>
  )
}

export default MCPProvider
