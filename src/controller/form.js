const { setError } = require('../config/error.js')
const {
  getAllFormsDataFromDB,
  createNewFormDataInDB
} = require('../repositories/form')

const getAllFormsData = async (req, res, next) => {
  try {
    const formsData = await getAllFormsDataFromDB()
    console.log(formsData)
    res.status(200).json({ data: formsData })
  } catch (error) {
    return next(setError(400, "Can't find forms"))
  }
}

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

module.exports = { getAllFormsData, createNewFormData }
