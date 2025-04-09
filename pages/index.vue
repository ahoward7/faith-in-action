<template>
  <div>
    <div class="flex flex-col">
      <PageMax1600 class=" my-16">
        <div class="grid grid-cols-2">
          <div class="flex flex-col gap-8 justify-center">
            <div class="font-nexa text-5xl text-fia-black">
              <span>A</span>
              <span> Neighbor<span class="font-inter lg:-mx-1">'</span>s</span>
              <PageYellowText> Independence</PageYellowText>
              <br>
              <span>Depends On</span>
              <PageYellowText> You</PageYellowText>
            </div>
            <div class="max-w-[700px] text-xl text-balance leading-8">
              <p>
                Faith in Action STNY is a coalition of congregations, civic groups,
                and individuals working together to serve older adults who need a little assistance
                to continue living independently.
              </p>
              <p class="mt-4">
                This support is provided at <PageYellowText class="font-bold">
                  no charge
                </PageYellowText> to the
                recipient by caring volunteers, selflessly giving their time and compassion to others.
                We seek to provide <PageYellowText class="font-bold">
                  volunteer services
                </PageYellowText> to older adults
                who live at home and are in need of assistance.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-8">
            <fia-logo class="w-64 shimmer" alt="FIA Logo" />
            <img
              src="~/assets/images/logos/fia-text-transparent.png" class="w-[400px]"
              alt="Faith in Action Text Logo"
            >
          </div>
        </div>
      </PageMax1600>
      <PageMax1600 class="bg-fia-yellow/10 my-16 py-16">
        <div class="font-nexa text-5xl text-center text-fia-yellow mb-16">
          Our Services
        </div>
        <div class="max-w-[1200px] grid grid-cols-3">
          <div class="flex flex-col items-center bg-white px-16 py-12 rounded-xl shadow-lg">
            <img src="~/assets/images/services/Transportation.png" class="max-w-40">
            <div class="text-3xl text-fia-black font-bold font-nexa">
              Transportation
            </div>
            <span class="mt-4 text-balance text-center text-gray-500">We can provide rides to medical appointments, grocery shopping, and other errands.</span>
          </div>
        </div>
      </PageMax1600>
      <!--
      <div class="container w-full flex justify-evenly sm:px-8 py-8 lg:py-16 xl:py-24 3xl:py-32">
        <div class="hidden md:block content-center">
          <div class="w-fit h-full mx-auto content-center image-container max-h-[240px] lg:max-h-[300px] xl:max-h-[100%]">
            <img src="~/assets/images/logos/Services.png" alt="Faith In Action Services" class="object-cover"
              loading="lazy" />
          </div>
        </div>
        <div class="flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
          <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-yellow whitespace-nowrap">Our Services</div>
          <div class="max-w-[980px] grid lg:grid-cols-2 gap-8 lg:gap-16 text-xl/6 lg:text-2xl/8 xl:text-3xl/12">
            <div class="flex flex-col gap-4">
              <fia-services-bullet>Transportation</fia-services-bullet>
              <fia-services-bullet>Friendly Visits</fia-services-bullet>
              <fia-services-bullet>Home Repairs</fia-services-bullet>
              <fia-services-bullet>Housekeeping</fia-services-bullet>
            </div>
            <div class="flex justify-center items-center">
              <fia-button-home to="/services" aria-label="Learn more about our services">Learn More</fia-button-home>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-col 2xl:flex-row justify-center items-center gap-8 xl:gap-16 3xl:gap-32 py-8 lg:py-16 xl:py-24 3xl:py-32 bg-fia-yellow">
        <div class="flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
          <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-black">Volunteer</div>
          <div class="flex flex-col gap-8 items-center bg-fia-white px-4 pt-4 pb-8 rounded-xl">
            <div
              class="w-[300px] xl:w-[500px] text-center max-w-[980px] text-xl/6 lg:text-2xl/8 xl:text-3xl/12 text-balance">
              Learn about different ways you can serve the older generation.
            </div>
            <fia-button-home to="/volunteer" aria-label="Sign up to volunteer">
              Sign Up
            </fia-button-home>
          </div>
        </div>
        <div>
          <img src="~/assets/images/logos/Heart.png" alt="Faith In Action Heart"
            class="h-28 xl:h-40 3xl:h-60 object-cover" loading="lazy" />
        </div>
        <div class="flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
          <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-black">Donate</div>
          <div class="flex flex-col gap-8 items-center bg-fia-white px-4 pt-4 pb-8 rounded-xl">
            <div
              class="w-[300px] xl:w-[500px] text-center max-w-[980px] text-xl/6 lg:text-2xl/8 xl:text-3xl/12 text-balance">
              Help those in need by supporting us with a donation.
            </div>
            <fia-button-home target="_blank" to="https://www.paypal.com/donate/?hosted_button_id=PLDCK2H2BJ7U2"
              aria-label="Donate to our cause">
              Donate
            </fia-button-home>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  background-image: url('~/assets/images/little-pluses.png');
}

.image-container img {
  max-height: 100%;
  max-width: 85%;
  object-fit: cover;

  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 90%);
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 90%);
}

.container {
  max-width: 90%;
  contain: content;
}

.shimmer {
  color: grey;
  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/350% 100%;
  animation: shimmer 5s .5s infinite, rotate 1.5s .8s;
}

@keyframes shimmer {
  50% {
    mask-position: left;
  }

  100% {
    mask-position: left;
  }
}

@keyframes rotate {
  30% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
