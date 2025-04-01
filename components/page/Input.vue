<template>
  <input
    v-model="modelValue"
    class="w-full text-xl bg-fia-grey p-2 rounded-md"
    :class="invalid ? 'bg-fia-red' : 'bg-fia-black'"
    :name="label"
    @focusin="invalid = false"
    @focusout="checkValid()"
  >
</template>

<script setup>
const modelValue = defineModel()
</script>
