<template>
  <div class="max-w-2xl grow flex flex-col items-center bg-fia-white p-8 rounded-3xl">
    <div class="h-1/2 shrink-0 text rem max-w-1200 w-full text-3xl lg:text-4xl 2xl:text-5xl" >
      <slot name="header"/>
    </div>
    <div class="flex justify-center items-center my-10 2xl:my-20 h-1/2">
      <fia-button-home>
        <slot name="button"/>
      </fia-button-home>
    </div>
  </div>
</template>
