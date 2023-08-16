<template>
  <div class="w-full flex justify-center">
    <div class="max-w-128 w-full">
      <div class="text-2xl font-bold mb-2">{{ label }}</div>
      <select
        v-if="type === 'select'"
        :value="data"
        @input="emit('update:data', $event.target.value)"
        class="max-w-128 w-full text-xl bg-fia-grey p-2 rounded-md"
      >
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
      <textarea 
        v-else-if="type === 'textarea'"
        type="text" :value="data"
        @input="emit('update:data', $event.target.value)"
        class="max-w-128 h-40 w-full text-xl bg-fia-grey p-2 rounded-md"
      />
      <input
        v-else type="text"
        :value="data"
        @input="emit('update:data', $event.target.value)"
        @focusin="focusOut = false"
        @focusout="focusOut = true"
        class="max-w-128 w-full text-xl bg-fia-grey p-2 rounded-md"
        :class="required && focusOut && data.length === 0 ? 'bg-fia-grey-red' : 'bg-fia-black'"
      />
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
  },
  required: {
    type: Boolean,
    default: false
  }
})

const focusOut = ref(false)
</script>
