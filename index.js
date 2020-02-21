const http = require('http')
const app = require('./app')
const config = require('./utils/config')

const server = http.createServer(app)

const PORT = config.PORT
server.listen(PORT, () => {
  console.log(`Server started at PORT ${config.PORT}`)
})

module.exports = server
