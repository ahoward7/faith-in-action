<template>
  <fia-footer-section class="flex-col items-center gap-16">
    <div class="flex flex-col gap-6">
      <div class="text-md md:text-lg lg:text-xl text-fia-yellow font-semibold" v-for="info in contactInfo">
        {{ info }}
      </div>
      <div class="flex justify-center items-center my-2 lg:my-4">
        <img src="~/assets/images/logos/facebook.png" class="h-16" />
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
