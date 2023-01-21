export const setEmployees = (payload) => {
  return {
    type: "FETCH",
    payload
  }
}

export const createEmployee = (payload) => {
  return {
    type: "ADD",
    payload
  }
}

export const deleteEmployee = (payload) => {
  return {
    type: 'DELETE',
    payload
  }
}
