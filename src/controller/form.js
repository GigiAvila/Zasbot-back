const { setError } = require('../config/error.js')
const { createNewFormDataInDB } = require('../repositories/form')

const createNewFormData = async (req, res, next) => {
  try {
    const newFormData = await createNewFormDataInDB({
      name: req.body.name,
      company: req.body.company,
      email: req.body.email,
      phone: req.body.phone,
      contactText: req.body.contactText
    })
    res.status(201).json({ data: newFormData })
  } catch (error) {
    return next(setError(201, "Can't create new form"))
  }
}

module.exports = { createNewFormData }
