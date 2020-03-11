const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const measurementsRouter = require('./measurements')
const middleware = require('./utils/middleware')
const cors = require('cors')

const db = require('./data/db')

app.use(cors())

app.use(bodyParser.json())
app.use(middleware.requestLogger)
app.use('/api/measurements', measurementsRouter)
app.use(middleware.errorHandler)
app.use(express.static('build'))


module.exports = app
