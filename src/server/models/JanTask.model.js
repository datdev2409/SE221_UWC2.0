const {DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const MCP = require('./MCP.model');
const User = require('./User.model');

const JanTask = sequelize.define('JanTask', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING(16),
    allowNull: false,
    defaultValue: 'assigned'
  },
  officer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  employee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  MCP_id: {
    type: DataTypes.INTEGER,
    references: {
      model: MCP,
      key: 'id'
    }
  }
})

module.exports = JanTask;
