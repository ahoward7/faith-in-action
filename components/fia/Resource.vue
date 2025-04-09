<template>
  <NuxtLink target="_blank" :to="url" class="flex justify-center items-center object-contain cursor-pointer">
    <div class="thing hover:scale-105 duration-300" :class="imgClass">
      <slot class="" />
    </div>
  </NuxtLink to="">
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: 'https://nvcnetwork.org/',
  },
  imgClass: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.thing:hover {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
}
</style>
