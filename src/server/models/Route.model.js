const {DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const MCP = require('./MCP.model')

const Route = sequelize.define('Route', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  MCP_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: MCP,
      key: 'id'
    }
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
})

module.exports = Route;
