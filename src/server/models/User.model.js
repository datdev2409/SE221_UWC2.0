const {DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(16)
  },
  role: {
    type: DataTypes.STRING(16),
    allowNull: false,
    defaultValue: 'customer'
  }
});

module.exports = User

