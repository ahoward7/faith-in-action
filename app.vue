<template>
  <nuxt-layout class="relative">
    <nuxt-loading-indicator :height="5" />
    <fia-navbar class="font-inter" />
    <nuxt-page class="font-inter" />
    <fia-footer class="font-inter" />
  </nuxt-layout>
</template>

<script setup>
onMounted(() => {
  const offset = window.innerHeight / 6
  document.querySelectorAll('.fu').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - offset) {
      el.classList.add('fade-up')
    }
  })
  document.querySelectorAll('.fl').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - offset) {
      el.classList.add('fade-left')
    }
  })
  document.querySelectorAll('.fr').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - offset) {
      el.classList.add('fade-right')
    }
  })

  window.addEventListener('scroll', () => {
    const offset = window.innerHeight / 6
    document.querySelectorAll('.fu').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - offset) {
        el.classList.add('fade-up')
      }
    })
    document.querySelectorAll('.fl').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - offset) {
        el.classList.add('fade-left')
      }
    })
    document.querySelectorAll('.fr').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - offset) {
        el.classList.add('fade-right')
      }
    })
  })
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: theme('colors.fia-white');
  background-image: url("~/assets/images/little-pluses.png");
}
</style>
