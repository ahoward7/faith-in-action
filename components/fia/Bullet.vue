<template>
  <page-text v-if="number" class="flex flex-col lg:flex-row justify-start items-center gap-8">
    <div class="shrink-0 h-9 w-9 flex justify-center items-center text-2xl font-bold bg-fia-yellow rounded-full">
      {{ number }}.
    </div>
    <div class="w-full">
      <slot/>
    </div>
  </page-text>
  <page-text v-else-if="label">
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap gap-2 items-center">
        <div class="shrink-0 text-xl font-bold py-1 rounded-xl">
          {{ label }}:
        </div>
        <div>
          <slot/>
        </div>
      </div>
    </div>
  </page-text>
  <page-text v-else class="flex justify-start items-center gap-8">
    <div class="shrink-0 h-4 w-4 bg-fia-black rounded-full" />
    <div class="w-full">
      <slot/>
    </div>
  </page-text>
</template>

<script setup>
const props = defineProps({
  number: {
    type: Number,
    required: false
  },
  label: {
    type: String,
    required: false
  }
})
const { number } = props
</script>
