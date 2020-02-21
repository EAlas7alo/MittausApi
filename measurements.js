const msrmntsRouter = require('express').Router()
const db = require('./data/db')


msrmntsRouter.get('/', (req, res) => {
  const stmt = db.prepare('SELECT * from measurements')
  res.json(stmt.all())
})

msrmntsRouter.post('/', (req, res) => {
  const stmt = db.prepare(`INSERT INTO measurements 
    (id, name, quantity, referenceValueLower, referenceValueUpper)
      VALUES (@id, @name, @quantity, @referenceValueLower, @referenceValueUpper)`)
  const addMeasurement = db.transaction((msrmnt) => {
    stmt.run(msrmnt)
  })

  addMeasurement(req.body)
  res.status(201).json(req.body)
})

msrmntsRouter.put('/:id', (req, res) => {
  const body = req.body
  const stmt = db.prepare(`UPDATE measurements
    SET name = ?, quantity = ?, 
    referenceValueLower = ?,
    referenceValueUpper = ?
    WHERE id = ?` 
  )
  const editMeasurement = db.transaction((m) => {
    stmt.run(m.name, m.quantity, m.referenceValueLower, m.referenceValueUpper, m.id)
  })
  editMeasurement(body)
  console.log('finished editing')
  res.sendStatus(200)
})

msrmntsRouter.delete('/:id', (req, res) => {
  const id = req.params.id
  const stmt = db.prepare(`
    DELETE FROM measurements
    WHERE id = ?`
  )
  stmt.run(id)

  res.sendStatus(204)

}) 

module.exports = msrmntsRouter
