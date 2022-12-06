import { createTask, deleteTask } from "../../firebase/task"

export const initialState = [

]

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return action.payload

    case 'ADD':
      createTask(action.payload)
      return [...state, action.payload]      
    
    case 'DELETE':
      deleteTask(action.payload)
      return state.filter(task => task.id !== action.payload)

    default:
      throw new Error('Invalid action type')
  }
}
