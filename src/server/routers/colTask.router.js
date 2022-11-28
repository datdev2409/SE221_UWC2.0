const express = require('express')
const router = express.Router()
const colTaskController = require('../controllers/ColTask.controller')

router.get('/', (req, res) => {
  res.send(colTaskController.getAllColTask)
})

router.get('/:id', (req, res) => {
  res.send(colTaskController.getColTaskById)
})

router.post('/', (req, res) => {
  res.send(colTaskController.createColTask)
})

router.delete('/:id', (req, res) => {
  res.send(colTaskController.deleteColTask)
})

router.patch('/:id', (req, res) => {
  res.send(colTaskController.updataeColTask)
})

module.exports = router

