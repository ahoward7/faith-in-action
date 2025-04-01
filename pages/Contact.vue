<template>
  <page-max-1920>
    <page-header>
      <img src="~/assets/images/headers/ContactUs.png" class="max-w-20 lg:max-w-48" />
      Contact Us
    </page-header>
    <page-text-wrapper>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <div class="w-full flex flex-col items-center gap-8">
            <page-sub-header>Contact Form</page-sub-header>

            <div class="w-full">
              <page-input v-model="interest" placeholder="Reason For Contact" :invalid="submitted && errors.interest" />
              <p v-if="submitted && errors.interest" class="h-3 mt-1 pl-2 text-[red]">{{ errors.interest }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="first" placeholder="First Name" :invalid="submitted && errors.first" />
              <p v-if="submitted && errors.first" class="h-3 mt-1 pl-2 text-[red]">{{ errors.first }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="last" placeholder="Last Name" :invalid="submitted && errors.last" />
              <p v-if="submitted && errors.last" class="h-3 mt-1 pl-2 text-[red]">{{ errors.last }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="email" placeholder="Email" :invalid="submitted && errors.email" />
              <p v-if="submitted && errors.email" class="h-3 mt-1 pl-2 text-[red]">{{ errors.email }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="phone" placeholder="Phone" :invalid="submitted && errors.phone" />
              <p v-if="submitted && errors.phone" class="h-3 mt-1 pl-2 text-[red]">{{ errors.phone }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="address" placeholder="Address" :invalid="submitted && errors.address" />
              <p v-if="submitted && errors.address" class="h-3 mt-1 pl-2 text-[red]">{{ errors.address }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="city" placeholder="City" :invalid="submitted && errors.city" />
              <p v-if="submitted && errors.city" class="h-3 mt-1 pl-2 text-[red]">{{ errors.city }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="state" placeholder="State" :invalid="submitted && errors.state" />
              <p v-if="submitted && errors.state" class="h-3 mt-1 pl-2 text-[red]">{{ errors.state }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="zip" placeholder="ZIP Code" :invalid="submitted && errors.zip" />
              <p v-if="submitted && errors.zip" class="h-3 mt-1 pl-2 text-[red]">{{ errors.zip }}</p>
            </div>

            <div class="w-full">
              <page-input v-model="comments" placeholder="Comments" />
            </div>

            <div v-if="successSend" class="text-center bg-fia-green py-1 px-2 rounded-md">Message sent</div>
            <div v-if="errorSend" class="text-center bg-[red] py-1 px-2 rounded-md">Error sending message, please contact us directly</div>

            <fia-button-home @click="submitForm">Submit</fia-button-home>
          </div>

        </div>
        <div class="order-first lg:order-last">
          <page-sub-header>Contact Info</page-sub-header>
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

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { contactInfo } from '~/utils/constants'

const submitted = ref(false)
const successSend = ref(false)
const errorSend = ref(false)
const dataValid = ref(true)

const schema = yup.object({
  first: yup.string().required('First Name is required'),
  last: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^[+]?\d{10,15}$/, 'Invalid phone number').required('Phone is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP Code').required('ZIP Code is required'),
  interest: yup.string().required('Reason for contact is required'),
  comments: yup.string().nullable(),
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    interest: '',
    first: '',
    last: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    comments: ''
  }
})

const [interest] = defineField('interest')
const [first] = defineField('first')
const [last] = defineField('last')
const [email] = defineField('email')
const [phone] = defineField('phone')
const [address] = defineField('address')
const [city] = defineField('city')
const [state] = defineField('state')
const [zip] = defineField('zip')
const [comments] = defineField('comments')

function submitForm() {
  submitted.value = true
  handleSubmit(async (values: any) => {
    try {
      await $fetch('email', { query: { form: values }})

      successSend.value = true
    }
    catch (e) {
      console.error(e)

      errorSend.value = true
    }
  })()
}
</script>
