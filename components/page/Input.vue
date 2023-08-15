<template>
  <div class="w-full flex justify-center">
    <div class="max-w-128 w-full">
      <div class="text-2xl font-bold mb-2">{{ label }}</div>
      <select v-if="type === 'select'" :value="data" @input="emit('update:data', $event.target.value)" class="max-w-128 w-full text-xl bg-fia-grey border-2 border-fia-black p-2 rounded-md">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
      <textarea v-else-if="type === 'textarea'" type="text" :value="data" :placeholder="`${label}...`" @input="emit('update:data', $event.target.value)" class="max-w-128 h-40 w-full text-xl bg-fia-grey border-2 border-fia-black p-2 rounded-md" />
      <input v-else type="text" :value="data" :placeholder="`${label}...`" @input="emit('update:data', $event.target.value)" class="max-w-128 w-full text-xl bg-fia-grey border-2 border-fia-black p-2 rounded-md" />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:data'])
const props = defineProps({
  data: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'text'
  }
})
</script>
