<template>
  <div class="bar absolute z-20 right-0 top-16 outline-none">
    <div class="flex flex-col gap-4 bg-fia-black text-fia-white text-lg font-semibold pt-2 pb-8 px-8 rounded-bl-lg">
      <fia-navbar-item to="/">Home</fia-navbar-item>
      <fia-navbar-item to="/about">About Us</fia-navbar-item>
      <fia-navbar-item to="/impact">Our Impact</fia-navbar-item>
      <fia-navbar-item to="/services">Services</fia-navbar-item>
      <fia-navbar-item to="/help">Need Help?</fia-navbar-item>
      <fia-navbar-item to="/volunteer">Volunteer</fia-navbar-item>
      <fia-navbar-item to="/testimonials">Testimonials</fia-navbar-item>
      <fia-navbar-item to="/resources">Resources</fia-navbar-item>
      <fia-navbar-item to="/contact">Contact Us</fia-navbar-item>
      <fia-button-donate />
    </div>
  </div>
</template>

<style scoped>
.bar {
  height: 0px;
  transition: height 0.5s ease;
  overflow: hidden;
}
</style>
