export const setTasks = (payload) => {
  return {
    type: "FETCH",
    payload
  }
}

export const createTask = (payload) => {
  return {
    type: "ADD",
    payload
  }
}

export const deleteTask = (payload) => {
  return {
    type: 'DELETE',
    payload
  }
}
