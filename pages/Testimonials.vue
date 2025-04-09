<template>
  <div>
    <PageHeader>
      <img src="~/assets/images/headers/Testimonials.png" class="max-w-16 sm:max-w-28">
      Testimonials
    </PageHeader>
    <PageMax1600>
      <PageTextWrapper>
        <PageSubHeader>
          From Our Clients
        </PageSubHeader>
        <div class="w-full py-4">
          <FiaTestimonial
            v-for="testimonial, index in clientTestimonials"
            :key="testimonial.name"
            :name="testimonial.name"
            :text="testimonial.text" :wrapper-class="index % 2 === 0 ? '' : 'items-end'"
            :testimonial-class="index % 2 === 0 ? 'border-fia-yellow' : 'border-fia-black'" class="my-2 lg:my-6"
          />
        </div>
        <PageSubHeader>
          From Our Volunteers
        </PageSubHeader>
        <div class="w-full py-4">
          <FiaTestimonial
            v-for="testimonial, index in volunteerTestimonials"
            :key="testimonial.name"
            :name="testimonial.name"
            :text="testimonial.text" :wrapper-class="index % 2 === 0 ? '' : 'items-end'"
            :testimonial-class="index % 2 === 0 ? 'border-fia-yellow' : 'border-fia-black'" class="my-2 lg:my-6"
          />
        </div>
      </PageTextWrapper>
    </PageMax1600>
  </div>
</template>

<script setup>
import { clientTestimonials, volunteerTestimonials } from '~/utils/constants'
</script>
