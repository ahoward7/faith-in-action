<template>
  <page-max-1920>
    <page-header>
      <div>
        <img src="~/assets/images/headers/fia-testimonials.png" class="px-4 xl:px-8 max-h-64">
      </div>
      <div>
        <img src="~/assets/images/logos/fia-testimonials-text.png" class="px-4 xl:px-8 max-h-24">
      </div>
    </page-header>
    <page-text-wrapper>
      <page-sub-header>
        From Our Clients
      </page-sub-header>
      <div class="w-full py-4">
        <fia-testimonial v-for="testimonial, index in clientTestimonials" :name="testimonial.name" :text="testimonial.text" :wrapperClass="index % 2 === 0 ? '' : 'items-end'" :testimonialClass="index % 2 === 0 ? 'border-fia-yellow' : 'border-fia-black'" class="my-6" />
      </div>
      <page-sub-header>
        From Our Volunteers
      </page-sub-header>
      <div class="w-full py-4">
        <fia-testimonial v-for="testimonial, index in volunteerTestimonials" :name="testimonial.name" :text="testimonial.text" :wrapperClass="index % 2 === 0 ? '' : 'items-end'" :testimonialClass="index % 2 === 0 ? 'border-fia-yellow' : 'border-fia-black'" class="my-6" />
      </div>
    </page-text-wrapper>
  </page-max-1920>
</template>

<script setup>
import { clientTestimonials, volunteerTestimonials } from '~/utils/constants';
</script>
