const express = require('express')
const brochureRouter = express.Router()
const { getBrochure } = require('../controller/brochure')

brochureRouter.get('/view-brochure', getBrochure)

module.exports = brochureRouter
