const msrmntsRouter = require('express').Router()
const db = require('./data/db')


msrmntsRouter.get('/', (req, res) => {
  const stmt = db.prepare('SELECT * from measurements')
  res.json(stmt.all())
})

msrmntsRouter.post('/', (req, res) => {
  const stmt = db.prepare(`INSERT INTO measurements 
    (name, quantity, referenceValueLower, referenceValueUpper)
      VALUES (@name, @quantity, @referenceValueLower, @referenceValueUpper)`)
  const addMeasurement = db.transaction((msrmnt) => {
    stmt.run(msrmnt)
  })
  try {
    addMeasurement(req.body)
    res.status(201).json(req.body)
  } catch(error) {
    res.status(400).json({
      error: "Malformed object"
    })
  }
  
})

msrmntsRouter.put('/:id', (req, res) => {
  const body = req.body
  const exists = db.prepare(`
    SELECT id FROM measurements WHERE id = ?
  `)
  const id = exists.get(req.params.id)
  if (id) {
    const stmt = db.prepare(`
      UPDATE measurements
      SET name = ?, quantity = ?, 
        referenceValueLower = ?,
        referenceValueUpper = ?
      WHERE id = ?` 
    )
    const editMeasurement = db.transaction((m) => {
      stmt.run(m.name, m.quantity, m.referenceValueLower, m.referenceValueUpper, m.id)
    })
    try {
      editMeasurement(body)
      res.sendStatus(200)
    } catch(error) {
      res.sendStatus(400)
    }

  } else {
    res.sendStatus(404)
  }

})

msrmntsRouter.delete('/:id', (req, res) => {
  const id = req.params.id
  const stmt = db.prepare(`
    DELETE FROM measurements
    WHERE id = ?`
  )
  const del = stmt.run(id)
  console.log(del, id)
  if (del.changes === 0) {
    res.sendStatus(404)
  } else {
    res.sendStatus(204)
  }


}) 

module.exports = msrmntsRouter
