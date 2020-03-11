require('dotenv').config()

let PORT = process.env.NODE_ENV === 'test' ? 3000 : process.env.PORT || 3001

module.exports = {
  PORT
}