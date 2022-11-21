const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all vehicles')
})

router.get('/:id', (req, res) => {
  res.send('Get vehicle by id')
})

router.post('/', (req, res) => {
  res.send('Create vehicle')
})

router.delete('/:id', (req, res) => {
  res.send('Delete vehicle')
})

router.patch('/:id', (req, res) => {
  res.send('Update vehicle')
})

module.exports = router

