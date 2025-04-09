<template>
  <div class="w-full flex flex-col sm:text-xl" :class="wrapperClass">
    <div class="max-w-2xl rounded-2xl border-4 border-dotted px-6 py-5 leading-5 sm:leading-10"
      :class="testimonialClass">
      {{ text }}
    </div>
    <div class="py-2 sm:py-6 px-12">
      - {{ name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  testimonialClass: {
    type: String,
    default: '',
  },
});

const { name, text, wrapperClass, testimonialClass } = toRefs(props);
</script>
