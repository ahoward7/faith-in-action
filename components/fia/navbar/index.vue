<template>
  <div class="relative flex justify-center items-center bg-fia-black py-4">
    <nuxt-link to="/" class="absolute left-0">
      <img src="~/assets/images/logos/fia-logo-transparent.png" class="h-16 lg:h-24 2xl:h-16 pl-1" />
    </nuxt-link>
    <div class="flex justify-center flex-col 2xl:flex-row">
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
    <div class="relative lg:absolute 2xl:relative right-0">
      <fia-navbar-item to="/" class="bg-fia-blue">Donate</fia-navbar-item>
    </div>
  </div>
</template>
