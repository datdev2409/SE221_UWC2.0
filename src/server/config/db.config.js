const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  mysql: {
    database: process.env.DB_NAME || 'SE',
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || '123',
    host: process.env.DB_HOST || 'db'
  }
}

