const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Route = require('./Route.model');
const User = require('./User.model');
const Vehicle = require('./Vehicle.model');

const ColTask = sequelize.define('ColTask', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING(16),
    allowNull: false,
    defaultValue: 'assigned',
  },
  officer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  employee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  route_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Route,
      key: 'id',
    },
  },
  vehicle_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Vehicle,
      key: 'id',
    },
  },
  finishedAt: {
    type: DataTypes.DATE
  },
  acceptedAt: {
    type: DataTypes.DATE
  }
});

module.exports = ColTask;
