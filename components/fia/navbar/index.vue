<template>
  <div class="relative min-h-20 flex justify-center items-center bg-fia-black py-4">
    <nuxt-link to="/" class="absolute left-0">
      <img src="~/assets/images/logos/fia-logo-transparent.png" class="h-16 lg:h-24 2xl:h-16 pl-1" />
    </nuxt-link>
    <div class="hidden lg:flex justify-center flex-col 2xl:flex-row">
      <div class="flex justify-center">
        <fia-navbar-item to="/">Home</fia-navbar-item>
        <fia-navbar-item to="/about">About Us</fia-navbar-item>
        <fia-navbar-item to="/impact">Our Impact</fia-navbar-item>
        <fia-navbar-item to="/services">Services</fia-navbar-item>
        <fia-navbar-item to="/help">Need Help?</fia-navbar-item>
      </div>
      <div class="flex justify-center">
        <fia-navbar-item to="/volunteer">Volunteer</fia-navbar-item>
        <fia-navbar-item to="/testimonials">Testimonials</fia-navbar-item>
        <fia-navbar-item to="/resources">Resources</fia-navbar-item>
        <fia-navbar-item to="/contact">Contact Us</fia-navbar-item>
      </div>
    </div>
    <div class="hidden lg:absolute lg:block right-0">
      <fia-navbar-item to="/" class="bg-fia-blue">Donate</fia-navbar-item>
    </div>
    <div class="lg:hidden">
      <img src="~/assets/images/logos/fia-text-white-transparent.png" class="h-12 pr-4">
    </div>
    <div class="bar-focus absolute lg:hidden right-0" tabindex="0" @focusout="closeSidebar">
      <img src="~/assets/images/fia-hamburger.png" class="h-12 pr-4 cursor-pointer" @click="openSidebar">
      <fia-navbar-side @close-sidebar="closeSidebar"></fia-navbar-side>
    </div>
  </div>
</template>

<script setup>
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
