<template>
  <div class="absolute z-20 right-[-32px] flex flex-col gap-4 bg-fia-black text-fia-white font-semibold pt-2 px-4 rounded-bl-md outline-none overflow-hidden">
    <fia-navbar-item v-for="item in navItems" :key="item.name" :to="item.url" class="justify-center" @click="emit('closeSidebar')">
      {{ item.name }}
    </fia-navbar-item>
    <fia-button-donate class="scale-90" />
  </div>
</template>

<script setup>
import { navItems } from '~/utils/constants'

const emit = defineEmits(['closeSidebar'])
</script>
