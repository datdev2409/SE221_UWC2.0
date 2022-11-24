const sequelize = require('sequelize');
const Route = require('../models/Route.model')
const catchAsync = require("../utils/catchAsync");

function createRoute(checkPoints) {
  if (!checkPoints) return []

  // Check those checkPoints have the same ID
  const routeId = checkPoints[0].id
  checkPoints = checkPoints.filter(cp => cp.id == routeId)

  // Remove route id
  checkPoints = checkPoints.map(cp => {
    return {
      MCP_id: cp.MCP_id,
      order: cp.order
    }
  })

  checkPoints = checkPoints.map(cp => Object.assign({}, {
    MCP_id: cp.MCP_id,
    order: cp.order
  }))

  return {
    id: routeId,
    check_point: checkPoints
  }
}

exports.getAllRoutes = catchAsync(async (req, res, next) => {
  const routes = await Route.findAll({
    attributes: ['id', 'MCP_id', 'order'],
  })

  res.status(200).json({
    status: 'success',
    data: routes
  })

})

exports.getRouteByID = catchAsync(async (req, res, next) => {
  const routeId = req.params.id
  const checkPoints = await Route.findAll({
    where: { id: routeId },
    order: sequelize.col('order')
  })

  const route = createRoute(checkPoints)

  res.status(200).json({
    status: 'success',
    data: route
  })
})
