const Sequelize = require('sequelize');
const DBConfig = require('./db.config.js');

const dialect = 'mysql';
const { database, username, password, host } = DBConfig[dialect];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

sequelize.testDBConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB is connected');
  } catch (err) {
    console.error('Unable to connect DB', err);
  }
}

module.exports = sequelize
