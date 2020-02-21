const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
      console.log(...params)
  }
}

const errorLog = (...params) => {
  console.error(...params)
}

const requestLogger = (request, response, next) => {
  info('Method:', request.method)
  info('Path:  ', request.path)
  info('Body:  ', request.body)
  info('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  errorLog(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
      return response.status(401).json({error: 'invalid token'})
  }

  next(error)
}

module.exports = {
  requestLogger,
  errorHandler,
}