<template>
  <div>
    <div class="flex flex-col">
      <PageMax1600 class="my-4 md:my-8 xl:my-16">
        <div class="grid xl:grid-cols-2 gap-8 xs:gap-16 xl:gap-0">
          <div class="flex flex-col gap-8 justify-center order-2 xl:order-1">
            <div class="font-nexa text-2xl xs:text-3xl md:text-5xl text-fia-black text-center xl:text-left">
              <div class="whitespace-nowrap">
                <span>A</span>
                <span> Neighbor<span class="font-inter lg:-mx-1">'</span>s </span>
                <PageYellowText>Independence </PageYellowText>
              </div>
              <div>
                <span>Depends On</span>
                <PageYellowText> You</PageYellowText>
              </div>
            </div>
            <div class="max-w-[700px] md:text-xl text-center xl:text-left text-balance leading-8">
              <p>
                Faith in Action STNY is a coalition of congregations, civic groups,
                and individuals working together to serve older adults who need a little assistance
                to continue living independently.
              </p>
              <p class="mt-4">
                This support is provided at <PageYellowText class="font-bold">
                  no charge
                </PageYellowText> to the
                recipient by caring volunteers, selflessly giving their time and compassion to others.
                We seek to provide <PageYellowText class="font-bold">
                  volunteer services
                </PageYellowText> to older adults
                who live at home and are in need of assistance.
              </p>
            </div>
          </div>
          <div class="flex xl:flex-col items-center justify-center gap-4 xs:gap-8 order-1 xl:order-2">
            <fia-logo class="w-24 xs:w-40 md:w-64 shimmer" alt="FIA Logo" />
            <img
              src="~/assets/images/logos/fia-text-transparent.png" class="w-40 xs:w-60 md:w-[400px]"
              alt="Faith in Action Text Logo"
            >
          </div>
        </div>
      </PageMax1600>
      <PageMax1600 class="border-y-2 border-fia-yellow/20 bg-gradient-to-br from-fia-yellow/10 to-fia-red/10 my-4 md:my-8 xl:my-16 py-8 xl:py-16">
        <div class="font-nexa text-4xl xl:text-5xl text-center text-fia-yellow mb-8 xl:mb-16">
          Our Services
        </div>
        <div class="max-w-[1200px] grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <PageServiceCard>
            <template #img>
              <img src="~/assets/images/services/Transportation.png" class="max-w-40">
            </template>
            <template #header>
              Transportation
            </template>
            <template #text>
              We can provide rides to medical appointments, grocery shopping, and other errands.
            </template>
          </PageServiceCard>

          <PageServiceCard>
            <template #img>
              <img src="~/assets/images/services/Handyman.png" class="max-w-40">
            </template>
            <template #header>
              Handyman
            </template>
            <template #text>
              We can help with minor home repairs (doors that won't latch, loose step or railing, dripping faucets, etc.)
            </template>
          </PageServiceCard>

          <PageServiceCard>
            <template #img>
              <img src="~/assets/images/services/Gardener.png" class="max-w-40">
            </template>
            <template #header>
              Yard Work
            </template>
            <template #text>
              Volunteers can do seasonal yard work, but we do not offer weekly mowing.
            </template>
          </PageServiceCard>

          <PageServiceCard>
            <template #img>
              <img src="~/assets/images/services/FriendlyVisit.png" class="max-w-40">
            </template>
            <template #header>
              Friendly Visits & In<span class="font-inter">-</span>Home Care
            </template>
            <template #text>
              A volunteer can visit to keep you company or sit with someone who doesn’t need hands-on help (e.g., toileting, feeding) so the caregiver can take a break.
            </template>
          </PageServiceCard>

          <PageServiceCard>
            <template #img>
              <img src="~/assets/images/services/PhoneCall.png" class="max-w-40">
            </template>
            <template #header>
              Telephone Reassurance
            </template>
            <template #text>
              A volunteer will give you a call on a regular basis to check in and visit.
            </template>
          </PageServiceCard>

          <PageServiceCard>
            <template #img>
              <img src="~/assets/images/services/Housekeeping.png" class="max-w-40">
            </template>
            <template #header>
              Housekeeping
            </template>
            <template #text>
              A volunteer will come run the vacuum, help change the bedding, help with laundry, etc. This is “light housekeeping”, done periodically, not daily.
            </template>
          </PageServiceCard>
        </div>
      </PageMax1600>
      <PageMax1600 class="my-4 md:my-8 xl:my-16">
        <div class="w-full grid md:grid-cols-2 gap-8 xl:gap-16">
          <div class="flex flex-col gap-4 xl:gap-8 items-center">
            <div class="font-nexa text-4xl xl:text-5xl text-center text-fia-yellow">
              Want To Help?
            </div>
            <div class="flex flex-col gap-4 xl:gap-8 items-center bg-fia-white px-4 pt-4 pb-8 rounded-xl">
              <span class="max-w-[500px] text-balance text-center xl:text-xl">
                We're always looking for dependable volunteers to generously share their time and make a meaningful impact.
              </span>
              <FiaButton to="/volunteer" aria-label="Sign up to volunteer">
                Get Involved Today
              </FiaButton>
            </div>
          </div>
          <div class="flex flex-col gap-4 xl:gap-8 items-center">
            <div class="font-nexa text-4xl xl:text-5xl text-center text-fia-yellow">
              Do You Need Help?
            </div>
            <div class="max-w-[500px] flex flex-col gap-4 xl:gap-8 items-center bg-fia-white px-4 pt-4 pb-8 rounded-xl">
              <span class="text-balance text-center xl:text-xl">
                If you or a loved one could use some assistance, our caring volunteers are here to offer free support and companionship.
              </span>
              <FiaButton to="/help" aria-label="Find Assistance">
                Find A Helping Hand
              </FiaButton>
            </div>
          </div>
        </div>
      </PageMax1600>
      <PageMax1600 class="mt-8 xl:mt-16 py-8 xl:py-16 border-y-2 border-fia-yellow/20 bg-gradient-to-bl from-fia-yellow/10 to-fia-red/10">
        <div class="font-nexa text-4xl xl:text-5xl text-center text-fia-yellow mb-8 xl:mb-16">
          Our Partners
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 md:gap-16 2xl:gap-24">
          <FiaResource url="https://nvcnetwork.org/">
            <img src="~/assets/images/partners/nvcn-logo.jpg" class="w-28 sm:w-40 lg:w-60">
          </FiaResource>
          <FiaResource url="https://www.unitedway.org/">
            <img src="~/assets/images/partners/UW.png" class="w-28 sm:w-40 lg:w-60">
          </FiaResource>
          <FiaResource url="https://www.chemungcountyny.gov" img-class="rounded-full">
            <img src="~/assets/images/partners/ChemungCounty.png" class="w-28 sm:w-40 lg:w-60">
          </FiaResource>
          <FiaResource url="https://www.steubencountyny.gov" img-class="w-28 sm:w-40 lg:w-60 rounded-full overflow-hidden">
            <img src="~/assets/images/partners/SteubenCounty.png" class="w-28 sm:w-40 lg:w-60 scale-[1.1]">
          </FiaResource>
          <FiaResource url="https://www.ihsnet.org">
            <img src="~/assets/images/partners/IHS.png" class="w-28 sm:w-40 lg:w-60">
          </FiaResource>
          <FiaResource url="https://www.nyconnects.ny.gov/services/medical-transportation">
            <img src="~/assets/images/partners/NYS.png" class="w-28 sm:w-40 lg:w-60">
          </FiaResource>
        </div>
      </PageMax1600>
    </div>
  </div>
</template>

<style scoped>
.shimmer {
  color: grey;
  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/350% 100%;
  animation: shimmer 5s .5s infinite, rotate 1.5s .8s;
}

@keyframes shimmer {
  50% {
    mask-position: left;
  }

  100% {
    mask-position: left;
  }
}

@keyframes rotate {
  30% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
