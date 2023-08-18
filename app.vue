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
    const offset = window.innerHeight / 4
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

.fu {
  opacity: 0;
}

.fl {
  opacity: 0;
}

.fr {
  opacity: 0;
}

.fade-up {
  animation: fade-up 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.fade-left {
  animation: fade-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.fade-right {
  animation: fade-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
