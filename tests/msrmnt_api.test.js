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

beforeAll((done) => {
  helper.initializeDb()
  server = createServer(app)
  server.listen(done)
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

describe('GET /api/measurements/:id', () => {
  test('non-existent entries return 404', () => {

  })
})

describe('POST /api/measurements/', () => {
  test('measurements can be added', async () => {
    const measurement = {
      id: 3,
      name: 'fP-Trigly',
      quantity: 'mmol/l',
      referenceValueLower: 0,
      referenceValueUpper: 1.7,
    }
    await api
      .post('/api/measurements')
      .send(measurement)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    expect(helper.measurementsInDb().length).toBe(helper.initialMeasurements.length + 1)
  })
})

describe('PUT /api/measurements/:id', () => {
  test('measurements can be edited', async () => {
    const measurementToEdit = helper.initialMeasurements[0]
    measurementToEdit.referenceValueLower = 130

    await api
      .put(`/api/measurements/${measurementToEdit.id}`)
      .send(measurementToEdit)
      .expect(200)  
  })
})

describe('DELETE /api/measurements/:id', () => {
  test('measurements can be deleted', async () => {
    const measurementToDel = helper.initialMeasurements[0]
    await api
      .delete(`/api/measurements/${measurementToDel.id}`)
      .expect(204)
  
    expect(helper.measurementsInDb().length).toBe(helper.initialMeasurements.length - 1)
  })
})


