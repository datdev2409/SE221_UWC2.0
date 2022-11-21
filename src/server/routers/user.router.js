const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all users')
})

router.get('/:id', (req, res) => {
  res.send('Get user by id')
})

router.post('/', (req, res) => {
  res.send('Create user')
})

router.delete('/:id', (req, res) => {
  res.send('Delete user')
})

router.patch('/:id', (req, res) => {
  res.send('Update user')
})

module.exports = router
