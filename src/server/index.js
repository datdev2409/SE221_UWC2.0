const express = require('express')

const sequelize = require('./config/sequelize')
const {testDBConnect} = require('./config/sequelize')
const app = express()
const PORT = process.env.PORT || 3000
const User = require('./models/User.model')
const MCP = require('./models/MCP.model')
const Route = require('./models/Route.model')
const JanTask = require('./models/JanTask.model')
const ColTask = require('./models/ColTask.model')


// DB connect
testDBConnect();

sequelize.sync({ force: true });


app.get('/', (req, res) => {
  res.send('Hello, Dat!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) 
})
