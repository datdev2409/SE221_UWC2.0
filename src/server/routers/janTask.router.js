const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all janitor tasks')
})

router.get('/:id', (req, res) => {
  res.send('Get janitor task by id')
})

router.post('/', (req, res) => {
  res.send('Create janitor task')
})

router.delete('/:id', (req, res) => {
  res.send('Delete janitor task')
})

router.patch('/:id', (req, res) => {
  res.send('Update janitor task')
})

module.exports = router
