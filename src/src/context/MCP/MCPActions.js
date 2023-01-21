export const setMCPs = (payload) => {
  return {
    type: "FETCH",
    payload
  }
}

export const createMCP = (payload) => {
  return {
    type: "ADD",
    payload
  }
}

export const deleteMCP = (payload) => {
  return {
    type: 'DELETE',
    payload
  }
}
