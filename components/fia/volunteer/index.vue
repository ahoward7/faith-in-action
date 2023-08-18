<template>
  <page-max-1920 class="bg-fia-yellow">
    <div class="max-w-1920 w-full grid grid-cols-1 2xl:grid-cols-2 pt-10 lg:pt-20 2xl:py-40 bg-fia-yellow">
      <fia-volunteer-section header="Learn about different ways you can serve the older generation." button="Sign Up" anchor="/volunteer" class="fl px-4 lg:px-20 pb-20 pt-10 2xl:pb-20 2xl:pt-0">
        <img src="~/assets/images/logos/fia-volunteer-text.png" class="max-h-24 2xl:max-height-28">
      </fia-volunteer-section>
      <fia-volunteer-section header="Help those in need by supporting us with a donation." button="Support" anchor="/" boxStyle="bg-fia-yellow 2xl:bg-fia-white" class="fr hidden 2xl:flex px-4 lg:px-20 py-20 2xl:pb-20 2xl:pt-0 bg-fia-white 2xl:bg-fia-yellow">
        <img src="~/assets/images/logos/fia-donate-text.png" class="max-h-24 2xl:max-height-28">
      </fia-volunteer-section>
    </div>
  </page-max-1920>
  <page-max-1920 class="block 2xl:hidden bg-fia-white">
    <fia-volunteer-section header="Help those in need by supporting us with a donation." button="Support" anchor="/" boxStyle="bg-fia-yellow 2xl:bg-fia-white" class="fr px-4 lg:px-20 py-20 2xl:pb-20 2xl:pt-0 bg-fia-white 2xl:bg-fia-yellow">
      <img src="~/assets/images/logos/fia-donate-text.png" class="max-h-24 2xl:max-height-28">
    </fia-volunteer-section>
  </page-max-1920>
</template>
