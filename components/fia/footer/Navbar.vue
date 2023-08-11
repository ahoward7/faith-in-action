<template>
  <fia-footer-section class="items-center">
    <div class="flex flex-col gap-6 bg-fia-black text-fia-white text-md md:text-lg font-semibold p-8 rounded-bl-lg">
      <fia-navbar-item v-for="item in navItems" :key="item.name" :to="item.url">
        {{ item.name }}
      </fia-navbar-item>
      <fia-button-donate />
    </div>
  </fia-footer-section>
</template>

<script setup>
import { navItems } from '~/utils/constants'
</script>
