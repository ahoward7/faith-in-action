<template>
  <fia-text class="max-w-sm 2xl:max-w-xl grow flex flex-col 2xl:flex-row items-center gap-8 rounded-3xl">
    <div>
      <slot name="header"/>
    </div>
    <div class="flex justify-center items-center">
      <fia-button-home :to="anchor">
        <slot name="button"/>
      </fia-button-home>
    </div>
  </fia-text>
</template>

<script setup>
const props = defineProps({
  anchor: String,
})
const { anchor } = props
</script>
