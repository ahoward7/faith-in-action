<template>
  <PageText class="flex flex-col md:flex-row md:gap-8">
    <div class="flex gap-4">
      <div class="shrink-0 h-8 md:h-10 w-8 md:w-10 flex justify-center items-center font-bold text-white md:text-xl bg-gradient-to-br from-fia-yellow to-fia-red rounded-full">
        {{ number }}
      </div>
      <span class="md:hidden">
        <slot name="header" />
      </span>
    </div>
    <div class="w-full">
      <span class="hidden md:inline">
        <slot name="header" />
      </span>
      <slot />
    </div>
  </PageText>
</template>

<script setup lang="ts">
defineProps({
  number: Number,
})
</script>
