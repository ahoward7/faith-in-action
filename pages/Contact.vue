<template>
  <page-max-1920>
    <page-header>
      <img src="~/assets/images/services/fia-phone.png" class="px-8 max-h-86">
      <img src="~/assets/images/logos/fia-contact-text.png" class="px-8 max-h-28">
    </page-header>
    <page-text-wrapper>
      <div class="w-full flex flex-col-reverse xl:flex-row">
        <div class="basis-1/2">
          <page-sub-header class="mt-12 xl:mt-0">
            Contact Form
          </page-sub-header>
          <page-text class="flex flex-col items-center gap-8 mt-8">
            <page-input v-for="item in data" :label="item.required ? `${item.label} *` : item.label" :type="item.type" v-model:data="item.data" :options="item.options" :required="item.required"/>
            <div v-if="!dataValid" class="text-center bg-fia-red py-1 px-2 rounded-md">
              Please fill out all the valid fields
            </div>
            <div v-if="successSend" class="text-center bg-fia-green py-1 px-2 rounded-md">
              Message sent
            </div>
            <div v-if="errorSend" class="text-center bg-fia-red py-1 px-2 rounded-md">
              Error sending message, please contact us directly
            </div>
            <fia-button-page @click="sendEmail">Submit</fia-button-page>
          </page-text>
        </div>
        <div class="basis-1/2">
          <page-sub-header>
            Contact Info
          </page-sub-header>
          <div class="flex justify-center">
            <div class="max-w-600 flex flex-col gap-4 p-4 mt-8 border-4 border-primary border-fia-yellow rounded-3xl">
              <fia-bullet v-for="info in contactInfo" :label="info.label">{{ info.value }}</fia-bullet>
            </div>
          </div>
        </div>
      </div>
    </page-text-wrapper>
  </page-max-1920>
</template>

<script setup>
import { contactInfo } from '~/utils/constants'
const dataValid = ref(true)
const successSend = ref(false)
const errorSend = ref(false)

const data = ref({
  interest: {
    label: 'Reason For Contact',
    data: '',
    type: 'select',
    options: [
      "I want to learn more about FIA",
      "I need help",
      "I know someone who needs help",
      "I want to volunteer",
    ]
  },
  name: {
    label: 'Name',
    data: '',
    required: true,
  },
  email: {
    label: 'Email',
    data: '',
    required: true,
  },
  phone: {
    label: 'Phone',
    data: '',
    required: true,
  },
  address: {
    label: 'Address',
    data: '',
    required: true,
  },
  city: {
    label: 'City',
    data: '',
    required: true,
  },
  state: {
    label: 'State',
    data: '',
    required: true,
  },
  zip_code: {
    label: 'Zip Code',
    data: '',
    required: true,
  },
  source: {
    label: 'Where Did You Hear About Us?',
    data: '',
  },
  comments: {
    label: 'Comments',
    data: '',
    type: 'textarea'
  },
})

function sendEmail() {
  const mail = useMail()

  if (!dataIsValid()) return

  try {
    mail.send({
      from: getName(),
      subject: getSubject(),
      html: getBody()
    })
    success()
  }
  catch (error) {
    console.log(error)
    error()
  }
}

function success() {
  Object.values(data.value).forEach(item => item.data = '')

  successSend.value = true
  setTimeout(() => {
    successSend.value = false
  }, 3000)
}

function error() {
  errorSend.value = true
  setTimeout(() => {
    errorSend.value = false
  }, 3000)
}

function getName() {
  const name = data.value.name.data

  if (name === '') return '[No Name]'
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function getSubject() {
  switch (data.value.interest.data) {
    case "I want to learn more about FIA":
      return `${getName()} Wants To Learn More About FIA`
    case "I need help":
      return `${getName()} Wants Help`
    case "I know someone who needs help":
      return `${getName()} Knows Someone Who Needs Help`
    case "I want to volunteer":
      return `${getName()} Wants To Volunteer`
    default:
      return `${getName()} Wants To Learn More About FIA`
  }
}

function getBody() {
  const bodyStyle = 'font-size: 20px; padding: 10px;'
  const itemStyle = 'margin-bottom: 20px;'
  const labelStyle = 'font-weight: bold;'
  const valueStyle = 'background-color: #f5f5f5; padding: 5px; border-radius: 5px;'
  let html = ''

  Object.values(data.value).forEach((item, index) => {
    if (index !== 0) 
      html += `<div style="${itemStyle}">
                <span style="${labelStyle}">${item.label}: </span>
                <span style="${valueStyle}">${item.data}</span>
              </div>`
  })

  return `<html>
            <head></head>
            <div style="${bodyStyle}">
              ${html}
            </div>
          </html>`
}

function dataIsValid() {
  const requiredFields = Object.values(data.value).filter(item => item.required)

  for (let i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].data === '') {
      dataValid.value = false
      return false
    }
  }

  return true
}
</script>
