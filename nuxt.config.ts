// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-nodemailer',
  ],
  fonts: {
    families: [
      {
        provider: 'local',
        name: 'Nexa',
        src: '/fonts/nexa-rust/NexaRustHandmade-Extended.otf',
      },
      {
        name: 'Inter',
        provider: 'google',
      },
    ],
  },
  nodemailer: {
    from: 'Faith In Action STNY Contact Form <faithinactionstny@gmail.com>',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'Faith in Action STNY',
    },
  },
  compatibilityDate: '2025-03-31',
})
