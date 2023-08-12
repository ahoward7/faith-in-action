<template>
  <page-max-1920>
    <page-header>
      <fia-logo />
      <img src="~/assets/images/logos/fia-about-text.png" class="px-8 max-h-32">
    </page-header>
    <page-text-wrapper>
      <page-sub-header>Our Story</page-sub-header>
      <page-text v-for="text in historyText" :key="text">{{ text }}</page-text>
    </page-text-wrapper>
    <page-text-wrapper>
      <page-sub-header>Our Team</page-sub-header>
      <div class="w-full flex flex-col lg:flex-row gap-16">
        <page-text-wrapper class="basis-1/2">
          <img src="~/assets/images/man-placeholder.jpg" class="h-60 rounded-3xl border-4 border-fia-black">
          <page-text>
            The year was 1995 when I first heard Tippy Irwin talk about a new program starting up that would help the elderly continue to live independently. That program was Interfaith Volunteer Caregivers Program (IVCP). Tippy was the inaugural direcotr of IVCP, and a very dynamic speaker! My lovely wife Kathy recalls that I leaned over to her and said "When we're not busy with kids anymore, I'd like to be involved with that group."
          </page-text>
          <page-text>
            Fast forward to 2003... the grant that is funding my position is running out, making it likely I'll be looking for employment in a few months. Kathy hears that Betty Jones, the then Executive Director of IVCP (which is transitioning it's name to "Faith in Action") is retiring and they are looking for a new director. Long story short, I was fortunate to get an interview and blessed to be hired as the Executive Director, starting the day after Labor Day, 2003! My wish from 1995 came true in a way I never would have expected! It is both humorous and humbling to look back and see how a sovereign God wove my disparate jobs and experiences together for His own purposes and on His own timetable!
          </page-text>
        </page-text-wrapper>
        <page-text-wrapper class="basis-1/2">
          <img src="~/assets/images/angela.png" class="h-60 rounded-3xl border-4 border-fia-black">
          <page-text>
            Angela Jenkins is the office manager at Faith in Action. She has been with FIA since 2016. Angela manages day-to-day operations, scheduling, and works closely with our recipients and volunteers. It will most likely be her friendly voice on the other end of the phone. Angela lives in Hornell with her husband, two sons, and their dog.
          </page-text>
        </page-text-wrapper>
      </div>
    </page-text-wrapper>
    <page-text-wrapper>
      <page-sub-header>Board of Directors</page-sub-header>
      <page-text class="w-full flex justify-center flex-wrap gap-8">
        <div v-for="member in boardMembers" :key="member" class="w-76 shrink-0 text-center bg-fia-yellow py-2 px-4 rounded-md">
          {{ member }}
        </div>
      </page-text>
    </page-text-wrapper>
  </page-max-1920>
</template>

<script setup>
import { boardMembers } from '~/utils/constants'
const historyText = [
  "Faith in Action Steuben County traces its roots back to January 1995 when it emerged as the 'Interfaith Volunteer Caregivers Program of the Greater Hornell Area.' This initiative was born out of the dedication of a compassionate group hailing from Hornell and its surrounding communities. This group recognized a significant issue: individuals were often discharged from the hospital before they were fully capable of tending to their own needs.",
  "From this fundamental concern, the concept of IVCP was conceived. After researching similar programs, the organization was established. In 2003, the program underwent a name change to 'Faith in Action of the Greater Hornell Area.' This name transitioned once more, reflecting its broader reach, to 'Faith in Action Steuben County.' The expansion of services to encompass Corning and the eastern section of the county occurred in the autumn of 2006.",
  "The inaugural year, 1995, saw an inspiring response with 75 individuals stepping up as volunteers, offering assistance to 60 recipients. These selfless volunteers collectively contributed 1,163 hours and covered 3,661 miles in the process.",
  "Fast forward twelve years to 2007, and the growth has been remarkable. The volunteer force swelled to 160, aiding over 500 individuals. Their dedication translated into an impressive 5,000 hours of service and a staggering 51,000 miles traveled.",
  "As the narrative progressed, the 2016 figures highlighted a continued upward trajectory. A team of 175 dedicated volunteers was now supporting 530 recipients, providing a substantial 6,600 service hours and covering an impressive 82,000 miles.",
]
</script>
