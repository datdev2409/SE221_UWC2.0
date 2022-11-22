const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all collector tasks')
})

router.get('/:id', (req, res) => {
  res.send('Get collector task by id')
})

router.post('/', (req, res) => {
  res.send('Create collector task')
})

router.delete('/:id', (req, res) => {
  res.send('Delete collector task')
})

router.patch('/:id', (req, res) => {
  res.send('Update collector task')
})

module.exports = router

