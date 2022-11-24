function generateId(obj) {
  return parseInt(Date.now().toString().slice(5))
}

module.exports = generateId
