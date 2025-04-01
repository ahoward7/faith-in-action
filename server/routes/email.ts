import type { H3Event } from 'h3'

function generateEmailTemplate(contact: any) {
  let emailContent = `
    <h2>Someone Is Contacting You</h2>
    <ul>
  `

  for (const [key, value] of Object.entries(contact)) {
    if (key !== 'name') {
      emailContent += `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</li>`
    }
  }

  return emailContent
}

export default defineEventHandler(async (event: H3Event) => {
  const { sendMail } = useNodeMailer()

  try {
    const { form } = getQuery(event) as { [key: string]: any }

    const parsedForm = JSON.parse(form)

    const emailBody = generateEmailTemplate(parsedForm)

    await sendMail({
      subject: `Contact From ${parsedForm.first} ${parsedForm.last}`,
      html: emailBody,
      to: process.env.EMAIL_TO || 'avery.d.howard@gmail.com',
    })
  }
  catch (e) {
    console.error(e)
    throw createError(`Email error: ${e}`)
  }
})
