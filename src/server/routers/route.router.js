const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all routes')
})

router.get('/:id', (req, res) => {
  res.send('Get route by id')
})

router.post('/', (req, res) => {
  res.send('Create route')
})

router.delete('/:id', (req, res) => {
  res.send('Delete route')
})

router.patch('/:id', (req, res) => {
  res.send('Update route')
})

module.exports = router
