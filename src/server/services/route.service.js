const sequelize = require('sequelize')
const Route = require('../models/Route.model')
const generateId = require('../utils/generateId')

function groupCP(checkPoints) {
  if (checkPoints.length == 0) return []

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
    length: checkPoints.length,
    mcp_list: checkPoints
  }
}

exports.getAllRoutes = async () => {
  const routes = await Route.findAll({
    attributes: ['id', 'MCP_id', 'order'],
  })

  return routes
}

exports.getRouteByID = async (id) => {
  const checkPoints = await Route.findAll({
    where: { id: id },
    order: sequelize.col('order')
  })

  const route = groupCP(checkPoints)
  return route
}

exports.deleteRoute = async (id) => {
  await Route.destroy({where: { id }})
}

exports.createRoute = async (MCPList, routeID) => {
  const id = routeID || generateId()
  const checkPoints = MCPList.map((MCP_id, index) => {
    return {
      id, MCP_id, order: index + 1
    }
  })

  const route = await Route.bulkCreate(checkPoints)
  
  return groupCP(route)
}
