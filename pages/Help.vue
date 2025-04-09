<template>
  <div>
    <page-header>
      <img src="~/assets/images/headers/Help.png" class="max-w-28">
      Do You Need Help?
    </page-header>
    <page-max-1920 class="overflow-hidden">
      <page-text-wrapper>
        <div class="w-full flex flex-col lg:flex-row gap-16">
          <div class="basis-1/2">
            <page-text>
              Faith in Action provides services to individuals age 60 and over. Please submit the following information,
              and someone will be in contact with you, or simply call the Faith in Action office at (607)-324-1138 or
              (607)-936-0941.
            </page-text>
          </div>
          <div class="basis-1/2 flex justify-center items-center">
            <FiaButton to="/contact">
              Contact Form
            </FiaButton>
          </div>
        </div>
      </page-text-wrapper>
      <page-text-wrapper>
        <page-sub-header>
          Service Policy
        </page-sub-header>
        <fia-bullet :number="1">
          Our services are provided to the elderly living with special needs not already being served by other
          individuals
          or agencies. If a volunteer suspects they, or the Faith in Action program, are being taken advantage of by a
          recipient they should notify the FIA office.
        </fia-bullet>
        <fia-bullet :number="2">
          The services we provide do not include “activities of daily living,” or specifically the following tasks:
        </fia-bullet>
        <page-text class="ml-0 md:ml-36">
          <fia-bullet>
            Feeding
          </fia-bullet>
          <fia-bullet>
            Bathing
          </fia-bullet>
          <fia-bullet>
            Dressing
          </fia-bullet>
          <fia-bullet>
            Toileting or maintaining continence
          </fia-bullet>
          <fia-bullet>
            Ambulating
          </fia-bullet>
        </page-text>
        <fia-bullet :number="3">
          Our volunteers do not handle or manage medications, or any medical services. Volunteers also should not
          receive
          or relate information from physicians during appointments.
        </fia-bullet>
        <fia-bullet :number="4">
          Faith in Action will not provide transportation if driving conditions are unsafe. For example: icy roads,
          blizzard, blowing or drifting snow, high winds etc. We do not want to put the recipient or driver at risk. The
          driver and office staff will make this decision together.
        </fia-bullet>
        <fia-bullet :number="5">
          When there is a transport, recipients appreciate a call from the volunteer, either the night before or the
          morning of the appointment to verify information, i.e. pick up time, mobility, location of appointment, etc.
          The
          volunteer may learn of last minute changes. This is comforting to the recipient.
        </fia-bullet>
        <fia-bullet :number="6">
          When handling money for shopping, volunteers should either:
        </fia-bullet>
        <page-text class="ml-0 md:ml-36">
          <fia-bullet>
            After counting money with recipient, have the recipient place the money in an envelope with the amount
            written
            on the outside. After shopping, place receipts in the envelope and count the change back to them.
          </fia-bullet>
          <fia-bullet>
            Shop and pay for the items; give receipts to the recipient for reimbursement.
          </fia-bullet>
        </page-text>
        <fia-bullet :number="7">
          Faith in Action's services are provided free of charge. When recipients try to pay you, you may suggest
          sending
          a donation to Faith in Action. Please accept no cash from the recipient, except for reimbursement of items
          purchased.
        </fia-bullet>
      </page-text-wrapper>
    </page-max-1920>
  </div>
</template>
