import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const { sendMail } = useNodeMailer()

  try {
    const { form } = getQuery(event)

    console.log(form)

    await sendMail({
      subject: 'Test Email',
      text: 'Test text',
      to: 'avery.d.howard@gmail.com',
    })
  }
  catch (e) {
    console.error(e)
    throw createError(`Email error: ${e}`)
  }
})
