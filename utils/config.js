require('dotenv').config()

let PORT = process.env.NODE_ENV === 'test' ? 3000 : process.env.PORT

module.exports = {
  PORT
}