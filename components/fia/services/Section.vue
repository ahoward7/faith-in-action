<template>
  <div class="w-full flex lg:flex-row gap-10 lg:gap-20" :class="flexClass">
    <div class="basis-1/2 flex flex-col items-center justify-center">
      <div class="w-full text-3xl text-fia-yellow font-bold mb-4">
        <slot name="left-header" />
      </div>
      <slot name="left" />
    </div>
    <div class="basis-1/2 flex flex-col items-center justify-center">
      <div class="w-full text-3xl text-fia-yellow font-bold mb-4">
        <slot name="right-header" />
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  flexClass: {
    type: String,
    default: 'flex-col'
  }
})
</script>
