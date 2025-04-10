<template>
  <div>
    <PageHeader>
      <img src="~/assets/images/headers/Volunteer.png" class="max-w-20 sm:max-w-36">
      Volunteer Today
    </PageHeader>
    <PageMax1600>
      <PageTextWrapper>
        <PageText>
          In this critical time of increased need for connection, Faith in Action STNY, an interfaith volunteer
          caregiving program, is here for the Southern Teers area. Our trained volunteers offer free supportive services
          to the elderly.
        </PageText>
        <PageText>
          We are continuously seeking dependable volunteers who are willing to generously dedicate their time to those
          in need. Your cheerful contribution can make a significant difference in the lives of those we
          assist.
        </PageText>
        <PageSecondaryHeader>
          We are looking for volunteers who can help with the following:
        </PageSecondaryHeader>
        <PageText class="flex flex-col gap-2 ml-2 -mt-4">
          <FiaBullet>
            Light Housekeeping and Visiting: Requests for aid in light housekeeping and friendly visits are pouring in
            from the Corning/Painted Post area. Volunteer shortages in this region are hindering our assistance. If you're
            interested or know someone who could help, please reach out.
          </FiaBullet>
          <FiaBullet>
            Wednesday Drivers Needed: Wednesdays present challenges for finding drivers, especially in the southeastern
            county (Hornby, Caton, Lindley, Coopers Plains, Corning, Painted Post). Urgent appointments occasionally can't
            be rescheduled. Could you spare a few hours on Wednesdays to assist?
          </FiaBullet>
          <FiaBullet>
            Drivers Required in Canisteo/Greenwood and Wayland/Cohocton: Additional drivers are needed in
            Canisteo/Greenwood and Wayland/Cohocton. While grateful for dedicated volunteers making multiple trips weekly,
            we aim to avoid overwhelming them. Can you help by transporting someone to town once or twice a month?
          </FiaBullet>
          <FiaBullet>
            Tech-Savvy Volunteers for Elderly Care: Seeking individuals with technical skills to connect elderly care
            recipients with distant loved ones via video conferencing (Skype, Google Hangouts, FaceTime). Bring joy and
            connection to their lives.
          </FiaBullet>
          <FiaBullet>
            Ramp Building Apprentices: Our ramp building team seeks apprentice volunteers with strength. Currently focused
            on the western county (Arkport/Hornell/Canisteo), personnel availability is the only limitation. Join our team
            or learn from them to contribute across STNY. Contact us today!
          </FiaBullet>
        </PageText>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>
          Who We Serve
        </PageSubHeader>
        <PageText>
          Faith in Action STNY provides services to the elderly living with special needs of STNY, New York. We seek to
          help those not receiving similar assistance from other programs/social services. Our goal is to be a person's
          last option, in a most compassionate and caring way. When family members are unavailable, and when other
          options have been exhausted, Faith in Action can step in and give non-hands on assistance. Often, if we are
          unable to give the needed assistance, we can refer you to someone that can.
        </PageText>
        <PageSecondaryHeader>
          To get a better picture of who we serve, note the following statistics of our care recipients:
        </PageSecondaryHeader>
        <PageText class="flex flex-col gap-2 ml-2 -mt-4">
          <FiaBullet>
            85% Female
          </FiaBullet>
          <FiaBullet>
            15% Male
          </FiaBullet>
          <FiaBullet>
            33% between 60-74
          </FiaBullet>
          <FiaBullet>
            55% over age 75
          </FiaBullet>
          <FiaBullet>
            66% live alone
          </FiaBullet>
        </PageText>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>
          Where We Serve
        </PageSubHeader>
        <PageText>
          Faith in Action STNY provides services to the frail elderly living with special needs of the Southern Teers.
          We seek to help those not receiving similar assistance from other programs/social services. We provide these
          services within or near the Southern Teers, as long as we have volunteers in the general area.
        </PageText>
        <PageText>
          Communities that we have served are: Addison, Alfred, Almond, Arkport, Atlanta, Beaver Dams, Cameron,
          Canaseraga, Canisteo, Cohocton, Coopers Plains, Corning, Dansville, Fremont, Greenwood, Hartsville, Hornell,
          Jasper, Lindley, Painted Post, Troupsburg, Wayland, and Woodhull.
        </PageText>
        <PageText>
          If you know of someone in any of those areas either in need of our help, or willing to give a helping hand,
          encourage them to contact us.
        </PageText>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>Want to Volunteer?</PageSubHeader>
        <div class="flex flex-col md:flex-row gap-6">
          <PageText class="basis-2/3">
            Sign up now and fill out the contact form. We will be in touch to answer your questions
            and send you an application. We’ll review it, set up an orientation and background check, and get you
            started! As a Faith in Action volunteer, you will have a unique login to the RideScheduler program that
            gives you the freedom to schedule yourself for volunteer opportunities that fit your calendar,
            preferences, and location! We offer mileage reimbursement at the current IRS business rate.
          </PageText>
          <div class="basis-1/3 flex justify-center items-center">
            <FiaButton to="/contact">
              Get More Info
            </FiaButton>
          </div>
        </div>
      </PageTextWrapper>
      <PageTextWrapper>
        <PageSubHeader>Already a Volunteer?</PageSubHeader>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <PageText>
            Just click the RideScheduler link to login and report your hours or see what opportunities are available.
            Remember to check back, as they change frequently! Thank you for all you do!
          </PageText>
          <PageText class="flex justify-center">
            <nuxt-link to="https://fiasteuben.securescheduler.org/" class="border-2 border-fia-red hover:brightness-90 duration-300 rounded-md md:rounded-xl overflow-hidden">
              <img src="~/assets/images/partners/ride-scheduler-logo.png">
            </nuxt-link>
          </PageText>
        </div>
      </PageTextWrapper>
    </PageMax1600>
  </div>
</template>
