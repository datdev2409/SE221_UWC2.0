const sequelize = require('../config/sequelize')

module.exports = {
  MCP: require('./MCP.model'),
  Route: require('./Route.model'),
  Vehicle: require('./Vehicle.model'),
  User: require('./User.model'),
  ColTask: require('./ColTask.model'),
  JanTask: require('./JanTask.model')
}

sequelize.sync({ force: true });
