const db = require('../data/db')

const initialMeasurements = [
  {
    id: 1,
    name: "Hemoglobiini",
    quantity: "g/l",
    referenceValueLower: 134,
    referenceValueUpper: 167,
  },
  {
    id: 2,
    name: "LDL-kolesteroli",
    quantity: "mmol/l",
    referenceValueLower: 0,
    referenceValueUpper: 3,
  }
]

const initializeDb = () => {
  const insert = db.prepare(
    `INSERT INTO measurements 
      (id, name, quantity, referenceValueLower, referenceValueUpper)
        VALUES (@id, @name, @quantity, @referenceValueLower, @referenceValueUpper)`)
  const insertMany = db.transaction((msrmnts) => {
    for (const msrmnt of msrmnts) insert.run(msrmnt)
  })
  insertMany(initialMeasurements)
  console.log('init complete')
}

const measurementsInDb = () => {
  const stmt = db.prepare('SELECT * FROM measurements')
  return stmt.all()
  
}

const cleanUp = () => {
  db.close()
  console.log(db)
}

module.exports = {
  initializeDb,
  initialMeasurements,
  measurementsInDb,
  cleanUp
}
