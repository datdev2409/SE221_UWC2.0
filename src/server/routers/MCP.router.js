const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all MCPs')
})

router.get('/:id', (req, res) => {
  res.send('Get MCP by id')
})

router.post('/', (req, res) => {
  res.send('Create MCP')
})

router.delete('/:id', (req, res) => {
  res.send('Delete MCP')
})

router.patch('/:id', (req, res) => {
  res.send('Update MCP')
})

module.exports = router
