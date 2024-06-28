require('dotenv').config()
const express = require('express')
const app = express()
require('./src/config/db')
const cors = require('cors')
const { rateLimit } = require('express-rate-limit')
const { setError } = require('./src/config/error')
const mainRouter = require('./src/routes/indexRouter')
const path = require('path')

app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true)
    }
  })
)

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 100,
  standardHeaders: false,
  legacyHeaders: false
})
app.use(limiter)

app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', mainRouter)

app.use('*', (req, res, next) => {
  return next(setError(404, 'Not Found'))
})

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Internal Server Error')
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(
    `La aplicación está corriendo en el puerto http://localhost:${PORT}`
  )
})

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.disable('x-powered-by')
