const Sequelize = require('sequelize');
const DBConfig = require('./db.config.js');

const dialect = 'mysql';
const { database, username, password, host } = DBConfig[dialect];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('DB is connected');
    })
    .catch((error) => {
      console.error('Unable to connect DB', error);
    });
};
