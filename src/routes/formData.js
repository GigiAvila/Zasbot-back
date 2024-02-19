const express = require('express')
const formRouter = express.Router()
const { createNewFormData } = require('../controller/form')

formRouter.post('/new-form', createNewFormData)

module.exports = formRouter
