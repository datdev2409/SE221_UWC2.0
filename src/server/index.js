const express = require('express')

const connectDB = require('./config/sequelize')
const app = express()
const PORT = 3000

// DB connect
connectDB()

app.get('/', (req, res) => {
  res.send('Hello, Dat!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) 
})
