<template>
  <page-max-1920>
    <page-header>
      <fia-logo />
      <img src="~/assets/images/logos/fia-contact-text.png" class="px-8 max-h-28">
    </page-header>
    <page-text-wrapper>
      <div class="w-full flex flex-col-reverse xl:flex-row">
        <div class="basis-1/2">
          <page-sub-header class="mt-12 xl:mt-0">
            Contact Form
          </page-sub-header>
          <page-text class="flex flex-col items-center gap-8 mt-8">
            <page-input v-for="item in data" :label="item.label" :type="item.type" v-model:data="item.data" :options="item.options"/>
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

const data = ref({
  interest: {
    label: 'Interest',
    data: '',
    type: 'select',
    options: [
      "I'm interested in...",
      "I need help",
      "I know someone who needs help",
      "I want to volunteer",
    ]
  },
  name: {
    label: 'Name',
    data: ''
  },
  email: {
    label: 'Email',
    data: ''
  },
  phone: {
    label: 'Phone',
    data: ''
  },
  address: {
    label: 'Address',
    data: ''
  },
  city: {
    label: 'City',
    data: ''
  },
  state: {
    label: 'State',
    data: ''
  },
  zip_code: {
    label: 'Zip Code',
    data: ''
  },
  source: {
    label: 'Source',
    data: ''
  },
  comments: {
    label: 'Comments',
    data: '',
    type: 'textarea'
  },
})
</script>
