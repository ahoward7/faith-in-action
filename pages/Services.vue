<template>
  <page-max-1920>
    <page-header>
      <img src="~/assets/images/headers/Services.png" class="max-w-20 lg:max-w-48" />
      Services
    </page-header>
    <page-text-wrapper>
      <page-sub-header>
        Services We Offer
      </page-sub-header>
      <div class="w-full flex flex-col gap-40 lg:gap-20 py-10">
        <fia-services-section>
          <template #left-header>
            Handyman
          </template>
          <template #left>
            <fia-bullet>
              We can help with minor home repairs (doors that won't latch, loose step or railing, dripping faucets, etc.)
            </fia-bullet>
          </template>
          <template #right>
            <img src="~/assets/images/services/Handyman.png" class="max-w-96">
          </template>
        </fia-services-section>
        <fia-services-section flex-class="flex-col-reverse">
          <template #left>
            <img src="~/assets/images/services/Gardener.png" class="max-w-96">
          </template>
          <template #right-header>
            Yard Work
          </template>
          <template #right>
            <fia-bullet>
              Volunteer(s) can do seasonal yard work, but we do not offer weekly mowing.
            </fia-bullet>
          </template>
        </fia-services-section>
        <fia-services-section>
          <template #left-header>
            Friendly Visits
          </template>
          <template #left>
            <fia-bullet>
              A volunteer can come by for a visit to keep you company
            </fia-bullet>
          </template>
          <template #right>
            <img src="~/assets/images/services/FriendlyVisit.png" class="max-w-96">
          </template>
        </fia-services-section>
        <fia-services-section flex-class="flex-col-reverse">
          <template #right-header>
            In-Home Respite Care
          </template>
          <template #right>
            <fia-bullet>
              If the individual doesn't require hands-on assistance, e.g. toileting, feeding, etc., we can have a volunteer sit with them so the caregiver can go out.
            </fia-bullet>
          </template>
          <template #left>
            <img src="~/assets/images/services/InHomeCare.png" class="max-w-96">
          </template>
        </fia-services-section>
        <fia-services-section>
          <template #left-header>
            Telephone Reassurance
          </template>
          <template #left>
            <fia-bullet>
              A volunteer will give you a call on a regular basis to check in and visit.
            </fia-bullet>
          </template>
          <template #right>
            <img src="~/assets/images/services/PhoneCall.png" class="max-w-96">
          </template>
        </fia-services-section>
        <fia-services-section flex-class="flex-col-reverse">
          <template #left>
            <img src="~/assets/images/services/Housekeeping.png" class="max-w-96">
          </template>
          <template #right-header>
            Housekeeping
          </template>
          <template #right>
            <fia-bullet>
              A volunteer will come run the vacuum, help change the bedding, help with laundry, etc. This is “light housekeeping”, done periodically, not daily
            </fia-bullet>
          </template>
        </fia-services-section>
      </div>
    </page-text-wrapper>
  </page-max-1920>
</template>
