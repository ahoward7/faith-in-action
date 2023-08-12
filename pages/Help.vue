<template>
  <page-max-1920>
    <page-header>
      <fia-logo />
      <img src="~/assets/images/logos/fia-help-text.png" class="px-8 max-h-28">
    </page-header>
    <page-text-wrapper>
      <page-sub-header>Do you need help?</page-sub-header>
      <div class="w-full flex flex-col lg:flex-row gap-16">
        <page-text-wrapper class="basis-1/2">
          <page-text>
            Faith in Action provides services to individuals age 60 and over. Please submit the following information, and someone will be in contact with you, or simply call the Faith in Action office at (607)-324-1138 or (607)-936-0941.
          </page-text>
        </page-text-wrapper>
        <page-text-wrapper class="basis-1/2 items-center">
          <fia-button-page to="/contact">Contact Form</fia-button-page>
        </page-text-wrapper>
      </div>
    </page-text-wrapper>
  </page-max-1920>
</template>
