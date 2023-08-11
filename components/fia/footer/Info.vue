<template>
  <fia-footer-section class="flex-col items-center gap-16">
    <div class="flex flex-col gap-6">
      <div class="text-md md:text-lg lg:text-xl text-fia-yellow font-semibold" v-for="info in information">
        {{ info }}
      </div>
      <div class="flex justify-center items-center my-8 lg:my-16">
        <img src="~/assets/images/logos/facebook.png" class="h-16" />
      </div>
      <div class="text-sm md:text-lg lg:text-xl text-fia-yellow font-semibold" v-for="info in bottomInformation">
        {{ info }}
      </div>
    </div>
  </fia-footer-section>
</template>

<script setup>
const information = [
  "20 Broadway Mall PO Box 117, Hornell, NY 14843",
  "ar@fiasteuben.org",
  "Hornell: (607) 324-1138",
  "Corning: (607) 936-0941"
]
const bottomInformation = [
  "Website by: Avery Howard",
]
</script>
