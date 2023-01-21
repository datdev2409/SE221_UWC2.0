import { createEmployee, deleteEmployee } from "../../firebase/employee"

export const initialState = []

export function employeeReducer(state, action) {
  switch (action.type) {
    case 'FETCH':
      return action.payload

    case 'ADD':
      createEmployee(action.payload)
      return [...state, action.payload]      
    
    case 'DELETE':
      deleteEmployee(action.payload)
      return state.filter(task => task.id !== action.payload)

    default:
      throw new Error('Invalid action type')
  }
}
