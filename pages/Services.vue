<template>
  <div>
    <page-header>
      <img src="~/assets/images/headers/Services.png" class="max-w-28" />
      Our Services
    </page-header>
    <page-max-1920>
      <page-text-wrapper>
        <div class="w-full flex flex-col gap-40 lg:gap-20 py-10">
          <fia-services-section>
            <template #right-header>
              Transportation
            </template>
            <template #right>
              We can provide rides to medical appointments, grocery shopping, and other errands.
            </template>
            <template #left>
              <img src="~/assets/images/services/Transportation.png" class="max-w-72">
            </template>
          </fia-services-section>
          <fia-services-section>
            <template #left-header>
              Handyman
            </template>
            <template #left>
              We can help with minor home repairs (doors that won't latch, loose step or railing, dripping faucets,
              etc.)
            </template>
            <template #right>
              <img src="~/assets/images/services/Handyman.png" class="max-w-72">
            </template>
          </fia-services-section>
          <fia-services-section flex-class="flex-col-reverse">
            <template #left>
              <img src="~/assets/images/services/Gardener.png" class="max-w-72">
            </template>
            <template #right-header>
              Yard Work
            </template>
            <template #right>
              Volunteer(s) can do seasonal yard work, but we do not offer weekly mowing.
            </template>
          </fia-services-section>
          <fia-services-section>
            <template #left-header>
              Friendly Visits
            </template>
            <template #left>
              A volunteer can come by for a visit to keep you company
            </template>
            <template #right>
              <img src="~/assets/images/services/FriendlyVisit.png" class="max-w-72">
            </template>
          </fia-services-section>
          <fia-services-section flex-class="flex-col-reverse">
            <template #right-header>
              In-Home Respite Care
            </template>
            <template #right>
              If the individual doesn't require hands-on assistance, e.g. toileting, feeding, etc., we can have a
              volunteer sit with them so the caregiver can go out.
            </template>
            <template #left>
              <img src="~/assets/images/services/InHomeCare.png" class="max-w-72">
            </template>
          </fia-services-section>
          <fia-services-section>
            <template #left-header>
              Telephone Reassurance
            </template>
            <template #left>
              A volunteer will give you a call on a regular basis to check in and visit.
            </template>
            <template #right>
              <img src="~/assets/images/services/PhoneCall.png" class="max-w-72">
            </template>
          </fia-services-section>
          <fia-services-section flex-class="flex-col-reverse">
            <template #left>
              <img src="~/assets/images/services/Housekeeping.png" class="max-w-72">
            </template>
            <template #right-header>
              Housekeeping
            </template>
            <template #right>
              A volunteer will come run the vacuum, help change the bedding, help with laundry, etc. This is “light
              housekeeping”, done periodically, not daily
            </template>
          </fia-services-section>
        </div>
      </page-text-wrapper>
    </page-max-1920>
  </div>
</template>
