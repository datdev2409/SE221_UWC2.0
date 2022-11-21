const {DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const MCP = sequelize.define('MCP', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  long: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  isFull: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  type: {
    type: DataTypes.STRING(16),
    allowNull: false,
    defaultValue: 'middle'
  }
})

module.exports = MCP;
