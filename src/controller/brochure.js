const path = require('path')

const getBrochure = async (req, res, next) => {
  const brochurePath = path.join(__dirname, '../public/brochure_arg.pdf')
  res.sendFile(brochurePath, (err) => {
    if (err) {
      console.error('Error al enviar el archivo PDF:', err)
      next(err)
    }
  })
}

module.exports = { getBrochure }
