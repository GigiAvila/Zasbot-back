const express = require('express')
const formRouter = express.Router()
const { getAllFormsData, createNewFormData } = require('../controller/form')

formRouter.get('/all-forms', getAllFormsData)
formRouter.post('/new-form', createNewFormData)

module.exports = formRouter
