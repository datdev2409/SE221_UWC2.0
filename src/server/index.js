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

// Router
const userRouter = require('./routers/user.router')
const MCPRouter = require('./routers/MCP.router')
const vehicleRouter = require('./routers/vehicle.router')
const janTaskRouter = require('./routers/janTask.router')
const colTaskRouter = require('./routers/colTask.router')
const routeRouter = require('./routers/route.router')


// DB connect
testDBConnect();

sequelize.sync({ force: true });


app.get('/', (req, res) => {
  res.send('Hello, Dat!')
})

app.use('/api/users', userRouter)
app.use('/api/mcps', MCPRouter)
app.use('/api/vehicles', vehicleRouter)
app.use('/api/routes', routeRouter)
app.use('/api/tasks/collector', colTaskRouter)
app.use('/api/tasks/janitor', janTaskRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) 
})
