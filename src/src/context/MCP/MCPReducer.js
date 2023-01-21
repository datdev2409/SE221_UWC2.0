import { createMCP, deleteMCP } from "../../firebase/MCP"

export const initialState = []

export function MCPReducer(state, action) {
  switch (action.type) {
    case 'FETCH':
      return action.payload

    case 'ADD':
      createMCP(action.payload)
      return [...state, action.payload]      
    
    case 'DELETE':
      deleteMCP(action.payload)
      return state.filter(task => task.id !== action.payload)

    default:
      throw new Error('Invalid action type')
  }
}
