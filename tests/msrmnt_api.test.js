const supertest = require('supertest')
const { createServer } = require('http')
const app = require('../app')
const helper = require('./test_helper')

const api = supertest(app)

const initTests = () => {
  helper.initializeDb()
  server = createServer(app)
  server.listen(done)
}

beforeAll(done => {
  helper.initializeDb()
  server = createServer(app)
  server.listen(done)
  console.log(helper.measurementsInDb())
})

afterAll(done => {
  server.close(done)
})

describe('GET /api/measurements/', () => {
  test('measurements are returned as json', async () => {
    await api
      .get('/api/measurements')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('measurements can be fetched', async () => {
    const response = await api.get('/api/measurements')
  
    expect(response.body.length).toBe(helper.initialMeasurements.length)
  })
})

describe('POST /api/measurements/', () => {
  let measurement = {
    name: 'fP-Trigly',
    quantity: 'mmol/l',
  }

  test('measurements can be added', async () => {
    const wellFormedMeasurement = {
      ...measurement,
      referenceValueLower: 0,
      referenceValueUpper: 1.7,
    }
    await api
      .post('/api/measurements')
      .send(wellFormedMeasurement)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    expect(helper.measurementsInDb().length).toBe(helper.initialMeasurements.length + 1)
  })

  test('measurements without required fields are not added (400)', async () => {
    const initialLength = helper.measurementsInDb().length
    await api
      .post('/api/measurements')
      .send(measurement)
      .expect(400)
    expect(helper.measurementsInDb().length).toBe(initialLength)
  })
})

describe('PUT /api/measurements/:id', () => {
  const measurementToEdit = helper.initialMeasurements[0]
  measurementToEdit.referenceValueLower = 130

  test('measurements can be edited', async () => {
    await api
      .put(`/api/measurements/${measurementToEdit.id}`)
      .send(measurementToEdit)
      .expect(200)  
    const editedEntry = helper.measurementsInDb().find(msrmnt => msrmnt.id === measurementToEdit.id)
    expect(editedEntry.referenceValueLower).toBe(130)
  })

  test('non-existent entries can not be edited (404)', async () => {
    const initialLength = helper.measurementsInDb().length
    await api
      .put('/api/measurements/xd')
      .send(measurementToEdit)
      .expect(404)
    expect(helper.measurementsInDb().length).toBe(initialLength)

  })

  test('malformed edits are not allowed (400)', async () => {
    const malformedMeasurement = {
      ...measurementToEdit,
      referenceValueLower: 'thisShouldNotBeAString'
    }
    await api
      .put(`/api/measurements/${measurementToEdit.id}`)
      .send(malformedMeasurement)
      .expect(400)  
    const measurement = helper.measurementsInDb().find(msrmnt => msrmnt.id === malformedMeasurement.id)
    expect(measurement.referenceValueLower).toBe(130)
  })
})

describe('DELETE /api/measurements/:id', () => {
  test('measurements can be deleted', async () => {
    const measurementToDel = helper.initialMeasurements[0]
    const dbLength = helper.measurementsInDb().length
    await api
      .delete(`/api/measurements/${measurementToDel.id}`)
      .expect(204)
  
    expect(helper.measurementsInDb().length).toBe(dbLength - 1)
  })

  test('non-existent entries return (404)', async () => {
    await api
    .delete(`/api/measurements/xd`)
    .expect(404)
  })
})


