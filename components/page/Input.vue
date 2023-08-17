<template>
  <div class="w-full flex justify-center">
    <div class="max-w-128 w-full">
      <div class="text-2xl font-bold mb-2">{{ label }}</div>
      <select
        v-if="type === 'select'"
        :value="data"
        @input="emit('update:data', $event.target.value)"
        class="max-w-128 w-full text-xl bg-fia-grey p-2 rounded-md"
        :name="label"
      >
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
      <textarea 
        v-else-if="type === 'textarea'"
        type="text" :value="data"
        @input="emit('update:data', $event.target.value)"
        class="max-w-128 h-40 w-full text-xl bg-fia-grey p-2 rounded-md"
        :name="label"
      />
      <input
        v-else type="text"
        :value="data"
        @input="emit('update:data', $event.target.value)"
        @focusin="invalid = false"
        @focusout="checkValid()"
        class="max-w-128 w-full text-xl bg-fia-grey p-2 rounded-md"
        :class="invalid ? 'bg-fia-red' : 'bg-fia-black'"
        :name="label"
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

function checkValid() {
  if (props.required && props.data.length === 0) {
    invalid.value = true
  }
}

const invalid = ref(false)
</script>
