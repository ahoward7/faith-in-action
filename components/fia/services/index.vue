<template>
  <page-max-1920 class="flex p-10 lg:p-20 2xl:py-40">
    <div class="flex justify-center pb-10 lg:pb-20">
      <img src="~/assets/images/logos/fia-services-text.png" class="fr max-h-36">
    </div>
    <div class="w-full flex justify-center">
      <div class="w-full max-w-900 2xl:max-w-1200">
        <fia-text class="fl flex flex-col md:flex-row bg-fia-yellow">
          <div class="flex justify-center md:justify-start pb-16 md:pb-0">
            <div class="flex flex-col gap-4">
              <fia-services-bullet>Transportation</fia-services-bullet>
              <fia-services-bullet>Friendly Visits</fia-services-bullet>
              <fia-services-bullet>Shopping</fia-services-bullet>
              <fia-services-bullet>Home Repairs</fia-services-bullet>
              <fia-services-bullet>Housekeeping</fia-services-bullet>
            </div>
          </div>
          <div class="grow flex justify-center items-center">
            <fia-button-home to="/services">Learn More</fia-button-home>
          </div>
        </fia-text>
      </div>
    </div>
  </page-max-1920>
</template>
