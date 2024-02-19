const FormData = require('../model/formData')

const getAllFormsDataFromDB = async () => {
  try {
    const forms = await FormData.find({})
    return forms
  } catch (error) {
    console.error('Error fetching forms data:', error)
    throw error
  }
}

const createNewFormDataInDB = async (payload) => {
  const newFormData = new FormData(payload)
  await newFormData.save()

  return newFormData
}

module.exports = { getAllFormsDataFromDB, createNewFormDataInDB }
