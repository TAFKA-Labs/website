const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.TAFKALABS_CONTACT)

export default async (req, res) => {
  if (req.method !== 'POST') {
    return (res.statusCode = 401)
  }
  const { email, subject, message } = req.body
  const msg = {
    to: process.env.TAFKALABS_CONTACT_EMAIL,
    from: email,
    subject: `[TAFKA Labs] ${subject}`,
    text: message,
    html: `<p>${message}</p>`,
  }
  try {
    await sgMail.send(msg)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send('OK')
  } catch (err) {
    console.log('err: ', err)
    res.status(400).json({ err })
  }
}
