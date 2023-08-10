<template>
  <div class="basis-1/2 flex flex-col gap-4 md:gap-8 3xl:gap-20 items-center 2xl:mx-20">
    <div class="h-20 sm:h-32 max-w-3xl 2xl:max-w-none">
      <slot />
    </div>
    <fia-volunteer-box>
      <template v-slot:header>{{ header }}</template>
      <template v-slot:button>{{ button }}</template>
    </fia-volunteer-box>
  </div>
</template>

<script setup>
const props = defineProps({
  header: String,
  button: String,
})
const { header, button } = props
</script>
