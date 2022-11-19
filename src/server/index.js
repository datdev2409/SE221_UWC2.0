const express = require('express')
const app = express()
const PORT = 3000

// DB connect
const Sequelize = require('sequelize')
const sequelize = new Sequelize('UWC', 'admin', '123', {
  host: 'db',
  dialect: 'mysql'
})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.get('/', (req, res) => {
  res.send('Hello, Dat!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) 
})
