<template>
  <div class="max-w-sm 2xl:max-w-2xl grow flex flex-col items-center gap-10 p-4 lg:p-8 rounded-3xl">
    <div class="shrink-0 max-w-1200 w-full text-2xl lg:text-4xl 2xl:text-5xl" >
      <slot name="header"/>
    </div>
    <div class="flex justify-center items-center 2xl:my-20">
      <fia-button-home :to="anchor">
        <slot name="button"/>
      </fia-button-home>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  anchor: String,
})
const { anchor } = props
</script>
