<template>
  <div class="bar absolute z-20 right-0 top-16 outline-none">
    <div class="flex flex-col gap-4 bg-fia-black text-fia-white text-lg font-semibold pt-2 pb-8 px-8 rounded-bl-lg">
      <fia-navbar-item v-for="item in navItems" :key="item.name" :to="item.url" class="justify-center" @click="closeSidebar">
        {{ item.name }}
      </fia-navbar-item>
      <fia-button-donate />
    </div>
  </div>
</template>

<script setup>
import { navItems } from '~/utils/constants';
const emit = defineEmits(['close-sidebar'])
function closeSidebar() {
  emit('close-sidebar')
}
</script>

<style scoped>
.bar {
  height: 0px;
  transition: height 0.5s ease;
  overflow: hidden;
}
</style>
