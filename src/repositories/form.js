const FormData = require('../model/formData')

const createNewFormDataInDB = async (payload) => {
  const newFormData = new FormData(payload)
  await newFormData.save()

  return newFormData
}

module.exports = { createNewFormDataInDB }
