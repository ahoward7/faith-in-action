<template>
  <div class="bar absolute z-20 right-0 top-16 outline-none">
    <div class="flex flex-col gap-4 bg-fia-black text-fia-white text-lg font-semibold pt-2 pb-8 px-8 rounded-bl-lg">
      <fia-navbar-item to="/" @click="closeSidebar">Home</fia-navbar-item>
      <fia-navbar-item to="/about" @click="closeSidebar">About Us</fia-navbar-item>
      <fia-navbar-item to="/impact" @click="closeSidebar">Our Impact</fia-navbar-item>
      <fia-navbar-item to="/services" @click="closeSidebar">Services</fia-navbar-item>
      <fia-navbar-item to="/help" @click="closeSidebar">Need Help?</fia-navbar-item>
      <fia-navbar-item to="/volunteer" @click="closeSidebar">Volunteer</fia-navbar-item>
      <fia-navbar-item to="/testimonials" @click="closeSidebar">Testimonials</fia-navbar-item>
      <fia-navbar-item to="/resources" @click="closeSidebar">Resources</fia-navbar-item>
      <fia-navbar-item to="/contact" @click="closeSidebar">Contact Us</fia-navbar-item>
      <fia-button-donate />
    </div>
  </div>
</template>

<script setup>
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
