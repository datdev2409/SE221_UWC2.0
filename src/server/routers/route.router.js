const express = require('express')
const router = express.Router()
const {getAllRoutes, getRouteByID} = require('../controllers/route.controller')

router.get('/', getAllRoutes)

router.get('/:id', getRouteByID)


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
