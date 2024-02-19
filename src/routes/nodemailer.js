const express = require('express')
const nodemailerRouter = express.Router()
const { sendEmail } = require('../controller/nodemailer')

nodemailerRouter.post('/send-email', sendEmail)

module.exports = nodemailerRouter
