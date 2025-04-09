<template>
  <div class="max-w-[300px] lg:max-w-[400px] flex flex-col gap-2 lg:gap-4 items-center bg-white px-8 lg:px-16 py-6 lg:py-12 rounded-xl shadow-lg">
    <slot name="img" />
    <div class="h-16 lg:h-20 text-xl lg:text-3xl text-fia-yellow font-bold text-center content-center">
      <slot name="header" />
    </div>
    <span class="text-balance text-center text-gray-500">
      <slot name="text" />
    </span>
  </div>
</template>
