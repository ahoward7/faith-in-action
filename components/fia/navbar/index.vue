<template>
  <page-max-1920 class="sticky top-0 z-50 bg-fia-black">
    <div class="relative min-h-20 flex justify-center items-center py-4">
      <nuxt-link to="/" class="absolute left-0">
        <img src="~/assets/images/logos/fia-logo.png" class="h-16 md:h-20 xl:h-16 pl-1" />
      </nuxt-link>
      <div class="hidden md:flex justify-center flex-col xl:flex-row gap-6 xl:gap-12">
        <div class="flex justify-center gap-10 xl:gap-12">
          <fia-navbar-item v-for="item in topItems" :key="item.name" :to="item.url">
            {{ item.name }}
          </fia-navbar-item>
        </div>
        <div class="flex justify-center gap-10 xl:gap-12">
          <fia-navbar-item v-for="item in bottomItems" :key="item.name" :to="item.url">
            {{ item.name }}
          </fia-navbar-item>
        </div>
      </div>
      <div class="hidden md:absolute md:block right-0">
        <fia-button-donate class="mr-4"/>
      </div>
      <div class="md:hidden">
        <img src="~/assets/images/logos/fia-text-white-transparent.png" class="h-12 pr-4">
      </div>
      <div class="bar-focus absolute md:hidden right-0" tabindex="0" @focusout="closeSidebar">
        <img src="~/assets/images/fia-hamburger.png" class="h-12 pr-4 cursor-pointer" @click="openSidebar">
        <fia-navbar-side @close-sidebar="closeSidebar"></fia-navbar-side>
      </div>
    </div>
  </page-max-1920>
</template>

<script setup>
import { navItems } from '~/utils/constants'
const topItems = navItems.slice(0, navItems.length/2 + 1)
const bottomItems = navItems.slice(navItems.length/2 + 1)

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
