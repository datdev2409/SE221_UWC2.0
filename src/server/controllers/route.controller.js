const routeService = require('../services/route.service')
const catchAsync = require("../utils/catchAsync");

exports.getAllRoutes = catchAsync(async (req, res, next) => {
  const routes = await routeService.getAllRoutes()

  res.status(200).json({
    status: 'success',
    data: {
      length: routes.length,
      routes: routes
    }
  })

})

exports.getRouteByID = catchAsync(async (req, res, next) => {
  const routeID = req.params.id
  const route = await routeService.getRouteByID(routeID)

  res.status(200).json({
    status: 'success',
    route: route
  })
})

exports.createRoute = catchAsync(async (req, res, next) => {
  const route = await routeService.createRoute(req.body.mcp_list)

  res.status(200).json({
    status: 'success',
    route
  })
})

exports.deleteRoute = catchAsync(async (req, res, next) => {
  const routeID = req.params.id

  await routeService.deleteRoute(routeID)

  res.status(204).json({
    status: 'success',
    message: `Deleted route with id ${routeID}`
  })
})

exports.updateRoute = catchAsync(async (req, res, next) => {
  const mcps = req.body.mcp_list
  const routeID = req.params.id

  await routeService.deleteRoute(routeID)
  const updatedRoute = await routeService.createRoute(mcps, routeID)

  res.status(200).json({
    status: 'success',
    route: updatedRoute
  })
})
