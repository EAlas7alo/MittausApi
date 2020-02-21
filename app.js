const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const measurementsRouter = require('./measurements')
const middleware = require('./utils/middleware')

app.use(bodyParser.json())
app.use(middleware.requestLogger)
app.use('/api/measurements', measurementsRouter)
app.use(middleware.errorHandler)

module.exports = app
