<template>
  <div class="w-full flex justify-center bg-fia-yellow">
    <div class="max-w-1920 w-full grid grid-cols-1 2xl:grid-cols-2 p-10 lg:p-20 2xl:py-40">
      <div class="basis-1/2 flex flex-col gap-4 md:gap-10 lg:gap-20 items-center 2xl:mx-20 pb-20 md:pb-40 lg:pb-20">
        <div class="h-20 sm:h-32">
          <img src="~/assets/images/logos/fia-volunteer-text.png" class="max-h-24 lg:h-28">
        </div>
        <fia-volunteer-section>
          <template v-slot:header>Learn about different ways you can serve the older generation.</template>
          <template v-slot:button>Sign Up</template>
        </fia-volunteer-section>
      </div>
      <div class="basis-1/2 flex flex-col gap-4 md:gap-10 lg:gap-20 items-center 2xl:mx-20 pb-10 lg:pb-20">
        <div class="h-16 sm:h-28 md:h-32">
          <img src="~/assets/images/logos/fia-donate-text.png" class="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24">
        </div>
        <fia-volunteer-section>
          <template v-slot:header>Help those in need by supporting us with a donation.</template>
          <template v-slot:button>Support</template>
        </fia-volunteer-section>
      </div>
    </div>
  </div>
</template>
