<template>
  <nuxt-layout>
    <nuxt-loading-indicator :height="5" />
    <fia-navbar class="rem-light" />
    <nuxt-page class="rem"/>
    <fia-footer class="rem-light" />
  </nuxt-layout>
</template>

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
</style>
