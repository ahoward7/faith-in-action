<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-32 my-8 lg:my-16 xl:my-24 3xl:my-32">
      <fia-logo class="h-40 lg:h-80 xl:h-96 3xl:h-[450px] shimmer" alt="FIA Logo" />
      <img src="~/assets/images/logos/fia-text-transparent.png" class="h-20 lg:h-40 xl:h-56 3xl:h-72"
        alt="Faith in Action Text Logo">
    </div>
    <div class="w-full flex justify-center bg-fia-black py-8 lg:py-16 xl:py-24 3xl:py-32">
      <div
        class="font-nexa grid gap-2 lg:gap-8 text-center text-xl sm:text-3xl lg:text-5xl xl:text-7xl 3xl:text-8xl text-white">
        <div class="flex gap-3 lg:gap-6">
          <span>A</span>
          <span>Neighbor<span class="font-inter lg:-mx-1">'</span>s</span>
          <span class="text-fia-yellow">Independence</span>
        </div>
        <div class="flex justify-center gap-3 lg:gap-6">
          <span>Depends On</span>
          <span class="text-fia-yellow">You</span>
        </div>
      </div>
    </div>
    <div class="container w-full grid grid-cols-2 md:grid-cols-3 gap-16 py-8 lg:py-16 xl:py-24 3xl:py-32">
      <div class="col-span-2 flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
        <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-yellow">Our Mission</div>
        <div class="max-w-[700px] xl:max-w-[980px] text-xl/6 lg:text-2xl/8 xl:text-3xl/12 text-balance text-center">
          Faith in Action STNY is a coalition of congregations, civic groups,
          and individuals working together to serve older adults who need a little assistance
          to continue living independently. This support is provided at no charge to the
          recipient by caring volunteers, selflessly giving their time and compassion to others.
        </div>
      </div>
      <div class="hidden md:block">
        <div class="w-fit h-full mx-auto content-center image-container">
          <img src="~/assets/images/logos/Mission.png" alt="Faith In Action Mission" class="object-cover"
            loading="lazy" />
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-8 lg:py-16 xl:py-24 3xl:py-32 bg-fia-yellow">
      <div class="container flex flex-col gap-16 items-center">
        <div class="font-nexa text-xl sm:text-2xl lg:text-4xl xl:text-6xl text-center text-fia-black text-balance">
          We seek to provide volunteer services at no charge to older adults
          who live at home and are in need of assistance.
        </div>
      </div>
    </div>
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
