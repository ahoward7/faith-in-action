<template>
  <div>
    <PageHeader>
      <img src="~/assets/images/headers/AboutUs.png" class="max-w-12 md:max-w-20">
      About Us
    </PageHeader>
    <PageMax1600>
      <PageTextWrapper>
        <PageSubHeader>Our Story</PageSubHeader>
        <PageText v-for="text in historyText" :key="text">
          {{ text }}
        </PageText>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>Our Team</PageSubHeader>
        <div class="w-full flex justify-center">
          <PageTextWrapper>
            <img src="~/assets/images/angela.png" class="h-60 rounded-3xl border-4 border-fia-black">
            <div class="text-fia-yellow font-nexa text-4xl">
              Angela Jenkins
            </div>
            <PageText class="max-w-[500px] text-blance">
              Angela Jenkins is the office manager at Faith in Action. She has been with
              FIA since 2016. Angela oversees daily operations and efficient functioning of the office, provides
              executive support, and continues to work closely with our volunteers and recipients. Angela
              lives in Hornell with her husband, son, and their dog.
            </PageText>
          </PageTextWrapper>
        </div>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>Our Impact</PageSubHeader>
        <PageText>
          Since we began in 1995 we have helped thousands of older adults remain in their homes by providing
          non-hands-on
          services.
        </PageText>
        <PageText>
          Faith in Action connects older adults in need with caring volunteers. On average, our volunteers
          accept one assignment each week which would add up to about 6 hours per month. As a
          volunteer, you would have the opportunity to accept an assignment according to your
          availability.
        </PageText>
        <PageText>
          One of our meaningful and rewarding experiences-
        </PageText>
        <PageText>
          We had a recipient whose daughter lived in Pennsylvania. It was very important for him to stay
          at home, he was very comfortable in his house and loved his neighbors. His daughter contacted
          us asking if we could help with medical transportation, he had a recurring bi-weekly blood test
          that he had to have. Our volunteers jumped right into action and before long they were grocery
          shopping for him, too. The volunteers would scoop his requests up as soon as they were put on
          the schedule. We would laugh about it, saying it’s a race to see who gets to help him. Everyone
          loved him! We served him for 4 years and sadly he passed away. He is greatly missed, but it
          was an honor to serve him. With the help of Faith in Action he was able to do exactly what he
          wanted to do, stay in his own home. His daughter still calls us occasionally to say thank you and
          to tell us how much she appreciates our volunteers and staff.
        </PageText>
        <PageText>
          <FiaTotalServicesChart />
        </PageText>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>Board of Directors</PageSubHeader>
        <PageText class="w-full flex justify-center flex-wrap gap-8">
          <div
            v-for="member in boardMembers" :key="member"
            class="w-76 shrink-0 text-center bg-fia-yellow py-2 px-4 rounded-md"
          >
            {{ member }}
          </div>
        </PageText>
      </PageTextWrapper>
    </PageMax1600>
  </div>
</template>

<script setup>
import { boardMembers } from '~/utils/constants'

const historyText = [
  'Faith in Action Steuben was founded in Hornell, NY, in 1995. Initially, we served the towns of Hornell, Arkport, and Canisteo. By 2003, our reach expanded into western Steuben, and by 2007, we had grown to serve eastern Steuben, including Painted Post and Corning. What started as support for just three zip codes soon grew to encompass most of Steuben County.',
  'In 2023, discussions began about another expansion—this time into a new county where our services were in high demand. After much effort, we successfully extended our reach into Chemung County at the start of 2024. Soon after, mid-year, we were approached to take over the Greater Bath Area in Steuben, further strengthening our presence and impact.',
  'Through every name change and geographic expansion, one thing has remained constant—our unwavering commitment to helping older adults continue to live independently. As our journey continues, we remain dedicated to serving those in need with compassion and care.',
]
</script>
