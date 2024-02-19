const express = require('express')
const indexRouter = express.Router()
const nodemailerRouter = require('./nodemailer')
const formRouter = require('./formData')

indexRouter.use('/email', nodemailerRouter)
indexRouter.use('/form', formRouter)

module.exports = indexRouter
