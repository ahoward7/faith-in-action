<template>
  <page-max-1920>
    <page-header>
      Testimonials
    </page-header>
    <page-text-wrapper>
      <page-sub-header>
        From Our Clients
      </page-sub-header>
      <div class="w-full py-4">
        <fia-testimonial v-for="testimonial, index in clientTestimonials" :name="testimonial.name" :text="testimonial.text" :wrapper-class="index % 2 === 0 ? '' : 'items-end'" :testimonial-class="index % 2 === 0 ? 'border-fia-yellow' : 'border-fia-black'" class="my-6" />
      </div>
      <page-sub-header>
        From Our Volunteers
      </page-sub-header>
      <div class="w-full py-4">
        <fia-testimonial v-for="testimonial, index in volunteerTestimonials" :name="testimonial.name" :text="testimonial.text" :wrapper-class="index % 2 === 0 ? '' : 'items-end'" :testimonial-class="index % 2 === 0 ? 'border-fia-yellow' : 'border-fia-black'" class="my-6" />
      </div>
    </page-text-wrapper>
  </page-max-1920>
</template>

<script setup>
import { clientTestimonials, volunteerTestimonials } from '~/utils/constants';
</script>
