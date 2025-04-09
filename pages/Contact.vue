<template>
  <div>
    <PageHeader>
      <img src="~/assets/images/headers/ContactUs.png" class="max-w-28">
      Contact Us
    </PageHeader>
    <PageMax1600>
      <div class="w-full flex justify-center py-10">
        <div class="max-w-[1200px] w-full flex flex-col items-center gap-4 sm:gap-8">
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div class="w-full flex flex-col items-center gap-8">
                <PageSubHeader>Contact Form</PageSubHeader>

                <div class="w-full">
                  <PageInput
                    v-model="interest" placeholder="Reason For Contact"
                    :invalid="submitted && errors.interest"
                  />
                  <p v-if="submitted && errors.interest" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.interest }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="first" placeholder="First Name" :invalid="submitted && errors.first" />
                  <p v-if="submitted && errors.first" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.first }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="last" placeholder="Last Name" :invalid="submitted && errors.last" />
                  <p v-if="submitted && errors.last" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.last }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="email" placeholder="Email" :invalid="submitted && errors.email" />
                  <p v-if="submitted && errors.email" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.email }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="phone" placeholder="Phone" :invalid="submitted && errors.phone" />
                  <p v-if="submitted && errors.phone" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.phone }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="address" placeholder="Address" :invalid="submitted && errors.address" />
                  <p v-if="submitted && errors.address" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.address }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="city" placeholder="City" :invalid="submitted && errors.city" />
                  <p v-if="submitted && errors.city" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.city }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="state" placeholder="State" :invalid="submitted && errors.state" />
                  <p v-if="submitted && errors.state" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.state }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="zip" placeholder="ZIP Code" :invalid="submitted && errors.zip" />
                  <p v-if="submitted && errors.zip" class="h-3 mt-1 pl-2 text-[red]">
                    {{ errors.zip }}
                  </p>
                </div>

                <div class="w-full">
                  <PageInput v-model="comments" placeholder="Comments" />
                </div>

                <div v-if="successSend" class="text-center bg-fia-green py-1 px-2 rounded-md">
                  Message sent
                </div>
                <div v-if="errorSend" class="text-center bg-[red] py-1 px-2 rounded-md">
                  Error sending message, please
                  contact us directly
                </div>

                <FiaButton @click="submitForm">
                  Submit
                </FiaButton>
              </div>
            </div>
            <div class="order-first lg:order-last">
              <PageSubHeader>Contact Info</PageSubHeader>
              <div class="flex justify-center">
                <div
                  class="flex flex-col gap-4 bg-fia-yellow/10 border-2 border-fia-yellow/40 px-4 py-3 mt-8 border-primary rounded-2xl"
                >
                  <fia-bullet v-for="info in contactInfo" :key="info.label" :label="info.label">
                    {{ info.value }}
                  </fia-bullet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageMax1600>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { contactInfo } from '~/utils/constants'

const submitted = ref(false)
const successSend = ref(false)
const errorSend = ref(false)

const schema = yup.object({
  first: yup.string().required('First Name is required'),
  last: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^\+?\d{10,15}$/, 'Invalid phone number').required('Phone is required'),
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
    comments: '',
  },
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

function clearForm() {
  interest.value = ''
  first.value = ''
  last.value = ''
  email.value = ''
  phone.value = ''
  address.value = ''
  city.value = ''
  state.value = ''
  zip.value = ''
  comments.value = ''

  submitted.value = false
}

function submitForm() {
  submitted.value = true
  handleSubmit(async (values: any) => {
    try {
      await $fetch('/email', { method: 'POST', body: values })
      successSend.value = true
      clearForm()
    }
    catch (e) {
      console.error(e)

      errorSend.value = true
    }
  })()
}
</script>
