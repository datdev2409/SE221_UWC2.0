const express = require('express')

// Sequelize
const sequelize = require('./config/sequelize')
const {testDBConnect} = require('./config/sequelize')
const models = require('./models')

// Router
const userRouter = require('./routers/user.router')
const MCPRouter = require('./routers/MCP.router')
const vehicleRouter = require('./routers/vehicle.router')
const janTaskRouter = require('./routers/janTask.router')
const colTaskRouter = require('./routers/colTask.router')
const routeRouter = require('./routers/route.router')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

// DB connect
testDBConnect();

sequelize.sync({ force: true });

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.use('/api/users', userRouter)
app.use('/api/mcps', MCPRouter)
app.use('/api/vehicles', vehicleRouter)
app.use('/api/routes', routeRouter)
app.use('/api/tasks/collector', colTaskRouter)
app.use('/api/tasks/janitor', janTaskRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) 
})
