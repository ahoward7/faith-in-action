<template>
  <div>
    <PageHeader>
      <img src="~/assets/images/headers/Help.png" class="max-w-16 sm:max-w-28">
      Do You Need Help?
    </PageHeader>
    <PageMax1600 class="overflow-hidden">
      <PageTextWrapper>
        <div class="w-full flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16">
          <PageTextWrapper class="basis-1/2">
            <PageText>
              Faith in Action provides services to individuals age 60 and over. If you or someone you know needs assistance, we're here to help.
              We also welcome any questions about our service policy. If you wish to contact us, please click on the
              <PageRedText class="font-bold">
                Contact Us
              </PageRedText> button or
              simply call the Faith in Action office at
              <PageRedText class="font-bold">
                (607)-324-1138
              </PageRedText> or <PageRedText class="font-bold">
                (607)-936-0941
              </PageRedText>.
            </PageText>
            <PageText>
              Our caring team is ready to assist you or your loved ones with transportation, shopping, friendly visits, and more.
            </PageText>
          </PageTextWrapper>
          <div class="basis-1/2 flex justify-center items-center">
            <FiaButton to="/contact">
              Contact Form
            </FiaButton>
          </div>
        </div>
      </PageTextWrapper>
      <PageTextWrapper class="bg-fia-white p-4 md:p-8 lg:p-16 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)] mb-32 pb-24 mt-8">
        <PageSubHeader class="mb-4">
          Service Policy
        </PageSubHeader>
        <FiaPolicySection :number="1" class="border-b border-fia-yellow/50 pb-8">
          <template #header>
            <FiaPolicyHeader>Eligibility For Services</FiaPolicyHeader>
          </template>
          Our services are provided to the elderly living with special needs not already being served by other
          individuals or agencies. If a volunteer suspects they, or the Faith in Action program, are being taken advantage of by a
          recipient they should notify the FIA office.
        </FiaPolicySection>
        <FiaPolicySection :number="2" class="border-b border-fia-yellow/50 pb-8">
          <template #header>
            <FiaPolicyHeader>Service Limitations</FiaPolicyHeader>
          </template>
          The services we provide do not include “activities of daily living,” or specifically the following tasks:
          <PageText class="ml-2">
            <FiaBullet>
              Feeding
            </FiaBullet>
            <FiaBullet>
              Bathing
            </FiaBullet>
            <FiaBullet>
              Dressing
            </FiaBullet>
            <FiaBullet>
              Toileting or maintaining continence
            </FiaBullet>
            <FiaBullet>
              Ambulating
            </FiaBullet>
          </PageText>
        </FiaPolicySection>
        <FiaPolicySection :number="3" class="border-b border-fia-yellow/50 pb-8">
          <template #header>
            <FiaPolicyHeader>Medical Service Restrictions</FiaPolicyHeader>
          </template>
          Our volunteers do not handle or manage medications, or any medical services. Volunteers also should not
          receive
          or relate information from physicians during appointments.
        </FiaPolicySection>
        <FiaPolicySection :number="4" class="border-b border-fia-yellow/50 pb-8">
          <template #header>
            <FiaPolicyHeader>Transportation Safety</FiaPolicyHeader>
          </template>
          Faith in Action will not provide transportation if driving conditions are unsafe. For example: icy roads,
          blizzard, blowing or drifting snow, high winds etc. We do not want to put the recipient or driver at risk. The
          driver and office staff will make this decision together.
        </FiaPolicySection>
        <FiaPolicySection :number="5" class="border-b border-fia-yellow/50 pb-8">
          <template #header>
            <FiaPolicyHeader>Appointment Communication</FiaPolicyHeader>
          </template>
          When there is a transport, recipients appreciate a call from the volunteer, either the night before or the
          morning of the appointment to verify information, i.e. pick up time, mobility, location of appointment, etc.
          The
          volunteer may learn of last minute changes. This is comforting to the recipient.
        </FiaPolicySection>
        <FiaPolicySection :number="6" class="border-b border-fia-yellow/50 pb-8">
          <template #header>
            <FiaPolicyHeader>Handling Money For Shopping</FiaPolicyHeader>
          </template>
          When handling money for shopping, volunteers should either:
          <PageText class="ml-2">
            <FiaBullet>
              After counting money with recipient, have the recipient place the money in an envelope with the amount
              written
              on the outside. After shopping, place receipts in the envelope and count the change back to them.
            </FiaBullet>
            <FiaBullet>
              Shop and pay for the items; give receipts to the recipient for reimbursement.
            </FiaBullet>
          </PageText>
        </FiaPolicySection>
        <FiaPolicySection :number="7">
          <template #header>
            <FiaPolicyHeader>No-Fee Policy</FiaPolicyHeader>
          </template>
          Faith in Action's services are provided free of charge. When recipients try to pay you, you may suggest
          sending
          a donation to Faith in Action. Please accept no cash from the recipient, except for reimbursement of items
          purchased.
        </FiaPolicySection>
      </PageTextWrapper>
    </PageMax1600>
  </div>
</template>
