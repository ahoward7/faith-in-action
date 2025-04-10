<template>
  <div class="sticky top-0 z-50 px-8 bg-fia-black border-b-2 border-fia-yellow">
    <div class="relative h-16 md:h-20 flex justify-between gap-4 items-center">
      <NuxtLink to="/" class="shrink-0 left-0">
        <img src="~/assets/images/logos/fia-logo.png" class="h-12 md:h-16 pl-1">
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
      <div class="shrink-0 md:hidden">
        <img src="~/assets/images/logos/fia-text-white-transparent.png" class="h-10">
      </div>
      <div ref="sidebar" class="relative z-0 md:hidden right-0" tabindex="0">
        <img src="~/assets/images/fia-hamburger.png" class="h-8 cursor-pointer" @click="expanded = !expanded">
        <FiaNavbarSide class="duration-300 ease-in-out" :class="expanded ? 'h-[354px] top-[48px]' : 'h-0 z-[-1] top-[40px]'" @close-sidebar="expanded = false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { navItems } from '~/utils/constants'

const route = useRoute()

const expanded = ref(false)

const sidebar = ref(null)

onClickOutside(sidebar, () => {
  expanded.value = false
})

function isActive(url) {
  return route.path === url
}
</script>
