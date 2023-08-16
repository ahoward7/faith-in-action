// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    ['nuxt-mail', {
      message: {
        to: 'avery.d.howard@gmail.com',
      },
      smtp: {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "522c0e974734a0",
          pass: "582a36586966c8"
        }
      },
    }],
  ],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Faith In Action STNY',
    }
  },
})
