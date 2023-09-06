<template>
  <page-max-1920>
    <page-header>
      <div>
        <img src="~/assets/images/headers/fia-services.png" class="px-4 xl:px-8 max-h-86">
      </div>
      <div>
        <img src="~/assets/images/logos/fia-services-shortened-text.png" class="px-4 xl:px-8 max-h-32">
      </div>
    </page-header>
    <page-text-wrapper>
      <page-sub-header>
        Services We Offer
      </page-sub-header>
      <div class="w-full flex flex-col gap-20 py-10">
        <fia-services-section>
          <template v-slot:left-header>
            Shopping
          </template>
          <template v-slot:left>
            <fia-bullet>
              Volunteers will take you to the store(s) and provide assistance if requested
            </fia-bullet>
            <fia-bullet>
              A volunteer can pick up your grocery list and shop for you, if you're unable to do it
            </fia-bullet>
          </template>
          <template v-slot:right>
            <img src="~/assets/images/services/fia-cart.png" class="max-w-92">
          </template>
        </fia-services-section>
        <fia-services-section class="py-10" flexClass="flex-col-reverse">
          <template v-slot:left>
            <img src="~/assets/images/services/fia-bus.png" class="max-w-92">
          </template>
          <template v-slot:right-header>
            Transportation
          </template>
          <template v-slot:right>
            <fia-bullet>
              Medical, Dental, Therapy, Social, Errands, Hairdresser, Laundromat
            </fia-bullet>
            <fia-bullet>
              Volunteers pick you up at your door and return you home
            </fia-bullet>
          </template>
        </fia-services-section>
        <fia-services-section>
          <template v-slot:left-header>
            Handyman
          </template>
          <template v-slot:left>
            <fia-bullet>
              We can help with minor home repairs (doors that won't latch, loose step or railing, dripping faucets, etc.)
            </fia-bullet>
          </template>
          <template v-slot:right>
            <img src="~/assets/images/services/fia-wrench.png" class="max-w-92">
          </template>
        </fia-services-section>
        <fia-services-section flexClass="flex-col-reverse">
          <template v-slot:left>
            <img src="~/assets/images/services/fia-rake.png" class="max-w-92">
          </template>
          <template v-slot:right-header>
            Yard Work
          </template>
          <template v-slot:right>
            <fia-bullet>
              Volunteer(s) can do seasonal yard work, but we do not offer weekly mowing.
            </fia-bullet>
          </template>
        </fia-services-section>
        <fia-services-section>
          <template v-slot:left-header>
            Friendly Visits
          </template>
          <template v-slot:left>
            <fia-bullet>
              A volunteer can come by for a visit to keep you company
            </fia-bullet>
          </template>
          <template v-slot:right>
            <img src="~/assets/images/services/fia-visit.png" class="max-w-92">
          </template>
        </fia-services-section>
        <fia-services-section flexClass="flex-col-reverse">
          <template v-slot:right-header>
            In-Home Respite Care
          </template>
          <template v-slot:right>
            <fia-bullet>
              Our “Give Them A Break” caregiver respite program allows the caregiver of a loved one with dementia/Alzheimer's disease an opportunity to get some time for themselves.
            </fia-bullet>
            <fia-bullet>
              Bring your loved one to the program, where trained volunteers play games, do crafts, visit, have lunch and snack from 10AM - 2:00PM every Thursday.
            </fia-bullet>
            <fia-bullet>
              If the individual doesn't require hands-on assistance, e.g. toileting, feeding, etc., we can have a volunteer sit with them so the caregiver can go out.
            </fia-bullet>
          </template>
          <template v-slot:left>
            <img src="~/assets/images/services/fia-care.png" class="max-w-92">
          </template>
        </fia-services-section>
        <fia-services-section>
          <template v-slot:left-header>
            Telephone Reassurance
          </template>
          <template v-slot:left>
            <fia-bullet>
              A volunteer will give you a call on a regular basis to check in and visit.
            </fia-bullet>
          </template>
          <template v-slot:right>
            <img src="~/assets/images/services/fia-phone.png" class="max-w-92 max-h-130">
          </template>
        </fia-services-section>
        <fia-services-section flexClass="flex-col-reverse">
          <template v-slot:left>
            <img src="~/assets/images/services/fia-vacuum.png" class="max-w-92">
          </template>
          <template v-slot:right-header>
            Housekeeping
          </template>
          <template v-slot:right>
            <fia-bullet>
              A volunteer will come run the vacuum, help change the bedding, help with laundry, etc. This is “light housekeeping”, done periodically, not daily
            </fia-bullet>
          </template>
        </fia-services-section>
      </div>
    </page-text-wrapper>
  </page-max-1920>
</template>
