const {DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Vehicle = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  checkedDate: {
    type: DataTypes.DATEONLY
  },
  status: {
    type: DataTypes.STRING(16),
    allowNull: false,
    defaultValue: 'free'
  }
});

module.exports = Vehicle

