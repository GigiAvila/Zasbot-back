const transporter = require('../config/nodemailer.js')
const { FORMINFORMATIONTEMPLATE } = require('../utils/formTemplate.js')
const { setError } = require('../config/error.js')

const sendEmail = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      company: req.body.company,
      email: req.body.email,
      phone: req.body.phone,
      contactText: req.body.contactText
    }

    const gmail = data.email
    const recipients = [gmail, 'info@zasbot.com']

    console.log(data)
    console.log(gmail)
    console.log(recipients)

    await transporter.sendMail({
      from: 'Sent from <info@zasbot.com>',
      to: recipients.join(', '),
      subject: 'Gracias por contactar con Zasbot',
      html: FORMINFORMATIONTEMPLATE(data)
    })

    res.status(200).json({
      data: `the email has been sent`
    })
    console.log('>>>>> Email sent...')
  } catch (error) {
    console.error('>>>>> Error sending email:', error)
    return next(setError(201, "Can't send mail"))
  }
}

module.exports = { sendEmail }
