const express = require('express')
const router = express.Router()
const {getAllRoutes, getRouteByID, createRoute, deleteRoute, updateRoute} = require('../controllers/route.controller')

router.route('/')
  .get(getAllRoutes)
  .post(createRoute)

router.route('/:id')
  .get(getRouteByID)
  .put(updateRoute)
  .delete(deleteRoute)

module.exports = router
