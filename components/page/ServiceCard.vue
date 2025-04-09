<template>
  <div class="flex flex-col gap-4 items-center bg-white px-16 py-12 rounded-xl shadow-lg">
    <slot name="img" />
    <div class="h-20 text-3xl text-fia-yellow font-bold text-center content-center">
      <slot name="header" />
    </div>
    <span class="text-balance text-center text-gray-500">
      <slot name="text" />
    </span>
  </div>
</template>
