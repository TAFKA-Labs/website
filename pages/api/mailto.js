const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  if (req.method !== 'POST') {
    return (res.statusCode = 401)
  }
  const { email, message } = req.body
  const msg = {
    to: process.env.SENDGRID_DEST_EMAIL,
    from: email,
    subject: 'Connecting with TAFKA Labs',
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
