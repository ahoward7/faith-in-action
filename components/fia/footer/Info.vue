<template>
  <fia-footer-section class="flex-col items-center gap-16 mr-4">
    <div class="flex flex-col gap-4 sm:gap-6">
      <div class="text-md md:text-lg lg:text-xl text-fia-yellow font-semibold" v-for="info in contactInfo">
        {{ info.value }}
      </div>
      <div class="flex justify-center items-center my-2 lg:my-4">
        <nuxt-link to="https://www.facebook.com/fiasteuben/" target="_blank" class="cursor">
          <img src="~/assets/images/logos/facebook.png" class="h-8 md:h-16" />
        </nuxt-link>
      </div>
      <div class="text-sm md:text-lg lg:text-xl text-fia-yellow font-semibold" v-for="info in bottomInformation">
        {{ info }}
      </div>
    </div>
  </fia-footer-section>
</template>

<script setup>
import { contactInfo } from '~/utils/constants';
const bottomInformation = [
  "Website by: Avery Howard",
]
</script>
