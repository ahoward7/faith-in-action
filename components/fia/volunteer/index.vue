<template>
  <fia-section class="bg-fia-yellow">
    <div class="max-w-1920 w-full grid grid-cols-1 2xl:grid-cols-2 bg-fia-yellow">
      <fia-volunteer-section header="Learn about different ways you can serve the older generation." button="Sign Up" anchor="/volunteer" class="fl">
        <img src="~/assets/images/logos/fia-volunteer-text.png" class="max-h-16">
      </fia-volunteer-section>
      <fia-volunteer-section header="Help those in need by supporting us with a donation." button="Support" anchor="/" boxStyle="bg-fia-yellow 2xl:bg-fia-white" class="fr hidden 2xl:flex bg-fia-white 2xl:bg-fia-yellow">
        <img src="~/assets/images/logos/fia-donate-text.png" class="max-h-16">
      </fia-volunteer-section>
    </div>
  </fia-section>
  <fia-section class="block 2xl:hidden bg-fia-white">
    <fia-volunteer-section header="Help those in need by supporting us with a donation." button="Support" anchor="/" boxStyle="bg-fia-yellow 2xl:bg-fia-white" class="fr bg-fia-white 2xl:bg-fia-yellow">
      <img src="~/assets/images/logos/fia-donate-text.png" class="max-h-16">
    </fia-volunteer-section>
  </fia-section>
</template>
