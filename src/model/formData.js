const mongoose = require('mongoose')
const { Schema } = mongoose

const formDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: false, trim: true },
    contactText: { type: String, required: true, trim: true }
  },
  {
    timestamps: true,
    collection: 'formDatas'
  }
)

const FormData = mongoose.model('FormData', formDataSchema)

module.exports = FormData
