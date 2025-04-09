<template>
  <div>
    <PageHeader>
      <img src="~/assets/images/headers/Help.png" class="max-w-28">
      Do You Need Help?
    </PageHeader>
    <PageMax1600 class="overflow-hidden">
      <PageTextWrapper>
        <div class="w-full flex flex-col lg:flex-row gap-16">
          <div class="basis-1/2">
            <PageText>
              Faith in Action provides services to individuals age 60 and over. Please submit the following information,
              and someone will be in contact with you, or simply call the Faith in Action office at (607)-324-1138 or
              (607)-936-0941.
            </PageText>
          </div>
          <div class="basis-1/2 flex justify-center items-center">
            <FiaButton to="/contact">
              Contact Form
            </FiaButton>
          </div>
        </div>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>
          Service Policy
        </PageSubHeader>
        <FiaBullet :number="1">
          Our services are provided to the elderly living with special needs not already being served by other
          individuals
          or agencies. If a volunteer suspects they, or the Faith in Action program, are being taken advantage of by a
          recipient they should notify the FIA office.
        </FiaBullet>
        <FiaBullet :number="2">
          The services we provide do not include “activities of daily living,” or specifically the following tasks:
        </FiaBullet>
        <PageText class="ml-0 md:ml-36">
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
        <FiaBullet :number="3">
          Our volunteers do not handle or manage medications, or any medical services. Volunteers also should not
          receive
          or relate information from physicians during appointments.
        </FiaBullet>
        <FiaBullet :number="4">
          Faith in Action will not provide transportation if driving conditions are unsafe. For example: icy roads,
          blizzard, blowing or drifting snow, high winds etc. We do not want to put the recipient or driver at risk. The
          driver and office staff will make this decision together.
        </FiaBullet>
        <FiaBullet :number="5">
          When there is a transport, recipients appreciate a call from the volunteer, either the night before or the
          morning of the appointment to verify information, i.e. pick up time, mobility, location of appointment, etc.
          The
          volunteer may learn of last minute changes. This is comforting to the recipient.
        </FiaBullet>
        <FiaBullet :number="6">
          When handling money for shopping, volunteers should either:
        </FiaBullet>
        <PageText class="ml-0 md:ml-36">
          <FiaBullet>
            After counting money with recipient, have the recipient place the money in an envelope with the amount
            written
            on the outside. After shopping, place receipts in the envelope and count the change back to them.
          </FiaBullet>
          <FiaBullet>
            Shop and pay for the items; give receipts to the recipient for reimbursement.
          </FiaBullet>
        </PageText>
        <FiaBullet :number="7">
          Faith in Action's services are provided free of charge. When recipients try to pay you, you may suggest
          sending
          a donation to Faith in Action. Please accept no cash from the recipient, except for reimbursement of items
          purchased.
        </FiaBullet>
      </PageTextWrapper>
    </PageMax1600>
  </div>
</template>
