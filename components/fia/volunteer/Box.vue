<template>
  <div class="max-w-lg 2xl:max-w-2xl grow flex flex-col items-center bg-fia-white gap-10 p-8 rounded-3xl">
    <div class="shrink-0 text rem max-w-1200 w-full text-3xl lg:text-4xl 2xl:text-5xl" >
      <slot name="header"/>
    </div>
    <div class="flex justify-center items-center 2xl:my-20">
      <fia-button-home>
        <slot name="button"/>
      </fia-button-home>
    </div>
  </div>
</template>
