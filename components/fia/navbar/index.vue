<template>
  <div class="sticky top-0 z-50 px-8 bg-fia-black border-b-2 border-fia-yellow">
    <div class="relative min-h-20 flex justify-between gap-4 items-center">
      <NuxtLink to="/" class="shrink-0 left-0">
        <img src="~/assets/images/logos/fia-logo.png" class="h-16 pl-1">
      </NuxtLink>
      <div class="hidden md:flex flex-wrap justify-center max-w-[500px] xl:max-w-none">
        <FiaNavbarItem v-for="item in navItems" :key="item.name" class="mx-4 xl:mx-6 my-1" :to="item.url">
          <span :class="isActive(item.url) ? 'text-fia-yellow' : ''">{{ item.name }}</span>
        </FiaNavbarItem>
      </div>
      <div class="hidden shrink-0 md:flex items-center gap-8 right-0">
        <FiaButtonFacebook />
        <FiaButtonDonate />
      </div>
      <div class="md:hidden">
        <img src="~/assets/images/logos/fia-text-white-transparent.png" class="h-12 pr-4">
      </div>
      <div class="bar-focus md:hidden right-0" tabindex="0" @focusout="closeSidebar">
        <img src="~/assets/images/fia-hamburger.png" class="h-12 pr-4 cursor-pointer" @click="openSidebar">
        <FiaNavbarSide @close-sidebar="closeSidebar" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { navItems } from '~/utils/constants'

const route = useRoute()

function isActive(url) {
  return route.path === url
}

function openSidebar() {
  const focus = document.querySelector('.bar-focus')
  const bar = document.querySelector('.bar')
  focus.focus()
  bar.style.height = '648px'
}

function closeSidebar() {
  const bar = document.querySelector('.bar')
  bar.style.height = '0px'
}
</script>
