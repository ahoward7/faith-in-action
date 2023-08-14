<template>
  <div class="w-full flex gap-20">
    <div class="basis-1/2 flex flex-col items-center justify-center">
      <div class="w-full text-5xl text-fia-yellow font-bold mb-4">
        <slot name="left-header" />
      </div>
      <slot name="left"/>
    </div>
    <div class="basis-1/2 flex flex-col items-center justify-center">
      <div class="w-full text-5xl text-fia-yellow font-bold mb-4">
        <slot name="right-header" />
      </div>
      <slot name="right"/>
    </div>
  </div>
</template>
