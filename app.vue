<template>
  <nuxt-layout>
    <nuxt-loading-indicator :height="5" />
    <fia-navbar class="rem-light" />
    <nuxt-page class="rem"/>
    <fia-footer class="rem-light" />
  </nuxt-layout>
</template>

<script setup>
onMounted(() => {
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
@import './assets/css/transition.css';

body {
  margin: 0;
  padding: 0;
  background-color: theme('colors.fia-white');
}

@font-face {
  font-family: 'Rem';
  src: local('Rem'), url(./assets/fonts/REM/static/REM-Regular.ttf) format('truetype');
}
.rem {
  font-family: 'Rem';
}

@font-face {
  font-family: 'RemLight';
  src: local('RemLight'), url(./assets/fonts/REM/static/REM-Light.ttf) format('truetype');
}
.rem-light {
  font-family: 'RemLight';
}
</style>
