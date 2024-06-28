const express = require('express')
const indexRouter = express.Router()
const nodemailerRouter = require('./nodemailer')
const formRouter = require('./formData')
const brochureRouter = require('./brochure')

indexRouter.use('/email', nodemailerRouter)
indexRouter.use('/form', formRouter)
indexRouter.use('/brochure', brochureRouter)

module.exports = indexRouter
