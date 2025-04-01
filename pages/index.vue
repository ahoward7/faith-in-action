<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-32 my-8 lg:my-16 xl:my-40">
      <fia-logo class="h-40 lg:h-80 xl:h-[34vh] shimmer" alt="FIA Logo" />
      <img src="~/assets/images/logos/fia-text-transparent.png" class="h-20 lg:h-40 xl:h-60" alt="Faith in Action Text Logo">
    </div>
    <div class="w-full flex justify-center bg-fia-black py-8 lg py-8:lg:py-16 xl:py-32">
      <div class="font-nexa grid gap-2 lg:gap-8 text-center text-xl sm:text-3xl lg:text-6xl 2xl:text-8xl text-white">
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
    <div class="w-full flex justify-center py-8 lg:py-16 xl:py-32">
      <div class="container flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
        <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-yellow">Our Mission</div>
        <div class="max-w-[700px] xl:max-w-[980px] text-xl/6 lg:text-2xl/8 xl:text-3xl/12 text-balance text-center">
          Faith in Action STNY is a coalition of congregations, civic groups, 
          and individuals working together to serve older adults who need a little assistance
          to continue living independently. This support is provided at no charge to the 
          recipient by caring volunteers, selflessly giving their time and compassion to others.
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-8 lg:py-16 xl:py-32 bg-fia-yellow">
      <div class="container flex flex-col gap-16 items-center">
        <div class="font-nexa text-xl sm:text-2xl lg:text-4xl xl:text-6xl text-center text-fia-black text-balance">
          We seek to provide volunteer services at no charge to older adults
          who live at home and are in need of assistance.
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-8 lg:py-16 xl:py-32">
      <div class="container flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
        <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-yellow">Services We Offer</div>
        <div class="max-w-[980px] grid lg:grid-cols-2 gap-8 lg:gap-16 text-xl/6 lg:text-2xl/8 xl:text-3xl/12">
          <div class="flex flex-col gap-4">
            <fia-services-bullet>Transportation</fia-services-bullet>
            <fia-services-bullet>Friendly Visits</fia-services-bullet>
            <fia-services-bullet>Shopping</fia-services-bullet>
            <fia-services-bullet>Home Repairs</fia-services-bullet>
            <fia-services-bullet>Housekeeping</fia-services-bullet>
          </div>
          <div class="flex justify-center items-center">
            <fia-button-home to="/services" aria-label="Learn more about our services">Learn More</fia-button-home>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col lg:flex-row justify-evenly gap-12 lg:gap-0 py-8 lg:py-16 xl:py-32 bg-fia-yellow">
      <div class="flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
        <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-black">Volunteer</div>
        <div class="flex flex-col gap-8 items-center bg-fia-white px-4 pt-4 pb-8 rounded-xl">
          <div class="w-[300px] xl:w-[500px] text-center max-w-[980px] text-xl/6 lg:text-2xl/8 xl:text-3xl/12 text-balance">
            Learn about different ways you can serve the older generation.
          </div>
          <fia-button-home to="/volunteer" aria-label="Sign up to volunteer">
            Sign Up
          </fia-button-home>
        </div>
      </div>
      <div class="flex flex-col gap-6 lg:gap-12 xl:gap-24 items-center">
        <div class="font-nexa text-4xl lg:text-6xl xl:text-8xl text-fia-black">Donate</div>
        <div class="flex flex-col gap-8 items-center bg-fia-white px-4 pt-4 pb-8 rounded-xl">
          <div class="w-[300px] xl:w-[500px] text-center max-w-[980px] text-xl/6 lg:text-2xl/8 xl:text-3xl/12 text-balance">
            Help those in need by supporting us with a donation.
          </div>
          <fia-button-home target="_blank" to="https://www.paypal.com/donate/?hosted_button_id=PLDCK2H2BJ7U2" aria-label="Donate to our cause">
            Donate
          </fia-button-home>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 80%;
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
