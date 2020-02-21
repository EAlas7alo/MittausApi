const Database = require('better-sqlite3')
const fs = require('fs')
const env = process.env.NODE_ENV
console.log(env)
const db =  env === ('production' || 'development') 
  ? new Database('measurements.db', { verbose: console.log })
  : new Database('measurementsTest.db', { verbose: console.log, memory: true })
console.log(db)
const setupDB = () => {
  const migration = fs.readFileSync('./001-init.sql', 'utf8')
  db.exec(migration)
}

setupDB()

module.exports = db